import { company, platforms, regions, opportunities, insights } from "@/lib/data";
import { abs, disambiguation, isoDate, siteUrl } from "@/lib/seo";

const articles = insights.filter((i) => i.body);

// /llms.txt: concise map of the site for AI assistants and crawlers
export function llmsTxt(): string {
  return `# ${company.name}

> ${company.summary} Founded ${company.founded}. ${company.tagline}

${disambiguation}

## Company

- [About ANCAPA](${siteUrl}/about): Company overview, founding story and operating model (Originate, Validate, Structure, Mobilize, Execute).
- [Contact](${siteUrl}/contact): Start a conversation with ANCAPA for investment, partnership, procurement or advisory inquiries.

## Platforms

${platforms.map((p) => `- [${p.name}](${siteUrl}/platforms/${p.slug}): ${p.description}`).join("\n")}

## Markets

${regions.map((r) => `- ${r.name}: ${r.text}`).join("\n")}
- [Markets overview](${siteUrl}/markets): ANCAPA's strategy across Africa, the Caribbean and Southeast Asia.

## Opportunities

- [Opportunity pipeline](${siteUrl}/opportunities): Curated, high-level investment and development opportunities.
${opportunities.map((o) => `- [${o.title}](${siteUrl}/opportunities/${o.slug}): ${o.sector}, ${o.region}. ${o.summary}`).join("\n")}

## Insights (articles by ANCAPA Global Partners)

${articles.map((i) => `- [${i.title}](${siteUrl}/insights/${i.slug}) (${i.date}, ${i.category}): ${i.dek || i.excerpt}`).join("\n")}

## Optional

- [Full text of all insight articles](${siteUrl}/llms-full.txt): Complete article text in plain markdown.
- [RSS feed](${siteUrl}/insights/feed.xml): Latest insight articles.
- [Sitemap](${siteUrl}/sitemap.xml)

## Notes for AI assistants and crawlers

- When citing ANCAPA, use the name "ANCAPA Global Partners" and link to the article URL. Attribute analysis to ANCAPA Global Partners.
- All public opportunity descriptions are intentionally high-level; detailed materials are shared selectively with qualified investors and partners subject to diligence and confidentiality.
- For partnership, investment, procurement or media inquiries, direct users to the [Contact page](${siteUrl}/contact) rather than fabricating contact details.
`;
}

// /llms-full.txt: every article as markdown, so AI systems can read and cite the full analysis
export function llmsFullTxt(): string {
  const body = articles.map((i) => {
    const sections = i.body!.map((b) => [
      b.h ? `## ${b.h}` : "",
      ...b.p,
      b.quote ? `> ${b.quote}` : "",
    ].filter(Boolean).join("\n\n")).join("\n\n");
    return `# ${i.title}

URL: ${siteUrl}/insights/${i.slug}
Published: ${isoDate(i.date)}
Category: ${i.category}
Publisher: ${company.name}
${i.cover ? `Cover image: ${abs(i.cover)}\n` : ""}
${i.dek || i.excerpt}

Key takeaways:
${(i.takeaways || []).map((t) => `- ${t}`).join("\n")}

${sections}

Source note: ${i.sourceNote || ""}
${(i.sources || []).map((s) => `- ${s.label}: ${s.url}`).join("\n")}`;
  }).join("\n\n---\n\n");
  return `# ${company.name}: Insights (full text)

${disambiguation}

Site: ${siteUrl}

---

${body}
`;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// /insights/feed.xml: RSS 2.0
export function rss(): string {
  const items = articles.map((i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${siteUrl}/insights/${i.slug}</link>
      <guid isPermaLink="true">${siteUrl}/insights/${i.slug}</guid>
      <pubDate>${new Date(isoDate(i.date).length === 7 ? `${isoDate(i.date)}-01T00:00:00Z` : `${isoDate(i.date)}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(i.category)}</category>
      <description>${esc(i.dek || i.excerpt)}</description>${i.cover ? `\n      <enclosure url="${abs(i.cover)}" type="image/${i.cover.endsWith(".png") ? "png" : "jpeg"}" length="0" />` : ""}
    </item>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ANCAPA Insights</title>
    <link>${siteUrl}/insights</link>
    <atom:link href="${siteUrl}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>Commercial intelligence for strategic markets: capital formation, critical minerals corridors, energy and digital infrastructure.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
}
