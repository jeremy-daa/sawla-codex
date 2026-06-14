# Merge Guide — Sawla Tours V14.1 Brand Separation

## Recommended application

Apply the unified Git patch to the current V14 repository, or use the replacement payload if the repository has diverged.

```bash
git checkout -b feature/sawla-brand-separation-v14-1
git apply --check /path/to/sawla-brand-separation-v14.1.patch
git apply /path/to/sawla-brand-separation-v14.1.patch
npm ci
npm run validate
npm run build
```

## Important behavior

The following retired Sawla Tours URLs remain permanent external redirects:

- `/sawla-films`
- `/ethiopian-tour-themes/filming-ethiopia-fixer-production-logistics`

Do not replace these with hidden links, `sameAs`, a sitewide footer promotion or a new Sawla Tours film page.

## Files intentionally removed

- `app/sawla-films/page.tsx`
- `content/tour-styles/12_FILMING_PRODUCTION_SUPPORT_FINAL.md`

## Environment safety

The patch does not include `.env` files, hosting secrets, analytics IDs or deployment credentials. Preserve those from the target repository.
