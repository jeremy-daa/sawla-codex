'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import type { Species } from '@/data/siteData'

export default function SpeciesExplorer({ species }: { species: Species[] }) {
  const [type, setType] = useState<'All' | 'Mammal' | 'Bird'>('All')
  const filtered = useMemo(() => species.filter((item) => type === 'All' || item.type === type), [species, type])
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter species">
        {(['All', 'Mammal', 'Bird'] as const).map((item) => (
          <button key={item} type="button" onClick={() => setType(item)} aria-pressed={type === item}
            className={`hub-filter-button ${type === item ? 'hub-filter-button-active' : ''}`}>
            {item === 'All' ? 'All species' : `${item}s`}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => (
          <article key={item.slug} className="group overflow-hidden rounded-card border border-sand bg-white">
            <Link href={`/ethiopia-wildlife/${item.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-gold-faint">
                <PlaceholderImage filename={`species-${item.slug}-card.jpg`} width={600} height={450} category="species" fill label={item.heroAlt} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{item.type} · {item.conservationStatus}</span>
                <h3 className="mt-3 font-display text-2xl text-charcoal group-hover:text-gold">{item.commonName}</h3>
                <p className="mt-1 text-sm italic text-warmgrey">{item.scientificName}</p>
                <p className="mt-3 text-sm leading-6 text-warmgrey">{item.tagline}</p>
                <p className="mt-4 border-t border-sand pt-4 text-xs text-warmgrey">Best-known location: {item.bestLocation}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
