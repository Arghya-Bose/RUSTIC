const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#story" },
  { label: "Our Work", href: "#pillars" },
  { label: "Impact", href: "#impact" },
  { label: "Environment", href: "#environment" },
  { label: "Programs", href: "#community" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const impactStats = [
  {
    value: 250000,
    suffix: "+",
    label: "Beneficiaries",
    sublabel: "Beneficiaries",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">RUSTIC has reached more than 250,000 beneficiaries through its development programmes, supporting communities to build more secure, healthy, and dignified lives.</span>',
    color: "#3DBC7E",
    decimals: 0,
  },
  {
    value: 4200,
    suffix: "",
    label: "Households Reached",
    sublabel: "4,200 selected households",
    note: '<span style="display:block; text-align:justify; line-height:1.6;"> RUSTIC supports approximately 4,580 underprivileged people through 243 female and male groups. These groups support skill development, income-generating activities, savings management, leadership, and community participation.',
    color: "#55C7DD",
    decimals: 0,
  },
  {
    value: 3.5,
    suffix: " MT",
    label: "Solid Waste Collected",
    sublabel: "3.0–3.5 MT daily",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">RUSTIC collects and manages 3.0–3.5 MT of solid waste daily from selected households, supporting cleaner and healthier communities.',
    color: "#159FC1",
    decimals: 1,
  },
  {
    value: 1.8,
    suffix: " MT",
    label: "Organic Fertilizer Produced",
    sublabel: "1.6–1.8 MT daily",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">Through its waste-management and composting activities, RUSTIC produces 1.6–1.8 MT of organic fertilizer daily, turning organic waste into a valuable resource.</span>',
    color: "#D88A60",
    decimals: 1,
  },
  {
    value: 2800,
    suffix: "+",
    label: "Women Supported",
    sublabel: "2,800+ Women Supported",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">One of RUSTIC’s projects targets more than 2,800 women and their families, providing community awareness, environmental and rights training, emergency preparedness, practical income-generation training, and access to credit for suitable activities..</span>',
    color: "#3DBC7E",
    decimals: 0,
  },
  {
    value: 720,
    suffix: "+",
    label: "Children Supported",
    sublabel: "720 Children Supported Through Education",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">Through its Non-Formal Education initiative for the eradication of hazardous child labour, RUSTIC helped educate 720 students—360 students in each of two catchment areas. The programme aimed to help children move away from the child-labour cycle and toward better opportunities.</span>',
    color: "#3DBC7E",
    decimals: 0,
  },
  {
    value: 16500,
    suffix: "+",
    label: "Forestry for Carbon Management",
    sublabel: "16,500 Trees Planted",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">RUSTIC undertook afforestation projects in Sharankhola and Mongla, planting 16,500 tree saplings along 16.5 km of roadside in 1998. Approximately 60% of the trees survived despite Cyclones Sidr and Aila.</span>',
    color: "#3DBC7E",
    decimals: 0,
  },
  {
    value: 2800,
    suffix: "+",
    label: "Cook Stove",
    sublabel: "6,200 Cleaner Cooking Solutions",
    note: '<span style="display:block; text-align:justify; line-height:1.6;">Under the KCC-UNDP-funded UPPR Project, RUSTIC distributed 6,200 improved cook stoves. The programme included stove setup, training, and maintenance, while the improved stoves were designed to reduce wood consumption and carbon emissions.</span>',
    color: "#3DBC7E",
    decimals: 0,
  },
];

const storySteps = [
  {
    word: "POVERTY",
    color: "#A84C24",
    image: "images/poverty.png",
    description:
      "RUSTIC works with poor and vulnerable communities facing poverty, limited opportunities, natural disasters, salinity, waterlogging, and loss of livelihoods. Its programmes focus on improving living standards, access to resources, skills, income, employment, and basic rights.",
  },

  {
    word: "EMPOWERMENT",
    color: "#D88A60",
    image: "images/empowerment.png",
    description:
      "RUSTIC believes sustainable change begins when people have the knowledge, skills, resources, and collective strength to shape their own future. Through community groups, education, skills development, savings, entrepreneurship, and awareness, people are supported to become more self-reliant.",
  },

  {
    word: "SUSTAINABILITY",
    color: "#16A765",
    image: "images/sustainability.png",
    description:
      "RUSTIC promotes sustainable livelihoods and environmentally responsible solutions. From sustainable agriculture and micro-entrepreneurship to waste management, composting, improved cookstoves, biogas, and biodiversity conservation, its programmes connect economic development with environmental protection.",
  },

  {
    word: "RESILIENCE",
    color: "#008F9C",
    image: "images/resilience.png",
    description:
      "Working in one of Bangladesh's cyclone-prone regions, RUSTIC helps communities adapt to climate-related challenges such as cyclones, tidal surges, salinity, waterlogging, and changing weather patterns. Its approach includes strengthening adaptation capacity, developing alternative livelihoods, reducing carbon emissions, and promoting climate-resilient practices.",
  },

  {
    word: "COMMUNITY",
    color: "#159FC1",
    image: "images/impact_2.webp",
    description:
      "At the heart of RUSTIC's work is the belief that lasting development is built with communities. By organizing grassroots people, strengthening local institutions, supporting women and children, protecting rights, and building partnerships, RUSTIC works toward communities where people can live with dignity while protecting the environment around them.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Organization Building & Institutionalization",
    description:
      "Strengthening grassroots institutions, governance, and community-led organizations to create lasting systemic change.",
    color: "#123D2A",
    accent: "#16A765",
    icon: "building",
  },
  {
    number: "02",
    title: "Education & Human Resource Development",
    description:
      "Investing in education, skills training, and human development to unlock potential and break cycles of poverty.",
    color: "#008F9C",
    accent: "#55C7DD",
    icon: "graduation",
  },
  {
    number: "03",
    title: "Food Security & Economic Self-Reliance",
    description:
      "Creating sustainable livelihoods, improving food security, and enabling economic independence for vulnerable families.",
    color: "#247A45",
    accent: "#3DBC7E",
    icon: "wheat",
  },
  {
    number: "04",
    title: "Climate Resilience & Environmental Protection",
    description:
      "Protecting ecosystems, building climate resilience, and transforming waste into resources for a sustainable future.",
    color: "#005A63",
    accent: "#008F9C",
    icon: "leaf",
  },
  {
    number: "05",
    title: "Rights Protection & Healthcare",
    description:
      "Defending human rights, expanding healthcare access, and ensuring dignity and well-being for every community member.",
    color: "#A84C24",
    accent: "#D88A60",
    icon: "heart",
  },
];

const wasteProcess = [
  {
    step: "01",
    title: "Household Waste",
    description:
      "RUSTIC’s waste management initiative engages 4,200 selected households across its working areas, bringing households into a community-based approach to managing everyday waste. The initiative encourages communities to take greater responsibility for their local environment while making household waste the starting point for resource recovery and processing. Through this community participation, the programme creates the foundation for cleaner surroundings and more sustainable waste management practices.",
    color: "#8A3A1B",
    icon: "home",
  },
  {
    step: "02",
    title: "Collection",
    description:
      "Waste is collected from the selected households through an organized community-based system, with approximately 3.0–3.5 metric tons of solid waste collected daily. This regular collection helps prevent household waste from accumulating within the community and brings the waste together for further management and resource recovery. In this way, the collection process contributes to cleaner surroundings and improved environmental practices.",
    color: "#A84C24",
    icon: "trash",
  },
  {
    step: "03",
    title: "Sorting",
    description:
      "Collected waste is sorted at the community level into organic, recyclable, and reject categories. This separation helps identify materials that can be recovered, recycled, composted, or processed appropriately. Organic waste can then be directed towards composting and vermicomposting, while recyclable materials can be recovered for further use. Proper sorting makes the waste management process more organized and efficient. It also helps maximize resource recovery while reducing the amount of waste that ultimately requires disposal.",
    color: "#C26A3E",
    icon: "filter",
  },
  {
    step: "04",
    title: "Composting",
    description:
      "Organic waste is processed through composting and vermicomposting activities, where biodegradable materials are transformed into valuable organic material. These processes use natural biological methods to break down organic waste and produce material that can be used as an organic input for agricultural activities. By converting biodegradable waste into useful resources, the process helps reduce waste while returning valuable nutrients to the soil.",
    color: "#247A45",
    icon: "recycle",
  },
  {
    step: "05",
    title: "Organic Fertilizer",
    description:
      "RUSTIC’s waste-processing activities produce approximately 1.6–1.8 metric tons of organic fertilizer daily, transforming organic waste from a disposal challenge into a valuable resource. The resulting fertilizer provides an environmentally responsible agricultural input and demonstrates how waste can be recovered and given a second purpose. This creates a direct connection between responsible waste management, resource recovery, and agricultural use.",
    color: "#16A765",
    icon: "sprout",
  },
  {
    step: "06",
    title: "Sustainable Agriculture",
    description:
      "The organic fertilizer produced through RUSTIC’s waste management activities can support agricultural activities, creating a practical connection between responsible waste management and farming. By returning organic resources to the land instead of treating them only as waste, the approach supports RUSTIC’s broader focus on sustainable agriculture and environmental protection. Together, these activities demonstrate a waste-to-resource cycle that connects communities, waste management, resource recovery, and sustainable agriculture.",
    color: "#123D2A",
    icon: "wheat",
  },
];

const environmentInitiatives = [
  {
    title: "Solid Waste Management",
    description:
      "Community-led collection and processing of 3.0–3.5 MT of solid waste daily, transforming urban waste into valuable resources.",
    icon: "trash",
    color: "#16A765",
  },
  {
    title: "Vermicompost & Vermiculture",
    description:
      "Producing 1.6–1.8 MT of organic fertilizer daily using earthworm-based composting systems.",
    icon: "bug",
    color: "#247A45",
  },
  {
    title: "Biodiversity Conservation",
    description:
      "Protecting local ecosystems and species through community-driven conservation programs in the Sundarbans region.",
    icon: "bird",
    color: "#008F9C",
  },
  {
    title: "Improved Cook Stoves",
    description:
      "Distributing fuel-efficient stoves that reduce firewood consumption and indoor air pollution for rural families.",
    icon: "flame",
    color: "#159FC1",
  },
  {
    title: "Biogas",
    description:
      "Converting organic waste into clean energy, reducing dependence on fossil fuels and improving household health.",
    icon: "zap",
    color: "#55C7DD",
  },
  {
    title: "Water & Sanitation",
    description:
      "Ensuring access to safe drinking water and sanitation facilities for vulnerable communities.",
    icon: "droplets",
    color: "#2DB8C4",
  },
  {
    title: "Forestry / Afforestation",
    description:
      "16,500 tree saplings planted and 16.5 km of roadside plantation across working areas.",
    icon: "tree",
    color: "#3DBC7E",
  },
  {
    title: "Sustainable Agriculture",
    description:
      "Promoting climate-resilient farming practices that protect soil health and ensure food security.",
    icon: "wheat",
    color: "#16A765",
  },
];

const forestryStats = [
  {
    value: 16500,
    suffix: "",
    label: "Tree Saplings Planted",
    note: "Reported in organizational profile",
    decimals: 0,
  },
  {
    value: 16.5,
    suffix: " KM",
    label: "Roadside Plantation",
    note: "Reported in organizational profile",
    decimals: 1,
  },
  {
    value: 60,
    suffix: "%",
    label: "Survival Rate",
    note: "Approximately, as reported in profile",
    decimals: 0,
  },
];

const communityAreas = [
  {
    title: "Education",
    description:
      "Schools, learning centers, and scholarship programs opening doors for the next generation.",
    icon: "book",
    color: "#16A765",
  },
  {
    title: "Women's Empowerment",
    description:
      "Skills training, entrepreneurship support, and leadership development for women.",
    icon: "sparkles",
    color: "#A84C24",
  },
  {
    title: "Healthcare",
    description:
      "Community health services, awareness campaigns, and access to essential care.",
    icon: "heart",
    color: "#008F9C",
  },
  {
    title: "Safe Drinking Water",
    description:
      "Ensuring clean water access through infrastructure and water quality monitoring.",
    icon: "droplets",
    color: "#159FC1",
  },
  {
    title: "Child Rights",
    description:
      "Protecting children from exploitation and ensuring access to education and care.",
    icon: "shield",
    color: "#247A45",
  },
  {
    title: "Economic Self-Reliance",
    description:
      "Livelihood training, micro-enterprise, and financial inclusion for families.",
    icon: "trending",
    color: "#D88A60",
  },
  {
    title: "Community Development",
    description:
      "Building infrastructure, governance, and collective capacity for lasting change.",
    icon: "users",
    color: "#16A765",
  },
];

const locations = [
  {
    name: "Khulna",
    description:
      "Primary working area and organizational base. Home to RUSTIC headquarters and core program operations across urban and rural communities.",
    x: 35,
    y: 62,
    color: "#16A765",
  },
  {
    name: "Bagerhat",
    description:
      "Coastal district where RUSTIC implements climate resilience, waste management, and sustainable agriculture programs.",
    x: 42,
    y: 72,
    color: "#008F9C",
  },
  {
    name: "Satkhira",
    description:
      "Climate-vulnerable district near the Sundarbans, focus of environmental protection and biodiversity conservation efforts.",
    x: 22,
    y: 68,
    color: "#159FC1",
  },
];

const partners = [
  "Department of Environment",
  "Local Government Division",
  "Ministry of Forests",
  "Khulna City Corporation",
  "Bangladesh NGO Foundation",
  "CARITAS Bangladesh",
  "CARE Bangladesh",
  "GIZ & UNDP",
  "Seven Hills Global Outreach",
  "Bangladesh NGO Foundation",
];

const footerPrograms = [
  "Waste Management",
  "Climate Resilience",
  "Education",
  "Healthcare",
  "Afforestation",
  "Women Empowerment",
];

// ---------- Gallery photos ----------
const galleryPhotos = [
  {
    src: "images/impact_6.webp?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Children Support",
    category: "education",
    description:
      "Non-Formal Education initiative for the eradication of hazardous child labour, RUSTIC helped educate 720 students",
  },
  {
    src: "images/impact_3.webp?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Women Gathering",
    category: "community",
    description:
      "Village womens gather for education and development planning.",
  },
  {
    src: "images/impact_4.webp?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Recycling",
    category: "waste",
    description:
      "Community members sorting recyclable materials as part of RUSTIC's waste management program.",
  },
  {
    src: "images/impact_5.webp?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Composting at Home",
    category: "waste",
    description:
      "Community members composting organic waste to produce fertilizer.",
  },
  {
    src: "images/impact_7.webp?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Tree Planting",
    category: "forestry",
    description:
      "Community members planting a sapling as part of RUSTIC's afforestation program.",
  },
  {
    src: "images/water_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "WATER AND SANITATION",
    category: "community",
    description:
      "With the support of Seven Hills Foundation, RUSTIC was able to provide fresh water to 360 target families in KCC.",
  },
  {
    src: "images/voter_education_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Voter Education",
    category: "community",
    description:
      "Voters have a key role in ensuring and strengthening the democracy of a country. As a result, RUSTIC, in partnership with the development organization BROTEE.",
  },
  {
    src: "images/networking_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Networking with Local NGOs",
    category: "community",
    description:
      "RUSTIC connects with various local forums, national forums and networks of development associations to enhance capacity of the development organisations, increase access to resources, and contribute to the policy planning.",
  },
  {
    src: "images/cooperative_of_farmer_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Cooperative of Farmer ",
    category: "forestry",
    description:
      "RUSTIC formed a local-based farmers’ association to market products and run a small trade of its group members",
  },
  {
    src: "images/organic_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Organic Farming",
    category: "forestry",
    description:
      "Integrated organic farming is an innovation by RUSTIC. It provides skill development training on prawn-fish poly-culture, fish in paddy land, homestead gardening, vegetable cultivation on the pond banks or boundaries of agrarian lands, use of organic compost to protect soil quality, livestock, poultry rearing and many more.",
  },
  {
    src: "images/livestock_img.png?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Livestock Rearing ",
    category: "forestry",
    description:
      "RUSTIC is extended to livestock activities, especially with ‘Goat Rearing’ and ‘Beef Fattening’ activities.",
  },
];

const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "community", label: "Community" },
  { id: "education", label: "Education" },
  { id: "waste", label: "Waste & Resource" },
  { id: "forestry", label: "Forestry & Agriculture" },
  { id: "climate", label: "Climate" },
];

// ---------- SVG Icon Paths ----------
const icons = {
  building:
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h12"/><path d="M6 16h12"/><path d="M6 8h12"/>',
  graduation:
    '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  wheat:
    '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  heart:
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  trash:
    '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  recycle:
    '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.049a1.83 1.83 0 0 1 1.57-.881 1.785 1.785 0 0 1 1.57.881l1.108 1.916"/><path d="m13.378 9.633 4.093 1.098L18.5 6.5"/>',
  sprout:
    '<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10M8.5 8.5c.8-1.5 2-2 3.5-2 1.5 0 2.7.5 3.5 2M9 12c.8-1.5 2-2 3.5-2 1.5 0 2.7.5 3.5 2"/>',
  bug: '<path d="m8 2 1.88 1.88M14.12 6 12 8M12 2l1.88 1.88M18.5 12.5 21 15M6 6 8 8M14 2l-1.88 1.88M9 12.5 6.5 15"/><path d="M18 11.5V12a6 6 0 0 1-12 0v-.5"/><path d="M18 11.5a6 6 0 0 0-12 0"/>',
  bird: '<path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20a9 9 0 0 0 1.4-2Z"/>',
  flame:
    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.244 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  droplets:
    '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 6 6.5c.34.67.5 1.35.5 2.04 0 .7-.17 1.3-.5 2 .34.67.5 1.35.5 2.04 0 .7-.17 1.3-.5 2"/><path d="M12.56 6.6c1.8 1.7 2.7 3.44 2.7 5.2 0 2.2-1.8 4.05-4 4.05s-4-1.84-4-4.05c0-1.76.9-3.5 2.7-5.2"/><path d="M16.7 13.5c1.8 1.7 2.7 3.44 2.7 5.2 0 2.2-1.8 4.05-4 4.05s-4-1.84-4-4.05c0-1.76.9-3.5 2.7-5.2"/>',
  tree: '<path d="m17 14 3 3.3a1 1 0 0 1-.78 1.7H4.78a1 1 0 0 1-.78-1.7L7 14h.3a1 1 0 0 0 .7-1.7l-3-3.3a1 1 0 0 1 .78-1.7h3.44a1 1 0 0 0 .78-1.7L6 3.3a1 1 0 0 1 .78-1.7h10.44a1 1 0 0 1 .78 1.7l-3.3 3.3a1 1 0 0 0 .78 1.7h3.44a1 1 0 0 1 .78 1.7l-3 3.3a1 1 0 0 0 .7 1.7Z"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  sparkles:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.58a.55.55 0 0 1 0-1.062L8.5 9.836A2 2 0 0 0 9.937 8.4l1.58-6.135a.55.55 0 0 1 1.061 0L14.063 8.4A2 2 0 0 0 15.5 9.837l6.135 1.58a.55.55 0 0 1 0 1.062L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.58 6.135a.55.55 0 0 1-1.061 0z"/>',
  shield:
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.5 5-2.5.5 1 3 2.5 5 2.5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  trending:
    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  users:
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  pencil:
    '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.322 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.5z"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/>',
  cap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
};

function svgIcon(name, size = 24, color = "currentColor", sw = 2) {
  const path = icons[name] || "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

// ---------- Rustic Logo SVG ----------
function rusticLogoSVG() {
  let gearRects = "";
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 * Math.PI) / 180;
    const cx = 100 + Math.cos(angle) * 88;
    const cy = 100 + Math.sin(angle) * 88;
    gearRects += `<rect x="${cx - 4}" y="${cy - 4}" width="8" height="8" rx="2" fill="#247A45" transform="rotate(${i * 30} ${cx} ${cy})"/>`;
  }
  return `
    <svg viewBox="0 0 200 200" style="width:100%;height:100%;">
      <g class="gear-group" style="transform-origin:100px 100px;">
        ${gearRects}
        <circle cx="100" cy="100" r="82" fill="none" stroke="#123D2A" stroke-width="4"/>
        <circle cx="100" cy="100" r="76" fill="none" stroke="#16A765" stroke-width="2" opacity="0.6"/>
      </g>
      <circle cx="100" cy="100" r="68" fill="url(#rusticOcean)"/>
      <circle cx="100" cy="100" r="68" fill="none" stroke="#55C7DD" stroke-width="1.5" opacity="0.5"/>
      <g class="globe-group" style="transform-origin:100px 100px;">
        <ellipse cx="100" cy="100" rx="40" ry="55" fill="none" stroke="#55C7DD" stroke-width="1.2" opacity="0.5"/>
        <ellipse cx="100" cy="100" rx="55" ry="40" fill="none" stroke="#55C7DD" stroke-width="1.2" opacity="0.4"/>
        <line x1="100" y1="45" x2="100" y2="155" stroke="#55C7DD" stroke-width="1" opacity="0.3"/>
        <line x1="45" y1="100" x2="155" y2="100" stroke="#55C7DD" stroke-width="1" opacity="0.3"/>
      </g>
      <circle cx="100" cy="100" r="32" fill="url(#rusticGlobe)" opacity="0.85"/>
      <path d="M 55 110 Q 75 140 100 140 Q 125 140 145 110" fill="none" stroke="#123D2A" stroke-width="4" stroke-linecap="round"/>
      <path d="M 60 115 Q 78 135 100 135 Q 122 135 140 115" fill="none" stroke="#247A45" stroke-width="3" stroke-linecap="round"/>
      <path d="M 55 90 Q 75 60 100 60 Q 125 60 145 90" fill="none" stroke="#123D2A" stroke-width="4" stroke-linecap="round"/>
      <path d="M 60 85 Q 78 65 100 65 Q 122 65 140 85" fill="none" stroke="#247A45" stroke-width="3" stroke-linecap="round"/>
      <defs>
        <radialGradient id="rusticOcean" cx="0.4" cy="0.3">
          <stop offset="0%" stop-color="#159FC1"/>
          <stop offset="60%" stop-color="#008F9C"/>
          <stop offset="100%" stop-color="#005A63"/>
        </radialGradient>
        <radialGradient id="rusticGlobe" cx="0.35" cy="0.35">
          <stop offset="0%" stop-color="#3DBC7E"/>
          <stop offset="70%" stop-color="#247A45"/>
          <stop offset="100%" stop-color="#123D2A"/>
        </radialGradient>
      </defs>
    </svg>`;
}

// ---------- Helpers ----------
function scrollToId(href) {
  closeMobileMenu();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
window.scrollToId = scrollToId;

function closeMobileMenu() {
  document.getElementById("mobileMenu")?.classList.remove("open");
}
window.closeMobileMenu = closeMobileMenu;

// ---------- Inject logos ----------
["navLogo", "mobileLogo", "footerLogo", "heroLogo", "ctaLogo"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = rusticLogoSVG();
});

// ---------- Hero words ----------
const heroWords = [
  "A",
  "Non-Stop",
  "Fight",
  "Against",
  "Poverty",
  "&",
  "Climate",
  "Change",
];
const heroWordsEl = document.getElementById("heroWords");
heroWords.forEach((w, i) => {
  const span = document.createElement("span");
  span.className = "hero-title-word" + (i === 4 ? " w4" : i === 6 ? " w6" : "");
  span.textContent = w;
  span.style.animationDelay = `${0.8 + i * 0.12}s`;
  heroWordsEl.appendChild(span);
});

// ---------- Hero particles ----------
const heroParticles = document.getElementById("heroParticles");
for (let i = 0; i < 20; i++) {
  const p = document.createElement("div");
  p.className = "hero-particle";
  const size = Math.random() * 6 + 2;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDuration = Math.random() * 8 + 6 + "s";
  p.style.animationDelay = Math.random() * 5 + "s";
  heroParticles.appendChild(p);
}

// ---------- CTA particles ----------
const ctaParticles = document.getElementById("ctaParticles");
for (let i = 0; i < 15; i++) {
  const p = document.createElement("div");
  p.className = "cta-particle";
  const size = Math.random() * 4 + 2;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDuration = 8 + i + "s";
  p.style.animationDelay = i * 0.3 + "s";
  ctaParticles.appendChild(p);
}

// ---------- Mobile menu links ----------
const mobileLinks = document.getElementById("mobileLinks");
navLinks.forEach((link) => {
  const btn = document.createElement("button");
  btn.className = "mobile-menu-link";
  btn.textContent = link.label;
  btn.onclick = () => scrollToId(link.href);
  mobileLinks.appendChild(btn);
});
const mobileCta = document.createElement("button");
mobileCta.className = "mobile-menu-cta";
mobileCta.textContent = "Get Involved";
mobileCta.onclick = () => scrollToId("#cta");
mobileLinks.appendChild(mobileCta);

// ---------- Impact cards ----------
const impactGrid = document.getElementById("impactGrid");
impactStats.forEach((stat, i) => {
  const card = document.createElement("div");
  card.className = "impact-card reveal";
  card.classList.add("reveal-delay-" + (i + 1));
  const impactImgs = [
    "images/impact_1.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_2.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_4.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_5.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_3.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_6.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_7.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_8.png?auto=compress&cs=tinysrgb&h=400&w=600",
  ];
  card.innerHTML = `
    <div class="accent-line" style="background:${stat.color};"></div>
    <div class="card-photo">
      <img src="${impactImgs[i % impactImgs.length]}" alt="${stat.label}" loading="lazy" />
      <div class="card-photo-overlay"></div>
    </div>
    <div class="impact-card-label">${stat.sublabel || stat.label}</div>
    <div class="impact-card-value" style="color:${stat.color};">
      <span class="count" data-target="${stat.value}" data-decimals="${stat.decimals}">0</span><span class="impact-card-suffix">${stat.suffix}</span>
    </div>
    ${stat.sublabel ? `<div class="impact-card-sublabel">${stat.label}</div>` : ""}
    <div class="impact-card-note">${stat.note}</div>
    <div class="impact-card-glow" style="background:${stat.color};"></div>
  `;
  impactGrid.appendChild(card);
});

// ---------- Story steps ----------
const storyStepEl = document.getElementById("storySteps");

storySteps.forEach((step, i) => {
  const div = document.createElement("div");

  div.className = "story-step";
  div.dataset.index = i;

  div.innerHTML = `
    <div class="story-step-num"
         style="border-color:${step.color};color:${step.color};">
      ${String(i + 1).padStart(2, "0")}
    </div>

    <div class="story-step-content">

      <h3 class="story-step-word"
          style="color:${step.color};">
        ${step.word}
      </h3>

      <p class="story-step-desc">
        ${step.description}
      </p>

    </div>

    <div class="story-step-image">
      <img
        src="${step.image}"
        alt="${step.word}"
        loading="lazy"
      />
    </div>

    ${
      i < storySteps.length - 1
        ? `
          <div class="story-step-arrow"
               style="color:${step.color};">

            <svg width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none">

              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

            </svg>

          </div>
        `
        : ""
    }
  `;

  storyStepEl.appendChild(div);
});

// ---------- Pillars ----------
const pillarsGrid = document.getElementById("pillarsGrid");
pillars.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "pillar-card reveal";
  card.classList.add("reveal-delay-" + Math.min(i + 1, 6));
  const pillarImgs = [
    "images/pillar_1.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/pillar_2.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/pillar_3.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/pillar_4.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/pillar_5.png?auto=compress&cs=tinysrgb&h=400&w=600",
  ];
  card.innerHTML = `
    <div class="pillar-card-bg" style="background:radial-gradient(at 30% 30%, ${p.color}80, transparent 70%);"></div>
    <div class="pillar-card-photo">
      <img src="${pillarImgs[i % pillarImgs.length]}" alt="${p.title}" loading="lazy" />
      <div class="pillar-card-photo-overlay" style="background:linear-gradient(180deg, transparent 30%, ${p.color}cc 100%);"></div>
    </div>
    <div class="pillar-card-accent" style="background:${p.accent};"></div>
    <div class="pillar-card-inner">
      <div>
        <div class="pillar-card-top">
          <span class="pillar-card-num" style="color:${p.accent};">${p.number}</span>
          <div class="pillar-card-icon" style="border-color:rgba(247,248,242,0.15);background:transparent;">
            ${svgIcon(p.icon, 24, "#F7F8F2")}
          </div>
        </div>
        <h3 class="pillar-card-title">${p.title}</h3>
        <div class="pillar-card-desc"><p>${p.description}</p></div>
      </div>
      
      </div>
    </div>
  `;
  card.addEventListener("mouseenter", () => {
    card.querySelector(".pillar-card-icon").style.borderColor = p.accent;
    card.querySelector(".pillar-card-icon").style.backgroundColor =
      p.accent + "20";
    card
      .querySelector(".pillar-card-icon svg")
      .setAttribute("stroke", p.accent);
    card.style.borderColor = p.accent;
  });
  card.addEventListener("mouseleave", () => {
    card.querySelector(".pillar-card-icon").style.borderColor =
      "rgba(247,248,242,0.15)";
    card.querySelector(".pillar-card-icon").style.backgroundColor =
      "transparent";
    card
      .querySelector(".pillar-card-icon svg")
      .setAttribute("stroke", "#F7F8F2");
    card.style.borderColor = "";
  });
  pillarsGrid.appendChild(card);
});

// ---------- Waste steps ----------
const wasteStepsEl = document.getElementById("wasteSteps");
wasteProcess.forEach((step, i) => {
  const div = document.createElement("div");
  div.className = "waste-step" + (i % 2 !== 0 ? " reverse" : "");
  div.dataset.index = i;
  div.innerHTML = `
    <div class="waste-step-node" style="border-color:${step.color};background:${step.color}20;">
      ${svgIcon(step.icon, 28, step.color)}
    </div>
    <div class="waste-step-card">
      <div class="waste-step-card-inner" style="border-color:${step.color}40;">
        <div class="waste-step-label" style="color:${step.color};">Step ${step.step}</div>
        <h3 class="waste-step-title">${step.title}</h3>
        <p class="waste-step-desc">${step.description}</p>
      </div>
    </div>
  `;
  wasteStepsEl.appendChild(div);
});

// Waste particles
const wasteParticles = document.getElementById("wasteParticles");
for (let i = 0; i < 12; i++) {
  const p = document.createElement("div");
  p.className = "waste-particle";
  p.style.left = 10 + i * 8 + "%";
  p.style.backgroundColor = i < 6 ? "#A84C24" : "#16A765";
  p.style.animationDuration = 6 + i + "s";
  p.style.animationDelay = i * 0.5 + "s";
  wasteParticles.appendChild(p);
}

// ---------- Environment cards ----------
const envTrack = document.getElementById("envTrack");
environmentInitiatives.forEach((init, i) => {
  const card = document.createElement("div");
  card.className = "env-card";
  const envImgs = [
    "/images/impact_4.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/compost_img.jpg?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_5.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_8.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/biogass_img.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/water_img.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_7.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/sustainability.png?auto=compress&cs=tinysrgb&h=400&w=600",
  ];
  card.innerHTML = `
    <div class="env-card-glow" style="background:${init.color};"></div>
    <div class="env-card-photo">
      <img src="${envImgs[i % envImgs.length]}" alt="${init.title}" loading="lazy" />
      <div class="env-card-photo-overlay" style="background:linear-gradient(180deg, transparent 20%, ${init.color}cc 100%);"></div>
    </div>
    <div>
      <div class="env-card-icon" style="border-color:${init.color}50;background:${init.color}15;">
        ${svgIcon(init.icon, 28, init.color)}
      </div>
      <h3 class="env-card-title">${init.title}</h3>
      <p class="env-card-desc">${init.description}</p>
    </div>
    <div class="env-card-accent" style="background:${init.color};"></div>
  `;
  envTrack.appendChild(card);
});

// Environment leaves
const envLeaves = document.getElementById("envLeaves");
for (let i = 0; i < 15; i++) {
  const leaf = document.createElement("div");
  leaf.className = "env-leaf";
  leaf.style.left = Math.random() * 100 + "%";
  leaf.style.top = Math.random() * 100 + "%";
  leaf.style.animationDuration = 10 + Math.random() * 8 + "s";
  leaf.style.animationDelay = Math.random() * 5 + "s";
  leaf.innerHTML = svgIcon("leaf", 16, "rgba(22,167,101,0.4)");
  envLeaves.appendChild(leaf);
}

// ---------- Forestry trees & leaves ----------
const forestryLandscape = document.getElementById("forestryLandscape");
for (let i = 0; i < 12; i++) {
  const tree = document.createElement("div");
  tree.className = "forestry-tree";
  tree.dataset.delay = i * 0.05;
  tree.innerHTML = svgIcon("tree", 60, "#16A765");
  forestryLandscape.appendChild(tree);
}
const forestryLeaves = document.getElementById("forestryLeaves");
for (let i = 0; i < 10; i++) {
  const leaf = document.createElement("div");
  leaf.className = "forestry-leaf";
  leaf.style.left = 5 + i * 10 + "%";
  leaf.style.animationDuration = 12 + i * 2 + "s";
  leaf.style.animationDelay = i * 0.8 + "s";
  forestryLeaves.appendChild(leaf);
}

// Forestry stats
const forestryStatsEl = document.getElementById("forestryStats");
forestryStats.forEach((stat, i) => {
  const div = document.createElement("div");
  div.className = "forestry-stat";
  div.classList.add("reveal-delay-" + (i + 1));
  div.innerHTML = `
    <div class="forestry-stat-value">
      <span class="count" data-target="${stat.value}" data-decimals="${stat.decimals}">0</span><span class="forestry-stat-suffix">${stat.suffix}</span>
    </div>
    <div class="forestry-stat-label">${stat.label}</div>
    <div class="forestry-stat-note">${stat.note}</div>
  `;
  forestryStatsEl.appendChild(div);
});

// ---------- Community cards ----------
const communityGrid = document.getElementById("communityGrid");
communityAreas.forEach((area, i) => {
  const card = document.createElement("div");
  card.className = "community-card reveal";
  card.classList.add("reveal-delay-" + Math.min(i + 1, 6));
  const communityImgs = [
    "images/pillar_2.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_3.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/pillar_5.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/water_img.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_6.webp?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/empowerment.png?auto=compress&cs=tinysrgb&h=400&w=600",
    "images/impact_2.webp?auto=compress&cs=tinysrgb&h=400&w=600",
  ];
  card.innerHTML = `
    <div class="community-card-glow" style="background:${area.color};"></div>
    <div class="community-card-photo">
      <img src="${communityImgs[i % communityImgs.length]}" alt="${area.title}" loading="lazy" />
      <div class="community-card-photo-overlay"></div>
    </div>
    <div>
      <div class="community-card-icon" style="background:${area.color}15;">
        ${svgIcon(area.icon, 28, area.color)}
      </div>
      <h3 class="community-card-title">${area.title}</h3>
      <p class="community-card-desc">${area.description}</p>
    </div>
    <div class="community-card-accent" style="background:${area.color};"></div>
  `;
  communityGrid.appendChild(card);
});

// ---------- Education list & floats ----------
const educationItems = [
  "Schools & Learning Centers",
  "Scholarships & Support",
  "Skills & Vocational Training",
  "Adult Literacy Programs",
];
const educationList = document.getElementById("educationList");
educationItems.forEach((item, i) => {
  const div = document.createElement("div");
  div.className = "education-item";
  div.classList.add("reveal-delay-" + (i + 1));
  div.innerHTML = `
    <div class="education-item-icon">${svgIcon("book", 20, "#3DBC7E")}</div>
    <span class="education-item-text">${item}</span>
  `;
  educationList.appendChild(div);
});
const eduFloats = document.getElementById("educationFloats");
const floatConfigs = [
  { icon: "file", left: "10%", top: "20%", delay: 0, rotate: -8 },
  { icon: "pencil", left: "85%", top: "30%", delay: 1, rotate: 12 },
  { icon: "book", left: "15%", top: "70%", delay: 2, rotate: 5 },
  { icon: "cap", left: "80%", top: "75%", delay: 1.5, rotate: -5 },
];
floatConfigs.forEach((f, i) => {
  const div = document.createElement("div");
  div.className = "education-float";
  div.style.left = f.left;
  div.style.top = f.top;
  div.style.animation = `floatUp ${6 + i}s ease-in-out ${f.delay}s infinite`;
  div.style.transform = `rotate(${f.rotate}deg)`;
  div.innerHTML = svgIcon(f.icon, 28, "rgba(22,167,101,0.5)");
  eduFloats.appendChild(div);
});

// ---------- Locations ----------
const locLines = document.getElementById("locLines");
const locPoints = document.getElementById("locPoints");
locations.forEach((loc, i) => {
  const next = locations[(i + 1) % locations.length];
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", loc.x * 4 + "%");
  line.setAttribute("y1", loc.y * 5 + "%");
  line.setAttribute("x2", next.x * 4 + "%");
  line.setAttribute("y2", next.y * 5 + "%");
  line.setAttribute("class", "loc-line");
  line.style.animationDelay = 1.5 + i * 0.3 + "s";
  locLines.appendChild(line);

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.style.cursor = "pointer";
  g.dataset.index = i;

  const point = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  point.setAttribute("cx", loc.x * 4 + "%");
  point.setAttribute("cy", loc.y * 5 + "%");
  point.setAttribute("r", "6");
  point.setAttribute("fill", loc.color);
  point.setAttribute("class", "loc-point");

  const pulse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  pulse.setAttribute("cx", loc.x * 4 + "%");
  pulse.setAttribute("cy", loc.y * 5 + "%");
  pulse.setAttribute("r", "6");
  pulse.setAttribute("fill", "none");
  pulse.setAttribute("stroke", loc.color);
  pulse.setAttribute("stroke-width", "2");
  pulse.setAttribute("class", "loc-pulse");
  pulse.style.animationDelay = i * 0.5 + "s";

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", loc.x * 4 + "%");
  text.setAttribute("y", (loc.y - 4) * 5 + "%");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("fill", "#F7F8F2");
  text.setAttribute("font-size", "12");
  text.setAttribute("font-weight", "600");
  text.textContent = loc.name;

  g.appendChild(point);
  g.appendChild(pulse);
  g.appendChild(text);
  g.addEventListener("click", () => selectLocation(i));
  locPoints.appendChild(g);
});

function selectLocation(index) {
  const loc = locations[index];
  const info = document.getElementById("locationsInfo");
  info.innerHTML = `
    <div class="locations-info-glow" style="background:${loc.color};"></div>
    <div style="position:relative;">
      <div class="locations-info-header">
        ${svgIcon("pin", 24, loc.color)}
        <h3 class="locations-info-name">${loc.name}</h3>
      </div>
      <p class="locations-info-desc">${loc.description}</p>
      <div class="locations-buttons">
        ${locations.map((l, i) => `<button class="loc-btn ${i === index ? "active" : ""}" onclick="selectLocation(${i})">${l.name}</button>`).join("")}
      </div>
    </div>
  `;
  // Update point sizes
  locPoints.querySelectorAll("g").forEach((g, i) => {
    const pt = g.querySelector(".loc-point");
    pt.setAttribute("r", i === index ? "10" : "6");
  });
}
window.selectLocation = selectLocation;
selectLocation(0);

// ---------- Partners marquee ----------
const partnersMarquee = document.getElementById("partnersMarquee");
const doubled = [...partners, ...partners];
doubled.forEach((p) => {
  const card = document.createElement("div");
  card.className = "partner-card";
  card.innerHTML = `<span>${p}</span>`;
  partnersMarquee.appendChild(card);
});

// ---------- Footer nav & programs ----------
const footerNav = document.getElementById("footerNav");
navLinks.forEach((link) => {
  const li = document.createElement("li");
  li.innerHTML = `<a onclick="scrollToId('${link.href}')">${link.label}</a>`;
  footerNav.appendChild(li);
});
const footerProgEl = document.getElementById("footerPrograms");
footerPrograms.forEach((p) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${p}</span>`;
  footerProgEl.appendChild(li);
});

// ============================================
// SCROLL HANDLERS
// ============================================
const navbar = document.getElementById("navbar");
const scrollFill = document.getElementById("scrollFill");
const scrollDot = document.getElementById("scrollDot");
const navLinkEls = document.querySelectorAll(".navbar-link");

function onScroll() {
  const scrollY = window.scrollY;
  // Navbar
  if (scrollY > 60) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  // Scroll progress
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollY / docHeight : 0;
  scrollFill.style.height = progress * 100 + "%";
  scrollDot.style.top = progress * 100 + "%";

  // Active section
  const sections = navLinks.map((l) => l.href.replace("#", ""));
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        navLinkEls.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
        break;
      }
    }
  }

  // Story section bg
  updateStoryBg();
  // Waste section bg & line
  updateWasteSection();
  // Forestry section
  updateForestry();
  // Education big number
  updateEducation();
  // Leadership parallax
  updateLeadershipParallax();
  // Environment horizontal scroll
  updateEnvironment();
}

// ---------- Story background ----------
const storySection = document.getElementById("story");
const storySteps_all = () => document.querySelectorAll(".story-step");
function updateStoryBg() {
  const rect = storySection.getBoundingClientRect();
  const total = rect.height + window.innerHeight;
  const progress = Math.max(
    0,
    Math.min(1, (window.innerHeight - rect.top) / total),
  );
  const colors = ["#0A1F15", "#123D2A", "#005A63", "#247A45", "#0A1F15"];
  const idx = Math.min(3, Math.floor(progress * 4));
  const t = progress * 4 - idx;
  const c = lerpColor(colors[idx], colors[idx + 1] || colors[idx], t);
  storySection.style.backgroundColor = c;

  // Step visibility
  storySteps_all().forEach((step, i) => {
    const stepEl = step.getBoundingClientRect();
    const center = stepEl.top + stepEl.height / 2;
    if (
      center < window.innerHeight * 0.7 &&
      center > window.innerHeight * 0.2
    ) {
      step.classList.add("visible");
    } else if (
      center > window.innerHeight * 0.9 ||
      center < window.innerHeight * 0.1
    ) {
      step.classList.remove("visible");
    }
  });
}

function lerpColor(a, b, t) {
  const ah = parseInt(a.slice(1), 16),
    bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 0xff,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff;
  const br = (bh >> 16) & 0xff,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

// ---------- Waste section ----------
const wasteSection = document.getElementById("waste");
const wasteLineFill = document.getElementById("wasteLineFill");
const wasteClosedLoop = document.getElementById("wasteClosedLoop");
function updateWasteSection() {
  const rect = wasteSection.getBoundingClientRect();
  const total = rect.height + window.innerHeight;
  const progress = Math.max(
    0,
    Math.min(1, (window.innerHeight - rect.top) / total),
  );

  // Background
  const colors = ["#1A1410", "#2A1F15", "#1A2A1F", "#123D2A", "#0A1F15"];
  const idx = Math.min(3, Math.floor(progress * 4));
  const t = progress * 4 - idx;
  wasteSection.style.backgroundColor = lerpColor(
    colors[idx],
    colors[idx + 1] || colors[idx],
    t,
  );

  // Line fill
  const lineProgress = Math.max(0, Math.min(1, (progress - 0.15) / 0.7));
  wasteLineFill.style.height = lineProgress * 100 + "%";

  // Step visibility
  const wasteStepEls = document.querySelectorAll(".waste-step");
  wasteStepEls.forEach((step, i) => {
    const stepRect = step.getBoundingClientRect();
    const center = stepRect.top + stepRect.height / 2;
    if (
      center < window.innerHeight * 0.75 &&
      center > window.innerHeight * 0.15
    ) {
      step.classList.add("visible");
    } else {
      step.classList.remove("visible");
    }
  });

  // Closed loop
  if (progress > 0.85) wasteClosedLoop.classList.add("visible");
}

// ---------- Forestry ----------
const forestrySection = document.getElementById("forestry");
const forestryTrees = () => document.querySelectorAll(".forestry-tree");
function updateForestry() {
  const rect = forestrySection.getBoundingClientRect();
  const total = rect.height + window.innerHeight;
  const progress = Math.max(
    0,
    Math.min(1, (window.innerHeight - rect.top) / total),
  );

  // Background
  const colors = ["#3A2818", "#1A3A1F", "#0A1F15"];
  const idx = Math.min(1, Math.floor(progress * 2));
  const t = progress * 2 - idx;
  forestrySection.style.backgroundColor = lerpColor(
    colors[idx],
    colors[idx + 1] || colors[idx],
    t,
  );

  // Tree growth
  const growth = Math.max(0, Math.min(1, (progress - 0.1) / 0.5));
  forestryTrees().forEach((tree, i) => {
    const delay = parseFloat(tree.dataset.delay);
    const scale = Math.max(0, Math.min(1, growth - delay));
    tree.style.transform = `scale(${scale})`;
  });
}

// ---------- Education big number + parallax ----------
const educationSection = document.getElementById("education");
const educationBigNumber = document.getElementById("educationBigNumber");
const educationCardEl = educationSection.querySelector(".education-card");
function updateEducation() {
  const rect = educationSection.getBoundingClientRect();
  if (
    rect.top < window.innerHeight * 0.5 &&
    rect.bottom > window.innerHeight * 0.3
  ) {
    educationBigNumber.classList.add("visible");
  }
  // Parallax on the education card
  if (educationCardEl) {
    const center = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    const offset = (center - windowCenter) / 30;
    educationCardEl.style.transform = `translateY(${offset}px)`;
  }
}

// ---------- Environment horizontal scroll ----------
const envSection = document.getElementById("environment");
const envTrackEl = document.getElementById("envTrack");
function updateEnvironment() {
  const rect = envSection.getBoundingClientRect();
  if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
    const total = rect.height - window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / total));
    const x = 2 - progress * 80;
    envTrackEl.style.transform = `translateX(${x}%)`;
  } else if (rect.top > 0) {
    envTrackEl.style.transform = "translateX(2%)";
  }
}

// ============================================
// INTERSECTION OBSERVER (reveal + count-up)
// ============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Trigger count-up if inside
        const counts = entry.target.querySelectorAll(".count");
        counts.forEach((c) => {
          if (!c.dataset.done) {
            c.dataset.done = "1";
            countUp(c);
          }
        });
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(
    ".reveal, .reveal-scale, .reveal-left, .reveal-right, .impact-card, .pillar-card, .community-card, .forestry-stat, .education-item",
  )
  .forEach((el) => {
    revealObserver.observe(el);
  });

// ---------- Parallax for leadership portrait ----------
const leadershipMembers = () => document.querySelectorAll(".leadership-member");
function updateLeadershipParallax() {
  leadershipMembers().forEach((member) => {
    const rect = member.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    const offset = (center - windowCenter) / 25;
    member.style.transform = `translateY(${offset}px)`;
  });
}

function countUp(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals) || 0;
  const duration = 2500;
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = target * eased;
    el.textContent = val.toFixed(decimals);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(tick);
}

// ---------- Section background animations ----------

// Impact orbs
const impactOrbs = document.getElementById("impactOrbs");
const orbColors = [
  "rgba(22,167,101,0.15)",
  "rgba(0,143,156,0.15)",
  "rgba(61,188,126,0.1)",
  "rgba(85,199,221,0.1)",
];
for (let i = 0; i < 4; i++) {
  const orb = document.createElement("div");
  orb.className = "impact-orb";
  orb.style.width = 4 + Math.random() * 4 + "rem";
  orb.style.height = orb.style.width;
  orb.style.background = orbColors[i];
  orb.style.left = 10 + i * 25 + Math.random() * 10 + "%";
  orb.style.top = 15 + Math.random() * 60 + "%";
  orb.style.animationDelay = i * 2 + "s";
  orb.style.animationDuration = 10 + i * 3 + "s";
  impactOrbs.appendChild(orb);
}

// Story glow lines
const storyGlowLine = document.getElementById("storyGlowLine");
for (let i = 0; i < 3; i++) {
  const line = document.createElement("div");
  line.className = "story-glow-line";
  line.style.animationDelay = i * 2.5 + "s";
  storyGlowLine.appendChild(line);
}

// Locations ripples
const locationsRipples = document.getElementById("locationsRipples");
for (let i = 0; i < 5; i++) {
  const ripple = document.createElement("div");
  ripple.className = "locations-ripple";
  ripple.style.width = "4rem";
  ripple.style.height = "4rem";
  ripple.style.left = 20 + i * 15 + Math.random() * 5 + "%";
  ripple.style.top = 30 + Math.random() * 30 + "%";
  ripple.style.animationDelay = i * 0.8 + "s";
  locationsRipples.appendChild(ripple);
}

// Leadership particles
const leadershipParticles = document.getElementById("leadershipParticles");
for (let i = 0; i < 12; i++) {
  const p = document.createElement("div");
  p.className = "leadership-particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDuration = 8 + Math.random() * 6 + "s";
  p.style.animationDelay = Math.random() * 5 + "s";
  leadershipParticles.appendChild(p);
}

// Gallery sparkles
const gallerySparkles = document.getElementById("gallerySparkles");
for (let i = 0; i < 20; i++) {
  const s = document.createElement("div");
  s.className = "gallery-sparkle";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animationDelay = Math.random() * 3 + "s";
  s.style.animationDuration = 2 + Math.random() * 3 + "s";
  gallerySparkles.appendChild(s);
}

// ---------- Gallery section ----------
const galleryGrid = document.getElementById("galleryGrid");
const galleryFilters = document.getElementById("galleryFilters");

galleryCategories.forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.className = "gallery-filter-btn" + (i === 0 ? " active" : "");
  btn.textContent = cat.label;
  btn.dataset.category = cat.id;
  btn.addEventListener("click", () => filterGallery(cat.id, btn));
  galleryFilters.appendChild(btn);
});

function renderGalleryPhotos(filter) {
  galleryGrid.innerHTML = "";
  const filtered =
    filter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === filter);
  filtered.forEach((photo, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal";
    item.classList.add("reveal-delay-" + Math.min((i % 4) + 1, 4));
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-content">
          <h3 class="gallery-item-title">${photo.title}</h3>
          <p class="gallery-item-desc">${photo.description}</p>
          <span class="gallery-item-category">${galleryCategories.find((c) => c.id === photo.category)?.label || ""}</span>
        </div>
      </div>
    `;
    galleryGrid.appendChild(item);
    revealObserver.observe(item);
  });
}
renderGalleryPhotos("all");

function filterGallery(category, btn) {
  galleryFilters
    .querySelectorAll(".gallery-filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderGalleryPhotos(category);
}


document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.add("open");
});


window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Environment carousel arrows ----------
//const envTrackEl = document.getElementById('envTrack');
const envTrackWrap = document.querySelector(".environment-track-wrap");
const envArrowLeft = document.getElementById("envArrowLeft");
const envArrowRight = document.getElementById("envArrowRight");

function getEnvScrollAmount() {
  const card = envTrackEl.querySelector(".env-card");
  if (!card) return 300;
  const style = window.getComputedStyle(envTrackEl);
  const gap = parseFloat(style.gap) || 24;
  return card.offsetWidth + gap;
}

function updateEnvArrows() {
  if (!envTrackWrap) return;
  const { scrollLeft, scrollWidth, clientWidth } = envTrackWrap;
  envArrowLeft.disabled = scrollLeft <= 2;
  envArrowRight.disabled = scrollLeft + clientWidth >= scrollWidth - 2;
}

if (envArrowLeft) {
  envArrowLeft.addEventListener("click", () => {
    envTrackWrap.scrollBy({ left: -getEnvScrollAmount(), behavior: "smooth" });
  });
}
if (envArrowRight) {
  envArrowRight.addEventListener("click", () => {
    envTrackWrap.scrollBy({ left: getEnvScrollAmount(), behavior: "smooth" });
  });
}
if (envTrackWrap) {
  envTrackWrap.addEventListener("scroll", updateEnvArrows, { passive: true });
}
