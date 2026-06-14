import {
  ENQUIRY_BUDGETS,
  ENQUIRY_CONTACT_PREFERENCES,
  ENQUIRY_DURATIONS,
  ENQUIRY_FLEXIBILITY,
  ENQUIRY_INTERESTS,
  ENQUIRY_PACES,
  ENQUIRY_SOURCES,
  ENQUIRY_TRAVEL_STYLES,
} from '@/data/enquiryData'

export interface EnquiryInput {
  name: string
  email: string
  phone: string
  country: string
  contactPreference: string
  travelDates: string
  dateFlexibility: string
  duration: string
  adults: number
  children: number
  interests: string[]
  travelStyle: string
  pace: string
  budget: string
  journeySlug: string
  journeyName: string
  message: string
  considerations: string
  source: string
  privacyAccepted: boolean
  formStartedAt: number
  formVersion: string
  pageContext: string
  landingPage: string
  referrer: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  honey: string
}

export interface ValidatedEnquiry extends Omit<EnquiryInput, 'privacyAccepted' | 'honey'> {
  reference: string
  submittedAt: string
}

export interface EnquiryValidationResult {
  success: boolean
  data?: ValidatedEnquiry
  errors?: Record<string, string>
  isSpam?: boolean
}

const oneLine = (value: unknown, max = 200): string => {
  if (typeof value !== 'string') return ''
  return value
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

const multiLine = (value: unknown, max = 4000): string => {
  if (typeof value !== 'string') return ''
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .trim()
    .slice(0, max)
}

const toBoolean = (value: unknown): boolean =>
  value === true || value === 'true' || value === 'on' || value === '1'

const toInteger = (value: unknown, fallback = 0): number => {
  const parsed = Number.parseInt(String(value ?? ''), 10)
  return Number.isFinite(parsed) ? parsed : fallback
}

const allowed = (value: string, options: readonly string[], fallback = ''): string =>
  options.includes(value) ? value : fallback

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phonePattern = /^[+()\-\s0-9.]{7,30}$/

export function buildReference(now = new Date()): string {
  const date = now.toISOString().slice(0, 10).replace(/-/g, '')
  const random = crypto.randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()
  return `ST-${date}-${random}`
}

export function validateEnquiry(raw: Record<string, unknown>, now = Date.now()): EnquiryValidationResult {
  const errors: Record<string, string> = {}
  const honey = oneLine(raw._honey ?? raw.honey, 120)

  if (honey) return { success: true, isSpam: true }

  const name = oneLine(raw.name, 120)
  const email = oneLine(raw.email, 254).toLowerCase()
  const phone = oneLine(raw.phone ?? raw.whatsapp, 40)
  const country = oneLine(raw.country, 100)
  const contactPreference = allowed(
    oneLine(raw.contactPreference, 40),
    ENQUIRY_CONTACT_PREFERENCES,
    'Email',
  )
  const travelDates = oneLine(raw.travelDates ?? raw.dates ?? raw.travelMonth, 160)
  const dateFlexibility = allowed(
    oneLine(raw.dateFlexibility, 80),
    ENQUIRY_FLEXIBILITY,
    'Still researching',
  )
  const duration = allowed(oneLine(raw.duration, 80), ENQUIRY_DURATIONS)
  const adults = toInteger(raw.adults, 1)
  const children = toInteger(raw.children, 0)
  const rawInterests = Array.isArray(raw.interests)
    ? raw.interests
    : typeof raw.interests === 'string'
      ? raw.interests.split('|')
      : []
  const interests = rawInterests
    .map((item) => oneLine(item, 100))
    .filter((item): item is (typeof ENQUIRY_INTERESTS)[number] =>
      ENQUIRY_INTERESTS.includes(item as (typeof ENQUIRY_INTERESTS)[number]),
    )
    .slice(0, 12)
  const travelStyle = allowed(oneLine(raw.travelStyle ?? raw.style, 100), ENQUIRY_TRAVEL_STYLES)
  const pace = allowed(oneLine(raw.pace, 50), ENQUIRY_PACES)
  const budget = allowed(oneLine(raw.budget, 100), ENQUIRY_BUDGETS, 'Prefer to discuss')
  const journeySlug = oneLine(raw.journeySlug ?? raw.journey, 160)
  const journeyName = oneLine(raw.journeyName, 200)
  const message = multiLine(raw.message, 4000)
  const considerations = multiLine(raw.considerations, 1500)
  const source = allowed(oneLine(raw.source, 100), ENQUIRY_SOURCES)
  const privacyAccepted = toBoolean(raw.privacyAccepted)
  const formStartedAt = Number(raw.formStartedAt ?? 0)
  const formVersion = oneLine(raw.formVersion, 30) || 'v15'
  const pageContext = oneLine(raw.pageContext, 500)
  const landingPage = oneLine(raw.landingPage, 500)
  const referrer = oneLine(raw.referrer, 500)
  const utmSource = oneLine(raw.utmSource, 120)
  const utmMedium = oneLine(raw.utmMedium, 120)
  const utmCampaign = oneLine(raw.utmCampaign, 160)
  const utmContent = oneLine(raw.utmContent, 160)
  const utmTerm = oneLine(raw.utmTerm, 160)

  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address.'
  if (phone && !phonePattern.test(phone)) errors.phone = 'Please check the phone or WhatsApp number.'
  if (contactPreference === 'WhatsApp' && !phone) {
    errors.phone = 'Add a WhatsApp number or choose email as your preferred contact method.'
  }
  if (travelDates.length < 3) errors.travelDates = 'Add a travel month, dates, or write “flexible”.'
  if (!duration) errors.duration = 'Choose an approximate trip duration.'
  if (adults < 1 || adults > 40) errors.adults = 'Enter between 1 and 40 adult travelers.'
  if (children < 0 || children > 20) errors.children = 'Enter a valid number of children.'
  if (message.length < 20) errors.message = 'Tell us a little more about the journey you are considering.'
  if (!privacyAccepted) errors.privacyAccepted = 'Please confirm that you have read the privacy notice.'

  if (!Number.isFinite(formStartedAt) || formStartedAt <= 0) {
    errors.form = 'Please reload the form and try again.'
  } else {
    const elapsed = now - formStartedAt
    if (elapsed < 3500) return { success: true, isSpam: true }
    if (elapsed > 24 * 60 * 60 * 1000) errors.form = 'This form session has expired. Please reload and try again.'
  }

  const urlCount = (message.match(/https?:\/\//gi) ?? []).length
  if (urlCount > 3) return { success: true, isSpam: true }

  if (Object.keys(errors).length) return { success: false, errors }

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      country,
      contactPreference,
      travelDates,
      dateFlexibility,
      duration,
      adults,
      children,
      interests,
      travelStyle,
      pace,
      budget,
      journeySlug,
      journeyName,
      message,
      considerations,
      source,
      formStartedAt,
      formVersion,
      pageContext,
      landingPage,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      reference: buildReference(),
      submittedAt: new Date(now).toISOString(),
    },
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const display = (value: string | number | string[], fallback = 'Not provided'): string => {
  if (Array.isArray(value)) return value.length ? value.join(', ') : fallback
  return String(value).trim() || fallback
}

export function buildTeamEmail(enquiry: ValidatedEnquiry): { subject: string; html: string; text: string } {
  const travelers = `${enquiry.adults} adult${enquiry.adults === 1 ? '' : 's'}${enquiry.children ? `, ${enquiry.children} child${enquiry.children === 1 ? '' : 'ren'}` : ''}`
  const rows: Array<[string, string]> = [
    ['Reference', enquiry.reference],
    ['Name', enquiry.name],
    ['Email', enquiry.email],
    ['Phone / WhatsApp', display(enquiry.phone)],
    ['Preferred contact', enquiry.contactPreference],
    ['Country', display(enquiry.country)],
    ['Travel dates', enquiry.travelDates],
    ['Date flexibility', enquiry.dateFlexibility],
    ['Duration', enquiry.duration],
    ['Travelers', travelers],
    ['Selected journey', display(enquiry.journeyName)],
    ['Interests', display(enquiry.interests)],
    ['Travel style', display(enquiry.travelStyle)],
    ['Pace', display(enquiry.pace)],
    ['Budget', enquiry.budget],
    ['Planning considerations', display(enquiry.considerations)],
    ['How they found Sawla', display(enquiry.source)],
    ['Landing page', display(enquiry.landingPage)],
    ['Referrer', display(enquiry.referrer)],
    ['UTM source / medium', display([enquiry.utmSource, enquiry.utmMedium].filter(Boolean))],
    ['UTM campaign', display(enquiry.utmCampaign)],
    ['Submitted', enquiry.submittedAt],
  ]

  const subjectDetails = [enquiry.travelDates, travelers].filter(Boolean).join(' · ')
  const subject = `[${enquiry.reference}] New Ethiopia journey enquiry — ${enquiry.name}${subjectDetails ? ` · ${subjectDetails}` : ''}`

  const htmlRows = rows
    .map(
      ([label, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8ddc7;color:#6b6259;font-size:13px;vertical-align:top;width:180px">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8ddc7;color:#1c1c1a;font-size:14px;vertical-align:top">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const html = `<!doctype html><html><body style="margin:0;background:#f6f2eb;font-family:Arial,sans-serif;color:#1c1c1a"><div style="max-width:760px;margin:0 auto;padding:28px"><div style="background:#1c1c1a;color:#faf7f2;padding:24px 28px"><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#d2a943">Sawla Tours enquiry</div><h1 style="font-size:26px;font-weight:400;margin:8px 0 0">${escapeHtml(enquiry.name)}</h1><p style="margin:7px 0 0;color:#d8d3ca">Reference ${escapeHtml(enquiry.reference)}</p></div><div style="background:#fff;padding:24px 28px"><h2 style="font-size:18px;margin:0 0 10px">Traveler message</h2><div style="white-space:pre-wrap;line-height:1.65;background:#faf7f2;border-left:3px solid #c4931a;padding:16px 18px;margin-bottom:24px">${escapeHtml(enquiry.message)}</div><table style="border-collapse:collapse;width:100%">${htmlRows}</table></div></div></body></html>`

  const text = [
    'SAWLA TOURS — NEW JOURNEY ENQUIRY',
    `Reference: ${enquiry.reference}`,
    '',
    `Traveler message:\n${enquiry.message}`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join('\n')

  return { subject, html, text }
}

export function buildGuestEmail(enquiry: ValidatedEnquiry): { subject: string; html: string; text: string } {
  const journeyLine = enquiry.journeyName
    ? `You asked about <strong>${escapeHtml(enquiry.journeyName)}</strong>.`
    : 'You have taken the first step toward a private Ethiopia journey.'
  const summary = `${enquiry.travelDates} · ${enquiry.duration} · ${enquiry.adults + enquiry.children} traveler${enquiry.adults + enquiry.children === 1 ? '' : 's'}`
  const subject = `We received your Sawla Tours enquiry — ${enquiry.reference}`

  const html = `<!doctype html><html><body style="margin:0;background:#f6f2eb;font-family:Arial,sans-serif;color:#1c1c1a"><div style="max-width:680px;margin:0 auto;padding:28px"><div style="background:#1c1c1a;color:#faf7f2;padding:26px 30px"><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#d2a943">Sawla Tours</div><h1 style="font-size:28px;font-weight:400;margin:10px 0 0">Thank you, ${escapeHtml(enquiry.name)}.</h1></div><div style="background:#fff;padding:30px"><p style="font-size:16px;line-height:1.7;margin-top:0">We have received your enquiry. ${journeyLine}</p><div style="background:#faf7f2;border-left:3px solid #c4931a;padding:16px 18px;margin:22px 0"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#7a7167">Your reference</div><div style="font-size:20px;margin-top:5px">${escapeHtml(enquiry.reference)}</div><div style="font-size:14px;color:#6b6259;margin-top:7px">${escapeHtml(summary)}</div></div><p style="font-size:15px;line-height:1.7">A travel specialist will review the route, timing and any operational details before replying. We aim to acknowledge new enquiries within one business day, based on Addis Ababa time.</p><p style="font-size:15px;line-height:1.7">Please do not email passport copies, payment-card details or sensitive medical records at this stage.</p><p style="font-size:15px;line-height:1.7;margin-bottom:0">Warm regards,<br><strong>Sawla Tours</strong><br>Addis Ababa, Ethiopia</p></div></div></body></html>`

  const text = [
    `Thank you, ${enquiry.name}.`,
    '',
    'We have received your Sawla Tours enquiry.',
    `Reference: ${enquiry.reference}`,
    `Summary: ${summary}`,
    '',
    'A travel specialist will review the route, timing and operational details before replying. We aim to acknowledge new enquiries within one business day, based on Addis Ababa time.',
    '',
    'Please do not email passport copies, payment-card details or sensitive medical records at this stage.',
    '',
    'Warm regards,',
    'Sawla Tours',
    'Addis Ababa, Ethiopia',
  ].join('\n')

  return { subject, html, text }
}
