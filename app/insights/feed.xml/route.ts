import { rss } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(rss(), { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
