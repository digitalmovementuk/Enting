import { useState } from 'react'
import { clsx } from 'clsx'

type ContactFormProps = {
  id: string
  heading: string
  buttonLabel: string
  className?: string
  tone?: 'hero' | 'surface'
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
        'section-frame relative overflow-hidden p-5 sm:p-6',
        tone === 'hero' ? 'hero-sheen' : 'bg-surface/90',
        className,
      )}
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-brand/20" />
      <p className="eyebrow">Start with a short brief</p>
      <h2 className="mt-3 text-2xl font-display text-ink">{heading}</h2>
      <p className="body-copy mt-3">
        Share the part of your finance setup that feels hardest to manage right now.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-ink" htmlFor={`${id}-name`}>
          Name
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            className="min-h-11 rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink" htmlFor={`${id}-email`}>
          Work email
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            className="min-h-11 rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="name@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink" htmlFor={`${id}-company`}>
          Company
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            className="min-h-11 rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="Company name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink" htmlFor={`${id}-message`}>
          What do you need support with?
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            className="min-h-[128px] rounded-2xl border border-brand/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="A short outline of the reporting, cash, or finance challenge."
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <button className="button-primary w-full" type="submit">
          {buttonLabel}
        </button>
        <p className="text-sm text-muted">
          Prototype form only. The action stays local and is used here to validate the enquiry flow.
        </p>
        {submitted ? (
          <p className="rounded-2xl bg-brand-soft px-4 py-3 text-sm font-medium text-brand" role="status">
            Thanks. This preview does not send data, but the enquiry flow is wired and tested.
          </p>
        ) : null}
      </div>
    </form>
  )
}
