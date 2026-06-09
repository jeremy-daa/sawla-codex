# Sawla Tours — V4 100% Quality Pass Handoff

**Version:** 4.0.0  
**Status:** Premium launch-candidate developer handoff  
**Stack:** Next.js 15.5.19 · TypeScript · Tailwind CSS · App Router  
**Design direction:** Teff Gold `#c9941a` · Volcanic Rock `#2a2724` · Ivory `#f8f6f1` · Cormorant Garamond · DM Sans

## What V4 improves

V4 is the quality-pass package intended to move the previous premium foundation closer to final agency-grade production readiness.

### Technical fixes completed

- Upgraded Next.js from the vulnerable `15.1.3` foundation to `15.5.19`.
- Matched `eslint-config-next` to the upgraded Next.js version.
- Added `.eslintrc.json` so linting is non-interactive.
- Fixed TypeScript narrowing issues in dynamic guide and editorial article pages.
- Fixed Tailwind opacity classes that were too custom for reliable production compilation.
- Added `outputFileTracingRoot` to avoid monorepo/root inference issues during builds.
- Removed `next/font/google` dependency so restricted build environments do not fail while fetching Google Fonts.
- Added runtime font loading fallback through App Router `<head>` and CSS variables.
- Added `app/manifest.ts` for web app metadata.
- Added skip-link and global `:focus-visible` accessibility styling.
- Added `id="main-content"` for keyboard and screen-reader navigation.

### Validation performed

```bash
npm install
npm run type-check
npm run lint
```

Both TypeScript and ESLint passed in the working environment.

`next build` successfully reached optimized compilation and lint/type validation, but the sandbox timed out during the final Next.js page-data/build-trace phase. A developer should still run the full production build locally or on Vercel/Netlify before deployment.

## Content inventory

- 16 destination pages
- 36 itinerary pages
- 6 tour-style hubs
- 14 Ethiopia travel guide pages
- 13 wildlife/species pages
- 15 structured testimonials
- Homepage, About, Enquire, FAQ, Responsible Travel, How We Work, Guides, Drivers, Specialists, Mobile Camps
- Premium route hubs: Testimonials, Trip Finder, Sawla Foundation, Sawla Moments

## Production commands

```bash
npm install
npm run type-check
npm run lint
npm run build
npm run dev
```

## Final launch work still required

1. Connect the enquiry API to Resend, SendGrid, Formspree or the chosen CRM.
2. Replace gradient placeholders with final licensed Sawla Films photos and destination videos.
3. Add real Trustpilot / Google review embeds if available.
4. Run Lighthouse after final media placement.
5. Validate final metadata, schema and sitemap in production.
6. Confirm all itinerary logistics, safety notes, domestic flight assumptions and access conditions before publishing.
7. Verify permission to publish every testimonial and traveller photo.

## Quality standard applied

The V4 package follows the eight premium standards you provided:

1. Point of view, not a template.
2. Typography that does work.
3. Restrained color system.
4. Hierarchy that breathes.
5. Imagery with intent.
6. Motion that whispers.
7. Mobile designed, not shrunk.
8. Invisible expensive stuff.
