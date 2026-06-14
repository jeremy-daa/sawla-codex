import Link from 'next/link'
import { TRUST_NAV } from '@/data/trustArchitecture'

export default function TrustSectionNav({ current }: { current: string }) {
  return (
    <nav aria-label="About and trust pages" className="border-b border-sand bg-white">
      <div className="container-max overflow-x-auto py-3">
        <ul className="flex min-w-max gap-2">
          {TRUST_NAV.map((item) => {
            const active = item.href === current
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex rounded-full border px-4 py-2 text-xs uppercase tracking-[0.11em] transition-colors ${active ? 'border-gold bg-gold text-charcoal' : 'border-sand text-warmgrey hover:border-gold hover:text-charcoal'}`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
