import Link from "next/link";
import { ArrowRight, Network, ShieldCheck, TrendingUp } from "lucide-react";
import { regions } from "@/lib/data";

export default function Markets(){
 return <main>
  <div className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="max-w-3xl"><p className="eyebrow">Markets</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">Strategic corridors for growth.</h1><p className="mt-6 text-lg leading-8 text-slate-600">ANCAPA's market strategy starts with U.S. capital and capability, then builds execution pathways in regions where structural demand and strategic relevance are converging.</p></div></div>
  <div className="container pb-24 grid gap-6">{regions.map((r,i)=>{const Icon=[Network,ShieldCheck,TrendingUp][i]; const themes=r.text.split(", "); return <section key={r.slug} className="group relative overflow-hidden rounded-3xl p-8 md:p-10 grid lg:grid-cols-[.4fr_.6fr] gap-8 lg:gap-14 text-white border border-white/10 shadow-[0_20px_50px_-25px_rgba(8,35,58,.6)]" style={{background:`radial-gradient(circle at ${20+i*30}% 15%, rgba(185,151,88,.32), transparent 45%), linear-gradient(160deg, #0e3555, #061826 75%)`}}>
    <span className="display absolute -top-8 right-2 text-[9rem] leading-none text-white/[.06] select-none">0{i+1}</span>
    <div className="relative"><Icon className="h-7 w-7 text-gold"/><h2 className="display text-3xl md:text-4xl mt-4">{r.name}</h2><Link href="/opportunities" className="chip mt-6 w-fit text-white/90 border-white/20! bg-white/10!">See opportunities <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></Link></div>
    <div className="relative"><p className="text-lg text-slate-200 leading-8">{r.thesis}</p><div className="mt-6 flex flex-wrap gap-2">{themes.map(t=><span key={t} className="chip text-gold border-gold/30! bg-gold/10!">{t}</span>)}</div></div>
  </section>})}</div>
 </main>
}
