import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import StoryCard from '@/components/stories/StoryCard'
import VerifiedReviewCard from '@/components/stories/VerifiedReviewCard'
import { breadcrumbSchema } from '@/lib/schema'
import { JOURNEY_CASE_STUDIES, VERIFIED_PUBLIC_REVIEWS, getCaseStudy } from '@/data/stories'
import { CANONICAL_JOURNEYS } from '@/data/canonicalJourneys'
import { DESTINATIONS, SITE } from '@/data/siteData'

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return JOURNEY_CASE_STUDIES.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getCaseStudy(slug)
  if (!story) return {}
  return {
    title: story.seo.title,
    description: story.seo.description,
    keywords: [story.seo.primaryKeyword, 'Ethiopia journey case study', 'Sawla Tours'],
    alternates: { canonical: story.seo.canonical },
    openGraph: {
      title: story.seo.title,
      description: story.seo.description,
      url: story.seo.canonical,
      type: 'article',
      publishedTime: story.publishedOn,
      modifiedTime: story.reviewedOn,
      images: [{ url: `/images/about/${story.heroImage}`, width: 1200, height: 630, alt: story.heroAlt }],
    },
    twitter: { card: 'summary_large_image', title: story.seo.title, description: story.seo.description },
  }
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-warmgrey">
          <span className="mt-1 text-gold" aria-hidden="true">◆</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const story = getCaseStudy(slug)
  if (!story) notFound()

  const relatedReview = story.type === 'verified-client-story'
    ? VERIFIED_PUBLIC_REVIEWS.find((review) => review.relatedJourneySlugs.some((journeySlug) => story.relatedJourneySlugs.includes(journeySlug)))
    : undefined
  const relatedJourneys = CANONICAL_JOURNEYS.filter((journey) => story.relatedJourneySlugs.includes(journey.slug)).slice(0, 4)
  const relatedDestinations = DESTINATIONS.filter((destination) => story.relatedDestinationSlugs.includes(destination.slug)).slice(0, 4)
  const otherStories = JOURNEY_CASE_STUDIES.filter((item) => item.slug !== story.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Home', url: SITE.url },
        { name: 'Traveller Stories', url: `${SITE.url}/testimonials` },
        { name: story.title, url: story.seo.canonical },
      ]),
      {
        '@type': 'Article',
        '@id': `${story.seo.canonical}#article`,
        headline: story.title,
        description: story.seo.description,
        image: `${SITE.url}/images/about/${story.heroImage}`,
        datePublished: story.publishedOn,
        dateModified: story.reviewedOn,
        author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        mainEntityOfPage: story.seo.canonical,
        articleSection: story.type === 'verified-client-story' ? 'Verified Traveller Story' : 'Journey Design Study',
      },
    ],
  }

  return (
    <>
      <SchemaScript schema={schema} />

      <section className="relative min-h-[670px] overflow-hidden pt-24 flex items-end pb-16">
        <PlaceholderImage filename={story.heroImage} width={1920} height={1080} category="about" fill label={story.heroAlt} />
        <div className="image-overlay" />
        <div className="relative z-10 container-max text-ivory">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-wider text-ivory/65">
            <Link href="/">Home</Link> / <Link href="/testimonials">Traveller Stories</Link> / <span className="text-ivory">{story.title}</span>
          </nav>
          <span className="label-eyebrow text-gold">{story.eyebrow}</span>
          <h1 className="heading-display mt-2 max-w-5xl text-display-xl text-ivory">{story.title}</h1>
          <p className="mt-5 max-w-3xl text-body-lg leading-8 text-ivory/80">{story.dek}</p>
        </div>
      </section>

      <section className="border-b border-sand bg-white py-7">
        <div className="container-max flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-gold">Content type</div>
            <div className="mt-1 font-display text-xl text-charcoal">{story.type === 'verified-client-story' ? 'Verified traveller story' : 'Editorial journey-design study'}</div>
          </div>
          <div className="max-w-2xl text-sm leading-6 text-warmgrey">{story.transparencyNote}</div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article>
            <span className="label-eyebrow">The planning context</span>
            <h2 className="heading-display mt-2 text-display-md text-charcoal">The Question Behind the Route</h2>
            <p className="mt-6 text-body-lg leading-8 text-warmgrey">{story.summary}</p>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-2xl leading-relaxed text-volcanic">
              {story.planningQuestion}
            </blockquote>
          </article>
          <aside className="rounded-card border border-sand bg-white p-7">
            <span className="label-eyebrow">Transparency first</span>
            <h2 className="mt-2 font-display text-2xl text-charcoal">What This Page Does—and Does Not—Claim</h2>
            <p className="mt-4 text-sm leading-7 text-warmgrey">{story.transparencyNote}</p>
          </aside>
        </div>
      </section>

      {relatedReview && (
        <section className="section-padding-sm bg-white">
          <div className="container-max max-w-5xl"><VerifiedReviewCard review={relatedReview} /></div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-max grid gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-sand bg-ivory p-7">
            <span className="label-eyebrow">Design decisions</span>
            <h2 className="mt-2 mb-6 font-display text-3xl text-charcoal">What the Planner Prioritizes</h2>
            <List items={story.designChoices} />
          </div>
          <div className="rounded-card border border-sand bg-ivory p-7">
            <span className="label-eyebrow">Route shape</span>
            <h2 className="mt-2 mb-6 font-display text-3xl text-charcoal">How the Journey Is Structured</h2>
            <List items={story.routeShape} />
          </div>
          <div className="rounded-card border border-sand bg-ivory p-7">
            <span className="label-eyebrow">Good fit</span>
            <h2 className="mt-2 mb-6 font-display text-3xl text-charcoal">Who This Design Serves</h2>
            <List items={story.travelerFit} />
          </div>
          <div className="rounded-card border border-sand bg-ivory p-7">
            <span className="label-eyebrow">Boundaries</span>
            <h2 className="mt-2 mb-6 font-display text-3xl text-charcoal">What Must Stay Conditional</h2>
            <List items={story.safeguards} />
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-charcoal text-ivory">
        <div className="container-max max-w-4xl text-center">
          <span className="label-eyebrow text-gold">{story.outcomeTitle}</span>
          <p className="mt-4 font-display text-3xl leading-relaxed text-ivory">{story.outcome}</p>
        </div>
      </section>

      {(relatedJourneys.length > 0 || relatedDestinations.length > 0) && (
        <section className="section-padding bg-ivory">
          <div className="container-max grid gap-12 lg:grid-cols-2">
            {relatedJourneys.length > 0 && (
              <div>
                <span className="label-eyebrow">Related journey ideas</span>
                <div className="mt-5 space-y-3">
                  {relatedJourneys.map((journey) => (
                    <Link key={journey.slug} href={`/tours-by-experience/${journey.category}/${journey.slug}`} className="block rounded-card border border-sand bg-white p-5 card-hover">
                      <span className="text-xs uppercase tracking-wider text-gold">{journey.duration}</span>
                      <h3 className="mt-1 font-display text-2xl text-charcoal">{journey.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-warmgrey">{journey.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedDestinations.length > 0 && (
              <div>
                <span className="label-eyebrow">Destination context</span>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedDestinations.map((destination) => (
                    <Link key={destination.slug} href={`/ethiopias-popular-destinations/${destination.slug}`} className="rounded-card border border-sand bg-white p-5 card-hover">
                      <span className="text-xs uppercase tracking-wider text-gold">{destination.region}</span>
                      <h3 className="mt-1 font-display text-xl text-charcoal">{destination.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-warmgrey">{destination.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section-padding-sm border-t border-sand bg-white">
        <div className="container-max">
          <div className="mb-9 text-center">
            <span className="label-eyebrow">Continue reading</span>
            <h2 className="heading-display mt-2 text-display-sm text-charcoal">More Traveller and Planning Stories</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {otherStories.map((item) => <StoryCard key={item.slug} story={item} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center text-ivory">
        <div className="container-max max-w-3xl">
          <span className="label-eyebrow text-gold">Apply the thinking to your dates</span>
          <h2 className="heading-display mt-2 text-display-md">Build a Journey Around Your Priorities</h2>
          <p className="mt-5 mb-8 leading-7 text-ivory/70">Case studies explain decisions; they do not replace date-specific planning. Share your actual travel window, pace and interests for a realistic route.</p>
          <Link href="/enquire" className="btn-primary">Start planning →</Link>
        </div>
      </section>
    </>
  )
}
