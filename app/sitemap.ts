import type { MetadataRoute } from 'next'
import { destinations, guides, itineraries, moments, species, tourStyles } from '@/data/siteData'

const BASE = 'https://www.sawlatours.com'
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/enquire', '/about-us', '/why-travel-with-sawla-tours', '/how-we-work', '/meet-our-travel-specialists', '/meet-our-guides', '/meet-our-drivers', '/mobile-tented-camps-ethiopia', '/responsible-travel', '/faq', '/ethiopias-popular-destinations', '/tours-by-experience', '/ethiopia-travel-guide', '/ethiopia-wildlife/endemic-species', '/sawla-moments', '/testimonials', '/trip-finder', '/sawla-foundation']
  return [
    ...staticPaths.map((p): MetadataRoute.Sitemap[number] => ({ url: `${BASE}${p}`, lastModified: now, changeFrequency: p === '' ? 'weekly' : 'monthly', priority: p === '' ? 1 : 0.8 })),
    ...destinations.map(d => ({ url: `${BASE}/ethiopias-popular-destinations/${d.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: d.featured ? 0.85 : 0.72 })),
    ...tourStyles.map(s => ({ url: `${BASE}/tours-by-experience/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...itineraries.map(i => ({ url: `${BASE}/tours-by-experience/${i.style}/${i.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: i.featured ? 0.82 : 0.7 })),
    ...guides.map(g => ({ url: `${BASE}/ethiopia-travel-guide/${g.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.72 })),
    ...species.map(s => ({ url: `${BASE}/ethiopia-wildlife/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.72 })),
    ...moments.map(m => ({ url: `${BASE}/sawla-moments/${m.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.64 })),
  ]
}
