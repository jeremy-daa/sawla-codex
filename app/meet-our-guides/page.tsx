import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Private Guides',
  description: 'Meet Sawla Tours guides for private Ethiopia journeys: cultural, wildlife, photography, trekking and historic route specialists.',
  path: '/meet-our-guides',
  keywords: ['Ethiopia private guides', 'Ethiopia tour guides', 'Lalibela guide', 'Omo Valley guide', 'Ethiopia photography guide', 'Sawla Tours guides'],
})

const cards = ["Cultural context", "Wildlife knowledge", "Photography sensitivity", "Local languages"]
const body = ["Our guiding network includes specialists for history, Orthodox heritage, Omo Valley cultures, wildlife, birding, trekking and photography-led journeys.", "We look for calm leadership, language ability, field etiquette, safety awareness and the ability to read travellers as well as places.", "The strongest guides make complex places feel understandable without making them feel simplified."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Guiding standard</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Guides who add context, not noise.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">A Sawla guide is selected for judgement as much as knowledge: when to explain, when to translate, when to wait, and when to protect the dignity of a moment.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">The guide shapes the trip.</h2>
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
