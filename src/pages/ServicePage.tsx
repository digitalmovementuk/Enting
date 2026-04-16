import { FaqAccordion } from '../components/FaqAccordion'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/PageHero'
import { SectionIntro } from '../components/SectionIntro'
import { company, toUrl, type ServicePageContent } from '../content/site'
import {
  DeliverablesPanel,
  ParagraphSection,
  ServiceProblemGrid,
  ServiceProcessGrid,
  WhyChoosePanel,
} from '../sections/ServiceSections'
import { FinalCtaPanel, ServiceAreaPanel } from '../sections/HomeSections'

type ServicePageProps = {
  content: ServicePageContent
}

export function ServicePage({ content }: ServicePageProps) {
  return (
    <Layout currentPage={content.key} bottomCtaHref="/contact/#contact-form" bottomCtaLabel={content.formCta}>
      <PageHero
        eyebrow={content.eyebrow}
        formCta={content.formCta}
        formHeading={content.formHeading}
        formId={`${content.key}-enquiry`}
        headline={content.headline}
        heroPoints={content.heroPoints}
        intro={content.intro}
        trustChips={content.trustChips}
      />

      <ParagraphSection
        eyebrow="What this covers"
        paragraphs={content.overview}
        title={`${content.title} support is designed to make finance easier to use each month.`}
      />

      <ServiceProblemGrid items={content.problems} />
      <ServiceProcessGrid items={content.process} />
      <DeliverablesPanel deliverables={content.deliverables} outcomes={content.outcomes} />
      <WhyChoosePanel items={content.whyChoose} related={content.related} />

      <section className="section-shell py-12 sm:py-16">
        <div className="section-frame p-6">
          <SectionIntro
            eyebrow="What a first conversation should cover"
            title="A useful initial discussion is usually enough to identify the right support path."
            body="The most helpful starting point is clarity on the current reporting rhythm, where confidence is being lost, and which decisions feel hardest to support with the numbers available today."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="button-primary" href={toUrl('/contact/#contact-form')}>
              {company.primaryCta}
            </a>
            <a className="button-secondary" href={toUrl('/about/')}>
              Read about the working style
            </a>
          </div>
        </div>
      </section>

      <ServiceAreaPanel />

      <section className="section-shell py-12 sm:py-16" id="faq">
        <SectionIntro align="center" eyebrow="FAQ" title={`Common questions about ${content.title} support.`} />
        <div className="mx-auto mt-8 max-w-4xl">
          <FaqAccordion items={content.faq} />
        </div>
      </section>

      <FinalCtaPanel
        body={content.finalCtaBody}
        buttonHref={toUrl('/contact/#contact-form')}
        buttonLabel={content.formCta}
        title={content.finalCtaTitle}
      />
    </Layout>
  )
}
