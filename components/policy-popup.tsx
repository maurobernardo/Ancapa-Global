"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const KEY = "ancapa-policy";           // "accepted" | "declined"
const UMAMI_OFF = "umami.disabled";    // Umami's own opt-out switch: when set, it stops counting
type Choice = "accepted" | "declined" | null;

function read(): Choice {
  try { const v = localStorage.getItem(KEY); return v === "accepted" || v === "declined" ? v : null; } catch { return null; }
}

// Privacy and terms pop-up. Accept keeps the cookieless visit counter on; Decline turns it off.
export function PolicyPopup() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = read();
    try { if (c === "declined") localStorage.setItem(UMAMI_OFF, "1"); else localStorage.removeItem(UMAMI_OFF); } catch {}
    // Wait for the opening splash to leave before asking
    const delay = document.documentElement.classList.contains("no-splash") ? 600 : 1800;
    const t = c === null ? setTimeout(() => setOpen(true), delay) : undefined;
    const reopen = () => setOpen(true);
    window.addEventListener("ancapa-policy-open", reopen);
    return () => { clearTimeout(t); window.removeEventListener("ancapa-policy-open", reopen); };
  }, []);

  function choose(c: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, c);
      if (c === "declined") localStorage.setItem(UMAMI_OFF, "1"); else localStorage.removeItem(UMAMI_OFF);
    } catch {}
    setOpen(false);
  }

  // No need to ask while the person is reading the policies themselves
  if (!open || path === "/privacy" || path === "/terms") return null;

  return <div role="dialog" aria-labelledby="policy-title" aria-describedby="policy-text" className="print:hidden fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(8,35,58,.45)] md:inset-x-auto md:right-6 md:bottom-6">
    <p id="policy-title" className="text-sm font-semibold text-navy">Privacy and terms</p>
    <p id="policy-text" className="mt-1.5 text-sm leading-6 text-slate-600">We count visits with privacy-friendly analytics that use no cookies. By continuing you accept our <Link href="/privacy" className="underline underline-offset-2 hover:text-navy">Privacy Policy</Link> and <Link href="/terms" className="underline underline-offset-2 hover:text-navy">Terms of Use</Link>. Declining turns the visit counter off and the site works the same.</p>
    <div className="mt-4 flex flex-wrap gap-3">
      <button onClick={() => choose("accepted")} className="btn btn-dark px-5! py-2.5! text-sm!">Accept</button>
      <button onClick={() => choose("declined")} className="btn btn-light px-5! py-2.5! text-sm!">Decline</button>
    </div>
  </div>;
}
