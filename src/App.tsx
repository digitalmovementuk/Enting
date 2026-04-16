import { faq, geoTargets, pillars, proofPoints, site, workflow } from './content/site'

export default function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">
        Zum Inhalt
      </a>
      <header className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <nav className="topbar">
          <span className="brand">{site.name}</span>
          <div className="topbar-links">
            <a href="#setup">Setup</a>
            <a href="#workflow">Workflow</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">{site.kicker}</p>
            <h1>{site.headline}</h1>
            <p className="lead">{site.intro}</p>
            <div className="cta-row">
              <a className="button button-primary" href="#setup">
                {site.primaryCta}
              </a>
              <a className="button button-secondary" href="#generator">
                {site.secondaryCta}
              </a>
            </div>
            <div className="proof-grid">
              {proofPoints.map((item) => (
                <div key={item} className="proof-card">
                  {item}
                </div>
              ))}
            </div>
          </section>
          <aside className="hero-panel">
            <p className="panel-label">Startpaket</p>
            <ul>
              <li>React-App als Frontend-Grundlage</li>
              <li>SEO-Metadaten und strukturierte Daten</li>
              <li>Master-Content-Ordner fuer Service-Seiten</li>
              <li>Geo-Generator fuer skalierbare Landingpages</li>
            </ul>
          </aside>
        </div>
      </header>
      <main id="main">
        <section id="setup" className="section">
          <div className="section-heading">
            <p className="eyebrow">Setup</p>
            <h2>Das Repository startet nicht leer, sondern mit einer brauchbaren SEO-Arbeitsstruktur.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="workflow" className="section section-accent">
          <div className="section-heading">
            <p className="eyebrow">Workflow</p>
            <h2>Von der Master-Seite bis zur Geo-Landingpage in drei klaren Schritten.</h2>
          </div>
          <div className="timeline">
            {workflow.map((item) => (
              <article key={item.step} className="timeline-item">
                <span className="timeline-step">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="generator" className="section">
          <div className="section-heading">
            <p className="eyebrow">Geo Layer</p>
            <h2>Vorbereitete Zielstaedte fuer den ersten lokalen SEO-Ausbau.</h2>
          </div>
          <div className="geo-grid">
            {geoTargets.map((city) => (
              <div key={city} className="geo-chip">
                {city}
              </div>
            ))}
          </div>
        </section>
        <section id="faq" className="section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Die wichtigsten Punkte fuer den Projektstart sind bereits mitgedacht.</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
