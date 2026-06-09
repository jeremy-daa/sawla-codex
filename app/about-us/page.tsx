import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'About Sawla Tours',
  description: 'Meet Sawla Tours, an Addis Ababa travel company designing private Ethiopia journeys with field knowledge, cultural respect and logistics care.',
  path: '/about-us',
  keywords: ['about Sawla Tours', 'Ethiopia tour operator', 'Addis Ababa travel company', 'local Ethiopia specialists', 'private Ethiopia tours'],
})

const cards = ["Local ownership", "Field-tested logistics", "Cultural sensitivity", "Cinematic planning"]
const body = ["We believe Ethiopia should not be sold as a checklist. A strong journey needs context, timing, etiquette, logistics and guides who understand the difference between access and intrusion.", "Our work combines national guiding experience, field operations, Sawla Films visual knowledge and long-term relationships with local guides, drivers, lodge teams and community contacts.", "The result is travel that feels considered: slower where depth matters, practical where conditions are hard, and honest when a route needs adjustment."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Who we are</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Ethiopian expertise, shaped in the field.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Sawla Tours is a boutique Ethiopia travel company based in Addis Ababa. We design private journeys through the country’s historic north, Omo Valley, Danakil, Bale, Simien, Rift Valley and lesser-known cultural landscapes.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">A local company with a point of view.</h2>
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
