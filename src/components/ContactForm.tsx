import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

type ContactFormProps = {
  id: string
  heading: string
  buttonLabel: string
  className?: string
  tone?: 'hero' | 'surface'
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="14"
    >
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function ContactForm({
  id,
  heading,
  buttonLabel,
  className,
  tone = 'hero',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      id={id}
      className={clsx(
        'section-frame relative overflow-hidden p-6 sm:p-7',
        tone === 'hero' ? 'hero-sheen' : 'bg-surface/90',
        className,
      )}
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"
      />

      {/* Header */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Start with a brief
        </span>
        <h2 className="mt-3 font-display text-[1.6rem] leading-[1.15] text-ink">{heading}</h2>
        <p className="body-copy mt-2">
          Share the finance challenge that feels hardest to manage right now.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key="success"
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(26,72,58,0.25)]">
              <CheckCircleIcon />
            </div>
            <div>
              <p className="text-[1.1rem] font-semibold text-ink">Enquiry received</p>
              <p className="body-copy mt-1 max-w-xs">
                This is a preview — no data is sent. The enquiry flow is wired and tested.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            key="form"
          >
            <div className="grid gap-4">
              {/* Name */}
              <label className="grid gap-1.5 text-[13px] font-semibold text-ink" htmlFor={`${id}-name`}>
                Your name
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="form-input"
                  placeholder="First and last name"
                />
              </label>

              {/* Email */}
              <label className="grid gap-1.5 text-[13px] font-semibold text-ink" htmlFor={`${id}-email`}>
                Work email
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="form-input"
                  placeholder="name@company.com"
                />
              </label>

              {/* Company */}
              <label className="grid gap-1.5 text-[13px] font-semibold text-ink" htmlFor={`${id}-company`}>
                Company
                <input
                  id={`${id}-company`}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="form-input"
                  placeholder="Company name"
                />
              </label>

              {/* Message */}
              <label className="grid gap-1.5 text-[13px] font-semibold text-ink" htmlFor={`${id}-message`}>
                What do you need support with?
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder="Outline the reporting, cash, or finance challenge briefly."
                />
              </label>
            </div>

            <div className="mt-5 grid gap-3">
              <button className="button-primary w-full justify-center gap-2" type="submit">
                {buttonLabel}
                <SendIcon />
              </button>
              <p className="text-center text-[11px] text-muted/60">
                No retainer or commitment required. First conversation is exploratory.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
