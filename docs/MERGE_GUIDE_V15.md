# Merge Guide — V15 Contact & Enquiry Conversion

## Preferred method

Apply the focused V15 patch to the newest repository. Do not replace newer destination, canonical journey, trust, photography, analytics or deployment work with an older full project.

## Git method

```bash
git checkout -b feature/sawla-enquiry-v15
git apply --check /path/to/sawla-enquiry-v15.patch
git apply /path/to/sawla-enquiry-v15.patch
npm ci
npm run validate
npm run build
```

## Areas most likely to conflict

- `app/enquire/page.tsx`
- `app/api/enquire/route.ts`
- `components/home/TripWizard.tsx`
- `components/layout/WhatsAppButton.tsx`
- `next.config.js`
- `package.json`
- `package-lock.json`

When resolving conflicts, preserve:

- newer canonical journey data;
- the V14.1 brand-separation validator and redirects;
- any verified production email or CRM integration already in the repository;
- current analytics consent logic;
- current deployment headers and hosting settings.

## Do not preserve from the old enquiry system

- the API that parses JSON while the form posts standard form data;
- placeholder “wire your email provider” comments;
- success responses that only log the payload;
- mandatory phone/WhatsApp collection;
- absolute 24-hour response promises;
- duplicated `/contact-us` and `/enquire` page intent;
- Trip Finder answers that are lost before the visitor reaches the form.

## Environment migration

The patch includes `.env.example`, not secrets. Add the production variables to the hosting dashboard manually.

## Rollback

Before applying to an uncommitted repository:

```bash
git status
git add -A
git commit -m "Backup before V15 enquiry conversion"
```

Rollback after a committed patch:

```bash
git revert <v15-commit-sha>
```
