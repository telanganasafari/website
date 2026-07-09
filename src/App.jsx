const toDataUri = (svg) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const scenicImages = {
  hero: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d79a58"/>
          <stop offset="42%" stop-color="#385440"/>
          <stop offset="100%" stop-color="#0d1713"/>
        </linearGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
          <stop offset="50%" stop-color="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#sky)"/>
      <circle cx="880" cy="180" r="120" fill="#f0cf92" opacity="0.88"/>
      <ellipse cx="620" cy="260" rx="460" ry="58" fill="#fff4d8" opacity="0.12"/>
      <ellipse cx="520" cy="340" rx="500" ry="62" fill="#fff4d8" opacity="0.09"/>
      <path d="M0 470 C160 420 260 430 380 390 C520 338 620 420 760 376 C860 344 980 358 1200 300 L1200 900 L0 900 Z" fill="#2f4839"/>
      <path d="M0 590 C180 516 310 564 444 498 C564 438 720 510 860 452 C962 408 1080 430 1200 392 L1200 900 L0 900 Z" fill="#1f3128"/>
      <path d="M0 690 C180 614 278 650 400 624 C560 586 652 620 826 588 C952 566 1060 590 1200 558 L1200 900 L0 900 Z" fill="#111c17"/>
      <rect x="224" y="268" width="94" height="412" rx="46" fill="#24372e"/>
      <path d="M258 252 C300 262 306 296 304 332 L304 682 L236 682 L236 332 C236 286 242 262 258 252 Z" fill="#f6eee1" opacity="0.92"/>
      <path d="M288 312 C336 336 348 392 348 468 C348 560 314 622 278 680 L246 680 C286 616 304 556 304 476 C304 408 298 354 288 312 Z" fill="#fff9ef" opacity="0.8"/>
      <path d="M560 612 C626 566 704 544 804 542 C920 540 1000 572 1080 654 L1080 900 L488 900 C516 772 528 672 560 612 Z" fill="#0a120f"/>
      <path d="M742 652 C806 630 872 634 932 682" stroke="#d88945" stroke-width="10" stroke-linecap="round" opacity="0.6"/>
    </svg>
  `),
  waterfall: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#58785d"/>
          <stop offset="40%" stop-color="#264135"/>
          <stop offset="100%" stop-color="#0b120f"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <ellipse cx="480" cy="120" rx="180" ry="70" fill="#f0cf92" opacity="0.16"/>
      <path d="M0 250 C120 210 220 220 300 190 C420 150 520 230 640 194 C710 172 760 176 800 162 L800 600 L0 600 Z" fill="#2d4738"/>
      <path d="M0 330 C140 286 264 320 354 278 C450 232 572 318 690 278 C742 260 782 260 800 256 L800 600 L0 600 Z" fill="#203328"/>
      <path d="M184 170 L324 170 L346 358 L162 358 Z" fill="#2a2d29"/>
      <path d="M210 170 L266 170 L286 368 L194 368 Z" fill="#fffdf7" opacity="0.92"/>
      <path d="M276 170 L316 170 L326 352 L266 352 Z" fill="#edf7fb" opacity="0.8"/>
      <ellipse cx="260" cy="430" rx="220" ry="86" fill="#1e5b61"/>
      <ellipse cx="260" cy="442" rx="170" ry="48" fill="#4a8f92" opacity="0.55"/>
      <circle cx="604" cy="454" r="100" fill="#35513f"/>
      <circle cx="682" cy="430" r="66" fill="#456749"/>
    </svg>
  `),
  forest: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#10211a"/>
      <rect x="0" y="0" width="800" height="300" fill="#34533e"/>
      <ellipse cx="560" cy="120" rx="170" ry="86" fill="#efd6a3" opacity="0.14"/>
      <path d="M0 600 L160 320 L240 320 L60 600 Z" fill="#0a120f"/>
      <path d="M140 600 L320 250 L420 250 L220 600 Z" fill="#152219"/>
      <path d="M360 600 L510 210 L620 210 L444 600 Z" fill="#0a120f"/>
      <path d="M540 600 L670 280 L760 280 L620 600 Z" fill="#152219"/>
      <path d="M282 600 C326 516 412 448 466 400 C532 344 606 310 684 306 L800 600 Z" fill="#1e3328"/>
      <path d="M0 600 C150 560 274 488 344 436 C420 380 488 340 566 316 L662 600 Z" fill="#274437"/>
      <path d="M272 600 L418 420 L520 600 Z" fill="#de8d4a"/>
      <path d="M318 600 L418 470 L486 600 Z" fill="#f4e8cb"/>
      <path d="M110 600 L170 0 L196 0 L146 600 Z" fill="#08100d" opacity="0.7"/>
      <path d="M618 600 L660 0 L686 0 L648 600 Z" fill="#08100d" opacity="0.66"/>
    </svg>
  `),
  campfire: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#08100d"/>
      <circle cx="612" cy="122" r="78" fill="#f1d29a" opacity="0.2"/>
      <path d="M0 420 C110 372 212 390 320 340 C424 292 504 350 616 320 C692 300 740 302 800 284 L800 600 L0 600 Z" fill="#17271f"/>
      <path d="M0 478 C126 428 232 442 352 412 C440 390 534 414 644 390 C714 376 764 382 800 372 L800 600 L0 600 Z" fill="#0e1713"/>
      <path d="M120 452 L248 322 L372 452 Z" fill="#1d3127"/>
      <path d="M180 452 L248 354 L322 452 Z" fill="#20382c"/>
      <path d="M408 438 L498 320 L592 438 Z" fill="#14221b"/>
      <ellipse cx="320" cy="498" rx="146" ry="44" fill="#23170d"/>
      <path d="M304 500 C286 470 306 430 334 410 C360 430 372 454 358 484 C380 474 394 492 388 510 C366 542 312 542 286 510 C282 498 290 486 304 500 Z" fill="#f7a246"/>
      <path d="M330 500 C320 478 334 448 352 432 C374 448 382 470 372 490 C384 486 392 494 388 506 C374 528 338 528 322 508 C318 500 322 490 330 500 Z" fill="#ffe0a1"/>
      <circle cx="270" cy="150" r="2" fill="#ffffff" opacity="0.9"/>
      <circle cx="318" cy="84" r="2" fill="#ffffff" opacity="0.9"/>
      <circle cx="362" cy="132" r="2" fill="#ffffff" opacity="0.8"/>
      <circle cx="136" cy="112" r="2" fill="#ffffff" opacity="0.8"/>
      <circle cx="510" cy="78" r="2" fill="#ffffff" opacity="0.75"/>
    </svg>
  `),
  temple: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#161d1a"/>
      <rect x="0" y="0" width="800" height="320" fill="#7a6045"/>
      <ellipse cx="568" cy="118" rx="190" ry="72" fill="#efd2a0" opacity="0.18"/>
      <path d="M0 600 L0 334 C160 320 326 336 472 312 C582 296 686 286 800 284 L800 600 Z" fill="#d1bb92"/>
      <rect x="178" y="320" width="432" height="168" rx="10" fill="#5d4432"/>
      <rect x="218" y="278" width="352" height="46" fill="#6d523d"/>
      <path d="M296 278 L492 278 L522 132 L332 132 Z" fill="#7b5d43"/>
      <path d="M328 132 L492 132 L474 88 L346 88 Z" fill="#8d6b4d"/>
      <path d="M350 88 L472 88 L456 54 L366 54 Z" fill="#9a7959"/>
      <path d="M368 54 L452 54 L438 28 L382 28 Z" fill="#ab8a67"/>
      <rect x="252" y="344" width="56" height="144" fill="#4a3628"/>
      <rect x="494" y="344" width="56" height="144" fill="#4a3628"/>
      <rect x="356" y="344" width="80" height="144" fill="#3f2f24"/>
      <rect x="382" y="376" width="28" height="112" fill="#1d1713"/>
    </svg>
  `),
  lake: toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#11201b"/>
      <rect x="0" y="0" width="800" height="290" fill="#88b8c9"/>
      <ellipse cx="420" cy="132" rx="220" ry="70" fill="#ffffff" opacity="0.16"/>
      <path d="M0 254 C102 226 218 242 342 222 C468 202 556 240 692 214 C736 206 772 208 800 204 L800 600 L0 600 Z" fill="#436353"/>
      <rect x="0" y="290" width="800" height="310" fill="#557c84"/>
      <path d="M0 346 C160 334 304 352 434 338 C568 324 674 346 800 330 L800 600 L0 600 Z" fill="#678f96" opacity="0.36"/>
      <path d="M146 458 L384 330 L438 330 L198 458 Z" fill="#d0d8d4"/>
      <path d="M198 458 L434 330 L470 330 L236 458 Z" fill="#f2f2ef"/>
      <rect x="384" y="320" width="16" height="138" fill="#dbe4dc"/>
      <rect x="430" y="320" width="16" height="138" fill="#dbe4dc"/>
      <path d="M392 320 C392 278 392 250 398 228" stroke="#e8efe6" stroke-width="4"/>
      <path d="M438 320 C438 278 440 250 448 226" stroke="#e8efe6" stroke-width="4"/>
    </svg>
  `),
};

const routeCards = [
  {
    route: "From Warangal",
    title: "Niagara Trails",
    duration: "2D / 1N",
    price: "From Rs 2,999",
    stops: ["Bogatha", "Kongala", "Campfire"],
    accent: "accent-ember",
  },
  {
    route: "From Hyderabad",
    title: "Waterfalls + Heritage",
    duration: "2D / 1N",
    price: "From Rs 3,999",
    stops: ["Bogatha", "Ramappa", "Laknavaram"],
    accent: "accent-moss",
  },
  {
    route: "One-day escape",
    title: "Forest Trek Escape",
    duration: "1D",
    price: "From Rs 1,499",
    stops: ["Kongala", "Bogatha", "Trail stop"],
    accent: "accent-sand",
  },
];

const facts = [
  { value: "12", label: "Seats per batch" },
  { value: "2", label: "Departure cities" },
  { value: "1", label: "Direct booking channel" },
];

const experienceCards = [
  {
    eyebrow: "Monsoon mood",
    title: "Waterfall rush",
    copy: "Mist, red earth, and loud water up front.",
    size: "card-wide",
    image: scenicImages.waterfall,
  },
  {
    eyebrow: "Forest drive",
    title: "Safari edge",
    copy: "Mulugu roads, dark greens, and offbeat route energy.",
    size: "card-tall",
    image: scenicImages.forest,
  },
  {
    eyebrow: "Night halt",
    title: "Campfire pause",
    copy: "Small groups and low-noise planning.",
    size: "card-small",
    image: scenicImages.campfire,
  },
  {
    eyebrow: "Add-on",
    title: "Heritage loop",
    copy: "Ramappa and Laknavaram keep the routes varied.",
    size: "card-small",
    image: scenicImages.temple,
  },
];

const destinations = [
  { name: "Bogatha", tag: "Waterfall icon", image: scenicImages.waterfall },
  { name: "Kongala", tag: "Offbeat trail", image: scenicImages.waterfall },
  { name: "Eturnagaram", tag: "Wild stretch", image: scenicImages.forest },
  { name: "Ramappa", tag: "Stone and story", image: scenicImages.temple },
  { name: "Laknavaram", tag: "Lake finish", image: scenicImages.lake },
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
            <span>Weekend departures to waterfalls, forests, and heritage trails.</span>
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
            <h1>Chase waterfalls. Wake up in the wild.</h1>
            <p className="hero-subtext">
              Small-group weekend trips from Warangal and Hyderabad to
              Bogatha, Kongala, Eturnagaram, Ramappa, and Laknavaram.
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
              <img
                className="visual-image"
                src={scenicImages.hero}
                alt=""
              />

              <div className="ticket-card ticket-primary">
                <span>Next departure</span>
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
            <p className="kicker">What the weekend feels like</p>
            <h2>Waterfall spray, forest roads, campfire nights, and heritage stops.</h2>
          </div>

          <div className="experience-grid">
            {experienceCards.map((card) => (
              <article
                className={`experience-card ${card.size}`}
                key={card.title}
              >
                <img className="experience-image" src={card.image} alt="" />
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-section" aria-label="Signature destinations">
          <div className="section-heading">
            <p className="kicker">Signature destinations</p>
            <h2>Some of the most scenic stretches on the Telangana Safari map.</h2>
          </div>

          <div className="destination-mosaic">
            {destinations.map((destination, index) => (
              <article
                className={`destination-tile tile-${index + 1}`}
                key={destination.name}
              >
                <img className="destination-image" src={destination.image} alt="" />
                <span>{destination.tag}</span>
                <h3>{destination.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-poster" id="contact">
          <div className="cta-copy">
            <p className="kicker">Book your seat</p>
            <h2>Plan your next Telangana weekend escape with direct WhatsApp booking.</h2>
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
