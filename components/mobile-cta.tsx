"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Fixed call to action on phones. Hidden where it would be redundant.
export function MobileCta() {
  const path = usePathname();
  if (path === "/contact" || path === "/thank-you") return null;
  return <div className="md:hidden print:hidden fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur px-4 pt-3 pb-[max(.75rem,env(safe-area-inset-bottom))]">
    <Link href="/contact" className="btn btn-dark w-full">Partner with ANCAPA <ArrowRight className="ml-2 h-4 w-4" /></Link>
  </div>;
}
