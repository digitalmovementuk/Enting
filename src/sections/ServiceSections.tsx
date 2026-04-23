import { SectionIntro } from '../components/SectionIntro'
import { toUrl } from '../content/site'

type CardItem = {
  title: string
  text: string
}

type ProcessItem = {
  step: string
  title: string
  text: string
}

export function ParagraphSection({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string
  title: string
  paragraphs: string[]
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4">
        {paragraphs.map((paragraph) => (
          <article key={paragraph.slice(0, 60)} className="section-frame p-6">
            <p className="body-copy">{paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ServiceProblemGrid({ items }: { items: CardItem[] }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <SectionIntro
        eyebrow="Common problems"
        title="The work becomes useful when finance is already too important to stay informal."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="section-frame p-6">
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <p className="body-copy mt-3">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ServiceProcessGrid({ items }: { items: ProcessItem[] }) {
  return (
    <section className="section-shell py-12 sm:py-16" id="process">
      <SectionIntro
        eyebrow="How it works"
        title="The support is built around a repeatable finance rhythm, not one-off intervention."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.step} className="section-frame p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            </div>
            <p className="body-copy mt-4">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function DeliverablesPanel({
  deliverables,
  outcomes,
}: {
  deliverables: string[]
  outcomes: string[]
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="section-frame p-6">
          <p className="eyebrow">Deliverables</p>
          <h2 className="section-title mt-4">What the service should produce each month</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="section-frame p-6">
          <p className="eyebrow">Outcomes</p>
          <h2 className="section-title mt-4">What changes when the rhythm is working properly</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export function WhyChoosePanel({
  items,
  related,
}: {
  items: string[]
  related: { label: string; href: string }[]
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <article className="section-frame p-6">
          <SectionIntro
            eyebrow="Why Financeable"
            title="The service is designed to be commercially useful, not just technically correct."
          />
          <ul className="mt-6 grid gap-4 text-sm text-muted">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="section-frame p-6">
          <p className="eyebrow">Related pages</p>
          <h2 className="section-title mt-4">Keep exploring the core service set</h2>
          <div className="mt-6 grid gap-3">
            {related.map((item) => (
              <a
                key={item.href}
                className="rounded-2xl border border-brand/10 bg-white px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-brand/30 hover:text-brand"
                href={toUrl(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
