"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const KEY = "ancapa-splash";
const MIN_MS = 800;   // shortest time the opening splash stays up
const NAV_DELAY = 350; // only show the splash on navigation if the next page is slow

// Branded splash: shown when the site opens (once per browser session) and when a page takes a moment to load.
export function Splash() {
  const path = usePathname();
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");
  const [nav, setNav] = useState(false);

  // Opening splash: wait for the page to finish loading, but never flash for less than MIN_MS
  useEffect(() => {
    if (document.documentElement.classList.contains("no-splash")) { setPhase("gone"); return; }
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>;
    const done = () => {
      t1 = setTimeout(() => {
        setPhase("hide");
        try { sessionStorage.setItem(KEY, "1"); } catch {}
        t2 = setTimeout(() => setPhase("gone"), 600);
      }, Math.max(0, MIN_MS - performance.now()));
    };
    if (document.readyState === "complete") done(); else window.addEventListener("load", done, { once: true });
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener("load", done); };
  }, []);

  // Navigation splash: new page arrived, hide it
  useEffect(() => { setNav(false); }, [path]);

  // Navigation splash: internal link clicked and the page is still not there after NAV_DELAY
  useEffect(() => {
    let show: ReturnType<typeof setTimeout>, cap: ReturnType<typeof setTimeout>;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
      clearTimeout(show); clearTimeout(cap);
      show = setTimeout(() => setNav(true), NAV_DELAY);
      cap = setTimeout(() => setNav(false), 10000); // never leave it stuck
    };
    document.addEventListener("click", onClick, true); // capture: Next's <Link> cancels the click before it bubbles
    return () => { document.removeEventListener("click", onClick, true); clearTimeout(show); clearTimeout(cap); };
  }, []);


  const opening = phase !== "gone";
  if (!opening && !nav) return null;

  return <div
    className={`splash ${opening ? "splash-initial" : "splash-nav"} ${opening && phase === "hide" ? "splash-hide" : ""}`}
    {...(opening ? { "aria-hidden": true } : { role: "status", "aria-label": "Loading" })}
  >
    <Image src="/ancapa-logo.webp" alt="" width={500} height={500} priority className="splash-logo h-28 md:h-36 w-auto" />
    <span className="splash-bar" aria-hidden="true" />
  </div>;
}
