'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import type { Destination } from '@/data/siteData'

export default function DestinationExplorer({ destinations }: { destinations: Destination[] }) {
  const [region, setRegion] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const regions = useMemo(() => ['all', ...Array.from(new Set(destinations.map((item) => item.region)))], [destinations])
  const filtered = useMemo(() => destinations.filter((item) =>
    (region === 'all' || item.region === region) && (difficulty === 'all' || item.difficulty === difficulty)
  ), [destinations, difficulty, region])

  return (
    <div>
      <div className="rounded-card border border-sand bg-white p-5 md:p-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <fieldset>
            <legend className="text-sm font-semibold text-charcoal">Region</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {regions.map((item) => (
                <button key={item} type="button" onClick={() => setRegion(item)} aria-pressed={region === item}
                  className={`hub-filter-button ${region === item ? 'hub-filter-button-active' : ''}`}>
                  {item === 'all' ? 'All regions' : item.replace(' Region', '')}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold text-charcoal">Travel effort</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {['all', 'Easy', 'Moderate', 'Challenging'].map((item) => (
                <button key={item} type="button" onClick={() => setDifficulty(item)} aria-pressed={difficulty === item}
                  className={`hub-filter-button ${difficulty === item ? 'hub-filter-button-active' : ''}`}>
                  {item === 'all' ? 'Any effort level' : item}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <p className="mt-6 text-sm text-warmgrey" aria-live="polite">Showing {filtered.length} of {destinations.length} destination guides.</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((dest) => (
          <article key={dest.slug} className="group overflow-hidden rounded-card border border-sand bg-white">
            <Link href={`/ethiopias-popular-destinations/${dest.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
                <PlaceholderImage filename={`dest-${dest.slug}-card.jpg`} width={720} height={450} category="destination" fill label={dest.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-gold">
                  <span>{dest.region.replace(' Region', '')}</span><span aria-hidden="true">·</span><span>{dest.difficulty}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-charcoal group-hover:text-gold">{dest.name}</h3>
                <p className="mt-2 text-sm leading-6 text-warmgrey">{dest.tagline}</p>
                <div className="mt-5 flex items-center justify-between border-t border-sand pt-4 text-xs text-warmgrey">
                  <span>{dest.duration}</span><span className="font-semibold text-gold">View guide →</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
