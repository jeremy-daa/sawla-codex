'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import type { MomentsArticle } from '@/data/siteData'

export default function MomentsExplorer({ articles }: { articles: MomentsArticle[] }) {
  const [category, setCategory] = useState('all')
  const categories = ['all', ...Array.from(new Set(articles.map((article) => article.category)))]
  const filtered = useMemo(() => articles.filter((article) => category === 'all' || article.category === category), [articles, category])
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter Sawla Moments articles">
        {categories.map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}
            className={`hub-filter-button ${category === item ? 'hub-filter-button-active' : ''}`}>
            {item === 'all' ? 'All field notes' : item}
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm text-warmgrey" aria-live="polite">{filtered.length} field note{filtered.length === 1 ? '' : 's'}.</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <article key={article.slug} className="group overflow-hidden rounded-card border border-sand bg-white">
            <Link href={`/sawla-moments/${article.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
                <PlaceholderImage filename={article.heroImage} width={720} height={450} category="moments" fill label={article.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.1em] text-gold"><span>{article.category}</span><span className="text-warmgrey">{article.readingTime} min</span></div>
                <h3 className="mt-3 font-display text-2xl leading-tight text-charcoal group-hover:text-gold">{article.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-warmgrey">{article.teaser}</p>
                <span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold">Read field note <span className="ml-2" aria-hidden="true">→</span></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
