import Link from 'next/link'
import Arrow from './Arrow'

export function GradientMedia({ label, tone = 'gold' }: { label: string; tone?: 'gold' | 'dark' | 'green' | 'ember' | 'blue' }) {
  const tones = {
    gold: 'from-[#5f4219] via-[#2a2724] to-[#0e0c09]',
    dark: 'from-[#11100e] via-[#2a2724] to-[#050504]',
    green: 'from-[#223329] via-[#2a2724] to-[#0e130f]',
    ember: 'from-[#5a2412] via-[#2a2724] to-[#0d0805]',
    blue: 'from-[#18242f] via-[#2a2724] to-[#0a0d10]',
  }
  return (
    <div className={`relative min-h-[18rem] overflow-hidden bg-gradient-to-br ${tones[tone]}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,148,26,0.25),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(248,246,241,0.08),transparent_30%)]" />
      <div className="absolute inset-0 film-grain opacity-20" />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
        <span className="font-display text-3xl italic text-ivory/50">{label}</span>
        <span className="h-px flex-1 bg-gold/40" />
      </div>
    </div>
  )
}

export function PremiumLinkCard({ href, eyebrow, title, text, meta, tone = 'gold' }: { href: string; eyebrow: string; title: string; text: string; meta?: string; tone?: 'gold' | 'dark' | 'green' | 'ember' | 'blue' }) {
  return (
    <Link href={href} className="group block overflow-hidden border border-volcanic/10 bg-ivory transition duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_80px_rgba(42,39,36,0.13)]">
      <GradientMedia label={eyebrow} tone={tone} />
      <div className="p-7 md:p-8">
        {meta && <p className="mb-4 font-body text-[0.62rem] uppercase tracking-[0.18em] text-gold">{meta}</p>}
        <h3 className="font-display text-3xl font-light leading-tight text-volcanic group-hover:text-gold transition-colors duration-350">{title}</h3>
        <p className="mt-4 line-clamp-4 font-body text-sm leading-7 text-warmgrey">{text}</p>
        <span className="mt-7 inline-flex items-center gap-2 font-body text-[0.68rem] uppercase tracking-[0.16em] text-volcanic transition-all duration-350 group-hover:gap-4 group-hover:text-gold">Explore <Arrow /></span>
      </div>
    </Link>
  )
}
