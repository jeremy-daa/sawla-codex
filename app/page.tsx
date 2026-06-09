import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import VideoHero from '@/components/ui/VideoHero'
import SectionHeader from '@/components/ui/SectionHeader'
import Arrow from '@/components/ui/Arrow'
import { GradientMedia, PremiumLinkCard } from '@/components/ui/PremiumCard'
import { destinations, tourStyles, itineraries, guides, species, testimonials } from '@/data/siteData'
import SchemaScript from '@/components/ui/SchemaScript'
import { graphSchema, itemListSchema, webPageSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Bespoke Ethiopia Tours',
  description: 'Private Ethiopia tours to Lalibela, Omo Valley, Danakil, Simien and Bale, designed by local specialists with cinematic field knowledge.',
  path: '/',
  keywords: ['Ethiopia tours', 'bespoke Ethiopia tours', 'private Ethiopia tours', 'Lalibela tours', 'Omo Valley tours', 'Danakil tours', 'Simien Mountains tours', 'Sawla Tours'],
})

export default function HomePage() {
  const featuredDestinations = destinations.filter(d => d.featured).slice(0, 6)
  const featuredItineraries = itineraries.filter(i => i.featured).slice(0, 3)
  const homeSchema = graphSchema([
    webPageSchema({ path: '/', name: 'Bespoke Ethiopia Tours', description: 'Private Ethiopia tours designed by Sawla Tours specialists in Addis Ababa.', type: 'WebPage' }),
    itemListSchema({ name: 'Featured Ethiopia destinations', path: '/', items: featuredDestinations.map(d => ({ name: d.name, url: `/ethiopias-popular-destinations/${d.slug}` })) }),
    itemListSchema({ name: 'Featured Ethiopia itineraries', path: '/', items: featuredItineraries.map(i => ({ name: i.title, url: `/tours-by-experience/${i.style}/${i.slug}` })) }),
  ])
  return (
    <>
      <SchemaScript data={homeSchema} />
      <VideoHero />

      <section className="bg-volcanic border-y border-ivory/10">
        <div className="container-max grid gap-px bg-ivory/10 md:grid-cols-4">
          {[
            ['500+', 'custom journeys planned'],
            ['16', 'destination worlds'],
            ['36', 'itinerary frameworks'],
            ['2009', 'field experience since'],
          ].map(([num, label]) => (
            <div key={label} className="bg-volcanic px-6 py-8 text-center">
              <div className="font-display text-5xl font-light text-ivory">{num}</div>
              <p className="mt-2 font-body text-[0.62rem] uppercase tracking-[0.18em] text-ivory/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <SectionHeader eyebrow="The Sawla point of view" title={<>A journey should feel <em className="italic text-warmgrey">designed, not assembled.</em></>} intro="The expensive part of a great Ethiopia trip is usually invisible: timing the right market day, avoiding the wrong road, knowing when a church is alive with liturgy, understanding how to ask permission, and shaping each day around light, altitude and human rhythm." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Field knowledge first', 'Routes are planned by people who have guided, filmed and negotiated access in the regions we sell.'],
              ['02', 'Cinematic restraint', 'Sawla Films gives the travel brand a visual intelligence most local operators cannot imitate.'],
              ['03', 'Private by design', 'Every journey begins with a conversation, then becomes a route, pace, guide team and practical dossier.'],
            ].map(([num, title, text]) => (
              <div key={title} className="border border-volcanic/10 p-8 transition duration-500 hover:border-gold/50 hover:bg-gold-faint">
                <p className="font-display text-5xl italic text-gold/70">{num}</p>
                <h3 className="mt-8 font-display text-3xl font-light text-volcanic">{title}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-warmgrey">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-volcanic">
        <div className="container-max">
          <SectionHeader inverse eyebrow="Where we go" title={<>Sixteen worlds, <em className="italic text-ivory/50">one Ethiopia.</em></>} intro="Ancient stone cities, volcanic deserts, tribal valleys, alpine plateaus and endemic wildlife habitats — connected through careful routing rather than generic circuits." />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredDestinations.map((d, index) => (
              <Link key={d.slug} href={`/ethiopias-popular-destinations/${d.slug}`} className="group border border-ivory/10 bg-ivory/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-ivory/[0.06]">
                <GradientMedia label={`${String(index + 1).padStart(2, '0')} · ${d.region}`} tone={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'green' : 'ember'} />
                <div className="p-3 pt-7">
                  <p className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-gold">{d.bestTime}</p>
                  <h3 className="mt-3 font-display text-4xl font-light text-ivory">{d.name}</h3>
                  <p className="mt-4 line-clamp-3 font-body text-sm leading-7 text-ivory/50">{d.excerpt}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-body text-[0.68rem] uppercase tracking-[0.16em] text-ivory/60 transition-all group-hover:gap-4 group-hover:text-gold">Open guide <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center"><Link href="/ethiopias-popular-destinations" className="btn-primary-ivory">View All Destinations</Link></div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <SectionHeader eyebrow="Ways to travel" title={<>Choose the Ethiopia <em className="italic text-warmgrey">you want to feel.</em></>} intro="Six core travel styles become the organising logic for the site — clearer for humans, stronger for search engines, easier for AI crawlers to understand." />
          <div className="mt-16 grid gap-px bg-volcanic/10 md:grid-cols-2 lg:grid-cols-3">
            {tourStyles.map((style) => (
              <Link key={style.slug} href={`/tours-by-experience/${style.slug}`} className="group relative min-h-[28rem] overflow-hidden bg-volcanic p-8 text-ivory">
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-92 transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <p className="font-display text-4xl italic text-gold/70">{style.number}</p>
                  <h3 className="mt-5 font-display text-4xl font-light leading-tight">{style.name}</h3>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory/60">{style.desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-body text-[0.68rem] uppercase tracking-[0.16em] text-gold transition-all group-hover:gap-4">Explore <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#eee6d8]">
        <div className="container-max">
          <SectionHeader eyebrow="Signature itineraries" title={<>Frameworks with <em className="italic text-warmgrey">room for you.</em></>} intro="These are not package tours. They are tested route structures that become private journeys after we understand your pace, interest, season and comfort level." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {featuredItineraries.map((it, i) => <PremiumLinkCard key={it.slug} href={`/tours-by-experience/${it.style}/${it.slug}`} eyebrow={it.duration} title={it.title} text={it.overview} meta={it.priceFrom} tone={i === 0 ? 'gold' : i === 1 ? 'green' : 'ember'} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-volcanic">
        <div className="container-max grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <p className="label-eyebrow">Search moat</p>
            <h2 className="mt-5 font-display text-display-lg font-light text-ivory">Field guides and species pages that local competitors do not have.</h2>
            <p className="mt-7 font-body text-body-md text-ivory/60">The site is built as more than a brochure. Ethiopia travel guide pages, species pages and internal linking create depth for SEO, AIO, GEO and LLM-based discovery.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link className="btn-primary-ivory" href="/ethiopia-travel-guide">Read Guides</Link><Link className="btn-ghost-light" href="/ethiopia-wildlife/endemic-species">Species Library <Arrow /></Link></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {guides.slice(0, 2).map(g => <PremiumLinkCard key={g.slug} href={`/ethiopia-travel-guide/${g.slug}`} eyebrow={g.category} title={g.title} text={g.excerpt} tone="dark" />)}
            {species.slice(0, 2).map(s => <PremiumLinkCard key={s.slug} href={`/ethiopia-wildlife/${s.slug}`} eyebrow={s.status} title={s.name} text={s.excerpt} tone="green" />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <SectionHeader eyebrow="Trust architecture" title={<>What travellers remember <em className="italic text-warmgrey">after the itinerary ends.</em></>} />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map(t => (
              <blockquote key={t.id} className="border border-volcanic/10 bg-white/40 p-8">
                <div className="mb-8 font-body text-[0.7rem] uppercase tracking-[0.18em] text-gold">★★★★★ · {t.tour}</div>
                <p className="font-display text-2xl font-light leading-9 text-volcanic">“{t.text}”</p>
                <footer className="mt-8 font-body text-sm text-warmgrey">{t.name} · {t.country}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volcanic px-6 py-24 text-center text-ivory md:py-32">
        <p className="label-eyebrow">Private enquiry</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-display-lg font-light">Tell us what kind of Ethiopia you want to encounter.</h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-body-md text-ivory/60">We will reply with a thoughtful first response, not a brochure. The route comes later. The conversation comes first.</p>
        <div className="mt-10"><Link href="/enquire" className="btn-primary-ivory">Start Planning</Link></div>
      </section>
    </>
  )
}
