import Script from "next/script";

// Umami: cookieless, privacy-focused analytics, so no consent banner is needed.
// NEXT_PUBLIC_UMAMI_WEBSITE_ID overrides the default ID.
// NEXT_PUBLIC_UMAMI_SRC is optional: use it only if you self-host Umami (default is Umami Cloud).
// A Umami website ID is public (it is visible in the page source), so it is safe to keep as the default here.
const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "57009d11-b0fd-46d9-b143-02b874d0e4de";
const src = process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";
export const analyticsEnabled = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) && /^https:\/\//.test(src);

export function Analytics() {
  if (!analyticsEnabled) return null;
  return <Script defer src={src} data-website-id={id} data-domains="ancapaglobal.com" data-do-not-track="true" strategy="afterInteractive" />;
}
