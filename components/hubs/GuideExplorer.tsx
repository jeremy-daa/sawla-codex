'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export interface GuideCardData {
  slug: string
  title: string
  description: string
  category: string
  priority: 'essential' | 'planning' | 'experience'
}

export default function GuideExplorer({ guides }: { guides: GuideCardData[] }) {
  const [category, setCategory] = useState('all')
  const categories = ['all', ...Array.from(new Set(guides.map((guide) => guide.category)))]
  const filtered = useMemo(() => guides.filter((guide) => category === 'all' || guide.category === category), [category, guides])

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter travel guides">
        {categories.map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}
            className={`hub-filter-button ${category === item ? 'hub-filter-button-active' : ''}`}>
            {item === 'all' ? 'All topics' : item}
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm text-warmgrey" aria-live="polite">{filtered.length} planning guide{filtered.length === 1 ? '' : 's'}.</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((guide) => (
          <article key={guide.slug} className="card-luxury flex h-full flex-col p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{guide.category}</span>
            <h3 className="mt-4 font-display text-2xl text-charcoal">{guide.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-warmgrey">{guide.description}</p>
            <Link href={`/ethiopia-travel-guide/${guide.slug}`} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">Read the guide <span className="ml-2" aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
    </div>
  )
}
