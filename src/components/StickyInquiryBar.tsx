import { AnimatePresence, motion } from 'framer-motion'

type StickyInquiryBarProps = {
  visible: boolean
  href: string
  label: string
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

export function StickyInquiryBar({ visible, href, label }: StickyInquiryBarProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3"
          data-testid="sticky-cta"
          data-visible="true"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.32, ease: "easeOut" as const }}
        >
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-brand px-5 py-3.5 shadow-float backdrop-blur-xl">
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-white">Ready to talk through the finance setup?</p>
              <p className="hidden text-[13px] text-white/65 sm:block">
                Low-pressure first conversation. No commitment required.
              </p>
            </div>
            <a
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-brand shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-0.5"
              href={href}
            >
              {label}
              <ArrowIcon />
            </a>
          </div>
        </motion.div>
      ) : (
        <div data-testid="sticky-cta" data-visible="false" />
      )}
    </AnimatePresence>
  )
}
