import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Commercial intelligence for strategic markets: perspectives on capital formation, critical minerals corridors and digital infrastructure across ANCAPA's focus markets.",
  alternates: { canonical: "/insights" },
};

export default function Insights(){return <main className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="max-w-3xl"><p className="eyebrow">Insights</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">Intelligence for capital and strategic markets.</h1><p className="mt-6 text-lg leading-8 text-slate-600">Short perspectives on the sectors, corridors and execution questions shaping investment across ANCAPA's focus markets.</p></div><div className="grid md:grid-cols-2 gap-5 mt-12">{insights.map(i=>{const body=<>{i.cover && <div className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden rounded-t-[1.75rem]"><Image src={i.cover} alt={i.title} fill className="object-cover"/></div>}<div className="text-xs uppercase tracking-widest text-gold">{i.category}</div><h2 className="text-xl font-semibold text-navy mt-4 leading-7">{i.title}</h2><p className="mt-4 text-sm leading-6 text-slate-600">{i.excerpt}</p><div className="mt-8 flex items-center justify-between text-xs text-slate-400"><span>{i.date}</span>{i.body && <span className="chip text-navy py-1.5 px-3">Read article <ArrowRight className="h-3.5 w-3.5"/></span>}</div></>; return i.body ? <Link key={i.slug} href={`/insights/${i.slug}`} className="card p-7 flex flex-col overflow-hidden hover:-translate-y-1 transition">{body}</Link> : <article key={i.slug} className="card p-7 flex flex-col">{body}</article>})}</div></main>}
