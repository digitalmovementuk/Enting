import { useEffect, useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

import { BrandMark } from './BrandMark'
import { company, navItems, toUrl, type PageKey } from '../content/site'

type NavbarProps = {
  currentPage: PageKey
}

export function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div
        className={clsx(
          'section-shell rounded-full transition-all duration-300',
          isScrolled ? 'glass-panel shadow-card' : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5"
          data-scrolled={isScrolled ? 'true' : 'false'}
          data-testid="site-nav"
        >
          <a href={toUrl('/')} className="min-w-0">
            <BrandMark compact={isScrolled} />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === '/about/' && currentPage === 'about'
                  ? true
                  : item.href === '/contact/' && currentPage === 'contact'
                    ? true
                    : false

              return (
                <a
                  key={item.label}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-brand',
                    active ? 'text-brand' : 'text-muted',
                  )}
                  href={toUrl(item.href)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <a className="button-primary hidden lg:inline-flex" href={toUrl('/contact/#contact-form')}>
              {company.primaryCta}
            </a>
            <button
              aria-label="Open navigation menu"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand/15 bg-white/80 text-brand lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              <span aria-hidden="true" className="text-lg font-semibold">
                {isOpen ? '×' : '☰'}
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="section-shell mt-3 overflow-hidden rounded-[1.75rem] border border-brand/10 bg-white/95 p-5 shadow-float backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.22, ease: 'easeOut' }}
          >
            <motion.div
              animate="show"
              className="grid gap-3"
              initial="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.05 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  className="rounded-2xl border border-brand/8 bg-brand-soft/40 px-4 py-4 text-base font-medium text-ink"
                  href={toUrl(item.href)}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                className="button-primary mt-2"
                href={toUrl('/contact/#contact-form')}
                onClick={() => setIsOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {company.primaryCta}
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
