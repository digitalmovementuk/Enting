import { SectionIntro } from '../components/SectionIntro'
import { serviceAreas, toUrl, type ServiceCard } from '../content/site'

type CardItem = {
  title: string
  text: string
}

type ProcessItem = {
  step: string
  title: string
  text: string
}

export function ProblemGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="section-frame p-6">
          <p className="eyebrow">Pain point</p>
          <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
          <p className="body-copy mt-3">{item.text}</p>
        </article>
      ))}
    </div>
  )
}

export function ServicesOverview({ items }: { items: ServiceCard[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.key} className="section-frame flex flex-col p-6">
          <p className="eyebrow">{item.label}</p>
          <h3 className="mt-4 text-2xl font-display text-ink">{item.title}</h3>
          <p className="body-copy mt-3">{item.description}</p>
          <p className="mt-4 text-sm font-medium text-brand">{item.benefit}</p>
          <ul className="mt-5 grid gap-2 text-sm text-muted">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a className="button-secondary mt-6 w-fit" href={toUrl(item.href)}>
            View service
          </a>
        </article>
      ))}
    </div>
  )
}

export function ProcessTimeline({ items }: { items: ProcessItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
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
  )
}

export function ReassuranceGrid({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string
  title: string
  body?: string
  items: CardItem[]
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <SectionIntro eyebrow={eyebrow} title={title} body={body} />
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

export function ServiceAreaPanel() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="section-frame grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-8">
        <div>
          <SectionIntro
            eyebrow="Service area"
            title="Built around London demand, with room to support selected UK growth hubs."
            body="The live site is London-led because that is the strongest provided market focus. The wider SEO expansion plan already covers additional districts and Manchester."
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-brand/10 bg-white/80 px-4 py-2 text-sm font-medium text-brand"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCtaPanel({
  title,
  body,
  buttonLabel,
  buttonHref,
}: {
  title: string
  body: string
  buttonLabel: string
  buttonHref: string
}) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="section-frame overflow-hidden bg-brand px-6 py-8 text-white lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow !text-accent-soft">Next step</p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">{body}</p>
          </div>
          <a className="button-secondary w-fit bg-white text-brand hover:bg-white/95" href={buttonHref}>
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
