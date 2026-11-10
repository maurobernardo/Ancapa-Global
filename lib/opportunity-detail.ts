// Extra page copy per opportunity. Figures come from ANCAPA's own published insight articles.
export const opportunityDetail: Record<string, {
  platform: string;
  why: string[];
  lookFor: string[];
  engage: string;
  insights: string[];
}> = {
  "renewable-energy-africa": {
    platform: "energy",
    why: [
      "Power comes first. Almost every other investment we look at, from mines to data centres, needs reliable electricity before it needs anything else. Angola shows how fast a grid can change. Figures presented by the state producer PRODEL, which our analysis draws on, put installed capacity at about 2,356 MW in 2015 and about 6,284 MW in 2024, with hydropower at around 60% of the total.",
      "More megawatts do not pay for themselves. A new plant needs customers who will buy its output for years, and lines to carry it to them. So we start from demand: a mine, a processing plant, a factory, a data centre. USTDA has already put a US$3 million grant into feasibility work on electrification for mining and industrial operations in the DRC and Zambia. That is the kind of project we want to see more of.",
    ],
    lookFor: [
      "An offtaker that pays: a utility with a payment record, or an industrial customer under a long-term supply agreement.",
      "Grid access: a clear route for the power to reach the buyer, with transmission capacity confirmed.",
      "A tariff that works for both sides: realistic pricing that supports financing without pushing the cost onto households.",
      "A named sponsor with delivery experience in the country or in a comparable market.",
    ],
    engage: "We find the project, test it and bring the parties together. In practice we check the offtake and grid assumptions first. Then we build a financing plan that mixes development finance, commercial debt and equity. Where U.S. equipment makers or technology providers fit, we introduce them through ANCAPA Supply.",
    insights: ["angola-ai-digital-infrastructure-hub", "africa-second-mining-boom", "angola-mozambique-gas-infrastructure-investment-opportunities"],
  },
  "critical-minerals-africa": {
    platform: "resources",
    why: [
      "Minerals do not become supply on their own. Our analysis of Mozambique and Angola argues that the global minerals problem is now a capital problem. A deposit needs roads or rail, power, a regulator that behaves predictably, a buyer, and an investor who believes in all of them. Mozambique's Balama graphite mine and Angola's Longonjo rare-earth project show two ways to connect African production to U.S. industry, and in both development finance has played a part.",
      "The bigger opening may sit around the mine. Every mine needs electricity, water, machinery, maintenance, transport and data systems. Unlike a mining licence, those contracts are open to African suppliers, U.S. industrial firms and engineering companies of modest size. We look at both sides: the project itself and the work it creates.",
    ],
    lookFor: [
      "A defined project with a credible sponsor, not a general statement that resources exist.",
      "A named buyer or a clear offtake route.",
      "A plan for power, water and logistics, including who pays for what.",
      "A licensing and local-content position that investors can read and price.",
      "A stated capital requirement.",
    ],
    engage: "We screen against those five points, then work on the gaps. Usually the gap is a missing buyer, an unfunded power line, or a sponsor who needs a U.S. technical partner. Once a project can stand up to diligence, we introduce equity and offtake partners.",
    insights: ["mozambique-angola-critical-minerals", "africa-second-mining-boom", "critical-minerals-corridors", "lobito-corridor-investment-frontier"],
  },
  "resilient-logistics-caribbean": {
    platform: "infrastructure",
    why: [
      "A railway or a port is more than a way out for exports. Our work on the Lobito Corridor treats it as a base for industry: logistics terminals, warehousing, equipment maintenance, industrial parks, energy supply and cross-border services can all grow along it. The money is arriving. In September 2026 the World Bank's MIGA issued US$62.6 million in guarantees backing equity investment in the Lobito railway concession.",
      "Geography adds a second argument. Angola and the Lobito Corridor open the Atlantic, and Mozambique opens the Indian Ocean. A shipper in the interior of Southern Africa can look at two coasts. The catch is sequencing. Roads, rail and terminals pay off only when freight is already waiting for them.",
    ],
    lookFor: [
      "Anchor freight: mines, farms or factories that will use the route from day one.",
      "A phased build, with each phase justified by demand that exists today.",
      "A sponsor with delivery experience and a clear concession or permit position.",
      "Financing that uses guarantees or development finance where the commercial risk is too heavy to carry alone.",
    ],
    engage: "We map who will actually move freight, then check whether the infrastructure plan matches it. Where it does, we help the sponsor prepare the project and line up financing, and we bring in U.S. suppliers of rail, port and handling equipment.",
    insights: ["tanzania-railway-lng-investment-frontier", "lobito-corridor-investment-frontier", "sadc-gulf-capital-opportunity", "africa-second-mining-boom"],
  },
  "digital-platform-sea": {
    platform: "digital",
    why: [
      "AI has become an energy question. The IEA projects that data-centre electricity use could rise from about 485 terawatt-hours in 2025 to about 950 by 2030, and communities in the United States and Europe are already pushing back on power prices, water use and grid congestion. Places with reliable power and fast international links will get a second look.",
      "Angola is one we are studying closely. Its installed generation has grown sharply, and Angola Cables connects it to Brazil, Europe and the United States. Angola Cables and Ciena say the route to the U.S. runs at roughly 130 milliseconds round trip. That suits batch processing, analytics and some AI workloads, but not real-time services. Our condition for any project there is simple: it has to add to electricity access, not take power away from homes and small businesses.",
    ],
    lookFor: [
      "Verified power: capacity you can actually draw, not nameplate capacity.",
      "Fibre routes with redundancy and a latency that fits the workload.",
      "Named customers, even for a pilot.",
      "An experienced data-centre operator or technology partner.",
      "A cost-sharing arrangement that keeps ordinary consumers from paying for infrastructure built for large users.",
    ],
    engage: "We would start small: a feasibility study covering power, fibre, demand and deal structure, leading to one pilot that proves there is a buyer. Then we bring in U.S. technology and equipment suppliers and the financiers who back digital infrastructure.",
    insights: ["angola-ai-digital-infrastructure-hub", "africa-second-mining-boom"],
  },
};
