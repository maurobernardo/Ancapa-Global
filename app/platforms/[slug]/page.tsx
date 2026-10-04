import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Ship, BadgeCheck, Handshake, Factory, Globe2 } from "lucide-react";
import { platforms, supplyCapabilities, supplySectors, supplyClients } from "@/lib/data";

export function generateStaticParams(){ return platforms.map(p=>({slug:p.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
 const {slug}=await params; const p=platforms.find(x=>x.slug===slug); if(!p) return {};
 return { title: p.name, description: p.description, alternates: { canonical: `/platforms/${p.slug}` } };
}

function SupplyPage({p}:{p:(typeof platforms)[number]}){
 const Icon=p.icon;
 return <>
  <section className="mesh border-b overflow-hidden">
   <div className="container pt-8 pb-14 md:pt-10 md:pb-16 grid lg:grid-cols-[1.08fr_.92fr] gap-10 lg:gap-14 items-center">
    <div>
     <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{color:p.accent,background:`${p.accent}18`}}><Icon className="h-7 w-7"/></div>
     <p className="eyebrow mt-6">{p.name}</p>
     <h1 className="display text-5xl md:text-7xl text-navy mt-4 max-w-4xl">{p.headline}</h1>
     <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{p.description}</p>
     <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">We help governments, project sponsors, private companies, contractors and development partners move from technical requirement to qualified supplier, commercial evaluation and coordinated delivery.</p>
     <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-dark">Submit a procurement requirement <ArrowRight className="ml-2 h-4 w-4"/></Link><Link href="#approach" className="btn btn-light">How we source</Link></div>
    </div>
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_30px_90px_rgba(8,35,58,.12)] p-8 md:p-10 flex items-center justify-center lg:min-h-[390px]">
     <Image src="/ancapa-supply-logo.png" alt="ANCAPA Supply" width={650} height={520} className="w-full max-w-[430px] h-auto object-contain" priority />
    </div>
   </div>
  </section>

  <section className="container py-14 md:py-16 grid lg:grid-cols-[.78fr_1.22fr] gap-14 items-start">
   <div><p className="eyebrow">What we do</p><h2 className="display text-4xl md:text-5xl text-navy mt-3">Procurement built around the project.</h2><p className="mt-5 text-slate-600 leading-7">ANCAPA Supply supports sourcing across the full ANCAPA platform, with an emphasis on qualified suppliers, technical fit, commercial discipline and delivery readiness.</p></div>
   <div className="grid sm:grid-cols-2 gap-4">{p.focus.map(x=><div className="card p-5 flex gap-3 items-start" key={x}><CheckCircle2 className="h-5 w-5 mt-0.5" style={{color:p.accent}}/><span className="font-medium text-navy">{x}</span></div>)}</div>
  </section>

  <section className="bg-[#f7f5ef]"><div className="container py-14 md:py-16"><div className="max-w-3xl"><p className="eyebrow">Across every ANCAPA platform</p><h2 className="display text-4xl md:text-5xl text-navy mt-3">One sourcing capability. Multiple sectors.</h2><p className="mt-5 text-lg text-slate-600">The platform is designed to source equipment, technology and implementation solutions that support projects across Energy, Resources, Digital, Capital and Infrastructure.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">{supplySectors.map((s,i)=><div key={s.title} className="bg-white rounded-2xl border border-slate-200 p-6"><div className="text-xs tracking-[.18em] uppercase" style={{color:p.accent}}>0{i+1}</div><h3 className="mt-4 text-xl font-semibold text-navy">{s.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{s.text}</p></div>)}</div></div></section>

  <section id="approach" className="bg-[#071c2c] text-white"><div className="container py-14 md:py-16"><div className="grid lg:grid-cols-[.72fr_1.28fr] gap-14"><div><p className="eyebrow eyebrow-gold">Our approach</p><h2 className="display mt-3 text-4xl md:text-5xl">From requirement to delivered solution.</h2><p className="mt-6 text-slate-300 leading-8">We combine sourcing discipline with local market understanding so procurement decisions are grounded in how equipment will actually be financed, shipped, installed and supported.</p></div><div className="grid sm:grid-cols-2 gap-4">{supplyCapabilities.map((c,i)=><div key={c.title} className="border border-white/10 rounded-2xl p-6 bg-white/[.03]"><div className="text-xs tracking-[.18em]" style={{color:p.accent}}>0{i+1}</div><h3 className="mt-3 text-lg font-semibold">{c.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{c.text}</p></div>)}</div></div></div></section>

  <section className="container py-14 md:py-16"><div className="grid lg:grid-cols-2 gap-6"><div className="rounded-3xl border border-slate-200 p-8"><div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{background:`${p.accent}18`,color:p.accent}}><Factory className="h-5 w-5"/></div><h2 className="display text-3xl text-navy mt-6">U.S. supplier access</h2><p className="mt-4 leading-7 text-slate-600">ANCAPA’s U.S. base provides a direct pathway to manufacturers, technology companies, distributors and specialized solution providers. For international clients, this expands access to U.S. equipment and expertise. For U.S. suppliers, ANCAPA helps identify credible projects, buyers and local market entry pathways.</p></div><div className="rounded-3xl border border-slate-200 p-8"><div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{background:`${p.accent}18`,color:p.accent}}><BadgeCheck className="h-5 w-5"/></div><h2 className="display text-3xl text-navy mt-6">Supplier-neutral sourcing</h2><p className="mt-4 leading-7 text-slate-600">We evaluate solutions against project requirements rather than directing clients automatically to a single manufacturer. This supports transparency, competition, technical fit and value for money across the procurement process.</p></div></div></section>

  <section className="border-y border-slate-200 bg-white"><div className="container py-14 md:py-16"><div className="grid lg:grid-cols-[.72fr_1.28fr] gap-14"><div><p className="eyebrow">Who we work with</p><h2 className="display text-4xl text-navy mt-3">Buyers, builders, financiers and suppliers.</h2><p className="mt-5 text-slate-600 leading-7">ANCAPA Supply can support procurement from early project preparation through implementation and after-sales coordination.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{supplyClients.map(x=><div key={x} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-medium text-navy">{x}</div>)}</div></div></div></section>

  <section className="container py-14 md:py-16"><div className="rounded-[2rem] bg-[#f7f5ef] p-8 md:p-12 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center"><div><p className="eyebrow">Supporting U.S. exports</p><h2 className="display text-4xl text-navy mt-3">Connecting project demand with U.S. commercial capability.</h2><p className="mt-5 leading-7 text-slate-600">Where appropriate, ANCAPA helps international project sponsors identify U.S.-manufactured equipment, technology and services and explore procurement structures aligned with project-development and export-finance pathways.</p></div><div className="grid gap-3">{[[Globe2,"International clients","Access to qualified U.S. technology, equipment and expertise."],[Handshake,"U.S. companies","Access to credible projects, buyers and local implementation relationships."],[Ship,"Projects","A clearer path from specification and supplier selection through logistics and delivery."]].map(([I,t,d]:any)=><div key={t} className="bg-white rounded-2xl border border-slate-200 p-5 flex gap-4"><div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{color:p.accent,background:`${p.accent}18`}}><I className="h-5 w-5"/></div><div><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{d}</p></div></div>)}</div></div></section>

  <section className="bg-navy text-white"><div className="container py-14 md:py-16 grid lg:grid-cols-[1fr_.72fr] gap-12 items-center"><div><p className="eyebrow eyebrow-gold">Need equipment or a technical solution?</p><h2 className="display text-4xl md:text-5xl mt-3">Tell us what the project requires.</h2><p className="mt-5 text-slate-300 leading-7 max-w-2xl">ANCAPA Supply can help identify qualified suppliers, compare technical and commercial options, and develop a procurement pathway from specification through delivery.</p></div><div className="flex flex-wrap lg:justify-end gap-3"><Link href="/contact" className="btn bg-white text-navy">Request a sourcing consultation</Link><Link href="/contact" className="btn border border-white/20 text-white">Submit a procurement requirement</Link></div></div></section>
 </>
}

export default async function PlatformPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=platforms.find(x=>x.slug===slug); if(!p) notFound();
 if(slug==="supply") return <SupplyPage p={p}/>;

 return <>
  <section className="mesh border-b"><div className="container pt-8 pb-14 md:pt-10 md:pb-16"><div className="h-14 flex items-center"><Image src={p.logo} alt={p.name} width={260} height={100} className="h-16 w-auto object-contain object-left"/></div><p className="eyebrow mt-5">{p.name}</p><h1 className="display text-5xl md:text-7xl text-navy mt-4 max-w-4xl">{p.headline}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{p.description}</p><Link href="/contact" className="btn btn-dark mt-8">Discuss an opportunity <ArrowRight className="ml-2 h-4 w-4"/></Link></div></section>
  <section className="container py-14 md:py-16 grid lg:grid-cols-[.8fr_1.2fr] gap-14"><div><p className="eyebrow">Focus areas</p><h2 className="display text-4xl text-navy mt-3">Where we engage.</h2></div><div className="grid sm:grid-cols-2 gap-4">{p.focus.map(x=><div className="card p-5 flex gap-3 items-start" key={x}><CheckCircle2 className="h-5 w-5 mt-0.5" style={{color:p.accent}}/><span className="font-medium text-navy">{x}</span></div>)}</div></section>
  <section className="bg-[#071c2c] text-white"><div className="container py-14 md:py-16"><p className="eyebrow eyebrow-gold">ANCAPA advantage</p><h2 className="display mt-3 text-4xl max-w-3xl">U.S. capital access. Local market intelligence. Execution discipline.</h2><div className="grid md:grid-cols-3 gap-5 mt-10">{["Origination","Structuring","Execution"].map((x,i)=><div key={x} className="border border-white/10 rounded-2xl p-6"><div className="text-gold text-xs tracking-widest">0{i+1}</div><h3 className="mt-4 text-xl font-semibold">{x}</h3><p className="mt-3 text-sm leading-6 text-slate-400">From high-potential opportunities to credible partnerships and commercially grounded delivery pathways.</p></div>)}</div></div></section>
 </>
}
