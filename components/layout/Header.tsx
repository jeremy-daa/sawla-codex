"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_LINKS, SITE } from "@/data/siteData"
import clsx from "clsx"

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={clsx("w-3 h-3 transition-transform duration-200", open && "rotate-180")} viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CloseIcon = () => <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true"><line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
const MenuIcon = () => <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true"><line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="0" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center group" aria-label="Sawla Tours home">
      <Image src="/brand/logo-white.png" alt="Sawla Tours" width={120} height={112} priority className="object-contain transition-all duration-300" style={{ height: scrolled ? "46px" : "56px", width: "auto" }} />
    </Link>
  )
}

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveNav(null)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const menuButton = menuButtonRef.current
    const main = document.getElementById("main-content")
    const footer = document.querySelector("footer") as HTMLElement | null
    const pageElements = [main, footer].filter(Boolean) as HTMLElement[]

    document.body.style.overflow = "hidden"
    for (const element of pageElements) {
      element.setAttribute("aria-hidden", "true")
      ;(element as HTMLElement & { inert: boolean }).inert = true
    }
    requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setMobileOpen(false)
        return
      }
      if (event.key !== "Tab" || !panelRef.current) return
      const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(el => !el.hasAttribute("disabled"))
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
      for (const element of pageElements) {
        element.removeAttribute("aria-hidden")
        ;(element as HTMLElement & { inert: boolean }).inert = false
      }
      ;(previouslyFocused ?? menuButton)?.focus()
    }
  }, [mobileOpen])

  useEffect(() => {
    const closeDesktopMenus = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveNav(null)
    }
    document.addEventListener("keydown", closeDesktopMenus)
    return () => document.removeEventListener("keydown", closeDesktopMenus)
  }, [])

  const openDesktop = useCallback((href: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setActiveNav(href)
  }, [])
  const closeDesktop = useCallback(() => {
    hoverTimer.current = setTimeout(() => setActiveNav(null), 160)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={clsx("fixed top-0 left-0 right-0 z-50 transition-all duration-400", scrolled ? "bg-[#2a2724]/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent")}>
        <div className="container-max flex items-center justify-between h-16 md:h-20">
          <Logo scrolled={scrolled} />

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main navigation">
            {NAV_LINKS.map(link => {
              const dropdownId = `desktop-nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
              const isOpen = activeNav === link.href
              return (
                <div key={link.href} className="relative" onMouseEnter={() => link.children && openDesktop(link.href)} onMouseLeave={closeDesktop} onFocus={() => hoverTimer.current && clearTimeout(hoverTimer.current)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setActiveNav(null) }}>
                  <div className="flex items-center">
                    <Link href={link.href} className={clsx("min-h-11 flex items-center font-body font-medium transition-colors duration-200 text-[13px] tracking-[0.055em] uppercase", isOpen ? "text-gold" : "text-ivory/85 hover:text-ivory focus-visible:text-gold")}>{link.label}</Link>
                    {link.children && (
                      <button type="button" className="min-w-11 min-h-11 inline-flex items-center justify-center text-ivory/80 hover:text-gold focus-visible:text-gold" aria-label={`${isOpen ? "Close" : "Open"} ${link.label} menu`} aria-expanded={isOpen} aria-controls={dropdownId} onClick={() => setActiveNav(isOpen ? null : link.href)}>
                        <ChevronDown open={isOpen} />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.children && isOpen && (
                      <motion.div id={dropdownId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[260px] z-50" onMouseEnter={() => openDesktop(link.href)} onMouseLeave={closeDesktop}>
                        <div className="bg-volcanic border border-white/15 rounded-[12px] shadow-2xl py-2 overflow-hidden" role="menu" aria-label={`${link.label} submenu`}>
                          {link.children.map(child => (
                            <Link key={child.href} href={child.href} role="menuitem" onClick={() => setActiveNav(null)} className="block px-5 py-3 min-h-11 font-body text-[13.5px] text-ivory/80 hover:text-gold hover:bg-white/5 focus-visible:text-gold focus-visible:bg-white/5 transition-colors tracking-wide">{child.label}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE.phoneE164}`} className="min-h-11 inline-flex items-center text-ivory/70 hover:text-gold font-body transition-colors text-[12.5px] tracking-[0.05em]">{SITE.phone}</a>
            <Link href="/enquire" className="btn-gold min-h-11" style={{ fontSize: "11.5px", padding: "0.625rem 1.5rem" }}>Start Planning</Link>
          </div>

          <button ref={menuButtonRef} className="lg:hidden min-w-11 min-h-11 -mr-2 inline-flex items-center justify-center text-ivory" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation-panel"><MenuIcon /></button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/55 z-40 lg:hidden cursor-default" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" tabIndex={-1} />}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div ref={panelRef} id="mobile-navigation-panel" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} className="fixed top-0 right-0 bottom-0 z-50 w-[340px] max-w-[92vw] bg-volcanic flex flex-col overflow-y-auto lg:hidden" role="dialog" aria-labelledby="mobile-navigation-title" aria-modal="true">
            <div className="flex items-center justify-between px-6 min-h-16 border-b border-white/10 flex-shrink-0">
              <span id="mobile-navigation-title" className="font-display text-ivory text-xl font-light tracking-wider">Navigation</span>
              <button ref={closeButtonRef} onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" className="text-ivory/80 hover:text-ivory min-w-11 min-h-11 inline-flex items-center justify-center"><CloseIcon /></button>
            </div>
            <nav className="flex-1 px-4 pt-4 pb-6" aria-label="Mobile navigation">
              {NAV_LINKS.map(link => {
                const childId = `mobile-nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
                const expanded = expandedMobile === link.href
                return (
                  <div key={link.href}>
                    <div className="flex items-stretch border-b border-white/10">
                      <Link href={link.href} className="flex-1 min-h-12 flex items-center px-2 font-body text-[13px] text-ivory/85 hover:text-gold tracking-[0.06em] uppercase">{link.label}</Link>
                      {link.children && <button type="button" onClick={() => setExpandedMobile(expanded ? null : link.href)} className="min-w-12 min-h-12 inline-flex items-center justify-center text-ivory/60 hover:text-gold" aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label} submenu`} aria-expanded={expanded} aria-controls={childId}><ChevronDown open={expanded} /></button>}
                    </div>
                    {link.children && expanded && (
                      <div id={childId} className="bg-white/5 rounded-sm my-1 py-1">
                        {link.children.map(child => <Link key={child.href} href={child.href} className="block px-5 py-3 min-h-11 font-body text-[13px] text-ivory/65 hover:text-gold focus-visible:text-gold">{child.label}</Link>)}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
            <div className="flex-shrink-0 px-6 pt-4 pb-8 border-t border-white/10 space-y-3">
              <Link href="/enquire" className="btn-gold justify-center w-full min-h-12">Start Planning</Link>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 border border-white/25 rounded-sm text-ivory/80 text-[12.5px] font-body tracking-wider uppercase hover:border-[#25D366] hover:text-[#25D366] transition-colors">WhatsApp</a>
              <p className="text-center text-ivory/50 font-body text-xs tracking-[0.1em]">{SITE.phone} · Addis Ababa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
