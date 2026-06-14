import type { Metadata } from 'next'
import Link from 'next/link'
import EnquiryConversionEvent from '@/components/enquiry/EnquiryConversionEvent'
import { SITE } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Enquiry Received | Sawla Tours',
  description: 'Confirmation that Sawla Tours received your private Ethiopia journey enquiry.',
  robots: { index: false, follow: false, noarchive: true },
}

interface ThankYouPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
}

export default async function EnquiryThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams
  const rawReference = first(params.reference)
  const reference = /^ST-\d{8}-[A-Z0-9]{8}$/.test(rawReference) ? rawReference : 'received'
  const whatsappText = encodeURIComponent(
    `Hi Sawla Tours, I have submitted a website enquiry${reference !== 'received' ? ` with reference ${reference}` : ''}.`,
  )
  const whatsappUrl = `https://wa.me/${SITE.phoneE164.replace(/\D/g, '')}?text=${whatsappText}`

  return (
    <div className="min-h-[75vh] bg-ivory pb-24 pt-36">
      <EnquiryConversionEvent reference={reference} />
      <div className="container-max mx-auto max-w-3xl">
        <div className="rounded-card border border-sand bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-gold-faint text-gold" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </div>
          <span className="label-eyebrow mt-7 block">Enquiry received</span>
          <h1 className="heading-display mt-2 text-display-md text-charcoal">Thank You for Starting the Conversation</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-warmgrey">
            Your request has been recorded. A Sawla Tours specialist will review the route, dates and planning details before replying.
          </p>

          {reference !== 'received' && (
            <div className="mx-auto mt-7 max-w-sm rounded-sm border border-gold/25 bg-gold-faint px-5 py-4">
              <div className="text-xs uppercase tracking-wider text-warmgrey">Enquiry reference</div>
              <div className="mt-1 font-mono text-lg text-charcoal">{reference}</div>
            </div>
          )}

          <div className="mx-auto mt-9 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
            {[
              ['Check your inbox', 'When email delivery is configured, an acknowledgement is sent to the address you provided.'],
              ['Allow a thoughtful review', 'We aim to acknowledge new enquiries within one business day, based on Addis Ababa time.'],
              ['Keep the reference', 'Include it in a follow-up email or WhatsApp message so the team can identify the request quickly.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-gold/35 pt-4">
                <h2 className="font-display text-lg text-charcoal">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-warmgrey">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/tours-by-experience" className="btn-primary">Explore Journey Ideas</Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Follow Up on WhatsApp</a>
          </div>
          <p className="mt-7 text-xs leading-5 text-warmgrey">
            If you do not hear from us, email <a href={`mailto:${SITE.email}`} className="text-gold underline underline-offset-2">{SITE.email}</a>. Please do not send passport copies, payment-card details or sensitive medical records through ordinary email.
          </p>
        </div>
      </div>
    </div>
  )
}
