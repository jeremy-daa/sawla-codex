# Sawla Tours Codex Site — V12 Build Validation

**Date:** 12 June 2026  
**Base:** Supplied Codex-built Sawla Tours V9 project  
**Update:** V11 Ethiopia Journeys / Tour Styles system integrated in place

## Environment

- Next.js 15.5.19
- React 19
- TypeScript 5.7
- Tailwind CSS 3.4

## Completed validation

```bash
npm ci --ignore-scripts
npm run type-check
npm run lint
NEXT_TELEMETRY_DISABLED=1 npm run build
```

## Results

- Dependency installation: PASS
- TypeScript: PASS
- ESLint: PASS — no warnings or errors
- Optimized production compilation: PASS
- Static generation: PASS — 79/79 pages
- Final page optimization: PASS
- Build traces: PASS

## Runtime route checks

- `/tours-by-experience`: HTTP 200
- `/sawla-films`: HTTP 200
- `/tours-by-experience/ethiopia-birdwatching-tours`: HTTP 200
- `/ethiopian-tour-themes`: HTTP 308 permanent redirect to `/tours-by-experience`

## Dependency note

`npm audit` reports two moderate findings tied to a PostCSS dependency within the current Next.js toolchain. The automated forced remedy proposes a breaking version change and was not applied. No high-severity findings remain after upgrading Next.js to 15.5.19.

## Publication dependencies

The application is technically merge-ready. Before public launch, retain or configure production environment variables, verify enquiry delivery and analytics, replace image placeholders with rights-cleared photography, and reconfirm date-sensitive travel operations.
