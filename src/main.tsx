import '@fontsource/fraunces/700.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import type { PageKey } from './content/site'
import { SiteApp } from './pages/SiteApp'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const pageKey = (rootElement.getAttribute('data-page') ?? 'home') as PageKey

createRoot(rootElement).render(
  <StrictMode>
    <SiteApp pageKey={pageKey} />
  </StrictMode>,
)
