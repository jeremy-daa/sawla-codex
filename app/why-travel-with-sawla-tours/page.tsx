import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { WHY_FAQS, WHY_SAWLA_REASONS } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Why Travel with Sawla Tours | Local Ethiopia Specialists',
  description: 'See how Sawla Tours designs and operates private Ethiopia journeys: local planning, honest route status, specialist guides, field logistics and clear limits.',
  alternates: { canonical: `${SITE.url}/why-travel-with-sawla-tours` },
  openGraph: { title: 'Why Travel with Sawla Tours', description: 'Eight practical reasons to choose an Ethiopia-based private tour operator.', url: `${SITE.url}/why-travel-with-sawla-tours` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Why Travel with Sawla Tours', url: `${SITE.url}/why-travel-with-sawla-tours` }]),
  {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE.url}/why-travel-with-sawla-tours#webpage`,
    name: 'Why Travel with Sawla Tours', url: `${SITE.url}/why-travel-with-sawla-tours`, dateModified: '2026-06-13',
    description: 'Evidence-led reasons to choose Sawla Tours for a private Ethiopia journey.',
    about: { '@id': `${SITE.url}/#travelagency` },
  },
  itemListSchema({ name: 'Why travelers choose Sawla Tours', url: `${SITE.url}/why-travel-with-sawla-tours`, items: WHY_SAWLA_REASONS.map((reason) => ({ name: reason.title, url: `${SITE.url}/why-travel-with-sawla-tours#${reason.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: reason.body })) }),
  faqSchema(WHY_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function WhyTravelPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Why Sawla Tours"
        title="Choose the Team Behind"
        accent="the Itinerary"
        intro="A beautiful route is only the visible layer. The real test is who checks it, who delivers it, what they tell you before payment and how they respond when Ethiopia does not follow the original schedule."
        image="why-sawla-field-team-hero.webp"
        imageAlt="Sawla Tours guide and driver supporting a private Ethiopia journey"
        current="Why Travel with Us"
      />
      <TrustSectionNav current="/why-travel-with-sawla-tours" />

      <section className="section-padding bg-ivory" aria-labelledby="direct-answer-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 items-start">
          <article>
            <span className="label-eyebrow">The direct answer</span>
            <h2 id="direct-answer-heading" className="heading-display text-display-md text-charcoal mt-2">Why Choose Sawla Tours for Ethiopia?</h2>
            <div className="mt-6 space-y-5 text-warmgrey text-body-lg leading-8">
              <p>Choose Sawla Tours when you want a private Ethiopia journey planned and operated by an Ethiopia-based team, with the route tested against current conditions and the limitations explained as carefully as the highlights.</p>
              <p>The value is not a claim that a local operator is automatically better than every international company. It is the ability to connect the traveler’s brief directly to local operations, regional expertise and field decisions without passing responsibility through several unrelated layers.</p>
            </div>
          </article>
          <aside className="rounded-card border border-sand bg-white p-7">
            <span className="label-eyebrow">Good fit</span>
            <h2 className="font-display text-2xl text-charcoal mt-2">Sawla may suit you when…</h2>
            <ul className="space-y-3 mt-5 text-warmgrey leading-6">
              {['You prefer a private route over a fixed coach departure.', 'You want honest advice when a famous destination is not sensible for your dates.', 'You value guides and regional specialists as interpreters, not only escorts.', 'You are comfortable with a journey being adapted when local conditions change.', 'You want one operator to connect hotels, vehicles, guides, permits and remote logistics.'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="reasons-heading">
        <div className="container-max">
          <AnimateIn className="max-w-3xl mb-12">
            <span className="label-eyebrow">Evidence before adjectives</span>
            <h2 id="reasons-heading" className="heading-display text-display-md text-charcoal mt-2">Eight Reasons—Each With a Practical Test</h2>
            <p className="text-warmgrey text-body-lg leading-8 mt-5">Instead of asking whether an operator sounds passionate, ask what process or document demonstrates the promise.</p>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.05}>
            {WHY_SAWLA_REASONS.map((reason, index) => (
              <article id={reason.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={reason.title} className="rounded-card border border-sand bg-ivory p-7">
                <div className="text-gold font-display text-3xl">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-2xl text-charcoal mt-2">{reason.title}</h3>
                <p className="text-warmgrey leading-7 mt-3">{reason.body}</p>
                <div className="border-t border-sand mt-5 pt-4 text-sm text-charcoal"><strong>Practical proof:</strong> {reason.proof}</div>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="compare-heading">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <span className="label-eyebrow text-gold">How to compare operators</span>
            <h2 id="compare-heading" className="heading-display text-display-md mt-2">Questions More Useful Than “Who Is Best?”</h2>
          </div>
          <div className="overflow-x-auto rounded-card border border-white/12">
            <table className="min-w-[820px] w-full text-left">
              <thead className="bg-white/8 text-gold text-xs uppercase tracking-[0.12em]">
                <tr><th className="p-5">Ask</th><th className="p-5">A strong answer should show</th><th className="p-5">Warning sign</th></tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm leading-6">
                {[
                  ['Who is responsible on the ground?', 'Named planning, operations and field contacts with a clear escalation path.', 'Responsibility moves between agents and suppliers when something changes.'],
                  ['How current is the route?', 'Date-specific checks for access, transport, opening arrangements and local conditions.', 'The same itinerary is sold year after year without operational caveats.'],
                  ['What exactly is private?', 'Vehicle, guiding, activities and any shared services identified in writing.', 'The word private appears in marketing but is undefined in the proposal.'],
                  ['How are specialist guides selected?', 'Matching by subject, region, language and traveler goals.', 'Every guide is described as expert in every part of Ethiopia.'],
                  ['What is not guaranteed?', 'Wildlife, ceremonies, weather, markets, flights and access are clearly conditional.', 'Uncontrollable experiences are sold as certain.'],
                  ['What happens after payment?', 'Service confirmations, pre-departure guidance and on-trip support are explained.', 'The operator becomes less responsive once the deposit is received.'],
                ].map(([ask, strong, warning]) => <tr key={ask}><th scope="row" className="p-5 font-medium text-ivory">{ask}</th><td className="p-5 text-ivory/70">{strong}</td><td className="p-5 text-ivory/55">{warning}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand">
        <div className="container-max grid md:grid-cols-3 gap-5">
          {[
            ['See the planning process', 'From traveler brief to field operation.', '/how-we-work'],
            ['Review safety and assurance', 'How route checks, decisions and incident response work.', '/safety-and-travel-assurance'],
            ['Explore 25 signature journey ideas', 'Use a strong route as the starting point for your private trip.', '/tours-by-experience'],
          ].map(([title, body, href]) => <Link key={href} href={href} className="rounded-card border border-sand bg-white p-6 card-hover"><h2 className="font-display text-2xl text-charcoal">{title}</h2><p className="text-warmgrey text-sm leading-6 mt-2">{body}</p><span className="inline-block text-gold text-xs uppercase tracking-wider mt-4">Continue →</span></Link>)}
        </div>
      </section>

      <TrustFaq title="Choosing Sawla Tours: Questions and Straight Answers" items={WHY_FAQS} />

      <section className="section-padding bg-charcoal text-center text-ivory">
        <div className="container-max max-w-3xl">
          <span className="label-eyebrow text-gold">No pressure, no generic package pitch</span>
          <h2 className="heading-display text-display-md mt-2">Test the Difference With One Planning Conversation</h2>
          <p className="text-ivory/70 leading-7 mt-5 mb-8">Tell us what you want from Ethiopia, what you want to avoid and how you prefer to travel. The first useful answer should be honest about both possibility and limitation.</p>
          <Link href="/enquire" className="btn-primary">Start a private planning conversation →</Link>
        </div>
      </section>
    </>
  )
}
