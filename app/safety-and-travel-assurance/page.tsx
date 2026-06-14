import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { SAFETY_FAQS, SAFETY_FRAMEWORK } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Tour Safety & Travel Assurance | Sawla Tours',
  description: 'How Sawla Tours screens routes, confirms services, briefs travelers, monitors conditions and manages changes for private Ethiopia journeys.',
  alternates: { canonical: `${SITE.url}/safety-and-travel-assurance` },
  openGraph: { title: 'Safety & Travel Assurance | Sawla Tours', description: 'A transparent operating framework for risk, route changes and traveler preparation.', url: `${SITE.url}/safety-and-travel-assurance` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Safety and Travel Assurance', url: `${SITE.url}/safety-and-travel-assurance` }]),
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Sawla Tours Safety and Travel Assurance', url: `${SITE.url}/safety-and-travel-assurance`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Sawla Tours travel assurance framework', url: `${SITE.url}/safety-and-travel-assurance`, items: SAFETY_FRAMEWORK.map((item) => ({ name: `${item.phase}: ${item.title}`, url: `${SITE.url}/safety-and-travel-assurance#${item.phase.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: item.body })) }),
  faqSchema(SAFETY_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function SafetyPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Safety & Travel Assurance"
        title="Good Operations Begin"
        accent="Before Arrival"
        intro="No operator can make travel risk-free. Sawla’s responsibility is to screen routes, confirm services, communicate limitations, prepare the field team and make conservative decisions when new information changes the plan."
        image="ethiopia-travel-safety-assurance-hero.webp"
        imageAlt="Sawla Tours guide and operations team reviewing a remote Ethiopia route"
        current="Safety & Assurance"
      />
      <TrustSectionNav current="/safety-and-travel-assurance" />

      <section className="section-padding bg-ivory" aria-labelledby="answer-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14">
          <article><span className="label-eyebrow">The direct answer</span><h2 id="answer-heading" className="heading-display text-display-md text-charcoal mt-2">Is It Safe to Travel in Ethiopia?</h2><div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6"><p>There is no responsible one-word answer for the whole country or for every date. Conditions can differ sharply by region, road, season and activity. A route that operated last year—or last month—must still be reviewed for the traveler’s actual dates.</p><p>Sawla assesses the proposed route during planning, reconfirms services before operation and continues to gather information as the journey moves. Travelers should also review their own government’s current travel advice and confirm that their insurance covers the itinerary and activities.</p></div></article>
          <aside className="rounded-card border border-sand bg-white p-7"><span className="label-eyebrow">What assurance means here</span><ul className="space-y-3 text-warmgrey leading-6 mt-5">{['A date-specific operating-status review', 'Clear conditional and highly conditional route labels', 'Named guide, driver and office contacts', 'Traveler health and practical briefing', 'Vehicle and service checks appropriate to the route', 'Permission to change, delay or stop unsafe activity', 'Coordination with local services and the traveler’s insurer when relevant', 'Recording issues so future operations improve'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}</ul></aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="framework-heading"><div className="container-max"><AnimateIn className="max-w-3xl mb-12"><span className="label-eyebrow">Eight-stage framework</span><h2 id="framework-heading" className="heading-display text-display-md text-charcoal mt-2">From Route Screening to Post-Trip Improvement</h2><p className="text-warmgrey text-body-lg leading-8 mt-5">Safety is not one checklist completed at booking. It is a sequence of decisions with different owners and different information.</p></AnimateIn><AnimateStagger className="space-y-5" staggerDelay={0.05}>{SAFETY_FRAMEWORK.map((item, index) => <article id={item.phase.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={item.phase} className="grid md:grid-cols-[92px_190px_minmax(0,1fr)] gap-5 rounded-card border border-sand bg-ivory p-6 md:p-7"><span className="font-display text-gold text-4xl">{String(index + 1).padStart(2, '0')}</span><div><span className="text-xs uppercase tracking-[0.13em] text-gold">{item.phase}</span><h3 className="font-display text-2xl text-charcoal mt-2">{item.title}</h3></div><p className="text-warmgrey leading-7">{item.body}</p></article>)}</AnimateStagger></div></section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="roles-heading"><div className="container-max"><div className="max-w-3xl mb-11"><span className="label-eyebrow text-gold">Shared responsibility</span><h2 id="roles-heading" className="heading-display text-display-md mt-2">Who Is Responsible for What?</h2><p className="text-ivory/65 text-body-lg leading-8 mt-5">Clear responsibility is safer than vague reassurance. Each participant has duties that cannot be silently transferred to someone else.</p></div><div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">{[
        ['Sawla Tours', 'Designs and reviews the route, confirms services, briefs the field team, communicates known limitations and coordinates operational response.'],
        ['Guide & driver', 'Monitor daily conditions, apply field judgment, communicate changes and stop or alter activity when necessary.'],
        ['Traveler', 'Obtains medical advice and insurance, shares relevant needs, follows briefings and avoids conduct that creates unnecessary risk.'],
        ['Insurer & authorities', 'Determine coverage, emergency-assistance response, legal access and official restrictions. Sawla cannot replace those decisions.'],
      ].map(([title, body]) => <article key={title} className="rounded-card border border-white/12 bg-white/5 p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="text-ivory/65 leading-6 mt-3">{body}</p></article>)}</div></div></section>

      <section className="section-padding bg-ivory" aria-labelledby="risk-heading"><div className="container-max grid lg:grid-cols-2 gap-14"><div><span className="label-eyebrow">Route-specific preparation</span><h2 id="risk-heading" className="heading-display text-display-md text-charcoal mt-2">Different Journeys Create Different Risk Profiles</h2><p className="text-warmgrey text-body-lg leading-8 mt-5">A city stopover, a high-altitude trek, a Danakil expedition and a long wildlife route should not receive the same briefing or vehicle plan.</p></div><div className="grid sm:grid-cols-2 gap-4">{[
        ['Altitude', 'Pacing, acclimatization, hydration, symptom awareness and traveler medical advice.'],
        ['Heat & remoteness', 'Water, shade, vehicle condition, communication, fuel, evacuation time and activity timing.'],
        ['Road travel', 'Vehicle category, daylight, weather, rest, road condition, driver workload and recovery options.'],
        ['Trekking', 'Fitness, trail exposure, camp support, footwear, weather, pack plan and guide-to-group structure.'],
        ['Wildlife', 'Viewing distance, animal behavior, park rules, terrain and early or late field hours.'],
        ['Community & festivals', 'Crowds, consent, local authority, worship, photography, valuables and changing access.'],
      ].map(([title, body]) => <div key={title} className="rounded-card border border-sand bg-white p-6"><h3 className="font-display text-2xl text-charcoal">{title}</h3><p className="text-warmgrey text-sm leading-6 mt-2">{body}</p></div>)}</div></div></section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand"><div className="container-max flex flex-col lg:flex-row lg:items-center justify-between gap-7"><div className="max-w-2xl"><span className="label-eyebrow">Read before booking</span><h2 className="heading-display text-display-sm text-charcoal mt-2">The Website Is Guidance, Not a Live Security Bulletin</h2><p className="text-warmgrey leading-7 mt-3">Current conditions are discussed for the requested dates. Travelers should also consult official travel advice, personal medical professionals and their insurer.</p></div><div className="flex flex-wrap gap-3"><Link href="/how-we-work" className="btn-primary">See how we work</Link><Link href="/enquire" className="btn-secondary">Discuss a route</Link></div></div></section>

      <TrustFaq title="Safety, Insurance and Route Changes" items={SAFETY_FAQS} />
    </>
  )
}
