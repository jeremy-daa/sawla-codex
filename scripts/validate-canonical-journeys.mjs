import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const journeys = JSON.parse(fs.readFileSync(path.join(root, 'data/journeys/portfolio.json'), 'utf8'))
const categories = JSON.parse(fs.readFileSync(path.join(root, 'data/journeys/categories.json'), 'utf8'))
const destinationSource = fs.readFileSync(path.join(root, 'data/siteData.ts'), 'utf8')
const destinationSection = destinationSource.slice(
  destinationSource.indexOf('export const DESTINATIONS'),
  destinationSource.indexOf('export interface TourStyle'),
)
const destinationSlugs = new Set([...destinationSection.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]))

const errors = []
const warnings = []
const fail = (message) => errors.push(message)
const warn = (message) => warnings.push(message)

if (journeys.length !== 25) fail(`Expected 25 canonical journeys; found ${journeys.length}`)
if (categories.length !== 9) fail(`Expected 9 categories; found ${categories.length}`)

const expectedDistribution = {
  'historic-and-cultural-tours': 4,
  'omo-valley-community-journeys': 3,
  'ethiopia-festival-tours': 4,
  'ethiopia-photography-tours': 3,
  'ethiopia-adventure-tours': 4,
  'ethiopia-birdwatching-tours': 2,
  'ethiopia-wildlife-tours': 3,
  'ethiopia-special-interest-tours': 1,
  'addis-ababa-day-tours': 1,
}

const categorySlugs = new Set(categories.map((category) => category.slug))
const slugs = new Set()
const routes = new Set()
const canonicalUrls = new Set()
const metaTitles = new Set()
const metaDescriptions = new Set()
let dayCount = 0
let highlightCount = 0
let faqCount = 0
let conditionalCount = 0
const distribution = {}

for (const journey of journeys) {
  const prefix = `${journey.category}/${journey.slug}`
  if (!categorySlugs.has(journey.category)) fail(`${prefix}: unknown category`)
  if (slugs.has(journey.slug)) fail(`${prefix}: duplicate product slug`)
  slugs.add(journey.slug)

  const route = `${journey.category}/${journey.slug}`
  if (routes.has(route)) fail(`${prefix}: duplicate canonical route`)
  routes.add(route)

  const expectedCanonical = `https://www.sawlatours.com/tours-by-experience/${route}`
  if (journey.seo.canonical !== expectedCanonical) {
    fail(`${prefix}: canonical mismatch (${journey.seo.canonical})`)
  }
  if (canonicalUrls.has(journey.seo.canonical)) fail(`${prefix}: duplicate canonical URL`)
  canonicalUrls.add(journey.seo.canonical)

  if (metaTitles.has(journey.seo.title)) fail(`${prefix}: duplicate SEO title`)
  metaTitles.add(journey.seo.title)
  if (metaDescriptions.has(journey.seo.description)) fail(`${prefix}: duplicate meta description`)
  metaDescriptions.add(journey.seo.description)

  if (journey.durationDays !== journey.days.length) {
    fail(`${prefix}: durationDays ${journey.durationDays} does not match ${journey.days.length} itinerary days`)
  }
  journey.days.forEach((day, index) => {
    if (day.day !== index + 1) fail(`${prefix}: itinerary day sequence breaks at ${day.day}`)
    if (!day.title || !day.description || !day.overnight) fail(`${prefix}: incomplete itinerary day ${day.day}`)
  })

  if (journey.highlights.length < 6) fail(`${prefix}: fewer than 6 highlights`)
  if (journey.faqs.length < 6) fail(`${prefix}: fewer than 6 FAQs`)
  if (journey.conditional.length < 3) fail(`${prefix}: fewer than 3 conditional-experience safeguards`)
  if (journey.overview.length < 2) fail(`${prefix}: overview requires at least 2 paragraphs`)
  if (journey.bestFor.length < 3 || journey.notIdealFor.length < 3) fail(`${prefix}: traveler-fit guidance incomplete`)

  for (const destination of journey.destinations) {
    if (!destinationSlugs.has(destination)) {
      warn(`${prefix}: destination '${destination}' is referenced but is not registered in the current siteData destination list`)
    }
  }

  const searchable = JSON.stringify(journey).toLowerCase()
  for (const phrase of ['primitive tribe', 'untouched tribe', 'human zoo', 'exotic tribe', 'tribes frozen in time']) {
    if (searchable.includes(phrase)) fail(`${prefix}: prohibited phrase '${phrase}'`)
  }

  dayCount += journey.days.length
  highlightCount += journey.highlights.length
  faqCount += journey.faqs.length
  conditionalCount += journey.conditional.length
  distribution[journey.category] = (distribution[journey.category] ?? 0) + 1
}

if (dayCount !== 256) fail(`Expected 256 itinerary days; found ${dayCount}`)
for (const [category, expected] of Object.entries(expectedDistribution)) {
  if ((distribution[category] ?? 0) !== expected) {
    fail(`${category}: expected ${expected} products; found ${distribution[category] ?? 0}`)
  }
}

console.log('Canonical Journey V13 validation')
console.log(`- Products: ${journeys.length}`)
console.log(`- Categories: ${categories.length}`)
console.log(`- Itinerary days: ${dayCount}`)
console.log(`- Highlights: ${highlightCount}`)
console.log(`- FAQs: ${faqCount}`)
console.log(`- Conditional safeguards: ${conditionalCount}`)
console.log(`- Unique routes: ${routes.size}`)

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`)
  warnings.forEach((message) => console.log(`- ${message}`))
}

if (errors.length) {
  console.error(`\nErrors (${errors.length}):`)
  errors.forEach((message) => console.error(`- ${message}`))
  process.exit(1)
}

console.log('\nValidation passed.')
