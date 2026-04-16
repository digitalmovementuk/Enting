import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const templatePath = path.join(projectRoot, 'seo', '03_templates', 'masters', 'seo-agentur.md')
const csvPath = path.join(projectRoot, 'seo', '04_build-queue', 'geo-queue.example.csv')
const outputDir = path.join(projectRoot, 'seo', '05_generated', 'geo-pages')

function parseCsv(csv) {
  const [headerLine, ...rows] = csv.trim().split('\n')
  const headers = headerLine.split(',').map((item) => item.trim())

  return rows
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => {
      const values = row.split(',').map((item) => item.trim())

      return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']))
    })
}

function capitalizeWords(value) {
  return value
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

async function main() {
  const [template, csv] = await Promise.all([readFile(templatePath, 'utf8'), readFile(csvPath, 'utf8')])
  const queue = parseCsv(csv)

  await mkdir(outputDir, { recursive: true })

  for (const row of queue) {
    const keyword = `${capitalizeWords(row.service)} ${capitalizeWords(row.modifier)} ${capitalizeWords(row.stadt)}`
    const slug = [row.service, row.modifier, row.stadt].filter(Boolean).join('-').toLowerCase()
    const page = template
      .replaceAll('{{KEYWORD}}', keyword)
      .replaceAll('{{CITY}}', capitalizeWords(row.stadt))
      .replaceAll('{{BRAND}}', 'Enting')
      .replaceAll('{{SLUG}}', slug)

    const outFile = path.join(outputDir, `${slug}.md`)
    await writeFile(outFile, page, 'utf8')
  }

  console.log(`Generated ${queue.length} geo pages in ${outputDir}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
