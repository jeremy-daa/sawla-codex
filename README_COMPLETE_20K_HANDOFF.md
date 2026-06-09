# Sawla Tours — Complete 20K Premium Site Package

**Version:** 3.0.0  
**Status:** Complete developer handoff package  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · App Router  
**Design system:** Teff Gold `#c9941a` · Volcanic Rock `#2a2724` · Ivory `#f8f6f1` · Cormorant Garamond · DM Sans

## What is completed in this package

- Premium homepage with cinematic video hero and Sawla brand system
- 16 destination pages using one dynamic destination template
- 36 itinerary pages using one dynamic itinerary template
- 6 tour-style hub pages
- Ethiopia Travel Guide hub + 14 guide pages
- Wildlife / endemic species hub + 13 species pages
- Sawla Moments editorial hub + article template
- About, Why Travel With Us, How We Work, Guides, Drivers, Specialists, Mobile Camps, Responsible Travel, FAQ and Enquire pages
- New premium pages added in V3:
  - `/testimonials` — reviews and traveller stories hub
  - `/trip-finder` — guided route-selection page
  - `/sawla-foundation` — responsible travel / impact page
- 15 traveller testimonials in structured data
- Sitemap, robots, llms.txt and redirect rules
- JSON-LD schema support and metadata on major pages
- WhatsApp floating CTA
- Enquiry API scaffold with spam trap and email-service notes
- Developer package lock included for reproducible install

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production QA commands

```bash
npm run type-check
npm run lint
npm run build
```

## Final developer notes

This package is designed as a complete premium development handoff, but the final launch still requires environment-specific work:

1. Connect the enquiry form to Resend, SendGrid, Formspree or a CRM.
2. Replace placeholder gradient media with final licensed Sawla Films photos and destination videos.
3. Add real Trustpilot / Google review widget if available.
4. Test performance after final media upload: LCP < 2.5s, CLS < 0.1, page size under target.
5. Verify every published testimonial has permission.
6. Verify current Ethiopia logistics, access, safety and domestic flight realities before publishing client-facing itinerary promises.

## Design quality rules followed

- Point of view, not a template
- Typography that does work
- Restrained color system
- Hierarchy that breathes
- Imagery with intent
- Motion that whispers
- Mobile designed, not shrunk
- Invisible expensive stuff: semantic HTML, metadata, schema, performance and accessibility foundation
