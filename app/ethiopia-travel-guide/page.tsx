import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import SectionHeader from '@/components/ui/SectionHeader'
import { PremiumLinkCard } from '@/components/ui/PremiumCard'
import { guides } from '@/data/siteData'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Travel Guide',
  description: 'Field-tested Ethiopia travel guides on visas, safety, seasons, culture, photography, packing, money and planning private journeys.',
  path: '/ethiopia-travel-guide',
  keywords: ['Ethiopia travel guide', 'Ethiopia travel tips', 'Ethiopia travel planning', 'Ethiopia safety', 'Ethiopia visa', 'Ethiopia best time to visit', 'Sawla Tours'],
})
export default function GuideHub(){ const cats=Array.from(new Set(guides.map(g=>g.category))); return <><section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52"><div className="mx-auto max-w-container"><p className="label-eyebrow">Field guide</p><h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Ethiopia travel intelligence, <em className="italic text-ivory/50">not generic advice.</em></h1><p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">A guide library designed for travellers, SEO depth, AI discovery and real pre-departure usefulness.</p></div></section><section className="section-padding bg-ivory"><div className="container-max"><SectionHeader eyebrow="Guide library" title={<>Planning pages with <em className="italic text-warmgrey">commercial purpose.</em></>} intro="Each guide creates trust before enquiry and supports internal links to destinations, tours and species pages."/><div className="mt-8 flex flex-wrap gap-3">{cats.map(c=><span key={c} className="border border-volcanic/10 px-4 py-2 font-body text-[0.62rem] uppercase tracking-[0.16em] text-warmgrey">{c}</span>)}</div><div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{guides.map((g,i)=><PremiumLinkCard key={g.slug} href={`/ethiopia-travel-guide/${g.slug}`} eyebrow={g.category} title={g.title} text={g.excerpt} meta={g.readTime} tone={i%4===0?'gold':i%4===1?'dark':i%4===2?'green':'ember'} />)}</div></div></section></>}
