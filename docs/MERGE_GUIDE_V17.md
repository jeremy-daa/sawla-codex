# Sawla Tours V17 — Merge Guide

## Recommended approach

Apply the focused V17 patch to the latest V16 repository so any production photography, deployment settings or environment variables added after the supplied baseline remain intact.

```bash
git checkout -b feature/priority-zero-v17
git apply --check /path/to/sawla-priority0-v17.patch
git apply /path/to/sawla-priority0-v17.patch
npm ci
npm run validate
npm run build
```

## Preserve during conflicts

1. Any licensed production photography already added.
2. Hosting and deployment configuration.
3. Real analytics/consent configuration if added after V16.
4. Real email and Redis environment secrets—never copy them into source control.
5. The 25-product V13 dataset, V14 trust system, V14.1 brand separation, V15 enquiry flow and V16 evidence-led stories.

## Required V17 behavior after conflict resolution

- Exactly 18 active destination records.
- All 15 guide and 7 species pages in sitemap.
- No homepage schema or canonical in root layout.
- No duplicate title suffix.
- Wildlife hub self-canonical.
- Accessible keyboard/mobile header behavior.
- No non-functional newsletter.
- No public “canonical journey” terminology.
- Enquiry production mode requires durable limiting and encrypted recovery storage.
- CSP remains enforced.

## Post-merge commands

```bash
npm run validate
npm run build
npm run test:enquiry-production
```

On staging, test every environment-dependent enquiry path using real provider credentials and inboxes.
