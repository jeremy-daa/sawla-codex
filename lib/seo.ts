import type { Metadata } from 'next'

export const SITE_URL = 'https://www.sawlatours.com'
export const SITE_NAME = 'Sawla Tours'
export const DEFAULT_OG_IMAGE = '/images/brand/sawla-hero-poster.jpg'

const TITLE_SUFFIX = ` | ${SITE_NAME}`
const MAX_TITLE = 60
const MAX_DESCRIPTION = 160

export type SeoIntent = 'commercial' | 'informational' | 'navigational' | 'local' | 'transactional'

type MetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
  image?: string
  publishedTime?: string
  modifiedTime?: string
  intent?: SeoIntent
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function trimAtWord(value: string, limit: number): string {
  const clean = normalizeWhitespace(value)
  if (clean.length <= limit) return clean
  const sliced = clean.slice(0, limit - 1)
  const lastSpace = sliced.lastIndexOf(' ')
  return `${sliced.slice(0, lastSpace > 40 ? lastSpace : limit - 1).trim()}…`
}

export function seoTitle(title: string): string {
  const clean = normalizeWhitespace(title.replace(/\s+\|\s+Sawla Tours$/i, ''))
  const rawLimit = MAX_TITLE - TITLE_SUFFIX.length
  const fitted = clean.length > rawLimit ? trimAtWord(clean, rawLimit) : clean
  return `${fitted}${TITLE_SUFFIX}`
}

export function seoDescription(description: string): string {
  return trimAtWord(description, MAX_DESCRIPTION)
}

export function canonicalUrl(path: string): string {
  return new URL(path || '/', SITE_URL).toString()
}

export function buildMetadata({ title, description, path, keywords = [], type = 'website', image = DEFAULT_OG_IMAGE, publishedTime, modifiedTime }: MetadataInput): Metadata {
  const absoluteTitle = seoTitle(title)
  const cleanDescription = seoDescription(description)
  const url = canonicalUrl(path)
  const keywordList = Array.from(new Set(keywords.map(k => normalizeWhitespace(k)).filter(Boolean))).slice(0, 9)

  return {
    title: { absolute: absoluteTitle },
    description: cleanDescription,
    alternates: { canonical: path },
    keywords: keywordList,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: absoluteTitle,
      description: cleanDescription,
      images: [{ url: image, width: 1200, height: 630, alt: absoluteTitle }],
      ...(type === 'article' && publishedTime ? { publishedTime, modifiedTime: modifiedTime || publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle,
      description: cleanDescription,
      images: [image],
    },
  }
}

export function destinationKeywords(name: string, region: string): string[] {
  return [
    `${name} Ethiopia`,
    `${name} tours`,
    `${name} travel guide`,
    `${region} Ethiopia travel`,
    'Ethiopia private tours',
    'bespoke Ethiopia tours',
    'Sawla Tours',
  ]
}

export function tourKeywords(title: string, style: string): string[] {
  return [
    title,
    'Ethiopia private tour',
    'Ethiopia tailor made tour',
    `${style.replace(/-/g, ' ')} Ethiopia`,
    'Ethiopia itinerary',
    'Ethiopia luxury travel',
    'Sawla Tours',
  ]
}

export function guideKeywords(title: string, category: string): string[] {
  return [
    title,
    'Ethiopia travel guide',
    `${category} Ethiopia`,
    'Ethiopia travel planning',
    'Ethiopia travel tips',
    'Sawla Tours',
  ]
}

export function speciesKeywords(name: string, latin: string | undefined, status: string): string[] {
  return [
    `${name} Ethiopia`,
    latin || '',
    'Ethiopia wildlife guide',
    'Ethiopia endemic species',
    status,
    'Ethiopia wildlife tours',
    'Sawla Tours',
  ].filter(Boolean)
}
