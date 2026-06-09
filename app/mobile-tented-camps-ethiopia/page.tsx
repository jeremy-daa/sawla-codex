import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Mobile Tented Camps Ethiopia',
  description: 'Sawla Tours mobile tented camps support private Ethiopia expeditions in remote regions with camp comfort, field logistics and local teams.',
  path: '/mobile-tented-camps-ethiopia',
  keywords: ['mobile tented camps Ethiopia', 'Ethiopia expedition camps', 'Omo Valley mobile camp', 'Danakil camp', 'private Ethiopia expedition'],
})

const cards = ["Client tents", "Mess setup", "Field kitchen", "Power and water planning"]
const body = ["Sawla’s mobile camp planning focuses on comfort, safety and practicality: sleeping tents, shade, meals, water, charging, hygiene, local staff and realistic movement days.", "The goal is not artificial luxury in remote areas. It is a well-run field base that lets travellers access places responsibly and rest properly.", "Camp setups are matched to group size, season, terrain, security context and the level of comfort required."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Remote comfort</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Mobile camps for places fixed lodges cannot reach.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Some of Ethiopia’s most powerful journeys require mobile logistics: Afar, remote Omo, Suri territory, specialist wildlife areas and expedition-style routes.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">A camp is a logistics system.</h2>
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
