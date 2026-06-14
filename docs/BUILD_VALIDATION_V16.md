# Sawla Tours V16 — Traveller Stories Build Validation

**Validation date:** 13 June 2026
**Baseline:** Sawla Tours Codex V15 Enquiry Conversion
**Release:** V16 Traveller Reviews & Journey Case Studies

## Scope protected

This release changes only the traveller-review and journey-case-study layer plus its contextual links. It does not rewrite the completed destination profiles, canonical journey content, trust architecture, enquiry system or Ethiopia Travel Guide.

## Content integrity

- Public verified reviews: **1**
- Public journey case studies: **6**
- Verified client-story case studies: **1**
- Editorial journey-design studies: **5**
- Inherited testimonial drafts isolated from public imports: **25**
- Self-serving `Review` or `AggregateRating` schema: **0**

## Automated validation

The following commands passed:

```bash
npm run validate:brand-separation
npm run validate:journeys
npm run validate:enquiry
npm run validate:stories
npm run type-check
npm run lint
npm run build
```

### Preserved systems

- 25 canonical journey products
- 9 journey categories
- 256 itinerary days
- Brand-separation safeguards
- V15 enquiry validation

The canonical-journey validator continues to report five previously known destination-registry notices. They are non-blocking and were not altered in this phase because the completed destination system is outside the V16 rewrite scope.

## Production build

- Next.js: **15.5.19**
- TypeScript: passed
- ESLint: passed with no warnings or errors
- Optimized production compile: passed
- Static generation: **110 of 110 pages**
- Final page optimization: passed
- Build trace collection: passed

## Rendered route checks

The following returned HTTP 200:

- `/`
- `/testimonials`
- All six `/testimonials/[slug]` pages
- `/ethiopias-popular-destinations/addis-ababa-city-tour`
- `/tours-by-experience/addis-ababa-day-tours/addis-ababa-masterclass`
- `/sitemap.xml`

Rendered assertions passed:

- Homepage displays the evidence-led stories module.
- Testimonials hub displays the publication rule: “No evidence, no testimonial.”
- The verified external review links to its source.
- Detail pages contain `Article` schema.
- Hub contains no self-serving `Review` or `AggregateRating` schema.
- Relevant destination and canonical journey pages link to mapped stories.
- Every case-study URL appears in the sitemap exactly once.
- Sample inherited draft names do not appear in rendered public output.

## Release gate

The code is merge-ready. New direct-client testimonials must remain unpublished until the evidence and consent workflow in `docs/TESTIMONIAL_EVIDENCE_REGISTER_V16.md` is completed.
