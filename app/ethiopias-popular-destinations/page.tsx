import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { PremiumLinkCard } from '@/components/ui/PremiumCard'
import { destinations } from '@/data/siteData'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Destinations',
  description: 'Explore Ethiopia destinations for private tours: Lalibela, Omo Valley, Danakil, Simien, Bale, Tigray, Harar, Axum and Lake Tana.',
  path: '/ethiopias-popular-destinations',
  keywords: ['Ethiopia destinations', 'Ethiopia travel guide', 'Lalibela', 'Omo Valley', 'Danakil Depression', 'Simien Mountains', 'Bale Mountains', 'private Ethiopia tours'],
})

export default function DestinationsHub() {
  const regions = Array.from(new Set(destinations.map(d => d.region)))
  return (
    <>
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pb-32 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Where we go</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">16 destinations. <em className="italic text-ivory/50">One extraordinary country.</em></h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Ancient stone cities, volcanic deserts, tribal valleys and alpine plateaus. Each destination page is structured for travellers, search engines and AI discovery without losing the human story.</p>
          <div className="mt-10 flex flex-wrap gap-3">{regions.map(r => <span key={r} className="border border-ivory/10 px-4 py-2 font-body text-[0.62rem] uppercase tracking-[0.15em] text-ivory/50">{r}</span>)}</div>
        </div>
      </section>
      <section className="section-padding bg-ivory"><div className="container-max"><SectionHeader eyebrow="Destination index" title={<>Built for depth, <em className="italic text-warmgrey">not brochure cards.</em></>} intro="Each card leads to a specialist destination page with timing, highlights, route ideas, FAQs and related journeys." /><div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{destinations.map((d, i) => <PremiumLinkCard key={d.slug} href={`/ethiopias-popular-destinations/${d.slug}`} eyebrow={d.region} title={d.name} text={d.excerpt} meta={`${d.bestTime} · ${d.duration}`} tone={i % 4 === 0 ? 'gold' : i % 4 === 1 ? 'green' : i % 4 === 2 ? 'ember' : 'dark'} />)}</div></div></section>
      <section className="bg-volcanic px-6 py-20 text-center text-ivory"><h2 className="font-display text-display-md font-light">Not sure where to start?</h2><p className="mx-auto mt-5 max-w-xl font-body text-sm leading-7 text-ivory/50">Tell us your season, comfort level and interests. We will suggest the most intelligent route.</p><Link href="/enquire" className="btn-primary-ivory mt-8">Ask a Specialist</Link></section>
    </>
  )
}
