interface HubAnchorNavProps {
  label?: string
  items: { href: string; label: string }[]
}

export default function HubAnchorNav({ label = 'On this page', items }: HubAnchorNavProps) {
  return (
    <nav aria-label={label} className="sticky top-[72px] z-30 border-y border-sand bg-ivory/95 backdrop-blur">
      <div className="container-max flex items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="mr-2 hidden flex-none text-xs font-semibold uppercase tracking-[0.13em] text-warmgrey lg:block">{label}</span>
        {items.map((item) => (
          <a key={item.href} href={item.href} className="hub-anchor-link flex min-h-11 flex-none items-center rounded-full border border-sand bg-white px-4 text-sm font-medium text-charcoal hover:border-gold hover:text-gold">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
