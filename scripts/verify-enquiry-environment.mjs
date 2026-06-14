const required = [
  'RESEND_API_KEY',
  'ENQUIRY_FROM_EMAIL',
  'ENQUIRY_TO_EMAIL',
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
  'ENQUIRY_STORAGE_KEY',
]
const missing = required.filter(name => !process.env[name])
if (process.env.ENQUIRY_DELIVERY_MODE && process.env.ENQUIRY_DELIVERY_MODE !== 'email') {
  missing.push('ENQUIRY_DELIVERY_MODE=email')
}
if (missing.length) {
  console.error('Production enquiry environment is incomplete:')
  missing.forEach(name => console.error(`- ${name}`))
  process.exit(1)
}
if (!process.env.ENQUIRY_FROM_EMAIL.includes('@') || !process.env.ENQUIRY_TO_EMAIL.includes('@')) {
  console.error('ENQUIRY_FROM_EMAIL and ENQUIRY_TO_EMAIL must contain valid email addresses')
  process.exit(1)
}
console.log('Production enquiry environment variables are present.')
console.log('Run a live staging submission to verify DNS, provider acceptance and inbox delivery before launch.')
