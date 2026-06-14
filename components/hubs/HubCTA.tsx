import Link from 'next/link'

interface HubCTAProps {
  eyebrow?: string
  title: string
  body: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
  note?: string
}

export default function HubCTA({
  eyebrow = 'Plan with a specialist',
  title,
  body,
  primary = { href: '/enquire', label: 'Start Planning' },
  secondary,
  note = 'Private, tailor-made planning · No obligation to proceed',
}: HubCTAProps) {
  return (
    <section className="section-padding-sm bg-charcoal text-ivory" aria-labelledby="hub-cta-heading">
      <div className="container-max grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="max-w-3xl">
          <span className="label-eyebrow text-gold">{eyebrow}</span>
          <h2 id="hub-cta-heading" className="heading-display text-display-lg text-ivory">{title}</h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-ivory/70">{body}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-ivory/42">{note}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link href={primary.href} className="btn-gold justify-center">{primary.label}</Link>
          {secondary && <Link href={secondary.href} className="btn-ghost-light justify-center">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  )
}
