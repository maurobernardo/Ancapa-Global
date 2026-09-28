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
  { slug: "digital-infrastructure-frontier", category: "Digital", date: "August 2026", title: "Digital infrastructure as a growth-market multiplier", excerpt: "Connectivity, data systems and AI-enabled operations are increasingly foundational infrastructure rather than standalone technology projects." },
];

export const operatingModel = [
  { step: "01", title: "Originate", text: "Identify projects, sponsors, assets and strategic market opportunities through local networks and sector intelligence." },
  { step: "02", title: "Validate", text: "Screen commercial fundamentals, counterparties, policy context, delivery constraints and strategic fit." },
  { step: "03", title: "Structure", text: "Shape investment propositions, partnership models, transaction pathways and project-development plans." },
  { step: "04", title: "Mobilize", text: "Connect credible opportunities with U.S. and global capital, technology providers and operating partners." },
  { step: "05", title: "Execute", text: "Support market entry, stakeholder alignment, diligence coordination and local execution through implementation." },
];
