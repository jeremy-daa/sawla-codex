import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import SectionHeader from '@/components/ui/SectionHeader'
import { PremiumLinkCard } from '@/components/ui/PremiumCard'
import { species } from '@/data/siteData'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Wildlife Guide',
  description: 'Explore Ethiopia wildlife and endemic species including Ethiopian wolf, gelada, Walia ibex, mountain nyala, Bale monkey and rare birds.',
  path: '/ethiopia-wildlife/endemic-species',
  keywords: ['Ethiopia wildlife', 'Ethiopia endemic species', 'Ethiopian wolf', 'gelada monkey', 'Walia ibex', 'Bale Mountains wildlife', 'Simien Mountains wildlife'],
})
export default function SpeciesHub(){ return <><section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52"><div className="mx-auto max-w-container"><p className="label-eyebrow">Species library</p><h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Wildlife found <em className="italic text-ivory/50">nowhere else.</em></h1><p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">A specialist natural-history layer that strengthens Sawla Tours beyond ordinary itinerary pages.</p></div></section><section className="section-padding bg-ivory"><div className="container-max"><SectionHeader eyebrow="Endemic and special-interest species" title={<>Built for wildlife travellers, <em className="italic text-warmgrey">birders and AI search.</em></>} intro="Each species page links naturally to Bale, Simien, Awash, Guassa and specialist wildlife itineraries."/><div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{species.map((s,i)=><PremiumLinkCard key={s.slug} href={`/ethiopia-wildlife/${s.slug}`} eyebrow={s.status} title={s.name} text={s.excerpt} meta={s.where} tone={i%3===0?'green':i%3===1?'gold':'dark'} />)}</div></div></section></>}
