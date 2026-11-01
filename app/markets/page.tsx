import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network, ShieldCheck, TrendingUp } from "lucide-react";
import { regions, insights } from "@/lib/data";
import { RelatedInsights } from "@/components/related-insights";

// How ANCAPA works in each region, plus the platforms most relevant there
const regionWork: Record<string, { work: string; platforms: { slug: string; label: string }[] }> = {
  africa: {
    work: "Africa is where most of our published analysis sits: Angola, Mozambique, and the corridors that connect them to the Atlantic and the Indian Ocean. We write down what we find so investors can judge the thinking before they call us.",
    platforms: [{ slug: "energy", label: "Energy" }, { slug: "resources", label: "Resources" }, { slug: "infrastructure", label: "Infrastructure" }, { slug: "digital", label: "Digital" }],
  },
  caribbean: {
    work: "If you have a project in the Caribbean, tell us the sector, the stage and what you need. We start from the project, test whether the demand is real, and look for the U.S. capital or capability that fits.",
    platforms: [{ slug: "energy", label: "Energy" }, { slug: "infrastructure", label: "Infrastructure" }, { slug: "digital", label: "Digital" }, { slug: "capital", label: "Capital" }],
  },
  "southeast-asia": {
    work: "Southeast Asia is on our map for technology, supply chains and energy transition. We work the same way everywhere: a real buyer or user, a U.S. angle that makes sense, and a local partner able to deliver.",
    platforms: [{ slug: "digital", label: "Digital" }, { slug: "supply", label: "Supply" }, { slug: "energy", label: "Energy" }, { slug: "capital", label: "Capital" }],
  },
};

export const metadata: Metadata = {
  title: "Markets",
  description: "ANCAPA's market strategy across Africa, the Caribbean and Southeast Asia: growth corridors where structural demand and strategic relevance are converging.",
  alternates: { canonical: "/markets" },
};

export default function Markets(){
 return <div>
  <div className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="max-w-3xl"><p className="eyebrow">Markets</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">Strategic corridors for growth.</h1><p className="mt-6 text-lg leading-8 text-slate-600">ANCAPA's market strategy starts with U.S. capital and capability, then builds execution pathways in regions where structural demand and strategic relevance are converging.</p></div></div>
  <div className="container pb-24 grid gap-6">{regions.map((r,i)=>{const Icon=[Network,ShieldCheck,TrendingUp][i]; const themes=r.text.split(", "); return <section key={r.slug} className="group relative overflow-hidden rounded-3xl p-8 md:p-10 grid lg:grid-cols-[.4fr_.6fr] gap-8 lg:gap-14 text-white border border-white/10 shadow-[0_20px_50px_-25px_rgba(8,35,58,.6)]" style={{background:`radial-gradient(circle at ${20+i*30}% 15%, rgba(185,151,88,.32), transparent 45%), linear-gradient(160deg, #0e3555, #061826 75%)`}}>
    <span className="display absolute -top-8 right-2 text-[9rem] leading-none text-white/[.06] select-none">0{i+1}</span>
    <div className="relative"><Icon className="h-7 w-7 text-gold"/><h2 className="display text-3xl md:text-4xl mt-4">{r.name}</h2><Link href="/opportunities" className="chip mt-6 w-fit text-white/90 border-white/20! bg-white/10!">See opportunities <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></Link></div>
    <div className="relative"><p className="text-lg text-slate-200 leading-8">{r.thesis}</p><div className="mt-6 flex flex-wrap gap-2">{themes.map(t=><span key={t} className="chip text-gold border-gold/30! bg-gold/10!">{t}</span>)}</div><p className="mt-6 text-slate-300 leading-7">{regionWork[r.slug].work}</p><div className="mt-5 flex flex-wrap gap-2">{regionWork[r.slug].platforms.map(pl=><Link key={pl.slug} href={`/platforms/${pl.slug}`} className="chip text-white/90 border-white/20! bg-white/10! text-xs!">ANCAPA {pl.label}</Link>)}</div></div>
  </section>})}</div>
  <div className="container pb-24 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
   <div><p className="eyebrow">How we choose</p><h2 className="display text-3xl md:text-4xl text-navy mt-3">Three questions before any market.</h2></div>
   <ol className="space-y-5 text-slate-700 leading-7">
    <li className="flex gap-4"><span className="display text-3xl text-gold-ink">1</span><span>Is there a real buyer or user for what gets built? Resources in the ground are not demand.</span></li>
    <li className="flex gap-4"><span className="display text-3xl text-gold-ink">2</span><span>Does a U.S. company, technology or source of capital fit the project? If not, we are not the right partner.</span></li>
    <li className="flex gap-4"><span className="display text-3xl text-gold-ink">3</span><span>Is there a local partner who can execute? Global capital only works with local execution.</span></li>
   </ol>
  </div>
  <div className="container pb-24"><RelatedInsights slugs={insights.filter(i=>i.body).slice(0,3).map(i=>i.slug)} eyebrow="Latest analysis" title="What we are reading in these markets." /></div>
 </div>
}
