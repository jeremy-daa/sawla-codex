# SAWLA TOURS — PHOTO UPLOAD GUIDE
## For Sawla Films Team · Naming, Sizing, Priority Order

---

## NAMING CONVENTION (strict — do not deviate)

```
dest-[slug]-[type].jpg          destination images
tour-[style]-[slug]-[type].jpg  tour/itinerary images
species-[slug]-[type].jpg       wildlife species images
guide-[slug]-[type].jpg         field guide images
moments-[slug]-[type].jpg       Sawla Moments article images
about-[name]-[type].jpg         team portraits
home-[section]-[type].jpg       homepage specific images
```

**Examples:**
```
dest-lalibela-hero.jpg
dest-simien-mountains-gelada-herd.jpg
species-ethiopian-wolf-portrait.jpg
about-bemnet-portrait.jpg
moments-gelada-simien-mountains-hero.jpg
```

---

## IMAGE SPECIFICATIONS

| Type | Dimensions | Max file size | Format |
|------|-----------|---------------|--------|
| Hero (full-bleed) | 1920×1080px | 400KB | JPEG (85% quality) |
| Gallery wide | 1200×800px | 250KB | JPEG (85% quality) |
| Portrait/square | 800×800px | 200KB | JPEG (90% quality) |
| Thumbnail | 400×300px | 100KB | JPEG (80% quality) |
| OG image | 1200×630px | 300KB | JPEG (85% quality) |

**WebP/AVIF conversion:** Not needed — Next.js handles this automatically via `next/image`. Upload JPEG only.

---

## FOLDER STRUCTURE IN /public/images/

```
public/images/
  home/
    home-hero-poster.jpg
    home-og-image.jpg
  destinations/
    lalibela/
      dest-lalibela-hero.jpg
      dest-lalibela-bet-giyorgis.jpg
      [etc]
    simien-mountains/
    danakil-depression/
    omo-valley/
    bale-mountains/
    gondar/
    axum/
    harar/
    tigray/
    lake-tana/
    addis-ababa/
    kaffa/
    gambella/
    awash-national-park/
    harenna-forest/
  species/
    ethiopian-wolf/
    gelada-baboon/
    walia-ibex/
    mountain-nyala/
    [etc for all 13 species]
  tours/
    heritage-pilgrimage/
    tribal-encounters/
    frontier-adventure/
    wildlife-birding/
    festival-immersion/
    cinematic-journey/
  about/
  moments/
    gelada-monkey-simien-mountains/
    why-ethiopia-not-safari-destination/
    how-we-plan-custom-ethiopia-journey/
  guides/
    [one folder per field guide slug]
```

---

## PRIORITY ORDER (do in this order)

### BATCH 1 — CRITICAL (do first, blocks launch)
These slots hold the placeholder backgrounds. Real images here transform the site immediately.

1. `home-hero-poster.jpg` — hero poster frame (wide, cinematic, beautiful)
2. `about-bemnet-portrait.jpg` — founder portrait (800×800 square)
3. `dest-lalibela-hero.jpg` — Lalibela hero
4. `dest-simien-hero.jpg` — Simien Mountains hero
5. `dest-danakil-hero.jpg` — Danakil hero
6. `dest-omo-hero.jpg` — Omo Valley hero
7. `dest-bale-hero.jpg` — Bale Mountains hero
8. `species-wolf-portrait.jpg` — Ethiopian wolf portrait
9. `species-gelada-portrait.jpg` — Gelada portrait

### BATCH 2 — HIGH (complete within first 2 weeks)
All remaining destination heroes (8 destinations)
Top species action shots (wolf hunting, gelada herd)
Team portraits for all specialists and guides
About camp setup image

### BATCH 3 — MEDIUM (complete within first month)
Gallery images for all destinations (3–5 per destination)
Tour style hero images (6 images)
Moments article hero images (3 images)

### BATCH 4 — ONGOING
Field guide images (1–2 per guide)
Additional gallery images
New Sawla Moments article heroes

---

## SWAPPING PLACEHOLDERS IN CODE

In `app/page.tsx` and all other pages, find:

```tsx
// Gradient placeholder div
<div className="absolute inset-0 bg-gradient-to-br from-[#1A0808]..." />
```

Replace with:

```tsx
import Image from 'next/image'

<Image
  src="/images/destinations/lalibela/dest-lalibela-hero.jpg"
  alt="Rock-hewn churches of Lalibela, Ethiopia at dawn"
  fill
  className="object-cover"
  priority  // add ONLY on above-fold hero images
/>
```

**The gradient div and the Image component are the same shape and size — it's a 1:1 swap.**

---

## VIDEO SPECS

**Hero video (homepage):**
- Desktop: `public/videos/sawla-hero-desktop.mp4` — H.264, 1080p, ≤10MB, 18–25 seconds
- Mobile: `public/videos/sawla-hero-mobile.mp4` — H.264, 720p, ≤6MB, 18–25 seconds
- No audio (autoplay muted)
- No logo or text overlay — the React component handles that
- Content: cinematic Ethiopia montage — rock churches, wildlife at dawn, tribal culture, landscape

---

*Sawla Tours Photo Upload Guide — June 2026*
