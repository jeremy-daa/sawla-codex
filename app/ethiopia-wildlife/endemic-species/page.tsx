import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import SpeciesExplorer from '@/components/hubs/SpeciesExplorer'
import SchemaScript from '@/components/ui/SchemaScript'
import { SPECIES } from '@/data/siteData'
import { getCanonicalJourneysByCategory } from '@/data/canonicalJourneys'
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopian Endemic Wildlife & Species Guide | Sawla Tours',
  description: 'Explore a focused guide to Ethiopian wolves, geladas, Walia ibex, mountain nyala, Bale monkeys and endemic birds, with habitat, conservation and journey links.',
  alternates: { canonical: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species' },
  openGraph: {
    title: 'Ethiopian Endemic Wildlife & Species Guide | Sawla Tours',
    description: 'A starter species collection for planning endemic wildlife and birding journeys in Ethiopia.',
    url: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Endemic wildlife of Ethiopia' }],
  },
}

const wildlifeJourneys = getCanonicalJourneysByCategory('ethiopia-wildlife-tours')
const birdingJourneys = getCanonicalJourneysByCategory('ethiopia-birdwatching-tours')
const schema = [
  collectionPageSchema({
    name: 'Ethiopian endemic wildlife and species',
    url: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species',
    description: 'A starter collection of Ethiopian endemic mammals and birds connected to habitats, ethical observation and relevant journeys.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Ethiopian wildlife', url: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species' },
  ]),
  itemListSchema({
    name: 'Featured endemic species of Ethiopia',
    url: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species',
    items: SPECIES.map((item) => ({ name: item.commonName, url: `https://www.sawlatours.com/ethiopia-wildlife/${item.slug}`, description: item.tagline })),
  }),
]

export default function SpeciesHubPage() {
  const mammalCount = SPECIES.filter((item) => item.type === 'Mammal').length
  const birdCount = SPECIES.filter((item) => item.type === 'Bird').length
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Ethiopia wildlife guide"
        title="Species shaped by altitude, isolation and remarkable habitats"
        intro="This focused starter collection explains where key endemic mammals and birds are best known, how to plan responsibly and which journeys protect meaningful field time."
        breadcrumb="Endemic Species"
        image="wildlife-species-hub-hero.jpg"
        imageAlt="Ethiopian wolf and highland wildlife habitat"
        category="species"
        primary={{ href: '#species', label: 'Explore species' }}
        secondary={{ href: '/tours-by-experience/ethiopia-wildlife-tours', label: 'Wildlife journeys' }}
        facts={[
          { value: String(SPECIES.length), label: 'starter profiles' },
          { value: String(mammalCount), label: 'mammals' },
          { value: String(birdCount), label: 'birds' },
          { value: 'Wild', label: 'encounters not guaranteed' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'Habitat-led', body: 'Routes follow ecosystems rather than an inflated checklist' },
        { title: 'Specialist guiding', body: 'Wildlife and birding require different field skills' },
        { title: 'Patient observation', body: 'Behavior and distance matter more than a quick sighting' },
        { title: 'Reviewed claims', body: 'Status and access require current authoritative checks' },
      ]} />
      <HubAnchorNav items={[
        { href: '#species', label: 'Species collection' },
        { href: '#habitats', label: 'Habitats' },
        { href: '#plan', label: 'Plan a journey' },
        { href: '#ethics', label: 'Field ethics' },
      ]} />

      <section id="species" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="species-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Starter species collection" title="Meet the endemics most travelers ask about first" intro="This is a curated introduction, not a complete national checklist. Each profile connects biology, best-known habitat and realistic travel planning." />
          <div className="mt-10"><SpeciesExplorer species={SPECIES} /></div>
        </div>
      </section>

      <section id="habitats" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="habitats-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Where wildlife lives" title="Ethiopia is a habitat journey before it is a species list" intro="Elevation changes quickly, creating radically different wildlife experiences within one country." theme="dark" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Afroalpine plateaus', 'Ethiopian wolf, highland birds and open-country observation in Bale.'],
              ['Escarpment highlands', 'Geladas, Walia ibex, raptors and walking in the Simien Mountains.'],
              ['Dry acacia country', 'Beisa oryx, bustards and arid-zone birds around Awash and Alledeghi.'],
              ['Southwest forests and savannas', 'Elephant, buffalo, kob concepts and specialist forest birding.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-white/12 bg-white/[.045] p-6">
                <h3 className="font-display text-2xl text-gold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="section-padding scroll-mt-32 bg-white" aria-labelledby="wildlife-plan-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="From profile to field time" title="Choose a route by habitat and priority species" intro="A mixed cultural trip can include wildlife, but dedicated observation needs early starts, patient pacing and a guide chosen for the subject." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-card border border-sand bg-gold-faint/55 p-7 md:p-9">
              <span className="hub-kicker">Wildlife journeys</span>
              <h3 className="mt-4 font-display text-3xl text-charcoal">Endemic mammals and unusual ecosystems</h3>
              <p className="mt-4 leading-7 text-warmgrey">{wildlifeJourneys.length} signature routes connect Bale, Simien, Awash–Alledeghi, Chebera and highly conditional southwest concepts.</p>
              <Link href="/tours-by-experience/ethiopia-wildlife-tours" className="btn-primary mt-7">Explore wildlife journeys</Link>
            </article>
            <article className="rounded-card border border-sand bg-ivory p-7 md:p-9">
              <span className="hub-kicker">Birdwatching journeys</span>
              <h3 className="mt-4 font-display text-3xl text-charcoal">Routes organized by habitat, season and target species</h3>
              <p className="mt-4 leading-7 text-warmgrey">{birdingJourneys.length} signature birding routes show how highlands, Rift Valley, southern drylands and forests can be combined.</p>
              <Link href="/tours-by-experience/ethiopia-birdwatching-tours" className="btn-ghost mt-7">Explore birding journeys</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="ethics" className="section-padding-sm scroll-mt-32 border-y border-sand bg-gold-faint/45" aria-labelledby="wildlife-ethics-heading">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><span className="label-eyebrow">Responsible observation</span><h2 id="wildlife-ethics-heading" className="heading-display text-display-md text-charcoal">The quality of an encounter is not measured by distance alone</h2></div>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              'Follow park, ranger and guide instructions even when a closer image seems possible.',
              'Do not block movement, crowd a den, call birds excessively or pressure an animal for a photograph.',
              'Treat sightings as conditional; route quality cannot be reduced to a guaranteed checklist.',
              'Use longer field time and quieter behavior instead of repeated vehicle repositioning.',
            ].map((item) => <li key={item} className="rounded-card border border-sand bg-white p-5 text-sm leading-6 text-warmgrey">{item}</li>)}
          </ul>
        </div>
      </section>

      <HubCTA title="Plan around the species and habitat—not a generic safari label" body="Tell us whether your priority is wolves, geladas, endemic birds, photography or a broader natural-history route. We will advise on season, field time and realistic combinations." secondary={{ href: '/ethiopia-travel-guide/popular-wildlife-ethiopia', label: 'Read the wildlife guide' }} />
    </>
  )
}
