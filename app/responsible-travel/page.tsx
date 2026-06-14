import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { RESPONSIBLE_FAQS, RESPONSIBLE_PRINCIPLES } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Responsible Travel in Ethiopia | Sawla Tours Policy',
  description: 'Sawla Tours responsible travel principles for consent, community visits, photography, wildlife, local roles, camps and honest impact reporting in Ethiopia.',
  alternates: { canonical: `${SITE.url}/responsible-travel` },
  openGraph: { title: 'Responsible Travel with Sawla Tours', description: 'Practical field choices, not broad sustainability claims.', url: `${SITE.url}/responsible-travel` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Responsible Travel', url: `${SITE.url}/responsible-travel` }]),
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Sawla Tours Responsible Travel Policy', url: `${SITE.url}/responsible-travel`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Sawla Tours responsible travel principles', url: `${SITE.url}/responsible-travel`, items: RESPONSIBLE_PRINCIPLES.map((principle) => ({ name: principle.title, url: `${SITE.url}/responsible-travel#${principle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: principle.body })) }),
  faqSchema(RESPONSIBLE_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function ResponsibleTravelPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Responsible Travel"
        title="Respect Is an"
        accent="Operating Standard"
        intro="Responsible travel is not a badge added to the footer. It is a series of field decisions: whether to enter, when to ask, how to photograph, who is paid for skilled work, how wildlife is approached and what is left behind after camp closes."
        image="responsible-travel-ethiopia-hero.webp"
        imageAlt="Respectful community and cultural travel in Ethiopia with local interpretation"
        current="Responsible Travel"
      />
      <TrustSectionNav current="/responsible-travel" />

      <section className="section-padding bg-ivory" aria-labelledby="policy-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14">
          <article><span className="label-eyebrow">Our position</span><h2 id="policy-heading" className="heading-display text-display-md text-charcoal mt-2">We Do Not Claim That Travel Has No Impact</h2><div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6"><p>Flights, vehicles, accommodation, waste and visitor attention all create pressure as well as income and opportunity. Calling every trip sustainable would hide those trade-offs.</p><p>Sawla’s responsibility is more practical: plan fewer rushed encounters, use local knowledge in skilled roles, seek permission, state photography arrangements clearly, respect worship and private life, follow protected-area rules, and improve the operational choices that can genuinely be controlled.</p></div></article>
          <aside className="rounded-card border border-sand bg-white p-7"><span className="label-eyebrow">Traveler responsibilities</span><ul className="space-y-3 text-warmgrey leading-6 mt-5">{['Listen to local briefings before photographing or entering', 'Accept that “no” is a complete answer', 'Avoid gifts or payments that bypass agreed local arrangements', 'Do not pressure guides to chase, bait or crowd wildlife', 'Dress and behave appropriately at places of worship', 'Reduce single-use items where practical', 'Disclose commercial photography or research intentions', 'Report conduct that feels unsafe, exploitative or disrespectful'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}</ul></aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="principles-heading"><div className="container-max"><AnimateIn className="max-w-3xl mb-12"><span className="label-eyebrow">Eight field principles</span><h2 id="principles-heading" className="heading-display text-display-md text-charcoal mt-2">What Responsible Travel Looks Like on the Ground</h2><p className="text-warmgrey text-body-lg leading-8 mt-5">Each principle is written so it can guide an itinerary, briefing or field decision—not only a marketing paragraph.</p></AnimateIn><AnimateStagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.05}>{RESPONSIBLE_PRINCIPLES.map((principle, index) => <article id={principle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={principle.title} className="rounded-card border border-sand bg-ivory p-7"><span className="font-display text-gold text-3xl">{String(index + 1).padStart(2, '0')}</span><h3 className="font-display text-2xl text-charcoal mt-2">{principle.title}</h3><p className="text-warmgrey leading-7 mt-3">{principle.body}</p></article>)}</AnimateStagger></div></section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="photography-heading"><div className="container-max grid lg:grid-cols-2 gap-14"><div><span className="label-eyebrow text-gold">Photography & contributors</span><h2 id="photography-heading" className="heading-display text-display-md mt-2">Permission Has More Than One Layer</h2><p className="text-ivory/70 text-body-lg leading-8 mt-6">Permission to visit a community is not permission to photograph every person. Permission to make a portrait is not automatically permission to publish it commercially. A small traveler group and a commissioned commercial project also create different expectations and permission requirements.</p></div><div className="grid sm:grid-cols-2 gap-4">{[
        ['Access', 'Has the community, household, institution or site agreed to the visit?'],
        ['Portrait', 'Has the individual agreed to be photographed under the local arrangement?'],
        ['Use', 'Is the image for personal memory, editorial publication, commercial work or research?'],
        ['Vulnerability', 'Would photographing a child, patient, worshipper or sensitive event create additional risk or pressure?'],
      ].map(([title, body]) => <div key={title} className="rounded-card border border-white/12 bg-white/5 p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="text-ivory/65 leading-6 mt-2">{body}</p></div>)}</div></div></section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand" aria-labelledby="journey-links-heading"><div className="container-max"><div className="text-center max-w-3xl mx-auto mb-9"><span className="label-eyebrow">See the policy in context</span><h2 id="journey-links-heading" className="heading-display text-display-sm text-charcoal mt-2">Journey Types Where These Choices Matter Most</h2></div><div className="grid md:grid-cols-4 gap-4">{[
        ['Omo & community journeys', '/tours-by-experience/omo-valley-community-journeys'],
        ['Photography expeditions', '/tours-by-experience/ethiopia-photography-tours'],
        ['Wildlife tours', '/tours-by-experience/ethiopia-wildlife-tours'],
        ['Festivals & faith', '/tours-by-experience/ethiopia-festival-tours'],
      ].map(([title, href]) => <Link key={href} href={href} className="rounded-card border border-sand bg-white p-5 text-center font-display text-xl text-charcoal hover:text-gold transition-colors">{title} →</Link>)}</div></div></section>

      <TrustFaq title="Responsible Travel in Ethiopia: Questions and Boundaries" items={RESPONSIBLE_FAQS} />

      <section className="section-padding bg-charcoal text-center text-ivory"><div className="container-max max-w-3xl"><span className="label-eyebrow text-gold">Plan with context</span><h2 className="heading-display text-display-md mt-2">Tell Us How You Hope to Meet, Photograph or Learn</h2><p className="text-ivory/70 leading-7 mt-5 mb-8">Special access, portrait work, research and community-focused travel should be discussed at the planning stage—not improvised after arrival.</p><Link href="/enquire" className="btn-primary">Describe your journey →</Link></div></section>
    </>
  )
}
