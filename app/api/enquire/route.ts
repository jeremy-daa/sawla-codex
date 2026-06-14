import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/data/siteData'
import { getCanonicalJourney } from '@/data/canonicalJourneys'
import { checkEnquiryRateLimit } from '@/lib/distributedRateLimit'
import { persistEnquiry } from '@/lib/enquiryStore'
import {
  buildGuestEmail,
  buildTeamEmail,
  validateEnquiry,
  type ValidatedEnquiry,
} from '@/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 64 * 1024

function requestIp(request: NextRequest): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  )
}
async function parseBody(request: NextRequest): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    const body = await request.json()
    return body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  }

  if (
    contentType.includes('multipart/form-data') ||
    contentType.includes('application/x-www-form-urlencoded')
  ) {
    const formData = await request.formData()
    const body: Record<string, unknown> = Object.fromEntries(formData.entries())
    body.interests = formData.getAll('interests').map(String)
    return body
  }

  throw new Error('UNSUPPORTED_CONTENT_TYPE')
}

interface ResendEmail {
  from: string
  to: string[]
  subject: string
  html: string
  text: string
  replyTo: string
  idempotencyKey: string
}

async function sendWithResend(email: ResendEmail): Promise<string> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('EMAIL_NOT_CONFIGURED')

  const response = await fetch(process.env.RESEND_API_URL || 'https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': email.idempotencyKey,
    },
    body: JSON.stringify({
      from: email.from,
      to: email.to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      reply_to: email.replyTo,
      tags: [{ name: 'source', value: 'website-enquiry' }],
    }),
    cache: 'no-store',
  })

  const result = (await response.json().catch(() => ({}))) as { id?: string; message?: string; name?: string }
  if (!response.ok || !result.id) {
    console.error('[Enquiry email delivery failed]', {
      status: response.status,
      name: result.name,
      message: result.message,
    })
    throw new Error('EMAIL_DELIVERY_FAILED')
  }

  return result.id
}

async function sendOptionalWebhook(enquiry: ValidatedEnquiry): Promise<void> {
  const endpoint = process.env.ENQUIRY_WEBHOOK_URL
  if (!endpoint) return

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.ENQUIRY_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({ event: 'sawla_tours.enquiry.created', enquiry }),
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('[Enquiry webhook failed]', { status: response.status, reference: enquiry.reference })
    }
  } catch (error) {
    console.error('[Enquiry webhook error]', {
      reference: enquiry.reference,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

function normalizeJourney(enquiry: ValidatedEnquiry): ValidatedEnquiry {
  if (!enquiry.journeySlug) return enquiry
  const journey = getCanonicalJourney(enquiry.journeySlug)
  if (!journey) return { ...enquiry, journeySlug: '', journeyName: '' }
  return { ...enquiry, journeyName: journey.title }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, error: 'The enquiry is too large. Please shorten the message and try again.' },
      { status: 413 },
    )
  }

  if (request.headers.get('sec-fetch-site') === 'cross-site') {
    return NextResponse.json({ success: false, error: 'Cross-site submissions are not accepted.' }, { status: 403 })
  }

  let rate: { allowed: boolean; retryAfter: number }
  try {
    rate = await checkEnquiryRateLimit(requestIp(request))
  } catch (error) {
    console.error('[Enquiry rate-limit unavailable]', { error: error instanceof Error ? error.message : 'Unknown error' })
    return NextResponse.json({ success: false, error: `Online delivery is temporarily unavailable. Please email ${SITE.email} or contact us on WhatsApp.` }, { status: 503 })
  }
  if (!rate.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many submissions were received from this connection. Please wait and try again, or email us directly.',
      },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfter) } },
    )
  }

  try {
    const raw = await parseBody(request)
    const validation = validateEnquiry(raw)

    if (validation.isSpam) {
      return NextResponse.json({ success: true, reference: 'received' }, { status: 200 })
    }

    if (!validation.success || !validation.data) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please review the highlighted fields and try again.',
          fields: validation.errors ?? {},
        },
        { status: 400 },
      )
    }

    const enquiry = normalizeJourney(validation.data)
    const deliveryMode = process.env.ENQUIRY_DELIVERY_MODE ?? (process.env.NODE_ENV === 'production' ? 'email' : 'log')

    if (deliveryMode === 'log' && process.env.NODE_ENV === 'production') {
      console.error('[Enquiry log mode is not permitted in production]')
      return NextResponse.json(
        { success: false, error: `Online delivery is temporarily unavailable. Please email ${SITE.email} or contact us on WhatsApp.` },
        { status: 503 },
      )
    }

    if (deliveryMode === 'log') {
      console.info('[Sawla Tours enquiry accepted in log mode]', {
        reference: enquiry.reference,
        submittedAt: enquiry.submittedAt,
        journeySlug: enquiry.journeySlug || null,
      })
      await sendOptionalWebhook(enquiry)
      return NextResponse.json({ success: true, reference: enquiry.reference }, { status: 200 })
    }

    const from = process.env.ENQUIRY_FROM_EMAIL
    const recipients = (process.env.ENQUIRY_TO_EMAIL || SITE.email)
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)

    if (!from || !process.env.RESEND_API_KEY || recipients.length === 0) {
      console.error('[Enquiry delivery configuration missing]')
      return NextResponse.json(
        {
          success: false,
          error: `Online delivery is temporarily unavailable. Please email ${SITE.email} or contact us on WhatsApp.`,
        },
        { status: 503 },
      )
    }

    await persistEnquiry(enquiry, 'pending')

    const teamEmail = buildTeamEmail(enquiry)
    let teamDeliveryId: string
    try {
      teamDeliveryId = await sendWithResend({
        from,
        to: recipients,
        subject: teamEmail.subject,
        html: teamEmail.html,
        text: teamEmail.text,
        replyTo: enquiry.email,
        idempotencyKey: `sawla-enquiry/${enquiry.reference}/team`,
      })
    } catch (error) {
      await persistEnquiry(enquiry, 'delivery_failed').catch((storeError) => {
        console.error('[Enquiry recovery record failed]', {
          reference: enquiry.reference,
          error: storeError instanceof Error ? storeError.message : 'Unknown error',
        })
      })
      throw error
    }
    await persistEnquiry(enquiry, 'delivered', teamDeliveryId)

    const guestEmail = buildGuestEmail(enquiry)
    try {
      await sendWithResend({
        from,
        to: [enquiry.email],
        subject: guestEmail.subject,
        html: guestEmail.html,
        text: guestEmail.text,
        replyTo: SITE.email,
        idempotencyKey: `sawla-enquiry/${enquiry.reference}/guest`,
      })
    } catch (error) {
      console.error('[Guest acknowledgement failed after team delivery]', {
        reference: enquiry.reference,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }

    await sendOptionalWebhook(enquiry)

    return NextResponse.json({ success: true, reference: enquiry.reference }, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR'
    if (message === 'UNSUPPORTED_CONTENT_TYPE') {
      return NextResponse.json({ success: false, error: 'Unsupported form submission format.' }, { status: 415 })
    }

    console.error('[Enquiry route error]', { message })
    return NextResponse.json(
      {
        success: false,
        error: `We could not deliver the enquiry. Please email ${SITE.email} or contact us on WhatsApp.`,
      },
      { status: 503 },
    )
  }
}
