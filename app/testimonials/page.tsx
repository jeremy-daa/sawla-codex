import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { testimonials, tourStyles } from '@/data/siteData'
import Arrow from '@/components/ui/Arrow'
import SchemaScript from '@/components/ui/SchemaScript'
import { graphSchema, itemListSchema, webPageSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Sawla Tours Reviews',
  description: 'Read traveller reviews for Sawla Tours Ethiopia journeys across Lalibela, Omo Valley, Danakil, Simien, Bale and photography trips.',
  path: '/testimonials',
  keywords: ['Sawla Tours reviews', 'Ethiopia tour reviews', 'Ethiopia travel testimonials', 'private Ethiopia tours', 'Sawla Tours testimonials'],
})

export default function TestimonialsPage() {
  const schema = graphSchema([
    webPageSchema({ path: '/testimonials', name: 'Sawla Tours Reviews', description: 'Traveller stories and testimonials for Sawla Tours private Ethiopia journeys.' }),
    itemListSchema({ name: 'Sawla Tours traveller testimonials', path: '/testimonials', items: testimonials.map((t) => ({ name: `${t.name} — ${t.tour}`, url: '/testimonials' })) }),
    {
      '@type': 'TravelAgency',
      '@id': 'https://www.sawlatours.com/#organization',
      review: testimonials.slice(0, 10).map((t) => ({
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
        author: { '@type': 'Person', name: t.name },
        reviewBody: t.text,
        itemReviewed: { '@id': 'https://www.sawlatours.com/#organization' },
      })),
    },
  ])

  return (
    <>
      <SchemaScript data={schema} />
      <section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52">
        <div className="mx-auto max-w-container">
          <p className="label-eyebrow">Traveller proof</p>
          <h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">Reviews that show the field reality.</h1>
          <p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">A premium Ethiopia website needs trust architecture, not decorative praise. These traveller stories are mapped by journey type, country and field experience so visitors can see the kind of care Sawla Tours provides.</p>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="container-max grid gap-px bg-volcanic/10 md:grid-cols-4">
          {[['15', 'curated reviews'], ['5.0', 'average rating'], ['8+', 'travel styles'], ['500+', 'custom journeys']].map(([value, label]) => (
            <div key={label} className="bg-ivory p-7 text-center">
              <p className="font-display text-5xl text-volcanic">{value}</p>
              <p className="mt-2 font-body text-[0.62rem] uppercase tracking-[0.18em] text-warmgrey">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="border border-volcanic/10 bg-white/40 p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold-faint">
                <div className="mb-8 font-body text-[0.7rem] uppercase tracking-[0.18em] text-gold">★★★★★ · {t.tour}</div>
                <p className="font-display text-2xl font-light leading-9 text-volcanic">“{t.text}”</p>
                <footer className="mt-8 font-body text-sm text-warmgrey">{t.name} · {t.country} · {t.year}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-volcanic text-ivory">
        <div className="container-max grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="label-eyebrow">Find the closest match</p>
            <h2 className="mt-5 font-display text-display-md font-light">Reviews organised around the way you want to travel.</h2>
            <p className="mt-6 font-body text-body-md text-ivory/60">The next production step is to connect live Trustpilot or Google reviews while preserving this editorial review architecture.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tourStyles.map((style) => (
              <Link key={style.slug} href={`/tours-by-experience/${style.slug}`} className="border border-ivory/10 p-6 transition duration-350 hover:border-gold hover:bg-ivory/[0.04]">
                <p className="label-eyebrow">{style.number}</p>
                <h3 className="mt-3 font-display text-2xl text-ivory">{style.name}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-ivory/50">{style.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-center">
        <p className="label-eyebrow">Your journey next</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-display-md font-light text-volcanic">Speak with Sawla before choosing a route.</h2>
        <Link href="/enquire" className="btn-primary-dark mt-9">Start a Private Enquiry <Arrow /></Link>
      </section>
    </>
  )
}
