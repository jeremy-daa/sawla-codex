# SAWLA TOURS — PRE-LAUNCH CHECKLIST
## Every task needed before going live

---

## 🔴 CRITICAL — Site will not work without these

- [ ] Verify phone number `+251 705 783 06` is correct in `data/siteData.ts`
- [ ] Add tourism license number to `data/siteData.ts` → `company.licenseNumber`
- [ ] Create `app/api/enquire/route.ts` — form submission handler
- [ ] Run `npm run build` — zero TypeScript errors required before deploy
- [ ] Add `metadataBase` URL in `app/layout.tsx` → set to `https://www.sawlatours.com`

## 🟠 HIGH PRIORITY — Do before launch

### Media
- [ ] Export Sawla Films hero footage → `/public/videos/sawla-hero-desktop.mp4` (1080p, ≤10MB)
- [ ] Export Sawla Films hero footage → `/public/videos/sawla-hero-mobile.mp4` (720p, ≤6MB)
- [ ] Uncomment `<video>` block in `app/page.tsx` (instructions in README)
- [ ] Photograph all team members (10–15 portraits, 800×800px)
- [ ] Add destination hero photos → `/public/images/destinations/[slug]/`
- [ ] Add `/public/favicon.ico` and `/public/apple-touch-icon.png`
- [ ] Add `/public/images/og-image.jpg` (1200×630px — used for social sharing)

### SEO + Technical
- [ ] Create `app/sitemap.ts` — dynamic XML sitemap
- [ ] Copy `llms.txt` from `04_SEO/llms_txt_template.txt` → `public/llms.txt`
- [ ] Add Google Analytics 4 ID to `app/layout.tsx`
- [ ] Configure 301 redirect: `ethiorenaissancetours.com` → `sawlatours.com` (DNS level, not code)
- [ ] Set up Google Search Console — verify domain, submit sitemap
- [ ] Set up Google Business Profile — add photos, hours, WhatsApp number

### Content verification
- [ ] Confirm all 15 testimonials have written permission to publish
- [ ] Verify all testimonial names, countries, and tour names are accurate
- [ ] Review all guide names and bios before team pages go live
- [ ] Confirm `https://www.evisa.gov.et` is still the correct official eVisa URL

### Trust signals
- [ ] Create Trustpilot business account
- [ ] Send review requests to all clients from the past 2 years
- [ ] List on SafariBookings.com
- [ ] List on AfricaTourOperators.com
- [ ] List on Tripadvisor (if not already)

## 🟡 MEDIUM — Add within first 2 weeks post-launch

- [ ] Newsletter platform — Kit (ConvertKit) recommended
  - Sign up at kit.com
  - Create "Sawla Moments" list
  - Wire up newsletter form in `app/sawla-moments/page.tsx`
- [ ] Add Google Maps embed URL in `app/enquire/page.tsx`
  - Search "SAWLA_TOURS_OFFICE_COORDINATES" in the file and replace
- [ ] Verify Instagram/Facebook/YouTube URLs in `data/siteData.ts`
- [ ] Add Trustpilot widget to Header once 50+ reviews are collected
- [ ] Submit to Bing Webmaster Tools

## 🟢 POST-LAUNCH — First 3 months

- [ ] Core Web Vitals audit via Google PageSpeed Insights (target ≥ 90)
- [ ] Expand FAQ from 20 to 50+ questions
- [ ] Begin Sawla Moments publishing schedule: 2–3 articles/week
- [ ] Add more itineraries: target 36 complete with day-by-day content
- [ ] Apply for Travelife certification
- [ ] Join ETOA (European Tour Operators Association)

---

## DEPLOYMENT COMMANDS

```bash
# Verify build is clean
npm run type-check
npm run build

# Deploy to Vercel (recommended)
npx vercel --prod

# Or connect GitHub repo to Vercel for automatic deploys
```

## ENVIRONMENT VARIABLES (set in Vercel dashboard)

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_SITE_URL=https://www.sawlatours.com
```

---

*Pre-launch checklist — Sawla Tours — June 2026*
