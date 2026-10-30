import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company, platforms } from "@/lib/data";
import { disambiguation, orgId } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";
const description = "A U.S.-anchored investment consulting and strategic development platform connecting capital, technology and operating partners with high-growth opportunities across Africa, the Caribbean and Southeast Asia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ANCAPA Global Partners", template: "%s | ANCAPA Global Partners" },
  description,
  keywords: ["ANCAPA Global Partners", "U.S. investment platform", "Africa investment", "Caribbean investment", "Southeast Asia investment", "capital raising", "project finance", "energy infrastructure", "critical minerals", "market entry advisory"],
  authors: [{ name: "ANCAPA Global Partners" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/icone.jpeg", shortcut: "/icone.jpeg", apple: "/icone.jpeg" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: company.name,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description,
    images: ["/opengraph-image"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: company.name,
    alternateName: ["ANCAPA", "ANCAPA Global"],
    legalName: company.legal,
    url: siteUrl,
    logo: `${siteUrl}/ancapa-logo.png`,
    image: `${siteUrl}/opengraph-image`,
    foundingDate: String(company.founded),
    description,
    disambiguatingDescription: disambiguation,
    slogan: company.tagline,
    address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA", addressCountry: "US" },
    areaServed: ["Africa", "Caribbean", "Southeast Asia"],
    knowsAbout: ["Critical minerals", "Energy infrastructure", "Project finance", "Digital infrastructure", "Procurement and equipment sourcing", "U.S.-Africa investment", "Natural gas infrastructure", "Market entry advisory"],
    makesOffer: platforms.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p.name, description: p.description, url: `${siteUrl}/platforms/${p.slug}` } })),
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    inLanguage: "en",
    publisher: { "@id": orgId },
  },
];

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={inter.variable}><body>
  <link rel="alternate" type="application/rss+xml" title="ANCAPA Insights" href="/insights/feed.xml" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  <Header/><main>{children}</main><Footer/>
 </body></html>
}
