import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import DestinationExplorer from '@/components/hubs/DestinationExplorer'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { DESTINATIONS } from '@/data/siteData'
import { CANONICAL_JOURNEYS } from '@/data/canonicalJourneys'
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Destinations: 18 Places to Explore | Sawla Tours',
  description: 'Compare 18 Ethiopia destination guides, from Lalibela, Gondar and the Simien Mountains to Bale, the Omo Valley, Harar, Danakil and specialist remote regions.',
  alternates: { canonical: 'https://www.sawlatours.com/ethiopias-popular-destinations' },
  openGraph: {
    title: 'Ethiopia Destinations: 18 Places to Explore | Sawla Tours',
    description: 'Choose Ethiopia destinations by region, travel effort and the experience you want.',
    url: 'https://www.sawlatours.com/ethiopias-popular-destinations',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Ethiopia destination guides' }],
  },
}

const featuredSlugs = ['lalibela', 'simien-mountain-national-park', 'omo-valley-tribes']
const featured = featuredSlugs.map((slug) => DESTINATIONS.find((item) => item.slug === slug)).filter(Boolean) as typeof DESTINATIONS

const interestPaths = [
  { title: 'Living heritage', body: 'Lalibela, Gondar, Lake Tana, Aksum, Tigray and Harar.', href: '/tours-by-experience/historic-and-cultural-tours' },
  { title: 'Endemic wildlife', body: 'Bale, Simien, Awash–Alledeghi, Chebera Churchura and Gambella concepts.', href: '/tours-by-experience/ethiopia-wildlife-tours' },
  { title: 'Community and culture', body: 'Omo Valley, Konso, coffee regions and regional market landscapes.', href: '/tours-by-experience/omo-valley-community-journeys' },
  { title: 'Trekking and remoteness', body: 'Simien, Bale, Gheralta, Wello and conditional Danakil routes.', href: '/tours-by-experience/ethiopia-adventure-tours' },
]

const schema = [
  collectionPageSchema({
    name: 'Ethiopia destination guides',
    url: 'https://www.sawlatours.com/ethiopias-popular-destinations',
    description: 'A collection of 18 Ethiopia destination guides organized by region, travel effort and experience.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Ethiopia destinations', url: 'https://www.sawlatours.com/ethiopias-popular-destinations' },
  ]),
  itemListSchema({
    name: 'Ethiopia destination guides',
    url: 'https://www.sawlatours.com/ethiopias-popular-destinations',
    items: DESTINATIONS.map((item) => ({ name: item.name, url: `https://www.sawlatours.com/ethiopias-popular-destinations/${item.slug}`, description: item.tagline })),
  }),
]

export default function DestinationsPage() {
  const regions = new Set(DESTINATIONS.map((destination) => destination.region))
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Ethiopia destination guides"
        title="Choose regions for a reason—not to fill a map"
        intro="Ethiopia rewards depth. Compare the landscapes, travel effort, best-known experiences and realistic time needed across 18 destination guides."
        breadcrumb="Destinations"
        image="destinations-hub-hero.jpg"
        imageAlt="Ethiopia landscapes from highlands to cultural regions"
        category="destination"
        primary={{ href: '#explore-all', label: 'Explore all destinations' }}
        secondary={{ href: '/tours-by-experience', label: 'Browse journey styles' }}
        facts={[
          { value: String(DESTINATIONS.length), label: 'destination guides' },
          { value: String(regions.size), label: 'regional groupings' },
          { value: '3–5', label: 'regions in many trips' },
          { value: 'Date-specific', label: 'access checks' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'Time first', body: 'Drive and flight logic determine sensible combinations' },
        { title: 'Standards vary', body: 'Accommodation ranges from strong hotels to simple field stays' },
        { title: 'Access changes', body: 'Remote routes are reconfirmed for actual dates' },
        { title: 'Depth over count', body: 'Fewer regions often create a better journey' },
      ]} />
      <HubAnchorNav items={[
        { href: '#start-here', label: 'Start here' },
        { href: '#explore-all', label: 'All destinations' },
        { href: '#choose-by-interest', label: 'Choose by interest' },
        { href: '#combine', label: 'How to combine' },
      ]} />

      <section id="start-here" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="destination-start-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Three defining contrasts" title="Start with the Ethiopia you most want to understand" intro="These are not the only essential places. They show how different one Ethiopia journey can be from another." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((destination) => (
              <article key={destination.slug} className="group overflow-hidden rounded-card border border-sand bg-white">
                <Link href={`/ethiopias-popular-destinations/${destination.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
                    <PlaceholderImage filename={`dest-${destination.slug}-feature.jpg`} width={720} height={540} category="destination" fill label={destination.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-[.12em] text-gold">{destination.region}</span>
                    <h3 className="mt-3 font-display text-3xl text-charcoal group-hover:text-gold">{destination.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-warmgrey">{destination.excerpt}</p>
                    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-sand pt-4 text-xs text-warmgrey"><span>{destination.duration}</span><span className="text-right">{destination.difficulty}</span></div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="explore-all" className="section-padding scroll-mt-32 bg-gold-faint/45" aria-labelledby="destination-explorer-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Compare the full collection" title="Filter 18 destination guides by region and travel effort" intro="Difficulty describes general access and travel effort, not a guarantee of current road or regional conditions." />
          <div className="mt-10"><DestinationExplorer destinations={DESTINATIONS} /></div>
        </div>
      </section>

      <section id="choose-by-interest" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="interest-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="A better way to choose" title="Let the experience select the geography" intro="A destination becomes useful when it serves the reason you are traveling." theme="dark" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {interestPaths.map((path) => (
              <article key={path.title} className="rounded-card border border-white/12 bg-white/[.045] p-6">
                <h3 className="font-display text-2xl text-ivory">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/65">{path.body}</p>
                <Link href={path.href} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold">See relevant journeys <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="combine" className="section-padding bg-white scroll-mt-32" aria-labelledby="combine-heading">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="label-eyebrow">Route architecture</span>
            <h2 id="combine-heading" className="heading-display text-display-lg text-charcoal">Many strong journeys combine three to five regions</h2>
            <p className="mt-5 leading-8 text-warmgrey">The right number depends on total days, domestic flights, road time and the experience you want in each place. Combining more destinations is not automatically better.</p>
            <Link href="/ethiopia-travel-guide/ethiopia-travel-circuits" className="btn-primary mt-7">Understand Ethiopia circuits</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['8–10 days', 'Choose one coherent region or a compact historic route.'],
              ['11–14 days', 'Combine two complementary themes without rushing every stay.'],
              ['15–18 days', 'Add a distinct second region such as Bale, Omo or Danakil when access works.'],
              ['Remote extensions', 'Allow buffers for roads, flights, weather, permits and field logistics.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-sand bg-ivory p-6">
                <h3 className="font-display text-2xl text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-warmgrey">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand bg-gold-faint/45 py-12">
        <div className="container-max flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div><span className="label-eyebrow">Current collection</span><p className="max-w-3xl text-sm leading-7 text-warmgrey">The 18 guides connect to {CANONICAL_JOURNEYS.length} signature journeys. Remote and conditional regions remain subject to date-specific assessment.</p></div>
          <Link href="/safety-and-travel-assurance" className="btn-ghost flex-none">How access is assessed</Link>
        </div>
      </section>

      <HubCTA title="Build a route around the places that matter" body="Tell us your available days and the regions that interest you. We will explain which combinations are coherent, which require more time and which need current access checks." secondary={{ href: '/trip-finder', label: 'Use the Trip Finder' }} />
    </>
  )
}
