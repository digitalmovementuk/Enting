import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Enting/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        monthlyCfo: resolve(__dirname, 'services/monthly-cfo/index.html'),
        financialReporting: resolve(__dirname, 'services/financial-reporting/index.html'),
        cashflowManagement: resolve(__dirname, 'services/cashflow-management/index.html'),
      },
    },
  },
})
