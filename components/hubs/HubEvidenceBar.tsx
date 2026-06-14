interface HubEvidenceBarProps {
  items: { title: string; body: string }[]
  dark?: boolean
}

export default function HubEvidenceBar({ items, dark = false }: HubEvidenceBarProps) {
  return (
    <section className={`${dark ? 'bg-charcoal text-ivory' : 'bg-white text-charcoal'} border-b ${dark ? 'border-white/10' : 'border-sand'}`} aria-label="Key information">
      <div className="container-max grid grid-cols-2 gap-5 py-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className={`border-l pl-4 ${dark ? 'border-gold/45' : 'border-gold/40'}`}>
            <div className="text-sm font-semibold">{item.title}</div>
            <div className={`mt-1 text-xs leading-5 ${dark ? 'text-ivory/60' : 'text-warmgrey'}`}>{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
