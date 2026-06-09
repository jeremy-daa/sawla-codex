import type { Metadata } from 'next'
import { buildMetadata, destinationKeywords } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Arrow from '@/components/ui/Arrow'
import { GradientMedia } from '@/components/ui/PremiumCard'
import { destinations, itineraries, species } from '@/data/siteData'
import SchemaScript from '@/components/ui/SchemaScript'
import { generateDestinationSchema, graphSchema, webPageSchema } from '@/lib/schema'
export function generateStaticParams() { return destinations.map((d) => ({ slug: d.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = destinations.find(x => x.slug === slug)
  if (!d) return {}
  return buildMetadata({
    title: `${d.name} Ethiopia Guide`,
    description: `Plan a private ${d.name} Ethiopia tour with best time, highlights, routing notes, related journeys and Sawla field insight.`,
    path: `/ethiopias-popular-destinations/${d.slug}`,
    keywords: destinationKeywords(d.name, d.region),
  })
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = destinations.find(x => x.slug === slug)
  if (!d) notFound()
  const relatedTours = itineraries.filter(i => d.excerpt.toLowerCase().includes(i.style.split('-')[0]) || i.title.toLowerCase().includes(d.name.toLowerCase().split(' ')[0])).slice(0, 3)
  const relatedSpecies = species.filter(s => s.where.toLowerCase().includes(d.name.toLowerCase().split(' ')[0]) || d.slug.includes('bale') || d.slug.includes('simien')).slice(0, 3)
  const path = `/ethiopias-popular-destinations/${d.slug}`; const schema = graphSchema([webPageSchema({ path, name: `${d.name} Ethiopia Guide`, description: d.excerpt, type: 'WebPage', breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Destinations', url: '/ethiopias-popular-destinations' }, { name: d.name, url: path }] }), generateDestinationSchema({ name: d.name, slug: d.slug, description: d.excerpt, image: d.heroImage, region: d.region })])
  return (
    <>
      <SchemaScript data={schema} />
      <section className="bg-volcanic pt-36 text-ivory md:pt-44">
        <div className="container-max grid gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="label-eyebrow">{d.region}</p>
            <h1 className="mt-6 font-display text-display-xl font-light leading-none">{d.name}</h1>
            <p className="mt-6 max-w-2xl font-body text-body-md text-ivory/60">{d.tagline}</p>
          </div>
          <GradientMedia label={d.bestTime} tone="gold" />
        </div>
      </section>
      <section className="bg-ivory py-16"><div className="container-max grid gap-px bg-volcanic/10 md:grid-cols-3">{[['Best time', d.bestTime], ['Recommended stay', d.duration], ['Region', d.region]].map(([k,v]) => <div key={k} className="bg-ivory p-7"><p className="label-eyebrow">{k}</p><p className="mt-3 font-display text-3xl text-volcanic">{v}</p></div>)}</div></section>
      <section className="section-padding bg-ivory"><div className="container-max grid gap-14 lg:grid-cols-[0.75fr_1fr]"><div><p className="label-eyebrow">Why it matters</p><h2 className="mt-5 font-display text-display-md font-light text-volcanic">A destination page with a point of view.</h2></div><div><p className="font-body text-body-md text-warmgrey">{d.excerpt}</p><div className="mt-10 grid gap-4 sm:grid-cols-2">{d.highlights.map(h => <div key={h} className="border border-volcanic/10 p-5"><span className="font-body text-[0.62rem] uppercase tracking-[0.16em] text-gold">Highlight</span><p className="mt-2 font-display text-2xl text-volcanic">{h}</p></div>)}</div></div></div></section>
      <section className="bg-volcanic py-24 text-ivory"><div className="container-max"><div className="grid gap-8 lg:grid-cols-3">{['Local access and etiquette handled before arrival', 'Routing designed around light, market days and road reality', 'Integrated with nearby destinations, species pages and journeys'].map((x,i)=><div key={x} className="border border-ivory/10 p-8"><p className="font-display text-5xl italic text-gold/70">0{i+1}</p><p className="mt-8 font-body text-sm leading-7 text-ivory/60">{x}</p></div>)}</div></div></section>
      {(relatedTours.length>0 || relatedSpecies.length>0) && <section className="section-padding bg-ivory"><div className="container-max"><h2 className="font-display text-display-md font-light text-volcanic">Related journeys and field links</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{relatedTours.map(t => <Link key={t.slug} href={`/tours-by-experience/${t.style}/${t.slug}`} className="border border-volcanic/10 p-6 hover:border-gold"><p className="label-eyebrow">Journey</p><h3 className="mt-3 font-display text-2xl text-volcanic">{t.title}</h3><p className="mt-3 font-body text-sm text-warmgrey">{t.duration} · {t.priceFrom}</p></Link>)}{relatedSpecies.map(s => <Link key={s.slug} href={`/ethiopia-wildlife/${s.slug}`} className="border border-volcanic/10 p-6 hover:border-gold"><p className="label-eyebrow">Species</p><h3 className="mt-3 font-display text-2xl text-volcanic">{s.name}</h3><p className="mt-3 font-body text-sm text-warmgrey">{s.where}</p></Link>)}</div></div></section>}
      <section className="bg-volcanic px-6 py-24 text-center text-ivory"><p className="label-eyebrow">Plan {d.name}</p><h2 className="mx-auto mt-5 max-w-3xl font-display text-display-md font-light">Build this destination into a private Ethiopia journey.</h2><Link href="/enquire" className="btn-primary-ivory mt-9">Start Planning <Arrow /></Link></section>
    </>
  )
}
