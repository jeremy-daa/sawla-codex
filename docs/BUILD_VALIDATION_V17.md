# Sawla Tours V17 — Build Validation

**Validation date:** 14 June 2026
**Baseline:** V16 Traveller Stories
**Release:** 1.7.0

## Automated validation

The aggregate validation command passed:

```bash
npm run validate
```

Included:

- brand separation;
- 25-product journey integrity;
- enquiry implementation;
- traveller-story evidence controls;
- V17 production-readiness guardrails;
- strict TypeScript;
- ESLint with no warnings or errors.

Preserved portfolio totals:

- 25 signature journey products;
- 9 categories;
- 256 itinerary days;
- 152 highlights;
- 150 product FAQs;
- 108 conditional safeguards.

## Production build

```bash
npm run build
```

Result:

- Next.js 15.5.19;
- optimized compilation passed;
- static generation: 116/116;
- final optimization passed;
- build traces collected;
- exit code 0.

## Rendered route validation

- 111 sitemap URLs tested: 111 returned HTTP 200.
- Destination pages in sitemap: 18/18.
- Travel Guide pages in sitemap: 15/15.
- Species pages in sitemap: 7/7.
- Representative legacy destination and contact routes returned HTTP 308 to the correct canonical destination.
- Wildlife hub self-canonical passed.
- Representative titles contained no duplicate Sawla Tours suffix.
- Homepage schema did not leak from the root layout.
- CSP was present; obsolete X-XSS was absent.
- Exact 14 June 2026 review labels rendered on the relevant current-information pages.
- Official-source callouts rendered on the visa, safety and general travel guidance pages.

## Enquiry validation

`npm run test:enquiry-production` passed:

- five enquiries accepted under the shared limit;
- ten provider requests generated for team and traveler messages;
- ten encrypted recovery writes created for pending/delivered states;
- sixth request from the same test identity returned HTTP 429;
- plaintext traveler email was absent from stored encrypted payloads.

Production mode without its required credentials fails closed and returns HTTP 503 rather than a false success.

## Photography

No final image replacement was attempted. Visual placeholders remain outside the V17 release scope.
