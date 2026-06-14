import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const fail = (message) => {
  console.error(`✖ ${message}`)
  process.exitCode = 1
}
const pass = (message) => console.log(`✔ ${message}`)

const stories = read('data/stories.ts')
const hub = read('app/testimonials/page.tsx')
const detail = read('app/testimonials/[slug]/page.tsx')
const sitemap = read('app/sitemap.ts')
const publicFiles = [
  'app/page.tsx',
  'app/testimonials/page.tsx',
  'app/testimonials/[slug]/page.tsx',
  'app/ethiopias-popular-destinations/[slug]/page.tsx',
  'app/tours-by-experience/[style]/[slug]/page.tsx',
  'components/stories/StoryCard.tsx',
  'components/stories/VerifiedReviewCard.tsx',
  'components/stories/RelatedStoryStrip.tsx',
].map((file) => [file, read(file)])

if (!fs.existsSync(path.join(root, 'data/internal/testimonialDrafts.ts'))) {
  fail('Legacy testimonial drafts are not isolated in data/internal/testimonialDrafts.ts')
} else {
  pass('Legacy testimonial drafts are isolated from public content')
}

for (const [file, content] of publicFiles) {
  if (/testimonialDrafts|TESTIMONIALS/.test(content)) {
    fail(`${file} imports or references the legacy testimonial collection`)
  }
}
if (!process.exitCode) pass('Public pages do not import the legacy testimonial collection')

const publicReviewsBlock = stories.match(/export const PUBLIC_REVIEWS:[\s\S]*?\n\]\n\nexport const JOURNEY_CASE_STUDIES/)
if (!publicReviewsBlock) {
  fail('PUBLIC_REVIEWS block could not be found')
} else {
  const block = publicReviewsBlock[0]
  if (/pending-evidence|draft-only/.test(block)) fail('A non-verified review status appears in PUBLIC_REVIEWS')
  if (!/sourceUrl:\s*'https:\/\//.test(block)) fail('Published review is missing an external source URL')
  if (!/verifiedOn:/.test(block)) fail('Published review is missing a verification date')
  if (!process.exitCode) pass('Published reviews contain verified status, source and review date')
}

const reviewExcerpt = stories.match(/excerpt:\s*'([^']+)'/)
if (!reviewExcerpt) {
  fail('Published review excerpt is missing')
} else {
  const wordCount = reviewExcerpt[1].replace(/[“”"']/g, '').trim().split(/\s+/).filter(Boolean).length
  if (wordCount > 25) fail(`Published external review excerpt has ${wordCount} words; maximum is 25`)
  else pass(`External review excerpt is copyright-safe at ${wordCount} words`)
}

const caseSlugs = [...stories.matchAll(/\n\s{4}slug:\s*'([^']+)'/g)].map((match) => match[1])
const uniqueCaseSlugs = new Set(caseSlugs)
if (caseSlugs.length < 6) fail(`Expected at least 6 journey case studies, found ${caseSlugs.length}`)
else pass(`${caseSlugs.length} journey case studies are present`)
if (uniqueCaseSlugs.size !== caseSlugs.length) fail('Duplicate journey case-study slug found')
else pass('Journey case-study slugs are unique')

const canonicals = [...stories.matchAll(/canonical:\s*'([^']+\/testimonials\/[^']+)'/g)].map((match) => match[1])
if (new Set(canonicals).size !== canonicals.length) fail('Duplicate case-study canonical URL found')
else pass('Case-study canonical URLs are unique')

if (!/transparencyNote:/.test(stories)) fail('Case studies are missing transparency notes')
else pass('Case studies include explicit transparency notes')

if (/['"]@type['"]:\s*['"](?:Review|AggregateRating)['"]/.test(hub + detail)) {
  fail('Self-serving Review or AggregateRating schema is present on Sawla-owned story pages')
} else {
  pass('No self-serving Review or AggregateRating schema is emitted')
}

if (!/['"]@type['"]:\s*['"]Article['"]/.test(detail)) fail('Case-study detail pages are missing Article schema')
else pass('Case-study detail pages use Article schema')

if (!/JOURNEY_CASE_STUDIES/.test(sitemap) || !/caseStudyPages/.test(sitemap)) fail('Case studies are not included in the sitemap')
else pass('Case studies are included in the sitemap')

if (!/No evidence, no testimonial/.test(hub)) fail('The publication standard is not visible on the hub page')
else pass('The public evidence standard is visible')

if (process.exitCode) {
  console.error('\nTraveller-stories validation failed.')
  process.exit(1)
}

console.log('\nTraveller-stories validation passed.')
