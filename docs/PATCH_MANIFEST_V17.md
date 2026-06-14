# Sawla Tours V17 — Patch Manifest

## Metadata, schema, sitemap and routing

- `app/layout.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `lib/schema.ts`
- `next.config.js`
- representative static/dynamic page metadata files

## Destination restoration

- `data/siteData.ts`
- `data/destinationContent.ts`
- destination hub/detail templates
- canonical journey destination references
- destination migration redirects

## Travel Guide and species freshness

- `data/fieldGuideContent.ts`
- `data/speciesContent.ts`
- Travel Guide hub/detail templates
- wildlife hub/detail templates

## Accessibility and UX

- `components/layout/Header.tsx`
- `app/sawla-moments/page.tsx`
- public terminology and canonical-link updates across relevant pages/data

## Enquiry, privacy and security

- `app/api/enquire/route.ts`
- `lib/distributedRateLimit.ts`
- `lib/enquiryStore.ts`
- `.env.example`
- `app/privacy-policy/page.tsx`
- `scripts/verify-enquiry-environment.mjs`
- `scripts/smoke-enquiry-production.mjs`

## Automated controls

- `scripts/validate-production-readiness.mjs`
- `package.json`
- `package-lock.json`

## Release documentation

- `README_V17_FIRST.md`
- `CHANGELOG_V17.md`
- `docs/PRODUCTION_READINESS_V17.md`
- `docs/CLAIMS_EVIDENCE_REGISTER_V17.md`
- `docs/ENQUIRY_PRODUCTION_SETUP_V17.md`
- `docs/BUILD_VALIDATION_V17.md`
- `docs/MERGE_GUIDE_V17.md`
- `docs/PATCH_MANIFEST_V17.md`

## Explicitly outside scope

- final licensed image assets;
- final image crops and galleries;
- photographer credits and release records;
- production CDN/media migration.
