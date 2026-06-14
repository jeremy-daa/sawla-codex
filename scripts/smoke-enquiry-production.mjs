import http from 'node:http'
import { spawn } from 'node:child_process'
import { randomBytes } from 'node:crypto'

const mockPort = 3211
const appPort = 3212
const counters = new Map()
const stored = []
const emails = []

function json(response, status, body) {
  response.writeHead(status, { 'content-type': 'application/json' })
  response.end(JSON.stringify(body))
}

const mock = http.createServer(async (request, response) => {
  let raw = ''
  for await (const chunk of request) raw += chunk
  if (request.url === '/emails') {
    const body = JSON.parse(raw || '{}')
    emails.push(body)
    return json(response, 200, { id: `email_${emails.length}` })
  }
  if (request.url === '/redis') {
    const command = JSON.parse(raw || '[]')
    if (command[0] === 'EVAL') {
      const key = command[3]
      const count = (counters.get(key) || 0) + 1
      counters.set(key, count)
      return json(response, 200, { result: [count, 900] })
    }
    if (command[0] === 'SETEX') {
      stored.push(command)
      return json(response, 200, { result: 'OK' })
    }
    return json(response, 400, { error: 'unsupported mock command' })
  }
  return json(response, 404, { error: 'not found' })
})

await new Promise(resolve => mock.listen(mockPort, '127.0.0.1', resolve))

const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(appPort)], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    NODE_ENV: 'production',
    RESEND_API_KEY: 're_test_key',
    RESEND_API_URL: `http://127.0.0.1:${mockPort}/emails`,
    ENQUIRY_FROM_EMAIL: 'Sawla Tours <enquiries@sawlatours.com>',
    ENQUIRY_TO_EMAIL: 'explore@sawlatours.com',
    ENQUIRY_DELIVERY_MODE: 'email',
    UPSTASH_REDIS_REST_URL: `http://127.0.0.1:${mockPort}/redis`,
    UPSTASH_REDIS_REST_TOKEN: 'test-token',
    ENQUIRY_STORAGE_KEY: randomBytes(32).toString('base64'),
    ENQUIRY_RETENTION_DAYS: '30',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
})

let output = ''
child.stdout.on('data', chunk => { output += chunk })
child.stderr.on('data', chunk => { output += chunk })

async function waitForApp() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${appPort}/enquire`)
      if (response.ok) return
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250))
  }
  throw new Error(`Next.js test server did not become ready.\n${output}`)
}

try {
  await waitForApp()
  const payload = {
    name: 'Production Smoke Test',
    email: 'traveler@example.com',
    contactPreference: 'Email',
    travelDates: 'October 2026',
    dateFlexibility: 'Flexible within the month',
    duration: '8–12 days',
    adults: 2,
    children: 0,
    interests: ['Historic Ethiopia and living heritage'],
    travelStyle: 'Boutique and character-led',
    pace: 'Balanced',
    budget: 'Prefer to discuss',
    message: 'We are planning a private Ethiopia journey and would like thoughtful route advice.',
    source: 'Google search',
    privacyAccepted: true,
    formStartedAt: Date.now() - 5000,
    formVersion: 'v17-smoke',
    pageContext: 'Production delivery smoke test',
  }
  const response = await fetch(`http://127.0.0.1:${appPort}/api/enquire`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': '198.51.100.77',
      'sec-fetch-site': 'same-origin',
    },
    body: JSON.stringify(payload),
  })
  const result = await response.json()
  if (response.status !== 200 || !result.success || !/^ST-\d{8}-[A-Z0-9]{8}$/.test(result.reference || '')) {
    throw new Error(`Expected successful production delivery, received ${response.status}: ${JSON.stringify(result)}`)
  }
  for (let attempt = 2; attempt <= 5; attempt += 1) {
    const repeat = await fetch(`http://127.0.0.1:${appPort}/api/enquire`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': '198.51.100.77', 'sec-fetch-site': 'same-origin' },
      body: JSON.stringify({ ...payload, formStartedAt: Date.now() - 5000, message: `${payload.message} Submission ${attempt}.` }),
    })
    if (repeat.status !== 200) throw new Error(`Expected request ${attempt} to pass, received ${repeat.status}`)
  }
  const blocked = await fetch(`http://127.0.0.1:${appPort}/api/enquire`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': '198.51.100.77', 'sec-fetch-site': 'same-origin' },
    body: JSON.stringify({ ...payload, formStartedAt: Date.now() - 5000, message: `${payload.message} Rate-limit request.` }),
  })
  if (blocked.status !== 429) throw new Error(`Expected sixth request to be rate-limited, received ${blocked.status}`)
  if (emails.length !== 10) throw new Error(`Expected team and traveler emails for five accepted requests, received ${emails.length}`)
  if (stored.length < 10) throw new Error(`Expected encrypted pending/delivered recovery records, received ${stored.length}`)
  if (!stored.every(command => typeof command[3] === 'string' && !command[3].includes('traveler@example.com'))) {
    throw new Error('Recovery payload was not encrypted before storage')
  }
  console.log('Production enquiry smoke test passed')
  console.log(`- first reference: ${result.reference}`)
  console.log(`- provider requests: ${emails.length}`)
  console.log(`- encrypted recovery writes: ${stored.length}`)
  console.log('- sixth request: HTTP 429 with shared-store rate limiting')
} finally {
  child.kill('SIGTERM')
  await new Promise(resolve => setTimeout(resolve, 250))
  mock.close()
}
