import Image from 'next/image'
import Link from 'next/link'

const cols = [
  { title: 'Explore', links: [['Destinations', '/ethiopias-popular-destinations'], ['Journeys', '/tours-by-experience'], ['Travel Guide', '/ethiopia-travel-guide'], ['Wildlife', '/ethiopia-wildlife/endemic-species'], ['Sawla Moments', '/sawla-moments'], ['Trip Finder', '/trip-finder'], ['Reviews', '/testimonials']] },
  { title: 'Company', links: [['About Sawla', '/about-us'], ['How We Work', '/how-we-work'], ['Why Travel With Us', '/why-travel-with-sawla-tours'], ['Guides', '/meet-our-guides'], ['Responsible Travel', '/responsible-travel'], ['Sawla Foundation', '/sawla-foundation']] },
  { title: 'Specialist Travel', links: [['Omo Valley', '/ethiopias-popular-destinations/omo-valley'], ['Lalibela', '/ethiopias-popular-destinations/lalibela'], ['Danakil', '/ethiopias-popular-destinations/danakil-depression'], ['Bale Wildlife', '/ethiopias-popular-destinations/bale-mountains'], ['Film Fixing', 'https://www.ethiopiafilmfixer.com']] },
]

export default function Footer() {
  return (
    <footer className="bg-volcanic text-ivory">
      <div className="container-max py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1.6fr]">
          <div>
            <Image src="/images/brand/sawla-tours-logo-white.png" alt="Sawla Tours" width={160} height={80} className="h-auto w-36" />
            <p className="mt-7 max-w-sm font-body text-sm leading-7 text-ivory/50">Boutique Ethiopia tours designed from Addis Ababa by field specialists, national guides and the Sawla Films cinematic production network.</p>
            <div className="mt-8 space-y-2 font-body text-sm text-ivory/60">
              <a className="block hover:text-gold" href="mailto:explore@sawlatours.com">explore@sawlatours.com</a>
              <a className="block hover:text-gold" href="https://wa.me/251970578306">WhatsApp +251 970 578 306</a>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map(col => (
              <div key={col.title}>
                <p className="mb-6 font-body text-[0.62rem] uppercase tracking-[0.18em] text-gold">{col.title}</p>
                <ul className="space-y-4">
                  {col.links.map(([label, href]) => <li key={href}><Link href={href} className="font-body text-sm text-ivory/50 transition-colors duration-300 hover:text-ivory">{label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-ivory/10 pt-8 font-body text-[0.68rem] uppercase tracking-[0.16em] text-ivory/30 md:flex md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sawla Tours Ethiopia</p>
          <p className="mt-3 md:mt-0">Teff Gold · Volcanic Rock · Ivory</p>
        </div>
      </div>
    </footer>
  )
}
