import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'
import SchemaScript from '@/components/ui/SchemaScript'

export const metadata: Metadata = buildMetadata({
  title: 'Sawla Foundation',
  description: 'Learn how Sawla Tours connects private Ethiopia journeys with responsible travel, local benefit, cultural respect and conservation care.',
  path: '/sawla-foundation',
  keywords: ['Sawla Foundation', 'responsible travel Ethiopia', 'Ethiopia community tourism', 'ethical Ethiopia tours', 'conservation Ethiopia'],
})

const pillars = [
  ['Community benefit', 'Work with local guides, village contacts, scouts, cooks and drivers so tourism income reaches the people who make access possible.'],
  ['Cultural respect', 'Prepare travellers before sensitive encounters, handle permission clearly, and avoid turning people, ceremonies or faith into spectacle.'],
  ['Conservation awareness', 'Use field guides and species pages to connect travel with habitat, endemic wildlife and the practical value of protected areas.'],
  ['Training and standards', 'Keep improving guiding, safety, first-aid thinking, vehicle standards, communication and traveller preparation.'],
]

export default function SawlaFoundationPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sawla Foundation',
    about: { '@type': 'Organization', name: 'Sawla Tours' },
  }

  return (
    <>
      <SchemaScript data={schema} />
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Impact with restraint</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Responsible travel should be designed into the journey.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">The Sawla Foundation page gives the brand a long-term home for community, conservation and training commitments. It is written honestly: no inflated charity language, no vague impact theatre.</p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-14 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="label-eyebrow">The principle</p>
            <h2 className="mt-5 font-display text-display-md font-light text-volcanic">A better trip leaves better relationships behind.</h2>
            <p className="mt-6 font-body text-body-md text-warmgrey">Sawla’s impact approach begins before arrival: route selection, local staffing, permissions, cultural briefings, realistic expectations and community-led logistics.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(([title, text], index) => (
              <div key={title} className="border border-volcanic/10 p-7">
                <p className="font-display text-5xl italic text-gold/70">0{index + 1}</p>
                <h3 className="mt-8 font-display text-3xl text-volcanic">{title}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-warmgrey">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volcanic py-24 text-ivory">
        <div className="container-max grid gap-px bg-ivory/10 md:grid-cols-3">
          {[['Local teams', 'Regional guides, drivers, scouts and community contacts selected for real field knowledge.'], ['Ethical access', 'Permission, translation and traveller etiquette are treated as core logistics, not afterthoughts.'], ['Transparent limits', 'We explain when roads, ceremonies, wildlife or safety conditions make a plan unrealistic.']].map(([title, text]) => (
            <div key={title} className="bg-volcanic p-8">
              <h3 className="font-display text-3xl text-ivory">{title}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-ivory/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-center">
        <p className="label-eyebrow">Travel with purpose</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-display-md font-light text-volcanic">Build an Ethiopia trip that respects the people and places you came to see.</h2>
        <Link href="/responsible-travel" className="btn-outline-dark mt-9">Read Responsible Travel <Arrow /></Link>
      </section>
    </>
  )
}
