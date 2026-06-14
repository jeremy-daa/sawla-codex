import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import EnquiryForm from '@/components/enquiry/EnquiryForm'
import { getCanonicalJourney } from '@/data/canonicalJourneys'
import { ENQUIRY_FAQS, ENQUIRY_PROCESS } from '@/data/enquiryData'
import { SITE } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Plan a Private Ethiopia Tour | Enquire with Sawla Tours',
  description:
    'Start planning a private, tailor-made Ethiopia journey with an Addis Ababa-based travel team. Share your dates, interests and preferred pace.',
  alternates: { canonical: 'https://www.sawlatours.com/enquire' },
  openGraph: {
    title: 'Plan Your Private Ethiopia Journey | Sawla Tours',
    description: 'Tell an Ethiopia-based specialist what you are considering and receive a realistic next step for your private journey.',
    url: 'https://www.sawlatours.com/enquire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Your Private Ethiopia Journey | Sawla Tours',
    description: 'Start with your dates, interests and pace. Sawla Tours will help shape the route.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.sawlatours.com/enquire/#contactpage',
      url: 'https://www.sawlatours.com/enquire',
      name: 'Plan a Private Ethiopia Journey with Sawla Tours',
      description: 'Enquiry page for private, tailor-made Ethiopia journeys planned by Sawla Tours in Addis Ababa.',
      mainEntity: { '@id': 'https://www.sawlatours.com/#organization' },
    },
    {
      '@type': 'ContactPoint',
      '@id': 'https://www.sawlatours.com/enquire/#travel-enquiries',
      contactType: 'travel enquiries',
      email: SITE.email,
      telephone: SITE.phoneE164,
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sawlatours.com/enquire/#faq',
      mainEntity: ENQUIRY_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.sawlatours.com/enquire/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sawlatours.com' },
        { '@type': 'ListItem', position: 2, name: 'Plan Your Journey', item: 'https://www.sawlatours.com/enquire' },
      ],
    },
  ],
}

interface EnquirePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
}

export default async function EnquirePage({ searchParams }: EnquirePageProps) {
  const params = await searchParams
  const journey = getCanonicalJourney(first(params.journey))
  const interests = first(params.interests)
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean)

  const whatsappMessage = encodeURIComponent(
    `Hi Sawla Tours, I would like help planning a private Ethiopia journey${journey ? ` based on “${journey.title}”` : ''}.`,
  )
  const whatsappUrl = `https://wa.me/${SITE.phoneE164.replace(/\D/g, '')}?text=${whatsappMessage}`

  return (
    <>
      <SchemaScript schema={schema} />

      <section className="relative flex min-h-[390px] items-end overflow-hidden pb-16 pt-28 md:pb-20">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="contact-hero-specialist-planning.jpg" width={1920} height={900} category="home" fill />
          <div className="absolute inset-0 bg-charcoal/72" />
        </div>
        <div className="container-max relative z-10 text-ivory">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-ivory/55">
            <Link href="/" className="hover:text-gold">Home</Link> <span aria-hidden="true">/</span> <span>Plan Your Journey</span>
          </nav>
          <span className="label-eyebrow text-gold">A thoughtful first conversation</span>
          <h1 className="heading-display mt-2 max-w-4xl text-display-xl text-ivory">Plan Your Private Ethiopia Journey</h1>
          <p className="mt-5 max-w-2xl text-body-lg leading-8 text-ivory/78">
            Start with what you know. Share your dates, interests and preferred pace; an Ethiopia-based specialist will review what is realistic before recommending the next step.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-charcoal" aria-label="Enquiry assurances">
        <div className="container-max grid grid-cols-2 gap-5 py-5 text-sm md:grid-cols-4">
          {[
            ['Ethiopia-based planning', 'Local operational context'],
            ['Private and tailor-made', 'No obligation to proceed'],
            ['Useful first response', 'Not an automated itinerary'],
            ['Privacy-conscious', 'No passport or card details'],
          ].map(([title, body]) => (
            <div key={title} className="border-l border-gold/35 pl-4">
              <div className="text-[13px] font-medium text-ivory">{title}</div>
              <div className="mt-1 text-xs text-ivory/48">{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.85fr)] lg:gap-16">
          <main>
            <span className="label-eyebrow">Journey enquiry</span>
            <h2 className="heading-display mt-2 text-display-sm text-charcoal">Tell Us Enough to Advise Well</h2>
            <p className="mb-9 mt-3 max-w-2xl leading-7 text-warmgrey">
              Required fields are intentionally limited. Optional preferences help us avoid sending a generic route that does not fit your expectations.
            </p>
            <EnquiryForm
              journey={journey ? { slug: journey.slug, title: journey.title, duration: journey.duration, route: journey.route } : undefined}
              prefill={{
                travelDates: first(params.travelDates),
                duration: first(params.duration),
                travelers: first(params.travelers),
                budget: first(params.budget),
                interests,
                source: first(params.source) === 'trip-finder' ? 'Sawla Tours Trip Finder' : first(params.source),
              }}
            />
          </main>

          <aside>
            <div className="sticky top-24 space-y-6">
              <section className="rounded-card bg-charcoal p-7 text-ivory">
                <span className="label-eyebrow text-gold">Direct contact</span>
                <h2 className="mt-2 font-display text-2xl font-light">Prefer a short message first?</h2>
                <p className="mt-3 text-sm leading-6 text-ivory/62">Use email or WhatsApp when you have a simple question. The full form is better for a detailed route recommendation.</p>
                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ivory/45">Email</div>
                    <a href={`mailto:${SITE.email}`} className="mt-1 block text-gold hover:text-amber">{SITE.email}</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ivory/45">WhatsApp / phone</div>
                    <a href={`tel:${SITE.phoneE164}`} className="mt-1 block text-ivory hover:text-gold">{SITE.phone}</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ivory/45">Location and time</div>
                    <div className="mt-1 text-ivory/72">{SITE.address} · EAT (UTC+3)</div>
                  </div>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light mt-7 flex w-full justify-center text-center text-xs">Message on WhatsApp</a>
              </section>

              <section className="rounded-card border border-sand bg-white p-6">
                <span className="label-eyebrow">What not to send</span>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-warmgrey">
                  {['Passport copies or identity documents', 'Payment-card or bank details', 'Sensitive medical records', 'Large attachments or image portfolios'].map((item) => (
                    <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">—</span><span>{item}</span></li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-sand pt-4 text-xs leading-5 text-warmgrey">Necessary documents are requested later through the appropriate booking process.</p>
              </section>

              <section className="rounded-card border border-sand bg-gold-faint p-6">
                <span className="label-eyebrow">Need inspiration first?</span>
                <div className="mt-4 space-y-3 text-sm">
                  <Link href="/tours-by-experience" className="flex justify-between text-charcoal hover:text-gold"><span>Browse journey styles</span><span>→</span></Link>
                  <Link href="/trip-finder" className="flex justify-between text-charcoal hover:text-gold"><span>Use the Trip Finder</span><span>→</span></Link>
                  <Link href="/how-we-work" className="flex justify-between text-charcoal hover:text-gold"><span>See how planning works</span><span>→</span></Link>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding-sm border-y border-sand bg-gold-faint">
        <div className="container-max">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="label-eyebrow">After you enquire</span>
            <h2 className="heading-display mt-2 text-display-sm text-charcoal">A Clear Planning Handoff</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-4">
            {ENQUIRY_PROCESS.map((step, index) => (
              <article key={step.title} className="border-t border-gold/35 pt-5">
                <div className="font-display text-3xl text-gold/35">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="mt-3 font-display text-xl text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-warmgrey">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="label-eyebrow">Practical answers</span>
            <h2 className="heading-display mt-2 text-display-sm text-charcoal">Questions Before You Enquire</h2>
          </div>
          <div className="space-y-4" role="list">
            {ENQUIRY_FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-card border border-sand bg-white" role="listitem">
                <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-medium text-charcoal transition-colors hover:text-gold">
                  {faq.question}<span className="ml-3 flex-none text-lg text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-7 text-warmgrey">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
