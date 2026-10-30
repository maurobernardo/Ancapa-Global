import { insights, platforms, opportunities } from "@/lib/data";

type Rel = { articles: string[]; opportunities: string[]; platforms: string[] };

// Hand-picked cross-links so every article, platform and opportunity is reachable from several others.
export const articleRelated: Record<string, Rel> = {
  "angola-mozambique-gas-infrastructure-investment-opportunities": { articles: ["lobito-corridor-investment-frontier", "africa-second-mining-boom", "angola-ai-digital-infrastructure-hub"], opportunities: ["renewable-energy-africa", "resilient-logistics-caribbean"], platforms: ["energy", "infrastructure", "supply"] },
  "angola-ai-digital-infrastructure-hub": { articles: ["angola-mozambique-gas-infrastructure-investment-opportunities", "lobito-corridor-investment-frontier", "africa-second-mining-boom"], opportunities: ["digital-platform-sea", "renewable-energy-africa"], platforms: ["digital", "energy", "infrastructure"] },
  "africa-second-mining-boom": { articles: ["mozambique-angola-critical-minerals", "lobito-corridor-investment-frontier", "angola-mozambique-gas-infrastructure-investment-opportunities"], opportunities: ["critical-minerals-africa", "resilient-logistics-caribbean"], platforms: ["resources", "supply", "infrastructure"] },
  "mozambique-angola-critical-minerals": { articles: ["africa-second-mining-boom", "critical-minerals-corridors", "lobito-corridor-investment-frontier"], opportunities: ["critical-minerals-africa"], platforms: ["resources", "capital"] },
  "lobito-corridor-investment-frontier": { articles: ["africa-second-mining-boom", "mozambique-angola-critical-minerals", "angola-mozambique-gas-infrastructure-investment-opportunities"], opportunities: ["resilient-logistics-caribbean", "critical-minerals-africa"], platforms: ["infrastructure", "resources"] },
  "critical-minerals-corridors": { articles: ["mozambique-angola-critical-minerals", "lobito-corridor-investment-frontier", "africa-second-mining-boom"], opportunities: ["critical-minerals-africa"], platforms: ["resources", "infrastructure"] },
  "mozambique-next-investment-chapter": { articles: ["sadc-gulf-capital-opportunity", "mozambique-angola-critical-minerals", "angola-mozambique-gas-infrastructure-investment-opportunities"], opportunities: ["critical-minerals-africa", "renewable-energy-africa"], platforms: ["capital", "infrastructure"] },
  "sadc-gulf-capital-opportunity": { articles: ["mozambique-next-investment-chapter", "mozambique-angola-critical-minerals", "lobito-corridor-investment-frontier"], opportunities: ["resilient-logistics-caribbean"], platforms: ["capital", "infrastructure"] },
};

// Articles worth surfacing on each platform page
export const platformInsights: Record<string, string[]> = {
  energy: ["angola-mozambique-gas-infrastructure-investment-opportunities", "angola-ai-digital-infrastructure-hub", "africa-second-mining-boom"],
  resources: ["mozambique-angola-critical-minerals", "africa-second-mining-boom", "critical-minerals-corridors", "lobito-corridor-investment-frontier"],
  digital: ["angola-ai-digital-infrastructure-hub", "africa-second-mining-boom"],
  capital: ["sadc-gulf-capital-opportunity", "mozambique-next-investment-chapter", "mozambique-angola-critical-minerals"],
  infrastructure: ["lobito-corridor-investment-frontier", "angola-mozambique-gas-infrastructure-investment-opportunities", "sadc-gulf-capital-opportunity"],
  supply: ["africa-second-mining-boom", "angola-mozambique-gas-infrastructure-investment-opportunities"],
};

export const articlesFor = (slugs: string[]) =>
  slugs.map((s) => insights.find((i) => i.slug === s && i.body)).filter((i): i is NonNullable<typeof i> => !!i);
export const platformsFor = (slugs: string[]) => slugs.map((s) => platforms.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
export const opportunitiesFor = (slugs: string[]) => slugs.map((s) => opportunities.find((o) => o.slug === s)).filter((o): o is NonNullable<typeof o> => !!o);

// Opportunities that cite an article (reverse link)
export const opportunitySlugsForPlatform = (platformSlug: string) => {
  const sector: Record<string, string> = { energy: "Energy", resources: "Resources", digital: "Digital", infrastructure: "Infrastructure" };
  return opportunities.filter((o) => o.sector === sector[platformSlug]).map((o) => o.slug);
};
