export const site = {
  name: 'Enting',
  kicker: 'SEO Project Scaffold',
  headline: 'SEO-Strukturen, die lokale Nachfrage in belastbare Anfragen verwandeln.',
  intro:
    'Enting ist als sauberer Startpunkt fuer lokale SEO-Projekte gedacht: klare Informationsarchitektur, einsatzbereite Landingpage-Sektionierung und ein Generator fuer geo-spezifische Seiten.',
  primaryCta: 'Projektstruktur starten',
  secondaryCta: 'Geo-Template ansehen',
}

export const proofPoints = [
  'Vite- und React-Grundlage fuer schnellen Start',
  'SEO-Content-Struktur fuer Master- und Geo-Seiten',
  'Generator-Skript fuer lokale Landingpages',
]

export const pillars = [
  {
    title: 'Saubere Seitenarchitektur',
    text: 'Das Projekt trennt App-Shell, Inhaltsquellen und oeffentliche SEO-Assets sauber, damit neue Landingpages nicht im Frontend-Chaos enden.',
  },
  {
    title: 'Content-Templates statt Copy-Paste',
    text: 'Master-Seiten liegen versionierbar im Repository und koennen fuer neue Services, Modifier und Staedte systematisch erweitert werden.',
  },
  {
    title: 'Geo-Skalierung mit Kontrolle',
    text: 'Der Generator arbeitet CSV-basiert, damit nur Keywords mit Volumen und definierter Prioritaet in den Build-Queue laufen.',
  },
]

export const workflow = [
  {
    step: '01',
    title: 'Master-Inhalte schreiben',
    text: 'Lege fuer jede Kernleistung eine belastbare 7-Block-Struktur in `content/masters/` an.',
  },
  {
    step: '02',
    title: 'Geo-Queue pflegen',
    text: 'Ergasse Service, Modifier, Stadt und Suchvolumen in die CSV-Datei, bevor neue Seiten erzeugt werden.',
  },
  {
    step: '03',
    title: 'Seiten generieren',
    text: 'Das Skript erstellt aus Template und Queue neue Markdown-Dateien fuer die spaetere CMS- oder Static-Site-Ausspielung.',
  },
]

export const geoTargets = ['Duesseldorf', 'Koeln', 'Essen', 'Dortmund', 'Duisburg', 'Bochum']

export const faq = [
  {
    question: 'Wofuer ist dieses Repository gedacht?',
    answer:
      'Fuer den Start eines neuen SEO-Projekts mit GitHub-Repo, lokalem Frontend-Scaffold und einer Struktur fuer skalierbare Service- und Geo-Seiten.',
  },
  {
    question: 'Ist das schon produktionsreif?',
    answer:
      'Es ist ein belastbarer Startpunkt. Vor Launch sollten Domain, Tracking, Inhalte, Visuals und Build-Checks projektspezifisch vervollstaendigt werden.',
  },
  {
    question: 'Wie werden neue Staedteseiten angelegt?',
    answer:
      'Ueber die CSV-Build-Queue und das Generator-Skript, damit URLs, Keywords und Platzhalter nachvollziehbar erzeugt werden.',
  },
]

