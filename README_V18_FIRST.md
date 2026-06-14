# Sawla Tours V18 — Homepage & Hub Experience

Start here for the V18 release.

V18 upgrades the homepage and every principal discovery/planning hub while preserving the completed 18-destination registry, 25 signature journeys, Travel Guide, trust system, traveller-story evidence policy, enquiry platform and Sawla Tours/Sawla Films brand separation.

## Scope

- Homepage
- Ethiopia Tours / Journeys hub
- Destinations hub
- Ethiopia Travel Guide hub
- Endemic Wildlife & Species hub
- Traveller Stories hub
- Sawla Moments hub
- About Sawla Tours hub
- Trip Finder hub
- Global navigation and footer
- Hub metadata, schema, accessibility, performance and automated QA

## Deliberate exclusion

Final photography is not included. All existing image slots and placeholder behavior remain available for the later licensed-media implementation.

## Validation

```bash
npm ci
npm run validate
npm run build
npm run test:enquiry-production
```

See `docs/HUB_EXPERIENCE_V18.md` and `docs/HUB_QA_MATRIX_V18.md` for the full implementation and scoring rationale.
