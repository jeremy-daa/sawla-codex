# Sawla Tours Codex Site — V12 Journey Upgrade

**Upgrade date:** 12 June 2026  
**Base:** Supplied Codex-built Sawla Tours V9 Next.js project  
**Integrated update:** V11 Ethiopia Journeys / Tour Styles system

## What this package is

This is the original Codex-built Sawla Tours website upgraded in place. It preserves the existing visual system, reusable components, navigation, itinerary library and non-journey pages while integrating the completed premium Ethiopia Journeys content architecture.

## Integrated routes

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

## Preserved from the Codex site

- Homepage and global design system
- Header, footer and navigation patterns
- Destination, guide, species, team and Sawla Moments sections
- Existing itinerary library and route hierarchy
- Enquiry flow and global CTAs
- Tailwind, TypeScript and App Router architecture

## Upgraded

- Ten-part commercial journey taxonomy
- Full traveler decision hub
- Nine specialist journey pages
- Dedicated birdwatching category
- Full Sawla Films production-support page
- Metadata, canonical URLs and Open Graph data
- CollectionPage, ItemList, BreadcrumbList, FAQPage and ProfessionalService schema
- Legacy URL redirects
- Natural public headings in place of internal editorial labels
- Next.js and eslint-config-next to 15.5.19

## Deployment

```bash
npm ci
npm run type-check
npm run lint
npm run build
```

Preserve existing `.env*` files and deployment secrets when replacing an active repository. Final production photography, email delivery, analytics and date-sensitive operational facts must be confirmed before public launch.
