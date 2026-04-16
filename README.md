# Enting

SEO project scaffold for the `digitalmovementuk` environment.

## Stack

- Vite
- React
- TypeScript
- Static public assets for SEO metadata
- Content folders for master pages and geo-page generation

## Project structure

- `src/`: app shell and brand content
- `seo/`: all SEO project artefacts for research, templates, queues, outputs, deployment, QA and tracking
- `scripts/generate-geo-pages.mjs`: simple CSV-driven page generator
- `public/`: robots, OG image, favicon

## SEO workspace

Everything related to the Enting SEO build belongs inside `seo/`.

- `seo/01_strategy/`: source docs, briefs, architecture notes, inputs from the SEO page builder workflow
- `seo/02_research/`: keyword exports, competitor notes, entity research
- `seo/03_templates/`: master page templates, schema snippets, prompt assets
- `seo/04_build-queue/`: CSV queues for service, modifier and geo combinations
- `seo/05_generated/`: generated master pages, geo pages and CMS import artefacts
- `seo/06_assets/`: SEO visuals and reusable media assets
- `seo/07_deployment/`: WordPress, internal-linking and sitemap deployment artefacts
- `seo/08_qa/`: launch checklists and validation outputs
- `seo/09_tracking/`: GSC, GA4, Semrush and AI-search tracking files

## Commands

```bash
npm install
npm run dev
npm run build
npm run generate:geo
```

## Notes

- The current shell did not have `node` available during setup, so dependencies were not installed here.
- Update the placeholder domain `https://www.enting.de/` before launch if a different domain will be used.
