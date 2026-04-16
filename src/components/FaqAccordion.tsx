import { useState } from 'react'

import type { FaqItem } from '../content/site'

type FaqAccordionProps = {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`

        return (
          <article key={item.question} className="section-frame overflow-hidden">
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span className="text-lg font-semibold text-ink">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-brand"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              hidden={!isOpen}
              id={panelId}
              className="border-t border-line px-5 pb-5 pt-4 sm:px-6"
            >
              <p className="body-copy">{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
