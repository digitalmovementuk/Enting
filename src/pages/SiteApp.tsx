import type { PageKey } from '../content/site'
import { servicePageContent } from '../content/site'
import { AboutPage } from './AboutPage'
import { ContactPage } from './ContactPage'
import { HomePage } from './HomePage'
import { ServicePage } from './ServicePage'

type SiteAppProps = {
  pageKey: PageKey
}

export function SiteApp({ pageKey }: SiteAppProps) {
  switch (pageKey) {
    case 'monthly-cfo':
      return <ServicePage content={servicePageContent['monthly-cfo']} />
    case 'financial-reporting':
      return <ServicePage content={servicePageContent['financial-reporting']} />
    case 'cashflow-management':
      return <ServicePage content={servicePageContent['cashflow-management']} />
    case 'about':
      return <AboutPage />
    case 'contact':
      return <ContactPage />
    case 'home':
    default:
      return <HomePage />
  }
}
