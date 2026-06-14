import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { WORK_FAQS, WORKFLOW_STEPS } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'How Sawla Tours Plans a Tailor-Made Ethiopia Journey',
  description: 'See the seven-step Sawla Tours planning and operating process, from traveler brief and route checks to confirmations, preparation and field support.',
  alternates: { canonical: `${SITE.url}/how-we-work` },
  openGraph: { title: 'How We Work | Sawla Tours', description: 'A transparent seven-step process for private Ethiopia journeys.', url: `${SITE.url}/how-we-work` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'How We Work', url: `${SITE.url}/how-we-work` }]),
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'How Sawla Tours Works', url: `${SITE.url}/how-we-work`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Sawla Tours journey planning process', url: `${SITE.url}/how-we-work`, items: WORKFLOW_STEPS.map((step) => ({ name: `${step.number}. ${step.title}`, url: `${SITE.url}/how-we-work#step-${step.number}`, description: step.body })) }),
  faqSchema(WORK_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function HowWeWorkPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="How We Work"
        title="Tailor-Made Does Not Mean"
        accent="Unstructured"
        intro="Every Sawla journey begins with a conversation, but it is built through a disciplined sequence of traveler briefing, route testing, service confirmation, field preparation and on-trip decision-making."
        image="how-sawla-plans-ethiopia-journeys.webp"
        imageAlt="Sawla Tours travel specialist planning a private Ethiopia itinerary"
        current="How We Work"
      />
      <TrustSectionNav current="/how-we-work" />

      <section className="section-padding bg-ivory" aria-labelledby="not-packages-heading">
        <div className="container-max grid lg:grid-cols-2 gap-14 items-start">
          <article>
            <span className="label-eyebrow">The difference</span>
            <h2 id="not-packages-heading" className="heading-display text-display-md text-charcoal mt-2">We Publish Routes. We Design Journeys.</h2>
            <div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6">
              <p>The 25 signature journey ideas on this website are carefully structured examples. They establish route logic, realistic duration, operating status and the experiences that make a trip coherent. They are not fixed packages that every traveler must buy unchanged.</p>
              <p>Your proposal starts from one of those strong foundations—or from a new brief when none is suitable—and then adjusts pace, sequence, accommodation, guiding, vehicles, walking, specialist goals and extensions.</p>
            </div>
          </article>
          <aside className="rounded-card border border-sand bg-white p-7">
            <span className="label-eyebrow">What we need from you</span>
            <h2 className="font-display text-2xl text-charcoal mt-2">A Better Brief Creates a Better Journey</h2>
            <ul className="space-y-3 text-warmgrey leading-6 mt-5">
              {['Exact or approximate travel dates', 'Number of travelers, ages and rooming', 'International arrival and departure plans', 'Interests and specialist priorities', 'Preferred pace and comfort level', 'Mobility, dietary or medical considerations that affect planning', 'Previous Africa or remote-travel experience', 'Budget range or trade-offs you are willing to make'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="steps-heading">
        <div className="container-max">
          <AnimateIn className="max-w-3xl mb-12">
            <span className="label-eyebrow">Seven connected stages</span>
            <h2 id="steps-heading" className="heading-display text-display-md text-charcoal mt-2">From First Message to Field Operation</h2>
            <p className="text-warmgrey text-body-lg leading-8 mt-5">Each stage has a clear output so the trip becomes more specific, more verifiable and easier for the field team to deliver.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-5" staggerDelay={0.05}>
            {WORKFLOW_STEPS.map((step) => (
              <article id={`step-${step.number}`} key={step.number} className="grid md:grid-cols-[100px_minmax(0,1fr)_minmax(240px,.55fr)] gap-6 rounded-card border border-sand bg-ivory p-6 md:p-8">
                <div className="font-display text-gold text-5xl">{step.number}</div>
                <div><h3 className="font-display text-3xl text-charcoal">{step.title}</h3><p className="text-warmgrey leading-7 mt-3">{step.body}</p></div>
                <div className="rounded-card bg-white border border-sand p-5"><span className="text-xs uppercase tracking-[0.13em] text-gold">Output</span><p className="text-charcoal text-sm leading-6 mt-2">{step.output}</p></div>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="decision-heading">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          <div>
            <span className="label-eyebrow text-gold">When the plan changes</span>
            <h2 id="decision-heading" className="heading-display text-display-md mt-2">Adaptation Is Part of Good Operations</h2>
            <p className="text-ivory/70 text-body-lg leading-8 mt-6">Flights move, roads deteriorate, worship runs longer, weather changes and a wildlife plan produces different results than expected. A tailor-made operator should not hide that reality. The job is to build enough operational understanding to make the next decision well.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ['Guide', 'Handles the immediate traveler experience, interpretation and practical discussion in the field.'],
              ['Driver', 'Assesses road and vehicle realities and communicates issues that affect safe movement.'],
              ['Operations', 'Coordinates suppliers, flights, replacements, permits and material route changes.'],
              ['Traveler', 'Shares relevant needs, follows briefings and participates in informed choices when options exist.'],
            ].map(([title, body]) => <div key={title} className="rounded-card border border-white/12 bg-white/5 p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="text-ivory/65 text-sm leading-6 mt-2">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand">
        <div className="container-max flex flex-col lg:flex-row lg:items-center justify-between gap-7">
          <div className="max-w-2xl"><span className="label-eyebrow">Begin with a strong route</span><h2 className="heading-display text-display-sm text-charcoal mt-2">Explore the Signature Journey Collection</h2><p className="text-warmgrey leading-7 mt-3">Choose the closest fit, then tell us what should be slower, deeper, more comfortable or more specialist.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/tours-by-experience" className="btn-primary">Explore Ethiopia journeys</Link><Link href="/enquire" className="btn-secondary">Send your brief</Link></div>
        </div>
      </section>

      <TrustFaq title="How the Planning Process Works" items={WORK_FAQS} />
    </>
  )
}
