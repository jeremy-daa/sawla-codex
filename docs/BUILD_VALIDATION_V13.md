# Sawla Tours V13 Canonical Journeys — Build Validation

**Validated:** 2026-06-13
**Base project:** Sawla Tours Codex V12 snapshot
**Release:** 1.3.0

## Portfolio validation

- Canonical products: **25**
- Specialist categories: **9**
- Itinerary days: **256**
- Highlights in runtime dataset: **152**
- Product FAQs: **150**
- Conditional-experience safeguards: **108**
- Unique product slugs: **25**
- Unique canonical route pairs: **25**
- All itinerary days contain a title, operationally useful description and overnight field.
- Product/category distribution matches the approved portfolio matrix.
- Genna and Hidar Tsion source-route inconsistencies were corrected before release.

## Code validation

The following commands passed:

```bash
npm ci
npm run validate:journeys
npm run type-check
npm run lint
npm run build
```

Results:

- Strict TypeScript: **passed**
- ESLint: **passed with no warnings or errors**
- Next.js production compile: **passed**
- Static page generation: **104 / 104**
- Final page optimization: **passed**
- Build trace collection: **passed**

## Rendered route validation

A production server was started from the optimized build.

- Journey hub: HTTP 200
- Nine category pages: HTTP 200
- Twenty-five canonical product pages: HTTP 200
- Total directly tested successful routes: **35 / 35**
- Product H1 count: exactly one on the tested page
- `TouristTrip` schema: present
- `FAQPage` schema: present
- `BreadcrumbList` schema: present
- Page canonical: present and correct
- Sitemap: all 25 canonical journey URLs present exactly once

Representative permanent redirects:

- Interim historic-category URL → approved historic category: HTTP 308
- Former Omo catalogue product → Essential Lower Omo canonical product: HTTP 308
- Former complete photography expedition → Ethiopia Ultimate Photography Portfolio: HTTP 308

Next.js emits HTTP 308 for `permanent: true`; search engines treat it as a permanent redirect.

## Destination integration note

The supplied Codex V12 snapshot registers 12 destination records in `data/siteData.ts`. The canonical portfolio also references Arba Minch/Nech Sar, Konso and Awash, which are not registered in that snapshot. The product renderer deliberately:

1. links only to destination records that exist in the merge target;
2. omits nonexistent destination cards;
3. sends extension links with absent destination records to the destination hub rather than a 404.

This does **not** recreate or overwrite the completed destination content. When the merge target contains the previously completed destination records, the canonical products connect to them automatically through matching slugs.

## Dependency audit

Production dependency audit at validation time:

- Critical: 0
- High: 0
- Moderate: 2
- Low: 0

The two moderate notices are the transitive PostCSS advisory bundled through the current Next.js line. npm proposes an unsafe major-version downgrade as its automated fix; that downgrade was not applied.

## Release conclusion

The canonical journey content and code system is build-ready and merge-ready. It has not been deployed to the live domain. Every specific departure remains subject to date-specific operational confirmation under the journey operating-status policy.
