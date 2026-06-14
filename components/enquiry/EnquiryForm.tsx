'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

interface JourneyPrefill {
  slug: string
  title: string
  duration: string
  route: string
}

interface FormPrefill {
  travelDates?: string
  duration?: string
  travelers?: string
  budget?: string
  interests?: string[]
  source?: string
}

interface EnquiryFormProps {
  journey?: JourneyPrefill
  prefill?: FormPrefill
}

type Status = 'idle' | 'submitting' | 'error'

const inputClass =
  'w-full rounded-sm border border-sand bg-white px-4 py-3 text-sm text-charcoal placeholder:text-warmgrey/45 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/10 disabled:cursor-not-allowed disabled:opacity-60'
const labelClass = 'mb-1.5 block text-sm font-medium text-charcoal'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return <p id={id} className="mt-1.5 text-xs text-red-700">{message}</p>
}

function inferTravelerCounts(value?: string): { adults: number; children: number } {
  if (!value) return { adults: 2, children: 0 }
  if (/solo/i.test(value)) return { adults: 1, children: 0 }
  const range = value.match(/(\d+)/)
  return { adults: range ? Number(range[1]) : 2, children: 0 }
}

export default function EnquiryForm({ journey, prefill }: EnquiryFormProps) {
  const router = useRouter()
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [formStartedAt, setFormStartedAt] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [contactPreference, setContactPreference] = useState('Email')

  const travelerCounts = useMemo(() => inferTravelerCounts(prefill?.travelers), [prefill?.travelers])

  useEffect(() => {
    setFormStartedAt(Date.now())
  }, [])

  useEffect(() => {
    if (status === 'error') {
      errorSummaryRef.current?.focus()
      errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    if (!form.reportValidity()) return

    setStatus('submitting')
    setErrorMessage('')
    setFieldErrors({})

    const formData = new FormData(form)
    const url = new URL(window.location.href)
    const payload: Record<string, unknown> = Object.fromEntries(formData.entries())
    payload.interests = formData.getAll('interests').map(String)
    payload.formStartedAt = formStartedAt
    payload.formVersion = 'v15'
    payload.pageContext = journey ? `Selected journey: ${journey.title}` : 'General journey enquiry'
    payload.landingPage = window.location.href
    payload.referrer = document.referrer
    payload.utmSource = url.searchParams.get('utm_source') ?? ''
    payload.utmMedium = url.searchParams.get('utm_medium') ?? ''
    payload.utmCampaign = url.searchParams.get('utm_campaign') ?? ''
    payload.utmContent = url.searchParams.get('utm_content') ?? ''
    payload.utmTerm = url.searchParams.get('utm_term') ?? ''

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => ({}))) as {
        success?: boolean
        reference?: string
        error?: string
        fields?: Record<string, string>
      }

      if (!response.ok || !result.success) {
        setFieldErrors(result.fields ?? {})
        setErrorMessage(result.error || 'The enquiry could not be sent. Please try again or use the direct contact options.')
        setStatus('error')
        return
      }

      const reference = result.reference || 'received'
      router.push(`/enquire/thank-you?reference=${encodeURIComponent(reference)}`)
    } catch {
      setErrorMessage('The connection was interrupted. Please try again, email us directly, or use WhatsApp.')
      setStatus('error')
    }
  }

  const busy = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="space-y-8" aria-label="Private Ethiopia journey enquiry form" noValidate>
      <input type="text" name="_honey" className="absolute -left-[9999px] h-px w-px" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="journeySlug" value={journey?.slug ?? ''} />
      <input type="hidden" name="journeyName" value={journey?.title ?? ''} />

      {status === 'error' && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="rounded-card border border-red-200 bg-red-50 p-5 outline-none"
        >
          <h3 className="font-display text-xl text-charcoal">Please check the enquiry</h3>
          <p className="mt-2 text-sm leading-6 text-red-800">{errorMessage}</p>
          {Object.keys(fieldErrors).length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-red-800">
              {Object.values(fieldErrors).map((message) => <li key={message}>{message}</li>)}
            </ul>
          )}
        </div>
      )}

      {journey && (
        <section className="rounded-card border border-gold/25 bg-gold-faint p-5" aria-labelledby="selected-journey-heading">
          <div className="label-eyebrow">Selected journey</div>
          <h3 id="selected-journey-heading" className="mt-2 font-display text-2xl text-charcoal">{journey.title}</h3>
          <p className="mt-2 text-sm leading-6 text-warmgrey">{journey.duration} · {journey.route}</p>
          <p className="mt-3 text-xs text-warmgrey">This gives our team context; the route can still be adapted.</p>
        </section>
      )}

      <fieldset className="space-y-5">
        <legend className="mb-5 w-full border-b border-sand pb-3">
          <span className="label-eyebrow">1 · Contact details</span>
          <span className="mt-1 block font-display text-2xl text-charcoal">How should we reach you?</span>
        </legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>Full name <span aria-hidden="true" className="text-gold">*</span></label>
            <input id="name" name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" className={inputClass} aria-describedby={fieldErrors.name ? 'name-error' : undefined} aria-invalid={Boolean(fieldErrors.name)} />
            <FieldError id="name-error" message={fieldErrors.name} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email address <span aria-hidden="true" className="text-gold">*</span></label>
            <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email" className={inputClass} aria-describedby={fieldErrors.email ? 'email-error' : undefined} aria-invalid={Boolean(fieldErrors.email)} />
            <FieldError id="email-error" message={fieldErrors.email} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>WhatsApp or phone <span className="text-warmgrey/70">(optional)</span></label>
            <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" inputMode="tel" placeholder="Include country code" className={inputClass} aria-describedby={fieldErrors.phone ? 'phone-error' : 'phone-help'} aria-invalid={Boolean(fieldErrors.phone)} />
            <p id="phone-help" className="mt-1.5 text-xs text-warmgrey">Required only when WhatsApp is your preferred contact method.</p>
            <FieldError id="phone-error" message={fieldErrors.phone} />
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>Country of residence <span className="text-warmgrey/70">(optional)</span></label>
            <input id="country" name="country" type="text" maxLength={100} autoComplete="country-name" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="contactPreference" className={labelClass}>Preferred contact method</label>
          <select id="contactPreference" name="contactPreference" value={contactPreference} onChange={(event) => setContactPreference(event.target.value)} className={inputClass}>
            {ENQUIRY_CONTACT_PREFERENCES.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-sand pt-7">
        <legend className="mb-5 w-full">
          <span className="label-eyebrow">2 · Journey basics</span>
          <span className="mt-1 block font-display text-2xl text-charcoal">What are you considering?</span>
        </legend>

        <div>
          <label htmlFor="travelDates" className={labelClass}>Travel dates or preferred month <span aria-hidden="true" className="text-gold">*</span></label>
          <input id="travelDates" name="travelDates" type="text" required minLength={3} maxLength={160} defaultValue={prefill?.travelDates} placeholder="For example: 12–24 October 2026, or flexible in November" className={inputClass} aria-describedby={fieldErrors.travelDates ? 'travelDates-error' : undefined} aria-invalid={Boolean(fieldErrors.travelDates)} />
          <FieldError id="travelDates-error" message={fieldErrors.travelDates} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="dateFlexibility" className={labelClass}>Date flexibility</label>
            <select id="dateFlexibility" name="dateFlexibility" className={inputClass} defaultValue="Still researching">
              {ENQUIRY_FLEXIBILITY.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="duration" className={labelClass}>Approximate duration <span aria-hidden="true" className="text-gold">*</span></label>
            <select id="duration" name="duration" required className={inputClass} defaultValue={ENQUIRY_DURATIONS.includes(prefill?.duration as (typeof ENQUIRY_DURATIONS)[number]) ? prefill?.duration : ''} aria-describedby={fieldErrors.duration ? 'duration-error' : undefined} aria-invalid={Boolean(fieldErrors.duration)}>
              <option value="">Choose a duration</option>
              {ENQUIRY_DURATIONS.map((option) => <option key={option}>{option}</option>)}
            </select>
            <FieldError id="duration-error" message={fieldErrors.duration} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="adults" className={labelClass}>Adults <span aria-hidden="true" className="text-gold">*</span></label>
            <input id="adults" name="adults" type="number" required min={1} max={40} defaultValue={travelerCounts.adults} className={inputClass} aria-describedby={fieldErrors.adults ? 'adults-error' : undefined} aria-invalid={Boolean(fieldErrors.adults)} />
            <FieldError id="adults-error" message={fieldErrors.adults} />
          </div>
          <div>
            <label htmlFor="children" className={labelClass}>Children under 18</label>
            <input id="children" name="children" type="number" min={0} max={20} defaultValue={travelerCounts.children} className={inputClass} aria-describedby={fieldErrors.children ? 'children-error' : 'children-help'} aria-invalid={Boolean(fieldErrors.children)} />
            <p id="children-help" className="mt-1.5 text-xs text-warmgrey">Ages can be shared later when relevant to planning.</p>
            <FieldError id="children-error" message={fieldErrors.children} />
          </div>
        </div>

        <div>
          <span className={labelClass}>Main interests <span className="text-warmgrey/70">(choose any)</span></span>
          <div className="grid gap-2 sm:grid-cols-2">
            {ENQUIRY_INTERESTS.map((interest) => (
              <label key={interest} className="flex cursor-pointer items-start gap-3 rounded-sm border border-sand/80 bg-white px-3 py-3 text-sm leading-5 text-charcoal transition-colors hover:border-gold/50">
                <input type="checkbox" name="interests" value={interest} defaultChecked={prefill?.interests?.includes(interest)} className="mt-0.5 h-4 w-4 flex-none accent-gold" />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-sand pt-7">
        <legend className="mb-5 w-full">
          <span className="label-eyebrow">3 · Helpful preferences</span>
          <span className="mt-1 block font-display text-2xl text-charcoal">Help us make the first response more useful</span>
          <span className="mt-2 block text-sm leading-6 text-warmgrey">These choices are optional. They are planning signals, not commitments.</span>
        </legend>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="travelStyle" className={labelClass}>Travel style</label>
            <select id="travelStyle" name="travelStyle" className={inputClass} defaultValue="">
              <option value="">No preference yet</option>
              {ENQUIRY_TRAVEL_STYLES.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="pace" className={labelClass}>Preferred pace</label>
            <select id="pace" name="pace" className={inputClass} defaultValue="">
              <option value="">No preference yet</option>
              {ENQUIRY_PACES.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelClass}>Budget per person</label>
            <select id="budget" name="budget" className={inputClass} defaultValue={ENQUIRY_BUDGETS.includes(prefill?.budget as (typeof ENQUIRY_BUDGETS)[number]) ? prefill?.budget : 'Prefer to discuss'}>
              {ENQUIRY_BUDGETS.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Tell us about the journey you have in mind <span aria-hidden="true" className="text-gold">*</span></label>
          <textarea id="message" name="message" required minLength={20} maxLength={4000} rows={6} placeholder="What matters most to you? Mention destinations, photography or wildlife priorities, celebrations, preferred pace, or experiences you do not want to miss." className={`${inputClass} resize-y`} aria-describedby={fieldErrors.message ? 'message-error' : 'message-help'} aria-invalid={Boolean(fieldErrors.message)} />
          <p id="message-help" className="mt-1.5 text-xs text-warmgrey">Please do not include passport, card or sensitive medical details.</p>
          <FieldError id="message-error" message={fieldErrors.message} />
        </div>

        <div>
          <label htmlFor="considerations" className={labelClass}>Accessibility, pace or dietary considerations <span className="text-warmgrey/70">(optional)</span></label>
          <textarea id="considerations" name="considerations" maxLength={1500} rows={3} placeholder="Share only the practical information needed for early planning. Detailed or sensitive records are not required here." className={`${inputClass} resize-y`} />
        </div>

        <div>
          <label htmlFor="source" className={labelClass}>How did you find Sawla Tours? <span className="text-warmgrey/70">(optional)</span></label>
          <select id="source" name="source" className={inputClass} defaultValue={ENQUIRY_SOURCES.includes(prefill?.source as (typeof ENQUIRY_SOURCES)[number]) ? prefill?.source : ''}>
            <option value="">Choose an option</option>
            {ENQUIRY_SOURCES.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </fieldset>

      <div className="border-t border-sand pt-7">
        <label className="flex items-start gap-3 text-sm leading-6 text-charcoal">
          <input type="checkbox" name="privacyAccepted" required className="mt-1 h-4 w-4 flex-none accent-gold" aria-describedby={fieldErrors.privacyAccepted ? 'privacy-error' : undefined} aria-invalid={Boolean(fieldErrors.privacyAccepted)} />
          <span>
            I have read the <Link href="/privacy-policy" target="_blank" className="text-gold underline underline-offset-2 hover:text-amber">privacy policy</Link> and agree that Sawla Tours may use these details to respond to my travel enquiry. <span aria-hidden="true" className="text-gold">*</span>
          </span>
        </label>
        <FieldError id="privacy-error" message={fieldErrors.privacyAccepted} />
      </div>

      <button type="submit" disabled={busy || formStartedAt === 0} className="btn-primary flex w-full justify-center py-4 text-[13px] disabled:cursor-not-allowed disabled:opacity-60">
        {busy ? 'Sending securely…' : 'Send My Journey Enquiry →'}
      </button>
      <p className="text-center text-xs leading-5 text-warmgrey">
        This form does not create a booking or payment obligation. We use your details only to respond and plan the requested journey.
      </p>
    </form>
  )
}
