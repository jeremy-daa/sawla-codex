// lib/schema.ts
// Sawla Tours — JSON-LD Schema definitions for all page types

export const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.sawlatours.com/#website',
      name: 'Sawla Tours',
      url: 'https://www.sawlatours.com/',
      description: 'Ethiopia-based tour operator designing private, tailor-made Ethiopia journeys.',
      publisher: { '@id': 'https://www.sawlatours.com/#travelagency' },
      inLanguage: 'en',
    },
    {
      '@type': ['TravelAgency', 'Organization'],
      '@id': 'https://www.sawlatours.com/#travelagency',
      name: 'Sawla Tours',
      description: 'Ethiopia-based tour operator designing private, tailor-made journeys across cultural, historic, wildlife, birding, photography, festival, trekking and specialist routes.',
      url: 'https://www.sawlatours.com/',
      foundingDate: '2009',
      founder: { '@id': 'https://www.sawlatours.com/about-us/#founder' },
      areaServed: { '@type': 'Country', name: 'Ethiopia' },
      address: { '@type': 'PostalAddress', addressLocality: 'Addis Ababa', addressCountry: 'ET' },
      email: 'explore@sawlatours.com',
      telephone: '+25170578306',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'travel planning',
        telephone: '+25170578306',
        email: 'explore@sawlatours.com',
        availableLanguage: ['English', 'Amharic'],
      },
      sameAs: [
        'https://www.facebook.com/sawlatours',
        'https://www.instagram.com/sawlatours',
        'https://www.tripadvisor.com/Attraction_Review-g293791-d34057277-Reviews-Sawla_Tours-Addis_Ababa.html',
      ],
      knowsAbout: [
        'Private Ethiopia tours', 'Lalibela', 'Simien Mountains', 'Bale Mountains', 'Omo Valley',
        'Danakil Depression', 'Tigray', 'Ethiopia cultural tours', 'Ethiopia wildlife tours',
        'Ethiopia photography tours', 'Ethiopia trekking', 'Ethiopia birding',
        'Ethiopia festival tours', 'Ethiopian wolf', 'Gelada', 'endemic species of Ethiopia',
        'mobile tented camps Ethiopia', 'tailor-made Ethiopia journeys',
      ],
    },
  ],
}


export function articleSchema(params: {
  url: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Sawla Tours',
      url: 'https://www.sawlatours.com',
    },
    image: params.image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  }
}

export function destinationSchema(params: {
  name: string
  url: string
  description: string
  image: string
  region?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image,
    touristType: ['CulturalTourist', 'AdventureTourist', 'EcoTourist'],
    containedInPlace: { '@type': 'Country', name: 'Ethiopia' },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}


// ── CollectionPage schema (editorial and planning hubs) ───────────────
export function collectionPageSchema(params: {
  name: string
  url: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: params.name,
    url: params.url,
    description: params.description,
    isPartOf: { "@id": "https://www.sawlatours.com/#website" },
    about: { "@type": "Country", name: "Ethiopia" },
    inLanguage: "en",
  }
}

// ── ItemList schema (hub pages) ────────────────────────────────────────
export function itemListSchema(params: {
  name: string
  url: string
  items: { name: string; url: string; description?: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: params.name,
    url: params.url,
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

// ── Tour / TouristTrip schema ────────────────────────────────────────────
export function tourSchema(params: {
  name: string
  url: string
  description: string
  image: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image,
    provider: { "@type": "TravelAgency", name: "Sawla Tours", url: "https://www.sawlatours.com" },
    ...(params.duration ? { duration: params.duration } : {}),
  }
}
// ── FAQ Page schema ─────────────────────────────────────────────────────────
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}