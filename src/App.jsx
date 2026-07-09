const packages = [
  {
    route: "Warangal to Warangal",
    title: "Niagara Trails",
    copy:
      "A two-day weekend route through Bogatha and Kongala waterfalls with a wildlife forest trek in Mulugu District.",
    accent: "2 days · 1 night",
    detail: "Stay, transport, dinner, guide, campfire, and first aid included.",
    price: "From Rs 2,999",
  },
  {
    route: "Hyderabad to Hyderabad",
    title: "Waterfalls + Heritage",
    copy:
      "A fuller circuit that pairs Bogatha and Kongala with Ramappa Temple and Laknavaram Lake.",
    accent: "2 days · 1 night",
    detail: "Hotel stay and return drop built in for a smoother Hyderabad escape.",
    price: "From Rs 3,999",
  },
  {
    route: "One-day trail",
    title: "Forest Trek Escape",
    copy:
      "A compact day trip focused on Kongala forest access and Bogatha waterfall for quick weekend groups.",
    accent: "1 day trip",
    detail: "Transport, local guide, and medical kit included.",
    price: "From Rs 1,499",
  },
];

const signals = [
  "Bogatha + Kongala",
  "Mulugu district routes",
  "Weekend trips from Warangal",
  "WhatsApp 9700938985",
];

const moments = [
  "Bogatha Waterfall, the Niagara of Telangana",
  "Kongala Waterfall inside Mulugu's teak forest routes",
  "Eturnagaram Wildlife Sanctuary during monsoon season",
  "Ramappa heritage and Laknavaram lake on extended routes",
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
          <a href="#packages">Packages</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="https://wa.me/919700938985" target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Escape the city. Experience the wild.</p>
            <h1>Weekend trails into the wild side of Telangana.</h1>
            <p className="hero-text">
              Telangana Safari is built around real small-group routes through
              Bogatha, Kongala, Eturnagaram, Ramappa, and Laknavaram. The
              Instagram page leans into waterfalls, forests, and offbeat
              weekend movement, so the homepage now does the same.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#packages">
                See the packages
              </a>
              <a
                className="button button-secondary"
                href="https://wa.me/919700938985"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
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
                <p>Mulugu District, Telangana</p>
                <strong>Waterfalls, forests, and wildlife weekends</strong>
              </div>
              <div className="visual-card card-bottom">
                <strong>Warangal and Hyderabad departures</strong>
                <p>Small-group routes with direct WhatsApp booking.</p>
              </div>
              <div className="floating-badge badge-left">Only 12 seats</div>
              <div className="floating-badge badge-right">Bogatha + Kongala</div>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Project strengths">
          <article>
            <strong>12</strong>
            <span>Seats per weekend batch</span>
          </article>
          <article>
            <strong>2D</strong>
            <span>Signature routes built around quick escapes</span>
          </article>
          <article>
            <strong>5</strong>
            <span>Core draws: Bogatha, Kongala, Eturnagaram, Ramappa, Laknavaram</span>
          </article>
        </section>

        <section className="journeys-section" id="packages">
          <div className="section-heading">
            <p className="eyebrow">Real Instagram-led offers</p>
            <h2>Routes shaped around waterfalls first, not generic tourism copy.</h2>
          </div>

          <div className="journey-grid">
            {packages.map((pkg) => (
              <article className="journey-card" key={pkg.title}>
                <p className="journey-accent">{pkg.route}</p>
                <h3>{pkg.title}</h3>
                <p>{pkg.copy}</p>
                <p>{pkg.detail}</p>
                <span>{pkg.accent} · {pkg.price}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-panel">
            <p className="eyebrow">Brand direction</p>
            <h2>It now sounds like Telangana Safari actually sounds on Instagram.</h2>
            <p>
              The page now mirrors the strongest signals from the profile:
              Mulugu-focused discovery, waterfall-led weekends, compact group
              departures, and a direct WhatsApp booking funnel instead of
              passive brochure copy.
            </p>
          </div>

          <div className="feature-stack">
            <div className="quote-card">
              <p>
                "Escape the City. Experience the Wild."
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
            <p className="eyebrow">Signature stops</p>
            <h2>The homepage now points at the actual places people are being invited to visit.</h2>
          </div>
          <div className="mosaic-tile warm-tile">
            <span>Bogatha Falls</span>
          </div>
          <div className="mosaic-tile forest-tile">
            <span>Kongala Trek</span>
          </div>
          <div className="mosaic-tile sand-tile">
            <span>Ramappa, Laknavaram, and Eturnagaram add-on routes</span>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <p className="eyebrow">Book the route</p>
            <h2>DM or WhatsApp to lock in a waterfall weekend.</h2>
          </div>
          <a
            className="button button-primary"
            href="https://wa.me/919700938985"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp 9700938985
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
