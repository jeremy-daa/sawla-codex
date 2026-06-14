# V18 Homepage & Hub Experience Architecture

## Objective

Turn the strong V17 content estate into a concise, premium discovery and decision system comparable in discipline to leading tailor-made travel websites, without manufacturing prices, reviews, credentials or photography.

## Core design rules

1. **A hub helps a traveler choose.** Detail belongs on child pages.
2. **Evidence is labelled.** Verified feedback is separated from editorial journey studies.
3. **Counts are authoritative.** Destination, journey and category totals come from data registries.
4. **Progressive disclosure reduces overload.** Filters, comparison tools and anchor navigation replace long undifferentiated prose.
5. **One page, one primary intent.** Each hub has a focused H1, one canonical and page-specific schema.
6. **Commercial clarity without invention.** Duration, pace, trade-offs, cost drivers and planning next steps are visible; unsupported fixed prices are not invented.
7. **Accessibility is part of luxury.** Keyboard navigation, visible states and 44px interaction targets are required.
8. **Technical checks must be current.** V18 uses the ESLint 9 CLI rather than the deprecated Next.js lint wrapper.
9. **Photography is a separate production layer.** V18 keeps all image slots but does not disguise placeholders as final media.

## Homepage

The homepage now follows a seven-stage narrative:

1. Promise and primary CTA
2. Operating evidence
3. Ethiopia proposition and named founder
4. Three signature journeys
5. Three ways to enter the site
6. Six representative destinations
7. Verified evidence, planning resources and final enquiry CTA

The page avoids trying to summarize every site section. It uses 18 destinations, 25 journeys and 9 travel styles from authoritative registries.

## Tours / Journeys hub

- Interest and duration filters
- Six representative products
- Nine-style comparison table
- Duration, pace, best-for and trade-off information
- Explicit cost-driver guidance linking to the Travel Guide
- Route-design process and FAQ

## Destinations hub

- 18 registered destination guides
- Region and travel-effort filtering
- Three contrasting starting points
- Experience-led selection paths
- Route-combination guidance
- Current-access framing

## Travel Guide hub

- 15 indexed guides
- Essential guides surfaced first
- Topic filter
- Exact review date
- Freshness and source policy
- Clear links back to journeys and enquiry

## Wildlife & Species hub

- Seven starter profiles clearly presented as a starter collection
- Mammal/bird and habitat filters
- Habitat and ethical-observation context
- Direct links to wildlife and birding journeys
- No inflated “complete library” claim

## Traveller Stories hub

- Verified public review separated from editorial studies
- Publication standard visible
- No self-serving rating schema
- Evidence, consent and transparency rules explained

## Sawla Moments hub

- Featured field note
- Topic filtering
- Editorial standards
- Direct journey and destination pathways
- No non-functional newsletter form

## About hub

- Named founder and first-party professional profile
- Person schema connected to the TravelAgency entity
- Company responsibilities and operating structure
- Evidence policy and withheld-claims discipline
- Links to guides, safety, responsible travel and workflow

## Trip Finder

- Clear limitation: a filter is not a route designer
- Five-question expectation
- Human review explained
- Direct continuation into the V15 enquiry system

## Structured data

- Homepage: `WebSite` + `TravelAgency`/`Organization`
- Editorial hubs: `CollectionPage` + `ItemList` + `BreadcrumbList`
- Applicable FAQ hubs: visible `FAQPage`
- About: `AboutPage` + `Person` + `BreadcrumbList` + visible FAQ
- Trip Finder: `BreadcrumbList`

No search action is declared because the site has no public site-search feature. No invisible homepage FAQ is marked up. No self-serving review rating markup is used.

## Photography boundary

V18 does not change public image files, image rights, crops or placeholders. The design is prepared for final assets through stable aspect ratios, labels, responsive image slots and existing image handoff documentation.
