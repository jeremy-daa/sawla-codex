# Sawla Tours — 20K Premium Website Development Build

This package is a high-end Next.js 15 + TypeScript + Tailwind implementation based on the uploaded `SAWLA_TOURS_MASTER_PACKAGE.zip`, the Sawla Tours logo, and the Sawla Films hero video.

## What has been upgraded

- Premium visual direction: Teff Gold `#c9941a`, Volcanic Rock `#2a2724`, Ivory `#f8f6f1`.
- Editorial typography: Cormorant Garamond for display headings, DM Sans for body/UI.
- Cinematic video hero with optimized desktop and mobile MP4s.
- Real Sawla logo integrated in header, hero and footer.
- Full App Router page architecture for core site sections.
- Dynamic templates for destinations, tour styles, itineraries, travel guides, wildlife species and Sawla Moments articles.
- SEO/AIO/GEO/LLM-ready internal architecture with sitemap, robots, llms.txt and JSON-LD support.
- Mobile-first premium layout with restrained motion and accessibility-minded navigation.
- Developer-ready enquiry endpoint scaffold at `/app/api/enquire/route.ts`.

## Commands

```bash
npm install
npm run dev
npm run type-check
npm run build
```

## Required final production work

1. Replace gradient media placeholders with final licensed Sawla Films photography.
2. Connect the enquiry API to Resend, SendGrid, Formspree or CRM.
3. Add Trustpilot/Google review widgets when accounts are ready.
4. Expand long-form guide/article bodies from `/content` into CMS or Markdown renderer.
5. Test on 375px, 767px, 1024px, desktop and real mobile devices.
6. Run Lighthouse and target LCP < 2.5s, CLS < 0.1, total page size < 3MB where possible.

## Notes

The uploaded content package claims 36 itineraries, but the parsed itinerary Markdown currently contains 25 structured itinerary entries. The site architecture still supports 36+ itineraries; add the missing entries to `data/siteData.ts` or connect a CMS.
