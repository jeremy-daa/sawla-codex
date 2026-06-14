# Apply the V12 Upgrade to an Existing Codex Repository

## Safest method

1. Create a backup branch or ZIP of the current repository.
2. Preserve all `.env*` files and deployment secrets.
3. Copy this package over the current Sawla Tours repository, replacing matching files.
4. Keep any newer production images or environment-specific files already present in the repository.
5. Run:

```bash
rm -rf .next
npm ci
npm run type-check
npm run lint
npm run build
```

## Important merge rule

Do not copy only the visible page files. The journey update also depends on the upgraded content/data model, styles, sitemap, redirects, fonts and package versions included in this package.

## Staging checks

- Test the journey hub and all nine journey category routes.
- Test `/sawla-films`.
- Submit an enquiry form and verify delivery.
- Test navigation on desktop and mobile.
- Confirm legacy URLs redirect once to the correct canonical pages.
- Validate FAQ and service structured data.
- Replace placeholders with licensed photographs and verify crops.
