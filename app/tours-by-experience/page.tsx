import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Arrow from '@/components/ui/Arrow'
import { tourStyles, itineraries } from '@/data/siteData'

export const metadata: Metadata = buildMetadata({
  title: 'Private Ethiopia Tours',
  description: 'Browse private Ethiopia tours by interest: historic routes, Omo Valley culture, Danakil expeditions, wildlife, photography and festivals.',
  path: '/tours-by-experience',
  keywords: ['private Ethiopia tours', 'Ethiopia tour packages', 'custom Ethiopia tours', 'Ethiopia itinerary', 'Omo Valley tour', 'Lalibela tour', 'Danakil tour', 'wildlife tours Ethiopia'],
})

export default function ToursHub() {
  return <>
    <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52"><div className="mx-auto max-w-container"><p className="label-eyebrow">Journeys</p><h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Private Ethiopia tours, <em className="italic text-ivory/50">built around experience.</em></h1><p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">Choose a travel style first. We then shape the route, season, pace, accommodation, guide profile and field logistics around you.</p></div></section>
    <section className="section-padding bg-ivory"><div className="container-max"><SectionHeader eyebrow="Tour styles" title={<>Six clear pathways into <em className="italic text-warmgrey">Ethiopia.</em></>} intro="This structure helps travellers choose faster and helps search engines understand Sawla’s expertise with depth."/><div className="mt-16 grid gap-px bg-volcanic/10 md:grid-cols-2 lg:grid-cols-3">{tourStyles.map(style => { const count = itineraries.filter(i=>i.style===style.slug).length; return <Link key={style.slug} href={`/tours-by-experience/${style.slug}`} className="group bg-ivory p-8 transition duration-500 hover:bg-gold-faint"><p className="font-display text-5xl italic text-gold/60">{style.number}</p><h2 className="mt-8 font-display text-4xl font-light text-volcanic">{style.name}</h2><p className="mt-4 font-body text-sm leading-7 text-warmgrey">{style.desc}</p><p className="mt-8 inline-flex items-center gap-2 font-body text-[0.68rem] uppercase tracking-[0.16em] text-volcanic group-hover:gap-4 group-hover:text-gold">{count || 'Custom'} itineraries <Arrow /></p></Link>})}</div></div></section>
  </>
}
