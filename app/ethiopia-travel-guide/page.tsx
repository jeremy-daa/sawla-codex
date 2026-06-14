import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import GuideExplorer, { type GuideCardData } from '@/components/hubs/GuideExplorer'
import SchemaScript from '@/components/ui/SchemaScript'
import { FIELD_GUIDE_CONTENT } from '@/data/fieldGuideContent'
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Travel Guide: Plan With Current Context | Sawla Tours',
  description: 'Use 15 Ethiopia travel guides for timing, visas, safety, costs, accommodation, wildlife, food, packing, photography and route planning. Reviewed 14 June 2026.',
  alternates: { canonical: 'https://www.sawlatours.com/ethiopia-travel-guide' },
  openGraph: {
    title: 'Ethiopia Travel Guide | Sawla Tours',
    description: 'Practical Ethiopia travel planning with current review dates and official-source direction for unstable information.',
    url: 'https://www.sawlatours.com/ethiopia-travel-guide',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Ethiopia travel planning guide' }],
  },
}

const categoryMap: Record<string, string> = {
  'when-to-visit-ethiopia': 'When to travel',
  'how-to-plan-your-trip': 'Planning',
  'safety-in-ethiopia': 'Before you go',
  'ethiopia-visa-guide': 'Before you go',
  'what-to-pack-for-ethiopia': 'Before you go',
  'ethiopia-travel-costs': 'Planning',
  'ethiopian-food-coffee': 'Culture & food',
  'ethiopia-photography-guide': 'Special interests',
  'ethiopia-travel-circuits': 'Routes',
  'how-to-get-to-ethiopia': 'Transport',
  'hotels-lodges-ethiopia': 'Accommodation',
  'ethiopia-safaris': 'Wildlife',
  'popular-wildlife-ethiopia': 'Wildlife',
  'why-visit-ethiopia': 'Inspiration',
  'general-travel-tips': 'Before you go',
}

function cleanTitle(title: string) {
  return title.split('|')[0].trim()
}

const guides: GuideCardData[] = FIELD_GUIDE_CONTENT.map((guide) => ({
  slug: guide.slug,
  title: cleanTitle(guide.metaTitle),
  description: guide.intro,
  category: categoryMap[guide.slug] ?? 'Planning',
  priority: ['when-to-visit-ethiopia', 'how-to-plan-your-trip', 'safety-in-ethiopia', 'ethiopia-visa-guide'].includes(guide.slug) ? 'essential' : 'planning',
}))

const essentialSlugs = ['when-to-visit-ethiopia', 'how-to-plan-your-trip', 'safety-in-ethiopia', 'ethiopia-visa-guide']
const essentialGuides = essentialSlugs.map((slug) => guides.find((guide) => guide.slug === slug)).filter(Boolean) as GuideCardData[]

const schema = [
  collectionPageSchema({
    name: 'Ethiopia Travel Guide',
    url: 'https://www.sawlatours.com/ethiopia-travel-guide',
    description: 'Practical Ethiopia travel-planning guides covering timing, visas, safety, costs, accommodation, wildlife, food, photography and route design.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Ethiopia Travel Guide', url: 'https://www.sawlatours.com/ethiopia-travel-guide' },
  ]),
  itemListSchema({
    name: 'Ethiopia travel planning guides',
    url: 'https://www.sawlatours.com/ethiopia-travel-guide',
    items: guides.map((guide) => ({ name: guide.title, url: `https://www.sawlatours.com/ethiopia-travel-guide/${guide.slug}`, description: guide.description })),
  }),
]

export default function TravelGuidePage() {
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Ethiopia travel planning"
        title="Practical answers before you commit to a route"
        intro="Use the guide to understand seasons, costs, access, accommodation, visas, health preparation and the trade-offs behind different Ethiopia journeys."
        breadcrumb="Ethiopia Travel Guide"
        image="travel-guide-hub-hero.jpg"
        imageAlt="Ethiopia travel planning notes, map and landscape"
        category="guide"
        primary={{ href: '#start-here', label: 'Start with essentials' }}
        secondary={{ href: '/trip-finder', label: 'Use the Trip Finder' }}
        facts={[
          { value: String(guides.length), label: 'planning guides' },
          { value: '14 Jun 2026', label: 'editorial review' },
          { value: 'Official links', label: 'for unstable rules' },
          { value: 'Free', label: 'planning resource' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'Reviewed dates', body: 'Date-sensitive pages state when they were checked' },
        { title: 'Official direction', body: 'Visa, health and advisory pages point to primary sources' },
        { title: 'Route context', body: 'Advice is tied to region, season and journey type' },
        { title: 'No false certainty', body: 'Changing access and schedules are not guaranteed' },
      ]} />
      <HubAnchorNav items={[
        { href: '#start-here', label: 'Essential guides' },
        { href: '#full-library', label: 'Full library' },
        { href: '#freshness', label: 'Freshness standard' },
        { href: '#next-step', label: 'Turn advice into a route' },
      ]} />

      <section id="start-here" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="guide-start-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Read these first" title="Four guides that answer the biggest planning questions" intro="Start here if you are deciding when to travel, how much time you need and whether a route is currently practical." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {essentialGuides.map((guide, index) => (
              <article key={guide.slug} className="card-luxury flex h-full flex-col p-6">
                <span className="font-display text-4xl font-light text-gold/45">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-charcoal">{guide.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-warmgrey">{guide.description}</p>
                <Link href={`/ethiopia-travel-guide/${guide.slug}`} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">Read guide <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="full-library" className="section-padding scroll-mt-32 bg-gold-faint/45" aria-labelledby="guide-library-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Full planning library" title="Filter the guide by the decision you are making" intro="The library is designed for scanability. Detailed destination and tour pages remain separate so this hub does not compete with commercial journey intent." />
          <div className="mt-10"><GuideExplorer guides={guides} /></div>
        </div>
      </section>

      <section id="freshness" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="freshness-heading">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="label-eyebrow text-gold">Editorial standard</span>
            <h2 id="freshness-heading" className="heading-display text-display-lg text-ivory">Useful travel advice must show where certainty ends</h2>
            <p className="mt-5 leading-8 text-ivory/68">Visa rules, health guidance, regional access, domestic flights and permit procedures can change. Sawla’s guides provide planning context, but final decisions use current official information and departure-specific checks.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ['Stable background', 'History, geography, route logic and packing principles are reviewed on a scheduled editorial cycle.'],
              ['Unstable rules', 'Visa, entry, health and advisory information points to the relevant official authority.'],
              ['Operational information', 'Road access, flights, markets, permits and regional arrangements are reconfirmed for actual dates.'],
              ['Visible review date', 'Date-sensitive guide pages show the latest editorial review rather than implying timeless accuracy.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-white/12 bg-white/[.045] p-6">
                <h3 className="font-display text-2xl text-gold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="next-step" className="section-padding bg-white scroll-mt-32" aria-labelledby="guide-next-heading">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="label-eyebrow">From research to route</span>
            <h2 id="guide-next-heading" className="heading-display text-display-lg text-charcoal">Use the guide to ask better questions—not to plan alone</h2>
            <p className="mt-5 leading-8 text-warmgrey">A strong proposal connects the general advice here to your exact month, group, comfort expectations and specialist goals. That is where planning becomes operational.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/tours-by-experience" className="rounded-card border border-sand bg-ivory p-6 hover:border-gold"><span className="hub-kicker">Journey ideas</span><strong className="mt-3 block font-display text-2xl font-normal text-charcoal">See what a complete route looks like</strong></Link>
            <Link href="/ethiopias-popular-destinations" className="rounded-card border border-sand bg-ivory p-6 hover:border-gold"><span className="hub-kicker">Destination guides</span><strong className="mt-3 block font-display text-2xl font-normal text-charcoal">Compare places and travel effort</strong></Link>
          </div>
        </div>
      </section>

      <HubCTA title="Turn the research into a coherent journey" body="Tell us which guides changed your thinking. We will match the advice to your dates and explain what is practical, conditional or better left out." secondary={{ href: '/tours-by-experience', label: 'Browse journey ideas' }} />
    </>
  )
}
