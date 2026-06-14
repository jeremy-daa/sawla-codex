import StoryCard from '@/components/stories/StoryCard'
import { getCaseStudiesByDestination, getCaseStudiesByJourney } from '@/data/stories'

interface Props {
  journeySlug?: string
  destinationSlug?: string
  heading?: string
}

export default function RelatedStoryStrip({ journeySlug, destinationSlug, heading = 'How We Think About This Kind of Journey' }: Props) {
  const stories = journeySlug
    ? getCaseStudiesByJourney(journeySlug, 2)
    : destinationSlug
      ? getCaseStudiesByDestination(destinationSlug, 1)
      : []

  if (stories.length === 0) return null

  return (
    <section className="section-padding-sm border-t border-sand bg-gold-faint/35" aria-labelledby={`related-story-${journeySlug ?? destinationSlug}`}>
      <div className="container-max">
        <div className="mb-9 max-w-3xl">
          <span className="label-eyebrow">Journey evidence</span>
          <h2 id={`related-story-${journeySlug ?? destinationSlug}`} className="heading-display mt-2 text-display-sm text-charcoal">{heading}</h2>
          <p className="mt-3 leading-7 text-warmgrey">
            These pages explain the planning decisions behind the route. They are clearly labelled as verified traveller stories or editorial design studies.
          </p>
        </div>
        <div className={`grid gap-6 ${stories.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
          {stories.map((story) => <StoryCard key={story.slug} story={story} />)}
        </div>
      </div>
    </section>
  )
}
