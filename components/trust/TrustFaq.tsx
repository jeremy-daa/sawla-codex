import type { TrustFaq as TrustFaqItem } from '@/data/trustArchitecture'

export default function TrustFaq({ title = 'Frequently Asked Questions', items }: { title?: string; items: TrustFaqItem[] }) {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="trust-faq-heading">
      <div className="container-max max-w-4xl">
        <div className="text-center mb-10">
          <span className="label-eyebrow">Clear answers</span>
          <h2 id="trust-faq-heading" className="heading-display text-display-md text-charcoal mt-2">{title}</h2>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.question} className="group rounded-card border border-sand bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 md:p-6 font-medium text-charcoal hover:text-gold transition-colors">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-6 md:px-6 text-warmgrey leading-7">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
