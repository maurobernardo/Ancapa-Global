import type { MetadataRoute } from "next";
import { platforms, opportunities } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/markets`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/opportunities`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  return [
    ...staticRoutes,
    ...platforms.map((p) => ({ url: `${base}/platforms/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...opportunities.map((o) => ({ url: `${base}/opportunities/${o.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
