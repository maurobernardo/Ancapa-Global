import Script from "next/script";

// Umami: cookieless, privacy-focused analytics, so no consent banner is needed.
// Renders nothing until NEXT_PUBLIC_UMAMI_WEBSITE_ID is set (a UUID from your Umami dashboard).
// NEXT_PUBLIC_UMAMI_SRC is optional: use it only if you self-host Umami (default is Umami Cloud).
const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "";
const src = process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";
export const analyticsEnabled = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) && /^https:\/\//.test(src);

export function Analytics() {
  if (!analyticsEnabled) return null;
  return <Script defer src={src} data-website-id={id} data-domains="ancapaglobal.com" data-do-not-track="true" strategy="afterInteractive" />;
}
