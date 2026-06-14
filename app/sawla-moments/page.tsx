import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import MomentsExplorer from '@/components/hubs/MomentsExplorer'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { MOMENTS_ARTICLES, MOMENTS_CATEGORIES } from '@/data/siteData'
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sawla Moments: Ethiopia Field Notes & Travel Stories',
  description: 'Read Sawla Tours field notes on Ethiopia wildlife, heritage, festivals, photography, remote travel and practical journey design.',
  alternates: { canonical: 'https://www.sawlatours.com/sawla-moments' },
  openGraph: {
    title: 'Sawla Moments: Ethiopia Field Notes & Travel Stories',
    description: 'Original Ethiopia travel writing grounded in field context, practical planning and responsible travel.',
    url: 'https://www.sawlatours.com/sawla-moments',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Sawla Moments Ethiopia field notes' }],
  },
}

const featured = MOMENTS_ARTICLES[0]
const schema = [
  collectionPageSchema({
    name: 'Sawla Moments Ethiopia field notes',
    url: 'https://www.sawlatours.com/sawla-moments',
    description: 'A collection of Ethiopia field notes on wildlife, heritage, festivals, photography, remote travel and practical journey design.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Sawla Moments', url: 'https://www.sawlatours.com/sawla-moments' },
  ]),
  itemListSchema({
    name: 'Sawla Moments Ethiopia field notes',
    url: 'https://www.sawlatours.com/sawla-moments',
    items: MOMENTS_ARTICLES.map((article) => ({ name: article.title, url: `https://www.sawlatours.com/sawla-moments/${article.slug}`, description: article.teaser })),
  }),
]

export default function SawlaMomentsPage() {
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Field notes from Ethiopia"
        title="Read the place before you travel through it"
        intro="Sawla Moments explores the context behind wildlife encounters, sacred places, ceremonies, photography and the practical choices that shape a better Ethiopia journey."
        breadcrumb="Sawla Moments"
        image="sawla-moments-hub-hero.jpg"
        imageAlt="Ethiopia field notebook, landscape and local guide"
        category="moments"
        primary={{ href: '#field-notes', label: 'Browse field notes' }}
        secondary={{ href: '/ethiopia-travel-guide', label: 'Open the practical guide' }}
        facts={[
          { value: String(MOMENTS_ARTICLES.length), label: 'published field notes' },
          { value: String(MOMENTS_CATEGORIES.length), label: 'editorial themes' },
          { value: 'Original', label: 'Ethiopia-focused writing' },
          { value: 'Reviewed', label: 'before publication' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'First-party perspective', body: 'Writing shaped by Ethiopia travel planning and field context' },
        { title: 'Practical purpose', body: 'Articles help readers make better route decisions' },
        { title: 'Ethical clarity', body: 'Community and wildlife access are not romanticized' },
        { title: 'Commercial separation', body: 'Editorial value comes before a sales message' },
      ]} />
      <HubAnchorNav items={[
        { href: '#featured', label: 'Featured field note' },
        { href: '#field-notes', label: 'All field notes' },
        { href: '#themes', label: 'Editorial themes' },
        { href: '#standard', label: 'Editorial standard' },
      ]} />

      <section id="featured" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="featured-moment-heading">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <Link href={`/sawla-moments/${featured.slug}`} className="group relative block aspect-[16/10] overflow-hidden rounded-card bg-sand/30">
            <PlaceholderImage filename={featured.heroImage} width={960} height={600} category="moments" fill label={featured.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
            <div className="image-overlay-light" />
          </Link>
          <div>
            <span className="label-eyebrow">Featured field note · {featured.readingTime} min</span>
            <h2 id="featured-moment-heading" className="heading-display text-display-lg text-charcoal">{featured.title}</h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-warmgrey">{featured.teaser}</p>
            <Link href={`/sawla-moments/${featured.slug}`} className="btn-primary mt-7">Read the field note</Link>
          </div>
        </div>
      </section>

      <section id="field-notes" className="section-padding scroll-mt-32 bg-gold-faint/45" aria-labelledby="moments-library-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Browse the journal" title="Filter field notes by the question you are exploring" intro="Articles are written to add context, not duplicate destination or tour-product pages." />
          <div className="mt-10"><MomentsExplorer articles={MOMENTS_ARTICLES} /></div>
        </div>
      </section>

      <section id="themes" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="moments-themes-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Editorial themes" title="Six ways to understand Ethiopia more deeply" intro="The categories connect inspiration with practical context and responsible behavior." theme="dark" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MOMENTS_CATEGORIES.map((category) => (
              <article key={category.slug} className="rounded-card border border-white/12 bg-white/[.045] p-6">
                <h3 className="font-display text-2xl text-gold">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/65">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="standard" className="section-padding-sm scroll-mt-32 border-y border-sand bg-white" aria-labelledby="editorial-standard-heading">
        <div className="container-max grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><span className="label-eyebrow">Editorial promise</span><h2 id="editorial-standard-heading" className="heading-display text-display-md text-charcoal">Say less than certainty allows—and more than a brochure usually does</h2></div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Distinguish observation, operating experience and independently sourced facts.',
              'Avoid presenting ceremonies, wildlife or access as guaranteed travel products.',
              'Use respectful language for communities, faith and photography.',
              'Link readers to practical guides and relevant journeys without turning every paragraph into a sales pitch.',
            ].map((item) => <p key={item} className="rounded-card border border-sand bg-ivory p-5 text-sm leading-6 text-warmgrey">{item}</p>)}
          </div>
        </div>
      </section>

      <HubCTA title="Inspired by something you read?" body="Tell us which story, species, place or planning question stayed with you. We can turn that interest into a realistic private route." secondary={{ href: '/tours-by-experience', label: 'Browse journey ideas' }} />
    </>
  )
}
