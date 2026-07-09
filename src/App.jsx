const routeCards = [
  {
    route: "Warangal loop",
    title: "Niagara Trails",
    duration: "2D / 1N",
    price: "Rs 2,999",
    stops: ["Bogatha", "Kongala", "Campfire"],
    accent: "accent-ember",
  },
  {
    route: "Hyderabad loop",
    title: "Waterfalls + Heritage",
    duration: "2D / 1N",
    price: "Rs 3,999",
    stops: ["Bogatha", "Ramappa", "Laknavaram"],
    accent: "accent-moss",
  },
  {
    route: "Quick day-out",
    title: "Forest Trek Escape",
    duration: "1D",
    price: "Rs 1,499",
    stops: ["Kongala", "Bogatha", "Trail stop"],
    accent: "accent-sand",
  },
];

const facts = [
  { value: "12", label: "Seats a batch" },
  { value: "2", label: "Departure cities" },
  { value: "1", label: "WhatsApp booking flow" },
];

const experienceCards = [
  {
    eyebrow: "Monsoon mood",
    title: "Waterfall rush",
    copy: "Mist, red earth, and loud water up front.",
    size: "card-wide",
  },
  {
    eyebrow: "Forest drive",
    title: "Safari edge",
    copy: "Mulugu roads, dark greens, and offbeat route energy.",
    size: "card-tall",
  },
  {
    eyebrow: "Night halt",
    title: "Campfire pause",
    copy: "Small groups and low-noise planning.",
    size: "card-small",
  },
  {
    eyebrow: "Add-on",
    title: "Heritage loop",
    copy: "Ramappa and Laknavaram keep the routes varied.",
    size: "card-small",
  },
];

const destinations = [
  { name: "Bogatha", tag: "Waterfall icon" },
  { name: "Kongala", tag: "Offbeat trail" },
  { name: "Eturnagaram", tag: "Wild stretch" },
  { name: "Ramappa", tag: "Stone and story" },
  { name: "Laknavaram", tag: "Lake finish" },
];

function App() {
  return (
    <div className="page-shell">
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">TS</span>
          <span className="brand-lockup">
            <strong>Telangana Safari</strong>
            <span>Weekend waterfalls, forest drives, and wild air.</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#routes">Routes</a>
          <a href="#experience">Mood</a>
          <a href="#contact">Book</a>
        </nav>

        <a
          className="header-pill"
          href="https://wa.me/919700938985"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp 9700938985
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="kicker">Escape the city. Experience the wild.</p>
            <h1>Trail energy first. Brochure energy never.</h1>
            <p className="hero-subtext">
              A more cinematic homepage for waterfall weekends from Warangal
              and Hyderabad.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#routes">
                Explore routes
              </a>
              <a
                className="button button-secondary"
                href="https://wa.me/919700938985"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>
            </div>

            <div className="fact-row" aria-label="Quick facts">
              {facts.map((fact) => (
                <article className="fact-pill" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-stage">
              <div className="sun-disc" />
              <div className="mist-band mist-one" />
              <div className="mist-band mist-two" />
              <div className="ridge ridge-back" />
              <div className="ridge ridge-front" />

              <div className="ticket-card ticket-primary">
                <span>Next batch</span>
                <strong>Niagara Trails</strong>
                <p>Warangal loop / 2D / 1N / Rs 2,999</p>
              </div>

              <div className="ticket-card ticket-secondary">
                <strong>12</strong>
                <span>Seats only</span>
              </div>

              <div className="location-ribbon">
                Bogatha / Kongala / Eturnagaram / Ramappa
              </div>
            </div>
          </div>
        </section>

        <section className="route-strip" id="routes" aria-label="Packages">
          {routeCards.map((route) => (
            <article
              className={`route-ticket ${route.accent}`}
              key={`${route.route}-${route.title}`}
            >
              <div className="route-ticket-top">
                <span>{route.route}</span>
                <strong>{route.price}</strong>
              </div>

              <h2>{route.title}</h2>
              <p className="route-duration">{route.duration}</p>

              <div className="route-chips">
                {route.stops.map((stop) => (
                  <span key={stop}>{stop}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading">
            <p className="kicker">Visual mood</p>
            <h2>More like a monsoon trail poster. Less like a text document.</h2>
          </div>

          <div className="experience-grid">
            {experienceCards.map((card) => (
              <article
                className={`experience-card ${card.size}`}
                key={card.title}
              >
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-section" aria-label="Signature destinations">
          <div className="section-heading">
            <p className="kicker">Signature places</p>
            <h2>The locations should carry the vibe at a glance.</h2>
          </div>

          <div className="destination-mosaic">
            {destinations.map((destination, index) => (
              <article
                className={`destination-tile tile-${index + 1}`}
                key={destination.name}
              >
                <span>{destination.tag}</span>
                <h3>{destination.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-poster" id="contact">
          <div className="cta-copy">
            <p className="kicker">Book the batch</p>
            <h2>Small-group escapes with a sharper front page to match.</h2>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href="https://wa.me/919700938985"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp now
            </a>

            <div className="cta-tags" aria-hidden="true">
              <span>Waterfalls</span>
              <span>Forest drives</span>
              <span>Weekend batches</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
