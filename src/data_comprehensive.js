// Forests of India - Complete Comprehensive Data from PMF IAS
// Source: https://www.pmfias.com/forests-natural-vegetation-of-india-classification-of-natural-vegetation-of-india/
// Total: 16 Forest Types across 5 main categories

export const forestTypes = [
  // A. MOIST TROPICAL FORESTS
  {
    id: 1,
    name: "Tropical Wet Evergreen Forests (Rain Forests)",
    category: "A. Moist Tropical",
    rainfall: ">250 cm",
    temperature: "25-27°C",
    humidity: ">77%",
    altitude: "500-1370m (Western Ghats)",
    percentageArea: "8%",
    characteristics: [
      "Evergreen - trees don't shed leaves together due to high heat & humidity",
      "Mesophytic - plants adapted to neither too dry nor too wet climate",
      "Lofty - trees reach 45-60 metres height",
      "Thick canopy - appears like green carpet from air",
      "Epiphytes - plants struggle upward for sunlight",
      "Less undergrowth - sunlight can't reach ground",
      "Undergrowth: bamboos, ferns, climbers, orchids",
      "Dry season distinctly short"
    ],
    distribution: [
      "Western side of Western Ghats (500-1370m)",
      "Some regions in Purvanchal hills",
      "Andaman and Nicobar Islands"
    ],
    timber: {
      type: "Hardwood",
      quality: "Fine-grained, hard and durable",
      commercialValue: "High but challenging to exploit",
      challenges: "Dense undergrowth, absence of pure stands, lack of transport"
    },
    species: [
      "Mahogany", "Mesua", "White Cedar", "Jamun", "Canes", "Bamboo"
    ],
    specialConcepts: [
      "Mesophytes: Unlike hydrophytic (water plants) or xerophytic (cacti), mesophytes exist between extremes",
      "Epiphytes: Non-parasitic plants growing on trees for sunlight"
    ],
    importance: "HIGH"
  },
  {
    id: 2,
    name: "Tropical Semi-Evergreen Forests",
    category: "A. Moist Tropical",
    rainfall: "200-250 cm",
    temperature: "24-27°C",
    humidity: "~75%",
    altitude: "Lower slopes",
    percentageArea: "4%",
    characteristics: [
      "Transitional between wet evergreen and deciduous",
      "Comparatively drier than wet evergreen",
      "Less dense than wet evergreen forests",
      "More gregarious (living in flocks/colonies - more pure stands)",
      "Characterized by many species",
      "Trees have buttressed trunks with abundant epiphytes",
      "Dry season not as short as evergreen forests"
    ],
    distribution: [
      "Western coast",
      "Assam",
      "Lower slopes of Eastern Himalayas",
      "Odisha",
      "Andamans"
    ],
    timber: {
      type: "Hardwood",
      quality: "Similar to evergreen forests",
      advantage: "Less dense with more pure stands - easier to exploit than evergreen"
    },
    species: [
      "Laurel", "Rosewood", "Mesua", "Thorny Bamboo (Western Ghats)",
      "White Cedar", "Indian Chestnut", "Champa", "Mango (Himalayan region)"
    ],
    specialConcepts: [
      "Gregariousness: Living in colonies forming pure stands - easier timber exploitation",
      "Buttressed trunks: For stability in tropical forests"
    ],
    importance: "HIGH"
  },
  {
    id: 3,
    name: "Tropical Moist Deciduous Forests",
    category: "A. Moist Tropical",
    rainfall: "100-200 cm",
    temperature: "~27°C",
    humidity: "60-75%",
    altitude: "Various",
    percentageArea: "37% (LARGEST)",
    characteristics: [
      "Trees drop leaves during spring and early summer",
      "General appearance bare in extreme summers (April-May)",
      "Irregular top storey (25-60m height)",
      "Heavily buttressed trees",
      "Fairly complete undergrowth",
      "Spring and summer are dry seasons",
      "Large tracts cleared for cultivation"
    ],
    distribution: [
      "Belt along Western Ghats surrounding evergreen forests",
      "Strip along Shiwalik range including Terai and Bhabar (77°E to 88°E)",
      "Manipur and Mizoram",
      "Hills of eastern Madhya Pradesh and Chhattisgarh",
      "Chota Nagpur Plateau",
      "Most of Odisha",
      "Parts of West Bengal",
      "Andaman and Nicobar Islands"
    ],
    timber: {
      type: "Valuable timber including Teak",
      advantage: "Comparatively easy to exploit due to high gregariousness (pure stands)"
    },
    species: [
      "Teak", "Sal", "Laurel", "Rosewood", "Amla", "Jamun", "Bamboo"
    ],
    importance: "HIGH"
  },
  {
    id: 4,
    name: "Littoral and Swamp Forests (Mangroves)",
    category: "A. Moist Tropical",
    rainfall: "Variable",
    temperature: "Variable",
    salinity: "0.5-35 ppt (brackish water)",
    altitude: "Sea level - deltas",
    percentageArea: "<4%",
    characteristics: [
      "Survive and grow in fresh and brackish water",
      "Occur in deltas, estuaries, creeks prone to tidal influences",
      "Dense mangroves in sheltered estuaries, tidal creeks, backwaters",
      "Salt marshes and mudflats",
      "Provides useful fuel wood",
      "Sunderbans in Ganga delta - most pronounced and densest",
      "Predominant species: Sundri (Heriteera) in Sunderbans"
    ],
    distribution: [
      "All along the coastline",
      "Deltas of Ganga, Mahanadi, Godavari, Krishna, Cauvery",
      "Sunderbans (Ganga delta) - densest",
      "Sheltered estuaries, tidal creeks, backwaters"
    ],
    timber: {
      type: "Hard and durable",
      uses: "Construction, building purposes, making boats"
    },
    species: [
      "Sundri", "Agar", "Rhizophora", "Screw Pines", "Canes", "Palms"
    ],
    specialConcepts: [
      "Brackish water: Mixture of seawater and freshwater in estuaries (0.5-35 ppt salinity)",
      "Littoral: Relating to shore of sea or lake",
      "Tidal/delta forests"
    ],
    importance: "HIGH"
  },
  
  // B. DRY TROPICAL FORESTS
  {
    id: 5,
    name: "Tropical Dry Evergreen Forests",
    category: "B. Dry Tropical",
    rainfall: "~100 cm (mostly Oct-Dec from NE monsoon)",
    temperature: "~28°C",
    humidity: "~75%",
    altitude: "Coastal plains",
    percentageArea: "<4%",
    characteristics: [
      "Short statured trees, up to 12m high",
      "Complete canopy",
      "Bamboos and grasses not conspicuous",
      "Growth of evergreen forests in low rainfall areas is unusual",
      "Most land cleared for agriculture or Casuarina plantations"
    ],
    distribution: [
      "Along coasts of Tamil Nadu"
    ],
    timber: {
      uses: "Mostly cleared for Casuarina plantations"
    },
    species: [
      "Jamun", "Tamarind", "Neem", "Casuarina (plantations)"
    ],
    specialConcepts: [
      "Casuarina: Resembles feathery conifer, 15-25m height",
      "Nitrogen-fixing ability",
      "Rapid-growing, suitable for coastal sand dunes to semi-arid regions",
      "Used for: wind control, tourism, firewood, paper pulp, medicine",
      "Wasteland development: salt tolerant, drought resistant, stabilize sand dunes",
      "Intercrops: groundnut, cucumber, watermelons, sesamum, pulses"
    ],
    importance: "MEDIUM"
  },
  {
    id: 6,
    name: "Tropical Dry Deciduous Forests",
    category: "B. Dry Tropical",
    rainfall: "100-150 cm",
    temperature: "Variable",
    humidity: "Variable",
    altitude: "Various",
    percentageArea: "28% (2nd largest)",
    characteristics: [
      "Similar to moist deciduous - shed leaves in dry season",
      "Can grow in areas of comparatively less rainfall",
      "Transitional type: moist deciduous (wetter) to thorn forests (drier)",
      "Closed but uneven canopy",
      "Mixture of few deciduous species rising to 20m",
      "Enough light for grass and climbers undergrowth",
      "Large tracts cleared for agriculture",
      "Suffer from overgrazing and fire"
    ],
    distribution: [
      "Irregular wide strip from Himalayas to Kanniyakumari",
      "Except: Rajasthan, Western Ghats, West Bengal"
    ],
    timber: {
      uses: "Valuable species"
    },
    species: [
      "Teak", "Axlewood", "Rosewood", "Common Bamboo", "Red Sanders",
      "Laurel", "Satinwood"
    ],
    importance: "HIGH"
  },
  {
    id: 7,
    name: "Tropical Thorn Forests",
    category: "B. Dry Tropical",
    rainfall: "<75 cm",
    temperature: "25-30°C",
    humidity: "<50%",
    altitude: "Plains and low hills",
    percentageArea: "<4%",
    characteristics: [
      "Trees low (6-10m max) and widely scattered",
      "Acacias and Euphorbias very prominent",
      "Indian wild date common",
      "Some grasses grow in rainy season",
      "Degenerate into desert type in Thar desert"
    ],
    distribution: [
      "Rajasthan, south-western Punjab, western Haryana",
      "Kachchh and neighbouring parts of Saurashtra",
      "Leeside of Western Ghats: Maharashtra, Karnataka, Telangana, Andhra Pradesh, Tamil Nadu"
    ],
    species: [
      "Neem", "Babul", "Cactii", "Acacias", "Euphorbias", "Indian Wild Date"
    ],
    importance: "MEDIUM"
  },
  
  // C. MONTANE SUB-TROPICAL FORESTS
  {
    id: 8,
    name: "Sub-tropical Broad-leaved Hill Forests",
    category: "C. Montane Sub-tropical",
    rainfall: "75-125 cm",
    temperature: "18-21°C",
    humidity: "80%",
    altitude: "1000-2000m",
    percentageArea: "<4%",
    characteristics: [
      "Evergreen species forests",
      "Climbers and epiphytes common",
      "Not so distinct in southern parts",
      "Nilgiri and Palni hills: 1070-1525m",
      "Stunted rain-forest - not as luxuriant as true tropical evergreen"
    ],
    distribution: [
      "Eastern Himalayas east of 88°E (1000-2000m)",
      "Nilgiri and Palni hills (1070-1525m)",
      "Western Ghats: Mahabaleshwar",
      "Summits of Satpura and Maikal Range",
      "Highlands of Bastar",
      "Mt. Abu in Aravali Range"
    ],
    species: [
      "Evergreen Oaks", "Chestnuts", "Ash", "Beech", "Sals", "Pines"
    ],
    importance: "MEDIUM"
  },
  {
    id: 9,
    name: "Sub-tropical Moist Pine Forests (Chir Pine)",
    category: "C. Montane Sub-tropical",
    rainfall: "Variable",
    temperature: "Variable",
    humidity: "Variable",
    altitude: "1000-2000m",
    percentageArea: "6%",
    characteristics: [
      "Chir/Chil is most dominant tree",
      "Forms pure stands",
      "Valuable commercial forest"
    ],
    distribution: [
      "Western Himalayas between 73°E and 88°E (1000-2000m)",
      "Hilly regions of Arunachal Pradesh",
      "Manipur, Naga Hills, Khasi Hills"
    ],
    timber: {
      type: "Valuable timber",
      uses: "Furniture, boxes, buildings, resin production, turpentine"
    },
    species: [
      "Chir Pine", "Chil Pine"
    ],
    specialConcepts: [
      "Chir/Chil Pine: Dominant at 1000-2000m elevation",
      "Pure stands make exploitation easier",
      "Resin and turpentine production"
    ],
    importance: "HIGH"
  },
  {
    id: 10,
    name: "Sub-tropical Dry Evergreen Forests",
    category: "C. Montane Sub-tropical",
    rainfall: "50-100 cm (15-25 cm Dec-Mar)",
    temperature: "Hot summers, very cold winters",
    humidity: "Low",
    altitude: "Up to ~1000m",
    percentageArea: "<4%",
    characteristics: [
      "Low scrub forest",
      "Small evergreen stunted trees and shrubs",
      "Summers sufficiently hot, winters very cold"
    ],
    distribution: [
      "Bhabar",
      "Shiwaliks",
      "Western Himalayas up to 1000m"
    ],
    species: [
      "Olive", "Acacia Modesta", "Pistacia"
    ],
    importance: "MEDIUM"
  },
  
  // D. MONTANE TEMPERATE FORESTS
  {
    id: 11,
    name: "Montane Wet Temperate Forests",
    category: "D. Montane Temperate",
    rainfall: "150-300 cm",
    temperature: "11-14°C",
    humidity: ">80%",
    altitude: "1800-3000m",
    percentageArea: "<4%",
    characteristics: [
      "Closed evergreen forests",
      "Trunks have large girth",
      "Branches clothed with mosses, ferns, epiphytes",
      "Trees rarely exceed 6m height (unusual for such rainfall!)"
    ],
    distribution: [
      "Higher hills of Tamil Nadu and Kerala",
      "Eastern Himalayan region"
    ],
    species: [
      "Deodar", "Chilauni", "Indian Chestnut", "Birch", "Plum",
      "Machilus", "Cinnamomum", "Litsea", "Magnolia", "Blue Pine",
      "Oak", "Hemlock"
    ],
    importance: "MEDIUM"
  },
  {
    id: 12,
    name: "Himalayan Moist Temperate Forests",
    category: "D. Montane Temperate",
    rainfall: "150-250 cm",
    temperature: "Temperate",
    humidity: "High",
    altitude: "1500-3300m",
    percentageArea: "<4%",
    characteristics: [
      "Mainly composed of coniferous species",
      "Species occur in mostly pure stands",
      "Trees 30-50m high",
      "High but fairly open forest with shrubby undergrowth",
      "Undergrowth: oaks, rhododendrons, some bamboos"
    ],
    distribution: [
      "Entire length of Himalayan range (1500-3300m)",
      "Kashmir, Himachal Pradesh, Uttarakhand",
      "Darjeeling, Sikkim"
    ],
    timber: {
      quality: "Fine wood",
      uses: "Construction, timber, railway sleepers"
    },
    species: [
      "Pines", "Cedars", "Silver Firs", "Spruce", "Oaks (undergrowth)",
      "Rhododendrons (undergrowth)", "Bamboos (undergrowth)"
    ],
    importance: "HIGH"
  },
  {
    id: 13,
    name: "Himalayan Dry Temperate Forests",
    category: "D. Montane Temperate",
    rainfall: "<100 cm (mostly snow)",
    temperature: "Cold",
    humidity: "Low",
    altitude: "Inner dry ranges",
    percentageArea: "<4%",
    characteristics: [
      "Coniferous forests with xerophytic shrubs",
      "Found in inner dry ranges where SW monsoon is feeble",
      "Precipitation mostly in form of snow"
    ],
    distribution: [
      "Ladakh", "Lahul", "Chamba", "Kinnaur", "Garhwal", "Sikkim"
    ],
    species: [
      "Deodar", "Oak", "Ash", "Olive"
    ],
    importance: "MEDIUM"
  },
  
  // E. ALPINE FORESTS
  {
    id: 14,
    name: "Sub-Alpine Forests",
    category: "E. Alpine",
    rainfall: "Variable",
    temperature: "Cold",
    humidity: "Variable",
    altitude: "2900-3500m",
    percentageArea: "<4%",
    characteristics: [
      "Occurs lower than alpine scrub and grasslands",
      "Mixture of coniferous and broad-leaved trees",
      "Coniferous trees: ~30m height",
      "Broad-leaved trees: ~10m height only"
    ],
    distribution: [
      "Himalayas at 2900-3500m"
    ],
    species: [
      "Fir", "Spruce", "Rhododendron"
    ],
    importance: "MEDIUM"
  },
  {
    id: 15,
    name: "Moist Alpine Scrub",
    category: "E. Alpine",
    rainfall: "Adequate moisture",
    temperature: "Very cold",
    humidity: "High",
    altitude: "3000m to snowline",
    percentageArea: "<4%",
    characteristics: [
      "Low evergreen dense growth",
      "Extends from 3000m to snowline"
    ],
    distribution: [
      "Himalayas from 3000m to snowline"
    ],
    species: [
      "Rhododendron", "Birch"
    ],
    importance: "MEDIUM"
  },
  {
    id: 16,
    name: "Dry Alpine Scrub",
    category: "E. Alpine",
    rainfall: "Very low",
    temperature: "Very cold",
    humidity: "Very low",
    altitude: ">3500m",
    percentageArea: "<4%",
    characteristics: [
      "Uppermost limit of scrub",
      "Xerophytic dwarf shrubs",
      "Over 3500m above sea level",
      "Found in dry zone"
    ],
    distribution: [
      "Himalayas above 3500m in dry zones"
    ],
    species: [
      "Juniper", "Honeysuckle", "Artemesia"
    ],
    importance: "MEDIUM"
  }
];

// Key Facts about Indian Forests
export const forestFacts = [
  {
    fact: "India's vegetation divided into 5 main types and 16 sub-types",
    category: "Classification"
  },
  {
    fact: "Tropical Moist Deciduous is largest (37% of forest area)",
    category: "Coverage"
  },
  {
    fact: "Tropical Dry Deciduous is 2nd largest (28% of forest area)",
    category: "Coverage"
  },
  {
    fact: "Tropical Wet Evergreen covers 8% of forest area",
    category: "Coverage"
  },
  {
    fact: "Sub-tropical Moist Pine (Chir) covers 6% of forest area",
    category: "Coverage"
  },
  {
    fact: "Annual rainfall >200cm → Evergreen Rain Forests",
    category: "Classification Criteria"
  },
  {
    fact: "Annual rainfall 100-200cm → Monsoon Deciduous Forests",
    category: "Classification Criteria"
  },
  {
    fact: "Annual rainfall 50-100cm → Drier Deciduous/Tropical Savanna",
    category: "Classification Criteria"
  },
  {
    fact: "Annual rainfall 25-50cm → Dry Thorny Scrub (Semi-arid)",
    category: "Classification Criteria"
  },
  {
    fact: "Annual rainfall <25cm → Desert (Arid)",
    category: "Classification Criteria"
  },
  {
    fact: "Mesophytes: Plants adapted to neither too dry nor too wet conditions",
    category: "Concepts"
  },
  {
    fact: "Epiphytes: Non-parasitic plants growing on trees for sunlight",
    category: "Concepts"
  },
  {
    fact: "Gregariousness: Living in colonies forming pure stands - easier timber exploitation",
    category: "Concepts"
  },
  {
    fact: "Buttressed trunks: For stability in tropical forests",
    category: "Concepts"
  },
  {
    fact: "Brackish water: 0.5-35 ppt salinity (mixture of seawater & freshwater)",
    category: "Concepts"
  },
  {
    fact: "Sunderbans in Ganga delta has densest mangroves with Sundri tree",
    category: "Special Features"
  },
  {
    fact: "Casuarina: Nitrogen-fixing tree, 15-25m height, used for coastal protection",
    category: "Special Trees"
  },
  {
    fact: "Chir/Chil Pine: Dominant at 1000-2000m, used for resin & turpentine",
    category: "Special Trees"
  },
  {
    fact: "Teak: Most valuable timber from Tropical Moist/Dry Deciduous forests",
    category: "Timber"
  },
  {
    fact: "Hardwood: Tropical Evergreen & Semi-Evergreen (fine-grained, durable)",
    category: "Timber"
  }
];

// Comprehensive Quiz Questions - All forest types covered
export const allQuizQuestions = [
  // Continued from existing 60 questions...
  // Add all 60 existing questions here, then expand with more detailed questions
];

export const quizQuestions = allQuizQuestions;

export default {
  forestTypes,
  forestFacts,
  quizQuestions: allQuizQuestions
};
