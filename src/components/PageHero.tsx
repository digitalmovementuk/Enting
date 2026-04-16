import { motion, useReducedMotion } from 'framer-motion'

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

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const itemFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

const formFade = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.3 } },
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
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
  const reduce = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden pb-14 pt-[7.5rem] sm:pt-32 lg:pb-24"
      data-hero-root="true"
    >
      {/* Background decorative layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-fade absolute inset-0 opacity-60" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#faf6ef]/80 to-transparent" />
        {/* Colour blobs */}
        <div className="absolute -left-20 top-16 h-80 w-80 rounded-full bg-brand/8 blur-[80px]" />
        <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-accent/12 blur-[70px]" />
        <div className="absolute left-1/3 top-1/4 h-48 w-48 rounded-full bg-accent-soft/30 blur-[60px]" />
      </div>

      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          {/* ── Left: copy ──────────────────────────── */}
          <motion.div
            animate={reduce ? {} : 'animate'}
            className="text-center lg:text-left"
            data-testid="hero-copy"
            initial={reduce ? {} : 'initial'}
            variants={reduce ? {} : stagger}
          >
            {/* Eyebrow */}
            <motion.div variants={reduce ? {} : itemFade}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-brand shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="display-title mt-6"
              variants={reduce ? {} : itemFade}
            >
              {headline}
            </motion.h1>

            {/* Intro */}
            <motion.p
              className="body-copy mx-auto mt-6 max-w-2xl lg:mx-0"
              variants={reduce ? {} : itemFade}
            >
              {intro}
            </motion.p>

            {/* Trust chips */}
            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
              variants={reduce ? {} : itemFade}
            >
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand/12 bg-white/75 px-4 py-1.5 text-[12px] font-medium text-brand backdrop-blur-sm"
                >
                  <CheckIcon />
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* Hero stat points */}
            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-3"
              variants={reduce ? {} : itemFade}
            >
              {heroPoints.map((item) => (
                <article
                  key={item.label}
                  className="section-frame flex flex-col gap-2 p-5 text-left transition-shadow duration-200 hover:shadow-lift"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand/70">
                    {item.label}
                  </p>
                  <p className="text-[15px] font-semibold leading-snug text-ink">{item.value}</p>
                </article>
              ))}
            </motion.div>

            {/* Divider / meta note */}
            <motion.p
              className="mt-8 text-[12px] text-muted/70 lg:mt-6"
              variants={reduce ? {} : itemFade}
            >
              No retainer commitment required to start a conversation.
            </motion.p>
          </motion.div>

          {/* ── Right: form ─────────────────────────── */}
          <motion.div
            animate={reduce ? {} : 'animate'}
            className="lg:sticky lg:top-28"
            data-testid="hero-form"
            initial={reduce ? {} : 'initial'}
            variants={reduce ? {} : formFade}
          >
            <ContactForm buttonLabel={formCta} heading={formHeading} id={formId} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
