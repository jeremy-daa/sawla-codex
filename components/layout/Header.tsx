'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const nav = [
  { label: 'Destinations', href: '/ethiopias-popular-destinations' },
  { label: 'Journeys', href: '/tours-by-experience' },
  { label: 'Field Guides', href: '/ethiopia-travel-guide' },
  { label: 'Wildlife', href: '/ethiopia-wildlife/endemic-species' },
  { label: 'Reviews', href: '/testimonials' },
  { label: 'About', href: '/about-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 34)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-[200] transition-all duration-500 ${scrolled || open ? 'bg-volcanic/95 shadow-[0_8px_30px_rgba(0,0,0,.18)] backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className={`container-max flex items-center justify-between transition-all duration-500 ${scrolled || open ? 'py-4' : 'py-6'}`} aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-4" onClick={() => setOpen(false)} aria-label="Sawla Tours home">
          <Image src="/images/brand/sawla-tours-logo-white.png" alt="Sawla Tours" width={112} height={56} className="h-auto w-[92px] transition-opacity duration-300 group-hover:opacity-80" priority />
          <span className="hidden border-l border-ivory/10 pl-4 font-body text-[0.58rem] uppercase tracking-[0.18em] text-ivory/40 md:inline">Ethiopia specialists</span>
        </Link>
        <ul className="hidden items-center gap-9 lg:flex">
          {nav.map(item => <li key={item.href}><Link href={item.href} className="font-body text-[0.68rem] uppercase tracking-[0.15em] text-ivory/70 transition-colors duration-300 hover:text-gold">{item.label}</Link></li>)}
        </ul>
        <div className="flex items-center gap-5">
          <Link href="/enquire" className="hidden border border-ivory/30 px-5 py-3 font-body text-[0.65rem] uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-volcanic md:inline-flex">Plan a Journey</Link>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-ivory/10 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span className={`h-px w-5 bg-ivory transition duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-ivory transition duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-5 bg-ivory transition duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 top-[76px] z-[199] bg-volcanic px-6 py-10 transition-all duration-500 lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="luxury-line mb-9" />
        <ul className="space-y-7">
          {[...nav, { label: 'Trip Finder', href: '/trip-finder' }, { label: 'Sawla Moments', href: '/sawla-moments' }, { label: 'Foundation', href: '/sawla-foundation' }, { label: 'Enquire', href: '/enquire' }].map((item, index) => (
            <li key={item.href} className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: open ? `${index * 55}ms` : '0ms' }}>
              <Link href={item.href} onClick={() => setOpen(false)} className="font-display text-4xl font-light text-ivory transition-colors hover:text-gold">{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-ivory/10 pt-8 font-body text-xs uppercase tracking-[0.16em] text-ivory/40">WhatsApp +251 970 578 306</div>
      </div>
    </header>
  )
}
