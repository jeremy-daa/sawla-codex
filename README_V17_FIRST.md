# Sawla Tours V17 — Priority 0 Production Readiness

Start here before merging or deploying this release.

## Scope

V17 completes the fourteen non-photography Priority 0 remediation items identified in the full V16 audit. It deliberately does **not** replace, crop, optimize or publish final photography. Existing placeholder components and image slots remain available for the later media phase.

## Completed release gates

- Restored the validated 18-destination system and one authoritative registry.
- Removed duplicate title branding and inherited homepage canonicals.
- Scoped homepage structured data to the homepage only.
- Added all 15 Travel Guide and 7 species pages to the sitemap.
- Corrected the wildlife hub canonical.
- Replaced public internal terminology such as “canonical journeys” with traveler-facing language.
- Rebuilt desktop and mobile navigation for keyboard and focus accessibility.
- Removed the non-functional newsletter form.
- Replaced unstable and unsupported promises with dated, source-led or departure-specific language.
- Added encrypted enquiry recovery, provider-failure handling and distributed rate limiting.
- Replaced redirect-dependent internal destination links with canonical URLs.
- Added exact 14 June 2026 review labels to date-sensitive guides and records.
- Added an enforceable Content Security Policy and modern security headers.
- Added automated production-readiness and enquiry-environment checks.

## Install and validate

```bash
npm ci
npm run validate
npm run build
```

Before production deployment:

```bash
npm run verify:enquiry-env
npm run test:enquiry-production
```

The smoke test uses local mock services and does not send a real email. A staging-domain submission using the real provider and inboxes remains mandatory.

## Production environment

See `.env.example` and `docs/ENQUIRY_PRODUCTION_SETUP_V17.md`.

## Important photography boundary

No final image assets were installed in V17. Do not remove the placeholder/image-slot system. Preserve any licensed images already added to the target repository when resolving merge conflicts.
