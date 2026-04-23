import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const screenshotsDir = 'tests/screenshots'
const siteRoot = 'http://127.0.0.1:4217/Enting/'

test.describe('Financeable Consulting release checks', () => {
  test('homepage structure, sticky behaviour, and screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(siteRoot)

    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeVisible()
    await expect(page.getByTestId('sticky-cta')).toHaveAttribute('data-visible', 'false')

    const heroCopy = page.getByTestId('hero-copy')
    const textAlign = await heroCopy.evaluate((element) => getComputedStyle(element).textAlign)
    expect(textAlign).toBe('center')

    const initialScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    expect(initialScrollWidth).toBeTruthy()

    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/home-mobile.png` })

    await page.evaluate(() => document.getElementById('services')?.scrollIntoView())
    await expect(page.getByTestId('sticky-cta')).toHaveAttribute('data-visible', 'true')

    const floating = page.getByTestId('floating-contact-button')
    await expect(floating).toBeVisible()
    const stickyBox = await page.getByTestId('sticky-cta').boundingBox()
    const floatingBox = await floating.boundingBox()
    expect(stickyBox).not.toBeNull()
    expect(floatingBox).not.toBeNull()

    if (stickyBox && floatingBox) {
      expect(floatingBox.y + floatingBox.height).toBeLessThanOrEqual(stickyBox.y - 8)
    }

    await page.evaluate(() => document.getElementById('faq')?.scrollIntoView())
    await expect(page.getByRole('heading', { name: /Questions that usually come up/i })).toBeVisible()

    const nav = page.getByTestId('site-nav')
    await expect(nav).toHaveAttribute('data-scrolled', 'true')

    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight }))
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Contact' }).first()).toBeVisible()
  })

  test('desktop hero layout and service page screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto(siteRoot)

    const heroCopyBox = await page.getByTestId('hero-copy').boundingBox()
    const heroFormBox = await page.getByTestId('hero-form').boundingBox()

    expect(heroCopyBox).not.toBeNull()
    expect(heroFormBox).not.toBeNull()

    if (heroCopyBox && heroFormBox) {
      expect(heroCopyBox.x).toBeLessThan(heroFormBox.x)
    }

    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/home-laptop.png` })

    await page.goto(`${siteRoot}services/monthly-cfo/`)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('heading', { name: 'Common questions about Monthly CFO support.' })).toBeVisible()
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/monthly-cfo-laptop.png` })
  })

  test('desktop-wide screenshot, contact page, and accessibility', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 960 })
    await page.goto(siteRoot)
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/home-desktop.png` })

    await page.goto(`${siteRoot}contact/`)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('heading', { name: 'Practical contact questions, answered directly.' })).toBeVisible()
    await expect(page.locator('#contact-form')).toBeVisible()
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/contact-desktop.png` })

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    expect(accessibilityScanResults.violations).toEqual([])
  })
})
