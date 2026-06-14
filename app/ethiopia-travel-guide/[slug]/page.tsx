import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { FIELD_GUIDE_SLUGS } from "@/data/siteData"
import { getGuideContent } from "@/data/fieldGuideContent"
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"

interface Props { params: Promise<{ slug: string }> }

// All 15 guide metadata — exact 50-60 char titles, 150-160 char descriptions (Pillar 8)
type GuideSource = { label: string; href: string; note: string }

const GUIDE_SOURCES: Record<string, GuideSource[]> = {
  "safety-in-ethiopia": [
    { label: "United States travel advisory for Ethiopia", href: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ethiopia-travel-advisory.html", note: "Regional warnings and advisory level" },
    { label: "United Kingdom travel advice for Ethiopia", href: "https://www.gov.uk/foreign-travel-advice/ethiopia", note: "Regional, entry, health and insurance guidance" },
  ],
  "ethiopia-visa-guide": [
    { label: "Official Ethiopian tourist eVisa information", href: "https://www.evisa.gov.et/information/tourist", note: "Current eligibility, documents and application guidance" },
  ],
  "general-travel-tips": [
    { label: "WHO international travel and health resources", href: "https://www.who.int/health-topics/travel-and-health", note: "General travel-health framework; obtain personalised medical advice" },
  ],
}

const GUIDE_META: Record<string,{title:string;desc:string;h1:string;category:string;readTime:string}> = {
  "when-to-visit-ethiopia":    {title:"When to Visit Ethiopia | Season Guide | Sawla Tours",desc:"Month-by-month guide to Ethiopia seasons, festivals, wildlife, and road conditions. October to February is ideal for most travelers visiting Ethiopia.",h1:"When to Visit Ethiopia",category:"Planning",readTime:"8 min"},
  "how-to-plan-your-trip":     {title:"How to Plan an Ethiopia Trip | Routes | Sawla Tours",desc:"Practical guide to planning a private Ethiopia itinerary — optimal duration, routing, domestic flight booking, and how to balance depth versus coverage.",h1:"How to Plan an Ethiopia Trip",category:"Planning",readTime:"12 min"},
  "safety-in-ethiopia":        {title:"Safety in Ethiopia for Travelers | Sawla Tours Guide",desc:"How Sawla assesses Ethiopia travel conditions, uses official advisories and local operating information, and changes or declines routes when necessary.",h1:"Safety in Ethiopia",category:"Safety",readTime:"6 min"},
  "ethiopia-visa-guide":       {title:"Ethiopia Visa and Entry Requirements | Sawla Tours",desc:"Plan Ethiopia entry using the official government eVisa information, current passport requirements and personalised health advice; rules are rechecked before travel.",h1:"Ethiopia Visa Guide",category:"Essentials",readTime:"5 min"},
  "what-to-pack-for-ethiopia": {title:"What to Pack for Ethiopia | Complete List | Sawla Tours",desc:"Full Ethiopia packing list — highlands, Danakil, Omo Valley, church visits, and trekking. What to bring and what to leave at home for every region type.",h1:"What to Pack for Ethiopia",category:"Essentials",readTime:"7 min"},
  "ethiopia-travel-costs":     {title:"Ethiopia Travel Costs and Budgeting | Sawla Tours",desc:"Private Ethiopia trip costs explained — honest budget breakdown covering tours, accommodation, domestic flights, and what affects pricing at each level.",h1:"Ethiopia Travel Costs",category:"Planning",readTime:"8 min"},
  "ethiopian-food-coffee":     {title:"Ethiopian Food and Coffee Culture | Sawla Tours Guide",desc:"Guide to Ethiopian cuisine — injera, coffee ceremonies, tej, spices, and essential food and drink experiences across Addis Ababa and the regions of Ethiopia.",h1:"Ethiopian Food & Coffee",category:"Culture",readTime:"6 min"},
  "ethiopia-photography-guide":{title:"Photography in Ethiopia | Tips and Advice | Sawla Tours",desc:"Photography in Ethiopia — best light conditions, timing, community permissions, respectful portrait practice, and technical settings for key locations.",h1:"Photography in Ethiopia",category:"Photography",readTime:"10 min"},
  "ethiopia-travel-circuits":  {title:"Ethiopia Travel Routes and Circuits | Sawla Tours",desc:"Ethiopia travel circuits explained — Northern Historic, Southern Cultural, Wildlife Circuit — and expert advice on combining them into a coherent private itinerary.",h1:"Ethiopia Travel Circuits",category:"Planning",readTime:"9 min"},
  "how-to-get-to-ethiopia":    {title:"How to Get to Ethiopia | Flights and Entry | Sawla Tours",desc:"Flying to Ethiopia — best airlines, international connections, Addis airport guide, and how to get from Addis Ababa to your first Ethiopia destination.",h1:"How to Get to Ethiopia",category:"Essentials",readTime:"5 min"},
  "hotels-lodges-ethiopia":    {title:"Hotels and Lodges in Ethiopia | Accommodation Guide",desc:"Where to stay in Ethiopia — best hotels and lodges across Lalibela, Gondar, Simien, Bale, Danakil, and Omo Valley. An honest region-by-region review.",h1:"Hotels & Lodges in Ethiopia",category:"Accommodation",readTime:"9 min"},
  "ethiopia-safaris":          {title:"Ethiopia Wildlife Safari Planning Guide | Sawla Tours",desc:"Planning an Ethiopia safari — national parks, endemic species, birding, and how Ethiopia wildlife travel differs from East African safari experiences.",h1:"Ethiopia Safari Guide",category:"Wildlife",readTime:"8 min"},
  "popular-wildlife-ethiopia": {title:"Wildlife to See in Ethiopia | Species Guide | Sawla Tours",desc:"Ethiopian wolf, gelada monkey, Walia ibex — where to find endemic Ethiopian species, best viewing seasons, and how to see them with specialist guides.",h1:"Wildlife to See in Ethiopia",category:"Wildlife",readTime:"7 min"},
  "why-visit-ethiopia":        {title:"Why Visit Ethiopia | Travel Inspiration | Sawla Tours",desc:"Ten reasons Ethiopia captivates travelers — ancient rock churches, endemic wildlife, volcanic extremes, and a coffee culture like nowhere else on earth.",h1:"Why Visit Ethiopia",category:"Inspiration",readTime:"5 min"},
  "general-travel-tips":       {title:"Ethiopia Travel Tips and Practical Advice | Sawla Tours",desc:"Ethiopia travel tips from a local team — health, altitude, currency, communications, cultural etiquette, and what to realistically expect on the ground.",h1:"Ethiopia Travel Tips",category:"Essentials",readTime:"8 min"},
}

export async function generateStaticParams() {
  return FIELD_GUIDE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const m = GUIDE_META[slug]
  if (!m) return {}
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: "https://www.sawlatours.com/ethiopia-travel-guide/" + slug },
    openGraph: { title: m.title, description: m.desc, url: "https://www.sawlatours.com/ethiopia-travel-guide/" + slug },
    keywords: [m.h1, "Ethiopia travel", "Ethiopia guide", "Sawla Tours", "private Ethiopia tours"],
  }
}

export default async function FieldGuidePage({ params }: Props) {
  const { slug } = await params
  if (!FIELD_GUIDE_SLUGS.includes(slug)) notFound()
  const m = GUIDE_META[slug] ?? { h1: slug.replace(/-/g," "), desc:"", title:"", category:"Guide", readTime:"8 min" }
  const content = getGuideContent(slug)
  const currentSources = GUIDE_SOURCES[slug] ?? []

  const related = FIELD_GUIDE_SLUGS.filter(s => s !== slug).slice(0,4).map(s => ({ slug:s, title:GUIDE_META[s]?.h1??s, category:GUIDE_META[s]?.category??"Guide" }))

  const schemas = [
    articleSchema({ url:"https://www.sawlatours.com/ethiopia-travel-guide/"+slug, title:m.h1, description:m.desc, datePublished:"2024-01-01", dateModified:"2026-06-14", image:"https://www.sawlatours.com/images/guides/"+slug+"-hero.jpg" }),
    breadcrumbSchema([
      { name:"Home", url:"https://www.sawlatours.com" },
      { name:"Ethiopia Travel Guide", url:"https://www.sawlatours.com/ethiopia-travel-guide" },
      { name:m.h1, url:"https://www.sawlatours.com/ethiopia-travel-guide/"+slug },
    ]),
    ...(content?.faqs ? [faqSchema(content.faqs)] : []),
  ]

  return (
    <>
      {schemas.map((s,i)=><SchemaScript key={i} schema={s}/>)}
      <div className="sr-only">{m.desc} Sawla Tours Ethiopia travel guides cover planning, safety, visas, accommodation, wildlife, photography, and practical advice from a local Addis Ababa-based team.</div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{height:"52vh",minHeight:"380px"}} aria-labelledby="guide-hero-heading">
        <PlaceholderImage filename={"guide-"+slug+"-hero.jpg"} width={1920} height={800} category="guide" fill className="object-center" />
        <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(42,39,36,0.92) 0%, rgba(42,39,36,0.2) 55%, rgba(42,39,36,0.08) 100%)"}} />
        <div className="absolute inset-x-0 bottom-0 pb-12">
          <div className="container-max">
            <AnimateIn>
              <nav aria-label="Breadcrumb" className="mb-4"><ol className="flex flex-wrap items-center gap-2 font-body" style={{fontSize:"11.5px",letterSpacing:"0.1em",textTransform:"uppercase"}}><li><Link href="/" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Home</Link></li><li className="text-ivory/30">&#47;</li><li><Link href="/ethiopia-travel-guide" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Travel Guide</Link></li><li className="text-ivory/30">&#47;</li><li className="text-ivory/80">{m.h1}</li></ol></nav>
              <span className="label-eyebrow text-gold">{m.category}</span>
              <h1 id="guide-hero-heading" className="heading-display text-ivory mt-2" style={{fontSize:"clamp(1.75rem,4vw,3.5rem)"}}>{m.h1}</h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-ivory/60 font-body" style={{fontSize:"11.5px"}}>{m.readTime} read</span>
                <span className="text-ivory/25">|</span>
                <span className="text-ivory/60 font-body" style={{fontSize:"11.5px"}}>Sawla Tours Guide</span>
                <span className="text-ivory/25">|</span>
                <span className="text-ivory/60 font-body" style={{fontSize:"11.5px"}}>Reviewed 14 June 2026</span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── ARTICLE ── */}
            <article className="lg:col-span-2" aria-labelledby="guide-hero-heading">

              {/* Intro */}
              {content?.intro && (
                <AnimateIn className="mb-10">
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1.125rem,1.5vw,1.25rem)"}}>{content.intro}</p>
                </AnimateIn>
              )}

              {currentSources.length > 0 && (
                <AnimateIn className="mb-10 rounded-card border border-gold/25 bg-gold-faint p-5">
                  <h2 className="font-display text-volcanic text-xl font-normal">Current sources and review standard</h2>
                  <p className="mt-2 text-sm leading-6 text-warmgrey">Reviewed 14 June 2026. Entry, health and regional conditions can change after publication; use the live source and your own authority or medical adviser before travel.</p>
                  <ul className="mt-4 space-y-2">
                    {currentSources.map(source => (
                      <li key={source.href} className="text-sm leading-6">
                        <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-medium text-gold underline underline-offset-2">{source.label}</a>
                        <span className="text-warmgrey"> — {source.note}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}

              {/* Content sections */}
              {content?.sections?.map((s,i) => (
                <AnimateIn key={i} delay={i*0.07} className="mb-10">
                  {s.heading && (
                    <h2 className="font-display text-volcanic font-normal mb-4" style={{fontSize:"clamp(1.25rem,2vw,1.625rem)"}}>{s.heading}</h2>
                  )}
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1rem,1.1vw,1.0625rem)"}}>{s.body}</p>
                </AnimateIn>
              ))}

              {/* No content fallback — still premium */}
              {!content && (
                <AnimateIn className="mb-10">
                  <p className="text-warmgrey font-body leading-relaxed mb-6" style={{fontSize:"clamp(1rem,1.1vw,1.0625rem)"}}>{m.desc}</p>
                  <div className="p-6 bg-gold-faint rounded-card border border-gold/20">
                    <h2 className="font-display text-volcanic font-normal mb-3" style={{fontSize:"clamp(1.125rem,1.75vw,1.375rem)"}}>Planning your Ethiopia trip?</h2>
                    <p className="text-warmgrey font-body leading-relaxed mb-5" style={{fontSize:"0.9375rem"}}>Our Addis Ababa-based specialists can answer every question about this topic directly — drawing on 15+ years of planning private Ethiopia journeys. Start a conversation and we will take it from there.</p>
                    <Link href="/enquire" className="btn-primary">Ask Our Specialists</Link>
                  </div>
                </AnimateIn>
              )}

              {/* Quick Facts */}
              {content?.quickFacts && content.quickFacts.length > 0 && (
                <AnimateIn className="my-10 p-6 bg-volcanic rounded-card">
                  <div className="label-eyebrow text-gold mb-4">Quick Facts</div>
                  <ul className="space-y-2">
                    {content.quickFacts.map((fact,i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="text-gold flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-ivory/80 font-body" style={{fontSize:"0.9375rem"}}>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}

              {/* FAQ */}
              {content?.faqs && content.faqs.length > 0 && (
                <AnimateIn className="mt-10">
                  <h2 className="font-display text-volcanic font-normal mb-6" style={{fontSize:"clamp(1.25rem,2vw,1.625rem)"}}>Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {content.faqs.map(faq => (
                      <details key={faq.q} className="border border-sand rounded-card group">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-body font-medium text-volcanic hover:text-gold transition-colors" style={{fontSize:"13.5px"}}>
                          <span>{faq.q}</span>
                          <span className="ml-4 text-gold text-xl leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                        </summary>
                        <div className="px-5 pb-5 text-warmgrey font-body leading-relaxed" style={{fontSize:"13.5px"}}>{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </AnimateIn>
              )}
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1"><div className="sticky top-24 space-y-5">
              <div className="bg-volcanic rounded-card p-6 text-ivory">
                <div className="label-eyebrow text-gold mb-3">Plan Your Journey</div>
                <h3 className="font-display text-ivory font-light mb-3" style={{fontSize:"clamp(1.125rem,1.75vw,1.375rem)"}}>Questions about {m.h1}?</h3>
                <p className="text-ivory/60 font-body leading-relaxed mb-5" style={{fontSize:"0.875rem"}}>Our Ethiopia specialists in Addis Ababa answer planning questions directly. No obligation.</p>
                <Link href="/enquire" className="btn-gold w-full justify-center mb-3">Ask a Specialist</Link>
                <Link href="/how-we-work" className="flex items-center justify-center gap-1.5 text-ivory/50 hover:text-gold transition-colors font-body cursor-pointer" style={{fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase"}}>How we plan &#x2192;</Link>
              </div>
              {content?.relatedDestinations && content.relatedDestinations.length > 0 && (
                <div className="border border-sand rounded-card p-5">
                  <div className="label-eyebrow mb-4">Related Destinations</div>
                  <div className="space-y-2">
                    {content.relatedDestinations.map(d => (
                      <Link key={d} href={"/ethiopias-popular-destinations/"+d} className="flex items-center justify-between text-sm group cursor-pointer">
                        <span className="text-warmgrey group-hover:text-gold transition-colors font-body capitalize">{d.replace(/-/g," ")}</span>
                        <svg className="text-gold/60 group-hover:text-gold" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div></aside>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="section-padding-sm bg-volcanic" aria-labelledby="related-guides-heading">
        <div className="container-max">
          <AnimateIn className="mb-8"><span className="label-eyebrow text-gold">Continue Reading</span><h2 id="related-guides-heading" className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.375rem,2.5vw,1.875rem)"}}>More Ethiopia Planning Guides</h2></AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" staggerDelay={0.06}>
            {related.map(r => (
              <div key={r.slug}>
                <Link href={"/ethiopia-travel-guide/"+r.slug} className="group flex items-start gap-3 p-4 rounded-[12px] border border-white/10 hover:border-gold/40 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <div className="text-gold/70 font-body mb-1" style={{fontSize:"10px",letterSpacing:"0.12em",textTransform:"uppercase"}}>{r.category}</div>
                    <h3 className="font-display text-ivory font-light group-hover:text-gold transition-colors leading-snug" style={{fontSize:"clamp(0.875rem,1.25vw,1rem)"}}>{r.title}</h3>
                  </div>
                  <svg className="flex-shrink-0 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            ))}
          </AnimateStagger>
          <AnimateIn delay={0.2} className="text-center mt-10"><Link href="/ethiopia-travel-guide" className="btn-ghost-light">All 15 Planning Guides</Link></AnimateIn>
        </div>
      </section>
      <section className="bg-ivory py-16 border-t border-sand/60"><div className="container-max"><AnimateIn className="grid md:grid-cols-2 gap-10 items-center">
        <div><span className="label-eyebrow">Ready to Plan?</span><h2 className="heading-display text-volcanic mt-2" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>From Research to a Real Ethiopia Journey</h2><p className="text-warmgrey font-body leading-relaxed mt-4" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>Every guide was written to help you plan confidently. When ready, our local specialists will design the right private itinerary for your dates.</p></div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-4"><Link href="/enquire" className="btn-primary">Start Planning Your Journey</Link><Link href="/ethiopias-popular-destinations" className="btn-ghost">Explore Destinations</Link></div>
      </AnimateIn></div></section>
    </>
  )
}
