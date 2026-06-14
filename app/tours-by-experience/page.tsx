import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubFaq from '@/components/hubs/HubFaq'
import HubCTA from '@/components/hubs/HubCTA'
import JourneyStyleFinder, { type JourneyStyleOption } from '@/components/hubs/JourneyStyleFinder'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { TOUR_STYLES } from '@/data/siteData'
import { CANONICAL_JOURNEYS, CANONICAL_JOURNEY_COUNT, getCanonicalJourneysByCategory } from '@/data/canonicalJourneys'
import { breadcrumbSchema, collectionPageSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Tours by Travel Style | Sawla Tours',
  description: 'Compare 25 private Ethiopia journey ideas across history, Omo Valley, wildlife, birding, trekking, festivals, photography, coffee and Addis Ababa short stays.',
  alternates: { canonical: 'https://www.sawlatours.com/tours-by-experience' },
  openGraph: {
    title: 'Ethiopia Tours by Travel Style | Sawla Tours',
    description: 'Choose the right Ethiopia journey by interest, duration, pace and season.',
    url: 'https://www.sawlatours.com/tours-by-experience',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Private Ethiopia journey ideas' }],
  },
}

const styleConfig: Record<string, Omit<JourneyStyleOption, 'slug' | 'name' | 'tagline' | 'description' | 'count'>> = {
  'historic-and-cultural-tours': { interests: ['heritage', 'faith'], minDays: 6, maxDays: 18, pace: 'mixed' },
  'omo-valley-community-journeys': { interests: ['community', 'photography'], minDays: 7, maxDays: 15, pace: 'moderate' },
  'ethiopia-wildlife-tours': { interests: ['wildlife', 'photography'], minDays: 6, maxDays: 15, pace: 'mixed' },
  'ethiopia-birdwatching-tours': { interests: ['birding', 'wildlife', 'photography'], minDays: 8, maxDays: 21, pace: 'moderate' },
  'ethiopia-adventure-tours': { interests: ['active', 'heritage'], minDays: 4, maxDays: 16, pace: 'active' },
  'ethiopia-festival-tours': { interests: ['faith', 'heritage', 'photography'], minDays: 5, maxDays: 12, pace: 'mixed' },
  'ethiopia-photography-tours': { interests: ['photography', 'wildlife', 'community'], minDays: 7, maxDays: 18, pace: 'moderate' },
  'ethiopia-special-interest-tours': { interests: ['specialist', 'heritage'], minDays: 5, maxDays: 14, pace: 'mixed' },
  'addis-ababa-day-tours': { interests: ['heritage', 'specialist'], minDays: 1, maxDays: 4, pace: 'easy' },
}

const styleOptions: JourneyStyleOption[] = TOUR_STYLES.map((style) => ({
  slug: style.slug,
  name: style.name,
  tagline: style.tagline,
  description: style.description,
  count: getCanonicalJourneysByCategory(style.slug).length,
  ...styleConfig[style.slug],
}))

const featuredSlugs = [
  'classic-northern-ethiopia-circuit',
  'essential-lower-omo-valley-journey',
  'great-rift-southern-endemics-birding-safari',
  'simien-northern-endemics-wildlife-safari',
  'suri-southwest-ethiopia-photography-expedition',
  'ethiopian-coffee-odyssey',
]
const featuredJourneys = featuredSlugs.map((slug) => CANONICAL_JOURNEYS.find((journey) => journey.slug === slug)).filter(Boolean) as typeof CANONICAL_JOURNEYS

const faqs = [
  { question: 'How many days do I need for a first Ethiopia journey?', answer: 'Eight to fourteen days gives most first-time travelers enough space for a coherent route. A focused Addis and Lalibela trip can work in four or five days, while combining the historic north with the Omo Valley, wildlife or a remote expedition usually needs two weeks or more.' },
  { question: 'Are these fixed packages?', answer: 'No. These are proven route ideas. Dates, pace, accommodation, activity level, specialist guiding and transport are adjusted after a planning conversation.' },
  { question: 'Can I combine travel styles?', answer: 'Yes. Strong combinations include historic Ethiopia with Simien wildlife, Bale birding with coffee country, Omo travel with photography, or a festival with a wider heritage route. The combination must still make sense geographically and seasonally.' },
  { question: 'What is the broad best season?', answer: 'October to March is the broadest dry-season window for many routes, but there is no single best month for every interest. Festival dates, bird migration, green landscapes, coffee harvest, altitude and regional rainfall can favor other periods.' },
  { question: 'How are conditional destinations handled?', answer: 'Access, domestic transport, weather, local arrangements and operating conditions are reconfirmed for the actual dates. If a route is not sensible, Sawla proposes an alternative rather than selling an outdated itinerary.' },
  { question: 'Can Sawla plan premium accommodation?', answer: 'Yes where strong hotels and lodges exist. Standards vary by region, and remote journeys may involve simple lodges, community accommodation or mobile camps. The proposal explains the realistic comfort level before confirmation.' },
]

const schema = [
  collectionPageSchema({
    name: 'Ethiopia tours by travel style',
    url: 'https://www.sawlatours.com/tours-by-experience',
    description: 'A collection of private Ethiopia journey styles and signature tour ideas organized by interest, duration, pace and season.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Ethiopia tours', url: 'https://www.sawlatours.com/tours-by-experience' },
  ]),
  itemListSchema({
    name: 'Private Ethiopia journey styles',
    url: 'https://www.sawlatours.com/tours-by-experience',
    items: TOUR_STYLES.map((style) => ({ name: style.name, url: `https://www.sawlatours.com/tours-by-experience/${style.slug}`, description: style.tagline })),
  }),
  faqSchema(faqs.map((item) => ({ q: item.question, a: item.answer }))),
]

export default function ToursHubPage() {
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Private Ethiopia journeys"
        title="Choose the experience before the itinerary"
        intro="Compare Ethiopia journeys by interest, time, pace and season. Every route is a starting point that can be reshaped around your dates and priorities."
        breadcrumb="Ethiopia Tours"
        image="tours-hub-hero.jpg"
        imageAlt="Private Ethiopia journey planning across history, wildlife and landscapes"
        category="tour"
        primary={{ href: '#find-your-style', label: 'Find your journey style' }}
        secondary={{ href: '/enquire', label: 'Ask a specialist' }}
        facts={[
          { value: String(CANONICAL_JOURNEY_COUNT), label: 'journey ideas' },
          { value: String(TOUR_STYLES.length), label: 'travel styles' },
          { value: '1–21+', label: 'days' },
          { value: 'Private', label: 'planning model' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'Designed around purpose', body: 'History, wildlife, people, photography or a specialist question' },
        { title: 'Paced realistically', body: 'Travel time, altitude and road conditions shape the route' },
        { title: 'Status explained', body: 'Conditional experiences are identified before sale' },
        { title: 'Specialists matched', body: 'Guide profile follows the subject and region' },
      ]} />
      <HubAnchorNav items={[
        { href: '#find-your-style', label: 'Find your style' },
        { href: '#featured-journeys', label: 'Signature journeys' },
        { href: '#compare', label: 'Compare styles' },
        { href: '#how-we-design', label: 'How we design' },
        { href: '#questions', label: 'Questions' },
      ]} />

      <section id="find-your-style" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="style-finder-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Start with what matters" title="Find the travel style that fits your trip" intro="Use the two filters for a useful shortlist. They are guidance, not a booking engine—some of the strongest journeys combine more than one style." />
          <div className="mt-10"><JourneyStyleFinder styles={styleOptions} /></div>
        </div>
      </section>

      <section id="featured-journeys" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="featured-journeys-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Selected routes" title="Six journeys that show the range of Ethiopia" intro="Each page includes route logic, day-by-day pacing, suitability, operating status, inclusions, exclusions and customization options." theme="dark" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredJourneys.map((journey) => (
              <article key={journey.slug} className="overflow-hidden rounded-card border border-white/12 bg-white/[.045]">
                <Link href={`/tours-by-experience/${journey.category}/${journey.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <PlaceholderImage filename={journey.image.card} width={720} height={450} category="tour" fill label={journey.image.cardAlt} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[.1em] text-gold"><span>{journey.duration}</span><span className="text-ivory/50">{journey.difficulty}</span></div>
                    <h3 className="mt-4 font-display text-3xl font-light leading-tight text-ivory group-hover:text-gold">{journey.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ivory/65">{journey.tagline}</p>
                    <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-ivory/48">{journey.route}</p>
                    <span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold">View journey <span className="ml-2" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="section-padding scroll-mt-32 bg-white" aria-labelledby="compare-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Compare before you click" title="The practical differences between journey styles" intro="This comparison is intentionally simple. The detailed style pages explain seasonal and operational nuances." />
          <div className="mt-10 overflow-x-auto rounded-card border border-sand bg-white">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-gold-faint text-charcoal"><tr><th className="p-4">Journey style</th><th className="p-4">Typical duration</th><th className="p-4">Physical pace</th><th className="p-4">Best for</th><th className="p-4">Main trade-off</th></tr></thead>
              <tbody className="divide-y divide-sand">
                {styleOptions.map((style) => (
                  <tr key={style.slug} className="align-top">
                    <th className="p-4 font-semibold text-charcoal"><Link href={`/tours-by-experience/${style.slug}`} className="hover:text-gold">{style.name}</Link></th>
                    <td className="p-4 text-warmgrey">{style.minDays}–{style.maxDays} days</td>
                    <td className="p-4 capitalize text-warmgrey">{style.pace}</td>
                    <td className="p-4 text-warmgrey">{style.tagline}</td>
                    <td className="p-4 text-warmgrey">{style.slug.includes('omo') ? 'Long drives and variable comfort' : style.slug.includes('wildlife') || style.slug.includes('bird') ? 'Wild encounters cannot be guaranteed' : style.slug.includes('festival') ? 'Fixed dates, crowds and changing local programs' : style.slug.includes('adventure') ? 'Terrain, altitude or heat' : 'Choosing depth over a long checklist'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="how-we-design" className="section-padding scroll-mt-32 bg-gold-faint/55" aria-labelledby="design-heading">
        <div className="container-max grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="label-eyebrow">How Sawla designs</span>
            <h2 id="design-heading" className="heading-display text-display-lg text-charcoal">A route must work on the ground, not only on a map</h2>
            <p className="mt-5 leading-8 text-warmgrey">Every proposal is tested against the actual travel month, transport pattern, road logic, altitude, opening arrangements, comfort expectations and specialist objective.</p>
            <p className="mt-4 text-sm leading-7 text-warmgrey">Pricing follows the final route, accommodation standard, vehicle, group size and specialist support. The planning guides explain the main cost drivers before you enquire.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/how-we-work" className="btn-primary">See the complete process</Link><Link href="/ethiopia-travel-guide/ethiopia-travel-costs" className="btn-ghost">Understand trip costs</Link></div>
          </div>
          <ol className="grid gap-5 md:grid-cols-2">
            {[
              ['Start with the reason', 'What do you want to understand, photograph, observe or feel?'],
              ['Match the season', 'The right month depends on region, subject, road access and climate.'],
              ['Protect the pace', 'Long transfers, altitude and early starts are built into the daily rhythm.'],
              ['Match the field team', 'Guide and driver experience follows region, language and special interest.'],
              ['Explain the limits', 'Wildlife, ceremonies, flights and remote access remain conditional.'],
              ['Refine the route', 'Accommodation, activity, duration and budget are adjusted without weakening the journey.'],
            ].map(([title, body], index) => (
              <li key={title} className="rounded-card border border-sand bg-white p-6">
                <span className="font-display text-3xl text-gold/45">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-warmgrey">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div id="questions" className="scroll-mt-32"><HubFaq items={faqs} title="Questions About Choosing an Ethiopia Tour" /></div>
      <HubCTA title="Not sure which route fits?" body="Share your dates, time available and two or three priorities. Sawla will tell you what combines well, what requires more time and what should be left for another journey." secondary={{ href: '/trip-finder', label: 'Use the Trip Finder' }} />
    </>
  )
}
