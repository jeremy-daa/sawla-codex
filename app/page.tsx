import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubCTA from '@/components/hubs/HubCTA'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import { homepageSchema } from '@/lib/schema'
import { DESTINATIONS, MOMENTS_ARTICLES, TOUR_STYLES } from '@/data/siteData'
import { CANONICAL_JOURNEYS, CANONICAL_JOURNEY_COUNT, getCanonicalJourney } from '@/data/canonicalJourneys'
import VerifiedReviewCard from '@/components/stories/VerifiedReviewCard'
import StoryCard from '@/components/stories/StoryCard'
import { JOURNEY_CASE_STUDIES, VERIFIED_PUBLIC_REVIEWS } from '@/data/stories'
import { FOUNDER_PROFILE } from '@/data/trustArchitecture'

export const metadata: Metadata = {
  title: 'Private Ethiopia Tours Planned by Local Experts | Sawla Tours',
  description: 'Private, tailor-made Ethiopia tours designed by an Addis Ababa-based team. Explore 25 signature journeys, 18 destination guides and specialist cultural, wildlife, birding and photography travel.',
  alternates: { canonical: 'https://www.sawlatours.com' },
}

const featuredDestinationSlugs = [
  'lalibela',
  'simien-mountain-national-park',
  'omo-valley-tribes',
  'bale-mountains-national-park',
  'tigray-rock-hewn-churches-historical-sites',
  'danakil-depression-tour-packages',
]
const featuredDestinations = featuredDestinationSlugs
  .map((slug) => DESTINATIONS.find((destination) => destination.slug === slug))
  .filter(Boolean) as typeof DESTINATIONS

const flagshipSlugs = [
  'classic-northern-ethiopia-circuit',
  'essential-lower-omo-valley-journey',
  'simien-northern-endemics-wildlife-safari',
]
const flagshipJourneys = flagshipSlugs.map((slug) => getCanonicalJourney(slug)).filter(Boolean) as typeof CANONICAL_JOURNEYS
const homeReview = VERIFIED_PUBLIC_REVIEWS[0]
const homeStory = JOURNEY_CASE_STUDIES.find((story) => story.slug === 'historic-north-designed-for-depth-not-speed')
const featuredMoment = MOMENTS_ARTICLES.find((article) => article.slug === 'how-we-plan-custom-ethiopia-journey') ?? MOMENTS_ARTICLES[0]

const planningPaths = [
  {
    title: 'I know what I want to experience',
    body: 'Compare history, community, wildlife, birding, photography, trekking, festivals and specialist journeys.',
    href: '/tours-by-experience',
    label: 'Explore journey styles',
  },
  {
    title: 'I know where I want to go',
    body: `Start with Lalibela, Bale, the Simien Mountains, the Omo Valley or one of ${DESTINATIONS.length} destination guides.`,
    href: '/ethiopias-popular-destinations',
    label: 'Browse destinations',
  },
  {
    title: 'I need help narrowing it down',
    body: 'Use the Trip Finder to carry your dates, duration, interests and budget into a useful enquiry.',
    href: '/trip-finder',
    label: 'Use the Trip Finder',
  },
]

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homepageSchema} />
      <HeroSection />

      <HubEvidenceBar dark items={[
        { title: 'Ethiopia-based', body: 'Planning and operations from Addis Ababa' },
        { title: 'Private by design', body: 'Routes shaped around your dates and pace' },
        { title: `${CANONICAL_JOURNEY_COUNT} journey ideas`, body: 'Strong starting points, not fixed packages' },
        { title: String(DESTINATIONS.length) + ' destination guides', body: 'From iconic heritage to remote regions' },
      ]} />

      <section className="section-padding bg-ivory" aria-labelledby="home-intro-heading">
        <div className="container-max grid items-start gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div>
            <span className="label-eyebrow">Ethiopia, understood in context</span>
            <h2 id="home-intro-heading" className="heading-display text-display-xl text-charcoal">One country. Many completely different journeys.</h2>
            <div className="mt-7 max-w-3xl space-y-5 text-[1.05rem] leading-8 text-warmgrey">
              <p>Ethiopia can be a journey through living Orthodox heritage, a search for endemic wildlife, a slow encounter with coffee country, a highland trek, a specialist birding route or a carefully coordinated photography expedition.</p>
              <p>Sawla Tours starts with the experience you want—not a pre-set circuit. We then test the route against season, access, travel time, comfort, field support and the realities of operating it well.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/why-travel-with-sawla-tours" className="btn-primary justify-center">Why travel with Sawla</Link>
              <Link href="/how-we-work" className="btn-ghost justify-center">How planning works</Link>
            </div>
          </div>
          <aside className="rounded-card border border-sand bg-white p-7 md:p-9">
            <span className="hub-kicker">Founder-led planning</span>
            <h3 className="mt-4 font-display text-4xl font-light text-charcoal">{FOUNDER_PROFILE.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[.12em] text-gold">{FOUNDER_PROFILE.role}</p>
            <p className="mt-5 text-sm leading-7 text-warmgrey">{FOUNDER_PROFILE.summary}</p>
            <div className="mt-6 border-l-2 border-gold pl-5">
              <span className="text-[11px] font-semibold uppercase tracking-[.12em] text-warmgrey">Planning principle</span>
              <p className="mt-2 font-display text-2xl font-light leading-snug text-charcoal">Remove a rushed stop before diluting the whole journey.</p>
            </div>
            <Link href="/about-us#founder" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">Meet the founder <span className="ml-2" aria-hidden="true">→</span></Link>
            <div className="mt-6 grid grid-cols-3 gap-5 border-t border-sand pt-6">
              <div><strong className="block font-display text-3xl font-light text-gold">2009</strong><span className="text-xs uppercase tracking-[.11em] text-warmgrey">Established</span></div>
              <div><strong className="block font-display text-3xl font-light text-gold">{TOUR_STYLES.length}</strong><span className="text-xs uppercase tracking-[.11em] text-warmgrey">Travel styles</span></div>
              <div><strong className="block font-display text-3xl font-light text-gold">{CANONICAL_JOURNEY_COUNT}</strong><span className="text-xs uppercase tracking-[.11em] text-warmgrey">Journey ideas</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="home-journeys-heading">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <HubSectionHeader eyebrow="Signature journeys" title="Three strong ways to begin" intro="These routes show the level of thought, pacing and operational clarity used across the complete journey collection." theme="dark" />
            <Link href="/tours-by-experience" className="btn-ghost-light flex-none justify-center">View all journey ideas</Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {flagshipJourneys.map((journey) => (
              <article key={journey.slug} className="overflow-hidden rounded-card border border-white/12 bg-white/[.045]">
                <Link href={`/tours-by-experience/${journey.category}/${journey.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <PlaceholderImage filename={journey.image.card} width={720} height={450} category="tour" fill label={journey.image.cardAlt} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[.11em] text-gold"><span>{journey.duration}</span><span className="text-ivory/52">{journey.difficulty}</span></div>
                    <h3 className="mt-4 font-display text-3xl font-light leading-tight text-ivory group-hover:text-gold">{journey.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ivory/65">{journey.tagline}</p>
                    <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-ivory/48">{journey.route}</p>
                    <span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold">See the journey <span className="ml-2" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="home-path-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Find your starting point" title="Choose the easiest way into the site" intro="You do not need to know the exact itinerary. Start with an interest, a destination or a few practical preferences." align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {planningPaths.map((path, index) => (
              <article key={path.title} className="card-luxury p-7 md:p-8">
                <span className="font-display text-4xl font-light text-gold/45">0{index + 1}</span>
                <h3 className="mt-5 font-display text-3xl text-charcoal">{path.title}</h3>
                <p className="mt-4 text-sm leading-7 text-warmgrey">{path.body}</p>
                <Link href={path.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">{path.label} <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gold-faint/55" aria-labelledby="home-destinations-heading">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <HubSectionHeader eyebrow="Places to understand" title="Six destinations that reveal different Ethiopias" intro="Use these as anchors, then combine regions only when travel time and the experience justify it." />
            <Link href="/ethiopias-popular-destinations" className="btn-ghost flex-none justify-center">Explore all {DESTINATIONS.length}</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <Link key={destination.slug} href={`/ethiopias-popular-destinations/${destination.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-card">
                <PlaceholderImage filename={`dest-${destination.slug}-home.jpg`} width={720} height={540} category="destination" fill label={destination.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="image-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <span className="text-xs font-semibold uppercase tracking-[.12em] text-gold">{destination.region}</span>
                  <h3 className="mt-2 font-display text-3xl font-light">{destination.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ivory/70">{destination.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" aria-labelledby="home-evidence-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Evidence and method" title="See what is verified—and how routes are designed" intro="Public feedback is linked to its source. Editorial case studies are clearly labelled and show the decisions behind a journey." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
            {homeReview && <VerifiedReviewCard review={homeReview} compact />}
            {homeStory && <StoryCard story={homeStory} />}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/testimonials" className="btn-primary">Traveller evidence</Link>
            <Link href={`/sawla-moments/${featuredMoment.slug}`} className="btn-ghost">Read how we plan</Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm border-y border-sand bg-white" aria-labelledby="home-planning-heading">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="label-eyebrow">Prepare before you enquire</span>
            <h2 id="home-planning-heading" className="heading-display text-display-md text-charcoal">Practical answers, reviewed for current planning</h2>
            <p className="mt-4 max-w-3xl leading-7 text-warmgrey">Use the Ethiopia Travel Guide for timing, costs, visas, accommodation, wildlife and route planning. Date-sensitive guidance includes review notes and official-source direction.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link href="/ethiopia-travel-guide" className="btn-primary justify-center">Open the travel guide</Link>
            <Link href="/trip-finder" className="btn-ghost justify-center">Use the Trip Finder</Link>
          </div>
        </div>
      </section>

      <HubCTA
        title="Tell us what draws you to Ethiopia"
        body="Share your dates, interests, pace and comfort expectations. An Ethiopia-based specialist will review what is realistic before proposing a route."
        primary={{ href: '/enquire', label: 'Plan your journey' }}
        secondary={{ href: '/tours-by-experience', label: 'Browse journey ideas' }}
      />
    </>
  )
}
