// SAWLA TOURS — JSON-LD SCHEMA LIBRARY
// V5 SEO/AIO/GEO/LLM pass: connected @graph, page-level entities, safe review markup.

const BASE_URL = 'https://www.sawlatours.com'
const ORG_ID = `${BASE_URL}/#organization`
const WEBSITE_ID = `${BASE_URL}/#website`

export const organizationSchema = {
  '@type': ['TravelAgency', 'LocalBusiness', 'Organization'],
  '@id': ORG_ID,
  name: 'Sawla Tours',
  legalName: 'Sawla Tours Ethiopia',
  url: BASE_URL,
  logo: `${BASE_URL}/images/brand/sawla-tours-logo-white.png`,
  image: `${BASE_URL}/images/brand/sawla-hero-poster.jpg`,
  telephone: '+251970578306',
  email: 'explore@sawlatours.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 9.032, longitude: 38.7469 },
  foundingDate: '2009',
  areaServed: { '@type': 'Country', name: 'Ethiopia' },
  priceRange: '$$$',
  knowsAbout: [
    'Bespoke Ethiopia tours',
    'Lalibela private tours',
    'Omo Valley cultural travel',
    'Danakil Depression expeditions',
    'Simien Mountains trekking',
    'Bale Mountains wildlife tours',
    'Ethiopia photography tours',
    'Responsible travel in Ethiopia',
  ],
  sameAs: ['https://www.ethiopiafilmfixer.com'],
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BASE_URL,
  name: 'Sawla Tours',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/trip-finder?query={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function graphSchema(nodes: Record<string, unknown>[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

export function webPageSchema({
  path,
  name,
  description,
  type = 'WebPage',
  breadcrumb,
  about,
}: {
  path: string
  name: string
  description: string
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'FAQPage'
  breadcrumb?: { name: string; url: string }[]
  about?: Record<string, unknown> | Record<string, unknown>[]
}) {
  return {
    '@type': type,
    '@id': `${BASE_URL}${path}#webpage`,
    url: `${BASE_URL}${path}`,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
    ...(about ? { about } : {}),
    ...(breadcrumb ? { breadcrumb: breadcrumbListSchema(breadcrumb) } : {}),
  }
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    })),
  }
}

export function itemListSchema({
  name,
  path,
  items,
}: {
  name: string
  path: string
  items: { name: string; url: string }[]
}) {
  return {
    '@type': 'ItemList',
    '@id': `${BASE_URL}${path}#itemlist`,
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export function generateTourSchema({
  name,
  description,
  slug,
  style,
  duration,
  priceFrom,
  destinations,
  image,
}: {
  name: string
  description: string
  slug: string
  style: string
  duration: string
  priceFrom: string | number
  destinations: string[]
  image?: string
}) {
  const path = `/tours-by-experience/${style}/${slug}`
  const price = typeof priceFrom === 'number' ? priceFrom : Number(String(priceFrom).replace(/[^0-9.]/g, '')) || undefined
  return {
    '@type': 'TouristTrip',
    '@id': `${BASE_URL}${path}#trip`,
    name,
    description,
    url: `${BASE_URL}${path}`,
    image: image || `${BASE_URL}/images/brand/sawla-hero-poster.jpg`,
    touristType: ['Cultural traveller', 'Wildlife traveller', 'Photography traveller', 'Private luxury traveller'],
    duration,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: destinations.map((dest, i) => ({ '@type': 'ListItem', position: i + 1, name: dest })),
    },
    ...(price ? { offers: { '@type': 'Offer', price, priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@id': ORG_ID } } } : {}),
    provider: { '@id': ORG_ID },
  }
}

export function generateDestinationSchema({
  name,
  slug,
  description,
  image,
  region,
}: {
  name: string
  slug: string
  description: string
  image?: string
  region: string
}) {
  const path = `/ethiopias-popular-destinations/${slug}`
  return {
    '@type': 'TouristDestination',
    '@id': `${BASE_URL}${path}#destination`,
    name: `${name}, Ethiopia`,
    description,
    url: `${BASE_URL}${path}`,
    image: image || `${BASE_URL}/images/brand/sawla-hero-poster.jpg`,
    address: { '@type': 'PostalAddress', addressRegion: region, addressCountry: 'ET' },
    containedInPlace: { '@type': 'Country', name: 'Ethiopia', '@id': 'https://www.wikidata.org/wiki/Q115' },
    touristType: ['Heritage Tourism', 'Cultural Tourism', 'Wildlife Tourism', 'Private Travel'],
  }
}

export function generateSpeciesSchema({
  commonName,
  latinName,
  slug,
  description,
  image,
  iucnStatus,
}: {
  commonName: string
  latinName?: string
  slug: string
  description: string
  image?: string
  iucnStatus: string
}) {
  const path = `/ethiopia-wildlife/${slug}`
  return {
    '@type': 'Article',
    '@id': `${BASE_URL}${path}#article`,
    headline: `${commonName} — Ethiopia Wildlife Guide`,
    description,
    url: `${BASE_URL}${path}`,
    image: image || `${BASE_URL}/images/brand/sawla-hero-poster.jpg`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    about: {
      '@type': 'Taxon',
      name: latinName || commonName,
      alternateName: commonName,
      taxonRank: 'Species',
    },
    keywords: [commonName, latinName, 'Ethiopia endemic wildlife', iucnStatus].filter(Boolean).join(', '),
  }
}

export function generateArticleSchema({
  title,
  slug,
  description,
  image,
  datePublished = '2026-06-01',
  dateModified,
  section = 'Sawla Moments',
}: {
  title: string
  slug: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  section?: string
}) {
  const basePath = section === 'Ethiopia Travel Guide' ? '/ethiopia-travel-guide' : '/sawla-moments'
  return {
    '@type': 'Article',
    '@id': `${BASE_URL}${basePath}/${slug}#article`,
    headline: title,
    description,
    url: `${BASE_URL}${basePath}/${slug}`,
    image: image || `${BASE_URL}/images/brand/sawla-hero-poster.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    articleSection: section,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${BASE_URL}${basePath}/${slug}`,
    inLanguage: 'en',
  }
}

export function generateFAQSchema(faqs: { question?: string; answer?: string; q?: string; a?: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question || item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.answer || item.a },
    })),
  }
}

export function aggregateReviewSchema({ ratingValue = '5.0', reviewCount = 15 }: { ratingValue?: string; reviewCount?: number } = {}) {
  return {
    '@type': 'AggregateRating',
    ratingValue,
    bestRating: '5',
    reviewCount,
  }
}

// Backwards-compatible alias for older imports.
export const generateBreadcrumbSchema = breadcrumbListSchema
