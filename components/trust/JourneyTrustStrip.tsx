import Link from 'next/link'

const links = [
  { title: 'How we assess a route', body: 'Date-specific feasibility, operating status and contingency thinking.', href: '/safety-and-travel-assurance' },
  { title: 'Who guides the journey', body: 'Guide matching by region, subject, language and traveler profile.', href: '/meet-our-guides' },
  { title: 'Drivers and vehicles', body: 'Vehicle categories and driver responsibilities explained without overpromising.', href: '/meet-our-drivers' },
  { title: 'Responsible field practice', body: 'Consent, cultural context, wildlife etiquette and practical impact choices.', href: '/responsible-travel' },
]

export default function JourneyTrustStrip({ remote = false }: { remote?: boolean }) {
  const items = remote
    ? [...links.slice(0, 3), { title: 'Remote camp specification', body: 'What is confirmed for tents, meals, sanitation, power and field support.', href: '/mobile-tented-camps-ethiopia' }]
    : links

  return (
    <section className="section-padding-sm bg-charcoal text-ivory" aria-labelledby="journey-assurance-heading">
      <div className="container-max">
        <div className="max-w-3xl mb-9">
          <span className="label-eyebrow text-gold">Operational assurance</span>
          <h2 id="journey-assurance-heading" className="heading-display text-display-sm mt-2">See Who and What Sits Behind This Itinerary</h2>
          <p className="text-ivory/65 mt-3 leading-7">The sample route is supported by a planning, field and decision framework. Review the standards that shape the final proposal.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-card border border-white/12 bg-white/5 p-5 hover:border-gold/70 hover:bg-white/8 transition-colors">
              <h3 className="font-display text-xl text-ivory">{item.title}</h3>
              <p className="text-ivory/60 text-sm leading-6 mt-2">{item.body}</p>
              <span className="inline-block text-gold text-xs uppercase tracking-wider mt-4">Read the standard →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
