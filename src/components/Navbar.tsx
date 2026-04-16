import { useEffect, useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'

import { BrandMark } from './BrandMark'
import { company, navItems, toUrl, type PageKey } from '../content/site'

type NavbarProps = {
  currentPage: PageKey
}

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="18"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="16" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="18"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  )
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

export function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div
        className={clsx(
          'section-shell rounded-full transition-all duration-300',
          isScrolled
            ? 'border border-white/30 bg-white/70 shadow-[0_4px_24px_rgba(17,33,29,0.10)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5"
          data-scrolled={isScrolled ? 'true' : 'false'}
          data-testid="site-nav"
        >
          {/* Brand */}
          <a
            href={toUrl('/')}
            className="min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-2xl"
          >
            <BrandMark compact={isScrolled} />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                (item.href === '/about/' && currentPage === 'about') ||
                (item.href === '/contact/' && currentPage === 'contact')

              return (
                <a
                  key={item.label}
                  className={clsx(
                    'nav-link rounded-full px-4 py-2',
                    active ? 'nav-link--active' : '',
                  )}
                  href={toUrl(item.href)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              className="button-primary hidden text-[13px] lg:inline-flex"
              href={toUrl('/contact/#contact-form')}
            >
              {company.primaryCta}
              <ArrowIcon />
            </a>

            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-brand/15 bg-white/80 text-brand transition-all duration-150 hover:border-brand/30 hover:bg-white lg:hidden"
              onClick={() => setIsOpen((v) => !v)}
              type="button"
            >
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    initial={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <CloseIcon />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HamburgerIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="section-shell mt-2 overflow-hidden rounded-[1.75rem] border border-brand/10 bg-white/97 p-5 shadow-float backdrop-blur-2xl lg:hidden"
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.25, ease: "easeOut" as const }}
          >
            {/* Nav links */}
            <motion.div
              animate="show"
              className="grid gap-2"
              initial="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.045 },
                },
              }}
            >
              {navItems.map((item) => {
                const active =
                  (item.href === '/about/' && currentPage === 'about') ||
                  (item.href === '/contact/' && currentPage === 'contact')

                return (
                  <motion.a
                    key={item.label}
                    className={clsx(
                      'flex items-center justify-between rounded-2xl px-5 py-4 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-brand-soft/50',
                      active ? 'bg-brand-soft/40 text-brand' : '',
                    )}
                    href={toUrl(item.href)}
                    onClick={() => setIsOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.28, ease: "easeOut" as const } },
                    }}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                  </motion.a>
                )
              })}

              {/* CTA */}
              <motion.a
                className="button-primary mt-2 justify-center"
                href={toUrl('/contact/#contact-form')}
                onClick={() => setIsOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
                }}
              >
                {company.primaryCta}
                <ArrowIcon />
              </motion.a>
            </motion.div>

            {/* Mobile footer note */}
            <p className="mt-4 text-center text-[11px] text-muted/60">
              London-focused finance support for growing businesses
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
