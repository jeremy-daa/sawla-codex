/**
 * Compatibility facade for the canonical journey portfolio.
 *
 * V13 replaces the former 36-product catalogue with 25 canonical products.
 * New code should import from `data/canonicalJourneys.ts` directly.
 */
import {
  CANONICAL_JOURNEYS,
  getCanonicalJourney,
  getCanonicalJourneysByCategory,
  type CanonicalJourney,
} from './canonicalJourneys'

export type Itinerary = CanonicalJourney
export const ITINERARIES = CANONICAL_JOURNEYS

export function getItinerary(slug: string): CanonicalJourney | undefined {
  return getCanonicalJourney(slug)
}

export function getItinerariesByStyle(styleSlug: string): CanonicalJourney[] {
  return getCanonicalJourneysByCategory(styleSlug)
}
