import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import type { JourneyCaseStudy } from '@/data/stories'

export default function StoryCard({ story }: { story: JourneyCaseStudy }) {
  return (
    <article className="group overflow-hidden rounded-card border border-sand bg-white card-hover">
      <Link href={`/testimonials/${story.slug}`} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
          <PlaceholderImage
            filename={story.heroImage}
            width={800}
            height={500}
            category="about"
            fill
            label={story.heroAlt}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="label-eyebrow">{story.eyebrow}</span>
          <h3 className="mt-2 font-display text-2xl leading-tight text-charcoal transition-colors group-hover:text-gold">
            {story.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-warmgrey">{story.dek}</p>
          <span className="mt-5 inline-flex text-xs font-medium uppercase tracking-[0.12em] text-gold">
            Read the design story →
          </span>
        </div>
      </Link>
    </article>
  )
}
