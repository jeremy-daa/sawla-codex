import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import SchemaScript from '@/components/ui/SchemaScript'

export const metadata: Metadata = buildMetadata({
  title: 'Ethiopia Travel FAQ',
  description: 'Answers to Ethiopia travel questions on safety, visas, seasons, flights, Omo Valley photography, Danakil, Simien trekking and packing.',
  path: '/faq',
  keywords: ['Ethiopia travel FAQ', 'Ethiopia travel questions', 'Ethiopia safety', 'Ethiopia visa', 'Ethiopia packing list', 'Sawla Tours FAQ'],
})

const FAQS = [
  {
    q: 'When is the best time to visit Ethiopia?',
    a: 'The main dry season runs October–June, with October–March being optimal for most destinations. The Danakil Depression should only be visited November–February due to extreme heat. Timkat festival (Lalibela) falls on January 19th annually — book 9–12 months ahead for this period. The rainy season (June–September) brings lower prices and dramatic green landscapes, but makes some roads impassable.',
  },
  {
    q: 'Do I need a visa to visit Ethiopia?',
    a: 'Most nationalities can apply for an Ethiopian e-Visa online at www.evisa.gov.et. Processing typically takes 3–5 business days. The tourist visa is valid for 30 days (single entry) and is extendable inside Ethiopia. Visa on arrival is available at Bole International Airport but the e-Visa is recommended to avoid queues. Sawla Tours provides detailed visa guidance specific to your nationality with every booking.',
  },
  {
    q: 'Is Ethiopia safe for tourists?',
    a: 'The main tourist circuits — Lalibela, Gondar, Axum, Simien Mountains, Bale Mountains, Addis Ababa — are safe and visited by thousands of international tourists each year. Sawla Tours monitors conditions continuously and only operates in areas with confirmed stable security. The Danakil requires an armed escort (arranged by us) and should not be visited independently. We brief clients fully on current conditions before departure.',
  },
  {
    q: 'What vaccinations do I need for Ethiopia?',
    a: 'Yellow fever vaccination is required if arriving from a yellow fever endemic country and recommended for all visitors. Also strongly recommended: Hepatitis A and B, typhoid, and ensuring all routine vaccinations are current. Rabies pre-exposure vaccination is recommended for anyone spending time in rural areas or with animal contact. Consult your travel health clinic at least 6–8 weeks before travel.',
  },
  {
    q: 'Is malaria a risk in Ethiopia?',
    a: 'Malaria is present in Ethiopia below approximately 2,000 metres altitude. Prophylaxis is required for: the Omo Valley, Gambella, Danakil/Afar lowlands, Awash National Park, and any other lowland areas. The following are generally malaria-free (above 2,000m): Addis Ababa, Lalibela, Gondar, Simien Mountains, and Bale Mountains. Consult your travel health provider for current prophylaxis recommendations based on your specific itinerary.',
  },
  {
    q: 'Can I see Ethiopian wolves in the wild?',
    a: 'Yes — and more reliably than almost any other rare predator in Africa. The Bale Mountains National Park holds approximately 300 Ethiopian wolves, the world\'s largest single population. In the Web Valley and Sanetti Plateau, wolf sightings are reliable year-round at dawn. Our guides know individual animals by name. Success rate for clients on a 3-night Bale Mountains itinerary is approximately 95%.',
  },
  {
    q: 'What currency does Ethiopia use?',
    a: 'The Ethiopian Birr (ETB) is the local currency. USD and EUR are exchangeable at banks and official bureaux de change (including at Bole Airport on arrival). The official rate is typically better than street rates. Credit cards are accepted at larger hotels in Addis Ababa and some restaurants; cash is essential everywhere else. ATMs are available in Addis and regional capitals (Bahir Dar, Gondar, Mekele, Hawassa) but not in Lalibela, the Simien Mountains, or the Danakil. Carry sufficient ETB cash before leaving major towns.',
  },
  {
    q: 'How much should I budget for tips?',
    a: 'Tipping is an important part of the Ethiopian tourism economy. As a guide: specialist guide ETB 800–1,200 per day; driver ETB 400–600 per day; local site guides ETB 200–400 per visit; hotel room staff ETB 100–150 per night; restaurant staff 10% of bill. Your Sawla Tours guide will advise on appropriate amounts in each specific situation. Budget approximately USD 30–50 per person per day for tips across the journey.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For Timkat (January) and Meskel (September) festival periods, and for peak season (October–January generally), book 9–12 months in advance — accommodation in Lalibela and the Simien Mountains fills completely. For other periods, 2–4 months is usually sufficient. We can occasionally accommodate shorter notice bookings, particularly in the shoulder season (April–June). Contact us to check availability.',
  },
  {
    q: 'What is the food like in Ethiopia?',
    a: 'Ethiopian cuisine is extraordinary and utterly distinctive. The foundation is injera — a fermented teff flatbread that serves as both plate and utensil. Main dishes include doro wat (chicken stew in berbere sauce), tibs (sautéed meat), kitfo (seasoned raw beef), and excellent vegetarian dishes on fasting days (Wednesday, Friday, and throughout Orthodox Lent). The coffee ceremony — three rounds of fresh-brewed coffee, taken with popcorn or bread — is a cultural institution you should participate in wherever offered.',
  },
  {
    q: 'What should I pack for Ethiopia?',
    a: 'Pack for multiple climates in a single trip. You need: warm layers (Simien/Bale nights can be below 5°C), light long-sleeved shirts for sun and insect protection, modest clothing for church visits (shoulders and knees covered), and lightweight clothing for the Danakil or Omo Valley (hot lowlands). Key items: headlamp (essential for Erta Ale night trek), power bank, sunscreen SPF 50+ (hard to find outside Addis), and all prescription medications in sufficient supply plus extra.',
  },
  {
    q: 'Do I need travel insurance?',
    a: 'Yes — travel insurance is mandatory for all Sawla Tours clients. Your policy must cover: medical evacuation (essential for remote areas like the Danakil and Simien Mountains), trip cancellation, and any adventure activities in your itinerary. For the Simien Mountains trek, ensure your policy covers trekking above 3,000m. For the Danakil, confirm your policy covers extreme environment activities. We recommend specialist travel insurance for Ethiopia — standard policies may exclude remote-destination medical evacuation.',
  },
  {
    q: 'Can I photograph the tribal people of the Omo Valley?',
    a: 'Yes, with payment and permission. In the Omo Valley, photography of individuals is a transaction — the standard rate is ETB 50–100 per photograph, paid directly to the person photographed. This is not unusual — it is a legitimate economic arrangement that has developed over decades of tourism. Our guides manage these interactions respectfully and will brief you fully before visits. Group ceremony photography is subject to community permission obtained in advance through our Omo Valley contacts.',
  },
  {
    q: 'How fit do I need to be for the Simien Mountains trek?',
    a: 'The standard 3-day Simien trek (Sankaber → Geech → Chenek) is moderate difficulty. You are walking 12–18km per day on mountain terrain at 3,260–3,640m altitude. Reasonable cardiovascular fitness is required. No technical climbing is involved. The key challenge is altitude — if you are not acclimatised, go slowly on day one. The Ras Dashen summit extension (4,550m) is strenuous and should only be attempted by fit trekkers comfortable with multi-day high-altitude walking.',
  },
  {
    q: 'Is Ethiopia suitable for families with children?',
    a: 'Yes, with appropriate itinerary design. The northern circuit (Lalibela, Gondar, Axum) works very well for families with children 8 and older — the churches and castles are genuinely compelling for curious young people. Wildlife experiences in the Bale Mountains and Simien Mountains are excellent for children who are interested in animals. The Danakil Depression is not recommended for children under 16 due to the extreme conditions. The Omo Valley requires cultural sensitivity briefing appropriate to the child\'s age.',
  },
  {
    q: 'What languages are spoken in Ethiopia?',
    a: 'Ethiopia has over 80 languages. The official federal language is Amharic (written in the unique Ge\'ez script). English is taught in schools and widely understood in the tourism sector, major towns, and by educated Ethiopians. Our specialist guides are fluent English speakers, and we provide guides who speak the local languages in each region (Tigrinya in Tigray, Oromifa in Oromia, local languages in the Omo Valley).',
  },
  {
    q: 'What is the Sawla Films advantage?',
    a: 'Sawla Tours operates Sawla Films — an in-house documentary production company (ethiopiafilmfixer.com). This means our guides have the same visual knowledge and cultural access as professional documentary makers. Our species guides know individual Ethiopian wolves by name and have filmed their behaviour for years. Our destination content is produced from direct fieldwork. No other Ethiopian tour operator has this combination of travel expertise and production capability.',
  },
  {
    q: 'Can you arrange group tours or custom private journeys?',
    a: 'All Sawla Tours journeys are private and entirely custom-built. We do not operate group tours or fixed departures. Every itinerary is designed from scratch around the specific people travelling — their interests, pace, fitness, and what they want to feel. We accommodate groups of any size from solo travellers to large family groups or corporate parties. There is no premium for private travel with us — all our journeys are private by default.',
  },
  {
    q: 'What happens if my flight is delayed or cancelled?',
    a: 'Domestic flight delays and cancellations are a reality of Ethiopia travel. Sawla Tours builds buffer time into all itineraries to accommodate this. Our drivers and guides monitor flight status and adjust logistics accordingly. In the rare event of a significant disruption affecting the overall journey, our team will rebook and reorganise. This is one of the strongest arguments for travelling with an established local operator — we have relationships with airlines and on-the-ground contacts that enable rapid response.',
  },
  {
    q: 'How do I contact Sawla Tours to start planning?',
    a: 'Email us at explore@sawlatours.com, WhatsApp us at +251 970 578 306, or use the enquiry form at sawlatours.com/enquire. We respond within 24 hours every day of the week. The first conversation is free, informal, and non-committal — we want to understand what you are looking for before we say anything about what we offer.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <SchemaScript data={faqSchema} />

      <div className="bg-ivory pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-container mx-auto">

          <div className="max-w-2xl mb-16">
            <p className="label-eyebrow">Travel questions</p>
            <h1 className="font-display font-light text-display-xl text-charcoal mb-6">
              Everything you need<br />to know about <em className="italic text-warmgrey">Ethiopia</em>
            </h1>
            <p className="font-body text-body-md text-warmgrey leading-[1.82]">
              20 questions answered by specialists who have been operating in Ethiopia since 2009. If you do not find your answer here, contact us directly — we respond within 24 hours.
            </p>
          </div>

          <div className="space-y-px bg-sand" role="list">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-ivory"
                role="listitem"
              >
                <summary
                  className="flex items-center justify-between gap-4 px-8 py-6 cursor-pointer list-none"
                  aria-expanded="false"
                >
                  <span className="font-display font-[400] text-[1.125rem] text-charcoal pr-4">{q}</span>
                  <span className="flex-shrink-0 w-6 h-6 border border-sand rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="#C9941A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-8 pb-8">
                  <p className="font-body text-body-md text-warmgrey leading-[1.82] max-w-2xl">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-body text-[0.9375rem] text-warmgrey mb-6">
              Still have a question? We respond within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:explore@sawlatours.com" className="btn-primary-dark">Email Us</a>
              <a href="https://wa.me/251970578306" className="btn-outline-dark group flex items-center gap-2">
                WhatsApp <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
