# V4 100% Quality Pass — Sawla Tours

This document records the V4 improvements made to push the Sawla Tours build toward a true premium, high-value website standard.

## 1. Point of view, not a template

The site is structured around Sawla Tours' actual advantage: Ethiopia-based field knowledge, cultural access, cinematic Sawla Films capability, custom routing, and deep destination knowledge. The design avoids generic safari language and uses an editorial luxury travel tone.

## 2. Typography that does work

The build keeps the approved pairing: Cormorant Garamond for editorial display headings and DM Sans for body/UI. V4 changed font loading to a build-safe method so restricted environments do not fail while still preserving the intended typography in browsers.

## 3. Restrained color system

The approved palette remains dominant and disciplined:

- Teff Gold `#c9941a`
- Volcanic Rock `#2a2724`
- Ivory `#f8f6f1`

V4 also corrected Tailwind opacity usage so the palette compiles reliably instead of relying on invalid opacity utilities.

## 4. Hierarchy that breathes

The site uses large editorial sections, strong H1/H2 rhythm, calm CTA placement, and restrained cards. V4 retained the slow luxury layout approach and improved keyboard focus structure.

## 5. Imagery with intent

The package includes Sawla logo and video-ready structure. Final launch still requires real page-by-page Sawla Films image/video selection. No generic stock-photo strategy is recommended.

## 6. Motion that whispers

The animation language remains slow and purposeful: fade-up, line-rise, subtle hover shifts, and no playful bouncing. Reduced-motion preferences are respected globally.

## 7. Mobile designed, not shrunk

The layouts use responsive grids, stacked mobile flows, mobile menu overlay and mobile video source support. Final launch still requires real-device QA at 375px, 767px and 1024px after media replacement.

## 8. Invisible expensive stuff

V4 improved:

- TypeScript validation
- ESLint validation
- Next.js dependency security posture
- Accessibility skip link
- Focus-visible styling
- App manifest
- Build-safe font loading
- Cleaned Tailwind utility compatibility
- Dynamic route type stability
- SEO/AIO/GEO/LLM route architecture

## Validation status

Passed:

- `npm install`
- `npm run type-check`
- `npm run lint`

Partially validated:

- `next build` compiled successfully and passed lint/type validation, but the sandbox timed out during final page-data/build-trace collection. The developer must run the complete production build in the deployment environment.

## Remaining path to true 100%

No serious website should be declared final until these are completed:

- Final real imagery/video placement
- Enquiry form production integration
- Review widget integration
- Lighthouse and Web Vitals test after media upload
- Schema validation in production
- Mobile QA on real devices
- Cross-browser test
- Content/logistics fact-check before publishing
