import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { GUIDE_COMMITMENTS, GUIDE_FAQS, GUIDE_SPECIALISMS } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Meet Our Ethiopia Tour Guides | Sawla Tours',
  description: 'How Sawla Tours matches national, regional, birding, wildlife, photography and trekking guides to private Ethiopia journeys.',
  alternates: { canonical: `${SITE.url}/meet-our-guides` },
  openGraph: { title: 'Sawla Tours Ethiopia Guides', description: 'Guide matching by region, subject, language and traveler profile.', url: `${SITE.url}/meet-our-guides` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Meet Our Guides', url: `${SITE.url}/meet-our-guides` }]),
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Sawla Tours Ethiopia Guides', url: `${SITE.url}/meet-our-guides`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Ethiopia guide specialisms', url: `${SITE.url}/meet-our-guides`, items: GUIDE_SPECIALISMS.map((guide) => ({ name: guide.title, url: `${SITE.url}/meet-our-guides#${guide.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: guide.remit })) }),
  faqSchema(GUIDE_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function GuidesPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Guides & Interpreters"
        title="The Right Guide Changes"
        accent="What You Notice"
        intro="A guide is not a narrator attached to a vehicle. The right guide changes the pace, explains the context, reads the room and knows when a regional specialist should take the lead."
        image="ethiopia-tour-guides-sawla-hero.webp"
        imageAlt="Experienced Ethiopian guide interpreting history, culture and landscape for travelers"
        current="Meet Our Guides"
      />
      <TrustSectionNav current="/meet-our-guides" />

      <section className="section-padding bg-ivory" aria-labelledby="guide-role-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14">
          <article><span className="label-eyebrow">More than information</span><h2 id="guide-role-heading" className="heading-display text-display-md text-charcoal mt-2">Interpretation, Judgment and Human Connection</h2><div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6"><p>Ethiopia asks different things of a guide from one day to the next: explaining a centuries-old church without flattening living faith into a lecture; reading animal behavior on an Afroalpine plateau; negotiating portrait photography respectfully; or slowing a trek because altitude has changed the group’s pace.</p><p>Sawla therefore assigns guides from the itinerary and traveler brief. A strong cultural guide may not be the right lead for a dedicated birding list, and a brilliant naturalist may still need a local interpreter in a community where language and relationships matter.</p></div></article>
          <aside className="rounded-card border border-sand bg-white p-7"><span className="label-eyebrow">Guide matching inputs</span><ul className="space-y-3 text-warmgrey leading-6 mt-5">{['Regions and route depth', 'History, faith, wildlife, birding, photography or trekking focus', 'Language request', 'Traveler pace and group dynamics', 'Mobility and accessibility needs', 'Need for one national guide or several local specialists', 'Fixed dates and guide availability'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}</ul></aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="specialisms-heading">
        <div className="container-max"><AnimateIn className="max-w-3xl mb-12"><span className="label-eyebrow">Guide profiles by function</span><h2 id="specialisms-heading" className="heading-display text-display-md text-charcoal mt-2">Six Kinds of Expertise We May Combine</h2><p className="text-warmgrey text-body-lg leading-8 mt-5">The final guiding structure is stated in the proposal. A regional guide may join for one section, while the lead guide remains with the traveler across the wider route.</p></AnimateIn><AnimateStagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" staggerDelay={0.06}>{GUIDE_SPECIALISMS.map((guide) => <article id={guide.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={guide.title} className="rounded-card border border-sand bg-ivory p-7"><h3 className="font-display text-2xl text-charcoal">{guide.title}</h3><p className="text-warmgrey leading-7 mt-3">{guide.remit}</p><div className="border-t border-sand mt-5 pt-4 text-sm"><strong className="text-charcoal">Best matched to:</strong> <span className="text-warmgrey">{guide.match}</span></div></article>)}</AnimateStagger></div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="commitments-heading">
        <div className="container-max grid lg:grid-cols-[360px_minmax(0,1fr)] gap-14"><div><span className="label-eyebrow text-gold">Guide standard</span><h2 id="commitments-heading" className="heading-display text-display-md mt-2">What Sawla Commits to Before Assignment</h2><p className="text-ivory/65 leading-7 mt-5">These commitments are more useful than calling every guide “expert” without defining the work.</p></div><div className="grid md:grid-cols-2 gap-4">{GUIDE_COMMITMENTS.map((item, index) => <div key={item} className="rounded-card border border-white/12 bg-white/5 p-6"><span className="font-display text-gold text-3xl">{String(index + 1).padStart(2, '0')}</span><p className="text-ivory/72 leading-6 mt-3">{item}</p></div>)}</div></div>
      </section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand"><div className="container-max flex flex-col lg:flex-row gap-7 lg:items-center justify-between"><div className="max-w-2xl"><span className="label-eyebrow">Tell us what expertise matters</span><h2 className="heading-display text-display-sm text-charcoal mt-2">A Guide Can Only Be Matched to a Clear Brief</h2><p className="text-warmgrey leading-7 mt-3">Share your language, subject, pace and interpersonal preferences early—especially for photography, birding, wildlife and festival travel.</p></div><div className="flex flex-wrap gap-3"><Link href="/enquire" className="btn-primary">Request a specialist guide</Link><Link href="/tours-by-experience" className="btn-secondary">Explore journeys</Link></div></div></section>

      <TrustFaq title="Ethiopia Guiding: Practical Questions" items={GUIDE_FAQS} />
    </>
  )
}
