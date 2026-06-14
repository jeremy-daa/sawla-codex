import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const failures = []
const assert = (condition, message) => { if (!condition) failures.push(message) }

const siteData = read('data/siteData.ts')
const destinationSection = siteData.slice(siteData.indexOf('export const DESTINATIONS'), siteData.indexOf('export interface TourStyle'))
const destinationSlugs = [...destinationSection.matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1])
const destinationContent = read('data/destinationContent.ts')
const destinationContentSlugs = [...destinationContent.matchAll(/^\s{2}(?:"([^"]+)"|([a-z0-9-]+)):\s*\{/gm)].map(match => match[1] || match[2])
assert(destinationSlugs.length === 18, `Expected 18 destination records, found ${destinationSlugs.length}`)
assert(new Set(destinationSlugs).size === 18, 'Destination slugs must be unique')
assert(destinationSlugs.every(slug => destinationContentSlugs.includes(slug)), 'Every destination registry record must have matching editorial content')
assert(destinationContentSlugs.every(slug => destinationSlugs.includes(slug)), 'Destination editorial content must not contain an unregistered route')

const layout = read('app/layout.tsx')
assert(!layout.includes('homepageSchema'), 'Homepage schema must not be injected from the root layout')
assert(!layout.includes('SchemaScript'), 'Root layout must not inject page-specific structured data')
assert(!/alternates\s*:\s*\{\s*canonical/.test(layout), 'Root layout must not define a homepage canonical inherited by child pages')
assert(layout.includes('template: "%s"'), 'Root metadata title template must not append a duplicate brand suffix')

const home = read('app/page.tsx')
assert(home.includes('<SchemaScript schema={homepageSchema}'), 'Homepage must own its homepage schema')
assert(home.includes('String(DESTINATIONS.length)'), 'Homepage destination count must be generated from the authoritative registry')
assert(!home.includes('36 itineraries'), 'Homepage must not expose the retired 36-itinerary catalogue count')

const sitemap = read('app/sitemap.ts')
assert(sitemap.includes('FIELD_GUIDE_CONTENT'), 'Sitemap must include Travel Guide detail records')
assert(sitemap.includes('SPECIES_CONTENT'), 'Sitemap must include species detail records')
assert(sitemap.includes('2026-06-14'), 'Sitemap must use the V17 editorial review date')

const wildlifeHub = read('app/ethiopia-wildlife/endemic-species/page.tsx')
assert(wildlifeHub.includes("canonical: 'https://www.sawlatours.com/ethiopia-wildlife/endemic-species'"), 'Wildlife hub must have a self-referencing canonical')

const moments = read('app/sawla-moments/page.tsx')
assert(!/newsletter/i.test(moments), 'Non-functional newsletter UI must not remain in Sawla Moments')
assert(!moments.includes('Connect this form'), 'Developer-only newsletter instructions must not be public')

const config = read('next.config.js')
assert(config.includes('Content-Security-Policy'), 'Content Security Policy header is required')
assert(config.includes("frame-ancestors 'none'"), 'CSP must block framing')
assert(config.includes("object-src 'none'"), 'CSP must block plugins/objects')
assert(!config.includes('X-XSS-Protection'), 'Obsolete X-XSS-Protection header must not be used')
const redirectSources = [...config.matchAll(/source:\s*"([^"]+)"/g)].map(match => match[1])
const duplicates = redirectSources.filter((source, index) => redirectSources.indexOf(source) !== index)
assert(duplicates.length === 0, `Redirect sources must be unique: ${[...new Set(duplicates)].join(', ')}`)

const enquiryRoute = read('app/api/enquire/route.ts')
assert(enquiryRoute.includes('checkEnquiryRateLimit'), 'Enquiry API must use distributed rate limiting')
assert(enquiryRoute.includes('persistEnquiry'), 'Enquiry API must preserve encrypted recovery records')
assert(!enquiryRoute.includes('new Map'), 'Enquiry route must not use process-local production rate limiting')
assert(enquiryRoute.includes("deliveryMode === 'log' && process.env.NODE_ENV === 'production'"), 'Production must not accept log-only enquiry delivery')
const limiter = read('lib/distributedRateLimit.ts')
assert(limiter.includes('UPSTASH_REDIS_REST_URL'), 'Distributed rate limiter must use a managed shared store')
assert(limiter.includes("process.env.NODE_ENV === 'production'"), 'Rate limiter must fail closed in production when unconfigured')
const store = read('lib/enquiryStore.ts')
assert(store.includes('aes-256-gcm'), 'Enquiry recovery records must be encrypted')
assert(store.includes('ENQUIRY_RETENTION_DAYS'), 'Enquiry recovery storage must have a bounded retention setting')

const header = read('components/layout/Header.tsx')
for (const token of ['aria-expanded', 'aria-controls', 'aria-modal="true"', 'event.key === "Escape"', 'inert = true', 'previouslyFocused']) {
  assert(header.includes(token), `Header accessibility implementation missing: ${token}`)
}

const publicFiles = []
for (const dir of ['app', 'components', 'data', 'public', 'seo']) {
  const walk = current => {
    for (const entry of fs.readdirSync(path.join(root, current), { withFileTypes: true })) {
      const relative = path.join(current, entry.name)
      if (entry.isDirectory()) {
        if (relative === 'data/internal') continue
        walk(relative)
      } else if (/\.(tsx?|jsx?|json|txt)$/.test(entry.name)) publicFiles.push(relative)
    }
  }
  walk(dir)
}
const publicText = publicFiles.map(file => `${file}\n${read(file)}`).join('\n')
const banned = [
  /All 16 Destinations/i,
  /\b16 destinations\b/i,
  /\b36 itineraries\b/i,
  /Updated 2025/i,
  /Most of Ethiopia's tourism areas[^\n]+safe and regularly visited/i,
  /never had a client miss/i,
  /all vehicles are Toyota/i,
  /persistent lava lake/i,
  /responds within 24 hours/i,
]
for (const pattern of banned) assert(!pattern.test(publicText), `Unsafe or stale public phrase remains: ${pattern}`)

const userFacingFiles = publicFiles.filter(file => file.startsWith('app/') || file.startsWith('components/') || file === 'public/llms.txt')
const userFacingText = userFacingFiles.map(read).join('\n')
assert(!/canonical journeys?/i.test(userFacingText), 'Internal “canonical journey” terminology must not appear in public UI or AI guidance')
assert(!/canonical products?/i.test(userFacingText), 'Internal “canonical product” terminology must not appear in public UI or AI guidance')

const oldDirectLinks = [
  '/contact', '/contact-us', '/tours', '/destinations', '/blog',
  '/tours-by-experience/tribal-cultural-ethiopia-tours',
  '/tours-by-experience/historic-cultural-ethiopia-tours',
  '/tours-by-experience/omo-valley-cultural-tours',
  '/ethiopias-popular-destinations/addis-ababa',
  '/ethiopias-popular-destinations/bahir-dar-lake-tana',
  '/ethiopias-popular-destinations/awash-national-park',
]
const linkFiles = publicFiles.filter(file => file.startsWith('app/') || file.startsWith('components/') || file.startsWith('data/'))
for (const file of linkFiles) {
  const text = read(file)
  for (const oldPath of oldDirectLinks) {
    const exact = new RegExp(`(?:href|url|canonical)\\s*[:=]\\s*[{'\\"\\x60]*${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:['\\"\\x60}/?])`)
    assert(!exact.test(text), `Internal source still links to redirecting URL ${oldPath} in ${file}`)
  }
}

if (failures.length) {
  console.error(`Production-readiness validation failed (${failures.length}):`)
  failures.forEach(failure => console.error(`- ${failure}`))
  process.exit(1)
}

console.log('Production-readiness validation passed')
console.log(`- destinations: ${destinationSlugs.length}`)
console.log('- Travel Guide and species sitemap generation: present')
console.log('- metadata/schema isolation: passed')
console.log('- public terminology and stale-claim guardrails: passed')
console.log('- accessibility implementation guardrails: passed')
console.log('- CSP, distributed rate limiting and encrypted enquiry recovery: passed')
