"use client";

// Lets visitors reopen the cookie choice. Shown only when analytics is configured.
export function CookieSettingsLink() {
  if (!/^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID || "")) return null;
  return <button type="button" onClick={() => window.dispatchEvent(new Event("ancapa-consent-reset"))} className="hover:text-white underline-offset-2 hover:underline">Cookie settings</button>;
}
