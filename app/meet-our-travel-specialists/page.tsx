import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import TrustHero from '@/components/trust/TrustHero'
import TrustSectionNav from '@/components/trust/TrustSectionNav'
import TrustFaq from '@/components/trust/TrustFaq'
import { SPECIALIST_FAQS, SPECIALIST_ROLES } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema, itemListSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Meet Sawla Tours Travel Specialists | Ethiopia Trip Planning',
  description: 'Meet the roles behind Sawla Tours journey design, operations and guest experience. Real responsibilities, no invented staff profiles.',
  alternates: { canonical: `${SITE.url}/meet-our-travel-specialists` },
  openGraph: { title: 'Sawla Tours Travel Specialists', description: 'Who plans, checks and supports a private Ethiopia journey.', url: `${SITE.url}/meet-our-travel-specialists` },
}

const schema = [
  breadcrumbSchema([{ name: 'Home', url: SITE.url }, { name: 'Travel Specialists', url: `${SITE.url}/meet-our-travel-specialists` }]),
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Sawla Tours Travel Specialists', url: `${SITE.url}/meet-our-travel-specialists`, dateModified: '2026-06-13', about: { '@id': `${SITE.url}/#travelagency` } },
  itemListSchema({ name: 'Sawla Tours travel planning roles', url: `${SITE.url}/meet-our-travel-specialists`, items: SPECIALIST_ROLES.map((role) => ({ name: role.title, url: `${SITE.url}/meet-our-travel-specialists#${role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, description: role.description })) }),
  faqSchema(SPECIALIST_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))),
]

export default function SpecialistsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <TrustHero
        eyebrow="Journey Design Team"
        title="The People Who Turn"
        accent="Questions Into Routes"
        intro="A Sawla travel specialist does more than assemble hotels and flights. The role is to understand the traveler, test the route, coordinate the right expertise and keep responsibility clear from the first proposal to the final field briefing."
        image="sawla-travel-specialists-hero.webp"
        imageAlt="Sawla Tours Ethiopia travel specialists reviewing a tailor-made itinerary"
        current="Travel Specialists"
      />
      <TrustSectionNav current="/meet-our-travel-specialists" />

      <section className="section-padding bg-ivory" aria-labelledby="role-heading">
        <div className="container-max grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14">
          <article>
            <span className="label-eyebrow">Your lead planning contact</span>
            <h2 id="role-heading" className="heading-display text-display-md text-charcoal mt-2">One Conversation, Supported by a Wider Team</h2>
            <div className="space-y-5 text-warmgrey text-body-lg leading-8 mt-6">
              <p>Your lead specialist should know the whole journey, even when a birding expert, regional coordinator or camp manager contributes to part of it. The traveler should not have to manage the operator’s internal departments.</p>
              <p>The specialist’s responsibility is to keep the trip brief coherent: dates, pace, route, rooming, interests, mobility, dietary needs, budget choices and every assumption that affects the service.</p>
              <p>This page uses role-based profiles intentionally. Named biographies and portraits will only be published after the person’s current role, experience and consent are verified; no fictional team members are used to make the company look larger.</p>
            </div>
          </article>
          <aside className="rounded-card border border-sand bg-white p-7">
            <span className="label-eyebrow">What your specialist should know</span>
            <ul className="space-y-3 text-warmgrey leading-6 mt-5">
              {['Why you are considering Ethiopia now', 'What pace feels restorative rather than rushed', 'Which interests deserve protected time', 'How much road travel you accept', 'Your accommodation priorities', 'Mobility, dietary and communication needs', 'Which experiences are essential, optional or unwanted', 'The budget choices you would rather make'].map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">◆</span><span>{item}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="roles-heading">
        <div className="container-max">
          <AnimateIn className="max-w-3xl mb-12"><span className="label-eyebrow">The planning bench</span><h2 id="roles-heading" className="heading-display text-display-md text-charcoal mt-2">Six Roles That May Shape One Journey</h2><p className="text-warmgrey text-body-lg leading-8 mt-5">Some roles sit in the office, some in the region and some move with the traveler. What matters is that their responsibilities meet in one operating file.</p></AnimateIn>
          <AnimateStagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" staggerDelay={0.06}>
            {SPECIALIST_ROLES.map((role) => (
              <article id={role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={role.title} className="rounded-card border border-sand bg-ivory p-7">
                <span className="text-xs uppercase tracking-[0.13em] text-gold">Best for: {role.bestFor}</span>
                <h3 className="font-display text-2xl text-charcoal mt-3">{role.title}</h3>
                <p className="text-warmgrey leading-7 mt-3">{role.description}</p>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-ivory" aria-labelledby="handoff-heading">
        <div className="container-max grid lg:grid-cols-2 gap-14">
          <div><span className="label-eyebrow text-gold">No disappearing handoff</span><h2 id="handoff-heading" className="heading-display text-display-md mt-2">The Person Who Sells the Dream Must Share the Operating Reality</h2><p className="text-ivory/70 text-body-lg leading-8 mt-6">Before departure, the itinerary is converted into a field brief. That brief must show what the traveler expects, what has been confirmed, what remains conditional and who should be called when a decision cannot be made by the guide alone.</p></div>
          <div className="space-y-4">
            {[
              ['Planning record', 'Traveler profile, route rationale, priorities, rooming, dietary notes and important limitations.'],
              ['Service record', 'Confirmed hotels, transport, guides, local arrangements, permits, camps and supplier contacts.'],
              ['Decision record', 'Conditional activities, alternative routes, escalation contacts and cost-sensitive choices.'],
              ['Traveler record', 'The final itinerary, inclusions, exclusions, terms, practical notes and emergency-assistance information supplied by the traveler.'],
            ].map(([title, body]) => <div key={title} className="rounded-card border border-white/12 bg-white/5 p-6"><h3 className="font-display text-2xl text-gold">{title}</h3><p className="text-ivory/65 leading-6 mt-2">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-gold-faint border-y border-sand">
        <div className="container-max flex flex-col lg:flex-row gap-7 lg:items-center justify-between"><div className="max-w-2xl"><span className="label-eyebrow">Speak with the right person</span><h2 className="heading-display text-display-sm text-charcoal mt-2">Send a Brief, Not Just a Destination Name</h2><p className="text-warmgrey leading-7 mt-3">The more clearly you describe your priorities, the more useful the first response can be.</p></div><div className="flex flex-wrap gap-3"><Link href="/enquire" className="btn-primary">Start planning</Link><Link href="/how-we-work" className="btn-secondary">See the process</Link></div></div>
      </section>

      <TrustFaq title="Working With a Sawla Travel Specialist" items={SPECIALIST_FAQS} />
    </>
  )
}
