"use client";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

// Google Analytics loads only if NEXT_PUBLIC_GA_ID is set AND the visitor accepts. Without an ID this renders nothing.
const GA = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID || "") ? process.env.NEXT_PUBLIC_GA_ID : "";
const KEY = "ancapa-consent";
type Choice = "granted" | "denied" | null;

function read(): Choice {
  try { const v = localStorage.getItem(KEY); return v === "granted" || v === "denied" ? v : null; } catch { return null; }
}

function clearGaCookies() {
  for (const c of document.cookie.split("; ")) {
    const name = c.split("=")[0];
    if (name.startsWith("_ga")) document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname}`;
  }
}

export function ConsentAnalytics() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(read());
    setReady(true);
    const reopen = () => { try { localStorage.removeItem(KEY); } catch {} setChoice(null); };
    window.addEventListener("ancapa-consent-reset", reopen);
    return () => window.removeEventListener("ancapa-consent-reset", reopen);
  }, []);

  if (!GA || !ready) return null;

  function save(c: "granted" | "denied") {
    try { localStorage.setItem(KEY, c); } catch {}
    if (c === "denied") clearGaCookies();
    setChoice(c);
  }

  return <>
    {choice === "granted" && <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}</Script>
    </>}
    {choice === null && <div role="dialog" aria-label="Cookie consent" className="print:hidden fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(8,35,58,.45)] md:inset-x-auto md:right-6 md:bottom-6">
      <p className="text-sm font-semibold text-navy">Can we count visits?</p>
      <p className="mt-1.5 text-sm leading-6 text-slate-600">We would like to use Google Analytics cookies to see which pages are useful. Nothing loads unless you accept. <Link href="/privacy" className="underline underline-offset-2 hover:text-navy">Privacy Policy</Link></p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => save("granted")} className="btn btn-dark px-5! py-2.5! text-sm!">Accept</button>
        <button onClick={() => save("denied")} className="btn btn-light px-5! py-2.5! text-sm!">Decline</button>
      </div>
    </div>}
  </>;
}
