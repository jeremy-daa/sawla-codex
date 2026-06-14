import Link from 'next/link'
import PlaceholderImage, { type Category } from '@/components/ui/PlaceholderImage'

type HeroFact = { value: string; label: string }
type HeroLink = { href: string; label: string }

interface HubHeroProps {
  eyebrow: string
  title: string
  intro: string
  breadcrumb: string
  image: string
  imageAlt: string
  category?: Category
  facts?: HeroFact[]
  primary?: HeroLink
  secondary?: HeroLink
  compact?: boolean
}

export default function HubHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  image,
  imageAlt,
  category = 'home',
  facts = [],
  primary,
  secondary,
  compact = false,
}: HubHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? 'min-h-[500px]' : 'min-h-[620px]'} flex items-end pt-28 pb-14 md:pb-20`}
      aria-labelledby="hub-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <PlaceholderImage filename={image} width={1920} height={1080} category={category} fill label={imageAlt} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,28,26,.88)_0%,rgba(28,28,26,.62)_52%,rgba(28,28,26,.34)_100%)]" />
      </div>

      <div className="container-max relative z-10 text-ivory">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm text-ivory/68">
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-gold">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>

        <div className="max-w-4xl">
          <span className="label-eyebrow text-gold">{eyebrow}</span>
          <h1 id="hub-hero-heading" className="heading-display text-ivory" style={{ fontSize: 'clamp(3rem,6.4vw,6.25rem)' }}>
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-8 text-ivory/82">{intro}</p>

          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && <Link href={primary.href} className="btn-gold justify-center">{primary.label}</Link>}
              {secondary && <Link href={secondary.href} className="btn-ghost-light justify-center">{secondary.label}</Link>}
            </div>
          )}
        </div>

        {facts.length > 0 && (
          <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-7 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={`${fact.value}-${fact.label}`}>
                <dt className="text-xs uppercase tracking-[0.14em] text-ivory/55">{fact.label}</dt>
                <dd className="mt-1 font-display text-2xl font-light text-ivory">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
