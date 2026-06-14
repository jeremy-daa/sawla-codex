# Sawla Tours V16 Patch Manifest

## New public story system

- `data/stories.ts`
- `components/stories/StoryCard.tsx`
- `components/stories/VerifiedReviewCard.tsx`
- `components/stories/RelatedStoryStrip.tsx`
- `app/testimonials/[slug]/page.tsx`

## Rebuilt or integrated public routes

- `app/testimonials/page.tsx`
- `app/page.tsx`
- `app/ethiopias-popular-destinations/[slug]/page.tsx`
- `app/tours-by-experience/[style]/[slug]/page.tsx`
- `app/sitemap.ts`

## Evidence and publication controls

- `data/internal/testimonialDrafts.ts`
- `scripts/validate-traveller-stories.mjs`
- `docs/TESTIMONIAL_EVIDENCE_REGISTER_V16.md`
- `docs/Sawla_Tours_Testimonials_Deployment_Guide.md`
- `docs/JOURNEY_CASE_STUDY_ARCHITECTURE_V16.md`
- `docs/archive/LEGACY_UNVERIFIED_Testimonials_Deployment_Guide.md`

## SEO, AI and release files

- `public/ai-index.json`
- `public/llms.txt`
- `seo/complete-seo-manifest.json`
- `docs/SEO_Metadata_All_Pages.md`
- `package.json`
- `package-lock.json`
- `README_V16_FIRST.md`
- `CHANGELOG_V16.md`
- `docs/BUILD_VALIDATION_V16.md`
- `docs/MERGE_GUIDE_V16.md`
- `docs/PATCH_MANIFEST_V16.md`

## Removed public dependency

The public `TESTIMONIALS` export was removed from `data/siteData.ts`. The inherited copy is retained only in `data/internal/testimonialDrafts.ts` for evidence review.
