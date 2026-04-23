# Financeable Consulting Preview

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Playwright + axe-core
- Static public assets for metadata, sitemap, icons, and GitHub Pages deployment

## Project structure

- `src/`: Financeable Consulting page components, layouts, content, and section modules
- `about/`, `contact/`, `services/`: multi-page HTML entries for the live site
- `workspace/`: SEO research, page matrix, strategy, briefs, and long-form source drafts
- `public/`: metadata assets, icons, sitemap, manifest, and placeholder legal pages
- `scripts/generate-geo-pages.mjs`: preserved generator for the later landing-page buildout
- `scripts/generate-icons.mjs`: raster icon generation from the SVG brand assets
- `tests/`: Playwright checks, screenshots, and Lighthouse reports

## Live site scope

The published website contains:

- homepage
- Monthly CFO page
- Financial Reporting page
- Cashflow Management page
- About page
- Contact page

## Commands

```bash
npm install
npm run generate:icons
npm run dev
npm run build
npm run preview -- --host 127.0.0.1 --port 4217
npm run test:e2e
npm run lighthouse
npm run generate:geo
```

## Notes

- Canonical URLs and sitemap currently target `https://digitalmovementuk.github.io/Enting/`.
- Public Google reviews were not found during research, so the site uses a reassurance section instead of a review carousel.
- Legal and privacy pages are placeholders until approved business/legal copy is available.
