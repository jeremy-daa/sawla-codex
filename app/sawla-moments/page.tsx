import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { PremiumLinkCard } from '@/components/ui/PremiumCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { moments } from '@/data/siteData'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Travel Stories',
  description: 'Read Sawla Moments: editorial Ethiopia travel stories, wildlife field notes, cultural context, photography insight and planning ideas.',
  path: '/sawla-moments',
  keywords: ['Ethiopia travel stories', 'Ethiopia travel blog', 'Sawla Moments', 'Ethiopia wildlife stories', 'Ethiopia culture travel'],
})
export default function MomentsHub(){return <><section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52"><div className="mx-auto max-w-container"><p className="label-eyebrow">Editorial hub</p><h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Sawla Moments</h1><p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Stories from the field that show how Ethiopia feels when a journey is built with patience, timing and respect.</p></div></section><section className="section-padding bg-ivory"><div className="container-max"><SectionHeader eyebrow="From the field" title={<>Editorial content that <em className="italic text-warmgrey">sells by deepening trust.</em></>} /><div className="mt-16 grid gap-6 md:grid-cols-3">{moments.map((m,i)=><PremiumLinkCard key={m.slug} href={`/sawla-moments/${m.slug}`} eyebrow={m.category} title={m.title} text={m.excerpt} meta={`${m.location} · ${m.readTime}`} tone={i===0?'green':i===1?'gold':'dark'} />)}</div></div></section></>}
