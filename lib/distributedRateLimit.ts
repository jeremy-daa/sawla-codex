import { createHash } from 'node:crypto'

const WINDOW_SECONDS = 15 * 60
const MAX_REQUESTS = 5

type LocalRecord = { count: number; resetAt: number }
const localState = globalThis as typeof globalThis & { __sawlaRateLimit?: Map<string, LocalRecord> }
const localStore = localState.__sawlaRateLimit ?? new Map<string, LocalRecord>()
localState.__sawlaRateLimit = localStore

function keyForIp(ip: string) {
  return `sawla:enquiry:rate:${createHash('sha256').update(ip).digest('hex').slice(0, 32)}`
}

async function redisCommand(command: Array<string | number>): Promise<unknown> {
  const baseUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '')
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!baseUrl || !token) throw new Error('DISTRIBUTED_RATE_LIMIT_NOT_CONFIGURED')

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  const payload = (await response.json().catch(() => ({}))) as { result?: unknown; error?: string }
  if (!response.ok || payload.error) throw new Error('DISTRIBUTED_RATE_LIMIT_UNAVAILABLE')
  return payload.result
}

function localRateLimit(key: string, now = Date.now()) {
  const current = localStore.get(key)
  if (!current || current.resetAt <= now) {
    localStore.set(key, { count: 1, resetAt: now + WINDOW_SECONDS * 1000 })
    return { allowed: true, retryAfter: 0 }
  }
  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) }
  }
  current.count += 1
  return { allowed: true, retryAfter: 0 }
}

export async function checkEnquiryRateLimit(ip: string) {
  const key = keyForIp(ip)
  const hasRedis = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  if (!hasRedis) {
    if (process.env.NODE_ENV === 'production') throw new Error('DISTRIBUTED_RATE_LIMIT_NOT_CONFIGURED')
    return localRateLimit(key)
  }

  const script = [
    "local current = redis.call('INCR', KEYS[1])",
    "if current == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end",
    "local ttl = redis.call('TTL', KEYS[1])",
    'return {current, ttl}',
  ].join('\n')
  const result = await redisCommand(['EVAL', script, 1, key, WINDOW_SECONDS])
  if (!Array.isArray(result) || result.length < 2) throw new Error('DISTRIBUTED_RATE_LIMIT_UNAVAILABLE')
  const count = Number(result[0])
  const ttl = Number(result[1])
  if (!Number.isFinite(count) || !Number.isFinite(ttl)) throw new Error('DISTRIBUTED_RATE_LIMIT_UNAVAILABLE')
  return count <= MAX_REQUESTS
    ? { allowed: true, retryAfter: 0 }
    : { allowed: false, retryAfter: Math.max(1, ttl) }
}
