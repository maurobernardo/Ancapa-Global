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
      { src: "/icone.jpeg", sizes: "1294x1294", type: "image/jpeg" },
    ],
  };
}
