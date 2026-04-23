import { FaqAccordion } from '../components/FaqAccordion'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/PageHero'
import { SectionIntro } from '../components/SectionIntro'
import { aboutContent, company, toUrl } from '../content/site'
import { FinalCtaPanel, ProcessTimeline, ServiceAreaPanel } from '../sections/HomeSections'

export function AboutPage() {
  return (
    <Layout currentPage="about">
      <PageHero
        eyebrow={aboutContent.eyebrow}
        formCta={company.primaryCta}
        formHeading="Talk through your finance setup"
        formId="about-enquiry"
        headline={aboutContent.headline}
        heroPoints={[
          { label: 'Approach', value: 'Specific and commercially useful' },
          { label: 'Focus', value: 'Monthly control, not finance theatre' },
          { label: 'Fit', value: 'Growth-stage teams and founder-led businesses' },
        ]}
        intro={aboutContent.intro}
        trustChips={['Monthly CFO', 'Reporting clarity', 'Cash visibility']}
      />

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          eyebrow="Working principles"
          title="The business is designed around finance support that improves decisions, not just output."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {aboutContent.principles.map((item) => (
            <article key={item.title} className="section-frame p-6">
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="body-copy mt-3">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          eyebrow="Best fit"
          title="The model works best when the business has outgrown informal finance handling, but is not yet built for a permanent senior hire."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {aboutContent.fitCards.map((item) => (
            <article key={item.title} className="section-frame p-6">
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="body-copy mt-3">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          eyebrow="Collaboration model"
          title="The advisory process starts by clarifying the current setup, then building the right monthly rhythm."
        />
        <div className="mt-8">
          <ProcessTimeline items={aboutContent.collaborationSteps} />
        </div>
      </section>

      <ServiceAreaPanel />

      <section className="section-shell py-12 sm:py-16" id="faq">
        <SectionIntro align="center" eyebrow="FAQ" title="Questions about the advisory model and site positioning." />
        <div className="mx-auto mt-8 max-w-4xl">
          <FaqAccordion items={aboutContent.faq} />
        </div>
      </section>

      <FinalCtaPanel
        body={aboutContent.finalCtaBody}
        buttonHref={toUrl('/contact/#contact-form')}
        buttonLabel={company.primaryCta}
        title={aboutContent.finalCtaTitle}
      />
    </Layout>
  )
}
