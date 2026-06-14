import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const scanRoots = ['app', 'components', 'content', 'data', 'public', 'seo']
const forbidden = [/Sawla Films/i, /sawla-films/i, /ethiopiafilmfixer\.com/i]
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.txt', '.csv', '.xml', '.html'])
const violations = []

function extension(path) {
  const index = path.lastIndexOf('.')
  return index === -1 ? '' : path.slice(index)
}

function walk(path) {
  for (const name of readdirSync(path)) {
    const full = join(path, name)
    const info = statSync(full)
    if (info.isDirectory()) {
      walk(full)
      continue
    }
    if (!textExtensions.has(extension(full))) continue
    const text = readFileSync(full, 'utf8')
    for (const pattern of forbidden) {
      if (pattern.test(text)) {
        violations.push(`${relative(root, full)} contains ${pattern}`)
      }
    }
  }
}

for (const directory of scanRoots) {
  const path = join(root, directory)
  if (existsSync(path)) walk(path)
}

if (existsSync(join(root, 'app', 'sawla-films'))) {
  violations.push('app/sawla-films must not exist')
}

const nextConfig = readFileSync(join(root, 'next.config.js'), 'utf8')
const requiredRedirects = [
  '{ source: "/sawla-films", destination: "https://www.ethiopiafilmfixer.com", permanent: true }',
  '{ source: "/ethiopian-tour-themes/filming-ethiopia-fixer-production-logistics", destination: "https://www.ethiopiafilmfixer.com", permanent: true }',
]
for (const redirect of requiredRedirects) {
  if (!nextConfig.includes(redirect)) violations.push(`missing required legacy redirect: ${redirect}`)
}

const domainCount = (nextConfig.match(/ethiopiafilmfixer\.com/g) || []).length
if (domainCount !== 2) {
  violations.push(`next.config.js must contain exactly 2 technical migration references; found ${domainCount}`)
}

if (violations.length) {
  console.error('Brand-separation validation failed:')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log('Brand-separation validation passed')
console.log('- No visible or indexable Sawla Films references in active Sawla Tours content')
console.log('- No Sawla Films route or sitemap entry')
console.log('- Exactly two permanent legacy redirects retained')
