'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export interface JourneyStyleOption {
  slug: string
  name: string
  tagline: string
  description: string
  count: number
  interests: string[]
  minDays: number
  maxDays: number
  pace: 'easy' | 'moderate' | 'active' | 'mixed'
}

const interests = [
  ['all', 'All interests'],
  ['heritage', 'History & culture'],
  ['community', 'Community travel'],
  ['wildlife', 'Wildlife'],
  ['birding', 'Birding'],
  ['photography', 'Photography'],
  ['active', 'Trekking & remote'],
  ['faith', 'Festivals & faith'],
  ['specialist', 'Coffee & specialist'],
] as const

export default function JourneyStyleFinder({ styles }: { styles: JourneyStyleOption[] }) {
  const [interest, setInterest] = useState('all')
  const [days, setDays] = useState('all')

  const matches = useMemo(() => styles.filter((style) => {
    const interestMatch = interest === 'all' || style.interests.includes(interest)
    const dayMatch = days === 'all'
      || (days === 'short' && style.minDays <= 5)
      || (days === 'week' && style.minDays <= 8 && style.maxDays >= 6)
      || (days === 'two-weeks' && style.maxDays >= 10)
    return interestMatch && dayMatch
  }), [days, interest, styles])

  return (
    <div className="rounded-card border border-sand bg-white p-5 md:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <fieldset>
          <legend className="text-sm font-semibold text-charcoal">What matters most?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map(([value, label]) => (
              <button key={value} type="button" onClick={() => setInterest(value)} aria-pressed={interest === value}
                className={`hub-filter-button ${interest === value ? 'hub-filter-button-active' : ''}`}>
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold text-charcoal">How much time do you have?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ['all', 'Any duration'],
              ['short', 'Up to 5 days'],
              ['week', 'About a week'],
              ['two-weeks', '10 days or more'],
            ].map(([value, label]) => (
              <button key={value} type="button" onClick={() => setDays(value)} aria-pressed={days === value}
                className={`hub-filter-button ${days === value ? 'hub-filter-button-active' : ''}`}>
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite" className="mt-7 text-sm text-warmgrey">{matches.length} journey style{matches.length === 1 ? '' : 's'} match your choices.</div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {matches.map((style) => (
          <article key={style.slug} className="card-luxury p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{style.count} journey idea{style.count === 1 ? '' : 's'}</span>
              <span className="text-xs text-warmgrey">{style.minDays}–{style.maxDays} days</span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-charcoal">{style.name}</h3>
            <p className="mt-2 text-sm font-medium text-coffee">{style.tagline}</p>
            <p className="mt-4 line-clamp-4 text-sm leading-6 text-warmgrey">{style.description}</p>
            <Link href={`/tours-by-experience/${style.slug}`} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">
              Explore this style <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
