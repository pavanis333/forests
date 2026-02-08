// Forests of India - Comprehensive Data from PMF IAS
// Source: https://www.pmfias.com/forests-natural-vegetation-of-india-classification-of-natural-vegetation-of-india/

export const forestTypes = [
  // A. MOIST TROPICAL FORESTS
  {
    id: 1,
    name: "Tropical Wet Evergreen Forests (Rain Forests)",
    category: "Moist Tropical",
    rainfall: ">250 cm",
    temperature: "25-27°C",
    humidity: "77%",
    percentageArea: "8%",
    characteristics: [
      "Evergreen: Trees do not shed leaves together due to high heat and humidity",
      "Mesophytic: Adapted to neither too dry nor too wet climate",
      "Lofty: Trees reach 45-60 metres in height",
      "Thick Canopy: Appears like thick canopy from air, broken only by rivers",
      "Less undergrowth: Sunlight cannot reach ground - bamboos, ferns, climbers, orchids",
      "All plants struggle upwards (epiphytes) for sunlight - peculiar layer arrangement",
      "Green carpet appearance when viewed from above"
    ],
    distribution: [
      "Western side of Western Ghats (500-1370m above sea level)",
      "Some regions in Purvanchal hills",
      "Andaman and Nicobar Islands"
    ],
    timber: {
      quality: "Hardwood - fine-grained, hard and durable",
      value: "High commercial value",
      challenges: "Difficult to exploit due to dense undergrowth, absence of pure stands, lack of transport",
      species: ["Mahogany", "Mesua", "White cedar", "Jamun", "Canes", "Bamboo"]
    },
    importance: "HIGH"
  },
  {
    id: 2,
    name: "Tropical Semi-Evergreen Forests",
    category: "Moist Tropical",
    rainfall: "200-250 cm",
    temperature: "24-27°C",
    humidity: "75%",
    percentageArea: "4%",
    characteristics: [
      "Transitional forests between tropical wet evergreen and tropical deciduous",
      "Comparatively drier than wet evergreen",
      "Less dense than wet evergreen forests",
      "More gregarious (living in flocks/colonies - more pure stands) than wet evergreen",
      "Characterized by many species",
      "Trees usually have buttressed trunks with abundant epiphytes"
    ],
    distribution: [
      "Western coast",
      "Assam",
      "Lower slopes of Eastern Himalayas",
      "Odisha",
      "Andamans"
    ],
    timber: {
      quality: "Hardwood - similar to tropical evergreen except less dense with more pure stands",
      exploitation: "Better timber industry than in evergreen forests",
      species: [
        "Laurel", "Rosewood", "Mesua", "Thorny bamboo (Western Ghats)",
        "White cedar", "Indian chestnut", "Champa", "Mango (Himalayan region)"
      ]
    },
    importance: "HIGH"
  },
  {
    id: 3,
    name: "Tropical Moist Deciduous Forests",
    category: "Moist Tropical",
    rainfall: "100-200 cm",
    temperature: "27°C",
    humidity: "60-75%",
    percentageArea: "37% (largest)",
    characteristics: [
      "Trees drop leaves during spring and early summer when moisture not available",
      "General appearance is bare in extreme summers (April-May)",
      "Present irregular top storey (25-60m)",
      "Heavily buttressed trees and fairly complete undergrowth",
      "Occupy much larger area than evergreen forests",
      "Large tracts cleared for cultivation"
    ],
    distribution: [
      "Belt running along Western Ghats surrounding evergreen forests",
      "Strip along Shiwalik range including terai and bhabar (77°E to 88°E)",
      "Manipur and Mizoram",
      "Hills of eastern Madhya Pradesh and Chhattisgarh",
      "Chota Nagpur Plateau",
      "Most of Odisha",
      "Parts of West Bengal",
      "Andaman and Nicobar islands"
    ],
    timber: {
      quality: "Valuable timber like Teak",
      exploitation: "Comparatively easy to exploit due to high degree of gregariousness (pure stands)",
      species: ["Teak", "Sal", "Laurel", "Rosewood", "Amla", "Jamun", "Bamboo"]
    },
    importance: "HIGH"
  },
  {
    id: 4,
    name: "Littoral and Swamp Forests (Mangroves)",
    category: "Moist Tropical",
    characteristics: [
      "Can survive and grow in both fresh and brackish water (0.5-35 ppt salinity)",
      "Occur in and around deltas, estuaries and creeks prone to tidal influences",
      "Dense mangroves occur along coastline in sheltered estuaries, tidal creeks, backwaters",
      "Provides useful fuel wood",
      "Most pronounced and densest is Sundarbans in Ganga delta"
    ],
    distribution: [
      "Along entire coastline in sheltered areas",
      "Deltas of Ganga, Mahanadi, Godavari, Krishna, Cauvery",
      "Sundarbans (Ganga delta) - most dense"
    ],
    timber: {
      quality: "Hard and durable",
      uses: "Construction, building purposes, making boats",
      species: ["Sundri (Heritiera) - predominant in Sundarbans", "Agar", "Rhizophora", "Screw pines", "Canes", "Palms"]
    },
    importance: "HIGH"
  },
  
  // B. DRY TROPICAL FORESTS
  {
    id: 5,
    name: "Tropical Dry Evergreen Forests",
    category: "Dry Tropical",
    rainfall: "100 cm (mostly from NE monsoon Oct-Dec)",
    temperature: "28°C",
    humidity: "75%",
    percentageArea: "<4%",
    characteristics: [
      "Growth of evergreen forests in such low rainfall is strange",
      "Short statured trees, up to 12m high, with complete canopy",
      "Bamboos and grasses not conspicuous",
      "Most land cleared for agriculture or casuarina plantations"
    ],
    distribution: [
      "Along coasts of Tamil Nadu"
    ],
    timber: {
      species: ["Jamun", "Tamarind", "Neem"],
      note: "Replaced by Casuarina plantations"
    },
    importance: "MEDIUM",
    specialNote: "Casuarina: Rapid-growing, nitrogen-fixing, 15-25m height, used for farm forestry in AP, TN, WB, Odisha, MH, Gujarat, Karnataka"
  },
  {
    id: 6,
    name: "Tropical Dry Deciduous Forests",
    category: "Dry Tropical",
    rainfall: "100-150 cm (originally 75-100 cm)",
    percentageArea: "28%",
    characteristics: [
      "Similar to moist deciduous but can grow in less rainfall",
      "Transitional type - moist deciduous on wetter side, thorn forests on drier side",
      "Closed but uneven canopy",
      "Mixture of few deciduous species rising to 20 metres",
      "Enough light reaches ground for grass and climbers",
      "Large tracts cleared for agriculture",
      "Suffer from overgrazing, fire"
    ],
    distribution: [
      "Irregular wide strip from foot of Himalayas to Kanniyakumari",
      "Except Rajasthan, Western Ghats and West Bengal"
    ],
    timber: {
      species: ["Teak", "Axlewood", "Rosewood", "Common bamboo", "Red sanders", "Laurel", "Satinwood"]
    },
    importance: "HIGH"
  },
  {
    id: 7,
    name: "Tropical Thorn Forests",
    category: "Dry Tropical",
    rainfall: "<75 cm",
    temperature: "25-30°C",
    humidity: "<50%",
    percentageArea: "<4%",
    characteristics: [
      "Trees are low (6-10 metres maximum) and widely scattered",
      "Acacias and Euphorbias very prominent",
      "Indian wild date is common",
      "Some grasses grow in rainy season"
    ],
    distribution: [
      "Rajasthan, south-western Punjab, western Haryana",
      "Kachchh and neighbouring parts of Saurashtra",
      "Degenerate into desert type in Thar desert",
      "Leeside of Western Ghats: Maharashtra, Karnataka, Telangana, AP, Tamil Nadu"
    ],
    timber: {
      species: ["Neem", "Babul", "Cacti", "Indian wild date", "Acacias"]
    },
    importance: "MEDIUM"
  },
  
  // C. MONTANE SUB-TROPICAL FORESTS
  {
    id: 8,
    name: "Sub-tropical Broad-leaved Hill Forests",
    category: "Montane Sub-tropical",
    rainfall: "75-125 cm",
    temperature: "18-21°C",
    humidity: "80%",
    altitude: "1000-2000m",
    percentageArea: "<4%",
    characteristics: [
      "Forests of evergreen species",
      "Climbers and epiphytes are common",
      "Not so distinct in southern India - occur only in Nilgiri and Palni hills (1070-1525m)",
      "Stunted rain-forest, not as luxuriant as true tropical evergreen"
    ],
    distribution: [
      "Eastern Himalayas east of 88°E (1000-2000m)",
      "Nilgiri and Palni hills (1070-1525m)",
      "Higher parts of Western Ghats (Mahabaleshwar)",
      "Summits of Satpura and Maikal Range",
      "Highlands of Bastar",
      "Mt. Abu in Aravali Range"
    ],
    timber: {
      species: ["Evergreen oaks", "Chestnuts", "Ash", "Beech", "Sals", "Pines"]
    },
    importance: "MEDIUM"
  },
  {
    id: 9,
    name: "Sub-tropical Moist Pine Forests",
    category: "Montane Sub-tropical",
    altitude: "1000-2000m",
    percentageArea: "6%",
    characteristics: [
      "Chir or Chil is most dominant tree forming pure stands",
      "Provides valuable timber"
    ],
    distribution: [
      "Western Himalayas between 73°E and 88°E (1000-2000m)",
      "Some hilly regions of Arunachal Pradesh",
      "Manipur, Naga Hills, Khasi Hills"
    ],
    timber: {
      quality: "Valuable timber for furniture, boxes, buildings",
      uses: "Also used for producing resin and turpentine",
      species: ["Chir/Chil Pine - predominant"]
    },
    importance: "HIGH"
  },
  {
    id: 10,
    name: "Sub-tropical Dry Evergreen Forests",
    category: "Montane Sub-tropical",
    rainfall: "50-100 cm (15-25 cm in Dec-Mar)",
    altitude: "Up to 1000m",
    percentageArea: "<4%",
    characteristics: [
      "Low scrub forest with small evergreen stunted trees and shrubs",
      "Summers sufficiently hot, winters very cold"
    ],
    distribution: [
      "Bhabar, Shiwaliks",
      "Western Himalayas up to 1000m"
    ],
    timber: {
      species: ["Olive", "Acacia modesta", "Pistacia"]
    },
    importance: "MEDIUM"
  },
  
  // D. MONTANE TEMPERATE FORESTS
  {
    id: 11,
    name: "Montane Wet Temperate Forests",
    category: "Montane Temperate",
    rainfall: "150-300 cm",
    temperature: "11-14°C",
    humidity: ">80%",
    altitude: "1800-3000m",
    percentageArea: "<4%",
    characteristics: [
      "Closed evergreen forests",
      "Trunks have large girth",
      "Branches clothed with mosses, ferns and other epiphytes",
      "Trees rarely achieve height of more than 6 metres"
    ],
    distribution: [
      "Higher hills of Tamil Nadu and Kerala",
      "Eastern Himalayan region"
    ],
    timber: {
      species: ["Deodar", "Chilauni", "Indian chestnut", "Birch", "Plum", "Machilus", "Cinnamomum", "Litsea", "Magnolia", "Blue pine", "Oak", "Hemlock"]
    },
    importance: "MEDIUM"
  },
  {
    id: 12,
    name: "Himalayan Moist Temperate Forests",
    category: "Montane Temperate",
    rainfall: "150-250 cm",
    altitude: "1500-3300m",
    percentageArea: "<4%",
    characteristics: [
      "Mainly composed of coniferous species",
      "Species occur in mostly pure stands",
      "Trees are 30-50m high",
      "Form high but fairly open forest with shrubby undergrowth including oaks, rhododendrons, bamboos"
    ],
    distribution: [
      "Entire length of Himalayan range (1500-3300m)",
      "Kashmir, Himachal Pradesh, Uttarakhand, Darjeeling, Sikkim"
    ],
    timber: {
      quality: "Fine wood for construction, timber and railway sleepers",
      species: ["Pines", "Cedars", "Silver firs", "Spruce", "Oaks", "Rhododendrons", "Bamboos"]
    },
    importance: "HIGH"
  },
  {
    id: 13,
    name: "Himalayan Dry Temperate Forests",
    category: "Montane Temperate",
    rainfall: "<100 cm (mostly snow)",
    percentageArea: "<4%",
    characteristics: [
      "Coniferous forests with xerophytic shrubs",
      "Found in inner dry ranges where SW monsoon is very feeble"
    ],
    distribution: [
      "Ladakh, Lahul, Chamba",
      "Kinnaur, Garhwal, Sikkim"
    ],
    timber: {
      species: ["Deodar", "Oak", "Ash", "Olive"]
    },
    importance: "MEDIUM"
  },
  
  // E. ALPINE FORESTS
  {
    id: 14,
    name: "Sub-Alpine Forests",
    category: "Alpine",
    altitude: "2900-3500m",
    percentageArea: "<4%",
    characteristics: [
      "Mixture of coniferous and broad-leaved trees",
      "Coniferous trees attain height of 30m",
      "Broad-leaved trees reach only 10m",
      "Occurs lower alpine scrub and grasslands"
    ],
    distribution: [
      "Himalayan region (2900-3500m)"
    ],
    timber: {
      species: ["Fir", "Spruce", "Rhododendron"]
    },
    importance: "MEDIUM"
  },
  {
    id: 15,
    name: "Moist Alpine Scrub",
    category: "Alpine",
    altitude: "3000m to snowline",
    percentageArea: "<4%",
    characteristics: [
      "Low evergreen dense growth",
      "Extends from 3000m to snowline"
    ],
    distribution: [
      "Himalayan region (3000m to snowline)"
    ],
    timber: {
      species: ["Rhododendron", "Birch"]
    },
    importance: "LOW"
  },
  {
    id: 16,
    name: "Dry Alpine Scrub",
    category: "Alpine",
    altitude: ">3500m",
    percentageArea: "<4%",
    characteristics: [
      "Uppermost limit of scrub",
      "Xerophytic, dwarf shrubs",
      "Found in dry zone above 3500m"
    ],
    distribution: [
      "Dry zones of Himalayan region (>3500m)"
    ],
    timber: {
      species: ["Juniper", "Honeysuckle", "Artemesia"]
    },
    importance: "LOW"
  }
];

// Key Facts about Indian Forests
export const forestFacts = [
  {
    fact: "Rainfall classification: >200cm (Evergreen), 100-200cm (Deciduous), 50-100cm (Savanna), 25-50cm (Thorn), <25cm (Desert)",
    category: "Classification"
  },
  {
    fact: "India's vegetation divided into 5 main types and 16 sub-types",
    category: "Classification"
  },
  {
    fact: "Tropical Moist Deciduous: 37% (largest forest type)",
    category: "Area Coverage"
  },
  {
    fact: "Tropical Dry Deciduous: 28%",
    category: "Area Coverage"
  },
  {
    fact: "Tropical Wet Evergreen: 8%",
    category: "Area Coverage"
  },
  {
    fact: "Sub-Tropical Moist Hill: 6%",
    category: "Area Coverage"
  },
  {
    fact: "Tropical Semi-Evergreen: 4%",
    category: "Area Coverage"
  },
  {
    fact: "Mesophytes: Plants adapted to neither too dry nor too wet climate (unlike hydrophytic in water or xerophytic in dry)",
    category: "Plant Adaptations"
  },
  {
    fact: "Epiphytes: Plants growing non-parasitically on trees",
    category: "Plant Adaptations"
  },
  {
    fact: "Buttressed trunks: Common in semi-evergreen and tropical forests for stability",
    category: "Plant Adaptations"
  },
  {
    fact: "Brackish water: Mixture of seawater and fresh water in estuaries (0.5-35 ppt salinity)",
    category: "Coastal Features"
  },
  {
    fact: "Sundarbans: Most dense mangrove forest, Sundri (Heritiera) is predominant species",
    category: "Famous Forests"
  },
  {
    fact: "Casuarina: Rapid-growing, nitrogen-fixing, used for wasteland development, paper pulp, firewood",
    category: "Plantation"
  },
  {
    fact: "Chir/Chil Pine: Dominant in Sub-tropical Moist Pine forests, used for furniture and resin/turpentine",
    category: "Timber"
  },
  {
    fact: "Pure stands: Forests with single species predominance - easier to exploit for timber",
    category: "Timber"
  },
  {
    fact: "Gregariousness: Trees living in flocks/colonies forming pure stands",
    category: "Forest Characteristics"
  }
];

// Export statement for quiz questions moved to end

// Quiz Questions - 60 comprehensive UPSC-style questions based on PMF IAS data
export const quizQuestions = [
  // Tropical Wet Evergreen (8 questions)
  {
    question: "What is the minimum annual rainfall required for Tropical Wet Evergreen Forests?",
    options: [">200 cm", ">250 cm", ">300 cm", ">350 cm"],
    correct: 1,
    explanation: "Tropical Wet Evergreen Forests require annual rainfall exceeding 250 cm with temperature 25-27°C and humidity >77%."
  },
  {
    question: "What does 'mesophytic' mean in context of Tropical Wet Evergreen Forests?",
    options: ["Plants growing in water", "Plants adapted to neither too dry nor too wet climate", "Plants adapted to very dry conditions", "Plants that shed leaves"],
    correct: 1,
    explanation: "Mesophytic plants are adapted to neither too dry nor too wet climate, unlike hydrophytic (water) or xerophytic (very dry) plants."
  },
  {
    question: "What height do trees typically reach in Tropical Wet Evergreen Forests?",
    options: ["20-30 metres", "30-40 metres", "45-60 metres", "70-80 metres"],
    correct: 2,
    explanation: "Trees in Tropical Wet Evergreen Forests are lofty, often reaching 45-60 metres in height with thick canopy."
  },
  {
    question: "Why is there less undergrowth in Tropical Wet Evergreen Forests?",
    options: ["Soil is infertile", "Too much water", "Sunlight cannot reach ground due to thick canopy", "Heavy winds"],
    correct: 2,
    explanation: "Due to thick canopy, sunlight cannot reach the ground. Undergrowth is mainly bamboos, ferns, climbers, and orchids."
  },
  {
    question: "At what altitude are Tropical Wet Evergreen Forests found on Western Ghats?",
    options: ["200-500m", "500-1370m", "1500-2000m", "2000-3000m"],
    correct: 1,
    explanation: "Tropical Wet Evergreen Forests occur on the western side of Western Ghats at 500-1370 metres above sea level."
  },
  {
    question: "Why is it challenging to exploit Tropical Wet Evergreen Forests commercially?",
    options: ["Low timber quality", "Dense undergrowth, absence of pure stands, lack of transport", "Trees are too short", "Government regulations"],
    correct: 1,
    explanation: "Despite high commercial value, it's challenging due to dense undergrowth, absence of pure stands, and lack of transport facilities."
  },
  {
    question: "Which tree is NOT found in Tropical Wet Evergreen Forests?",
    options: ["Mahogany", "Teak", "White cedar", "Jamun"],
    correct: 1,
    explanation: "Teak is found in Tropical Deciduous forests. Wet Evergreen has Mahogany, Mesua, White cedar, Jamun, Canes, and Bamboo."
  },
  {
    question: "What are epiphytes in Tropical Wet Evergreen Forests?",
    options: ["Underground roots", "Plants growing non-parasitically on trees struggling for sunlight", "Fungi", "Ground vegetation"],
    correct: 1,
    explanation: "Epiphytes are plants that grow non-parasitically on trees. All plants struggle upwards for sunlight, creating peculiar layer arrangement."
  },
  
  // Tropical Semi-Evergreen (6 questions)
  {
    question: "Tropical Semi-Evergreen Forests are transitional between which two forest types?",
    options: ["Wet evergreen and moist deciduous", "Dry deciduous and thorn", "Alpine and temperate", "Mangrove and coastal"],
    correct: 0,
    explanation: "Tropical Semi-Evergreen Forests are transitional between tropical wet evergreen forests and tropical deciduous forests."
  },
  {
    question: "What is the rainfall range for Tropical Semi-Evergreen Forests?",
    options: ["100-150 cm", "150-200 cm", "200-250 cm", "250-300 cm"],
    correct: 2,
    explanation: "Tropical Semi-Evergreen Forests require 200-250 cm annual rainfall with temperature 24-27°C and humidity 75%."
  },
  {
    question: "What does 'gregarious' mean in context of forest distribution?",
    options: ["Trees are very tall", "Living in flocks/colonies - more pure stands", "Trees shed leaves", "Trees have thick canopy"],
    correct: 1,
    explanation: "Gregarious means living in flocks or colonies, forming more pure stands. Semi-Evergreen forests are more gregarious than Wet Evergreen."
  },
  {
    question: "What is a characteristic feature of Semi-Evergreen Forest trees?",
    options: ["No leaves", "Buttressed trunks with abundant epiphytes", "Very short height", "No undergrowth"],
    correct: 1,
    explanation: "Semi-Evergreen trees usually have buttressed trunks with abundant epiphytes, and are characterized by many species."
  },
  {
    question: "Which tree is found in Western Ghats Semi-Evergreen but NOT Himalayan region?",
    options: ["White cedar", "Thorny bamboo", "Champa", "Mango"],
    correct: 1,
    explanation: "Thorny bamboo is characteristic of Western Ghats Semi-Evergreen, while White cedar, Champa, and Mango are found in Himalayan region."
  },
  {
    question: "Why is timber industry better in Semi-Evergreen than Wet Evergreen forests?",
    options: ["Higher quality wood", "Less dense with more pure stands", "Easier access roads", "Government support"],
    correct: 1,
    explanation: "Semi-Evergreen forests are less dense with more pure stands (gregarious), making timber exploitation comparatively better."
  },
  
  // Tropical Moist Deciduous (6 questions)
  {
    question: "Which forest type occupies the LARGEST area in India?",
    options: ["Tropical Wet Evergreen (8%)", "Tropical Moist Deciduous (37%)", "Tropical Dry Deciduous (28%)", "Sub-tropical Moist Pine (6%)"],
    correct: 1,
    explanation: "Tropical Moist Deciduous forests occupy 37% of total forest area - the largest forest type in India."
  },
  {
    question: "When do Tropical Moist Deciduous trees shed their leaves?",
    options: ["Winter", "Spring and early summer", "Monsoon", "Throughout the year"],
    correct: 1,
    explanation: "Trees drop their leaves during spring and early summer when sufficient moisture is not available. Bare appearance in April-May."
  },
  {
    question: "What is the height range of Tropical Moist Deciduous forest top storey?",
    options: ["10-20m", "25-60m", "70-90m", "100-120m"],
    correct: 1,
    explanation: "Tropical Moist Deciduous forests present irregular top storey of 25 to 60 metres with heavily buttressed trees."
  },
  {
    question: "Which valuable timber comes from Tropical Moist Deciduous forests?",
    options: ["Mahogany", "Teak", "White cedar", "Deodar"],
    correct: 1,
    explanation: "Tropical Moist Deciduous forests provide valuable Teak timber, along with Sal, Laurel, Rosewood, Amla, Jamun, and Bamboo."
  },
  {
    question: "Why is it easy to exploit Tropical Moist Deciduous forests?",
    options: ["Near cities", "High degree of gregariousness (pure stands)", "Government policies", "Low undergrowth"],
    correct: 1,
    explanation: "It is comparatively easy to exploit these forests due to their high degree of gregariousness, meaning more pure stands of single species."
  },
  {
    question: "Where are Tropical Moist Deciduous forests found along the Himalayas?",
    options: ["Entire Himalayan range", "Strip along Shiwalik range including terai and bhabar (77°E to 88°E)", "Only in Kashmir", "Only in Sikkim"],
    correct: 1,
    explanation: "Found in a strip along the Shiwalik range including terai and bhabar from 77°E to 88°E longitude."
  },
  
  // Littoral and Swamp (5 questions)
  {
    question: "What is the salinity range of brackish water in mangrove areas?",
    options: ["0.1-0.5 ppt", "0.5-35 ppt", "35-70 ppt", "70-100 ppt"],
    correct: 1,
    explanation: "Brackish water is a mixture of seawater and fresh water in estuaries with salinity ranging from 0.5 to 35 ppt."
  },
  {
    question: "Which is the most dense and pronounced Littoral and Swamp forest in India?",
    options: ["Godavari delta", "Krishna delta", "Sundarbans in Ganga delta", "Mahanadi delta"],
    correct: 2,
    explanation: "The most pronounced and densest is the Sundarbans in the Ganga delta where predominant species is Sundri (Heritiera)."
  },
  {
    question: "What is the predominant species in Sundarbans?",
    options: ["Agar", "Sundri (Heritiera)", "Rhizophora", "Screw pines"],
    correct: 1,
    explanation: "Sundri (Heritiera) is the predominant species in Sundarbans, from which the region gets its name."
  },
  {
    question: "What are mangrove forests also called due to tidal influence?",
    options: ["Coastal forests", "Delta or tidal forests", "River forests", "Sea forests"],
    correct: 1,
    explanation: "Due to occurrence in areas prone to tidal influences, they are also called delta or tidal forests."
  },
  {
    question: "What type of timber do Littoral and Swamp forests provide?",
    options: ["Soft timber", "Hard and durable timber for construction, buildings, boats", "No commercial timber", "Only firewood"],
    correct: 1,
    explanation: "These forests provide hard and durable timber used for construction, building purposes and making boats, plus useful fuel wood."
  },
  
  // Tropical Dry Evergreen (4 questions)
  {
    question: "What is strange about Tropical Dry Evergreen Forests?",
    options: ["Very tall trees", "Growth of evergreen forests in areas of low rainfall (100 cm)", "No timber value", "Found at high altitude"],
    correct: 1,
    explanation: "The growth of evergreen forests in areas of such low rainfall (100 cm) is considered strange. Mostly NE monsoon rain in Oct-Dec."
  },
  {
    question: "What is the typical height of Tropical Dry Evergreen forest trees?",
    options: ["Up to 12m", "Up to 25m", "Up to 40m", "Up to 60m"],
    correct: 0,
    explanation: "Tropical Dry Evergreen forests have short statured trees, up to 12m high, with complete canopy."
  },
  {
    question: "What has replaced most Tropical Dry Evergreen forests in Tamil Nadu?",
    options: ["Agriculture", "Urban development", "Casuarina plantations", "Tea gardens"],
    correct: 2,
    explanation: "Most of the land under these forests has been cleared for agriculture or Casuarina plantations."
  },
  {
    question: "Which property makes Casuarina suitable for wasteland development?",
    options: ["Beautiful flowers", "Ability to fix atmospheric nitrogen, salt tolerant, drought resistant", "Fast growth only", "No special properties"],
    correct: 1,
    explanation: "Casuarina can fix atmospheric nitrogen, is salt tolerant, drought resistant, and can reclaim land and stabilize sand dunes."
  },
  
  // Tropical Dry Deciduous (5 questions)
  {
    question: "Which is the second largest forest type in India by area?",
    options: ["Tropical Wet Evergreen (8%)", "Tropical Moist Deciduous (37%)", "Tropical Dry Deciduous (28%)", "Sub-tropical (6%)"],
    correct: 2,
    explanation: "Tropical Dry Deciduous forests occupy 28% of total forest area - the second largest forest type in India."
  },
  {
    question: "Tropical Dry Deciduous forests are transitional between which types?",
    options: ["Evergreen and deciduous", "Moist deciduous on wetter side and thorn forests on drier side", "Alpine and temperate", "Coastal and inland"],
    correct: 1,
    explanation: "They represent a transitional type - moist deciduous on the wetter side and thorn forests on the drier side."
  },
  {
    question: "What is the distribution pattern of Tropical Dry Deciduous forests?",
    options: ["Only in Western Ghats", "Irregular wide strip from Himalayas to Kanniyakumari except Rajasthan, W.Ghats, WB", "Only in Northeast", "Coastal areas only"],
    correct: 1,
    explanation: "They occur in an irregular wide strip running from the foot of Himalayas to Kanniyakumari except in Rajasthan, Western Ghats and West Bengal."
  },
  {
    question: "Which valuable tree is found in both Dry Deciduous and Moist Deciduous forests?",
    options: ["Mahogany", "Teak", "Deodar", "Sundri"],
    correct: 1,
    explanation: "Teak is found in both Tropical Dry Deciduous and Moist Deciduous forests, along with other species like Sal, Rosewood."
  },
  {
    question: "What problems do Tropical Dry Deciduous forests face?",
    options: ["Too much rain", "Overgrazing, fire, cleared for agriculture", "Too cold", "Sea water intrusion"],
    correct: 1,
    explanation: "These forests have suffered from overgrazing, fire, and large tracts have been cleared for agricultural purposes."
  },
  
  // Tropical Thorn (4 questions)
  {
    question: "What is the humidity level in Tropical Thorn Forest areas?",
    options: [">75%", "60-75%", "<50%", "<25%"],
    correct: 2,
    explanation: "Tropical Thorn Forests occur in areas with humidity less than 50%, rainfall <75 cm, and temperature 25-30°C."
  },
  {
    question: "What is the typical height of Tropical Thorn Forest trees?",
    options: ["2-5 metres", "6-10 metres maximum", "15-20 metres", "25-30 metres"],
    correct: 1,
    explanation: "The trees are low (6 to 10 metres maximum) and widely scattered in Tropical Thorn Forests."
  },
  {
    question: "Which plants are very prominent in Tropical Thorn Forests?",
    options: ["Pines and Deodars", "Acacias and Euphorbias", "Oaks and Chestnuts", "Sal and Teak"],
    correct: 1,
    explanation: "Acacias and Euphorbias are very prominent in Tropical Thorn Forests, along with Indian wild date, Neem, Babul, and Cacti."
  },
  {
    question: "What happens to Tropical Thorn Forests in the Thar desert?",
    options: ["Become very dense", "Degenerate into desert type", "Convert to grasslands", "Become wetlands"],
    correct: 1,
    explanation: "In Rajasthan and northwestern regions, Tropical Thorn Forests degenerate into desert type in the Thar desert."
  },
  
  // Montane Sub-tropical (6 questions)
  {
    question: "At what altitude are Sub-tropical Broad-leaved Hill Forests found in Eastern Himalayas?",
    options: ["500-1000m", "1000-2000m", "2000-3000m", "3000-4000m"],
    correct: 1,
    explanation: "Sub-tropical Broad-leaved Hill Forests occur in Eastern Himalayas at altitudes varying from 1000 to 2000m."
  },
  {
    question: "Where do Sub-tropical Broad-leaved forests occur in southern India?",
    options: ["Entire Western Ghats", "Only in Nilgiri and Palni hills at 1070-1525m", "Eastern Ghats only", "Coastal plains"],
    correct: 1,
    explanation: "In southern India, they occur only in Nilgiri and Palni hills at 1070-1525 metres above sea level."
  },
  {
    question: "Which tree is most dominant in Sub-tropical Moist Pine Forests?",
    options: ["Deodar", "Chir or Chil Pine", "Spruce", "Fir"],
    correct: 1,
    explanation: "Chir or Chil is the most dominant tree which forms pure stands in Sub-tropical Moist Pine Forests."
  },
  {
    question: "What percentage of India's forest area is Sub-tropical Moist Pine?",
    options: ["2%", "4%", "6%", "8%"],
    correct: 2,
    explanation: "Sub-tropical Moist Pine forests account for 6% of India's total forest area."
  },
  {
    question: "What products come from Chir/Chil Pine besides timber?",
    options: ["Rubber and latex", "Resin and turpentine", "Spices", "Medicinal oils"],
    correct: 1,
    explanation: "Chir/Chil Pine provides valuable timber for furniture, boxes, buildings, and is also used for producing resin and turpentine."
  },
  {
    question: "What type of forests are Sub-tropical Dry Evergreen?",
    options: ["Tall dense forests", "Low scrub forest with small evergreen stunted trees and shrubs", "Pure pine stands", "Bamboo forests"],
    correct: 1,
    explanation: "Sub-tropical Dry Evergreen are low scrub forests with small evergreen stunted trees and shrubs, with hot summers and cold winters."
  },
  
  // Montane Temperate (6 questions)
  {
    question: "At what altitude do Montane Wet Temperate Forests grow?",
    options: ["500-1000m", "1000-1800m", "1800-3000m", "3000-4000m"],
    correct: 2,
    explanation: "Montane Wet Temperate Forests grow at a height of 1800 to 3000m above sea level with 150-300 cm rainfall."
  },
  {
    question: "What is unique about tree height in Montane Wet Temperate Forests?",
    options: ["Very tall trees (60m+)", "Trees rarely achieve more than 6 metres height", "No trees, only shrubs", "Trees reach 100m"],
    correct: 1,
    explanation: "Despite closed evergreen structure with large girth trunks clothed in mosses and ferns, trees rarely achieve height of more than 6 metres."
  },
  {
    question: "What characterizes Himalayan Moist Temperate Forests?",
    options: ["Mainly deciduous", "Mainly composed of coniferous species in pure stands, 30-50m high", "Only shrubs", "Mangroves"],
    correct: 1,
    explanation: "Himalayan Moist Temperate Forests are mainly composed of coniferous species occurring in mostly pure stands, trees 30-50m high."
  },
  {
    question: "What is the altitudinal range of Himalayan Moist Temperate Forests?",
    options: ["500-1000m", "1000-1500m", "1500-3300m", "3500-4000m"],
    correct: 2,
    explanation: "Himalayan Moist Temperate Forests occur in the temperate zone of Himalayas between 1500 and 3300 metres."
  },
  {
    question: "What form of precipitation is common in Himalayan Dry Temperate Forests?",
    options: ["Heavy rain", "Mostly in the form of snow (<100 cm)", "Hail", "Fog only"],
    correct: 1,
    explanation: "Himalayan Dry Temperate Forests have precipitation below 100 cm, mostly in the form of snow."
  },
  {
    question: "Where are Himalayan Dry Temperate Forests found?",
    options: ["Coastal areas", "Inner dry ranges where SW monsoon is very feeble: Ladakh, Lahul, Chamba, Kinnaur", "Plains", "Sundarbans"],
    correct: 1,
    explanation: "Found in inner dry ranges of Himalayas where southwest monsoon is very feeble - Ladakh, Lahul, Chamba, Kinnaur, Garhwal, Sikkim."
  },
  
  // Alpine (5 questions)
  {
    question: "At what altitude do Alpine Forests occur?",
    options: ["1000-2000m", "2000-2900m", "2900-3500m+", "4000-5000m"],
    correct: 2,
    explanation: "Alpine Forests occur at altitudes ranging between 2,900 to 3,500 metres and above, divided into sub-alpine, moist alpine scrub, and dry alpine scrub."
  },
  {
    question: "What is unique about tree composition in Sub-Alpine Forests?",
    options: ["Only deciduous", "Mixture of coniferous (30m) and broad-leaved (10m) trees", "Only shrubs", "No trees"],
    correct: 1,
    explanation: "Sub-alpine is a mixture where coniferous trees attain height of 30m while broad-leaved trees reach only 10m."
  },
  {
    question: "What is the altitude range for Moist Alpine Scrub?",
    options: ["1000-2000m", "2000-3000m", "3000m to snowline", "Below snowline only"],
    correct: 2,
    explanation: "Moist Alpine Scrub is a low evergreen dense growth of rhododendron, birch, etc. occurring from 3,000 metres extending up to snowline."
  },
  {
    question: "What characterizes Dry Alpine Scrub?",
    options: ["Dense forests", "Uppermost limit of scrub - xerophytic dwarf shrubs above 3500m in dry zone", "Wetland vegetation", "Coastal plants"],
    correct: 1,
    explanation: "Dry Alpine Scrub is the uppermost limit of scrub with xerophytic dwarf shrubs, over 3,500 metres above sea level in dry zones."
  },
  {
    question: "Which species are found in Dry Alpine Scrub?",
    options: ["Teak and Sal", "Mahogany and Rosewood", "Juniper, Honeysuckle, Artemesia", "Sundri and Mangrove"],
    correct: 2,
    explanation: "Dry Alpine Scrub has juniper, honeysuckle, artemesia - xerophytic dwarf shrubs adapted to harsh high-altitude conditions."
  }
];

// Combine all data for export
export const allQuizQuestions = quizQuestions;

export default {
  forestTypes,
  forestFacts,
  quizQuestions: allQuizQuestions
};
