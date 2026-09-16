import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { opportunities } from "@/lib/data";

export function generateStaticParams(){ return opportunities.map(o=>({slug:o.slug})); }

export default async function OpportunityPage({ params }: { params: Promise<{slug:string}> }){
 const { slug } = await params;
 const o = opportunities.find(x=>x.slug===slug);
 if(!o) notFound();
 return <main className="container pt-8 pb-14 md:pt-10 md:pb-16"><Link href="/opportunities" className="chip text-slate-600"><ArrowLeft className="h-4 w-4"/>All opportunities</Link><div className="mt-12 grid lg:grid-cols-[1.2fr_.8fr] gap-12"><div><p className="eyebrow">{o.region} · {o.sector}</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">{o.title}</h1><p className="mt-7 text-xl leading-8 text-slate-600">{o.summary}</p><div className="mt-10 proseish"><h2>Investment thesis</h2><p>ANCAPA is selectively developing and screening this opportunity as part of its broader {o.sector.toLowerCase()} strategy. The emphasis is on commercial viability, credible counterparties, executable market pathways and alignment with strategic capital.</p><h2>Current stage</h2><p>{o.stage}. Information shown publicly is intentionally limited. Qualified investors and strategic partners can request a confidential discussion and additional materials where available.</p></div></div><aside className="card p-7 h-fit"><div className="text-xs uppercase tracking-widest text-slate-400">Opportunity profile</div><dl className="mt-6 space-y-5 text-sm"><div><dt className="text-slate-400">Region</dt><dd className="mt-1 font-semibold text-navy">{o.region}</dd></div><div><dt className="text-slate-400">Sector</dt><dd className="mt-1 font-semibold text-navy">{o.sector}</dd></div><div><dt className="text-slate-400">Type</dt><dd className="mt-1 font-semibold text-navy">{o.type}</dd></div><div><dt className="text-slate-400">Stage</dt><dd className="mt-1 font-semibold text-navy">{o.stage}</dd></div><div><dt className="text-slate-400">Seeking</dt><dd className="mt-1 font-semibold text-navy">{o.ask}</dd></div></dl><Link href="/contact" className="btn btn-dark mt-8 w-full">Request discussion <ArrowRight className="h-4 w-4 ml-2"/></Link></aside></div></main>
}
