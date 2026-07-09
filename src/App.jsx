const journeys = [
  {
    title: "Forest Escapes",
    copy:
      "Lush greens, quiet drives, and a mood that feels more retreat than itinerary.",
    accent: "Early morning trails",
  },
  {
    title: "Heritage Routes",
    copy:
      "Stone textures, dramatic silhouettes, and story-rich stops that feel cinematic.",
    accent: "Golden-hour forts",
  },
  {
    title: "Lakeside Stays",
    copy:
      "A slower rhythm shaped by water, sunset skies, and spaces designed to breathe.",
    accent: "Sunset campfire decks",
  },
];

const signals = [
  "Thoughtful stays",
  "Bold visual storytelling",
  "Weekend-ready planning",
  "Made for custom-domain launch",
];

const moments = [
  "Amber sunsets over open water",
  "Courtyards lit with warm lantern light",
  "Slow mornings framed by wild greens",
  "Open-air dining under a deep blue sky",
];

function App() {
  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">TS</span>
          <span className="brand-name">Telangana Safari</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#journeys">Journeys</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Launch-ready
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Boutique stays. Scenic routes. Warm design.</p>
            <h1>A beautiful first impression for Telangana Safari.</h1>
            <p className="hero-text">
              This homepage is designed to feel cinematic, grounded, and premium
              from the first scroll. The layout gives you a polished launch
              point now, while leaving plenty of room to swap in your real
              content later.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#journeys">
                Explore the look
              </a>
              <a className="button button-secondary" href="#contact">
                Make it yours
              </a>
            </div>

            <div className="signal-row">
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract scenic showcase">
            <div className="visual-frame">
              <div className="visual-sky" />
              <div className="visual-sun" />
              <div className="visual-ridge ridge-one" />
              <div className="visual-ridge ridge-two" />
              <div className="visual-card card-top">
                <p>Editorial landing page</p>
                <strong>Built for a premium travel feel</strong>
              </div>
              <div className="visual-card card-bottom">
                <strong>Responsive by default</strong>
                <p>Desktop drama, mobile clarity.</p>
              </div>
              <div className="floating-badge badge-left">Custom-domain ready</div>
              <div className="floating-badge badge-right">React + Vite</div>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Project strengths">
          <article>
            <strong>01</strong>
            <span>Distinct visual direction</span>
          </article>
          <article>
            <strong>02</strong>
            <span>Clean one-page structure</span>
          </article>
          <article>
            <strong>03</strong>
            <span>Easy to extend for booking or content</span>
          </article>
        </section>

        <section className="journeys-section" id="journeys">
          <div className="section-heading">
            <p className="eyebrow">Curated homepage sections</p>
            <h2>Beautiful blocks you can keep, remix, or replace later.</h2>
          </div>

          <div className="journey-grid">
            {journeys.map((journey) => (
              <article className="journey-card" key={journey.title}>
                <p className="journey-accent">{journey.accent}</p>
                <h3>{journey.title}</h3>
                <p>{journey.copy}</p>
                <span>Designed to sell atmosphere first</span>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-panel">
            <p className="eyebrow">Why this works</p>
            <h2>It looks branded before your final content is even ready.</h2>
            <p>
              The page leans on layout, color, rhythm, and texture so the site
              already feels intentional. When you are ready, we can swap in real
              images, routes, stay details, or booking links without changing
              the overall design language.
            </p>
          </div>

          <div className="feature-stack">
            <div className="quote-card">
              <p>
                "Built to feel calm, warm, and a little adventurous instead of
                looking like a generic tourism template."
              </p>
            </div>

            <div className="feature-list">
              {moments.map((moment) => (
                <article key={moment}>
                  <span className="feature-dot" aria-hidden="true" />
                  <p>{moment}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mosaic-section" aria-label="Signature moments">
          <div className="mosaic-tile large-tile">
            <p className="eyebrow">Visual cadence</p>
            <h2>Strong enough for launch, flexible enough for growth.</h2>
          </div>
          <div className="mosaic-tile warm-tile">
            <span>Layered gradients</span>
          </div>
          <div className="mosaic-tile forest-tile">
            <span>Animated atmosphere</span>
          </div>
          <div className="mosaic-tile sand-tile">
            <span>Mobile-first spacing</span>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Point your domain at GitHub Pages and you are ready to ship.</h2>
          </div>
          <a className="button button-primary" href="mailto:hello@telanganasafari.com">
            Add your real contact later
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
