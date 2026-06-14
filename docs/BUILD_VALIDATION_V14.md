# Build Validation V14

Validation date: 13 June 2026
Base: Sawla Tours Codex V13 Canonical Journeys
Target: V14 Trust Architecture

## Commands

```bash
npm ci
npm run validate:journeys
npm run type-check
npm run lint
npm run build
```

## Results

- `npm ci`: passed
- canonical journey validator: passed
- canonical products: 25
- canonical categories: 9
- itinerary days: 256
- TypeScript: passed
- ESLint: passed with no warnings or errors
- optimized Next.js compile: passed
- static page generation: 105/105
- final optimization: passed
- build trace collection: passed

## Runtime checks

HTTP 200:

- `/about-us`
- `/why-travel-with-sawla-tours`
- `/how-we-work`
- `/meet-our-travel-specialists`
- `/meet-our-guides`
- `/meet-our-drivers`
- `/mobile-tented-camps-ethiopia`
- `/responsible-travel`
- `/safety-and-travel-assurance`
- representative canonical product page

HTTP 308 permanent redirects:

- `/about-us/why-travel-with-sawla-tours`
- `/about-us/how-we-work`
- `/about-us/meet-ethiopia-travel-specialists`
- `/about-us/meet-ethiopia-tour-guides`
- `/about-us/meet-our-drivers`
- `/about-us/ethiopia-mobile-safari`

## SEO/schema checks

- canonical present on all nine trust routes;
- FAQPage present where visible FAQs render;
- BreadcrumbList present;
- ItemList present on role/standard collections;
- Service present on mobile-camp page;
- safety page appears once in sitemap;
- journey trust module renders on canonical products.

## Existing V13 warnings preserved

Five destination-registry warnings remain in the canonical journey validator because the available Codex reference project has fewer registered destination records than the completed destination release. V14 does not recreate or rewrite destination content. Merge into the repository containing the complete destination registry.
