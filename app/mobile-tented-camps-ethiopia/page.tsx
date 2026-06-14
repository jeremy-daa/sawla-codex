import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { CAMP_FAQS, CAMP_FORMATS, CAMP_PRINCIPLES } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Mobile Tented Camps & Remote Logistics | Sawla Tours',
  description: 'Explore Sawla Tours supported trekking, expedition and specialist traveler camps in Ethiopia, with clear specifications for tents, meals, sanitation, power and field support.',
  alternates: { canonical: `${SITE.url}/mobile-tented-camps-ethiopia` },
  openGraph: { title: 'Ethiopia Mobile Tented Camps | Sawla Tours', description: 'Temporary field camps specified honestly for each journey.', url: `${SITE.url}/mobile-tented-camps-ethiopia` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Mobile Tented Camps', url: `${SITE.url}/mobile-tented-camps-ethiopia` }]),
  {
    '@context': 'https://schema.org', '@type': 'Service', name: 'Sawla Tours Ethiopia Mobile Tented Camps',
    url: `${SITE.url}/mobile-tented-camps-ethiopia`, description: 'Temporary supported trekking, expedition and specialist traveler camp logistics in Ethiopia.',
    provider: { '@id': `${SITE.url}/#travelagency` }, areaServed: { '@type': 'Country', name: 'Ethiopia' },
  },
  itemListSchema({ name: 'Sawla Tours mobile camp formats', url: `${SITE.url}/mobile-tented-camps-ethiopia`, items: CAMP_FORMATS.map((camp) => ({ name: camp.title, url: `${SITE.url}/mobile-tented-camps-ethiopia#${camp.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: camp.purpose })) }),
  faqSchema(CAMP_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function MobileCampsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Remote Field Logistics"
        title="A Camp Is a System,"
        accent="Not Just a Tent"
        intro="Sawla designs temporary camps for supported trekking, remote expeditions and specialist traveler journeys when location, access or operating rhythm makes conventional accommodation unsuitable. Every departure receives its own written specification."
        image="ethiopia-mobile-tented-camp-hero.webp"
        imageAlt="Sawla Tours temporary expedition camp in a remote Ethiopia landscape"
        current="Mobile Tented Camps"
      />
      <TrustSectionNav current="/mobile-tented-camps-ethiopia" />

      <section className="section-padding bg-ivory" aria-labelledby="camp-answer-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14">
          <article>
            <span className="label-eyebrow">The direct answer</span>
            <h2 id="camp-answer-heading" className="heading-display text-display-md text-charcoal mt-2">What Is a Sawla Tours Mobile Camp?</h2>
            <div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6">
              <p>A mobile camp is a temporary accommodation and support system installed for a particular traveler journey. It can place travelers closer to a trail, community, wildlife area, geological location or specialist field base while giving the field team control over meals, timing, power and basic services.</p>
              <p>The phrase does not describe one permanent product. A light trekking camp and a walk-in expedition camp are different. A specialist field camp with expanded charging, equipment storage and flexible meal times is different again. The proposal must state what is actually supplied.</p>
            </div>
          </article>
          <aside className="rounded-card border border-sand bg-white p-7">
            <span className="label-eyebrow">Written camp specification</span>
            <h2 className="font-display text-2xl text-charcoal mt-2">Confirm Before Payment</h2>
            <ul className="space-y-3 text-warmgrey leading-6 mt-5">
              {['Tent type, dimensions and occupancy', 'Bed, mattress, linen and mosquito protection', 'Private or shared toilet and wash arrangement', 'Dining or mess space', 'Meal style and dietary requirements', 'Water source and drinking-water provision', 'Power and charging capacity', 'Camp staff, cook, scouts and local support', 'Vehicle access, luggage and resupply', 'Weather, evacuation and closure plan'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="formats-heading">
        <div className="container-max">
          <AnimateIn className="max-w-3xl mb-12">
            <span className="label-eyebrow">Three operating formats</span>
            <h2 id="formats-heading" className="heading-display text-display-md text-charcoal mt-2">Match the Camp to the Work It Must Do</h2>
            <p className="text-warmgrey text-body-lg leading-8 mt-5">The exact equipment is confirmed after route, group size, duration, transport and comfort expectations are known.</p>
          </AnimateIn>
          <AnimateStagger className="grid lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {CAMP_FORMATS.map((camp) => (
              <article id={camp.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={camp.title} className="rounded-card border border-sand bg-ivory p-7">
                <h3 className="font-display text-3xl text-charcoal">{camp.title}</h3>
                <p className="text-warmgrey leading-7 mt-3">{camp.purpose}</p>
                <h4 className="text-xs uppercase tracking-[0.13em] text-gold mt-6">May include</h4>
                <ul className="space-y-2 text-sm text-warmgrey mt-3">
                  {camp.mayInclude.map((item) => <li key={item} className="flex gap-2"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="system-heading">
        <div className="container-max">
          <div className="max-w-3xl mb-11"><span className="label-eyebrow text-gold">The camp system</span><h2 id="system-heading" className="heading-display text-display-md mt-2">Six Workstreams Behind a Comfortable Night in the Field</h2></div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              ['Site & permissions', 'Land use, local permission, access, drainage, wind, privacy, vehicle movement and final clearance.'],
              ['Accommodation', 'Tent specification, occupancy, sleeping system, lighting, insect protection and personal storage.'],
              ['Food & water', 'Menus, dietary requirements, potable water, refrigeration limits, resupply and kitchen hygiene.'],
              ['Sanitation & waste', 'Toilets, washing, grey water, refuse, fuel and a practical close-down plan.'],
              ['Power & communication', 'Charging load, generator or battery plan, fuel, noise, lighting and communication coverage.'],
              ['People & contingencies', 'Camp manager, cooks, assistants, local staff, scouts, driver support, medical considerations and evacuation logic.'],
            ].map(([title, body]) => <article key={title} className="rounded-card border border-white/12 bg-white/5 p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="text-ivory/65 leading-6 mt-3">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" aria-labelledby="principles-heading">
        <div className="container-max grid lg:grid-cols-[360px_minmax(0,1fr)] gap-14">
          <div><span className="label-eyebrow">Honest field comfort</span><h2 id="principles-heading" className="heading-display text-display-md text-charcoal mt-2">Six Principles for Describing a Camp Properly</h2><p className="text-warmgrey leading-7 mt-5">Remote comfort is valuable. It becomes misleading only when one photograph or the word luxury replaces a real specification.</p></div>
          <div className="grid md:grid-cols-2 gap-4">
            {CAMP_PRINCIPLES.map((item, index) => <div key={item} className="rounded-card border border-sand bg-white p-6"><span className="font-display text-gold text-3xl">{String(index + 1).padStart(2, '0')}</span><p className="text-warmgrey leading-6 mt-3">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand">
        <div className="container-max grid md:grid-cols-3 gap-5">
          {[
            ['Remote traveler journeys', 'Trekking, Afar, Suri, Gambella and expedition concepts.', '/tours-by-experience/ethiopia-adventure-tours'],
            ['Photography & wildlife camps', 'Early field sessions, equipment charging, meals and location support.', '/tours-by-experience/ethiopia-photography-tours'],
            ['Safety & assurance', 'How remote route and contingency decisions are made.', '/safety-and-travel-assurance'],
          ].map(([title, body, href]) => <Link key={href} href={href} className="rounded-card border border-sand bg-white p-6 card-hover"><h2 className="font-display text-2xl text-charcoal">{title}</h2><p className="text-warmgrey text-sm leading-6 mt-2">{body}</p><span className="inline-block text-gold text-xs uppercase tracking-wider mt-4">Explore →</span></Link>)}
        </div>
      </section>

      <TrustFaq title="Mobile Camp Planning: Questions to Resolve" items={CAMP_FAQS} />

      <section className="section-padding bg-charcoal text-center text-ivory">
        <div className="container-max max-w-3xl"><span className="label-eyebrow text-gold">Specify before you sell</span><h2 className="heading-display text-display-md mt-2">Design the Camp Around the Route and the People Using It</h2><p className="text-ivory/70 leading-7 mt-5 mb-8">Tell us the location, dates, group, luggage, dietary needs, equipment load and comfort expectations. We will identify what is feasible and what must be confirmed locally.</p><Link href="/enquire" className="btn-primary">Discuss a remote journey →</Link></div>
      </section>
    </>
  )
}
