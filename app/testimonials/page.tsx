import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import SchemaScript from '@/components/ui/SchemaScript'
import VerifiedReviewCard from '@/components/stories/VerifiedReviewCard'
import StoryCard from '@/components/stories/StoryCard'
import { JOURNEY_CASE_STUDIES, VERIFIED_PUBLIC_REVIEWS } from '@/data/stories'
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Traveller Reviews & Ethiopia Journey Case Studies | Sawla Tours',
  description: 'Read independently sourced traveler feedback and transparent Ethiopia journey-design case studies. Verified reviews are separated clearly from editorial planning examples.',
  alternates: { canonical: 'https://www.sawlatours.com/testimonials' },
  openGraph: {
    title: 'Traveller Reviews & Journey Case Studies | Sawla Tours',
    description: 'Evidence-led reviews and transparent planning studies from Sawla Tours.',
    url: 'https://www.sawlatours.com/testimonials',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Sawla Tours traveler stories and journey design studies' }],
  },
}

const verifiedStories = JOURNEY_CASE_STUDIES.filter((story) => story.type === 'verified-client-story')
const planningStudies = JOURNEY_CASE_STUDIES.filter((story) => story.type === 'journey-design-study')
const schema = [
  collectionPageSchema({
    name: 'Traveller reviews and Ethiopia journey case studies',
    url: 'https://www.sawlatours.com/testimonials',
    description: 'Independently sourced traveler feedback and transparent journey-design case studies, clearly separated by evidence status.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Traveller stories', url: 'https://www.sawlatours.com/testimonials' },
  ]),
  itemListSchema({
    name: 'Sawla Tours traveler stories and journey case studies',
    url: 'https://www.sawlatours.com/testimonials',
    items: JOURNEY_CASE_STUDIES.map((story) => ({ name: story.title, url: story.seo.canonical, description: story.dek })),
  }),
]

export default function TestimonialsPage() {
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="Evidence before promotion"
        title="Traveller feedback and the decisions behind a journey"
        intro="Independent reviews are linked to their source. Editorial planning studies are labelled clearly and never presented as client testimony."
        breadcrumb="Traveller Stories"
        image="traveller-stories-hub-hero.jpg"
        imageAlt="Travelers and local guide sharing an Ethiopia journey"
        category="about"
        primary={{ href: '#verified', label: 'Read verified feedback' }}
        secondary={{ href: '#case-studies', label: 'Explore case studies' }}
        facts={[
          { value: String(VERIFIED_PUBLIC_REVIEWS.length), label: 'independently sourced review' },
          { value: String(JOURNEY_CASE_STUDIES.length), label: 'published case studies' },
          { value: 'No evidence', label: 'no testimonial' },
          { value: 'No rating schema', label: 'self-serving stars avoided' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'Source-linked', body: 'External reviews connect to the original platform' },
        { title: 'Consent-controlled', body: 'Direct feedback is not published without permission' },
        { title: 'Clearly classified', body: 'Client stories and editorial studies are separated' },
        { title: 'No invented totals', body: 'No unsupported score, percentage or review count' },
      ]} />
      <HubAnchorNav items={[
        { href: '#verified', label: 'Verified feedback' },
        { href: '#case-studies', label: 'Case studies' },
        { href: '#standard', label: 'Publication standard' },
        { href: '#use-stories', label: 'How to use these stories' },
      ]} />

      <section id="verified" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="verified-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Independently verifiable" title="Published traveller feedback" intro="The review below remains on its original platform. Sawla reproduces only a short excerpt and summarizes the relevant journey context." />
          <div className="mt-10 max-w-4xl">
            {VERIFIED_PUBLIC_REVIEWS.map((review) => <VerifiedReviewCard key={review.id} review={review} />)}
          </div>
          {verifiedStories.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {verifiedStories.map((story) => <StoryCard key={story.slug} story={story} />)}
            </div>
          )}
        </div>
      </section>

      <section id="case-studies" className="section-padding scroll-mt-32 bg-white" aria-labelledby="studies-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Planning made visible" title="Journey-design case studies" intro="These studies explain route decisions, safeguards and trade-offs. They demonstrate method, not client endorsement." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {planningStudies.map((story) => <StoryCard key={story.slug} story={story} />)}
          </div>
        </div>
      </section>

      <section id="standard" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="standard-heading">
        <div className="container-max grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="label-eyebrow text-gold">Publication standard</span>
            <h2 id="standard-heading" className="heading-display text-display-lg text-ivory">No evidence, no testimonial</h2>
            <p className="mt-5 leading-8 text-ivory/68">A strong travel website should distinguish between feedback, proof and editorial storytelling. Sawla’s evidence register keeps unpublished drafts outside the public site until source and consent requirements are met.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ['External review', 'Original platform link, date and conservative excerpt.'],
              ['Direct client feedback', 'Original message retained and publication permission recorded.'],
              ['Verified client story', 'Journey facts checked and identity or anonymity preference documented.'],
              ['Editorial study', 'Clearly labelled as a planning example, never as a completed trip.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card border border-white/12 bg-white/[.045] p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="mt-3 text-sm leading-6 text-ivory/65">{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-stories" className="section-padding-sm scroll-mt-32 border-y border-sand bg-gold-faint/45" aria-labelledby="use-heading">
        <div className="container-max grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div><span className="label-eyebrow">Use stories carefully</span><h2 id="use-heading" className="heading-display text-display-md text-charcoal">Look for planning principles—not an identical itinerary</h2><p className="mt-4 max-w-3xl leading-7 text-warmgrey">A case study can help you ask better questions about pace, consent, field time or uncertainty. Your route still needs to be designed for your own dates and priorities.</p></div>
          <Link href="/how-we-work" className="btn-ghost flex-none">See the planning process</Link>
        </div>
      </section>

      <HubCTA title="Create a journey worth documenting honestly" body="Tell us what matters to you. We will show the route logic, practical limits and decisions clearly before asking you to confirm anything." secondary={{ href: '/tours-by-experience', label: 'Browse journey ideas' }} />
    </>
  )
}
