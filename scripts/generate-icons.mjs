import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import sharp from 'sharp'

const publicDir = resolve(process.cwd(), 'public')
const faviconSvg = resolve(publicDir, 'favicon.svg')
const ogSvg = resolve(publicDir, 'og-image.svg')

await mkdir(dirname(resolve(publicDir, 'favicon-16x16.png')), { recursive: true })

await sharp(faviconSvg).resize(16, 16).png().toFile(resolve(publicDir, 'favicon-16x16.png'))
await sharp(faviconSvg).resize(32, 32).png().toFile(resolve(publicDir, 'favicon-32x32.png'))
await sharp(faviconSvg).resize(48, 48).png().toFile(resolve(publicDir, 'favicon-48x48.png'))
await sharp(faviconSvg).resize(180, 180).png().toFile(resolve(publicDir, 'apple-touch-icon.png'))
await sharp(ogSvg).resize(1200, 630).png().toFile(resolve(publicDir, 'og-image.png'))
