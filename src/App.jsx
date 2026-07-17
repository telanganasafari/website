import bogathaPoster from "./assets/posters/bogatha.jpg";
import janagalanchaPoster from "./assets/posters/janagalancha-fort.jpg";
import kondaparthiPoster from "./assets/posters/kondaparthi-tribal-village.jpg";
import kotaGulluPoster from "./assets/posters/kota-gullu.jpg";
import laknavaramPoster from "./assets/posters/laknavaram-lake.jpg";
import mallurPoster from "./assets/posters/mallur-narasimha.jpg";
import medaramPoster from "./assets/posters/medaram.jpg";
import muluguCoverPoster from "./assets/posters/mulugu-cover.jpg";
import ramappaPoster from "./assets/posters/ramappa.jpg";

const destinationStories = [
  {
    title: "Bogatha Waterfall",
    subtitle: "Telangana's Niagara",
    distance: "120 km from Warangal",
    type: "Waterfall escape",
    summary:
      "A high-interest nature stop with broad waterfall views and strong weekend appeal.",
    image: bogathaPoster,
    alt: "Telangana Safari poster featuring Bogatha Waterfall.",
  },
  {
    title: "Laknavaram Lake",
    subtitle: "Scenic lake and nature retreat",
    distance: "72 km from Warangal",
    type: "Lake circuit",
    summary:
      "Bridge views, boating, and an easy nature-led stop that works well in mixed itineraries.",
    image: laknavaramPoster,
    alt: "Telangana Safari poster featuring Laknavaram Lake.",
  },
  {
    title: "Ramappa Heritage Site",
    subtitle: "UNESCO world heritage",
    distance: "60 km from Warangal",
    type: "Heritage route",
    summary:
      "Kakatiya architecture and carved stonework that give the brand a serious heritage layer.",
    image: ramappaPoster,
    alt: "Telangana Safari poster featuring Ramappa Heritage Site.",
  },
  {
    title: "Kota Gullu",
    subtitle: "Ancient temple complex",
    distance: "56 km from Warangal",
    type: "Temple trail",
    summary:
      "Compact ruins with strong visual texture and a practical short-route cultural stop.",
    image: kotaGulluPoster,
    alt: "Telangana Safari poster featuring Kota Gullu.",
  },
  {
    title: "Mallur Narasimha Swamy Temple",
    subtitle: "Hemachala Lakshmi Narasimha Kshetram",
    distance: "125 km from Warangal",
    type: "Spiritual getaway",
    summary:
      "A sacred route through forested surroundings that broadens the devotional side of the site.",
    image: mallurPoster,
    alt: "Telangana Safari poster featuring Mallur Narasimha Swamy Temple.",
  },
  {
    title: "Medaram Jathara",
    subtitle: "World's largest tribal gathering",
    distance: "99 km from Warangal",
    type: "Festival route",
    summary:
      "A large cultural event that adds scale and a distinctive tribal identity to the homepage.",
    image: medaramPoster,
    alt: "Telangana Safari poster featuring Medaram Sammakka Sarakka Jathara.",
  },
  {
    title: "Janagalancha Fort",
    subtitle: "Trekking and nature getaway",
    distance: "90 km from Warangal",
    type: "Hidden gem",
    summary:
      "Fort ruins, trekking context, and broad hill views that support the adventure angle.",
    image: janagalanchaPoster,
    alt: "Telangana Safari poster featuring Janagalancha Fort.",
  },
  {
    title: "Kondaparthi Tribal Village",
    subtitle: "A glimpse into tribal life",
    distance: "92 km from Warangal",
    type: "Tribal tourism",
    summary:
      "Village life, local traditions, and community context that make the offering feel more specific.",
    image: kondaparthiPoster,
    alt: "Telangana Safari poster featuring Kondaparthi Tribal Village.",
  },
];

const routeThemes = [
  {
    title: "Water and weekend escapes",
    copy:
      "Bogatha and Laknavaram are the strongest nature-led entry points for broad weekend demand.",
    image: laknavaramPoster,
    tags: ["Bogatha", "Laknavaram", "Nature trips"],
  },
  {
    title: "Heritage and temple circuits",
    copy:
      "Ramappa, Kota Gullu, and Mallur create a clearer heritage-and-devotional route family.",
    image: ramappaPoster,
    tags: ["Ramappa", "Kota Gullu", "Mallur"],
  },
  {
    title: "Mulugu culture and offbeat trails",
    copy:
      "Medaram, Kondaparthi, and Janagalancha add tribal, offbeat, and trekking context.",
    image: kondaparthiPoster,
    tags: ["Medaram", "Kondaparthi", "Janagalancha"],
  },
];

const quickFacts = [
  { value: "8", label: "Must-visit places" },
  { value: "9", label: "Poster visuals used" },
  { value: "2", label: "Departure cities" },
];

const placeChips = [
  "Bogatha",
  "Laknavaram",
  "Ramappa",
  "Kota Gullu",
  "Mallur",
  "Medaram",
  "Janagalancha",
  "Kondaparthi",
  "Mulugu",
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
            <span>Waterfalls, heritage sites, tribal routes, and forest journeys.</span>
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
            <p className="kicker">Mulugu district and beyond</p>
            <h1>Eight places. One stronger Telangana Safari homepage.</h1>
            <p className="hero-subtext">
              Weekend departures from Warangal and Hyderabad covering waterfalls,
              temple circuits, lake routes, tribal villages, and cultural gatherings.
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

          <div className="hero-collage" aria-label="Telangana Safari posters">
            <article className="poster-frame poster-main">
              <img
                src={muluguCoverPoster}
                alt="Telangana Safari Mulugu district overview poster."
                fetchPriority="high"
              />
            </article>
            <article className="poster-frame poster-side poster-top">
              <img
                src={laknavaramPoster}
                alt="Telangana Safari poster featuring Laknavaram Lake."
              />
            </article>
            <article className="poster-frame poster-side poster-bottom">
              <img
                src={janagalanchaPoster}
                alt="Telangana Safari poster featuring Janagalancha Fort."
              />
            </article>
          </div>
        </section>

        <section className="poster-showcase" id="posters">
          <div className="section-heading">
            <p className="kicker">Signature destinations</p>
            <h2>Eight destination stories built from the full poster set.</h2>
          </div>

          <div className="poster-grid">
            {destinationStories.map((story) => (
              <article className="poster-card" key={story.title}>
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
            <p className="kicker">Route families</p>
            <h2>Nature weekends, heritage circuits, and tribal-cultural journeys.</h2>
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
