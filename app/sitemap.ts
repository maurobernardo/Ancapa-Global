import type { MetadataRoute } from "next";
import { platforms, opportunities } from "@/lib/data";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";
export default function sitemap(): MetadataRoute.Sitemap {
 const staticRoutes = ["", "/about", "/markets", "/opportunities", "/insights", "/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date()}));
 return [...staticRoutes, ...platforms.map(p=>({url:`${base}/platforms/${p.slug}`,lastModified:new Date()})), ...opportunities.map(o=>({url:`${base}/opportunities/${o.slug}`,lastModified:new Date()}))];
}
