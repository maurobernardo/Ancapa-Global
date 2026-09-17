import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";
const description = "A U.S.-anchored investment and strategic development platform connecting capital, technology and operating partners with high-growth opportunities across Africa, the Caribbean and Southeast Asia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ANCAPA Global Partners", template: "%s | ANCAPA Global Partners" },
  description,
  keywords: ["ANCAPA Global Partners", "U.S. investment platform", "Africa investment", "Caribbean investment", "Southeast Asia investment", "capital raising", "project finance", "energy infrastructure", "critical minerals", "market entry advisory"],
  authors: [{ name: "ANCAPA Global Partners" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: "/" },
  icons: { icon: "/icon", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legal,
  url: siteUrl,
  logo: `${siteUrl}/ancapa-logo.png`,
  foundingDate: String(company.founded),
  description,
  slogan: company.tagline,
  sameAs: [],
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={inter.variable}><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  <Header/><main>{children}</main><Footer/>
 </body></html>
}
