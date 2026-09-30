import { Bolt, Gem, Cpu, Landmark, Building2 } from "lucide-react";

export const company = {
  name: "ANCAPA Global Partners",
  legal: "Antonio INGUANE LLC d/b/a ANCAPA Global Partners",
  founded: 2019,
  tagline: "Global Capital. Local Execution.",
  descriptor: "Capital. Energy. Resources. Digital. Infrastructure.",
  location: "San Diego, California, USA",
  summary:
    "A U.S.-anchored investment consulting and strategic development platform connecting capital, technology and operating partners with high-growth opportunities across Africa, the Caribbean and Southeast Asia.",
};

export const platforms = [
  { slug: "energy", name: "ANCAPA Energy", short: "Energy", icon: Bolt, logo: "/ANCAPA_Energy_logo-removebg-preview.png", accent: "#66C17B", headline: "Powering growth markets.", description: "Origination, development and investment support across renewable generation, grids, storage, distributed energy and energy access.", focus: ["Renewable generation", "Grid modernization", "Distributed energy", "Storage", "Energy access", "Project development"] },
  { slug: "resources", name: "ANCAPA Resources", short: "Resources", icon: Gem, logo: "/ANCAPA_Resources_logo-removebg-preview.png", accent: "#B57842", headline: "Strategic resources. Global relevance.", description: "Critical minerals, mining development, processing, supply chains and resource intelligence for strategic markets.", focus: ["Critical minerals", "Mine development", "Oil and Gas", "Supply chains", "Offtake strategy", "Resource intelligence"] },
  { slug: "digital", name: "ANCAPA Digital", short: "Digital", icon: Cpu, logo: "/ANCAPA_Digital_logo-removebg-preview.png", accent: "#2D7FF9", headline: "Digital infrastructure for modern economies.", description: "AI, data infrastructure, enterprise digitization, fintech enablement and digital public infrastructure.", focus: ["AI & automation", "Data infrastructure", "Fintech", "Enterprise digitization", "Digital public infrastructure", "Cyber-resilient systems"] },
  { slug: "capital", name: "ANCAPA Capital", short: "Capital", icon: Landmark, logo: "/ANCAPA_Capital_logo-removebg-preview.png", accent: "#C6A15B", headline: "Capital aligned with opportunity.", description: "Investor origination, project finance, strategic advisory, transaction support and market-entry execution.", focus: ["Capital raising", "Project finance", "Investor origination", "Transaction support", "Market entry", "Strategic partnerships"] },
  { slug: "infrastructure", name: "ANCAPA Infrastructure", short: "Infrastructure", icon: Building2, logo: "/ANCAPA_Infrastructure_logo-removebg-preview.png", accent: "#477E8F", headline: "Infrastructure that unlocks growth.", description: "Transport, ports, logistics, industrial facilities, water systems and enabling infrastructure for high-growth markets.", focus: ["Transport", "Ports & logistics", "Industrial infrastructure", "Water systems", "Urban systems", "Digital infrastructure"] },
];

export const regions = [
  { slug: "africa", name: "Africa", text: "Energy, critical minerals, digital infrastructure, logistics and industrial growth.", thesis: "A continent-scale opportunity where strategic resources, energy demand, digital adoption and infrastructure gaps increasingly intersect with U.S. commercial and security priorities." },
  { slug: "caribbean", name: "Caribbean", text: "Energy resilience, infrastructure modernization, digital connectivity and private investment.", thesis: "A nearshore market where resilient energy, logistics, digital connectivity and climate-smart infrastructure can unlock productivity and investment." },
  { slug: "southeast-asia", name: "Southeast Asia", text: "Technology, supply chains, energy transition, industrial investment and strategic partnerships.", thesis: "A fast-growing industrial and technology region with strong demand for energy, digital systems, diversified supply chains and strategic capital." },
];

export const opportunities = [
  { slug: "renewable-energy-africa", sector: "Energy", region: "Africa", title: "Utility-scale renewable energy platform", stage: "Origination", ask: "Development capital + strategic partner", type: "Energy Infrastructure", summary: "Origination of bankable renewable generation opportunities in markets with growing demand, reforming power sectors and credible offtake pathways." },
  { slug: "critical-minerals-africa", sector: "Resources", region: "Africa", title: "Critical-minerals value chain", stage: "Screening", ask: "Equity + offtake partner", type: "Strategic Resources", summary: "Selective opportunities spanning extraction, processing, logistics and offtake in minerals relevant to U.S. and allied supply-chain diversification." },
  { slug: "resilient-logistics-caribbean", sector: "Infrastructure", region: "Caribbean", title: "Resilient logistics infrastructure", stage: "Early development", ask: "Project sponsor + financing", type: "Transport & Logistics", summary: "Infrastructure concepts designed to strengthen regional trade, resilience and private-sector logistics performance." },
  { slug: "digital-platform-sea", sector: "Digital", region: "Southeast Asia", title: "Digital infrastructure platform", stage: "Market assessment", ask: "Strategic capital + technology partner", type: "Digital Infrastructure", summary: "A scalable platform thesis across data, enterprise digitization and enabling infrastructure in high-growth markets." },
];

export const insights = [
  { slug: "us-capital-growth-markets", category: "Investment Thesis", date: "September 2026", title: "Why U.S. capital needs stronger origination in growth markets", excerpt: "Capital is available, but investable pipelines remain fragmented. ANCAPA focuses on the bridge between opportunity, local execution and investor readiness." },
  {
    slug: "critical-minerals-corridors",
    category: "Resources",
    date: "September 2026",
    title: "From minerals diplomacy to investable projects",
    excerpt: "Africa's mineral potential will draw lasting U.S. investment when sponsors can show credible projects, viable infrastructure and a clear route to market.",
    dek: "Africa's mineral potential will draw lasting U.S. investment when sponsors can show credible projects, viable infrastructure and a clear route to market.",
    readTime: "5 min read",
    seoTitle: "U.S.-Africa Minerals Diplomacy: From Strategy to Investable Projects",
    cover: "/artigo1.png",
    keywords: ["U.S.-Africa minerals diplomacy", "critical minerals investment Africa", "Africa mining investment", "minerals corridor investment", "Lobito corridor", "African mineral projects U.S. investors"],
    takeaways: [
      "Strategic interest only converts to financed projects when sponsors can answer basic questions of rights, readiness and route to market.",
      "The investable proposition extends beyond the mine to power, transport, processing and digital traceability.",
      "A credible project brief, not a broad pitch, is what moves a developer, lender or strategic buyer to act.",
    ],
    body: [
      { p: ["The September 2026 CSIS forum on U.S.-Africa minerals diplomacy put a practical issue at the center of the discussion: how to move strategic interest into financed and operating projects. African governments seek more local value from mineral development, while U.S. companies and institutions seek reliable supply and viable commercial opportunities. Progress depends on the quality of the projects that connect those goals."] },
      { h: "Where projects stall", p: [
        "A mineral asset can attract attention long before it is ready for investment. Sponsors may still need to establish their rights, complete technical work, identify a buyer, or show how the project will obtain power, water and transport. Without that information, prospective partners cannot assess the cost, risk or timetable with confidence.",
        "The first task is therefore to qualify the opportunity. Who controls the asset? What work has been completed? Which approvals remain? What product can be sold, to whom, and under what conditions? Clear answers help turn a broad investment pitch into a project that a developer, lender or strategic buyer can evaluate.",
      ] },
      { h: "The opportunity extends beyond the mine", quote: "The strongest proposition links resource development with feasible local processing, jobs and supporting infrastructure.", p: [
        "Mineral development also creates demand for electricity, roads, rail, ports, processing capacity and digital traceability. These elements affect whether a project can operate competitively and whether its benefits extend into the wider economy.",
        "For African sponsors, the strongest proposition links resource development with feasible local processing, jobs and supporting infrastructure. For U.S. partners, it identifies where equipment, technology, services, capital or offtake can contribute to a workable commercial plan. Corridor approaches, including Lobito, make these connections visible at a regional scale.",
      ] },
      { h: "Build a pipeline that investors can assess", p: [
        "A credible project brief should state the sponsor and its authority, the development stage, the proposed product, infrastructure needs, expected capital requirement, likely customers and principal unresolved risks. It should also specify the type of partner being sought and the decision that partner is being asked to make.",
        "That level of preparation makes discussions with U.S. developers, suppliers, investors and public finance institutions more productive. It also helps sponsors identify gaps that must be resolved before financing can proceed.",
      ] },
      { h: "ANCAPA's role", p: [
        "ANCAPA Global Partners works across resources, energy, infrastructure, digital systems and capital. Our focus is to identify and qualify opportunities, organize the information partners need, and connect project sponsors with suitable U.S. commercial and financing counterparts. We aim to help both sides move from an initial conversation to a defined development path.",
        "For governments and private sponsors with a priority minerals or enabling infrastructure project, the starting point is a clear account of the asset, the rights held, the work completed and the support needed. For U.S. companies, it is a precise description of the projects, geographies and roles they can pursue.",
      ] },
    ],
    sourceNote: "Source and context: CSIS, The Future of U.S.-Africa Minerals Diplomacy, 18 September 2026.",
    sourceUrl: "https://www.csis.org/events/future-us-africa-minerals-diplomacy",
  },
  {
    slug: "mozambique-sadc-investment-prospects",
    category: "Resources",
    date: "September 2026",
    title: "Mozambique and SADC's Next Investment Chapter",
    excerpt: "Two strategic perspectives on infrastructure, regional integration, Gulf capital and the emerging investment case for Mozambique, Angola and Southern Africa.",
    dek: "Two strategic perspectives on infrastructure, regional integration, Gulf capital and the emerging investment case for Mozambique, Angola and Southern Africa.",
    readTime: "9 min read",
    seoTitle: "Mozambique and SADC Investment Prospects: Infrastructure and Gulf Capital",
    keywords: ["Mozambique investment", "SADC investment", "Angola investment", "Gulf capital Africa", "Lobito corridor", "Mozambique infrastructure", "GCC SADC trade"],
    takeaways: [
      "Mozambique is shifting toward project preparation and feasibility work, addressing the long-standing gap between strategic ambition and bankable projects.",
      "A US$2.6 billion road program and US$1.5 billion in dam projects anchor a pipeline that the African Development Bank estimates needs roughly US$6.4 billion a year.",
      "Gulf capital is moving from portfolio diversification to strategic resilience, with Mozambique and Angola positioned as dual-ocean gateways into Southern Africa.",
    ],
    body: [
      { p: ["Mozambique is entering a potentially important new phase in its investment story, with greater emphasis on project preparation, infrastructure finance and private-sector participation. Recent government statements indicate a stronger focus on preparing strategic infrastructure projects in advance, completing feasibility work and presenting investors with opportunities that are closer to financing readiness. That shift matters because one of the biggest constraints to investment in Mozambique has not always been the absence of opportunities, but the gap between strategic ambition and bankable projects."] },
      { h: "Infrastructure is becoming the investment backbone", p: [
        "Government officials have emphasized that priority sectors such as agriculture and tourism cannot scale without stronger road networks and improved connectivity. More importantly, authorities are increasingly stressing the need to prepare strategic projects and their feasibility studies before going to market for financing, a notable shift toward investment discipline rather than simply project promotion.",
        "The scale of the pipeline is already significant. Mozambique is preparing a national road intervention program valued at approximately US$2.6 billion, covering more than 3,000 kilometers and intended to raise the share of paved roads from around 28% to 38% by 2031. Around US$1 billion of the financing has reportedly already been secured, while the balance remains to be mobilized.",
        "Water infrastructure is another major opportunity. The Moamba-Major and Mapai dam projects alone are estimated to require around US$1.5 billion, with financing still being sought. These directly relate to water security, drought resilience, flood management, agriculture and urban growth. The government is also moving to reserve equity for local investors through the Mozambique Stock Exchange, which could broaden the domestic capital base around strategic assets.",
      ] },
      { h: "The bigger opportunity is not infrastructure alone", quote: "Mozambique should increasingly be viewed not as a collection of isolated projects, but as a platform of interconnected investment opportunities.", p: [
        "The strongest investment case for Mozambique comes from the interaction between sectors. Roads unlock agriculture and tourism. Energy enables mining, industry, logistics and digital infrastructure. Ports and corridors create access to regional and global markets. Water infrastructure protects productive systems and urban growth, and capital markets can help deepen local participation.",
        "The African Development Bank has estimated that Mozambique needs roughly US$6.4 billion per year in infrastructure investment to meet its development ambitions, and has increasingly emphasized private-sector participation, de-risking and non-sovereign investment as part of the country's future financing model. The Bank has already invested heavily in transport, energy and corridor development, including support for the Nacala railway system, strategic roads, transmission infrastructure and renewable energy.",
      ] },
      { h: "Why this matters for U.S. investors", p: [
        "For U.S. investors and companies, Mozambique sits at the intersection of several strategic themes: energy and power infrastructure, critical minerals and natural resources, transport and trade corridors, digital infrastructure, and agriculture and tourism. The opportunity is therefore not limited to traditional infrastructure investors. It extends to U.S. engineering firms, technology companies, project developers, equipment suppliers, financiers, private equity investors, commodity firms and specialized advisory companies.",
      ] },
      { h: "The real challenge is project preparation", quote: "Investors do not finance potential. They finance structured opportunities.", p: [
        "Mozambique's investment potential is large, but the market will only attract sustained capital if projects are presented in a way that investors can evaluate efficiently. That means moving from “we need financing” to “here is the project, the sponsor, the commercial model, the feasibility work, the approvals, the infrastructure requirements, the return logic and the proposed financing pathway.”",
        "That is why the government's current emphasis on feasibility studies and project preparation is significant. It begins to address one of the most persistent gaps in African infrastructure finance: the shortage of projects that are genuinely investment-ready.",
      ] },
      { h: "Where ANCAPA fits", p: [
        "This emerging environment is directly aligned with the role ANCAPA Global Partners is building. ANCAPA operates at the intersection of capital, energy, resources, digital transformation and infrastructure, helping connect opportunities in high-growth markets with U.S. investors, companies, technology providers and strategic partners.",
        "In Mozambique, this can mean helping identify and qualify priority investment opportunities, structure projects for U.S. participation, map financing pathways through public and private institutions, connect project sponsors with U.S. developers, EPCs, technology companies and financiers, strengthen market intelligence and due diligence, and support transactions from early-stage opportunity through partner engagement and execution.",
      ] },
      { h: "SADC's next capital opportunity", p: [
        "Gulf capital is becoming more strategic, and Southern Africa sits at the intersection of energy security, critical minerals, logistics, food systems and long-term infrastructure demand. Recent analysis from the Gulf Research Center, Entrepreneur and Terex Ventures points in the same direction: Gulf investors are increasingly looking beyond conventional portfolio diversification toward assets that strengthen energy security, supply chains, food systems, logistics, critical minerals, digital infrastructure and long-term economic resilience.",
        "GCC-SADC trade reached about US$38.6 billion in 2024, up from US$32 billion in 2022, while Gulf engagement has increasingly shifted toward infrastructure, energy, agriculture, mining and technology. Within that landscape, Mozambique and Angola stand out as two of the most strategically positioned markets.",
      ] },
      { h: "Mozambique: from resource potential to strategic platform", p: [
        "Mozambique combines natural gas and energy resources, strategic Indian Ocean access, ports and regional transport corridors, mineral potential, large agricultural capacity, renewable energy opportunities and a growing need for infrastructure and digital investment. Gulf investors are already present: the Gulf Research Center points to more than US$3 billion in UAE investment in Mozambique, including DP World's involvement at the Port of Maputo and renewable-energy projects, alongside significant Qatari investment commitments in Mozambique's gas sector.",
        "Mozambique can offer something larger than a single-sector investment case. It can serve as a platform connecting energy production, mining, agriculture, ports and regional trade. The Maputo, Beira and Nacala corridors are particularly relevant because they connect landlocked Southern African economies to the Indian Ocean.",
      ] },
      { h: "Angola: a stronger Gulf-SADC investment model is already emerging", quote: "Angola and the Lobito Corridor provide access to the Atlantic. Mozambique provides access to the Indian Ocean. Between them sits a resource-rich regional market.", p: [
        "According to the Gulf Research Center, the UAE has developed an investment package in Angola worth approximately US$6.5 billion across infrastructure, agriculture, mining and technology. Saudi Arabia has pledged more than US$300 million toward infrastructure associated with the Lobito Corridor, while Oman has also invested directly in Angola's diamond sector.",
        "The Lobito Corridor links Angola's Atlantic coast with mineral-producing regions further inland, including Zambia and the Democratic Republic of Congo, creating the possibility of building an investment ecosystem around mineral production, rail and port infrastructure, processing and refining, power generation, industrial zones and agricultural exports. Mozambique and Angola should not be viewed in isolation: their strategic value increases inside a broader SADC investment system that gives the region a potentially powerful proposition as a dual-ocean investment corridor.",
      ] },
      { h: "Capital will become more selective", quote: "SADC governments and project sponsors need to move from “we have resources and need investment” to “we have a defined project, credible sponsor, infrastructure plan, commercial model, permits, market access, risk analysis and a clear capital requirement.”", p: [
        "The opportunity is real, but the threshold for investability is rising. Geopolitical relevance alone does not make a project investable. Investors will continue to examine commercial economics, governance, resilience, route concentration, energy exposure, supply-chain risk and transaction readiness.",
        "The Gulf Research Center also identifies a key weakness in the current relationship: too much of SADC's trade with GCC economies remains concentrated in raw materials such as gold, diamonds and copper, which limits industrialization. The next investment chapter should focus on mineral processing and refining, agro-processing, industrial zones, local manufacturing, energy infrastructure, skills development and regional supply chains.",
      ] },
      { h: "Where ANCAPA sees the opportunity", p: [
        "The Gulf does not have to be viewed as an alternative to U.S. or European capital. Increasingly, it can become a co-investment partner: many of the sectors targeted by Gulf investors, including energy, minerals, infrastructure, digital systems and logistics, are also strategic priorities for U.S. and international investors, creating opportunities for hybrid structures involving Gulf capital, U.S. technology or financing, and African projects and local partners.",
        "ANCAPA's role is to help connect high-potential opportunities in Africa and other growth markets with the capital, companies and strategic partners capable of moving them toward execution. This requires credible project origination, investment-grade data, commercial structuring, partner identification, market intelligence, capital matching and local execution. The countries that succeed will be those that can turn natural advantages into structured, bankable investment opportunities, and the companies that succeed will be those capable of connecting capital to projects, projects to markets, and global investors to credible local partners.",
      ] },
    ],
    sourceNote: "Sources: 360 Mozambique, African Development Bank, Gulf Research Center, Entrepreneur and Terex Ventures, September 2026.",
  },
  { slug: "digital-infrastructure-frontier", category: "Digital", date: "August 2026", title: "Digital infrastructure as a growth-market multiplier", excerpt: "Connectivity, data systems and AI-enabled operations are increasingly foundational infrastructure rather than standalone technology projects." },
];

export const operatingModel = [
  { step: "01", title: "Originate", text: "Identify projects, sponsors, assets and strategic market opportunities through local networks and sector intelligence." },
  { step: "02", title: "Validate", text: "Screen commercial fundamentals, counterparties, policy context, delivery constraints and strategic fit." },
  { step: "03", title: "Structure", text: "Shape investment propositions, partnership models, transaction pathways and project-development plans." },
  { step: "04", title: "Mobilize", text: "Connect credible opportunities with U.S. and global capital, technology providers and operating partners." },
  { step: "05", title: "Execute", text: "Support market entry, stakeholder alignment, diligence coordination and local execution through implementation." },
];
