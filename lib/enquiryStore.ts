import { createCipheriv, createHash, randomBytes } from 'node:crypto'
import type { ValidatedEnquiry } from '@/lib/enquiry'

type DeliveryStatus = 'pending' | 'delivered' | 'delivery_failed'

function storageKey(): Buffer {
  const secret = process.env.ENQUIRY_STORAGE_KEY
  if (!secret) throw new Error('ENQUIRY_STORAGE_NOT_CONFIGURED')
  try {
    const decoded = Buffer.from(secret, 'base64')
    if (decoded.length === 32) return decoded
  } catch {}
  return createHash('sha256').update(secret).digest()
}

function encrypt(value: unknown): string {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', storageKey(), iv)
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()
  return Buffer.concat([iv, tag, encrypted]).toString('base64')
}

async function redisSetEx(key: string, seconds: number, value: string) {
  const baseUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '')
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!baseUrl || !token) throw new Error('ENQUIRY_STORAGE_NOT_CONFIGURED')

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(['SETEX', key, seconds, value]),
    cache: 'no-store',
  })
  const result = (await response.json().catch(() => ({}))) as { result?: unknown; error?: string }
  if (!response.ok || result.error) throw new Error('ENQUIRY_STORAGE_UNAVAILABLE')
}

export async function persistEnquiry(enquiry: ValidatedEnquiry, status: DeliveryStatus, providerId?: string) {
  const configured = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN && process.env.ENQUIRY_STORAGE_KEY)
  if (!configured) {
    if (process.env.NODE_ENV === 'production') throw new Error('ENQUIRY_STORAGE_NOT_CONFIGURED')
    return
  }
  const requestedDays = Number(process.env.ENQUIRY_RETENTION_DAYS || 30)
  const retentionDays = Math.min(90, Math.max(1, Number.isFinite(requestedDays) ? requestedDays : 30))
  const record = {
    status,
    providerId: providerId || null,
    updatedAt: new Date().toISOString(),
    enquiry,
  }
  await redisSetEx(`sawla:enquiry:${enquiry.reference}`, retentionDays * 86400, encrypt(record))
}
