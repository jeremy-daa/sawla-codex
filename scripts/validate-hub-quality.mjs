import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const failures = []
const assert = (condition, message) => { if (!condition) failures.push(message) }

const hubs = [
  { file: 'app/page.tsx', route: '/', hero: 'HeroSection', schema: 'homepageSchema', maxSections: 9 },
  { file: 'app/tours-by-experience/page.tsx', route: '/tours-by-experience', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/ethiopias-popular-destinations/page.tsx', route: '/ethiopias-popular-destinations', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/ethiopia-travel-guide/page.tsx', route: '/ethiopia-travel-guide', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/ethiopia-wildlife/endemic-species/page.tsx', route: '/ethiopia-wildlife/endemic-species', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/testimonials/page.tsx', route: '/testimonials', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/sawla-moments/page.tsx', route: '/sawla-moments', hero: 'HubHero', schema: 'collectionPageSchema', maxSections: 9 },
  { file: 'app/about-us/page.tsx', route: '/about-us', hero: 'HubHero', schema: "'@type': 'AboutPage'", maxSections: 9 },
  { file: 'app/trip-finder/page.tsx', route: '/trip-finder', hero: 'HubHero', schema: 'breadcrumbSchema', maxSections: 8 },
]

const titles = []
for (const hub of hubs) {
  const source = read(hub.file)
  assert(source.includes(`canonical: 'https://www.sawlatours.com${hub.route === '/' ? '' : hub.route}'`), `${hub.route}: explicit self-canonical missing`)
  assert(source.includes(hub.hero), `${hub.route}: expected ${hub.hero} missing`)
  assert(source.includes(hub.schema), `${hub.route}: page-appropriate structured data missing`)
  assert(source.includes('description:'), `${hub.route}: metadata description missing`)
  const title = source.match(/export const metadata:[\s\S]*?title:\s*'([^']+)'/)?.[1]
  assert(Boolean(title), `${hub.route}: metadata title missing`)
  if (title) titles.push({ route: hub.route, title })
  const sections = (source.match(/<section\b/g) || []).length
  assert(sections <= hub.maxSections, `${hub.route}: ${sections} sections exceeds focused hub limit of ${hub.maxSections}`)
  if (hub.route !== '/') assert(source.includes('<HubCTA'), `${hub.route}: decision-stage CTA missing`)
}

assert(new Set(titles.map(item => item.title)).size === titles.length, 'Hub metadata titles must be unique')
for (const { route, title } of titles) {
  assert(title.length >= 35 && title.length <= 68, `${route}: title length ${title.length} should remain 35–68 characters`)
  assert(!title.includes('| Sawla Tours | Sawla Tours'), `${route}: duplicate brand suffix`)
}

const home = read('app/page.tsx')
assert(home.includes('CANONICAL_JOURNEY_COUNT'), 'Homepage must use authoritative journey count')
assert(home.includes('DESTINATIONS.length'), 'Homepage must use authoritative destination count')
assert(home.includes('VERIFIED_PUBLIC_REVIEWS'), 'Homepage must distinguish verified evidence')
assert(home.includes('FOUNDER_PROFILE'), 'Homepage must make named first-party expertise tangible')
assert(!home.includes('Canonical Journeys'), 'Homepage must not expose internal portfolio terminology')

const trustProfile = read('data/trustArchitecture.ts')
assert(trustProfile.includes("name: 'Meti Tadele'"), 'Founder profile must identify Meti Tadele')
assert(trustProfile.includes("role: 'Founder & Lead Journey Designer'"), 'Founder role must remain Founder & Lead Journey Designer')

const schema = read('lib/schema.ts')
const homepageBlock = schema.slice(schema.indexOf('export const homepageSchema'), schema.indexOf('export function articleSchema'))
assert(!homepageBlock.includes('SearchAction'), 'Homepage schema must not declare a non-existent site search')
assert(!homepageBlock.includes('FAQPage'), 'Homepage schema must not include invisible FAQ markup')
assert(homepageBlock.includes("founder: { '@id': 'https://www.sawlatours.com/about-us/#founder' }"), 'Homepage organization schema must connect to the founder entity')
assert(schema.includes('export function collectionPageSchema'), 'Reusable CollectionPage schema helper missing')

const nav = read('data/siteData.ts').slice(0, read('data/siteData.ts').indexOf('// ─── DESTINATIONS'))
assert(nav.includes("label: 'Journeys'"), 'Primary navigation must use traveler-facing “Journeys” label')
assert(nav.includes("label: 'Travel Guide'"), 'Primary navigation must use clear “Travel Guide” label')
assert(!nav.includes("label: 'Tour Styles'"), 'Retired “Tour Styles” label remains in primary navigation')
const aboutChildren = nav.slice(nav.indexOf("label: 'About'"), nav.indexOf("{ label: 'Sawla Moments'"))
const aboutLinkCount = (aboutChildren.match(/href:/g) || []).length - 1
assert(aboutLinkCount <= 8, `About submenu has ${aboutLinkCount} entries; premium navigation target is 8 or fewer`)

const filters = [
  ['components/hubs/JourneyStyleFinder.tsx', 'aria-pressed'],
  ['components/hubs/DestinationExplorer.tsx', 'aria-pressed'],
  ['components/hubs/GuideExplorer.tsx', 'aria-pressed'],
  ['components/hubs/SpeciesExplorer.tsx', 'aria-pressed'],
  ['components/hubs/MomentsExplorer.tsx', 'aria-pressed'],
]
for (const [file, marker] of filters) assert(read(file).includes(marker), `${file}: accessible filter state missing`)

const css = read('app/globals.css')
assert(css.includes('.hub-filter-button'), 'Hub filter style system missing')
assert(/\.hub-filter-button[\s\S]*?min-height:\s*44px/.test(css), 'Hub filter controls must meet the 44px target-size baseline')
assert(/\.hub-anchor-link[\s\S]*?min-height:\s*44px/.test(css), 'Hub anchor links must meet the 44px target-size baseline')

const publicFiles = []
for (const dir of ['app', 'components', 'public']) {
  const walk = current => {
    for (const entry of fs.readdirSync(path.join(root, current), { withFileTypes: true })) {
      const relative = path.join(current, entry.name)
      if (entry.isDirectory()) walk(relative)
      else if (/\.(tsx?|jsx?|txt)$/.test(entry.name)) publicFiles.push(relative)
    }
  }
  walk(dir)
}
const publicText = publicFiles.map(read).join('\n')
for (const phrase of [/canonical journeys?/i, /canonical products?/i, /All 16 Destinations/i, /Browse All Tour Styles/i]) {
  assert(!phrase.test(publicText), `Public technical/stale phrase remains: ${phrase}`)
}

if (failures.length) {
  console.error(`Hub-quality validation failed (${failures.length}):`)
  failures.forEach(failure => console.error(`- ${failure}`))
  process.exit(1)
}

console.log('Hub-quality validation passed')
console.log(`- major hubs checked: ${hubs.length}`)
console.log('- focused section limits, unique metadata and self-canonicals: passed')
console.log('- page-specific schema and evidence-led homepage: passed')
console.log('- premium navigation and traveler-facing language: passed')
console.log('- accessible filters and 44px interaction targets: passed')
