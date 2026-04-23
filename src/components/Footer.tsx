import { BrandMark } from './BrandMark'
import { company, navItems, serviceAreas, serviceCards, toUrl } from '../content/site'

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand/15 bg-brand pb-10 pt-16 text-white">
      <div className="section-shell">
        {/* Main footer grid */}
        <div className="grid gap-10 pb-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <BrandMark inverse />
            <p className="max-w-sm text-[14px] leading-[1.75] text-white/75">
              {company.summary}
            </p>
            <p className="text-[12px] text-white/50">{company.locationSummary}</p>

            {/* Contact CTA */}
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:border-white/35 hover:bg-white/18"
              href={toUrl('/contact/')}
            >
              Start an enquiry
              <ArrowIcon />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
              Navigation
            </h2>
            <ul className="grid gap-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="group flex items-center gap-2 text-[14px] text-white/75 transition-colors duration-150 hover:text-white"
                    href={toUrl(item.href)}
                  >
                    <span className="h-[1px] w-3 rounded-full bg-white/25 transition-all duration-150 group-hover:w-4 group-hover:bg-accent" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
              Services
            </h2>
            <ul className="grid gap-3">
              {serviceCards.map((service) => (
                <li key={service.key}>
                  <a
                    className="group flex items-center gap-2 text-[14px] text-white/75 transition-colors duration-150 hover:text-white"
                    href={toUrl(service.href)}
                  >
                    <span className="h-[1px] w-3 rounded-full bg-white/25 transition-all duration-150 group-hover:w-4 group-hover:bg-accent" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
              Service areas
            </h2>
            <ul className="grid gap-2.5">
              {serviceAreas.slice(0, 7).map((area) => (
                <li key={area} className="text-[13px] text-white/60">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Financeable Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {[
              { label: 'Contact', href: '/contact/' },
              { label: 'Privacy', href: '/privacy/' },
              { label: 'Legal', href: '/legal/' },
            ].map((link) => (
              <a
                key={link.label}
                className="transition-colors duration-150 hover:text-white/80"
                href={toUrl(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
