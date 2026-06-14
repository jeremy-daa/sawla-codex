import type { PublicReview } from '@/data/stories'

export default function VerifiedReviewCard({ review, compact = false }: { review: PublicReview; compact?: boolean }) {
  return (
    <article className="rounded-card border border-sand bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="label-eyebrow">Independently verifiable review</span>
          <h3 className="mt-2 font-display text-2xl text-charcoal">{review.tripType}</h3>
        </div>
        {review.rating && review.ratingScale && (
          <div className="rounded-full border border-gold/30 bg-gold-faint px-4 py-2 text-sm font-medium text-coffee" aria-label={`${review.rating} out of ${review.ratingScale}`}>
            {review.rating}/{review.ratingScale} on {review.sourceLabel}
          </div>
        )}
      </div>

      <blockquote className={`${compact ? 'mt-5 text-xl' : 'mt-7 text-2xl md:text-3xl'} font-display italic leading-relaxed text-volcanic`}>
        {review.excerpt}
      </blockquote>
      <p className="mt-5 leading-7 text-warmgrey">{review.summary}</p>

      <footer className="mt-6 flex flex-col gap-2 border-t border-sand/70 pt-5 text-sm text-warmgrey sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-medium text-charcoal">{review.reviewerName}</span>
          <span className="mx-2 text-sand">•</span>
          <time dateTime={review.reviewDate}>{new Date(`${review.reviewDate}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
        </div>
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-gold underline decoration-gold/30 underline-offset-4 hover:text-coffee">
          Read the full review on {review.sourceLabel} ↗
        </a>
      </footer>
    </article>
  )
}
