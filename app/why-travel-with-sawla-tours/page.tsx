import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = buildMetadata({
  title: 'Why Travel with Sawla',
  description: 'Why choose Sawla Tours for Ethiopia: private route design, expert guides, ethical access, responsible travel and strong field logistics.',
  path: '/why-travel-with-sawla-tours',
  keywords: ['why Sawla Tours', 'best Ethiopia tour operator', 'private Ethiopia tours', 'Ethiopia travel specialists', 'responsible Ethiopia travel'],
})

const cards = ["Private by default", "No generic circuits", "Access with respect", "Real-time field judgement"]
const body = ["Sawla Tours is built for travellers who want depth rather than a generic circuit. We design each trip around season, interest, fitness, comfort level and field reality.", "Our advantage is the combination of local travel expertise and Sawla Films’ production mindset: timing, light, story, access and calm problem-solving.", "We do not overpromise. We explain what is realistic, what is sensitive, and what needs flexibility. That honesty creates better trips."]

export default function Page() {
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Why Sawla</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">The difference is mostly invisible — until the journey works.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Great Ethiopia travel depends on dozens of decisions travellers rarely see: route order, market days, permits, guide matching, road judgement, photography etiquette and safety planning.</p>
        </div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]">
          <aside>
            <p className="label-eyebrow">Sawla standard</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">Premium is not decoration. It is competence.</h2>
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
