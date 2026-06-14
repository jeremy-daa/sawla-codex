import portfolioData from './journeys/portfolio.json'
import categoryData from './journeys/categories.json'

export type JourneyStatusType =
  | 'available'
  | 'conditional'
  | 'fixed-season'
  | 'highly-conditional'
  | 'concept'

export interface JourneyDay {
  day: number
  title: string
  description: string
  overnight: string
}

export interface JourneyExtension {
  title: string
  duration: string
  description: string
  href: string
}

export interface JourneyFaq {
  question: string
  answer: string
}

export interface JourneySeo {
  title: string
  description: string
  primaryKeyword: string
  secondaryKeywords: string[]
  canonical: string
}

export interface JourneyImage {
  hero: string
  heroAlt: string
  card: string
  cardAlt: string
}

export interface CanonicalJourney {
  slug: string
  category: string
  title: string
  durationDays: number
  duration: string
  tagline: string
  route: string
  statusType: JourneyStatusType
  operatingStatus: string
  statusSummary: string
  difficulty: string
  bestMonths: string
  overview: string[]
  why: string[]
  highlights: string[]
  bestFor: string[]
  notIdealFor: string[]
  days: JourneyDay[]
  practical: string[]
  conditional: string[]
  customization: string[]
  extensions: [string, string, string, string][]
  faqs: JourneyFaq[]
  destinations: string[]
  inclusions: string[]
  exclusions: string[]
  responsibleTravel: string[]
  seo: JourneySeo
  reviewedOn: string
  reviewCadence: string
  image: JourneyImage
}

export interface JourneyCategory {
  slug: string
  name: string
  shortName: string
  description: string
  hubSlug: string
}

export const CANONICAL_JOURNEYS = portfolioData as CanonicalJourney[]
export const JOURNEY_CATEGORIES = categoryData as JourneyCategory[]

export function getCanonicalJourney(slug: string): CanonicalJourney | undefined {
  return CANONICAL_JOURNEYS.find((journey) => journey.slug === slug)
}

export function getCanonicalJourneyByRoute(category: string, slug: string): CanonicalJourney | undefined {
  return CANONICAL_JOURNEYS.find(
    (journey) => journey.category === category && journey.slug === slug,
  )
}

export function getCanonicalJourneysByCategory(category: string): CanonicalJourney[] {
  return CANONICAL_JOURNEYS.filter((journey) => journey.category === category)
}

export function getCanonicalJourneysByDestination(destinationSlug: string): CanonicalJourney[] {
  return CANONICAL_JOURNEYS.filter((journey) => journey.destinations.includes(destinationSlug))
}

export function getJourneyCategory(slug: string): JourneyCategory | undefined {
  return JOURNEY_CATEGORIES.find((category) => category.slug === slug)
}

export function getRelatedCanonicalJourneys(
  journey: CanonicalJourney,
  limit = 3,
): CanonicalJourney[] {
  const sameCategory = CANONICAL_JOURNEYS.filter(
    (candidate) => candidate.slug !== journey.slug && candidate.category === journey.category,
  )
  const sharedDestinations = CANONICAL_JOURNEYS.filter(
    (candidate) =>
      candidate.slug !== journey.slug &&
      candidate.category !== journey.category &&
      candidate.destinations.some((destination) => journey.destinations.includes(destination)),
  )

  return [...sameCategory, ...sharedDestinations]
    .filter((candidate, index, array) => array.findIndex((item) => item.slug === candidate.slug) === index)
    .slice(0, limit)
}

export const CANONICAL_JOURNEY_COUNT = CANONICAL_JOURNEYS.length
