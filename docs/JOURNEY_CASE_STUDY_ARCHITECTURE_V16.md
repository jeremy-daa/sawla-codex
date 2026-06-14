# Journey Case Study Architecture V16

## Objective

The V16 story system supports conversion without manufacturing social proof. It separates three concepts:

1. External reviews that can be checked
2. Direct client feedback with documented consent
3. Editorial journey-design studies

## Data sources

- `data/stories.ts` — public verified reviews and public case studies
- `data/internal/testimonialDrafts.ts` — inherited drafts, not public
- `docs/TESTIMONIAL_EVIDENCE_REGISTER_V16.md` — review/evidence workflow

## Components

- `components/stories/VerifiedReviewCard.tsx`
- `components/stories/StoryCard.tsx`
- `components/stories/RelatedStoryStrip.tsx`

## Integration points

- Homepage: one verified source review plus selected case studies
- Destination pages: one relevant case study when mapped
- Canonical journey pages: up to two relevant case studies
- Sitemap: all six case-study URLs
- AI discovery files: explicit distinction between review and design study

## SEO intent

The system targets useful long-tail planning queries without competing with canonical product pages. Case studies explain decisions and link to the relevant product/destination; they do not duplicate full itineraries.

## Schema policy

Sawla-owned pages use `Article` and collection markup. They do not use self-serving `Review` or `AggregateRating` markup for Sawla Tours.
