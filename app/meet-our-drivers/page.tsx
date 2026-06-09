import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Driver Guides',
  description: 'Sawla Tours works with trusted Ethiopia drivers and 4x4 field teams who understand terrain, timing, safety and traveller comfort.',
  path: '/meet-our-drivers',
  keywords: ['Ethiopia drivers', 'Ethiopia 4x4 driver', 'private driver Ethiopia', 'Ethiopia road travel', 'Sawla Tours drivers'],
})

const cards = ["Trusted 4x4 teams", "Road judgement", "Comfort pacing", "Remote logistics"]
const body = ["Sawla works with trusted drivers who understand regional terrain, remote routing, airport timing, park access, lowland heat and highland road conditions.", "A strong driver reads the road and the traveller at the same time: when to pause, when to move early, when to avoid fatigue and when to adapt.", "For remote areas, we plan vehicles, support, communication and local coordination according to the reality of the route."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Field mobility</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">The driver is part of the experience.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">In Ethiopia, driving is not a background service. Roads, weather, altitude, fuel, vehicle condition and timing can shape the whole journey.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">Good driving is quiet luxury.</h2>
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
