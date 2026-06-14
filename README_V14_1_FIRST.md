# Sawla Tours V14.1 — Brand-Separated Release

This release keeps Sawla Tours focused entirely on private, tailor-made Ethiopia travel. No film-production brand is marketed or linked from traveler-facing content.

The only cross-domain mechanism is a permanent redirect from two retired Sawla Tours film URLs to `https://www.ethiopiafilmfixer.com/`. This is intentional migration hygiene—not a hidden SEO link.

Run before deployment:

```bash
npm ci
npm run validate
npm run build
```

See `docs/BRAND_SEPARATION_V14_1.md` for the governance rule.
