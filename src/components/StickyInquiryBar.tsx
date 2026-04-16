import { AnimatePresence, motion } from 'framer-motion'

type StickyInquiryBarProps = {
  visible: boolean
  href: string
  label: string
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
          exit={{ opacity: 0, y: 24 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-[1.5rem] border border-brand/15 bg-brand px-4 py-3 text-white shadow-float backdrop-blur-xl sm:px-5">
            <div className="min-w-0">
              <p className="text-sm font-semibold">Ready to talk through the finance setup?</p>
              <p className="hidden text-sm text-white/70 sm:block">
                Use the enquiry route for a low-pressure first conversation.
              </p>
            </div>
            <a className="button-secondary shrink-0 bg-white text-brand hover:bg-white/95" href={href}>
              {label}
            </a>
          </div>
        </motion.div>
      ) : (
        <div data-testid="sticky-cta" data-visible="false" />
      )}
    </AnimatePresence>
  )
}
