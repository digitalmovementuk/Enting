import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import type { FaqItem } from '../content/site'

type FaqAccordionProps = {
  items: FaqItem[]
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      transition={{ duration: 0.28, ease: "easeOut" as const }}
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  )
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`

        return (
          <article
            key={item.question}
            className="section-frame overflow-hidden transition-shadow duration-200"
            style={isOpen ? { boxShadow: '0 4px 16px rgba(17,33,29,0.10), 0 1px 4px rgba(17,33,29,0.06)' } : undefined}
          >
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-150 hover:bg-brand-soft/20"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span
                  className={`text-[1rem] font-semibold leading-snug transition-colors duration-150 ${isOpen ? 'text-brand' : 'text-ink'}`}
                >
                  {item.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                    isOpen
                      ? 'bg-brand text-white'
                      : 'bg-brand-soft/60 text-brand'
                  }`}
                >
                  <ChevronIcon open={isOpen} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  id={panelId}
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: "easeOut" as const }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="border-t border-line px-6 pb-6 pt-4">
                    <p className="body-copy">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        )
      })}
    </div>
  )
}
