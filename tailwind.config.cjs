/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './about/index.html',
    './contact/index.html',
    './services/**/*.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-surface)',
        panel: 'var(--color-panel)',
        line: 'var(--color-line)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        brand: 'var(--color-brand)',
        'brand-mid': 'var(--color-brand-mid)',
        'brand-soft': 'var(--color-brand-soft)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-deep': 'var(--color-accent-deep)',
      },
      boxShadow: {
        float: '0 20px 60px rgba(18, 35, 31, 0.14)',
        card: '0 2px 8px rgba(17,33,29,0.04), 0 12px 32px rgba(17,33,29,0.07)',
        lift: '0 4px 12px rgba(17,33,29,0.05), 0 20px 48px rgba(17,33,29,0.12)',
      },
      backgroundImage: {
        'brand-grid':
          'linear-gradient(to right, rgba(26,72,58,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,72,58,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
