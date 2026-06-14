import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { AnimateIn } from '@/components/ui/AnimateIn'

type Props = {
  eyebrow: string
  title: string
  accent?: string
  intro: string
  image: string
  imageAlt: string
  current: string
  minHeight?: string
}

export default function TrustHero({ eyebrow, title, accent, intro, image, imageAlt, current, minHeight = '620px' }: Props) {
  return (
    <section className="relative overflow-hidden flex items-end pt-28 pb-16 md:pb-20" style={{ minHeight }} aria-labelledby="trust-page-heading">
      <PlaceholderImage filename={image} width={1920} height={1080} category="about" fill label={imageAlt} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(35,32,29,.96) 0%, rgba(35,32,29,.58) 55%, rgba(35,32,29,.18) 100%)' }} />
      <div className="relative z-10 container-max text-ivory">
        <AnimateIn>
          <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.13em] text-ivory/60">
            <Link href="/" className="hover:text-gold">Home</Link> <span aria-hidden="true">/</span>{' '}
            <Link href="/about-us" className="hover:text-gold">About</Link> <span aria-hidden="true">/</span>{' '}
            <span className="text-ivory">{current}</span>
          </nav>
          <span className="label-eyebrow text-gold">{eyebrow}</span>
          <h1 id="trust-page-heading" className="heading-display text-ivory mt-2 max-w-5xl" style={{ fontSize: 'clamp(2.6rem,6vw,5.6rem)' }}>
            {title}{accent ? <em className="block text-gold" style={{ fontStyle: 'italic' }}>{accent}</em> : null}
          </h1>
          <p className="text-ivory/78 max-w-3xl mt-6 leading-8" style={{ fontSize: 'clamp(1rem,1.35vw,1.2rem)' }}>{intro}</p>
        </AnimateIn>
      </div>
    </section>
  )
}
