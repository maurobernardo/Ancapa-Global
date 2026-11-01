"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Thin loading bar shown from the moment an internal link is clicked until the new page renders.
export function RouteProgress() {
  const path = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => { setLoading(false); }, [path]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
      setLoading(true);
      clearTimeout(timer);
      timer = setTimeout(() => setLoading(false), 10000); // never leave the bar stuck
    };
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("click", onClick); clearTimeout(timer); };
  }, []);

  if (!loading) return null;
  return <div aria-hidden="true" className="print:hidden fixed inset-x-0 top-0 z-[70] h-0.5 overflow-hidden bg-gold/20">
    <div className="h-full w-1/3 animate-[route-progress_1.1s_ease-in-out_infinite] bg-gold" />
  </div>;
}
