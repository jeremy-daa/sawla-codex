# Sawla Tours V11 Build Validation

**Validation date:** 12 June 2026  
**Project:** Sawla Tours V11 Merge-Ready Next.js replacement

## Environment

- Next.js 15.5.19
- React 19
- TypeScript 5.7
- Node package installation via `npm ci`

## Commands completed

```bash
npm ci --ignore-scripts
npm run type-check
npm run lint
NEXT_TELEMETRY_DISABLED=1 npm run build
```

## Results

- TypeScript: **PASS**
- ESLint: **PASS — no warnings or errors**
- Next.js compile: **PASS**
- Static page generation: **PASS — 79/79 pages**
- Final page optimization: **PASS**
- Build traces: **PASS**

## Runtime checks

- `/tours-by-experience`: HTTP 200
- `/sawla-films`: HTTP 200
- All nine journey-style URLs: HTTP 200
- Legacy journey URLs tested: HTTP 308 permanent redirect to the correct canonical route
- Public editorial artifacts (`AI / Direct Answer`, `Final CTA`, `SEO Specification`, `Editorial note`): absent from all nine journey pages
- FAQPage schema: present
- ProfessionalService schema on Sawla Films: present

## Dependency audit

The move from Next.js 15.5.9 to 15.5.19 cleared the high-severity findings reported against the earlier version. `npm audit` still reports two moderate findings tied to the PostCSS version bundled inside Next.js. The available automated remedy proposes an unsafe major downgrade and was not applied. Reassess when the project next upgrades Next.js.

## Important deployment distinction

The application is technically build-ready. Final public launch remains dependent on licensed production photography, live form/email configuration, operational fact verification and deployed schema/redirect testing.
