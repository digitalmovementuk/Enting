import { motion, useReducedMotion } from 'framer-motion'

type SectionIntroProps = {
  eyebrow: string
  title: string
  body?: string
  align?: 'left' | 'center'
}

export function SectionIntro({ eyebrow, title, body, align = 'left' }: SectionIntroProps) {
  const centered = align === 'center'
  const reduce = useReducedMotion()

  const wrapper = centered
    ? 'mx-auto max-w-3xl text-center'
    : 'max-w-3xl'

  return (
    <div className={wrapper}>
      <motion.p
        className="eyebrow"
        initial={reduce ? {} : { opacity: 0, y: 10 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: "easeOut" as const }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="section-title mt-3"
        initial={reduce ? {} : { opacity: 0, y: 14 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.06 }}
      >
        {title}
      </motion.h2>
      {body ? (
        <motion.p
          className="body-copy mt-4"
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
        >
          {body}
        </motion.p>
      ) : null}
    </div>
  )
}
