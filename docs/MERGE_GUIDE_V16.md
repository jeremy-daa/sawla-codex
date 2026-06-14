# Sawla Tours V16 Merge Guide

## Recommended method

Apply the V16 patch to the latest V15 repository so any newer production photography, hosting settings, analytics and deployment changes remain intact.

```bash
git checkout -b feature/traveller-stories-v16
git apply --check /path/to/sawla-traveller-stories-v16.patch
git apply /path/to/sawla-traveller-stories-v16.patch
npm ci
npm run validate
npm run build
```

## Conflict priorities

When resolving conflicts, preserve:

1. The V15 enquiry API and environment configuration.
2. The V14.1 Sawla Tours–Sawla Films separation rules.
3. The 25 canonical journey dataset and routes.
4. The completed destination content.
5. Any licensed production images added after the supplied baseline.

Then reapply these V16 requirements:

- `data/stories.ts` is the public story source.
- `data/internal/testimonialDrafts.ts` remains non-public.
- No active page imports the legacy `TESTIMONIALS` collection.
- `/testimonials` separates verified feedback from editorial design studies.
- Six case-study routes remain in the sitemap.
- No self-serving `Review` or `AggregateRating` schema is added.
- Destination and canonical journey pages use `RelatedStoryStrip` only as contextual integration, not as a content rewrite.

## Required verification

```bash
npm run validate:stories
npm run validate
npm run build
```

Also inspect:

- `/testimonials`
- One verified traveller-story detail page
- One editorial design-study page
- One mapped destination page
- One mapped canonical journey page
- `/sitemap.xml`

## Rollback

Revert the V16 commit or restore files from the merge package backup. Do not restore the old public testimonial collection unless every published record has evidence and permission.
