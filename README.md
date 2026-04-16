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
- `content/masters/`: reusable SEO master templates
- `content/generated/`: geo pages created by the generator script
- `scripts/generate-geo-pages.mjs`: simple CSV-driven page generator
- `public/`: robots, OG image, favicon

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
