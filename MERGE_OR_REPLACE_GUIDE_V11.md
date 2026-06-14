# Sawla Tours V11 — Merge or Replace Guide

## Purpose

This package completes the **Ethiopia Tours / Journeys / Tour Styles** section as a production-buildable Next.js implementation. It integrates the premium editorial work into the actual pages rather than leaving it only in Markdown or strategy documents.

## Recommended path: full replacement

Use the full `Sawla_Tours_V11_Merge_Ready` project when the current deployment is based on Sawla Tours V9 or an earlier branch.

1. Back up the current repository and environment variables.
2. Replace the project files with this package, excluding any existing `.env*` files and deployment secrets.
3. Run:

```bash
npm ci
npm run type-check
npm run lint
npm run build
```

4. Reconnect the enquiry endpoint, analytics, email delivery and deployment environment variables.
5. Install final licensed photography before public launch.
6. Deploy to a staging URL and test redirects, forms, schema, responsive layouts and image crops.

## Merge path: existing V9 repository

The separate merge ZIP contains every file that differs from the supplied V9 base for this section. Copy those files into the same relative paths in the V9 repository, allowing new files to be added and listed files to be replaced.

After merging:

```bash
rm -rf .next
npm install
npm run type-check
npm run lint
npm run build
```

Do not merge only the two page files. The V11 journey architecture also depends on updated data, itinerary categorization, redirects, fonts/styles and package versions.

## Principal routes

- `/tours-by-experience`
- `/tours-by-experience/historic-cultural-ethiopia-tours`
- `/tours-by-experience/omo-valley-cultural-tours`
- `/tours-by-experience/ethiopia-wildlife-tours`
- `/tours-by-experience/ethiopia-birdwatching-tours`
- `/tours-by-experience/ethiopia-adventure-tours`
- `/tours-by-experience/ethiopia-festival-tours`
- `/tours-by-experience/ethiopia-photography-tours`
- `/tours-by-experience/ethiopia-special-interest-tours`
- `/tours-by-experience/addis-ababa-day-tours`
- `/sawla-films`

## What V11 fixes

- Integrates the complete premium journey hub into the live Next.js page.
- Replaces the abbreviated Sawla Films page with the full production-service system.
- Separates wildlife and birdwatching search intent.
- Preserves and reclassifies the existing itinerary library.
- Removes public editorial labels including `AI / Direct Answer`, `Final CTA` and SEO notes.
- Adds natural direct-answer headings for AIO/GEO/LLM extraction.
- Keeps visible FAQs synchronized with FAQPage structured data.
- Adds CollectionPage, ItemList, BreadcrumbList, FAQPage and ProfessionalService schema.
- Preserves legacy URLs through permanent Next.js redirects.
- Updates Next.js from 15.5.9 to 15.5.19 to clear known high-severity audit findings.
- Adds descriptive placeholder labels so accessibility text remains meaningful until final images are supplied.

## Content source files

The original editorial masters are retained in:

- `content/tour-styles/02_ETHIOPIA_JOURNEYS_HUB_FINAL.md`
- `content/tour-styles/03_HISTORIC_CULTURAL_JOURNEYS_FINAL.md`
- `content/tour-styles/04_OMO_VALLEY_COMMUNITY_JOURNEYS_FINAL.md`
- `content/tour-styles/05_WILDLIFE_ENDEMIC_MAMMAL_TOURS_FINAL.md`
- `content/tour-styles/06_BIRDWATCHING_TOURS_FINAL.md`
- `content/tour-styles/07_ADVENTURE_TREKKING_REMOTE_EXPEDITIONS_FINAL.md`
- `content/tour-styles/08_FESTIVALS_FAITH_PILGRIMAGE_FINAL.md`
- `content/tour-styles/09_PHOTOGRAPHY_EXPEDITIONS_FINAL.md`
- `content/tour-styles/10_COFFEE_CULINARY_SPECIAL_INTEREST_FINAL.md`
- `content/tour-styles/11_ADDIS_DAY_TOURS_BUSINESS_TRAVEL_FINAL.md`
- `content/tour-styles/12_FILMING_PRODUCTION_SUPPORT_FINAL.md`

The rendered child-page content is stored in `data/tourStylePageContent.ts`. Public-facing headings and duplicated internal CTA sections have been cleaned in that generated file.

## Required launch checks

The code is merge-ready and build-validated. Public launch still requires:

1. Final licensed photographs and responsive crops.
2. Verification of current regional access, operating conditions and supplier availability.
3. Annual confirmation of festival dates and local programs.
4. Project-specific confirmation of media, drone, equipment and protected-area requirements.
5. Production testing of enquiry email delivery and spam protection.
6. Google Rich Results Test and Schema.org validation against the deployed URL.
7. Redirect crawl to confirm no chains or loops after deployment.
8. Search Console sitemap submission and canonical inspection.

## Rollback

Keep the prior deployment tag or ZIP. If a staging issue occurs, restore the previous repository and deployment, then merge individual V11 files after resolving the conflict. No database migration is required for this section.
