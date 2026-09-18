import { Bolt, Gem, Cpu, Landmark, Building2 } from "lucide-react";

export const company = {
  name: "ANCAPA Global Partners",
  legal: "Antonio INGUANE LLC d/b/a ANCAPA Global Partners",
  founded: 2019,
  tagline: "Global Capital. Local Execution.",
  descriptor: "Capital. Energy. Resources. Digital. Infrastructure.",
  location: "San Diego, California, USA",
  summary:
    "A U.S.-anchored investment and strategic development platform connecting capital, technology and operating partners with high-growth opportunities across Africa, the Caribbean and Southeast Asia.",
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
  { slug: "critical-minerals-corridors", category: "Resources", date: "September 2026", title: "Critical minerals are becoming corridor investments", excerpt: "The investable proposition increasingly extends beyond the mine to power, processing, logistics, offtake and policy alignment." },
  { slug: "digital-infrastructure-frontier", category: "Digital", date: "August 2026", title: "Digital infrastructure as a growth-market multiplier", excerpt: "Connectivity, data systems and AI-enabled operations are increasingly foundational infrastructure rather than standalone technology projects." },
];

export const operatingModel = [
  { step: "01", title: "Originate", text: "Identify projects, sponsors, assets and strategic market opportunities through local networks and sector intelligence." },
  { step: "02", title: "Validate", text: "Screen commercial fundamentals, counterparties, policy context, delivery constraints and strategic fit." },
  { step: "03", title: "Structure", text: "Shape investment propositions, partnership models, transaction pathways and project-development plans." },
  { step: "04", title: "Mobilize", text: "Connect credible opportunities with U.S. and global capital, technology providers and operating partners." },
  { step: "05", title: "Execute", text: "Support market entry, stakeholder alignment, diligence coordination and local execution through implementation." },
];
