import { motion, useReducedMotion } from 'framer-motion'

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
  StatsBar,
} from '../sections/HomeSections'

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      width="14"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="13"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
})

export function HomePage() {
  const reduce = useReducedMotion()

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

      {/* Stats bar */}
      <StatsBar />

      {/* Services */}
      <section className="section-shell pb-14 pt-6 sm:pb-20 sm:pt-8" id="services">
        <SectionIntro
          eyebrow="Core services"
          title="Three finance support routes, built around the moments growing businesses lose clarity."
        />
        <div className="mt-10">
          <ServicesOverview items={serviceCards} />
        </div>
      </section>

      {/* Problem section */}
      <section className="section-shell py-14 sm:py-20">
        <SectionIntro
          eyebrow="Why businesses seek this support"
          title="The issue is rarely a missing spreadsheet. It is the absence of a reliable finance rhythm."
        />
        <div className="mt-10">
          <ProblemGrid items={homepageContent.problemCards} />
        </div>
      </section>

      {/* Signature offer highlight */}
      <section className="section-shell py-14 sm:py-20">
        <motion.div
          className="section-frame overflow-hidden"
          {...(reduce ? {} : fadeUp(0.05))}
        >
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:p-12">
            <div>
              <p className="eyebrow">{homepageContent.signatureOffer.label}</p>
              <h2 className="section-title mt-4 text-balance">
                {homepageContent.signatureOffer.title}
              </h2>

              {/* Highlights */}
              <div className="mt-8 grid gap-3">
                {homepageContent.signatureOffer.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-brand-soft/50 px-4 py-3"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <CheckIcon />
                    </span>
                    <span className="text-[13px] font-semibold text-brand">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {homepageContent.signatureOffer.body.map((paragraph) => (
                <p key={paragraph.slice(0, 42)} className="body-copy">
                  {paragraph}
                </p>
              ))}
              <a
                className="button-secondary mt-2 w-fit"
                href={toUrl('/services/monthly-cfo/')}
              >
                Explore Monthly CFO
                <ArrowIcon />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="section-shell py-14 sm:py-20" id="process">
        <SectionIntro
          eyebrow="How it works"
          title="Understand the finance setup, build the right cadence, and use it to support better decisions."
        />
        <div className="mt-10">
          <ProcessTimeline items={homepageContent.process} />
        </div>
      </section>

      {/* Reassurance */}
      <ReassuranceGrid
        eyebrow="Trust and transparency"
        items={homepageContent.reassurance}
        title="The site earns trust through specificity, not inflated claims."
      />

      {/* About + Why choose */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            className="section-frame card-hover p-8"
            {...(reduce ? {} : fadeUp(0))}
          >
            <SectionIntro
              eyebrow="About the business"
              title="Financeable Consulting is built around useful monthly control."
              body={homepageContent.aboutBlurb}
            />
            <a className="button-secondary mt-7 w-fit" href={toUrl('/about/')}>
              Learn more about the approach
              <ArrowIcon />
            </a>
          </motion.article>

          <motion.article
            className="section-frame card-hover p-8"
            {...(reduce ? {} : fadeUp(0.1))}
          >
            <p className="eyebrow">Why choose Financeable</p>
            <h2 className="section-title mt-4">
              A calm, commercially useful finance layer for growth-stage decisions.
            </h2>
            <ul className="mt-7 grid gap-4">
              {homepageContent.whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckIcon />
                  </span>
                  <span className="text-[14px] leading-[1.65] text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <ServiceAreaPanel />

      {/* FAQ */}
      <section className="section-shell py-14 sm:py-20" id="faq">
        <SectionIntro
          align="center"
          eyebrow="FAQ"
          title="Questions that come up before a first finance support conversation."
        />
        <div className="mx-auto mt-10 max-w-3xl">
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
