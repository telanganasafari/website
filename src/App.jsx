import { useMemo, useState } from "react";
import CustomPackageBuilder from "./components/CustomPackageBuilder";
import PackageCard from "./components/PackageCard";
import {
  cityHubs,
  contactNumber,
  homeQuickFacts,
  howItWorks,
  whatsappUrl,
} from "./data/travelContent";

const logoUrl = `${import.meta.env.BASE_URL}logo.jpg`;
const generalEnquiry = [
  "Hi Telangana Safari, I want to plan a Mulugu trip.",
  "Please help me choose a ready package or custom Mulugu route.",
  "I can share travel date, pickup city, passenger count, preferred duration, and budget.",
].join("\n");

function scrollToSection(sectionId) {
  window.requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function App() {
  const [activeCityId, setActiveCityId] = useState(null);

  const activeCity = useMemo(
    () => cityHubs.find((city) => city.id === activeCityId),
    [activeCityId],
  );

  function openCity(cityId, targetSectionId = "city-detail") {
    const city = cityHubs.find((hub) => hub.id === cityId);

    if (!city?.isBookable) {
      return;
    }

    setActiveCityId(cityId);
    scrollToSection(targetSectionId);
  }

  function showAllHubs() {
    setActiveCityId(null);
    scrollToSection("top");
  }

  return (
    <div className="page-shell">
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <button
          className="brand"
          type="button"
          onClick={showAllHubs}
          aria-label="Telangana Safari home"
        >
          <span className="brand-mark">
            <img src={logoUrl} alt="Telangana Safari logo" />
          </span>
          <span className="brand-lockup">
            <strong>Telangana Safari</strong>
            <span>Telangana travel packages</span>
          </span>
        </button>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#top">Hubs</a>
          {activeCity ? <a href="#packages">Packages</a> : null}
          {activeCity ? <a href="#custom-package">Custom package</a> : null}
          <a className={activeCity ? "nav-secondary" : undefined} href="#how-it-works">
            How it works
          </a>
          <a className={activeCity ? "nav-secondary" : undefined} href="#contact">
            Contact
          </a>
        </nav>

        <a
          className="header-pill"
          href={whatsappUrl(generalEnquiry)}
          target="_blank"
          rel="noreferrer"
        >
          <span>WhatsApp</span>
          <span className="header-pill-number">+91 {contactNumber.slice(2)}</span>
        </a>
      </header>

      <main>
        <section className="hero home-hero" id="top">
          <div className="hero-copy">
            <p className="kicker">Telangana travel hubs</p>
            <h1>Build packages around the right place first</h1>
            <p className="hero-subtext">
              Trips are currently open for Mulugu only. Hyderabad, Warangal, and
              Nizamabad are listed as upcoming coverage, while the live package
              flow stays focused on the routes your operator can handle now.
            </p>

            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => openCity("mulugu", "packages")}>
                Open Mulugu packages
              </button>
              <a
                className="button button-secondary"
                href="#destination-hubs"
              >
                View future hubs
              </a>
            </div>

            <div className="fact-row" aria-label="Telangana package quick facts">
              {homeQuickFacts.map((fact) => (
                <article className="fact-pill" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hub-grid" id="destination-hubs" aria-label="Destination hubs">
            {cityHubs.map((city) => (
              <button
                className={`hub-card${city.isBookable ? "" : " hub-card-unavailable"}`}
                type="button"
                aria-pressed={city.isBookable ? city.id === activeCityId : undefined}
                aria-disabled={city.isBookable ? undefined : "true"}
                disabled={!city.isBookable}
                onClick={() => openCity(city.id)}
                key={city.id}
              >
                <span className="hub-card-media">
                  <img src={city.image} alt={city.imageAlt} loading="lazy" />
                </span>
                <span className="hub-card-content">
                  <span className="hub-card-status">{city.availabilityLabel}</span>
                  <span className="eyebrow">{city.eyebrow}</span>
                  <strong>{city.cardTitle}</strong>
                  <span>{city.summary}</span>
                  <span className="hub-card-action">
                    {city.isBookable ? "Open packages" : "Route preview only"}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {activeCity ? (
          <>
            <section className="hero city-detail-hero" id="city-detail">
              <div className="hero-copy">
                <p className="kicker">{activeCity.region}</p>
                <h1>{activeCity.heroTitle}</h1>
                <p className="hero-subtext">{activeCity.intro}</p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#packages">
                    Explore packages
                  </a>
                  <button className="button button-secondary" type="button" onClick={showAllHubs}>
                    All hubs
                  </button>
                </div>

                <div className="fact-row" aria-label={`${activeCity.name} package quick facts`}>
                  {activeCity.quickFacts.map((fact) => (
                    <article className="fact-pill" key={fact.label}>
                      <strong>{fact.value}</strong>
                      <span>{fact.label}</span>
                    </article>
                  ))}
                </div>

                <div className="chip-row" aria-label={`${activeCity.name} places covered`}>
                  {activeCity.placeChips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>

              <aside className="hero-feature" aria-label={`${activeCity.name} package planner`}>
                <img src={activeCity.image} alt={activeCity.imageAlt} fetchpriority="high" />
                <div className="hero-feature-panel">
                  <p className="eyebrow">Package planner</p>
                  <h2>{activeCity.panelTitle}</h2>
                  <div className="hero-feature-meta">
                    {activeCity.panelMeta.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="route-line">
                    {activeCity.routeThemes.map((theme) => (
                      <span key={theme}>{theme}</span>
                    ))}
                  </div>
                </div>
              </aside>
            </section>

            <section className="packages-section" id="packages">
              <div className="section-heading">
                <p className="kicker">Tour packages</p>
                <h2>{activeCity.packageHeading.title}</h2>
                <p>{activeCity.packageHeading.copy}</p>
              </div>

              <div className="package-grid">
                {activeCity.packages.map((travelPackage) => (
                  <PackageCard
                    cityName={activeCity.name}
                    travelPackage={travelPackage}
                    key={travelPackage.id}
                  />
                ))}
              </div>
            </section>

            <section className="custom-package-section" id="custom-package">
              <div className="section-heading">
                <p className="kicker">Build your own package</p>
                <h2>{activeCity.customHeading.title}</h2>
                <p>{activeCity.customHeading.copy}</p>
              </div>

              <CustomPackageBuilder
                cityName={activeCity.name}
                destinations={activeCity.destinations}
                pickupOptions={activeCity.pickupOptions}
              />
            </section>
          </>
        ) : null}

        <section className="process-section" id="how-it-works">
          <div className="section-heading">
            <p className="kicker">How it works</p>
            <h2>Simple planning, clear routes, local support</h2>
          </div>

          <div className="process-grid">
            {howItWorks.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="kicker">Plan your journey</p>
            <h2>Start with Mulugu, then customize the route around your group</h2>
          </div>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href={whatsappUrl(generalEnquiry)}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp
            </a>
            <p>Share travel date, pickup city, passenger count, and Mulugu package name.</p>
          </div>
        </section>
      </main>

      <MobileStickyBar activeCity={activeCity} openCity={openCity} />
    </div>
  );
}

function MobileStickyBar({ activeCity, openCity }) {
  if (activeCity) {
    return null;
  }

  return (
    <aside className="mobile-sticky-bar" aria-label="Quick enquiry actions">
      <div>
        <span>Mulugu</span>
        <strong>Trips open now</strong>
      </div>

      <div className="mobile-sticky-actions">
        {activeCity ? (
          <button
            className="button button-secondary"
            type="button"
            onClick={() => scrollToSection("custom-package")}
          >
            Custom
          </button>
        ) : (
          <button className="button button-secondary" type="button" onClick={() => openCity("mulugu", "packages")}>
            Packages
          </button>
        )}
        <a
          className="button button-primary"
          href={whatsappUrl(generalEnquiry)}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </aside>
  );
}

export default App;
