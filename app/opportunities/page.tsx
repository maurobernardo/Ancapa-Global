import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { opportunities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "A curated pipeline for strategic capital — investment and development opportunities across ANCAPA's five platforms and three growth corridors.",
  alternates: { canonical: "/opportunities" },
};

export default function Opportunities(){return <main className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="max-w-3xl"><p className="eyebrow">Opportunities</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">A curated pipeline for strategic capital.</h1><p className="mt-6 text-lg leading-8 text-slate-600">ANCAPA develops and screens opportunities across its five platforms. Public descriptions are deliberately high-level; detailed materials are shared selectively with qualified partners.</p></div><div className="grid md:grid-cols-2 gap-5 mt-12">{opportunities.map(o=><Link href={`/opportunities/${o.slug}`} className="card p-7 hover:shadow-lg transition" key={o.slug}><div className="text-xs uppercase tracking-widest text-slate-500">{o.region} · {o.sector}</div><h2 className="text-2xl font-semibold text-navy mt-3">{o.title}</h2><p className="mt-4 text-sm leading-6 text-slate-600">{o.summary}</p><div className="mt-6 flex items-center justify-between text-sm"><span className="text-slate-500">{o.stage}</span><span className="chip text-navy">View <ArrowRight className="h-4 w-4"/></span></div></Link>)}</div></main>}
