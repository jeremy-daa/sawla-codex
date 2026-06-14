interface HubSectionHeaderProps {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export default function HubSectionHeader({ eyebrow, title, intro, align = 'left', theme = 'light' }: HubSectionHeaderProps) {
  const center = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = theme === 'dark' ? 'text-ivory' : 'text-charcoal'
  const bodyColor = theme === 'dark' ? 'text-ivory/68' : 'text-warmgrey'
  return (
    <header className={`max-w-3xl ${center}`}>
      <span className="label-eyebrow">{eyebrow}</span>
      <h2 className={`heading-display text-display-lg ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-5 text-[1.05rem] leading-8 ${bodyColor}`}>{intro}</p>}
    </header>
  )
}
