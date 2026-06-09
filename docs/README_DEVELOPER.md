# SAWLA TOURS — DEVELOPER HANDOFF
## Next.js 15 · TypeScript · Tailwind CSS · App Router
### Premium Homepage Redesign — June 2026

---

## QUICK START

```bash
cd sawla-tours
npm install
npm run dev
# → http://localhost:3000
```

**Requirements:** Node.js 18+ · npm 9+

---

## WHAT'S IN THIS PACKAGE

```
sawla-tours/
├── app/
│   ├── layout.tsx          ← Root layout — fonts, metadata, Header/Footer
│   ├── globals.css         ← Design system tokens + utility classes
│   └── page.tsx            ← ✅ COMPLETE Homepage (10 sections)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      ← Fixed nav, scroll behaviour, mobile overlay
│   │   ├── Footer.tsx      ← 4-column footer
│   │   └── WhatsAppButton.tsx
├── data/
│   └── siteData.ts         ← ALL content — destinations, tours, species, testimonials
├── public/
│   └── robots.txt
├── next.config.js          ← Image optimisation, redirects, security headers
├── tailwind.config.ts      ← Full design system tokens
├── tsconfig.json
└── postcss.config.js
```

---

## DESIGN SYSTEM

### Brand Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `ivory` | `#F8F6F1` | Page background |
| `volcanic` | `#2A2724` | Dark sections, hero |
| `gold` | `#C9941A` | Accent ONLY — labels, hover states, links |
| `gold-light` | `#E8A82A` | Gold hover variant |
| `sand` | `#E8DDC7` | Borders, card backgrounds |
| `warmgrey` | `#5C5A54` | Body text |
| `charcoal` | `#1C1C1A` | Headlines, dark cards |

**CRITICAL:** Gold is earned, not sprayed. Use ONLY on interactive elements (CTAs hover, eyebrow labels, arrow links). Never as a decorative fill.

### Typography
- **Display:** `font-display` — Cormorant Garamond, weight 300
- **Body/UI:** `font-body` — DM Sans, weight 400/500

### Easing
```css
--ease-luxury: cubic-bezier(0.16, 1, 0.3, 1)   /* spring-like, premium */
--ease-sawla:  cubic-bezier(0.25, 0.46, 0.45, 0.94)  /* standard transitions */
```

### Utility classes (in globals.css)
```
.label-eyebrow     → small uppercase gold tracking label
.btn-primary-ivory → light fill CTA (use on dark backgrounds)
.btn-primary       → dark fill CTA (use on light backgrounds)
.btn-ghost-light   → outline CTA on dark backgrounds
.film-grain        → film grain overlay for cinematic sections
.reveal            → scroll-reveal base class (add .visible via JS)
```

---

## VIDEO SWAP — HERO (PRIORITY 1)

In `app/page.tsx`, find the comment block:
```tsx
{/*
  VIDEO SWAP INSTRUCTIONS:
  Replace this div with:
  <video autoPlay muted loop playsInline ...>
*/}
```

Replace the dark tonal `<div>` with:
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  poster="/images/home/home-hero-poster.jpg"
>
  <source src="/videos/sawla-hero-desktop.mp4" type="video/mp4" media="(min-width:768px)" />
  <source src="/videos/sawla-hero-mobile.mp4" type="video/mp4" />
</video>
```

**Video specs:**
- Desktop: `/public/videos/sawla-hero-desktop.mp4` — 1080p, ≤10 MB, 18–25 sec
- Mobile: `/public/videos/sawla-hero-mobile.mp4` — 720p, ≤6 MB

---

## IMAGE SWAP

Every dark gradient background is a placeholder for a real photo.

**Pattern:** Replace the gradient `<div>` inside each card/section with `next/image`:

```tsx
// BEFORE (placeholder)
<div className="absolute inset-0 bg-gradient-to-br from-[#...] ..." />

// AFTER (real image)
import Image from 'next/image'
<Image
  src="/images/destinations/lalibela/dest-lalibela-hero.jpg"
  alt="Rock-hewn churches of Lalibela, Ethiopia"
  fill
  className="object-cover"
  priority  // add only on above-fold hero images
/>
```

**Image folder structure:**
```
public/images/
  home/           ← hero poster, OG image
  destinations/   ← one subfolder per destination slug
  tours/          ← one subfolder per tour style slug
  species/        ← one subfolder per species slug
  moments/        ← one subfolder per article slug
  about/          ← team portraits
```

**Naming convention:**
```
dest-[slug]-hero.jpg         1920×1080
dest-[slug]-gallery-1.jpg    1200×800
tour-[slug]-hero.jpg         1920×1080
species-[slug]-portrait.jpg  800×800
moments-[slug]-hero.jpg      1920×1080
about-[name]-portrait.jpg    800×800
```

---

## FORM INTEGRATION

The enquiry form in `app/page.tsx` posts to `/api/enquire`.

**Create the API route** at `app/api/enquire/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  // Option A: Resend (recommended)
  // Option B: Nodemailer SMTP
  // Option C: Formspree
  return NextResponse.json({ success: true })
}
```

**Recommended: Resend**
```bash
npm install resend
```

---

## SCROLL REVEAL

Already implemented in `app/page.tsx` via `useReveal()` hook.

Add `className="reveal"` to any element you want to animate in on scroll.
The hook uses `IntersectionObserver` and adds `className="visible"` when the element enters viewport.

CSS is in `globals.css`:
```css
.reveal { opacity: 0; transform: translateY(32px); transition: ... }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

---

## PRE-LAUNCH CHECKLIST

- [ ] Swap hero `<div>` with `<video>` (Sawla Films footage)
- [ ] Replace all gradient placeholders with real `next/image` photos
- [ ] Verify phone number `+251 705 783 06` in `data/siteData.ts`
- [ ] Add tourism license number to `data/siteData.ts` → `company.licenseNumber`
- [ ] Create `app/api/enquire/route.ts` (form handler)
- [ ] Add Google Analytics ID to `app/layout.tsx`
- [ ] Configure 301: ethiorenaissancetours.com → sawlatours.com (DNS)
- [ ] Add `/public/favicon.ico` and `/public/apple-touch-icon.png`
- [ ] Add `/public/images/og-image.jpg` (1200×630)
- [ ] Create `app/sitemap.ts` for XML sitemap
- [ ] Run `npm run build` — fix all TypeScript errors
- [ ] Run Lighthouse audit — target ≥ 90 on all metrics

---

## PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Lighthouse | ≥ 90 |

Already configured:
- WebP/AVIF image formats (`next.config.js`)
- `next/font` for zero layout shift
- Security headers (`next.config.js`)
- `compress: true` in Next.js config

---

## DEPLOYMENT

```bash
npm run build   # verify zero TypeScript errors
vercel --prod   # deploy to Vercel (recommended)
```

**Environment variables (Vercel dashboard):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx
```

---

*Sawla Tours Premium Redesign — June 2026*
*Design direction: Cinematic Ethiopian Earth — dark-luxury, Cormorant Garamond + DM Sans, Teff Gold accent system*
