import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import JourneyTrustStrip from '@/components/trust/JourneyTrustStrip'
import RelatedStoryStrip from '@/components/stories/RelatedStoryStrip'
import {
  CANONICAL_JOURNEYS,
  getCanonicalJourneyByRoute,
  getJourneyCategory,
  getRelatedCanonicalJourneys,
  type CanonicalJourney,
} from '@/data/canonicalJourneys'
import { DESTINATIONS, SITE } from '@/data/siteData'

interface Props {
  params: Promise<{ style: string; slug: string }>
}

const destinationBySlug = new Map(DESTINATIONS.map((destination) => [destination.slug, destination]))

export async function generateStaticParams() {
  return CANONICAL_JOURNEYS.map((journey) => ({
    style: journey.category,
    slug: journey.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { style, slug } = await params
  const journey = getCanonicalJourneyByRoute(style, slug)
  if (!journey) return {}

  return {
    title: journey.seo.title,
    description: journey.seo.description,
    keywords: [
      journey.seo.primaryKeyword,
      ...journey.seo.secondaryKeywords,
      'private Ethiopia tours',
      'Sawla Tours',
    ],
    alternates: { canonical: journey.seo.canonical },
    openGraph: {
      title: journey.seo.title,
      description: journey.seo.description,
      url: journey.seo.canonical,
      type: 'website',
      images: [
        {
          url: journey.image.hero,
          width: 1200,
          height: 630,
          alt: journey.image.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: journey.seo.title,
      description: journey.seo.description,
      images: [journey.image.hero],
    },
  }
}

function statusClass(statusType: CanonicalJourney['statusType']) {
  switch (statusType) {
    case 'available':
      return 'bg-gold-faint text-coffee border-gold-200'
    case 'fixed-season':
      return 'bg-gold-pale text-coffee border-gold-200'
    case 'highly-conditional':
    case 'concept':
      return 'bg-coffee/10 text-coffee border-coffee/20'
    default:
      return 'bg-sand/50 text-charcoal border-sand'
  }
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-warmgrey leading-7">
          <span className="text-gold mt-1" aria-hidden="true">◆</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default async function CanonicalJourneyPage({ params }: Props) {
  const { style, slug } = await params
  const journey = getCanonicalJourneyByRoute(style, slug)
  if (!journey) notFound()

  const category = getJourneyCategory(style)
  if (!category) notFound()

  const relatedJourneys = getRelatedCanonicalJourneys(journey, 3)
  const linkedDestinations = journey.destinations
    .map((destinationSlug) => destinationBySlug.get(destinationSlug))
    .filter((destination): destination is NonNullable<typeof destination> => Boolean(destination))

  const remoteJourney = [
    'omo-valley-suri-cultural-expedition',
    'suri-southwest-ethiopia-photography-expedition',
    'gambella-wilderness-kob-migration-expedition',
    'northern-ethiopia-danakil-discovery',
    'tigray-rock-churches-community-trek',
    'bale-mountains-wilderness-trek',
    'simien-mountains-historic-north-trek',
    'wello-highlands-community-journey',
  ].includes(journey.slug)

  const breadcrumbItems = [
    { name: 'Home', url: SITE.url },
    { name: 'Ethiopia Tours', url: `${SITE.url}/tours-by-experience` },
    { name: category.name, url: `${SITE.url}/tours-by-experience/${style}` },
    { name: journey.title, url: journey.seo.canonical },
  ]

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: journey.title,
      description: journey.seo.description,
      url: journey.seo.canonical,
      image: journey.image.hero,
      duration: `P${journey.durationDays}D`,
      touristType: journey.bestFor,
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: journey.days.length,
        itemListElement: journey.days.map((day) => ({
          '@type': 'ListItem',
          position: day.day,
          name: `Day ${day.day}: ${day.title}`,
          description: day.description,
        })),
      },
      provider: {
        '@type': 'TravelAgency',
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: journey.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schema} />

      <section className="relative min-h-[720px] overflow-hidden pt-24 flex items-end pb-16">
        <PlaceholderImage
          filename={`tour-${journey.slug}-hero.webp`}
          width={1920}
          height={1080}
          category="tour"
          fill
          label={journey.image.heroAlt}
        />
        <div className="image-overlay" />
        <div className="relative z-10 container-max text-ivory">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-wider text-ivory/65">
            <Link href="/">Home</Link> / <Link href="/tours-by-experience">Ethiopia Tours</Link> /{' '}
            <Link href={`/tours-by-experience/${style}`}>{category.shortName}</Link> /{' '}
            <span className="text-ivory">{journey.title}</span>
          </nav>
          <span className="label-eyebrow text-gold">{category.name}</span>
          <h1 className="heading-display text-display-xl text-ivory mt-2 max-w-5xl">{journey.title}</h1>
          <p className="text-ivory/85 text-body-lg mt-5 max-w-3xl">{journey.tagline}</p>
          <p className="text-ivory/65 mt-4 max-w-4xl">{journey.route}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link href={`/enquire?journey=${encodeURIComponent(journey.slug)}`} className="btn-primary">
              Enquire About This Journey →
            </Link>
            <a href="#itinerary" className="btn-secondary">View day-by-day</a>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-sand">
        <div className="container-max py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['Duration', journey.duration],
            ['Difficulty', journey.difficulty],
            ['Best broad window', journey.bestMonths],
            ['Format', 'Private & tailor-made'],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="text-[11px] uppercase tracking-[0.16em] text-gold mb-1">{label}</div>
              <div className="font-display text-lg text-charcoal leading-snug">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_340px] gap-12 items-start">
          <div>
            <AnimateIn>
              <span className="label-eyebrow">Journey overview</span>
              <h2 className="heading-display text-display-md text-charcoal mt-2">Why This Journey Works</h2>
              <div className="mt-6 space-y-5 text-warmgrey leading-8 text-body-lg">
                {journey.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </AnimateIn>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white border border-sand rounded-card p-7">
                <h3 className="font-display text-2xl text-charcoal mb-5">The design logic</h3>
                <BulletList items={journey.why} />
              </div>
              <div className="bg-white border border-sand rounded-card p-7">
                <h3 className="font-display text-2xl text-charcoal mb-5">Signature highlights</h3>
                <BulletList items={journey.highlights} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className={`border rounded-card p-6 ${statusClass(journey.statusType)}`}>
              <div className="text-[11px] uppercase tracking-[0.16em] font-medium mb-2">Operating status</div>
              <h2 className="font-display text-2xl leading-tight">{journey.operatingStatus}</h2>
              <p className="text-sm leading-6 mt-3 opacity-85">{journey.statusSummary}</p>
            </div>
            <div className="bg-charcoal text-ivory rounded-card p-6">
              <span className="label-eyebrow text-gold">Important</span>
              <h2 className="font-display text-2xl mt-2">A Sample Route, Not a Fixed Departure</h2>
              <p className="text-ivory/70 text-sm leading-6 mt-3">
                Dates, route order, hotels, flights and activities are confirmed only after current operational review. Sawla never converts a possible ceremony, wildlife sighting or access condition into a guarantee.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding-sm bg-sand/25">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-card border border-sand p-7">
            <span className="label-eyebrow">A strong fit for</span>
            <h2 className="font-display text-3xl text-charcoal mt-2 mb-5">Best For</h2>
            <BulletList items={journey.bestFor} />
          </div>
          <div className="bg-white rounded-card border border-sand p-7">
            <span className="label-eyebrow">Set expectations early</span>
            <h2 className="font-display text-3xl text-charcoal mt-2 mb-5">May Not Suit</h2>
            <BulletList items={journey.notIdealFor} />
          </div>
        </div>
      </section>

      <section id="itinerary" className="section-padding bg-white scroll-mt-24">
        <div className="container-max max-w-5xl">
          <AnimateIn className="text-center mb-12">
            <span className="label-eyebrow">Day by day</span>
            <h2 className="heading-display text-display-md text-charcoal mt-2">{journey.duration} Sample Itinerary</h2>
            <p className="text-warmgrey mt-4 max-w-3xl mx-auto">
              The final sequence follows current flights, roads, opening arrangements, seasonal conditions and the pace agreed with you.
            </p>
          </AnimateIn>

          <AnimateStagger className="space-y-4" staggerDelay={0.035}>
            {journey.days.map((day) => (
              <article key={day.day} className="grid md:grid-cols-[92px_minmax(0,1fr)] border border-sand rounded-card overflow-hidden bg-ivory">
                <div className="bg-charcoal text-ivory p-5 flex md:flex-col items-center md:items-start gap-2">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-gold">Day</span>
                  <span className="font-display text-4xl leading-none">{day.day}</span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl text-charcoal">{day.title}</h3>
                  <p className="text-warmgrey leading-7 mt-3">{day.description}</p>
                  <p className="text-xs uppercase tracking-wider text-gold mt-4">
                    Overnight: <span className="normal-case tracking-normal text-warmgrey">{day.overnight}</span>
                  </p>
                </div>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <span className="label-eyebrow">Plan with clear expectations</span>
            <h2 className="heading-display text-display-md text-charcoal mt-2 mb-8">Practical Planning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-sand rounded-card p-7">
                <h3 className="font-display text-2xl text-charcoal mb-5">What to know</h3>
                <BulletList items={journey.practical} />
              </div>
              <div className="bg-white border border-sand rounded-card p-7">
                <h3 className="font-display text-2xl text-charcoal mb-5">Conditional experiences</h3>
                <BulletList items={journey.conditional} />
              </div>
            </div>
          </div>
          <div className="bg-charcoal text-ivory rounded-card p-7">
            <span className="label-eyebrow text-gold">Tailor-made</span>
            <h3 className="font-display text-3xl mt-2 mb-5">Ways to Customize</h3>
            <ul className="space-y-4 text-ivory/75 leading-6">
              {journey.customization.map((item) => (
                <li key={item} className="border-b border-ivory/10 pb-4 last:border-0 last:pb-0">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <div>
            <span className="label-eyebrow">Usually included</span>
            <h2 className="font-display text-3xl text-charcoal mt-2 mb-5">Typical Inclusions</h2>
            <BulletList items={journey.inclusions} />
          </div>
          <div>
            <span className="label-eyebrow">Usually separate</span>
            <h2 className="font-display text-3xl text-charcoal mt-2 mb-5">Typical Exclusions</h2>
            <BulletList items={journey.exclusions} />
          </div>
        </div>
      </section>

      <JourneyTrustStrip remote={remoteJourney} />

      <section className="section-padding-sm bg-sand/25">
        <div className="container-max grid lg:grid-cols-[1fr_1fr] gap-10">
          <div>
            <span className="label-eyebrow">Travel responsibly</span>
            <h2 className="heading-display text-display-sm text-charcoal mt-2 mb-5">How This Journey Is Operated</h2>
            <BulletList items={journey.responsibleTravel} />
          </div>
          <div>
            <span className="label-eyebrow">Make the route your own</span>
            <h2 className="heading-display text-display-sm text-charcoal mt-2 mb-5">Extensions and Combinations</h2>
            <div className="space-y-4">
              {journey.extensions.map(([title, duration, description, href]) => {
                const destinationPrefix = '/ethiopias-popular-destinations/'
                const destinationSlug = href.startsWith(destinationPrefix) ? href.slice(destinationPrefix.length) : null
                const safeHref = destinationSlug && !destinationBySlug.has(destinationSlug)
                  ? '/ethiopias-popular-destinations'
                  : href
                return (
                  <Link key={`${title}-${duration}`} href={safeHref} className="block bg-white border border-sand rounded-card p-5 card-hover">
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-display text-xl text-charcoal">{title}</h3>
                      <span className="text-xs uppercase tracking-wider text-gold">{duration}</span>
                    </div>
                    <p className="text-warmgrey text-sm leading-6 mt-2">{description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {linkedDestinations.length > 0 && (
        <section className="section-padding-sm bg-white">
          <div className="container-max">
            <div className="text-center mb-10">
              <span className="label-eyebrow">Destination integration</span>
              <h2 className="heading-display text-display-sm text-charcoal mt-2">Places Featured in This Journey</h2>
              <p className="text-warmgrey mt-3">Explore the existing destination guides for deeper planning context.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {linkedDestinations.map((destination) => (
                <Link
                  key={destination.slug}
                  href={`/ethiopias-popular-destinations/${destination.slug}`}
                  className="group border border-sand rounded-card p-5 bg-ivory card-hover"
                >
                  <span className="text-xs uppercase tracking-wider text-gold">{destination.region}</span>
                  <h3 className="font-display text-2xl text-charcoal mt-2 group-hover:text-gold transition-colors">{destination.name}</h3>
                  <p className="text-warmgrey text-sm leading-6 mt-2 line-clamp-3">{destination.tagline}</p>
                  <span className="inline-block text-xs uppercase tracking-wider text-gold mt-4">Explore destination →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedStoryStrip journeySlug={journey.slug} />

      <section className="section-padding bg-ivory">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="label-eyebrow">Questions before you enquire</span>
            <h2 className="heading-display text-display-md text-charcoal mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {journey.faqs.map((faq) => (
              <details key={faq.question} className="border border-sand rounded-card bg-white group">
                <summary className="flex items-center justify-between gap-5 p-5 md:p-6 cursor-pointer list-none font-medium text-charcoal hover:text-gold transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="px-5 md:px-6 pb-6 text-warmgrey leading-7">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedJourneys.length > 0 && (
        <section className="section-padding-sm bg-white border-t border-sand">
          <div className="container-max">
            <div className="text-center mb-10">
              <span className="label-eyebrow">Continue exploring</span>
              <h2 className="heading-display text-display-sm text-charcoal mt-2">Related Journey Ideas</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedJourneys.map((related) => (
                <Link
                  key={related.slug}
                  href={`/tours-by-experience/${related.category}/${related.slug}`}
                  className="group border border-sand rounded-card overflow-hidden bg-ivory card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <PlaceholderImage
                      filename={`tour-${related.slug}-card.webp`}
                      width={800}
                      height={500}
                      category="tour"
                      fill
                      label={related.image.cardAlt}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-wider text-gold">{related.duration}</span>
                    <h3 className="font-display text-2xl text-charcoal mt-2 group-hover:text-gold transition-colors">{related.title}</h3>
                    <p className="text-warmgrey text-sm mt-2 line-clamp-2">{related.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-charcoal text-center">
        <div className="container-max max-w-3xl">
          <span className="label-eyebrow text-gold">Designed around you</span>
          <h2 className="heading-display text-display-md text-ivory mt-2">Turn This Sample Journey Into Your Ethiopia Journey</h2>
          <p className="text-ivory/70 leading-7 mt-5 mb-8">
            Tell us your dates, interests, travel pace, room preferences and any specialist goals. We will assess current operations and return a transparent tailor-made proposal.
          </p>
          <Link href={`/enquire?journey=${encodeURIComponent(journey.slug)}`} className="btn-primary">Start planning this journey →</Link>
        </div>
      </section>
    </>
  )
}
