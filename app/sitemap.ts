import type { MetadataRoute } from "next";
import { platforms, opportunities, insights } from "@/lib/data";
import { abs, dateOf, siteUrl as base } from "@/lib/seo";

const articles = insights.filter((i) => i.body);
// Newest article date drives "last modified" for the hubs that list them
const latest = articles.map((i) => dateOf(i.date)).sort((a, b) => b.getTime() - a.getTime())[0] ?? new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: latest, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/markets`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/opportunities`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/insights`, lastModified: latest, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes,
    ...platforms.map((p) => ({ url: `${base}/platforms/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...opportunities.map((o) => ({ url: `${base}/opportunities/${o.slug}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...articles.map((i) => ({
      url: `${base}/insights/${i.slug}`,
      lastModified: dateOf(i.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(i.cover ? { images: [abs(i.cover)] } : {}),
    })),
  ];
}
