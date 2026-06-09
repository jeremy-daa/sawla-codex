# Sawla Tours V5 — SEO / AIO / GEO / LLM Premium Handoff

This V5 package upgrades the V4 website with a full metadata, keyword, schema and AI-discovery quality pass.

## What changed

- Added `lib/seo.ts` to enforce premium metadata rules consistently.
- Rebuilt metadata for the homepage, hubs, company pages, destination pages, itinerary pages, field guides, species pages and articles.
- Added controlled keyword sets: one primary keyword plus focused semantic support terms.
- Added Open Graph, Twitter Card, canonical and Googlebot preview directives through a central metadata factory.
- Rebuilt `lib/schema.ts` with connected JSON-LD `@graph` support.
- Added WebSite, Organization, WebPage, TouristDestination, TouristTrip, Article, FAQ, ItemList and Review schema patterns.
- Added `generateStaticParams()` to dynamic route templates so static data pages can be pre-rendered for stronger crawlability and performance.
- Added `/ai-index.json` for AI/LLM/entity discovery.
- Updated `/llms.txt` with commercial pages, expertise entities and contact details.
- Added complete SEO manifest and keyword intent map under `seo/metadata/`.

## New / upgraded files

- `lib/seo.ts`
- `lib/schema.ts`
- `public/ai-index.json`
- `public/llms.txt`
- `seo/metadata/SEO_Manifest_V5_All_Pages.json`
- `seo/metadata/Keyword_Intent_Map_V5.csv`
- `docs/SEO_AIO_GEO_LLM_V5_IMPLEMENTATION_REPORT.md`

## Validation completed

- `npm install --ignore-scripts --no-audit --no-fund` completed.
- `npm run type-check` passed.
- `npm run lint` passed with no warnings or errors.
- `npm run build` compiled successfully, then timed out in the sandbox during Next.js page-data collection. Run the full build locally before deployment.

## Launch checks still required

1. Replace placeholder visuals with licensed Sawla Films photography and destination video.
2. Connect the enquiry form to the final email/CRM workflow.
3. Validate JSON-LD on the deployed/staging URL.
4. Submit sitemap in Google Search Console.
5. Monitor Search Console CTR and query coverage after launch, then refine metadata by page.
