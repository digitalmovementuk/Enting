import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type FloatingContactButtonProps = {
  visible: boolean
  href: string
  label: string
}

export function FloatingContactButton({ visible, href, label }: FloatingContactButtonProps) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: 1,
                  scale: [1, 1.02, 1],
                }
          }
          aria-label="Open quick enquiry"
          className="fixed bottom-[calc(7.25rem+env(safe-area-inset-bottom))] right-4 z-[55] inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-float transition-transform duration-300 hover:-translate-y-0.5 lg:bottom-[calc(7rem+env(safe-area-inset-bottom))] lg:right-6"
          data-testid="floating-contact-button"
          exit={{ opacity: 0, scale: 0.92 }}
          href={href}
          initial={{ opacity: 0, scale: 0.92 }}
          transition={{
            duration: reduceMotion ? 0.2 : 1.8,
            ease: 'easeOut',
            repeat: reduceMotion ? 0 : Infinity,
          }}
        >
          {label}
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
