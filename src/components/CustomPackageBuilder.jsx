import { useMemo, useState } from "react";
import { createCustomPackageEnquiryMessage, whatsappUrl } from "../data/travelContent";

const durationOptions = [
  {
    label: "1 day",
    note: "Best for 2-3 nearby stops",
  },
  {
    label: "2 days / 1 night",
    note: "Good for nature plus heritage",
  },
  {
    label: "3 days / 2 nights",
    note: "Slower route with more buffer",
  },
];

const defaultPickupOptions = ["Warangal pickup", "Hyderabad pickup", "Need pickup advice"];
const defaultGroupSizeOptions = ["2-5 guests", "6-12 guests", "13+ guests"];

function CustomPackageBuilder({
  cityName,
  destinations,
  pickupOptions = defaultPickupOptions,
  groupSizeOptions = defaultGroupSizeOptions,
}) {
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [duration, setDuration] = useState(durationOptions[1].label);
  const [travelDate, setTravelDate] = useState("");
  const [pickup, setPickup] = useState(pickupOptions[0]);
  const [groupSize, setGroupSize] = useState(groupSizeOptions[1]);

  const selectedDestinations = useMemo(
    () => destinations.filter((destination) => selectedTitles.includes(destination.title)),
    [destinations, selectedTitles],
  );

  const enquiryMessage = selectedDestinations.length
    ? createCustomPackageEnquiryMessage({
        destinations: selectedDestinations,
        duration,
        cityName,
        groupSize,
        pickup,
        travelDate,
      })
    : "Hi Telangana Safari, I want to build a custom Telangana Safari package.";

  function toggleDestination(title) {
    setSelectedTitles((currentTitles) =>
      currentTitles.includes(title)
        ? currentTitles.filter((currentTitle) => currentTitle !== title)
        : [...currentTitles, title],
    );
  }

  return (
    <div className="custom-builder">
      <div className="destination-select-grid" aria-label="Selectable destinations">
        {destinations.map((destination) => {
          const isSelected = selectedTitles.includes(destination.title);
          const hasImage = Boolean(destination.image);

          return (
            <button
              className={`destination-option${hasImage ? "" : " destination-option-text"}`}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleDestination(destination.title)}
              key={destination.title}
            >
              {hasImage ? (
                <span className="destination-option-media">
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                </span>
              ) : null}

              <span className="destination-option-content">
                <span className="destination-option-type">{destination.type}</span>
                <strong>{destination.title}</strong>
                <span>{destination.subtitle}</span>
                <small>{destination.distance}</small>
                <span className="destination-select-state">
                  {isSelected ? "Selected" : "Add to custom package"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <aside className="custom-route-panel" aria-label="Custom package summary">
        <div>
          <p className="eyebrow">Custom route</p>
          <h3>Your selected package</h3>
        </div>

        <div className="duration-toggle" aria-label="Trip length">
          <span>Trip length</span>
          <div className="duration-options">
            {durationOptions.map((option) => (
              <button
                className={option.label === duration ? "is-active" : ""}
                type="button"
                aria-pressed={option.label === duration}
                onClick={() => setDuration(option.label)}
                key={option.label}
              >
                <strong>{option.label}</strong>
                <small>{option.note}</small>
              </button>
            ))}
          </div>
        </div>

        <label className="trip-date-field">
          <span>Travel date</span>
          <input
            type="date"
            value={travelDate}
            onInput={(event) => setTravelDate(event.currentTarget.value)}
            onChange={(event) => setTravelDate(event.target.value)}
          />
        </label>

        <div className="detail-toggle" aria-label="Pickup preference">
          <span>Pickup preference</span>
          <div className="detail-options">
            {pickupOptions.map((option) => (
              <button
                className={option === pickup ? "is-active" : ""}
                type="button"
                aria-pressed={option === pickup}
                onClick={() => setPickup(option)}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-toggle" aria-label="Group size">
          <span>Group size</span>
          <div className="detail-options">
            {groupSizeOptions.map((option) => (
              <button
                className={option === groupSize ? "is-active" : ""}
                type="button"
                aria-pressed={option === groupSize}
                onClick={() => setGroupSize(option)}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="selected-route">
          <span className="selected-count">{selectedDestinations.length} selected</span>
          {selectedDestinations.length ? (
            selectedDestinations.map((destination) => (
              <span key={destination.title}>{destination.title}</span>
            ))
          ) : (
            <p className="custom-empty">Choose destinations to create a route request.</p>
          )}
        </div>

        {selectedDestinations.length ? (
          <a
            className="button button-primary"
            href={whatsappUrl(enquiryMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Send custom enquiry
          </a>
        ) : (
          <button className="button button-secondary" type="button" disabled>
            Select destinations first
          </button>
        )}
      </aside>
    </div>
  );
}

export default CustomPackageBuilder;
