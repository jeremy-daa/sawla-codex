# Sawla Tours Canonical Journeys V13 Integration

## Scope

This release integrates the approved 25-product canonical journey portfolio into the Codex-built Next.js site. It does not rewrite the completed destination or Travel Guide content.

## Public architecture

- `/tours-by-experience` — premium journey-style hub
- `/tours-by-experience/[style]` — 9 specialist category pages
- `/tours-by-experience/[style]/[slug]` — 25 canonical product pages

## Product distribution

- Historic & Cultural: 4
- Omo Valley & Community: 3
- Festival & Pilgrimage: 4
- Photography: 3
- Trekking & Active: 4
- Birdwatching: 2
- Wildlife: 3
- Special Interest: 1
- Addis Ababa: 1

## Integration rules applied

1. The former 36-product catalogue is no longer the public source of truth.
2. The authoritative runtime dataset is `data/journeys/portfolio.json`.
3. `data/itineraryData.ts` remains only as a compatibility facade.
4. Destination pages link to relevant canonical products through destination-slug relationships.
5. Destination copy and destination page structures are not rewritten.
6. Every product page has unique metadata, one canonical URL, one H1, FAQ schema, breadcrumb schema and TouristTrip schema.
7. Variable ceremonies, wildlife, markets, volcanic conditions and regional access remain explicitly conditional.
8. Old catalogue URLs permanently redirect to the closest approved canonical product.

## Operational rule

A public product page is an inspirational and qualification asset, not a guarantee of continuous operation. Every enquiry requires date-specific access, supplier, transport, insurance, permission and field verification before quotation or deposit.
