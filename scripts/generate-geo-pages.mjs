import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const configPath = path.join(projectRoot, 'seo', '04_build-queue', 'project-config.json')
const serviceQueuePath = path.join(projectRoot, 'seo', '04_build-queue', 'service-queue.csv')
const geoQueuePath = path.join(projectRoot, 'seo', '04_build-queue', 'geo-queue.csv')

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

function buildMasterKeyword(row) {
  return [row.service_name, row.modifier_label].filter(Boolean).join(' ')
}

function buildGeoKeyword(row) {
  return [row.service_name, row.modifier_label, row.city_name].filter(Boolean).join(' ')
}

function buildMasterSlug(row) {
  return [row.service_slug, row.modifier_slug].filter(Boolean).join('-').toLowerCase()
}

function buildGeoSlug(row) {
  return [row.service_slug, row.modifier_slug, row.city_slug].filter(Boolean).join('-').toLowerCase()
}

function fillTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, value),
    template,
  )
}

function buildSharedReplacements(config, keyword) {
  return {
    KEYWORD: keyword,
    BRAND: config.brand,
    DOMAIN: config.domain,
    PRIMARY_CTA: config.primary_cta,
    VALUE_PROPOSITION: `${keyword} fuer klare Nachfrage- und Conversion-Wege`,
    INTRO_PARAGRAPH: `${keyword} ist fuer ${config.brand} eine priorisierte Landingpage innerhalb des SEO-Builder-Workflows.`,
    DEFINITION_PARAGRAPH:
      `${keyword} beschreibt eine fokussierte Leistungsseite, die Suchintention, Angebot und Conversion in einer klaren Struktur verbindet.`,
    OUTCOME_1: 'klarere Positionierung fuer die Suchanfrage',
    OUTCOME_2: 'bessere Qualifizierung des organischen Traffics',
    OUTCOME_3: 'sauberere interne Verlinkung',
    OUTCOME_4: 'brauchbare Basis fuer spaetere Optimierung',
    APPROACH_1: 'klare Angebotsbotschaft statt diffuser Leistungslisten',
    APPROACH_2: 'ein sauberer Conversion-Pfad pro Landingpage',
    APPROACH_3: 'strukturierte interne Verlinkung',
    APPROACH_4: 'ueberarbeitbare Drafts statt unkontrollierter Massenproduktion',
  }
}

async function main() {
  const [configRaw, serviceCsv, geoCsv] = await Promise.all([
    readFile(configPath, 'utf8'),
    readFile(serviceQueuePath, 'utf8'),
    readFile(geoQueuePath, 'utf8'),
  ])
  const config = JSON.parse(configRaw)
  const serviceQueue = parseCsv(serviceCsv)
  const geoQueue = parseCsv(geoCsv)
  const masterTemplatePath = path.join(projectRoot, config.generator.master_template)
  const geoTemplatePath = path.join(projectRoot, config.generator.geo_template)
  const masterOutputDir = path.join(projectRoot, config.generator.output_masters)
  const geoOutputDir = path.join(projectRoot, config.generator.output_geo_pages)
  const [masterTemplate, geoTemplate] = await Promise.all([
    readFile(masterTemplatePath, 'utf8'),
    readFile(geoTemplatePath, 'utf8'),
  ])

  await Promise.all([mkdir(masterOutputDir, { recursive: true }), mkdir(geoOutputDir, { recursive: true })])

  for (const row of serviceQueue) {
    const keyword = buildMasterKeyword(row)
    const slug = buildMasterSlug(row)
    const page = fillTemplate(masterTemplate, {
      ...buildSharedReplacements(config, keyword),
      STRATEGY_TEXT: 'Die Seite fokussiert einen klaren Suchintent statt mehrere Angebote parallel anzusprechen.',
      MEASUREMENT_TEXT: 'Inhalte, CTA und spaetere Tracking-Signale lassen sich pro Landingpage sauber zuordnen.',
      SCALABILITY_TEXT: 'Die Struktur ist so angelegt, dass weitere Service-, Vergleichs- oder Geo-Seiten anschliessen koennen.',
      FUTURE_TEXT: 'Das Setup bleibt fuer spaetere inhaltliche Vertiefung, interne Verlinkung und Conversion-Optimierung offen.',
      BENEFIT_1: 'klare Angebotskommunikation',
      BENEFIT_2: 'schnellere inhaltliche Weiterentwicklung',
      BENEFIT_3: 'sauberere SEO-Informationsarchitektur',
      BENEFIT_4: 'weniger Reibung im Rollout',
      CTA_PARAGRAPH: `${config.brand} nutzt diese Seite als steuerbare Basis fuer Suchsichtbarkeit, Nachfrageaufbau und spaetere Conversion-Optimierung. ${config.primary_cta} ist hier der logische naechste Schritt.`,
    })

    const outFile = path.join(masterOutputDir, `${slug}.md`)
    await writeFile(outFile, page, 'utf8')
  }

  for (const row of geoQueue) {
    const keyword = buildGeoKeyword(row)
    const slug = buildGeoSlug(row)
    const page = fillTemplate(geoTemplate, {
      ...buildSharedReplacements(config, keyword),
      CITY_NAME: row.city_name,
      LOCAL_CONTEXT_PARAGRAPH: `Fuer ${row.city_name} sollte diese Seite vor dem Publish noch mit lokalen Belegen, Referenzen oder Marktsignalen angereichert werden.`,
    })

    const outFile = path.join(geoOutputDir, `${slug}.md`)
    await writeFile(outFile, page, 'utf8')
  }

  console.log(`Generated ${serviceQueue.length} master pages in ${masterOutputDir}`)
  console.log(`Generated ${geoQueue.length} geo pages in ${geoOutputDir}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
