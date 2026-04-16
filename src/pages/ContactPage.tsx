import { FaqAccordion } from '../components/FaqAccordion'
import { ContactForm } from '../components/ContactForm'
import { Layout } from '../components/Layout'
import { PageHero } from '../components/PageHero'
import { SectionIntro } from '../components/SectionIntro'
import { contactContent, toUrl } from '../content/site'
import { FinalCtaPanel, ServiceAreaPanel } from '../sections/HomeSections'

export function ContactPage() {
  return (
    <Layout currentPage="contact" bottomCtaHref="#contact-form" bottomCtaLabel="Start an enquiry">
      <PageHero
        eyebrow={contactContent.eyebrow}
        formCta="Start an enquiry"
        formHeading="Start an enquiry"
        formId="contact-form"
        headline={contactContent.headline}
        heroPoints={[
          { label: 'Best first step', value: 'Share the part that feels unclear' },
          { label: 'Enquiry route', value: 'Simple and low pressure' },
          { label: 'Current scope', value: 'Monthly CFO, Reporting, and Cashflow' },
        ]}
        intro={contactContent.intro}
        trustChips={['No public phone number found', 'Direct enquiry flow', 'London-led service area']}
      />

      <section className="section-shell py-12 sm:py-16">
        <SectionIntro
          eyebrow="How to frame the enquiry"
          title="You do not need a polished brief. A short explanation of the current finance challenge is enough."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {contactContent.contactCards.map((item) => (
            <article key={item.title} className="section-frame p-6">
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="body-copy mt-3">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="section-frame p-6">
            <SectionIntro
              eyebrow="What to include"
              title="Four useful prompts for the first message."
              body="These prompts are enough to make the first conversation specific without creating extra admin."
            />
            <ul className="mt-6 grid gap-4 text-sm text-muted">
              {contactContent.whatToShare.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <ContactForm
            buttonLabel="Start an enquiry"
            className="h-full"
            heading="Prefer a second contact route on-page?"
            id="contact-secondary-form"
            tone="surface"
          />
        </div>
      </section>

      <ServiceAreaPanel />

      <section className="section-shell py-12 sm:py-16" id="faq">
        <SectionIntro align="center" eyebrow="FAQ" title="Practical contact questions, answered directly." />
        <div className="mx-auto mt-8 max-w-4xl">
          <FaqAccordion items={contactContent.faq} />
        </div>
      </section>

      <FinalCtaPanel
        body={contactContent.finalCtaBody}
        buttonHref={toUrl('#contact-form')}
        buttonLabel="Start an enquiry"
        title={contactContent.finalCtaTitle}
      />
    </Layout>
  )
}
