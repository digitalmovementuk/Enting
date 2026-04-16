import { FaqAccordion } from '../components/FaqAccordion'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/PageHero'
import { SectionIntro } from '../components/SectionIntro'
import { company, homepageContent, serviceCards, toUrl } from '../content/site'
import {
  FinalCtaPanel,
  ProblemGrid,
  ProcessTimeline,
  ReassuranceGrid,
  ServiceAreaPanel,
  ServicesOverview,
} from '../sections/HomeSections'

export function HomePage() {
  return (
    <Layout currentPage="home">
      <PageHero
        eyebrow={homepageContent.eyebrow}
        formCta={company.primaryCta}
        formHeading="Book a consultation"
        formId="home-enquiry"
        headline={homepageContent.headline}
        heroPoints={homepageContent.heroPoints}
        intro={homepageContent.intro}
        trustChips={homepageContent.trustChips}
      />

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          body="The site leads with the three core offers so prospects can quickly understand what Financeable Consulting actually does."
          eyebrow="Core services"
          title="Three finance support routes, built around the moments where growing businesses usually lose clarity."
        />
        <div className="mt-8" id="services">
          <ServicesOverview items={serviceCards} />
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          eyebrow="Why businesses look for this support"
          title="The issue is rarely a missing spreadsheet. It is the absence of a reliable finance rhythm."
        />
        <div className="mt-8">
          <ProblemGrid items={homepageContent.problemCards} />
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="section-frame grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <p className="eyebrow">{homepageContent.signatureOffer.label}</p>
            <h2 className="section-title mt-4">{homepageContent.signatureOffer.title}</h2>
          </div>
          <div className="grid gap-4">
            {homepageContent.signatureOffer.body.map((paragraph) => (
              <p key={paragraph.slice(0, 42)} className="body-copy">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              {homepageContent.signatureOffer.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand/10 bg-brand-soft/50 px-4 py-2 text-sm font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
            <a className="button-secondary w-fit" href={toUrl('/services/monthly-cfo/')}>
              Explore Monthly CFO
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16" id="process">
        <SectionIntro
          eyebrow="Process"
          title="The model is simple: understand the finance setup, build the right cadence, and use it to support better decisions."
        />
        <div className="mt-8">
          <ProcessTimeline items={homepageContent.process} />
        </div>
      </section>

      <ReassuranceGrid
        body="No safely attributable public Google reviews were found, so the trust layer is built around clear service scope, practical process, and factual positioning."
        eyebrow="Trust and reassurance"
        items={homepageContent.reassurance}
        title="The site earns trust through specificity, not inflated claims."
      />

      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="section-frame p-6">
            <SectionIntro
              eyebrow="About the business"
              title="Financeable Consulting is framed around useful monthly control."
              body={homepageContent.aboutBlurb}
            />
            <a className="button-secondary mt-6 w-fit" href={toUrl('/about/')}>
              Learn more about the approach
            </a>
          </article>
          <article className="section-frame p-6">
            <p className="eyebrow">Why choose Financeable</p>
            <h2 className="section-title mt-4">A calm, commercially useful finance layer for growth-stage decisions.</h2>
            <ul className="mt-6 grid gap-4 text-sm text-muted">
              {homepageContent.whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <ServiceAreaPanel />

      <section className="section-shell py-12 sm:py-16" id="faq">
        <SectionIntro
          align="center"
          eyebrow="FAQ"
          title="Questions that usually come up before a first finance support conversation."
        />
        <div className="mx-auto mt-8 max-w-4xl">
          <FaqAccordion items={homepageContent.faq} />
        </div>
      </section>

      <FinalCtaPanel
        body={homepageContent.finalCtaBody}
        buttonHref={toUrl('/contact/#contact-form')}
        buttonLabel={company.primaryCta}
        title={homepageContent.finalCtaTitle}
      />
    </Layout>
  )
}
