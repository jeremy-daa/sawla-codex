# Build Validation — Sawla Tours V14.1 Brand Separation

**Validation date:** 13 June 2026  
**Base project:** Codex V14 Trust Architecture with V13 canonical journeys  
**Release:** 1.4.1

## Scope

V14.1 removes Sawla Films and film-production promotion from the Sawla Tours public content and entity architecture. It retains only two permanent external redirects from retired Sawla Tours film URLs to `https://www.ethiopiafilmfixer.com/`.

## Automated validation

- Brand-separation validator: passed
- Canonical products: 25
- Canonical categories: 9
- Itinerary days: 256
- Canonical routes: 25
- TypeScript: passed
- ESLint: passed with no warnings or errors
- Optimized Next.js production compilation: passed
- Static generation: 104 of 104 pages
- Final page optimization: passed
- Build trace collection: passed

## Runtime checks

| Test | Result |
|---|---|
| `/` | HTTP 200 |
| `/about-us` | HTTP 200 |
| `/tours-by-experience/ethiopia-photography-tours` | HTTP 200 |
| `/sawla-films` | HTTP 308 to `https://www.ethiopiafilmfixer.com/` |
| Legacy filming-theme URL | HTTP 308 to `https://www.ethiopiafilmfixer.com/` |
| Sawla Films references in sampled rendered pages | 0 |
| Sawla Films references in sitemap | 0 |
| Sawla Films references in `llms.txt` | 0 |
| Sawla Films references in `ai-index.json` | 0 |

## Known non-blocking warnings

The canonical-journey validator reports five destination slugs that are referenced by products but are not registered in the current destination list. These warnings existed before V14.1 and are intentionally not resolved by recreating or rewriting destination pages. The product templates avoid broken destination links.

## Release conclusion

The brand-separation change is production-build clean. Sawla Tours is presented only as a private Ethiopia travel company. No hidden link, sitewide promotional link, schema identity link or AI-entity relationship to a film-production brand remains.
