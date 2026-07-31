import bogathaPoster from "../assets/posters/bogatha.jpg";
import hyderabadCityImage from "../assets/cities/hyderabad-city.jpg";
import heroPackagePlanner from "../assets/hero-package-planner.jpg";
import janagalanchaPoster from "../assets/posters/janagalancha-fort.jpg";
import kondaparthiPoster from "../assets/posters/kondaparthi-tribal-village.jpg";
import kotaGulluPoster from "../assets/posters/kota-gullu.jpg";
import laknavaramPoster from "../assets/posters/laknavaram-lake.jpg";
import mallurPoster from "../assets/posters/mallur-narasimha.jpg";
import medaramPoster from "../assets/posters/medaram.jpg";
import nizamabadCityImage from "../assets/cities/nizamabad-city.jpg";
import ramappaPoster from "../assets/posters/ramappa.jpg";
import warangalCityImage from "../assets/cities/warangal-city.jpg";

export const contactNumber = "919700938985";

export const heroPlannerImage = heroPackagePlanner;
export const heroPlannerImageAlt =
  "Custom Telangana Safari hero image showing forest roads, water, waterfall mist, and heritage scenery.";

export function whatsappUrl(message) {
  return `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`;
}

function formatRoute(route) {
  return route.join(" > ");
}

function formatTravelDate(travelDate) {
  if (!travelDate) {
    return "Not selected yet";
  }

  return travelDate;
}

export function createPackageEnquiryMessage(travelPackage, cityName = "Telangana") {
  const itinerary = travelPackage.itinerary
    .map((item) => `${item.day}: ${item.title} - ${item.stops}`)
    .join(" | ");

  return [
    "Hi Telangana Safari, I want to enquire about this ready package.",
    `Destination hub: ${cityName}`,
    `Package: ${travelPackage.title}`,
    `Duration: ${travelPackage.duration}`,
    `Route: ${formatRoute(travelPackage.route)}`,
    `Pickup shown: ${travelPackage.pickup}`,
    `Group size shown: ${travelPackage.groupSize}`,
    `Price shown: ${travelPackage.price}`,
    `Itinerary shown: ${itinerary}`,
    `Includes shown: ${travelPackage.includes.join(", ")}`,
    "Please share availability, exact pricing, vehicle/stay options, and the details you need from me.",
  ].join("\n");
}

export function createCustomPackageEnquiryMessage({
  cityName = "Telangana",
  destinations,
  duration,
  groupSize,
  pickup,
  travelDate,
}) {
  const destinationLines = destinations
    .map(
      (destination, index) =>
        `${index + 1}. ${destination.title} - ${destination.type}; ${destination.distance}`,
    )
    .join("\n");

  return [
    "Hi Telangana Safari, I want to build a custom package.",
    `Destination hub: ${cityName}`,
    `Trip length: ${duration}`,
    `Travel date: ${formatTravelDate(travelDate)}`,
    `Pickup preference: ${pickup}`,
    `Group size: ${groupSize}`,
    `Selected destinations (${destinations.length}):`,
    destinationLines,
    "Please suggest the best route order, feasibility for this duration, exact pricing, vehicle/stay options, and timing.",
  ].join("\n");
}

export const quickFacts = [
  { value: "7", label: "Ready packages" },
  { value: "1-3", label: "Day plans" },
  { value: "15+", label: "Route stops" },
  { value: "2", label: "Pickup cities" },
];

export const placeChips = [
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

export const travelPackages = [
  {
    id: "mulugu-classic-weekend",
    title: "Mulugu Classic Weekend",
    eyebrow: "Balanced 2-day route",
    duration: "2 days / 1 night",
    price: "From Rs 4,499",
    groupSize: "8-12 guests",
    pickup: "Warangal or Hyderabad",
    image: laknavaramPoster,
    alt: "Telangana Safari poster featuring Laknavaram Lake.",
    route: ["Ramappa", "Laknavaram", "Tadvai", "Bogatha"],
    itinerary: [
      {
        day: "Day 1",
        title: "Heritage and lake loop",
        stops: "Ramappa Temple, Laknavaram Lake, forest-side stay assist",
      },
      {
        day: "Day 2",
        title: "Waterfall drive",
        stops: "Tadvai route, Bogatha Waterfall, evening return",
      },
    ],
    highlights: [
      "Best starter package when the group wants nature, heritage, and a major waterfall",
      "Works well for families and first-time Mulugu travellers",
    ],
    includes: ["Transport", "Stay assist", "Timing plan", "Local support"],
    featured: true,
  },
  {
    id: "kakatiya-lake-day-circuit",
    title: "Kakatiya Lake Day Circuit",
    eyebrow: "1-day, 3 major stops",
    duration: "1 day",
    price: "From Rs 1,899",
    groupSize: "6-12 guests",
    pickup: "Warangal",
    image: ramappaPoster,
    alt: "Telangana Safari poster featuring Ramappa Heritage Site.",
    route: ["Ramappa", "Laknavaram", "Kota Gullu"],
    itinerary: [
      {
        day: "Morning",
        title: "Temple heritage",
        stops: "Ramappa Temple and Kota Gullu stone complex",
      },
      {
        day: "Afternoon",
        title: "Lake time",
        stops: "Laknavaram bridge views, boating window, sunset return",
      },
    ],
    highlights: [
      "Compact route for travellers who want more than one place in a single day",
      "Strong mix of architecture, lake scenery, and easy road time",
    ],
    includes: ["Cab plan", "Stop order", "Entry assist", "Food halt"],
  },
  {
    id: "bogatha-forest-day-circuit",
    title: "Bogatha Forest Day Circuit",
    eyebrow: "1-day nature run",
    duration: "1 full day",
    price: "From Rs 2,199",
    groupSize: "6-12 guests",
    pickup: "Warangal",
    image: bogathaPoster,
    alt: "Telangana Safari poster featuring Bogatha Waterfall.",
    route: ["Tadvai", "Eturnagaram", "Bogatha"],
    itinerary: [
      {
        day: "Early start",
        title: "Forest approach",
        stops: "Warangal pickup, Tadvai forest road, breakfast halt",
      },
      {
        day: "Midday",
        title: "Waterfall focus",
        stops: "Bogatha Waterfall, Eturnagaram side drive, tea stop return",
      },
    ],
    highlights: [
      "A fuller one-day waterfall plan instead of a single stop and return",
      "Best during good water flow months and early departures",
    ],
    includes: ["Transport", "Route timing", "Photo stops", "Phone support"],
  },
  {
    id: "tribal-fort-weekend",
    title: "Tribal Village and Fort Weekend",
    eyebrow: "Culture-led 2 days",
    duration: "2 days / 1 night",
    price: "Custom quote",
    groupSize: "Small groups",
    pickup: "Warangal",
    image: kondaparthiPoster,
    alt: "Telangana Safari poster featuring Kondaparthi Tribal Village.",
    route: ["Kondaparthi", "Janagalancha", "Village trails"],
    itinerary: [
      {
        day: "Day 1",
        title: "Village context",
        stops: "Kondaparthi arrival, local food planning, guided village walk",
      },
      {
        day: "Day 2",
        title: "Fort and hill route",
        stops: "Janagalancha Fort, short trek window, return via countryside roads",
      },
    ],
    highlights: [
      "Slower package for student groups, photographers, and culture-focused travellers",
      "Built around respectful local hosting rather than checklist tourism",
    ],
    includes: ["Local host", "Walk plan", "Stay assist", "Group support"],
  },
  {
    id: "grand-mulugu-three-day",
    title: "Grand Mulugu Three-Day Circuit",
    eyebrow: "Complete 3-day plan",
    duration: "3 days / 2 nights",
    price: "From Rs 7,999",
    groupSize: "8-14 guests",
    pickup: "Warangal or Hyderabad",
    image: kotaGulluPoster,
    alt: "Telangana Safari poster featuring Kota Gullu.",
    route: ["Laknavaram", "Ramappa", "Kota Gullu", "Medaram", "Bogatha", "Mallur"],
    itinerary: [
      {
        day: "Day 1",
        title: "Lake and temple start",
        stops: "Laknavaram Lake, Ramappa Temple, Kota Gullu, night halt planning",
      },
      {
        day: "Day 2",
        title: "Forest and waterfall",
        stops: "Medaram route, Tadvai drive, Bogatha Waterfall",
      },
      {
        day: "Day 3",
        title: "Spiritual close",
        stops: "Mallur Narasimha Swamy Temple, local lunch halt, return",
      },
    ],
    highlights: [
      "For outstation groups who want the district without rushing every stop",
      "Gives enough time for photos, meals, rest, and route changes",
    ],
    includes: ["Transport", "2-night plan", "Route buffer", "Trip support"],
  },
  {
    id: "mallur-spiritual-route",
    title: "Mallur Spiritual Forest Trail",
    eyebrow: "1-day devotional route",
    duration: "1 day",
    price: "From Rs 2,499",
    groupSize: "6-12 guests",
    pickup: "Warangal",
    image: mallurPoster,
    alt: "Telangana Safari poster featuring Mallur Narasimha Swamy Temple.",
    route: ["Mallur Temple", "Hemachala Hills", "Forest drive"],
    itinerary: [
      {
        day: "Morning",
        title: "Temple visit",
        stops: "Mallur Narasimha Swamy Temple and hill-side surroundings",
      },
      {
        day: "Afternoon",
        title: "Quiet return",
        stops: "Forest road drive, meal halt, relaxed Warangal drop",
      },
    ],
    highlights: [
      "Good fit for families, senior travellers, and devotional groups",
      "Less rushed than adding Mallur as a late stop after a long waterfall day",
    ],
    includes: ["Cab plan", "Temple timing", "Meal halt", "Route support"],
  },
  {
    id: "medaram-managed-visit",
    title: "Medaram Managed Visit",
    eyebrow: "Seasonal crowd plan",
    duration: "1-2 days",
    price: "Custom quote",
    groupSize: "Family or group",
    pickup: "Warangal or Hyderabad",
    image: medaramPoster,
    alt: "Telangana Safari poster featuring Medaram Sammakka Sarakka Jathara.",
    route: ["Medaram", "Sammakka Saralamma", "Managed return"],
    itinerary: [
      {
        day: "Plan A",
        title: "Same-day visit",
        stops: "Early pickup, Medaram darshan window, return before late rush",
      },
      {
        day: "Plan B",
        title: "Overnight buffer",
        stops: "Arrival support, rest halt planning, next-day return",
      },
    ],
    highlights: [
      "Made for festival dates, family groups, and crowd-sensitive planning",
      "Focuses on timing, parking approach, walking distance, and return comfort",
    ],
    includes: ["Crowd timing", "Pickup plan", "Phone support", "Return plan"],
  },
];

export const destinationStories = [
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

const hyderabadPackages = [
  {
    id: "hyderabad-old-city-heritage-day",
    title: "Old City Heritage Day",
    eyebrow: "1-day heritage loop",
    duration: "1 day",
    price: "Custom quote",
    groupSize: "2-12 guests",
    pickup: "Hyderabad",
    image: hyderabadCityImage,
    alt: "Custom illustration of Hyderabad heritage, fort, lake, and city skyline.",
    route: ["Charminar", "Laad Bazaar", "Chowmahalla Palace", "Salar Jung Museum"],
    itinerary: [
      {
        day: "Morning",
        title: "Old city icons",
        stops: "Charminar, Laad Bazaar walk, breakfast or chai halt",
      },
      {
        day: "Afternoon",
        title: "Palace and museum close",
        stops: "Chowmahalla Palace, Salar Jung Museum, relaxed drop",
      },
    ],
    highlights: [
      "Good first Hyderabad route for families, guests, and short-stay travellers",
      "Keeps the day focused around heritage, food halts, and walkable old-city stops",
    ],
    includes: ["Cab plan", "Stop order", "Food halt", "Local support"],
    featured: true,
  },
  {
    id: "hyderabad-golconda-evening-circuit",
    title: "Golconda and Tombs Evening Circuit",
    eyebrow: "Fort-led half-day plan",
    duration: "Half day / evening",
    price: "Custom quote",
    groupSize: "2-12 guests",
    pickup: "Hyderabad",
    image: hyderabadCityImage,
    alt: "Custom illustration of Hyderabad heritage, fort, lake, and city skyline.",
    route: ["Qutb Shahi Tombs", "Golconda Fort", "Taramati Baradari"],
    itinerary: [
      {
        day: "Afternoon",
        title: "Qutb Shahi context",
        stops: "Qutb Shahi Tombs, photo stops, fort approach",
      },
      {
        day: "Evening",
        title: "Fort finish",
        stops: "Golconda Fort exterior and evening timing plan",
      },
    ],
    highlights: [
      "Useful for guests who only have the second half of the day free",
      "Pairs strong history with lower heat and better evening light",
    ],
    includes: ["Cab plan", "Timing plan", "Photo stops", "Phone support"],
  },
  {
    id: "hyderabad-family-weekend",
    title: "Hyderabad Family Weekend",
    eyebrow: "2-day city break",
    duration: "2 days / 1 night",
    price: "Custom quote",
    groupSize: "Family or group",
    pickup: "Hyderabad",
    image: hyderabadCityImage,
    alt: "Custom illustration of Hyderabad heritage, fort, lake, and city skyline.",
    route: ["Charminar", "Golconda", "Hussain Sagar", "Ramoji Film City"],
    itinerary: [
      {
        day: "Day 1",
        title: "Heritage and lake evening",
        stops: "Charminar, Golconda side route, Hussain Sagar evening window",
      },
      {
        day: "Day 2",
        title: "Family attraction day",
        stops: "Ramoji Film City or Statue of Equality option, return drop",
      },
    ],
    highlights: [
      "Better for families who want a mix of monuments, food, lake time, and attractions",
      "Can be tuned toward heritage, shopping, or children-friendly stops",
    ],
    includes: ["Transport", "Route buffer", "Stay assist", "Trip support"],
  },
];

const hyderabadDestinations = [
  {
    title: "Charminar",
    subtitle: "Hyderabad's iconic landmark",
    distance: "Old City, Hyderabad",
    type: "Heritage landmark",
    summary: "Four-minaret city icon, old-city walk, bazaar access, and food stops.",
  },
  {
    title: "Golconda Fort",
    subtitle: "Fort complex and Deccan history",
    distance: "Western Hyderabad",
    type: "Fort route",
    summary: "Large fort route with strong history, viewpoints, and evening planning potential.",
  },
  {
    title: "Qutb Shahi Tombs",
    subtitle: "Royal necropolis",
    distance: "Near Golconda",
    type: "Heritage garden",
    summary: "A quieter heritage stop that pairs naturally with Golconda Fort.",
  },
  {
    title: "Chowmahalla Palace",
    subtitle: "Nizam-era palace setting",
    distance: "Old City, Hyderabad",
    type: "Palace visit",
    summary: "Useful for guests who want royal Hyderabad, architecture, and indoor time.",
  },
  {
    title: "Salar Jung Museum",
    subtitle: "Museum and collections",
    distance: "Near Afzal Gunj",
    type: "Museum stop",
    summary: "A practical cultural stop for hot afternoons or multi-generation groups.",
  },
  {
    title: "Hussain Sagar Lake",
    subtitle: "Lakefront evening window",
    distance: "Central Hyderabad",
    type: "Lake evening",
    summary: "Works well as a relaxed finish after heritage or shopping routes.",
  },
  {
    title: "Statue of Equality",
    subtitle: "Spiritual and architectural campus",
    distance: "Near Shamshabad",
    type: "Spiritual route",
    summary: "A structured spiritual stop that can be combined with airport-side pickup plans.",
  },
  {
    title: "Ramoji Film City",
    subtitle: "Family entertainment day",
    distance: "Hyderabad outskirts",
    type: "Family attraction",
    summary: "Best as a separate day or a weekend package anchor for family groups.",
  },
];

const warangalPackages = [
  {
    id: "warangal-kakatiya-heritage-day",
    title: "Warangal Kakatiya Heritage Day",
    eyebrow: "1-day heritage loop",
    duration: "1 day",
    price: "Custom quote",
    groupSize: "4-12 guests",
    pickup: "Warangal or Hyderabad",
    image: warangalCityImage,
    alt: "Custom illustration of Warangal Kakatiya heritage, carved stone, and lake scenery.",
    route: ["Thousand Pillar Temple", "Bhadrakali Temple", "Warangal Fort", "Kakatiya Rock Garden"],
    itinerary: [
      {
        day: "Morning",
        title: "Temple and lake start",
        stops: "Thousand Pillar Temple, Bhadrakali Temple, breakfast or lunch halt",
      },
      {
        day: "Afternoon",
        title: "Fort and heritage close",
        stops: "Warangal Fort, Kakatiya Rock Garden, optional sound and light timing",
      },
    ],
    highlights: [
      "Strong single-day Warangal route without pushing deep into Mulugu",
      "Works for school, family, photography, and heritage-focused groups",
    ],
    includes: ["Cab plan", "Stop order", "Entry assist", "Local support"],
    featured: true,
  },
  {
    id: "warangal-ramappa-laknavaram-weekend",
    title: "Ramappa and Laknavaram Weekend",
    eyebrow: "2-day lake and temple route",
    duration: "2 days / 1 night",
    price: "Custom quote",
    groupSize: "6-14 guests",
    pickup: "Warangal or Hyderabad",
    image: ramappaPoster,
    alt: "Telangana Safari poster featuring Ramappa Heritage Site.",
    route: ["Warangal", "Ramappa Temple", "Ramappa Lake", "Laknavaram Lake"],
    itinerary: [
      {
        day: "Day 1",
        title: "Warangal heritage base",
        stops: "Warangal Fort, Thousand Pillar Temple, night halt planning",
      },
      {
        day: "Day 2",
        title: "UNESCO and lake circuit",
        stops: "Ramappa Temple, Ramappa Lake, Laknavaram Lake, return",
      },
    ],
    highlights: [
      "A slower version of the official Warangal-Ramappa-Laknavaram circuit",
      "Gives time for lake stops and heritage without compressing everything into one day",
    ],
    includes: ["Transport", "Stay assist", "Route buffer", "Phone support"],
  },
  {
    id: "warangal-complete-two-day",
    title: "Complete Warangal Two-Day Circuit",
    eyebrow: "Full heritage weekend",
    duration: "2 days / 1 night",
    price: "Custom quote",
    groupSize: "6-14 guests",
    pickup: "Hyderabad or Warangal",
    image: warangalCityImage,
    alt: "Custom illustration of Warangal Kakatiya heritage, carved stone, and lake scenery.",
    route: ["Bhongir Fort", "Warangal Fort", "Bhadrakali", "Ramappa", "Laknavaram"],
    itinerary: [
      {
        day: "Day 1",
        title: "Hyderabad to Warangal approach",
        stops: "Optional Bhongir Fort halt, Warangal Fort, Bhadrakali Temple",
      },
      {
        day: "Day 2",
        title: "Ramappa and lake finish",
        stops: "Ramappa Temple, lake stop, Laknavaram, evening return",
      },
    ],
    highlights: [
      "Best for Hyderabad groups who want a complete Kakatiya weekend",
      "Can be made more spiritual, heritage-heavy, or nature-heavy",
    ],
    includes: ["Transport", "Timing plan", "Stay assist", "Trip support"],
  },
];

const warangalDestinations = [
  {
    title: "Warangal Fort",
    subtitle: "Kakatiya stone gateway",
    distance: "In Warangal",
    type: "Fort heritage",
    summary: "Core city landmark for Kakatiya gateways, stone carvings, and history context.",
  },
  {
    title: "Thousand Pillar Temple",
    subtitle: "Carved temple architecture",
    distance: "Hanamkonda",
    type: "Temple heritage",
    summary: "A high-value temple stop with sculpture, pillars, and Kakatiya craft detail.",
  },
  {
    title: "Bhadrakali Temple",
    subtitle: "Lake-side spiritual stop",
    distance: "Warangal-Hanamkonda",
    type: "Spiritual route",
    summary: "Devotional stop that also works well as a scenic lake-side break.",
  },
  {
    title: "Ramappa Temple",
    subtitle: "UNESCO world heritage",
    distance: "About 70 km from Warangal",
    type: "UNESCO route",
    summary: "Major Kakatiya temple anchor with strong heritage and photography value.",
    image: ramappaPoster,
    alt: "Telangana Safari poster featuring Ramappa Heritage Site.",
  },
  {
    title: "Laknavaram Lake",
    subtitle: "Bridge and lake views",
    distance: "About 72 km from Warangal",
    type: "Lake circuit",
    summary: "Nature and boating-friendly stop that pairs with Ramappa or Mulugu routes.",
    image: laknavaramPoster,
    alt: "Telangana Safari poster featuring Laknavaram Lake.",
  },
  {
    title: "Kakatiya Rock Garden",
    subtitle: "Short city add-on",
    distance: "In Warangal",
    type: "Family stop",
    summary: "Compact add-on for families and groups that want a lighter city stop.",
  },
  {
    title: "Bhongir Fort",
    subtitle: "Rock fort approach from Hyderabad",
    distance: "On Hyderabad-Warangal route",
    type: "Fort trek",
    summary: "Useful as an approach halt for Hyderabad groups heading toward Warangal.",
  },
];

const nizamabadPackages = [
  {
    id: "nizamabad-fort-lake-day",
    title: "Nizamabad Fort and Lake Day",
    eyebrow: "1-day city circuit",
    duration: "1 day",
    price: "Custom quote",
    groupSize: "4-12 guests",
    pickup: "Nizamabad or Hyderabad",
    image: nizamabadCityImage,
    alt: "Custom illustration of Nizamabad fort, lake, temple stone, and greenery.",
    route: ["Nizamabad Fort", "Raghunatha Temple", "Ali Sagar", "Ashok Sagar"],
    itinerary: [
      {
        day: "Morning",
        title: "Fort and temple context",
        stops: "Nizamabad Fort, Raghunatha Temple, local food halt",
      },
      {
        day: "Afternoon",
        title: "Lake and garden close",
        stops: "Ali Sagar, Ashok Sagar, boating or garden time if available",
      },
    ],
    highlights: [
      "Good introductory route for guests already near Nizamabad",
      "Combines fort history, temple context, lake views, and family-friendly garden stops",
    ],
    includes: ["Cab plan", "Stop order", "Food halt", "Local support"],
    featured: true,
  },
  {
    id: "nizamabad-dichpally-temple-circuit",
    title: "Dichpally Temple Circuit",
    eyebrow: "Temple and fort day",
    duration: "1 day",
    price: "Custom quote",
    groupSize: "4-12 guests",
    pickup: "Nizamabad",
    image: nizamabadCityImage,
    alt: "Custom illustration of Nizamabad fort, lake, temple stone, and greenery.",
    route: ["Dichpally Ramalayam", "Nizamabad Fort", "Ali Sagar"],
    itinerary: [
      {
        day: "Morning",
        title: "Dichpally temple start",
        stops: "Dichpally Ramalayam, temple steps, photo stop",
      },
      {
        day: "Afternoon",
        title: "Fort and lake finish",
        stops: "Nizamabad Fort, Ali Sagar garden and reservoir side",
      },
    ],
    highlights: [
      "Built for devotional groups that also want a practical sightseeing route",
      "Shorter road time than trying to add too many northern stops in one day",
    ],
    includes: ["Cab plan", "Temple timing", "Meal halt", "Phone support"],
  },
  {
    id: "nizamabad-nature-weekend",
    title: "North Telangana Nature Weekend",
    eyebrow: "2-day relaxed route",
    duration: "2 days / 1 night",
    price: "Custom quote",
    groupSize: "6-14 guests",
    pickup: "Hyderabad or Nizamabad",
    image: nizamabadCityImage,
    alt: "Custom illustration of Nizamabad fort, lake, temple stone, and greenery.",
    route: ["Mallaram Forest", "Ali Sagar", "Ashok Sagar", "Dichpally"],
    itinerary: [
      {
        day: "Day 1",
        title: "Forest and lake side",
        stops: "Mallaram Forest, Ali Sagar, rest halt planning",
      },
      {
        day: "Day 2",
        title: "Temple and fort close",
        stops: "Dichpally Ramalayam, Nizamabad Fort, Ashok Sagar, return",
      },
    ],
    highlights: [
      "A calmer weekend plan for families, seniors, and low-rush groups",
      "Pairs light nature stops with temple and fort context",
    ],
    includes: ["Transport", "Stay assist", "Route buffer", "Trip support"],
  },
];

const nizamabadDestinations = [
  {
    title: "Dichpally Ramalayam",
    subtitle: "Historic temple steps and carvings",
    distance: "About 20 km from Nizamabad",
    type: "Temple heritage",
    summary: "Strong devotional and architecture stop on the Hyderabad-Nizamabad approach.",
  },
  {
    title: "Nizamabad Fort",
    subtitle: "Fort and Raghunatha Temple context",
    distance: "In Nizamabad",
    type: "Fort route",
    summary: "City heritage anchor with fort setting and temple context.",
  },
  {
    title: "Ali Sagar",
    subtitle: "Reservoir, gardens, and picnic stop",
    distance: "Near Nizamabad",
    type: "Lake garden",
    summary: "Family-friendly lake and garden route with relaxed picnic appeal.",
  },
  {
    title: "Ashok Sagar",
    subtitle: "Reservoir and rock garden",
    distance: "On Basar road",
    type: "Lake circuit",
    summary: "Good add-on for water views, gardens, and short-route leisure.",
  },
  {
    title: "Mallaram Forest",
    subtitle: "Forest picnic and viewpoint",
    distance: "About 8 km from Nizamabad",
    type: "Eco route",
    summary: "Light nature stop for forest surroundings, short walks, and birding context.",
  },
  {
    title: "Basar Saraswathi Temple",
    subtitle: "Aksharabhyasam pilgrimage route",
    distance: "North Telangana route",
    type: "Pilgrimage add-on",
    summary: "Optional devotional extension for groups planning a longer Nizamabad-side trip.",
  },
];

export const homeQuickFacts = [
  { value: "1", label: "Bookable hub" },
  { value: "7", label: "Mulugu packages" },
  { value: "1-3", label: "Day plans" },
  { value: "3", label: "Future hubs" },
];

export const cityHubs = [
  {
    id: "mulugu",
    name: "Mulugu",
    isBookable: true,
    availabilityLabel: "Trips open",
    cardTitle: "Mulugu Forest and Heritage",
    region: "Mulugu district, Telangana",
    eyebrow: "Waterfalls, lakes, tribal routes",
    heroTitle: "Discover the wild heart of Telangana",
    summary:
      "Waterfalls, Laknavaram lake views, Ramappa heritage, Medaram, forest drives, and village-side routes.",
    intro:
      "Choose from multi-stop day circuits, 2-day weekend plans, and slower 3-day Mulugu routes across waterfalls, lakes, Kakatiya heritage, temples, village trails, and festival travel.",
    image: heroPlannerImage,
    imageAlt: heroPlannerImageAlt,
    panelTitle: "Choose your trip by time",
    panelMeta: ["1-day circuits", "2-day weekends", "3-day routes"],
    routeThemes: ["Waterfalls", "Lakes", "Heritage", "Village trails"],
    quickFacts,
    placeChips,
    packages: travelPackages,
    destinations: destinationStories,
    pickupOptions: ["Warangal pickup", "Hyderabad pickup", "Need pickup advice"],
    packageHeading: {
      title: "One-day circuits, weekend routes, and a full three-day plan",
      copy:
        "Each package has a different route shape, so the choice is about how much time you have and what kind of trip your group wants.",
    },
    customHeading: {
      title: "Select the places your group wants to cover",
      copy:
        "Combine waterfalls, lakes, temples, village trails, and festival routes into a custom enquiry for your date, pickup city, and group.",
    },
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    isBookable: false,
    availabilityLabel: "Coming soon",
    cardTitle: "Hyderabad City Heritage",
    region: "Hyderabad, Telangana",
    eyebrow: "Pearls, palaces, forts, food",
    heroTitle: "Plan Hyderabad beyond a quick stop",
    summary:
      "Old City walks, Golconda, palace routes, museums, lake evenings, family attractions, and food-led city breaks.",
    intro:
      "Build Hyderabad packages around heritage, food, palaces, museums, lake evenings, or family-friendly weekend routes without making the day feel rushed.",
    image: hyderabadCityImage,
    imageAlt: "Custom illustration of Hyderabad heritage, fort, lake, and city skyline.",
    panelTitle: "Heritage, food, and city breaks",
    panelMeta: ["Half-day plans", "1-day circuits", "2-day weekends"],
    routeThemes: ["Charminar", "Golconda", "Palaces", "Lake evenings"],
    quickFacts: [
      { value: "3", label: "Ready packages" },
      { value: "0.5-2", label: "Day plans" },
      { value: "8", label: "Selectable stops" },
      { value: "1", label: "Main pickup city" },
    ],
    placeChips: ["Charminar", "Golconda", "Qutb Shahi Tombs", "Chowmahalla", "Salar Jung", "Hussain Sagar"],
    packages: hyderabadPackages,
    destinations: hyderabadDestinations,
    pickupOptions: ["Hyderabad pickup", "Airport pickup", "Need pickup advice"],
    packageHeading: {
      title: "Heritage days, fort evenings, and family weekends",
      copy:
        "Hyderabad packages should separate old-city heritage, fort timing, food halts, and family attractions so groups can choose the right pace.",
    },
    customHeading: {
      title: "Select your Hyderabad stops",
      copy:
        "Choose heritage, food, lake, palace, museum, or family-attraction stops and send a clean route request.",
    },
  },
  {
    id: "warangal",
    name: "Warangal",
    isBookable: false,
    availabilityLabel: "Coming soon",
    cardTitle: "Warangal Kakatiya Circuit",
    region: "Warangal, Telangana",
    eyebrow: "Kakatiya heritage and lake routes",
    heroTitle: "Open the Kakatiya heritage circuit",
    summary:
      "Warangal Fort, Thousand Pillar Temple, Bhadrakali, Ramappa, Laknavaram, and Hyderabad approach routes.",
    intro:
      "Use Warangal as a heritage-first hub, then extend into Ramappa and Laknavaram when groups have a full day or a weekend.",
    image: warangalCityImage,
    imageAlt: "Custom illustration of Warangal Kakatiya heritage, carved stone, and lake scenery.",
    panelTitle: "Forts, temples, and lake extensions",
    panelMeta: ["1-day heritage", "2-day weekends", "Hyderabad pickup"],
    routeThemes: ["Warangal Fort", "Ramappa", "Laknavaram", "Bhadrakali"],
    quickFacts: [
      { value: "3", label: "Ready packages" },
      { value: "1-2", label: "Day plans" },
      { value: "7", label: "Selectable stops" },
      { value: "2", label: "Pickup cities" },
    ],
    placeChips: ["Warangal Fort", "Thousand Pillar", "Bhadrakali", "Ramappa", "Laknavaram", "Bhongir"],
    packages: warangalPackages,
    destinations: warangalDestinations,
    pickupOptions: ["Warangal pickup", "Hyderabad pickup", "Need pickup advice"],
    packageHeading: {
      title: "City heritage days and Ramappa-Laknavaram weekends",
      copy:
        "Warangal works as a city circuit by itself, or as a wider Kakatiya route when Ramappa and Laknavaram are added.",
    },
    customHeading: {
      title: "Select your Kakatiya route",
      copy:
        "Choose city heritage, UNESCO temple, lake, or fort-trek stops and send the route for planning.",
    },
  },
  {
    id: "nizamabad",
    name: "Nizamabad",
    isBookable: false,
    availabilityLabel: "Coming soon",
    cardTitle: "Nizamabad Lakes and Forts",
    region: "Nizamabad, Telangana",
    eyebrow: "Fort, temple, lake, forest",
    heroTitle: "Build a calmer north Telangana route",
    summary:
      "Nizamabad Fort, Dichpally Ramalayam, Ali Sagar, Ashok Sagar, Mallaram Forest, and longer pilgrimage add-ons.",
    intro:
      "Position Nizamabad for families and groups that want temple heritage, lake gardens, fort context, and softer nature routes in north Telangana.",
    image: nizamabadCityImage,
    imageAlt: "Custom illustration of Nizamabad fort, lake, temple stone, and greenery.",
    panelTitle: "North Telangana, less rushed",
    panelMeta: ["1-day city routes", "2-day nature", "Pilgrim add-ons"],
    routeThemes: ["Fort", "Dichpally", "Ali Sagar", "Mallaram"],
    quickFacts: [
      { value: "3", label: "Ready packages" },
      { value: "1-2", label: "Day plans" },
      { value: "6", label: "Selectable stops" },
      { value: "2", label: "Pickup cities" },
    ],
    placeChips: ["Nizamabad Fort", "Dichpally", "Ali Sagar", "Ashok Sagar", "Mallaram", "Basar add-on"],
    packages: nizamabadPackages,
    destinations: nizamabadDestinations,
    pickupOptions: ["Nizamabad pickup", "Hyderabad pickup", "Need pickup advice"],
    packageHeading: {
      title: "Fort-lake day trips and north Telangana weekends",
      copy:
        "Nizamabad routes work best when the day is not overloaded, with space for temple timing, lake gardens, and easy family travel.",
    },
    customHeading: {
      title: "Select your Nizamabad-side stops",
      copy:
        "Choose fort, temple, lake, forest, or pilgrimage add-ons and send the route for feasibility and pricing.",
    },
  },
];

export const howItWorks = [
  {
    title: "Choose a package",
    copy: "Pick a ready route or share the places you want to combine.",
  },
  {
    title: "Confirm your group",
    copy: "Send passenger count, pickup city, date, and preferred comfort level.",
  },
  {
    title: "Travel with local support",
    copy: "Get a clear route plan, timing guidance, and WhatsApp support during the trip.",
  },
];
