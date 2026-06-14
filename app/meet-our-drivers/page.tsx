import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { DRIVER_FAQS, DRIVER_STANDARDS, VEHICLE_CATEGORIES } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Tour Drivers & Private Vehicles | Sawla Tours',
  description: 'Understand Sawla Tours driver standards and vehicle categories for private Ethiopia trips, from city transfers and minibuses to 4×4 and support vehicles.',
  alternates: { canonical: `${SITE.url}/meet-our-drivers` },
  openGraph: { title: 'Sawla Tours Drivers & Vehicles', description: 'Route-matched drivers, realistic vehicle specifications and clear responsibilities.', url: `${SITE.url}/meet-our-drivers` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Drivers and Vehicles', url: `${SITE.url}/meet-our-drivers` }]),
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Sawla Tours Drivers and Vehicles', url: `${SITE.url}/meet-our-drivers`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Private tour vehicle categories in Ethiopia', url: `${SITE.url}/meet-our-drivers`, items: VEHICLE_CATEGORIES.map((vehicle) => ({ name: vehicle.title, url: `${SITE.url}/meet-our-drivers#${vehicle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: vehicle.use })) }),
  faqSchema(DRIVER_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function DriversPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Drivers & Vehicle Operations"
        title="The Road Is Part of"
        accent="the Journey Design"
        intro="Ethiopia’s distances, surfaces, altitude and seasonal conditions make driver and vehicle choices operational decisions—not small transport details added after the itinerary is written."
        image="ethiopia-tour-driver-vehicle-hero.webp"
        imageAlt="Professional Ethiopia tour driver with a private expedition vehicle"
        current="Drivers & Vehicles"
      />
      <TrustSectionNav current="/meet-our-drivers" />

      <section className="section-padding bg-ivory" aria-labelledby="driver-answer-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14"><article><span className="label-eyebrow">The direct answer</span><h2 id="driver-answer-heading" className="heading-display text-display-md text-charcoal mt-2">What Makes a Good Ethiopia Tour Driver?</h2><div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6"><p>A good tour driver combines route familiarity, calm judgment, mechanical awareness, realistic timing and professional collaboration with the guide. The live Sawla site describes its drivers as having seven to twenty years of driving experience; the exact assignment and current credentials should still be verified for every departure.</p><p>The vehicle must also fit the journey. A comfortable minibus can be better than a 4×4 on a paved cultural route, while a remote road may require ground clearance, traction, additional fuel planning and a support vehicle. The proposal should explain the category and assumptions instead of using “Land Cruiser” as a universal badge of quality.</p></div></article><aside className="rounded-card border border-sand bg-white p-7"><span className="label-eyebrow">Before vehicle assignment</span><ul className="space-y-3 text-warmgrey leading-6 mt-5">{['Number of travelers and seat expectations', 'Luggage and camera equipment', 'Road surface and seasonal conditions', 'Daily distance and altitude', 'Remote recovery and fuel considerations', 'Need for charging, refrigeration or production equipment', 'Accessibility and step-in height', 'Guide, scout and support-staff seats'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}</ul></aside></div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="standards-heading"><div className="container-max"><AnimateIn className="max-w-3xl mb-12"><span className="label-eyebrow">Driver operating standard</span><h2 id="standards-heading" className="heading-display text-display-md text-charcoal mt-2">Six Responsibilities Behind a Smooth Drive</h2></AnimateIn><AnimateStagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" staggerDelay={0.06}>{DRIVER_STANDARDS.map((standard, index) => <article key={standard.title} className="rounded-card border border-sand bg-ivory p-7"><span className="font-display text-gold text-3xl">{String(index + 1).padStart(2, '0')}</span><h3 className="font-display text-2xl text-charcoal mt-2">{standard.title}</h3><p className="text-warmgrey leading-7 mt-3">{standard.body}</p></article>)}</AnimateStagger></div></section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="vehicles-heading"><div className="container-max"><div className="max-w-3xl mb-11"><span className="label-eyebrow text-gold">Vehicle categories</span><h2 id="vehicles-heading" className="heading-display text-display-md mt-2">Specify the Function Before the Model</h2><p className="text-ivory/65 text-body-lg leading-8 mt-5">Vehicle photographs are illustrative until an exact unit is confirmed. The written proposal should state the category and any feature that materially affects comfort or operation.</p></div><div className="grid md:grid-cols-2 gap-5">{VEHICLE_CATEGORIES.map((vehicle) => <article id={vehicle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={vehicle.title} className="rounded-card border border-white/12 bg-white/5 p-7"><h3 className="font-display text-2xl text-gold">{vehicle.title}</h3><p className="text-ivory/78 leading-7 mt-3"><strong>Typical use:</strong> {vehicle.use}</p><p className="text-ivory/55 text-sm leading-6 mt-3">{vehicle.notes}</p></article>)}</div></div></section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand" aria-labelledby="roles-heading"><div className="container-max grid lg:grid-cols-2 gap-12"><div><span className="label-eyebrow">Two different jobs</span><h2 id="roles-heading" className="heading-display text-display-sm text-charcoal mt-2">Why Guide and Driver Roles Are Usually Separate</h2><p className="text-warmgrey leading-7 mt-5">Driving requires sustained attention to the road, vehicle and timing. Guiding requires sustained attention to the traveler, interpretation and local interaction. Combining the roles can be appropriate for a short service, but on demanding multi-day journeys the separation protects both quality and safety.</p></div><div className="grid sm:grid-cols-2 gap-4"><div className="rounded-card border border-sand bg-white p-6"><h3 className="font-display text-2xl text-charcoal">Driver leads on</h3><p className="text-warmgrey leading-6 mt-3">Vehicle condition, road judgment, fuel, loading, safe movement and driving-time realism.</p></div><div className="rounded-card border border-sand bg-white p-6"><h3 className="font-display text-2xl text-charcoal">Guide leads on</h3><p className="text-warmgrey leading-6 mt-3">Interpretation, traveler communication, site coordination, cultural protocol and daily experience.</p></div></div></div></section>

      <TrustFaq title="Drivers, Vehicles and Road Travel in Ethiopia" items={DRIVER_FAQS} />

      <section className="section-padding bg-charcoal text-center text-ivory"><div className="container-max max-w-3xl"><span className="label-eyebrow text-gold">Plan the road honestly</span><h2 className="heading-display text-display-md mt-2">Tell Us Your Group, Luggage and Comfort Priorities</h2><p className="text-ivory/70 leading-7 mt-5 mb-8">Vehicle planning is more accurate when camera equipment, cases, mobility needs and seating expectations are known before costing.</p><div className="flex flex-wrap justify-center gap-3"><Link href="/enquire" className="btn-primary">Start planning</Link><Link href="/safety-and-travel-assurance" className="btn-ghost-light">Safety & assurance</Link></div></div></section>
    </>
  )
}
