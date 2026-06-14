# V18 Merge Guide

## Recommended method

Apply the focused V17-to-V18 Git patch to the newest Sawla Tours repository.

```bash
git checkout -b feature/hub-experience-v18
git apply --check /path/to/Sawla_Tours_Hub_Experience_V18.patch
git apply /path/to/Sawla_Tours_Hub_Experience_V18.patch
npm ci
npm run validate
npm run build
npm run test:enquiry-production
```

## Important merge protections

Preserve deployment-specific files that are not part of the patch:

- `.env*`
- Hosting secrets
- Live photography added after V17
- Analytics IDs and consent configuration
- CI/CD platform settings

## Conflict priorities

If the repository contains newer changes:

1. Keep the V18 hub components and page hierarchy.
2. Keep the newest verified business facts.
3. Keep authoritative registries for destinations and journeys.
4. Never restore public “canonical product” terminology.
5. Keep the V17 enquiry, evidence and security validators.
6. Do not replace real licensed images with placeholder assets.

## Rollback

Use the generated backup in the replacement kit, or revert the feature branch/commit. Never remove the V17 destination, enquiry or security work when rolling back a hub-only issue.
