import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Travel Specialists',
  description: 'Meet Sawla Tours specialists who design private Ethiopia journeys with field knowledge, cultural context and detailed logistics planning.',
  path: '/meet-our-travel-specialists',
  keywords: ['Ethiopia travel specialists', 'Ethiopia trip planners', 'Addis Ababa tour experts', 'private Ethiopia tours', 'Sawla Tours team'],
})

const cards = ["Route design", "Access planning", "Hotel matching", "Pre-trip dossier"]
const body = ["The best itinerary is not the longest one. It is the one that fits the traveller, the season and the ground conditions.", "Sawla specialists coordinate with regional guides, drivers, lodge contacts, local permission holders and production-style logistics teams where needed.", "For travellers, this means clearer expectations, better pacing and fewer surprises once the trip begins."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Planning team</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Specialists who understand Ethiopia before they sell it.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Our travel specialists are the bridge between your interests and the field reality of Ethiopia. They know the routes, seasons, lodges, permissions and personalities that make a journey work.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">Planning is a field skill.</h2>
            <Link href="/enquire" className="btn-primary-dark mt-9">Start Planning <Arrow /></Link>
          </aside>
          <div>
            <div className="space-y-7 font-body text-body-md leading-8 text-warmgrey">
              {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {cards.map((item, index) => <div key={item} className="border border-volcanic/10 p-6 transition duration-350 hover:border-gold/50 hover:bg-gold-faint"><p className="font-display text-4xl italic text-gold/60">0{index + 1}</p><p className="mt-5 font-display text-2xl text-volcanic">{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-volcanic px-6 py-24 text-center text-ivory">
        <p className="label-eyebrow">Private Ethiopia travel</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-display-md font-light">Let us shape the right journey around your interests.</h2>
        <Link href="/trip-finder" className="btn-primary-ivory mt-9">Find Your Trip <Arrow /></Link>
      </section>
    </>
  )
}
