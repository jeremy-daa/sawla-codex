# Merge Guide — 25 Canonical Journeys V13

## Preferred method for the newest Codex repository

Use the unified Git patch. It is intentionally safer than copying a full project over a repository that may contain newer destination, Travel Guide, image, analytics or enquiry changes.

```bash
git checkout -b feature/canonical-journeys-v13
git apply --check patches/sawla-canonical-journeys-v13.patch
git apply --3way patches/sawla-canonical-journeys-v13.patch
npm ci
npm run validate
npm run build
```

If `git apply --check` reports a conflict, do not force-copy the whole project. Resolve only the affected file while preserving newer work.

## Files most likely to require a conscious merge

- `data/siteData.ts` — only the two approved category slug changes are required; preserve all existing destination records.
- `data/tourStylePageContent.ts` — preserve current copy while changing the two category keys, canonical URLs and internal paths.
- `next.config.js` — merge the canonical migration redirects into existing redirects; do not remove newer redirects or headers.
- `app/ethiopias-popular-destinations/[slug]/page.tsx` — replace only the old generic recommended-itinerary module with destination-aware canonical journey links.
- `app/tours-by-experience/page.tsx` — retain current hub copy and add the canonical portfolio count/import.
- `components/home/HeroSection.tsx` — update only the commercial portfolio statistic if the current homepage still says 36 itineraries.
- `package.json` and `package-lock.json` — preserve newer dependency versions where they are already safer and compatible; add `validate:journeys` to scripts.

## Files safe to add as new source-of-truth assets

- `data/canonicalJourneys.ts`
- `data/journeys/**`
- `content/canonical-journeys/**`
- `scripts/validate-canonical-journeys.mjs`
- V13 documentation files

## Files intentionally replaced within the journey-product system

- `app/tours-by-experience/[style]/page.tsx`
- `app/tours-by-experience/[style]/[slug]/page.tsx`
- `data/itineraryData.ts` (now a compatibility facade)

## Do not duplicate completed work

- Do not rewrite destination profiles.
- Do not create a second destination hub.
- Do not restore the former 36-product catalogue.
- Do not create duplicate product routes for cross-listed themes.
- Do not create separate SEO pages for minor duration variations.
- Do not convert conditional experiences into guarantees.

## Rollback

Before applying:

```bash
git tag before-canonical-journeys-v13
```

Rollback before committing:

```bash
git reset --hard before-canonical-journeys-v13
```

After deployment, revert the release commit rather than deleting individual files so redirects, sitemap and data remain synchronized.
