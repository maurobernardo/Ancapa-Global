import type { Metadata } from "next";
import { company } from "@/lib/data";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// "October 21, 2026" -> "2026-10-21"; "October 2026" -> "2026-10" (valid ISO 8601, no invented day)
export function isoDate(label: string): string {
  const full = label.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (full) {
    const m = MONTHS.indexOf(full[1].toLowerCase());
    if (m >= 0) return `${full[3]}-${String(m + 1).padStart(2, "0")}-${full[2].padStart(2, "0")}`;
  }
  const part = label.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (part) {
    const m = MONTHS.indexOf(part[1].toLowerCase());
    if (m >= 0) return `${part[2]}-${String(m + 1).padStart(2, "0")}`;
  }
  return new Date().toISOString().slice(0, 10);
}

// Date object for sitemap/feeds (month-only dates fall on the 1st)
export function dateOf(label: string): Date {
  const d = isoDate(label);
  return new Date(d.length === 7 ? `${d}-01T00:00:00Z` : `${d}T00:00:00Z`);
}

export const abs = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

// Stable entity id so articles, org and site all point at the same publisher
export const orgId = `${siteUrl}/#organization`;

export const disambiguation =
  `${company.name} (${company.legal}) is a U.S.-based investment and strategic development platform headquartered in ${company.location}. It is not affiliated with AnaCap Financial Partners (London), Anacapa Partners, or ANCAP (Administración Nacional de Combustibles, Alcohol y Portland, Uruguay).`;

// Social previews and feeds use a small JPEG copy of each cover (public/og), because not every network renders WebP.
export const ogImage = (cover: string) => `/og/${cover.split("/").pop()!.replace(/\.\w+$/, ".jpg")}`;

// Per-page metadata with its own Open Graph/Twitter data, so a shared link shows that page's title, description and URL (not the home page's).
export function pageMeta({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const full = `${title} | ${company.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { type: "website", url: abs(path), siteName: company.name, locale: "en_US", title: full, description, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: full, description, images: ["/opengraph-image"] },
  };
}
