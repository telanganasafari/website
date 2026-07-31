import { useState } from "react";
import { createPackageEnquiryMessage, whatsappUrl } from "../data/travelContent";

function PackageCard({ cityName, travelPackage }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const enquiryMessage = createPackageEnquiryMessage(travelPackage, cityName);

  return (
    <article className={`package-card${travelPackage.featured ? " package-card-featured" : ""}`}>
      <div className="package-media">
        <img src={travelPackage.image} alt={travelPackage.alt} loading="lazy" />
        {travelPackage.featured ? <span className="package-badge">Popular weekend pick</span> : null}
      </div>

      <div className="package-body">
        <div className="package-heading">
          <p className="eyebrow">{travelPackage.eyebrow}</p>
          <h3>{travelPackage.title}</h3>
        </div>

        <div className="package-meta" aria-label={`${travelPackage.title} details`}>
          <span>{travelPackage.duration}</span>
          <span>{travelPackage.groupSize}</span>
          <span>{travelPackage.pickup}</span>
        </div>

        <div className="route-line" aria-label="Route">
          {travelPackage.route.map((stop) => (
            <span key={stop}>{stop}</span>
          ))}
        </div>

        <button
          className="package-expand-toggle"
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((currentValue) => !currentValue)}
        >
          {isExpanded ? "Hide itinerary" : "View itinerary"}
        </button>

        <div className={`package-collapse${isExpanded ? " is-open" : ""}`}>
          <div className="package-itinerary" aria-label={`${travelPackage.title} itinerary`}>
            {travelPackage.itinerary.map((item) => (
              <div className="itinerary-row" key={`${item.day}-${item.title}`}>
                <span>{item.day}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.stops}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="package-highlights">
            {travelPackage.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="package-includes" aria-label="Included">
            {travelPackage.includes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="package-footer">
          <strong>{travelPackage.price}</strong>
          <a
            className="button button-primary"
            href={whatsappUrl(enquiryMessage)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire about ${travelPackage.title} on WhatsApp`}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

export default PackageCard;
