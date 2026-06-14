import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Ethiopia Travel | Sawla Tours',
  description: 'Answers to common questions about planning an Ethiopia trip with Sawla Tours — safety, visas, timing, private tours, guides, vehicles, and more.',
  alternates: { canonical: 'https://www.sawlatours.com/faq' },
}

const faqs = [
  {
    category: 'Planning',
    items: [
      { q: 'Do I need a complete itinerary before contacting Sawla Tours?', a: 'No. You can reach out with only a rough idea — your travel month, how many days you have, your group size, and your main interests. Our team will help you understand which destinations work for your time and what kind of route makes sense.' },
      { q: 'How quickly does Sawla Tours respond to enquiries?', a: 'We aim to acknowledge new enquiries within one business day, based on Addis Ababa time. A detailed tailor-made proposal may take longer when current access, availability or specialist services must be checked.' },
      { q: 'Can Sawla Tours plan a private Ethiopia tour for just 2 people?', a: 'Yes. Most Sawla Tours journeys are private — designed for couples, small groups, or solo travelers. The itinerary, guide, and vehicle are dedicated to your group.' },
      { q: 'How far in advance should I book?', a: 'For peak season (October–February), 3–6 months is ideal. For shoulder season, 6–8 weeks is generally sufficient. Festival-timed travel (Timkat in January, Meskel in September) books quickly — start planning 4–6 months ahead.' },
    ],
  },
  {
    category: 'Destinations & Safety',
    items: [
      { q: 'Is Ethiopia safe to visit?', a: 'Travel conditions in Ethiopia vary by region and date. Sawla reviews official guidance, local operating information, transport, accommodation and practical support before proposing or confirming a route. An itinerary may be changed, postponed or declined when the complete operating picture is not acceptable.' },
      { q: 'Is the Danakil Depression safe?', a: 'Danakil travel requires a date-specific review of access, heat, volcanic conditions, vehicles, local permissions and field support. The required local arrangements can change, and Sawla proceeds only when the complete operating plan is acceptable.' },
      { q: 'Can I visit the Omo Valley?', a: "Southern and Lower Omo travel depends on current roads, community agreements, regional conditions and enough time for respectful visits. Sawla matches the itinerary with appropriate national and local guides and does not promise access to a private home, ceremony or individual." },
    ],
  },
  {
    category: 'Visas & Entry',
    items: [
      { q: 'Do I need a visa for Ethiopia?', a: 'Visa and entry rules depend on nationality and can change. Travelers should check the current Ethiopian government eVisa and immigration guidance before purchase; Sawla can explain the itinerary details but does not issue immigration advice.' },
      { q: 'What vaccinations are recommended for Ethiopia?', a: 'Consult a qualified travel-health professional well before departure. Recommended vaccinations, malaria prevention and certificate requirements depend on medical history, nationality, routing and current public-health guidance; Sawla does not provide medical advice.' },
    ],
  },
  {
    category: 'Logistics',
    items: [
      { q: 'Does Sawla Tours arrange domestic flights?', a: 'Yes. Domestic flights in Ethiopia are operated primarily by Ethiopian Airlines. Sawla Tours can coordinate domestic flight bookings, timing, and airport transfers as part of your itinerary. We recommend scheduling domestic flights with buffer time, as they can be delayed.' },
      { q: 'What vehicles does Sawla Tours use?', a: 'Sawla selects a vehicle category for the route, group size, luggage and current road conditions. The final proposal states the planned standard and seating; a specific make or model is guaranteed only when confirmed in writing.' },
      { q: 'What accommodation standards does Sawla Tours use?', a: "We work across a range from comfortable mid-range hotels to the best available lodges for each region. We are honest about what 'best available' means in remote areas — some excellent destinations have limited accommodation options. We explain this clearly during planning." },
    ],
  },
  {
    category: 'Practical',
    items: [
      { q: 'What is the best time to visit Ethiopia?', a: 'October to February is the main dry season and the most popular travel period — clear skies, accessible roads, and the best trekking and wildlife viewing conditions. March to May is shoulder season with some haze. June to September is the main rainy season — Ethiopia becomes lush and green, crowds thin out, but some roads become challenging.' },
      { q: 'What language is spoken in Ethiopia?', a: "Amharic is the official language. English is used widely in tourism services. Guide language and regional-language support are matched to the route and confirmed for the departure rather than assumed for every team member." },
      { q: 'What currency does Ethiopia use?', a: 'The Ethiopian birr is the local currency. Payment method, cash needs, card availability and foreign-currency rules can change, so Sawla provides current practical guidance in the final travel dossier.' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap(cat => cat.items.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  }))),
}

export default function FAQPage() {
  return (
    <>
      <SchemaScript schema={faqSchema} />

      {/* HERO */}
      <section className="relative bg-volcanic overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(ellipse 70% 50% at 60% 50%, #c9941a 0%, transparent 100%)" }} aria-hidden="true" />
        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <span className="label-eyebrow text-gold">Planning Your Ethiopia Journey</span>
          <h1 className="heading-display text-ivory mt-2" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-ivory/65 font-body mt-5 leading-relaxed max-w-xl mx-auto" style={{ fontSize: "clamp(1rem,1.2vw,1.125rem)" }}>
            Honest answers about planning an Ethiopia trip with Sawla Tours — from first contact to the day you return home.
          </p>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <div className="bg-white border-b border-sand">
        <div className="container-max py-4">
          <div className="flex flex-wrap gap-3">
            {faqs.map(cat => (
              <a key={cat.category} href={"#faq-" + cat.category.toLowerCase().replace(/\s+/g, "-")}
                className="trust-badge hover:border-gold hover:text-volcanic transition-colors cursor-pointer">
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ BODY */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Questions */}
            <div className="lg:col-span-2 space-y-12">
              {faqs.map(cat => (
                <div key={cat.category} id={"faq-" + cat.category.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="label-eyebrow !mb-0 text-volcanic">{cat.category}</span>
                    <div className="flex-1 h-px bg-sand" />
                  </div>
                  <div className="space-y-2">
                    {cat.items.map(item => (
                      <details key={item.q} className="border border-sand rounded-card overflow-hidden group bg-white">
                        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-body font-medium text-volcanic hover:text-gold transition-colors"
                          style={{ fontSize: "14px" }}>
                          <span className="pr-4">{item.q}</span>
                          <span className="text-gold text-xl leading-none flex-shrink-0 summary-icon group-open:rotate-45 transition-transform duration-200">+</span>
                        </summary>
                        <div className="px-5 pb-5 pt-2 border-t border-sand/50">
                          <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "14px" }}>
                            {item.a}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sidebar-sticky space-y-5">
                <div className="bg-volcanic rounded-card p-7 text-ivory">
                  <div className="label-eyebrow text-gold mb-3">Still Have Questions?</div>
                  <h3 className="font-display text-ivory font-light mb-3" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
                    Ask Our Ethiopia Team
                  </h3>
                  <p className="text-ivory/60 font-body leading-relaxed mb-6" style={{ fontSize: "0.9375rem" }}>
                    Our Addis Ababa-based specialists review new enquiries and can answer anything not covered here.
                  </p>
                  <Link href="/enquire" className="btn-gold w-full justify-center mb-3">
                    Send a Message
                  </Link>
                  <a href="mailto:explore@sawlatours.com"
                    className="flex items-center justify-center gap-1.5 text-ivory/55 hover:text-gold transition-colors font-body"
                    style={{ fontSize: "12.5px" }}>
                    explore@sawlatours.com
                  </a>
                </div>

                <div className="border border-sand rounded-card p-5 bg-white">
                  <div className="label-eyebrow mb-4">Quick Facts</div>
                  <div className="space-y-3">
                    {[
                      { label: "Response approach", val: "Acknowledgement within one business day" },
                      { label: "Based in", val: "Addis Ababa, Ethiopia" },
                      { label: "Operating since", val: "2009" },
                      { label: "Tour type", val: "Private & tailor-made only" },
                      { label: "Booking fee", val: "None — free to enquire" },
                    ].map(f => (
                      <div key={f.label} className="flex justify-between gap-4 text-sm">
                        <span className="text-warmgrey font-body">{f.label}</span>
                        <span className="font-body font-medium text-volcanic text-right">{f.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-sand rounded-card p-5 bg-white">
                  <div className="label-eyebrow mb-4">Useful Guides</div>
                  <div className="space-y-2">
                    {[
                      { label: "When to Visit Ethiopia", href: "/ethiopia-travel-guide/when-to-visit-ethiopia" },
                      { label: "Ethiopia Visa Guide", href: "/ethiopia-travel-guide/ethiopia-visa-guide" },
                      { label: "Safety in Ethiopia", href: "/ethiopia-travel-guide/safety-in-ethiopia" },
                      { label: "What to Pack", href: "/ethiopia-travel-guide/what-to-pack-for-ethiopia" },
                    ].map(link => (
                      <Link key={link.href} href={link.href}
                        className="flex items-center justify-between text-sm group">
                        <span className="text-warmgrey group-hover:text-gold transition-colors font-body">{link.label}</span>
                        <svg className="text-gold/50 group-hover:text-gold transition-colors" width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gold-faint border-t border-sand/60">
        <div className="container-max max-w-3xl mx-auto text-center">
          <h2 className="font-display text-volcanic font-light mb-4" style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}>
            Ready to Start Planning?
          </h2>
          <p className="text-warmgrey font-body mb-8 max-w-lg mx-auto leading-relaxed">
            Tell us what draws you to Ethiopia. Our Addis Ababa team will review your request and begin with an honest first conversation — no generic package and no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquire" className="btn-primary">Start a Conversation</Link>
            <Link href="/tours-by-experience" className="btn-ghost">Browse Itineraries</Link>
          </div>
        </div>
      </section>
    </>
  )
}
