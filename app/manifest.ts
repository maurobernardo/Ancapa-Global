import type { MetadataRoute } from "next";
import { company } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "ANCAPA",
    description: "A U.S.-anchored investment and strategic development platform connecting capital, technology and operating partners across Africa, the Caribbean and Southeast Asia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#08233a",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
