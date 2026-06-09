import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { destinations, itineraries, tourStyles } from '@/data/siteData'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Find Your Ethiopia Trip',
  description: 'Use the Sawla trip finder to choose a private Ethiopia tour by interest, duration and destination, then refine it with a specialist.',
  path: '/trip-finder',
  keywords: ['Ethiopia trip finder', 'plan Ethiopia tour', 'private Ethiopia itinerary', 'custom Ethiopia tour', 'Ethiopia travel planner'],
})

export default function TripFinderPage() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Trip finder</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Start with the feeling, then choose the route.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">A premium trip finder should reduce confusion without flattening Ethiopia into filters. This page gives visitors a guided path into the best-fit journey style.</p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <p className="label-eyebrow">Choose your travel style</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tourStyles.map((style) => (
              <Link key={style.slug} href={`/tours-by-experience/${style.slug}`} className="group border border-volcanic/10 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold-faint">
                <p className="font-display text-5xl italic text-gold/70">{style.number}</p>
                <h2 className="mt-7 font-display text-3xl text-volcanic">{style.name}</h2>
                <p className="mt-4 font-body text-sm leading-7 text-warmgrey">{style.desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-body text-[0.68rem] uppercase tracking-[0.16em] text-volcanic transition-all group-hover:gap-4 group-hover:text-gold">View trips <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eee6d8]">
        <div className="container-max grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="label-eyebrow">Popular route lengths</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">Use duration as a planning tool, not a cage.</h2>
            <p className="mt-6 font-body text-body-md text-warmgrey">Sawla will adjust route, pace, hotels and guiding after enquiry. These cards simply help visitors make the first decision.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['1 day', '3 days', '7 days', '8 days', '10 days', '12 days', '13 days', '14 days'].map((duration) => {
              const count = itineraries.filter((i) => i.duration === duration).length
              return <div key={duration} className="border border-volcanic/10 bg-ivory p-6"><p className="font-display text-4xl text-volcanic">{duration}</p><p className="mt-2 font-body text-sm text-warmgrey">{count || 'Several'} possible route{count === 1 ? '' : 's'}</p></div>
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-volcanic text-ivory">
        <div className="container-max">
          <p className="label-eyebrow">Destination anchors</p>
          <div className="mt-10 grid gap-px bg-ivory/10 md:grid-cols-4">
            {destinations.slice(0, 8).map((d) => (
              <Link href={`/ethiopias-popular-destinations/${d.slug}`} key={d.slug} className="bg-volcanic p-6 transition duration-350 hover:bg-ivory/[0.04]">
                <h3 className="font-display text-2xl text-ivory">{d.name}</h3>
                <p className="mt-2 font-body text-xs uppercase tracking-[0.14em] text-gold">{d.bestTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-center">
        <p className="label-eyebrow">Better than filters</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-display-md font-light text-volcanic">Tell us what you want from Ethiopia. We will shape the route around you.</h2>
        <Link href="/enquire" className="btn-primary-dark mt-9">Start Planning <Arrow /></Link>
      </section>
    </>
  )
}
