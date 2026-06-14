interface FaqItem { question: string; answer: string }

export default function HubFaq({ items, title = 'Practical Questions' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="hub-faq-heading">
      <div className="container-max grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="label-eyebrow">Before you decide</span>
          <h2 id="hub-faq-heading" className="heading-display text-display-md text-charcoal">{title}</h2>
          <p className="mt-4 leading-7 text-warmgrey">Clear answers help you compare routes without turning every decision into an enquiry.</p>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.question} className="group rounded-card border border-sand bg-white">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal hover:text-gold">
                <span>{item.question}</span><span className="summary-icon text-xl text-gold" aria-hidden="true">+</span>
              </summary>
              <p className="px-5 pb-5 leading-7 text-warmgrey">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
