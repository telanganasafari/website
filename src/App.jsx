import bogathaPoster from "./assets/posters/bogatha.jpg";
import kotaGulluPoster from "./assets/posters/kota-gullu.jpg";
import mallurPoster from "./assets/posters/mallur-narasimha.jpg";
import medaramPoster from "./assets/posters/medaram.jpg";
import ramappaPoster from "./assets/posters/ramappa.jpg";

const featuredStories = [
  {
    title: "Bogatha Waterfall",
    subtitle: "Telangana's Niagara",
    distance: "120 km from Warangal",
    type: "Waterfall escape",
    summary: "Dense green surroundings, broad waterfall views, and strong weekend demand.",
    image: bogathaPoster,
    alt: "Telangana Safari poster featuring Bogatha Waterfall.",
  },
  {
    title: "Ramappa Heritage Site",
    subtitle: "UNESCO world heritage",
    distance: "60 km from Warangal",
    type: "Heritage route",
    summary: "Kakatiya architecture, detailed stonework, and a strong photography angle.",
    image: ramappaPoster,
    alt: "Telangana Safari poster featuring Ramappa Heritage Site.",
  },
  {
    title: "Kota Gullu",
    subtitle: "Ancient temple complex",
    distance: "56 km from Warangal",
    type: "Temple trail",
    summary: "Compact heritage stop with old temple structures and an atmospheric landscape.",
    image: kotaGulluPoster,
    alt: "Telangana Safari poster featuring Kota Gullu.",
  },
  {
    title: "Mallur Narasimha Swamy Temple",
    subtitle: "Hemachala Lakshmi Narasimha Kshetram",
    distance: "125 km from Warangal",
    type: "Spiritual getaway",
    summary: "Sacred route through the hills with devotional, cultural, and forest context.",
    image: mallurPoster,
    alt: "Telangana Safari poster featuring Mallur Narasimha Swamy Temple.",
  },
  {
    title: "Medaram Jathara",
    subtitle: "World's largest tribal gathering",
    distance: "99 km from Warangal",
    type: "Festival route",
    summary: "A major cultural event that broadens the brand beyond standard sightseeing.",
    image: medaramPoster,
    alt: "Telangana Safari poster featuring Medaram Sammakka Sarakka Jathara.",
  },
];

const routeThemes = [
  {
    title: "Waterfall weekends",
    copy:
      "Routes built around Bogatha and nearby nature stops for groups that want the strongest outdoor pull.",
    image: bogathaPoster,
    tags: ["Bogatha", "Forest views", "Weekend escape"],
  },
  {
    title: "Heritage circuits",
    copy:
      "Ramappa, Kota Gullu, and temple-led routes give the brand a stronger cultural edge than a generic trip page.",
    image: ramappaPoster,
    tags: ["Ramappa", "Kota Gullu", "Temple trail"],
  },
  {
    title: "Sacred and festival trails",
    copy:
      "Mallur and Medaram introduce spiritual, seasonal, and community-led travel context into the homepage.",
    image: medaramPoster,
    tags: ["Mallur", "Medaram", "Cultural route"],
  },
];

const quickFacts = [
  { value: "5", label: "Featured destinations" },
  { value: "12", label: "Seats per batch" },
  { value: "2", label: "Departure cities" },
];

const placeChips = [
  "Bogatha",
  "Ramappa",
  "Kota Gullu",
  "Mallur",
  "Medaram",
  "Mulugu",
  "Warangal",
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
            <span>Waterfalls, heritage trails, temple routes, and festival journeys.</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#posters">Destinations</a>
          <a href="#circuits">Circuits</a>
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
            <p className="kicker">Explore the heritage of Telangana</p>
            <h1>Waterfalls, temples, and tribal routes from Warangal.</h1>
            <p className="hero-subtext">
              Weekend departures from Warangal and Hyderabad covering Bogatha,
              Ramappa, Kota Gullu, Mallur, and Medaram.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#posters">
                View destinations
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
              {quickFacts.map((fact) => (
                <article className="fact-pill" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>

            <div className="chip-row" aria-label="Places covered">
              {placeChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>

          <div className="hero-collage" aria-label="Featured Telangana Safari posters">
            <article className="poster-frame poster-main">
              <img
                src={featuredStories[0].image}
                alt={featuredStories[0].alt}
                fetchPriority="high"
              />
            </article>
            <article className="poster-frame poster-side poster-top">
              <img src={featuredStories[1].image} alt={featuredStories[1].alt} />
            </article>
            <article className="poster-frame poster-side poster-bottom">
              <img src={featuredStories[4].image} alt={featuredStories[4].alt} />
            </article>
          </div>
        </section>

        <section className="poster-showcase" id="posters">
          <div className="section-heading">
            <p className="kicker">Signature destinations</p>
            <h2>Waterfalls, heritage sites, temple trails, and cultural routes.</h2>
          </div>

          <div className="poster-grid">
            {featuredStories.map((story, index) => (
              <article className={`poster-card poster-card-${index + 1}`} key={story.title}>
                <div className="poster-media">
                  <img src={story.image} alt={story.alt} loading="lazy" />
                </div>

                <div className="poster-content">
                  <p className="poster-type">{story.type}</p>
                  <h3>{story.title}</h3>
                  <p className="poster-subtitle">{story.subtitle}</p>
                  <p className="poster-summary">{story.summary}</p>
                  <span className="distance-chip">{story.distance}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="circuits-section" id="circuits">
          <div className="section-heading">
            <p className="kicker">Choose your route style</p>
            <h2>Outdoor weekends, heritage circuits, and sacred cultural journeys.</h2>
          </div>

          <div className="circuit-grid">
            {routeThemes.map((theme) => (
              <article className="circuit-card" key={theme.title}>
                <div className="circuit-media">
                  <img src={theme.image} alt="" loading="lazy" />
                </div>

                <div className="circuit-copy">
                  <h3>{theme.title}</h3>
                  <p>{theme.copy}</p>
                  <div className="tag-row">
                    {theme.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-poster" id="contact">
          <div className="cta-copy">
            <p className="kicker">Plan your journey</p>
            <h2>Book your next Telangana weekend escape directly on WhatsApp.</h2>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href="https://wa.me/919700938985"
              target="_blank"
              rel="noreferrer"
            >
              Start on WhatsApp
            </a>

            <div className="cta-tags" aria-hidden="true">
              <span>Warangal</span>
              <span>Hyderabad</span>
              <span>Weekend departures</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
