# Sawla Tours V18 Build & Runtime Validation

**Validated:** 14 June 2026
**Baseline:** V17 Priority 0
**Release:** V18 Homepage & Hub Experience

## Source validation

The aggregate validation command passed:

```text
npm run validate
```

It includes:

- Sawla Tours / Sawla Films brand separation
- 25 signature journey integrity
- Enquiry architecture
- Traveller-story evidence controls
- V17 production-readiness controls
- V18 hub-quality controls
- Strict TypeScript
- ESLint 9 CLI with no warnings or errors

## Production build

```text
Next.js 15.5.19
Compiled successfully
Static generation: 116/116 pages
Final page optimization: passed
Build traces: passed
```

## Hub runtime matrix

| Route | HTTP | H1 | Canonical | Structured data |
|---|---:|---:|---|---|
| `/` | 200 | 1 | Correct | WebSite + TravelAgency graph |
| `/tours-by-experience` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList, FAQPage |
| `/ethiopias-popular-destinations` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList |
| `/ethiopia-travel-guide` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList |
| `/ethiopia-wildlife/endemic-species` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList |
| `/testimonials` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList |
| `/sawla-moments` | 200 | 1 | Correct | CollectionPage, BreadcrumbList, ItemList |
| `/about-us` | 200 | 1 | Correct | Person, AboutPage, BreadcrumbList, FAQPage |
| `/trip-finder` | 200 | 1 | Correct | BreadcrumbList |

All nine routes have unique HTML titles and are present in the XML sitemap.

## Performance characteristics

The production build reports approximately:

- Shared first-load JavaScript: 102 KB
- Static content hubs: approximately 106–108 KB first load
- Homepage: 144 KB first load
- Trip Finder: 147 KB first load

The interactive filters are isolated client components; the surrounding hub content remains server rendered and statically generated.

## Accessibility checks

Automated source guardrails confirm:

- 44px filter and anchor targets
- `aria-pressed` filter states
- Single H1 per rendered hub
- Keyboard-accessible global navigation inherited from V17
- Escape, focus trap, focus restoration and inert background behavior
- Visible traveler language rather than internal technical labels

A final manual screen-reader and browser/zoom audit should still be repeated after final photography is installed.

## Security and enquiry regression

- CSP header: present
- `frame-ancestors 'none'`: present
- Obsolete X-XSS header: absent
- Production enquiry smoke test: passed
- Provider requests: 10
- Encrypted recovery writes: 10
- Sixth repeated request: HTTP 429 using shared-store rate limiting

## Photography boundary

`git diff -- public` returned no changes. V18 does not alter photography, public image assets or image rights records.
