// Forests of India - Comprehensive Data from PDF Pages 43-45

export const forestTypes = [
  {
    id: 1,
    name: "Tropical Evergreen Forests",
    category: "Tropical",
    subTypes: ["Wet Evergreen", "Semi-Evergreen", "Dry Evergreen"],
    characteristics: [
      "Trees do not shed leaves due to optimal conditions all year round",
      "High canopy density - lack undergrowth",
      "Depending on precipitation levels, divided into subtypes"
    ],
    importance: "HIGH",
    wetEvergreen: {
      rainfall: ">200 cm",
      temperature: "25-27°C",
      locations: ["Western Ghats (south of Mumbai)", "Northeast India", "Andaman & Nicobar"],
      trees: ["Jackfruit", "Rosewood", "Mahogany", "Aini", "Ebony", "Agarwood (Oudh)"]
    },
    semiEvergreen: {
      rainfall: "175-225 cm",
      temperature: "24-27°C",
      locations: ["Western Coast", "Assam", "Lower slopes of Eastern Ghats", "Odisha", "Parts of Andamans"],
      description: "Transition between wet evergreen and moist deciduous",
      characteristics: ["Mix of trees from both forests", "Evergreen due to undergrowth"],
      trees: ["Kadam", "Cashew", "Cedar", "Chestnut", "Thorny bamboo"]
    },
    dryEvergreen: {
      rainfall: "~100 cm spread throughout year",
      temperature: "Variable",
      locations: ["Tamil Nadu coast"],
      characteristics: ["Short trees due to low rainfall"],
      trees: ["Tamarind", "Neem", "Toddy palm"]
    }
  },
  {
    id: 2,
    name: "Tropical Deciduous Forests",
    category: "Tropical",
    subTypes: ["Moist Deciduous", "Dry Deciduous"],
    characteristics: [
      "Trees shed their leaves once a year",
      "Based on precipitation amount, classified into subtypes"
    ],
    importance: "HIGH",
    moistDeciduous: {
      rainfall: "100-200 cm",
      temperature: "~27°C",
      locations: [
        "Parts surrounding Western Ghats",
        "Northeast India",
        "Shiwalik range (Terai & Bhabher belt)",
        "Hills of Eastern MP, CG, Chhotanagpur Plateau",
        "Most of Odisha",
        "Parts of WB & Andaman and Nicobar"
      ],
      characteristics: ["Shrubby undergrowth"],
      trees: ["Teak", "Sal", "Mahua", "Tendu", "Bamboo"]
    },
    dryDeciduous: {
      rainfall: "75-100 cm",
      temperature: "Variable",
      description: "Transition between moist deciduous and thorny forests",
      locations: [
        "Rainier parts of Peninsula",
        "Plains of UP, Bihar, Madhya Pradesh",
        "Some parts of Rajasthan (scantier growth)"
      ],
      trees: ["Teak", "Tendu", "Red Sanders", "Sal", "Khair"]
    }
  },
  {
    id: 3,
    name: "Tropical Thorn Forests",
    category: "Tropical",
    subTypes: [],
    characteristics: [
      "Found in arid locations",
      "Low, widely scattered trees"
    ],
    importance: "MEDIUM",
    rainfall: "<50 cm",
    temperature: "25-30°C",
    locations: [
      "Arid, Semi-arid Northwestern India",
      "Rajasthan",
      "SW Punjab",
      "Western Haryana",
      "Kachchh",
      "Saurashtra",
      "Some parts of UP",
      "Lee-side of Western Ghats (MH, Karnataka, Telangana, AP, TN)"
    ],
    trees: ["Acacia", "Babul", "Neem", "Khair", "Cacti", "Indian wild date (wetter margins)", "Some grasses (wetter margins)"]
  },
  {
    id: 4,
    name: "Littoral & Swamp Forests (Mangroves)",
    category: "Coastal",
    subTypes: [],
    characteristics: [
      "In and around deltas, estuaries, and creeks",
      "Highly developed in Andaman & Nicobar and Sundarbans",
      "Important for protecting coastline from erosion, storm surges, and tsunamis",
      "India has ~7% of world's mangrove forests",
      "Survive and grow in both fresh & brackish water",
      "Have special adaptations: Viviparity and Pneumatophores"
    ],
    importance: "HIGH",
    locations: [
      "Andaman and Nicobar Islands",
      "Sundarbans (Sundri tree) of West Bengal",
      "Mahanadi delta",
      "Godavari delta",
      "Krishna delta"
    ],
    trees: ["Sundri", "Keora", "Agar", "Rhizophora"],
    specialFeatures: {
      indiaShare: "~7% of world's mangrove forests",
      totalCover: "4,992 sq km (as of recent data)",
      adaptations: ["Viviparity", "Pneumatophores"]
    }
  },
  {
    id: 5,
    name: "Alpine/Montane Forests",
    category: "Mountain",
    subTypes: ["Northern Mountains", "Southern Mountains (Western Ghats)"],
    characteristics: [
      "In mountain regions, depending on altitude, different types found",
      "Vertical zonation based on elevation"
    ],
    importance: "HIGH",
    northernMountains: {
      description: "Base has moist deciduous, becomes temperate with height, then alpine tundra beyond tree line",
      zones: [
        {
          altitude: "1000-2000m",
          type: "Wet temperate forests with Pine",
          note: "British replaced Oaks with Pine for Railways"
        },
        {
          altitude: "Up to 3000m",
          type: "Blue Pine, Spruce, and Grasslands"
        },
        {
          altitude: "3000-4000m",
          type: "Alpine forests and Grasslands (Bugyals)",
          trees: ["Silver firs", "Junipers", "Rhododendron"]
        },
        {
          altitude: "Beyond tree line to snow line",
          type: "Alpine tundra vegetation"
        }
      ],
      note: "Northern slopes of Himalayas have little vegetation (continuously devoid of sunlight)"
    },
    southernMountains: {
      description: "Western Ghats - different vegetation on western vs eastern slopes",
      westernSlopes: [
        {
          base: "Evergreen forests",
          higher: "Temperate evergreen forests (Sholas)",
          locations: "Nilgiris, Annamalai, Palani hills"
        }
      ],
      easternSlopes: [
        {
          base: "Dry evergreen or deciduous forests",
          higher: "Temperate sholas"
        }
      ],
      note: "Due to height limitation, southern forests do NOT have alpine tundra type of vegetation"
    }
  }
];

// Key Facts about Indian Forests
export const forestFacts = [
  {
    fact: "Total forest and tree cover: 8,27,357 sq km (25.17% of India's geographical area)",
    category: "Coverage"
  },
  {
    fact: "Forest cover: 7,15,343 sq km (21.76%), Tree cover: 1,12,014 sq km (3.41%)",
    category: "Coverage"
  },
  {
    fact: "Recommended forest cover for ecological stability: 33%",
    category: "Coverage"
  },
  {
    fact: "Total mangrove cover: 4,992 sq km",
    category: "Mangroves"
  },
  {
    fact: "India has ~7% of the world's mangrove forests",
    category: "Mangroves"
  },
  {
    fact: "19 states/UTs have >33% forest cover",
    category: "State Rankings"
  },
  {
    fact: "8 states/UTs have >75% forest cover: Mizoram, Lakshadweep, A&N Islands, Arunachal Pradesh, Nagaland, Meghalaya, Tripura, Manipur",
    category: "State Rankings"
  },
  {
    fact: "Largest total forest cover: Madhya Pradesh, Arunachal Pradesh, Maharashtra",
    category: "State Rankings"
  },
  {
    fact: "Highest percentage forest cover: Lakshadweep (91.33%), Mizoram (85.34%), A&N Islands (81.62%)",
    category: "State Rankings"
  },
  {
    fact: "Maximum bamboo-bearing area: Madhya Pradesh, Arunachal Pradesh, Maharashtra",
    category: "Bamboo"
  },
  {
    fact: "Among megacities (Bengaluru, Chennai, Delhi, Kolkata, Hyderabad, Mumbai), Delhi has highest forest cover",
    category: "Urban Forests"
  },
  {
    fact: "FAO Report: India gained 2,66,000 hectares forest annually (2010-2020), 3rd globally after China and Australia",
    category: "Growth"
  },
  {
    fact: "Concern: Total cover grew only 1445 sq km (vs 1540 sq km in 2021)",
    category: "Concerns"
  },
  {
    fact: "Concern: Decline in mangrove cover by 7.43 sq km",
    category: "Concerns"
  },
  {
    fact: "Concern: Western Ghats ESA lost 58.22 km² forest in past 10 years",
    category: "Concerns"
  },
  {
    fact: "Concern: North-East India declined by 327.30 sq km",
    category: "Concerns"
  }
];

// Quiz Questions - 40 comprehensive UPSC-style questions
export const quizQuestions = [
  {
    question: "Which forest type has trees that do NOT shed their leaves due to optimal conditions year-round?",
    options: ["Tropical Deciduous", "Tropical Evergreen", "Tropical Thorn", "Alpine"],
    correct: 1,
    explanation: "Tropical Evergreen forests have trees that do not shed leaves due to optimal conditions all year round. Due to high canopy density, they lack undergrowth."
  },
  {
    question: "Wet Evergreen forests require how much rainfall?",
    options: ["<50 cm", "100-200 cm", ">200 cm", "75-100 cm"],
    correct: 2,
    explanation: "Wet Evergreen forests require rainfall >200 cm and temperature of 25-27°C. Found in Western Ghats (south of Mumbai), Northeast India, and Andaman & Nicobar."
  },
  {
    question: "Which tree is NOT found in Wet Evergreen forests?",
    options: ["Rosewood", "Mahogany", "Agarwood (Oudh)", "Teak"],
    correct: 3,
    explanation: "Teak is found in Moist Deciduous forests, not Wet Evergreen. Wet Evergreen has Jackfruit, Rosewood, Mahogany, Aini, Ebony, and Agarwood (Oudh)."
  },
  {
    question: "Semi-Evergreen forests are a transition between which two forest types?",
    options: ["Wet evergreen and moist deciduous", "Dry deciduous and thorn forests", "Alpine and temperate", "Mangrove and coastal"],
    correct: 0,
    explanation: "Semi-Evergreen forests are a transition between wet evergreen and moist deciduous forests. They have a mix of trees from both types and are evergreen due to undergrowth."
  },
  {
    question: "Where are Dry Evergreen forests found in India?",
    options: ["Western Ghats", "Northeast India", "Tamil Nadu coast", "Andaman & Nicobar"],
    correct: 2,
    explanation: "Dry Evergreen forests are found on the Tamil Nadu coast with about 100 cm of rain spread throughout the year. They have short trees due to low rainfall."
  },
  {
    question: "What is the key characteristic of Tropical Deciduous forests?",
    options: ["Never shed leaves", "Shed leaves once a year", "Always evergreen", "No undergrowth"],
    correct: 1,
    explanation: "Tropical Deciduous forests have trees that shed their leaves once a year, unlike evergreen forests."
  },
  {
    question: "Moist Deciduous forests require how much rainfall?",
    options: ["<50 cm", "75-100 cm", "100-200 cm", ">200 cm"],
    correct: 2,
    explanation: "Moist Deciduous forests require 100-200 cm rainfall and temperature of about 27°C. They have shrubby undergrowth with valuable trees like teak, sal, mahua."
  },
  {
    question: "Which is NOT a characteristic tree of Moist Deciduous forests?",
    options: ["Teak", "Sal", "Bamboo", "Mahogany"],
    correct: 3,
    explanation: "Mahogany is found in Wet Evergreen forests. Moist Deciduous forests have valuable trees like teak, sal, mahua, tendu, and bamboo."
  },
  {
    question: "Dry Deciduous forests are a transition between which forest types?",
    options: ["Wet evergreen and semi-evergreen", "Moist deciduous and thorny forests", "Alpine and temperate", "Mangrove and littoral"],
    correct: 1,
    explanation: "Dry Deciduous forests (75-100 cm rainfall) are a transition between moist deciduous and thorny forests."
  },
  {
    question: "Tropical Thorn forests are found in locations with rainfall less than?",
    options: ["100 cm", "75 cm", "50 cm", "25 cm"],
    correct: 2,
    explanation: "Tropical Thorn forests are found in arid locations with rain <50 cm and temperature 25-30°C. They have low, widely scattered trees."
  },
  {
    question: "Where are Tropical Thorn forests found on the lee-side of Western Ghats?",
    options: ["Kerala, Tamil Nadu", "Maharashtra, Karnataka, Telangana, AP, TN", "Gujarat, Rajasthan", "MP, Chhattisgarh"],
    correct: 1,
    explanation: "Tropical Thorn forests are found on the lee-side of Western Ghats in Maharashtra, Karnataka, Telangana, Andhra Pradesh, and Tamil Nadu."
  },
  {
    question: "What percentage of the world's mangrove forests does India have?",
    options: ["3%", "7%", "12%", "15%"],
    correct: 1,
    explanation: "India has about 7% of the world's mangrove forests, covering 4,992 sq km."
  },
  {
    question: "Sundarbans are famous for which tree?",
    options: ["Sundri", "Keora", "Agar", "Rhizophora"],
    correct: 0,
    explanation: "Sundarbans in West Bengal are famous for the Sundri tree, from which the region gets its name."
  },
  {
    question: "What are the special adaptations of mangrove forests?",
    options: ["Deep roots and thorns", "Viviparity and Pneumatophores", "Shedding leaves annually", "High canopy density"],
    correct: 1,
    explanation: "Mangrove forests have special adaptations like Viviparity (live birth of seedlings) and Pneumatophores (breathing roots) to survive in both fresh and brackish water."
  },
  {
    question: "At what altitude in Northern Mountains do we get wet temperate forests with Pine?",
    options: ["500-1000m", "1000-2000m", "3000-4000m", "Above 4000m"],
    correct: 1,
    explanation: "At 1000-2000m in Northern Mountains we get wet temperate forests with Pine trees. British replaced Oaks with Pine and used it for laying Railways."
  },
  {
    question: "Why did the British replace Oaks with Pine in Himalayan forests?",
    options: ["Pine grows faster", "For laying Railways", "Pine is more valuable", "Oaks were diseased"],
    correct: 1,
    explanation: "British replaced Oaks with Pine in wet temperate forests (1000-2000m) and used Pine for laying Railways."
  },
  {
    question: "What are Bugyals?",
    options: ["Alpine forests", "Grasslands at 3000-4000m", "Mountain peaks", "Glaciers"],
    correct: 1,
    explanation: "Bugyals are grasslands found at 3000-4000m altitude in the Northern Mountains, along with alpine forests (Silver firs, Junipers, Rhododendron)."
  },
  {
    question: "What type of vegetation is found beyond the tree line up to snow line in Himalayas?",
    options: ["Dense forests", "Alpine tundra vegetation", "Deciduous forests", "Grasslands"],
    correct: 1,
    explanation: "Beyond the tree line, up to the snow line, there is alpine tundra vegetation in the Northern Mountains."
  },
  {
    question: "Why do Northern slopes of Himalayas have little vegetation?",
    options: ["Too cold", "Continuously devoid of sunlight", "No water", "Too windy"],
    correct: 1,
    explanation: "Northern slopes of the Himalayas do not have much vegetation as this region continuously remains devoid of sunlight."
  },
  {
    question: "What are Sholas?",
    options: ["Desert vegetation", "Temperate evergreen forests in Western Ghats", "Mangrove forests", "Thorn forests"],
    correct: 1,
    explanation: "Sholas are temperate evergreen forests found in Western Ghats (Nilgiris, Annamalai, and Palani hills) as the height increases from base evergreen forests."
  }
];

// Additional 20 questions for comprehensive coverage
export const additionalQuestions = [
  {
    question: "Where are Sholas mainly found?",
    options: ["Himalayas", "Nilgiris, Annamalai, Palani hills", "Eastern Ghats", "Sundarbans"],
    correct: 1,
    explanation: "Sholas (temperate evergreen forests) are mainly found in Nilgiris, Annamalai, and Palani hills of Western Ghats."
  },
  {
    question: "Why do southern mountains (Western Ghats) NOT have alpine tundra vegetation?",
    options: ["Too hot", "Height limitation", "No snow", "Too dry"],
    correct: 1,
    explanation: "Due to height limitation, the southern forests (Western Ghats) do not have alpine tundra type of vegetation, unlike the Northern Mountains."
  },
  {
    question: "What percentage of India's geographical area has forest and tree cover?",
    options: ["21.76%", "25.17%", "33%", "40%"],
    correct: 1,
    explanation: "Total forest and tree cover is 8,27,357 sq km, which is 25.17% of India's geographical area. However, this is still below the recommended 33%."
  },
  {
    question: "What is the recommended forest cover percentage for ecological stability?",
    options: ["25%", "30%", "33%", "40%"],
    correct: 2,
    explanation: "The recommended forest cover for ecological stability is 33%, but India currently has 25.17% forest and tree cover."
  },
  {
    question: "How many states/UTs have over 75% forest cover?",
    options: ["4", "6", "8", "10"],
    correct: 2,
    explanation: "8 states/UTs have over 75% forest cover: Mizoram, Lakshadweep, Andaman & Nicobar Islands, Arunachal Pradesh, Nagaland, Meghalaya, Tripura, and Manipur."
  },
  {
    question: "Which state has the highest percentage of forest cover?",
    options: ["Mizoram (85.34%)", "Lakshadweep (91.33%)", "A&N Islands (81.62%)", "Arunachal Pradesh"],
    correct: 1,
    explanation: "Lakshadweep has the highest percentage of forest cover at 91.33%, followed by Mizoram (85.34%) and A&N Islands (81.62%)."
  },
  {
    question: "Which states have the largest total forest and tree cover?",
    options: ["Kerala, Karnataka, Tamil Nadu", "Madhya Pradesh, Arunachal Pradesh, Maharashtra", "Odisha, Chhattisgarh, Jharkhand", "Assam, Meghalaya, Nagaland"],
    correct: 1,
    explanation: "Madhya Pradesh, Arunachal Pradesh, and Maharashtra have the largest total forest and tree cover in India."
  },
  {
    question: "Which megacity has the highest forest cover?",
    options: ["Mumbai", "Bengaluru", "Delhi", "Kolkata"],
    correct: 2,
    explanation: "Among the six megacities (Bengaluru, Chennai, Delhi, Kolkata, Hyderabad, Mumbai), Delhi has the highest forest cover."
  },
  {
    question: "According to FAO Report, India gained how much forest area annually from 2010-2020?",
    options: ["1,00,000 hectares", "2,66,000 hectares", "3,50,000 hectares", "5,00,000 hectares"],
    correct: 1,
    explanation: "According to FAO's State of World's Forests Report (2024), India gained 2,66,000 hectares of forest annually from 2010 to 2020, ranking 3rd after China and Australia."
  },
  {
    question: "What is India's global ranking in forest area gains (2010-2020)?",
    options: ["1st", "2nd", "3rd", "5th"],
    correct: 2,
    explanation: "India secured the 3rd spot after China and Australia among top 10 countries with most significant forest area gains from 2010 to 2020."
  },
  {
    question: "By how much did the total mangrove cover decline recently?",
    options: ["3.21 sq km", "7.43 sq km", "12.56 sq km", "15.78 sq km"],
    correct: 1,
    explanation: "A concerning trend is the decline in total mangrove cover by 7.43 sq km, despite overall forest cover increase."
  },
  {
    question: "How much forest cover was lost in Western Ghats ESA in the past 10 years?",
    options: ["25.34 km²", "42.17 km²", "58.22 km²", "75.89 km²"],
    correct: 2,
    explanation: "In Western Ghats Ecologically Sensitive Area, there was an overall loss of 58.22 km² in forest cover in the past 10 years."
  },
  {
    question: "By how much did forest cover decline in North-East India?",
    options: ["150.25 sq km", "250.50 sq km", "327.30 sq km", "450.75 sq km"],
    correct: 2,
    explanation: "In North-East India, there was a decline in forest cover by 327.30 sq km, which is a major concern."
  },
  {
    question: "Which states have maximum bamboo-bearing area?",
    options: ["Assam, Meghalaya, Tripura", "Madhya Pradesh, Arunachal Pradesh, Maharashtra", "Kerala, Karnataka, Tamil Nadu", "Odisha, Chhattisgarh, Jharkhand"],
    correct: 1,
    explanation: "Madhya Pradesh, Arunachal Pradesh, and Maharashtra have the maximum bamboo-bearing area in India."
  },
  {
    question: "What is the current total mangrove cover in India?",
    options: ["3,456 sq km", "4,992 sq km", "5,678 sq km", "6,234 sq km"],
    correct: 1,
    explanation: "The total mangrove cover in India is 4,992 sq km, which represents about 7% of the world's mangrove forests."
  },
  {
    question: "Which tree is characteristic of Tamil Nadu coast Dry Evergreen forests?",
    options: ["Teak", "Sal", "Tamarind", "Rosewood"],
    correct: 2,
    explanation: "Dry Evergreen forests on Tamil Nadu coast have characteristic trees like Tamarind, Neem, and Toddy palm with short stature due to low rainfall (~100 cm)."
  },
  {
    question: "Red Sanders is found in which forest type?",
    options: ["Wet Evergreen", "Dry Deciduous", "Semi-Evergreen", "Thorn Forests"],
    correct: 1,
    explanation: "Red Sanders is found in Dry Deciduous forests (75-100 cm rainfall) along with Teak, Tendu, Sal, and Khair."
  },
  {
    question: "Where are mangrove forests highly developed in India?",
    options: ["Kerala coast", "Gujarat coast", "Andaman & Nicobar Islands and Sundarbans", "Tamil Nadu coast"],
    correct: 2,
    explanation: "Mangrove forests are highly developed in the Andaman and Nicobar Islands and Sundarbans of West Bengal, also seen in Mahanadi, Godavari, and Krishna deltas."
  },
  {
    question: "What grows in wetter margins of Tropical Thorn forests?",
    options: ["Teak and Sal", "Indian wild date and some grasses", "Mahogany and Rosewood", "Pine and Spruce"],
    correct: 1,
    explanation: "In wetter margins of Tropical Thorn forests, Indian wild date and some grasses can be found, along with main species like Acacia, Babul, Neem, Khair, and Cacti."
  },
  {
    question: "At what altitude range are alpine forests and Bugyals found in Northern Mountains?",
    options: ["1000-2000m", "2000-3000m", "3000-4000m", "Above 4000m"],
    correct: 2,
    explanation: "Alpine forests (Silver firs, Junipers, Rhododendron) and grasslands (Bugyals) are found at 3000-4000m altitude in Northern Mountains."
  }
];

// Combine all quiz questions
export const allQuizQuestions = [...quizQuestions, ...additionalQuestions];

export default {
  forestTypes,
  forestFacts,
  quizQuestions: allQuizQuestions
};
