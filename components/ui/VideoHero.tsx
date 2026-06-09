import Image from 'next/image'
import Link from 'next/link'
import Arrow from './Arrow'

export default function VideoHero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-volcanic pt-32">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/brand/sawla-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/sawla-hero-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/videos/sawla-hero-desktop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.30)_0%,rgba(10,9,8,0.08)_35%,rgba(10,9,8,0.70)_72%,rgba(10,9,8,0.94)_100%)]" />
      <div className="absolute inset-0 film-grain opacity-35" />
      <div className="relative z-10 mx-auto grid w-full max-w-container gap-12 px-6 pb-16 md:px-12 md:pb-24 lg:grid-cols-[1fr_24rem] lg:items-end">
        <div className="max-w-4xl">
          <p className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-gold animate-fade-up">Bespoke Ethiopia Travel · Since 2009</p>
          <h1 className="mt-6 font-display text-[clamp(3.8rem,9vw,9rem)] font-light leading-[0.92] tracking-[-0.045em] text-ivory animate-line-rise">
            Ethiopia,<br />
            <em className="italic text-ivory/70">with field memory.</em>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-[1rem] leading-8 text-ivory/60 md:text-[1.12rem]">
            Private journeys through Lalibela, the Omo Valley, the Simien Mountains, Bale, Tigray and the Danakil — designed by Ethiopian specialists who understand timing, access, culture and light.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/enquire" className="btn-primary-ivory">Start a Private Journey</Link>
            <Link href="/ethiopias-popular-destinations" className="btn-ghost-light group">Explore destinations <Arrow className="transition-transform duration-350 group-hover:translate-x-1" /></Link>
          </div>
        </div>
        <aside className="border border-ivory/10 bg-volcanic/50 p-6 backdrop-blur-md md:p-8">
          <Image src="/images/brand/sawla-tours-logo-white.png" alt="Sawla Tours logo" width={170} height={80} className="mb-8 h-auto w-32 opacity-90" priority />
          <div className="grid grid-cols-3 gap-4 border-t border-ivory/10 pt-6">
            <div><div className="font-display text-4xl text-ivory">16</div><p className="mt-1 font-body text-[0.58rem] uppercase tracking-[0.16em] text-ivory/40">Worlds</p></div>
            <div><div className="font-display text-4xl text-ivory">36</div><p className="mt-1 font-body text-[0.58rem] uppercase tracking-[0.16em] text-ivory/40">Journeys</p></div>
            <div><div className="font-display text-4xl text-ivory">500+</div><p className="mt-1 font-body text-[0.58rem] uppercase tracking-[0.16em] text-ivory/40">Custom trips</p></div>
          </div>
        </aside>
      </div>
    </section>
  )
}
