import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import {
  getCanonicalJourneysByCategory,
  JOURNEY_CATEGORIES,
} from '@/data/canonicalJourneys'
import { TOUR_STYLE_PAGE_CONTENT } from '@/data/tourStylePageContent'

interface Props {
  params: Promise<{ style: string }>
}

export async function generateStaticParams() {
  return JOURNEY_CATEGORIES.map(({ slug }) => ({ style: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { style } = await params
  const page = TOUR_STYLE_PAGE_CONTENT[style]
  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.canonical,
      type: 'website',
      images: [
        {
          url: `/images/tours/categories/${style}-og.webp`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
  }
}

export default async function TourStylePage({ params }: Props) {
  const { style } = await params
  const page = TOUR_STYLE_PAGE_CONTENT[style]
  if (!page) notFound()

  const journeys = getCanonicalJourneysByCategory(style)
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sawlatours.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ethiopia Tours',
          item: 'https://www.sawlatours.com/tours-by-experience',
        },
        { '@type': 'ListItem', position: 3, name: page.name, item: page.canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: page.title,
      url: page.canonical,
      description: page.metaDescription,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: journeys.length,
        itemListElement: journeys.map((journey, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: journey.title,
          url: journey.seo.canonical,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schema} />

      <section className="relative min-h-[620px] overflow-hidden pt-24 flex items-end pb-16">
        <PlaceholderImage
          filename={`tour-hub-${style}.jpg`}
          width={1920}
          height={1080}
          category="tour"
          fill
          label={page.title}
        />
        <div className="image-overlay" />
        <div className="relative z-10 container-max text-ivory">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-wider text-ivory/65">
            <Link href="/">Home</Link> / <Link href="/tours-by-experience">Ethiopia Tours</Link> /{' '}
            <span className="text-ivory">{page.name}</span>
          </nav>
          <span className="label-eyebrow text-gold">{page.eyebrow}</span>
          <h1 className="heading-display text-display-xl text-ivory mt-2 max-w-5xl">{page.title}</h1>
          <p className="text-ivory/82 text-body-lg mt-5 max-w-3xl">{page.heroDescription}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-xs uppercase tracking-wider text-gold/90">
            <span>{journeys.length} canonical {journeys.length === 1 ? 'journey' : 'journeys'}</span>
            <span aria-hidden="true">•</span>
            <span>{page.trustLine}</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link href="/enquire" className="btn-primary">{page.primaryCta} →</Link>
            <a href="#canonical-journeys" className="btn-secondary">View the journeys</a>
          </div>
        </div>
      </section>

      <section id="journey-content" className="section-padding bg-ivory scroll-mt-20">
        <div className="container-max max-w-5xl">
          <article
            className="[&_h2]:font-display [&_h2]:text-charcoal [&_h2]:text-4xl [&_h2]:mt-16 [&_h2]:mb-5 [&_h3]:font-display [&_h3]:text-charcoal [&_h3]:text-2xl [&_h3]:mt-9 [&_h3]:mb-3 [&_p]:text-warmgrey [&_p]:leading-8 [&_p]:mb-5 [&_strong]:text-charcoal [&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:text-warmgrey [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:space-y-2 [&_ol]:text-warmgrey [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_th]:bg-sand/60 [&_th]:text-left [&_th]:p-3 [&_th]:text-charcoal [&_td]:border-b [&_td]:border-sand [&_td]:p-3 [&_td]:text-warmgrey [&_hr]:my-12 [&_hr]:border-sand"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </section>

      <section id="canonical-journeys" className="section-padding bg-sand/25 scroll-mt-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="label-eyebrow">Signature journey collection</span>
            <h2 className="heading-display text-display-md text-charcoal">Choose a Strong Starting Point</h2>
            <p className="text-warmgrey mt-3 max-w-2xl mx-auto">
              These are Sawla’s principal products for this travel style. Every route remains private and is rebuilt around current access, dates, pace and comfort expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeys.map((journey) => (
              <Link
                key={journey.slug}
                href={`/tours-by-experience/${style}/${journey.slug}`}
                className="group bg-white rounded-card overflow-hidden border border-sand card-hover block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <PlaceholderImage
                    filename={`tour-${journey.slug}-card.webp`}
                    width={800}
                    height={500}
                    category="tour"
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                    label={journey.image.cardAlt}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="label-eyebrow text-gold">{journey.duration}</span>
                    <span className="text-warmgrey text-xs">{journey.difficulty}</span>
                  </div>
                  <h3 className="font-display text-charcoal text-2xl leading-tight group-hover:text-gold transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-warmgrey text-sm mt-3 leading-6">{journey.tagline}</p>
                  <p className="text-warmgrey/80 text-xs mt-4 line-clamp-2">{journey.route}</p>
                  <span className="inline-block mt-5 text-gold text-xs uppercase tracking-wider">View full journey →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-charcoal text-center">
        <div className="container-max max-w-3xl">
          <span className="label-eyebrow text-gold">Private and tailor-made</span>
          <h2 className="font-display text-ivory text-display-sm mt-2 mb-4">Build This Journey Around You</h2>
          <p className="text-ivory/65 mb-7">
            Share your dates, interests, pace and comfort expectations. A Sawla specialist will shape the route around current access and the experience you actually want.
          </p>
          <Link href="/enquire" className="btn-primary">Start planning →</Link>
        </div>
      </section>
    </>
  )
}
