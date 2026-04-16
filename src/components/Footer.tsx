import { BrandMark } from './BrandMark'
import { company, navItems, serviceAreas, serviceCards, toUrl } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-brand px-0 pb-10 pt-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:p-8">
          <div className="space-y-4">
            <BrandMark inverse />
            <p className="max-w-xl text-sm leading-7 text-white/88">{company.footerNote}</p>
            <p className="text-sm text-white/82">{company.locationSummary}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">Navigation</h2>
              <ul className="mt-4 grid gap-3 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a className="transition-colors hover:text-accent-soft" href={toUrl(item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">Services</h2>
              <ul className="mt-4 grid gap-3 text-sm">
                {serviceCards.map((service) => (
                  <li key={service.key}>
                    <a className="transition-colors hover:text-accent-soft" href={toUrl(service.href)}>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">Contact</h2>
              <ul className="mt-4 grid gap-3 text-sm text-white/88">
                <li>{company.contactFallbackLabel}</li>
                <li>{company.serviceAreaLabel}</li>
                <li>
                  <a className="transition-colors hover:text-accent-soft" href={toUrl('/contact/')}>
                    Start an enquiry
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">Service areas</h2>
              <ul className="mt-4 grid gap-2 text-sm text-white/88">
                {serviceAreas.slice(0, 6).map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/85 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Financeable Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href={toUrl('/contact/')} className="hover:text-accent-soft">
              Contact
            </a>
            <a href={toUrl('/privacy/')} className="hover:text-accent-soft">
              Privacy
            </a>
            <a href={toUrl('/legal/')} className="hover:text-accent-soft">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
