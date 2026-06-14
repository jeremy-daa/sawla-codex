# Sawla Tours V15 — Build and Delivery Validation

**Validation date:** 13 June 2026
**Base:** Sawla Tours Codex V14.1 brand-separated project
**Release:** `1.5.0`

## Scope boundary

V15 changes only the contact and enquiry conversion layer plus the minimum integration points required to carry journey context, Trip Finder answers, privacy disclosure, response-language consistency and legacy contact redirects.

The following completed systems were preserved rather than rebuilt:

- 25 canonical journey products;
- nine canonical journey categories;
- 256 itinerary days;
- destination pages and destination data;
- V14 trust architecture;
- V14.1 Sawla Tours / Sawla Films separation;
- Ethiopia Travel Guide;
- existing visual design system.

## Automated validation

Command:

```bash
npm run validate
```

Result: **passed**.

Included checks:

- brand separation: passed;
- canonical journey integrity: passed;
- enquiry system validation: passed;
- TypeScript: passed;
- ESLint: passed with no warnings or errors.

Canonical journey totals remained unchanged:

- products: 25;
- categories: 9;
- itinerary days: 256;
- highlights: 152;
- FAQs: 150;
- conditional safeguards: 108;
- unique product routes: 25.

The validator continues to report five pre-existing destination-registry notices for Arba Minch/Nech Sar, Konso and Awash National Park references. V15 does not rewrite the previously completed destination system. Product templates already prevent unavailable registry records from creating broken links.

## Production build

Command:

```bash
npm run build
```

Result: **passed with exit code 0**.

- Next.js: 15.5.19;
- optimized compilation: passed;
- static generation: 104 of 104 pages;
- final page optimization: passed;
- build trace collection: passed.

Relevant routes generated:

- `/enquire` — dynamic;
- `/enquire/thank-you` — dynamic;
- `/api/enquire` — dynamic;
- `/trip-finder` — static;
- all 25 canonical product routes preserved.

## Runtime route checks

| Check | Result |
|---|---:|
| `/enquire` | HTTP 200 |
| Journey-prefilled `/enquire?journey=classic-northern-ethiopia-circuit` | HTTP 200 |
| `/enquire/thank-you?reference=...` | HTTP 200 |
| `/trip-finder` | HTTP 200 |
| `/contact-us` | HTTP 308 to `/enquire` |
| `/contact` | HTTP 308 to `/enquire` |
| `/enquire` in sitemap | Exactly once |
| Thank-you route in sitemap | Zero |
| Thank-you robots directive | `noindex, nofollow, noarchive` |

## Submission contract tests

| Test | Result |
|---|---:|
| Valid JSON payload in log mode | HTTP 200 with `ST-...` reference |
| Valid multipart/form-data payload in log mode | HTTP 200 with `ST-...` reference |
| Invalid payload | HTTP 400 with field-level errors |
| Cross-site browser request | HTTP 403 |
| Oversized request | HTTP 413 |
| Rate threshold exceeded | HTTP 429 with retry guidance |
| Email mode without production credentials | HTTP 503 with direct-contact fallback |

The 503 test confirms the endpoint does not report a false success when the production delivery provider is not configured.

## Delivery safety

The team-facing message must be accepted by the configured provider before the browser receives success. The traveller acknowledgement and optional workflow webhook occur after the team delivery step.

Production launch still requires:

- a valid Resend API key;
- a verified Sawla Tours sending domain;
- a configured sender address;
- the internal enquiry recipient list;
- end-to-end staging tests using real inboxes;
- confirmation of inbox ownership and response workflow.

## Dependency audit

`npm audit` result at packaging time:

- critical: 0;
- high: 0;
- moderate: 2;
- low: 0.

The two moderate notices are inherited transitive Next.js/PostCSS advisories. No forced dependency change was applied because it could destabilize the validated application. Reassess them during the final sitewide technical QA phase or when the supported Next.js upgrade path is approved.

## Release conclusion

The V15 source is merge-ready and replacement-ready. It has not been deployed to the public Sawla Tours domain, and production email delivery cannot be considered live until hosting variables, domain verification and real-inbox tests are completed.
