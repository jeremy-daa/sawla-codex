import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { destinationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"
import { DESTINATIONS, TOUR_STYLES, SITE } from "@/data/siteData"
import RelatedStoryStrip from "@/components/stories/RelatedStoryStrip"
import { DESTINATION_CONTENT } from "@/data/destinationContent"
import { getCanonicalJourneysByDestination } from "@/data/canonicalJourneys"

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return DESTINATIONS.map(d => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const d = DESTINATIONS.find(x => x.slug === slug)
  if (!d) return {}
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: [d.primaryKeyword, "Ethiopia tour", d.name, "Sawla Tours", "private Ethiopia"],
    alternates: { canonical: "https://www.sawlatours.com/ethiopias-popular-destinations/" + slug },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      images: [{ url: d.heroImage, alt: d.heroAlt }],
    },
  }
}

const DIFF_COLORS: Record<string, string> = {
  Easy:        "text-green-700 bg-green-50 border-green-100",
  Moderate:    "text-amber-700 bg-amber-50 border-amber-100",
  Challenging: "text-red-700 bg-red-50 border-red-100",
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const d = DESTINATIONS.find(x => x.slug === slug)
  if (!d) notFound()
  const content = DESTINATION_CONTENT[slug]
  const related = DESTINATIONS.filter(x => x.slug !== slug && x.featured).slice(0, 3)

  const schemas = [
    destinationSchema({ name: d.name, url: "https://www.sawlatours.com/ethiopias-popular-destinations/" + slug, description: d.excerpt, image: d.heroImage, region: d.region }),
    breadcrumbSchema([
      { name: "Home", url: "https://www.sawlatours.com" },
      { name: "Destinations", url: "https://www.sawlatours.com/ethiopias-popular-destinations" },
      { name: d.name, url: "https://www.sawlatours.com/ethiopias-popular-destinations/" + slug },
    ]),
    ...(content?.faqs ? [faqSchema(content.faqs)] : []),
  ]

  return (
    <>
      {schemas.map((s, i) => <SchemaScript key={i} schema={s} />)}

      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[75vh] min-h-[560px] overflow-hidden" aria-labelledby="dest-heading">
        <PlaceholderImage filename={"dest-" + slug + "-hero.jpg"} width={1920} height={1080} category="destination" fill className="object-center" />
        <div className="image-overlay" style={{ background: "linear-gradient(to top, rgba(42,39,36,0.88) 0%, rgba(42,39,36,0.25) 50%, rgba(42,39,36,0.3) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20">
          <div className="container-max text-ivory">
            <AnimateIn>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-2 font-body" style={{fontSize:"11.5px",letterSpacing:"0.1em",textTransform:"uppercase"}}>
                  <li><Link href="/" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Home</Link></li>
                  <li className="text-ivory/30">&#47;</li>
                  <li><Link href="/ethiopias-popular-destinations" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Destinations</Link></li>
                  <li className="text-ivory/30">&#47;</li>
                  <li className="text-ivory/80">{d.name}</li>
                </ol>
              </nav>
              <span className="label-eyebrow text-gold">{d.region}</span>
              <h1 id="dest-heading" className="heading-display text-ivory mt-2" style={{fontSize:"clamp(2.5rem,6vw,5.5rem)"}}>{d.name}</h1>
              <p className="text-ivory/75 font-body mt-4 max-w-2xl leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.2rem)"}}>{d.tagline}</p>
              {/* At-a-glance pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className={"border rounded-full px-4 py-1.5 font-body font-medium " + (DIFF_COLORS[d.difficulty] ?? "")} style={{fontSize:"12px"}}>{d.difficulty}</span>
                <span className="border border-white/30 text-ivory/80 rounded-full px-4 py-1.5 font-body" style={{fontSize:"12px"}}>{d.duration}</span>
                <span className="border border-white/30 text-ivory/80 rounded-full px-4 py-1.5 font-body" style={{fontSize:"12px"}}>{d.bestTime}</span>
                {content?.altitude && <span className="border border-white/30 text-ivory/80 rounded-full px-4 py-1.5 font-body" style={{fontSize:"12px"}}>{content.altitude}</span>}
                <span className="border border-white/30 text-ivory/80 rounded-full px-4 py-1.5 font-body" style={{fontSize:"12px"}}>Reviewed 14 June 2026</span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── LEFT: Article content ── */}
            <div className="lg:col-span-2">
              {content?.intro && (
                <AnimateIn>
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1.125rem,1.5vw,1.25rem)",marginBottom:"2.5rem"}}>{content.intro}</p>
                </AnimateIn>
              )}

              {/* Body sections */}
              {content?.sections?.map((section, i) => (
                <AnimateIn key={i} delay={i * 0.08} className="mb-10">
                  {section.heading && (
                    <h2 className="font-display text-volcanic font-normal mb-4" style={{fontSize:"clamp(1.375rem,2.5vw,1.875rem)"}}>{section.heading}</h2>
                  )}
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>{section.body}</p>
                </AnimateIn>
              ))}

              {/* Key Highlights */}
              {d.highlights?.length > 0 && (
                <AnimateIn className="mt-10">
                  <h2 className="font-display text-volcanic font-normal mb-6" style={{fontSize:"clamp(1.375rem,2.5vw,1.875rem)"}}>
                    Key Highlights
                  </h2>
                  <ul className="space-y-3">
                    {d.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="text-gold flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-warmgrey font-body" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}

              {/* Getting There + Best Time */}
              {content?.gettingThere && (
                <AnimateIn className="mt-10 grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-gold-faint rounded-card border border-gold/20">
                    <div className="font-body font-medium text-volcanic mb-2" style={{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase"}}>Getting There</div>
                    <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"0.9375rem"}}>{content.gettingThere}</p>
                  </div>
                  <div className="p-6 bg-gold-faint rounded-card border border-gold/20">
                    <div className="font-body font-medium text-volcanic mb-2" style={{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase"}}>Best Time to Visit</div>
                    <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"0.9375rem"}}>{content.bestTimeDetail}</p>
                  </div>
                </AnimateIn>
              )}

              {/* Entry Notes */}
              {content?.entryNotes && (
                <AnimateIn className="mt-6 p-5 bg-sand/30 rounded-card border border-sand">
                  <div className="font-body font-medium text-volcanic mb-1.5" style={{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase"}}>Practical Notes</div>
                  <p className="text-warmgrey font-body" style={{fontSize:"0.9375rem"}}>{content.entryNotes}</p>
                </AnimateIn>
              )}
            </div>

            {/* ── RIGHT: Sticky sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">

                {/* Enquiry CTA */}
                <div className="bg-volcanic rounded-card p-7 text-ivory">
                  <div className="label-eyebrow text-gold mb-4">Plan a Visit</div>
                  <h3 className="font-display text-ivory font-light mb-3" style={{fontSize:"clamp(1.25rem,2vw,1.625rem)"}}>Add {d.name} to Your Itinerary</h3>
                  <p className="text-ivory/60 font-body leading-relaxed mb-6" style={{fontSize:"0.9375rem"}}>Tell us your travel dates and interests. Our Ethiopia specialists will design a private itinerary that includes {d.name} at the right pace for you.</p>
                  <Link href="/enquire" className="btn-gold w-full justify-center mb-3">Start Planning</Link>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 border border-white/20 rounded-sm text-ivory/70 hover:border-[#25D366] hover:text-[#25D366] transition-colors font-body cursor-pointer"
                    style={{fontSize:"12.5px",letterSpacing:"0.08em",textTransform:"uppercase"}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp
                  </a>
                </div>

                {/* Quick facts */}
                <div className="border border-sand rounded-card p-5">
                  <div className="label-eyebrow mb-4">At a Glance</div>
                  <dl className="space-y-3">
                    {[{l:"Region",v:d.region},{l:"Best Time",v:d.bestTime},{l:"Duration",v:d.duration},{l:"Difficulty",v:d.difficulty}].map(item=>(
                      <div key={item.l} className="flex justify-between text-sm">
                        <dt className="text-warmgrey font-body">{item.l}</dt>
                        <dd className="font-body font-medium text-volcanic text-right">{item.v}</dd>
                      </div>
                    ))}
                    {content?.altitude && <div className="flex justify-between text-sm"><dt className="text-warmgrey font-body">Altitude</dt><dd className="font-body font-medium text-volcanic text-right">{content.altitude}</dd></div>}
                  </dl>
                </div>

                {/* Related tour styles */}
                <div className="border border-sand rounded-card p-5">
                  <div className="label-eyebrow mb-4">Journey Styles for {d.name}</div>
                  <div className="space-y-2">
                    {TOUR_STYLES.slice(0, 3).map(ts => (
                      <Link key={ts.slug} href={"/tours-by-experience/" + ts.slug}
                        className="flex items-center justify-between text-sm group cursor-pointer">
                        <span className="text-warmgrey group-hover:text-gold transition-colors font-body">{ts.name}</span>
                        <svg className="text-gold/60 group-hover:text-gold group-hover:translate-x-0.5 transition-all" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY (placeholder) ── */}
      <section className="bg-volcanic py-16">
        <div className="container-max">
          <AnimateIn className="mb-8">
            <span className="label-eyebrow text-gold">Gallery</span>
            <h2 className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>From the Field</h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-2 md:grid-cols-4 gap-3" staggerDelay={0.06}>
            {[1,2,3,4].map(i => (
              <div key={i} className={"relative overflow-hidden rounded-[12px] " + (i===1?"col-span-2 row-span-2 aspect-square":"aspect-[4/3]")}>
                <PlaceholderImage filename={"dest-" + slug + "-gallery-" + i + ".jpg"} width={i===1?800:400} height={i===1?800:300} category="destination" fill className="hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <RelatedStoryStrip destinationSlug={slug} heading={`How Sawla Approaches ${d.name} Journeys`} />

      {/* ── FAQ ── */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="section-padding-sm bg-ivory border-t border-sand/60">
          <div className="container-max max-w-3xl mx-auto">
            <AnimateIn className="mb-10">
              <span className="label-eyebrow">Questions</span>
              <h2 className="heading-display text-volcanic mt-1" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>{d.name} — Common Questions</h2>
            </AnimateIn>
            <AnimateStagger className="space-y-3" staggerDelay={0.07}>
              {content.faqs.map(faq => (
                <div key={faq.q}>
                  <details className="border border-sand rounded-card group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-body font-medium text-volcanic hover:text-gold transition-colors" style={{fontSize:"13.5px"}}>
                      <span>{faq.q}</span>
                      <span className="ml-4 text-gold text-xl leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-warmgrey font-body leading-relaxed" style={{fontSize:"13.5px"}}>{faq.a}</div>
                  </details>
                </div>
              ))}
            </AnimateStagger>
          </div>
        </section>
      )}

      {/* ── RECOMMENDED SIGNATURE JOURNEYS ── */}
      {(() => {
        const journeys = getCanonicalJourneysByDestination(slug).slice(0, 3)
        if (journeys.length === 0) return null
        return (
          <section className="section-padding-sm bg-ivory border-t border-sand/60" aria-labelledby="rec-itins-heading">
            <div className="container-max">
              <AnimateIn className="mb-10">
                <span className="label-eyebrow">Suggested Signature Journeys</span>
                <h2 id="rec-itins-heading" className="heading-display text-volcanic mt-1" style={{ fontSize: "clamp(1.375rem,2.5vw,2rem)" }}>
                  Private Journeys That Include {d.name}
                </h2>
                <p className="text-warmgrey mt-3 max-w-2xl">These flagship routes connect the completed destination guide to Sawla’s principal bookable journey concepts.</p>
              </AnimateIn>
              <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
                {journeys.map((journey) => (
                  <div key={journey.slug}>
                    <Link href={`/tours-by-experience/${journey.category}/${journey.slug}`}
                      className="group block bg-white border border-sand rounded-card overflow-hidden card-hover">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <PlaceholderImage filename={`tour-${journey.slug}-card.webp`} width={600} height={375} category="tour" fill className="group-hover:scale-105 transition-transform duration-700" label={journey.image.cardAlt} />
                        <div className="image-overlay-light" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-warmgrey font-body" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{journey.duration}</span>
                          <span className="text-sand">·</span>
                          <span className="text-warmgrey font-body" style={{ fontSize: "11px" }}>{journey.difficulty}</span>
                        </div>
                        <h3 className="font-display text-volcanic font-normal leading-snug group-hover:text-gold transition-colors" style={{ fontSize: "clamp(1rem,1.5vw,1.1875rem)" }}>
                          {journey.title}
                        </h3>
                        <p className="text-warmgrey text-sm leading-6 mt-2 line-clamp-2">{journey.tagline}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </AnimateStagger>
              <AnimateIn delay={0.2} className="text-center mt-8">
                <Link href="/tours-by-experience" className="btn-ghost">View All 25 Signature Journeys</Link>
              </AnimateIn>
            </div>
          </section>
        )
      })()}

      {/* ── RELATED DESTINATIONS ── */}
      <section className="section-padding bg-volcanic" aria-labelledby="related-heading">
        <div className="container-max">
          <AnimateIn className="mb-10">
            <span className="label-eyebrow text-gold">Continue Exploring</span>
            <h2 id="related-heading" className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>
              Other Ethiopia Destinations
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {related.map(r => (
              <div key={r.slug}>
                <Link href={"/ethiopias-popular-destinations/" + r.slug}
                  className="group relative overflow-hidden rounded-card block card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PlaceholderImage filename={"dest-" + r.slug + "-hero.jpg"} width={600} height={450} category="destination" fill className="group-hover:scale-105 transition-transform duration-700" />
                    <div className="image-overlay" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <span className="label-eyebrow text-gold" style={{fontSize:"10px"}}>{r.region}</span>
                      <h3 className="font-display text-ivory font-light" style={{fontSize:"clamp(1.25rem,2vw,1.5rem)"}}>{r.name}</h3>
                      <p className="text-ivory/65 font-body mt-1" style={{fontSize:"12.5px"}}>{r.tagline}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </AnimateStagger>
          <AnimateIn delay={0.2} className="text-center mt-10">
            <Link href="/ethiopias-popular-destinations" className="btn-ghost-light">Explore All Destinations</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename={"dest-" + slug + "-cta.jpg"} width={1920} height={600} category="destination" fill />
          <div className="absolute inset-0 bg-volcanic/72" />
        </div>
        <div className="relative z-10 container-max">
          <AnimateIn>
            <span className="label-eyebrow text-gold">Ready to Visit?</span>
            <h2 className="heading-display text-ivory mt-4 mb-6 max-w-2xl mx-auto" style={{fontSize:"clamp(1.75rem,4vw,3rem)"}}>
              Plan Your Private {d.name} Journey
            </h2>
            <p className="text-ivory/70 font-body max-w-lg mx-auto mb-8 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
              Tell us your travel dates and what you want from {d.name}. Our Ethiopia specialists will design the right itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquire" className="btn-gold py-4 px-10">Start Planning</Link>
              <Link href="/ethiopias-popular-destinations" className="btn-ghost-light">More Destinations</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
