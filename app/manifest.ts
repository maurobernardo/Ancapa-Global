import type { MetadataRoute } from "next";
import { company } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "ANCAPA",
    description: "A U.S.-anchored investment consulting and strategic development platform connecting capital, technology and operating partners across Africa, the Caribbean and Southeast Asia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#08233a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
