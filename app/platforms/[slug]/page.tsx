import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { platforms } from "@/lib/data";

export function generateStaticParams(){ return platforms.map(p=>({slug:p.slug})); }

export default async function PlatformPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=platforms.find(x=>x.slug===slug); if(!p) notFound();

 return <>
  <section className="mesh border-b"><div className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="h-14 flex items-center"><Image src={p.logo} alt={p.name} width={260} height={100} className="h-16 w-auto object-contain object-left"/></div><p className="eyebrow mt-5">{p.name}</p><h1 className="display text-5xl md:text-7xl text-navy mt-4 max-w-4xl">{p.headline}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{p.description}</p><Link href="/contact" className="btn btn-dark mt-8">Discuss an opportunity <ArrowRight className="ml-2 h-4 w-4"/></Link></div></section>
  <section className="container py-14 md:py-16 grid lg:grid-cols-[.8fr_1.2fr] gap-14"><div><p className="eyebrow">Focus areas</p><h2 className="display text-4xl text-navy mt-3">Where we engage.</h2></div><div className="grid sm:grid-cols-2 gap-4">{p.focus.map(x=><div className="card p-5 flex gap-3 items-start" key={x}><CheckCircle2 className="h-5 w-5 mt-0.5" style={{color:p.accent}}/><span className="font-medium text-navy">{x}</span></div>)}</div></section>
  <section className="bg-[#071c2c] text-white"><div className="container py-14 md:py-16"><p className="eyebrow !text-gold">ANCAPA advantage</p><h2 className="display mt-3 text-4xl max-w-3xl">U.S. capital access. Local market intelligence. Execution discipline.</h2><div className="grid md:grid-cols-3 gap-5 mt-10">{["Origination","Structuring","Execution"].map((x,i)=><div key={x} className="border border-white/10 rounded-2xl p-6"><div className="text-gold text-xs tracking-widest">0{i+1}</div><h3 className="mt-4 text-xl font-semibold">{x}</h3><p className="mt-3 text-sm leading-6 text-slate-400">From high-potential opportunities to credible partnerships and commercially grounded delivery pathways.</p></div>)}</div></div></section>
 </>
}
