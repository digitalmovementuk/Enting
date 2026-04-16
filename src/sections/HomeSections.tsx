import { type Transition, motion, useReducedMotion } from 'framer-motion'

import { SectionIntro } from '../components/SectionIntro'
import { serviceAreas, toUrl, type ServiceCard } from '../content/site'

/* ─── Shared animation variants ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut', delay } as Transition,
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut', delay } as Transition,
})

/* ─── Inline SVG icons ───────────────────────────────────────────────────── */
function IconCFO({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="22"
    >
      <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2Z" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M18 8l2 2-2 2" />
      <path d="M20 10H14" />
    </svg>
  )
}

function IconReporting({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="22"
    >
      <rect height="18" rx="3" ry="3" width="16" x="4" y="3" />
      <path d="M8 7h8M8 11h8M8 15h5" />
      <path d="M16 17l2 2 4-4" />
    </svg>
  )
}

function IconCashflow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="22"
    >
      <path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M17 7l2-3M19 17l-2-3" />
    </svg>
  )
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function IconWarning({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  )
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="14"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'monthly-cfo': IconCFO,
  'financial-reporting': IconReporting,
  'cashflow-management': IconCashflow,
}

/* ─── Types ──────────────────────────────────────────────────────────────── */
type CardItem = { title: string; text: string }
type ProcessItem = { step: string; title: string; text: string }

/* ─── Components ─────────────────────────────────────────────────────────── */

export function StatsBar() {
  const reduce = useReducedMotion()
  const stats = [
    { value: '3', label: 'Core service lines' },
    { value: '£0', label: 'Setup or retainer commitment' },
    { value: 'Monthly', label: 'Operating cadence' },
    { value: 'London', label: 'Primary market focus' },
  ]

  return (
    <section aria-label="Key figures" className="section-shell py-10 sm:py-14">
      <motion.div
        className="section-frame overflow-hidden"
        {...(reduce ? {} : fadeIn(0.1))}
      >
        <div className="grid divide-y divide-line sm:divide-x sm:divide-y-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-2 px-8 py-8"
              {...(reduce ? {} : fadeUp(i * 0.08))}
            >
              <span className="stat-block__value">{stat.value}</span>
              <span className="stat-block__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export function ServicesOverview({ items }: { items: ServiceCard[] }) {
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {items.map((item, i) => {
        const Icon = serviceIconMap[item.key] ?? IconCFO
        return (
          <motion.article
            key={item.key}
            className="section-frame card-hover group flex flex-col p-7"
            {...(reduce ? {} : fadeUp(i * 0.1))}
          >
            {/* Icon badge */}
            <div className="service-icon mb-5">
              <Icon className="text-brand" />
            </div>

            <p className="eyebrow">{item.label}</p>
            <h3 className="mt-3 font-display text-[1.35rem] leading-[1.2] text-ink">
              {item.title}
            </h3>
            <p className="body-copy mt-3 flex-1">{item.description}</p>

            {/* Benefit callout */}
            <div className="mt-5 rounded-xl bg-brand-soft/50 px-4 py-3">
              <p className="text-[13px] font-semibold leading-snug text-brand">{item.benefit}</p>
            </div>

            {/* Bullets */}
            <ul className="mt-5 grid gap-2.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-[13px] text-muted">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              className="button-secondary mt-6 w-fit text-[13px]"
              href={toUrl(item.href)}
            >
              View service
              <IconArrow className="ml-1 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.article>
        )
      })}
    </div>
  )
}

export function ProblemGrid({ items }: { items: CardItem[] }) {
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          className="section-frame card-hover p-7"
          {...(reduce ? {} : fadeUp(i * 0.1))}
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <IconWarning className="h-5 w-5" />
          </div>
          <p className="eyebrow text-accent-deep">Challenge</p>
          <h3 className="mt-3 text-[1.1rem] font-semibold leading-snug text-ink">{item.title}</h3>
          <p className="body-copy mt-3">{item.text}</p>
        </motion.article>
      ))}
    </div>
  )
}

export function ProcessTimeline({ items }: { items: ProcessItem[] }) {
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item, i) => (
        <motion.article
          key={item.step}
          className="section-frame card-hover relative p-7"
          {...(reduce ? {} : fadeUp(i * 0.1))}
        >
          {/* Step number badge */}
          <div className="mb-5 flex items-center gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-bold tracking-widest text-white shadow-[0_4px_14px_rgba(26,72,58,0.30)]">
              {item.step}
            </span>
            {/* Connector dot row */}
            <div className="flex flex-1 items-center gap-1">
              <div className="h-[2px] flex-1 rounded-full bg-brand/15" />
              <div className="h-1.5 w-1.5 rounded-full bg-brand/30" />
            </div>
          </div>
          <h3 className="text-[1.1rem] font-semibold leading-snug text-ink">{item.title}</h3>
          <p className="body-copy mt-3">{item.text}</p>
        </motion.article>
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
  const reduce = useReducedMotion()

  return (
    <section className="section-shell py-12 sm:py-16">
      <SectionIntro eyebrow={eyebrow} title={title} body={body} />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            className="section-frame card-hover p-7"
            {...(reduce ? {} : fadeUp(i * 0.1))}
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <IconCheck className="h-5 w-5" />
            </div>
            <h3 className="text-[1.1rem] font-semibold leading-snug text-ink">{item.title}</h3>
            <p className="body-copy mt-3">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function ServiceAreaPanel() {
  const reduce = useReducedMotion()

  return (
    <section className="section-shell py-12 sm:py-16">
      <motion.div
        className="section-frame overflow-hidden"
        {...(reduce ? {} : fadeIn(0.1))}
      >
        <div className="grid gap-8 p-7 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <IconPin className="h-5 w-5" />
            </div>
            <p className="eyebrow">Service area</p>
            <h2 className="section-title mt-3">
              London-led. Built for growth hubs across the UK.
            </h2>
            <p className="body-copy mt-4">
              Primary focus is London and its key business districts, with support extending to selected UK growth markets.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-brand/12 bg-white/80 px-4 py-2 text-[13px] font-medium text-brand transition-colors duration-150 hover:border-brand/30 hover:bg-brand-soft/60"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
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
  const reduce = useReducedMotion()

  return (
    <section className="section-shell py-12 sm:py-16">
      <motion.div
        className="relative overflow-hidden rounded-[1.75rem] bg-brand px-8 py-12 text-white lg:px-14 lg:py-16"
        {...(reduce ? {} : fadeUp(0.05))}
      >
        {/* Decorative background elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 font-display text-[12rem] font-bold leading-none text-white/[0.03] select-none">
            FC
          </div>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow !text-accent-soft">Ready to start</p>
            <h2 className="mt-4 max-w-2xl font-display text-[1.85rem] leading-[1.12] text-white sm:text-[2.4rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-white/75">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-[13px] font-semibold text-brand shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.20)]"
              href={buttonHref}
            >
              {buttonLabel}
              <IconArrow className="opacity-60" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
