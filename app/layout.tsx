import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "ANCAPA Global Partners", template: "%s | ANCAPA Global Partners" },
  description: "Connecting U.S. capital with strategic opportunities across Africa, the Caribbean and Southeast Asia.",
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={inter.variable}><body><Header/><main>{children}</main><Footer/></body></html>
}
