# Merge Guide V14

## Recommended method

Apply the focused V14 patch to the latest Codex repository so newer destination, Travel Guide, photography, enquiry, analytics and deployment changes remain intact.

```bash
git checkout -b feature/sawla-trust-v14
git apply --check patches/sawla-trust-architecture-v14.patch
git apply patches/sawla-trust-architecture-v14.patch
npm ci
npm run validate
npm run build
```

## Files most likely to conflict

- `data/siteData.ts` — merge only About-navigation additions.
- `components/layout/Footer.tsx` — preserve newer contact/social changes; add trust links and remove outdated licensing wording.
- `next.config.js` — merge the six About/trust redirects without replacing newer redirects or headers.
- `app/sitemap.ts` — add `/safety-and-travel-assurance` while preserving newer route entries.
- `app/tours-by-experience/[style]/[slug]/page.tsx` — add `JourneyTrustStrip`, `remoteJourney` classification and the component placement; preserve newer product template improvements.
- `package.json` / `package-lock.json` — the functional change is the version bump to 1.4.0; do not overwrite a newer dependency lockfile solely for the version number.

## Safe replacement files

The eight rewritten trust pages, new safety page, new `components/trust/*` files and `data/trustArchitecture.ts` can normally be copied directly unless the production repository has newer work on those exact pages.

## Do not replace

- destination data/pages;
- canonical journey JSON;
- Travel Guide content;
- testimonials;
- enquiry API;
- Sawla Films page;
- production `.env` files;
- analytics or hosting configuration.

## Post-merge checks

1. Confirm one H1 per route.
2. Confirm all trust sub-navigation links.
3. Test six legacy About redirects.
4. Test one standard and one remote canonical journey for the assurance module.
5. Check sitemap and canonicals on staging.
6. Run Google Rich Results Test for visible FAQ/schema consistency.
7. Replace image placeholders only with approved real assets.
8. Complete the claims evidence register before adding license, insurance, statistics or named biographies.
