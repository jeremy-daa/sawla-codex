import type { ReactNode } from 'react'
export default function SectionHeader({ eyebrow, title, intro, inverse = false }: { eyebrow: string; title: ReactNode; intro?: string; inverse?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
      <div>
        <p className="label-eyebrow">{eyebrow}</p>
        <h2 className={`mt-5 font-display text-display-lg font-light tracking-tight ${inverse ? 'text-ivory' : 'text-volcanic'}`}>{title}</h2>
      </div>
      {intro && <p className={`max-w-prose font-body text-body-md ${inverse ? 'text-ivory/60' : 'text-warmgrey'}`}>{intro}</p>}
    </div>
  )
}
