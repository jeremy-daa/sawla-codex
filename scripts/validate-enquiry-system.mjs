import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const requiredFiles = [
  'app/enquire/page.tsx',
  'app/enquire/thank-you/page.tsx',
  'app/api/enquire/route.ts',
  'components/enquiry/EnquiryForm.tsx',
  'components/enquiry/EnquiryConversionEvent.tsx',
  'data/enquiryData.ts',
  'lib/enquiry.ts',
  '.env.example',
]

const failures = []
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing ${file}`)
}

const route = fs.readFileSync(path.join(root, 'app/api/enquire/route.ts'), 'utf8')
const form = fs.readFileSync(path.join(root, 'components/enquiry/EnquiryForm.tsx'), 'utf8')
const library = fs.readFileSync(path.join(root, 'lib/enquiry.ts'), 'utf8')
const config = fs.readFileSync(path.join(root, 'next.config.js'), 'utf8')
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))

for (const marker of ['validateEnquiry', 'Idempotency-Key', 'RESEND_API_KEY', 'ENQUIRY_DELIVERY_MODE', 'Retry-After']) {
  if (!route.includes(marker)) failures.push(`API route missing ${marker}`)
}
for (const marker of ['privacyAccepted', 'formStartedAt', 'buildTeamEmail', 'buildGuestEmail']) {
  if (!library.includes(marker)) failures.push(`Enquiry library missing ${marker}`)
}
for (const marker of ['fetch(\'/api/enquire\'', 'router.push(`/enquire/thank-you', 'formStartedAt', 'privacyAccepted', 'journeySlug']) {
  if (!form.includes(marker)) failures.push(`Enquiry form missing ${marker}`)
}
if (!config.includes('source: "/contact-us", destination: "/enquire"')) failures.push('Missing /contact-us redirect')
if (!packageJson.scripts?.['validate:enquiry']) failures.push('Missing validate:enquiry package script')
if (route.includes('Wire your email provider here')) failures.push('Placeholder email-provider comment still present')

if (failures.length) {
  console.error('Enquiry system validation failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Enquiry system validation passed.')
