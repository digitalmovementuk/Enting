import { ContactForm } from './ContactForm'

type PageHeroProps = {
  eyebrow: string
  headline: string
  intro: string
  trustChips: string[]
  heroPoints: { label: string; value: string }[]
  formHeading: string
  formCta: string
  formId: string
}

export function PageHero({
  eyebrow,
  headline,
  intro,
  trustChips,
  heroPoints,
  formHeading,
  formCta,
  formId,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden px-0 pb-12 pt-28 sm:pt-32 lg:pb-20"
      data-hero-root="true"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-grid-fade absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="absolute left-[-6rem] top-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-4rem] h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-10">
          <div data-testid="hero-copy" className="relative text-center lg:text-left">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title mt-4">{headline}</h1>
            <p className="body-copy mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-3xl">{intro}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-brand/10 bg-white/80 px-4 py-2 text-sm font-medium text-brand"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroPoints.map((item) => (
                <article key={item.label} className="section-frame bg-white/70 p-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand/72">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-ink">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div data-testid="hero-form">
            <ContactForm buttonLabel={formCta} heading={formHeading} id={formId} />
          </div>
        </div>
      </div>
    </section>
  )
}
