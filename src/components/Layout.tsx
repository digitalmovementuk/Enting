import { useEffect, useState, type ReactNode } from 'react'

import { company, toUrl, type PageKey } from '../content/site'
import { FloatingContactButton } from './FloatingContactButton'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { StickyInquiryBar } from './StickyInquiryBar'

type LayoutProps = {
  currentPage: PageKey
  children: ReactNode
  bottomCtaHref?: string
  bottomCtaLabel?: string
}

export function Layout({
  currentPage,
  children,
  bottomCtaHref = '/contact/#contact-form',
  bottomCtaLabel = company.primaryCta,
}: LayoutProps) {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-hero-root]')

    if (!hero) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting)
      },
      {
        threshold: 0.25,
      },
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [currentPage])

  const stickyHref = toUrl(bottomCtaHref)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar currentPage={currentPage} />
      <main className="safe-bottom" id="main-content">
        {children}
      </main>
      <Footer />
      <StickyInquiryBar href={stickyHref} label={bottomCtaLabel} visible={pastHero} />
      <FloatingContactButton href={stickyHref} label={company.floatingCta} visible={pastHero} />
    </>
  )
}
