import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Search and AI crawlers are welcome everywhere except the contact API.
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "Amazonbot", "CCBot", "cohere-ai", "Meta-ExternalAgent", "Bytespider", "DuckAssistBot", "YouBot", "MistralAI-User"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: aiBots, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
