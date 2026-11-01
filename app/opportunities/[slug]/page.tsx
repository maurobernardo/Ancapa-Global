import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { opportunities } from "@/lib/data";
import { opportunityDetail } from "@/lib/opportunity-detail";
import { platformsFor } from "@/lib/related";
import { RelatedInsights } from "@/components/related-insights";
import { siteUrl } from "@/lib/seo";

export function generateStaticParams(){ return opportunities.map(o=>({slug:o.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
 const {slug}=await params; const o=opportunities.find(x=>x.slug===slug); if(!o) return {};
 return { title: o.title, description: o.summary, alternates: { canonical: `/opportunities/${o.slug}` } };
}

export default async function OpportunityPage({ params }: { params: Promise<{slug:string}> }){
 const { slug } = await params;
 const o = opportunities.find(x=>x.slug===slug);
 if(!o) notFound();
 const d = opportunityDetail[o.slug];
 const platform = d ? platformsFor([d.platform])[0] : undefined;

 const faq = [
  { q: `What is the ${o.title.toLowerCase()}?`, a: `${o.summary} It sits in ANCAPA's ${o.sector} work and is currently at the ${o.stage.toLowerCase()} stage.` },
  { q: "What is ANCAPA looking for?", a: `Our current ask: ${o.ask.replace(" + ", " and ").toLowerCase()}.` },
  { q: "Can I see the project details?", a: "Public information is kept high level on purpose. If you are a qualified investor or a strategic partner, request a discussion and we will share more under confidentiality, where materials are available." },
 ];
 const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
 const crumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
  { "@type": "ListItem", position: 2, name: "Opportunities", item: `${siteUrl}/opportunities` },
  { "@type": "ListItem", position: 3, name: o.title, item: `${siteUrl}/opportunities/${o.slug}` },
 ] };

 return <div className="container pt-8 pb-14 md:pt-10 md:pb-16">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, crumbLd]) }} />
  <Link href="/opportunities" className="chip text-slate-600"><ArrowLeft className="h-4 w-4"/>All opportunities</Link>
  <div className="mt-12 grid lg:grid-cols-[1.2fr_.8fr] gap-12">
   <div>
    <p className="eyebrow">{o.region} · {o.sector}</p>
    <h1 className="display text-5xl md:text-6xl text-navy mt-4">{o.title}</h1>
    <p className="mt-7 text-xl leading-8 text-slate-600">{o.summary}</p>
    <div className="mt-10 proseish">
     <h2>Investment thesis</h2>
     <p>ANCAPA is selectively developing and screening this opportunity as part of its broader {o.sector.toLowerCase()} strategy. The emphasis is on commercial viability, credible counterparties, executable market pathways and alignment with strategic capital.</p>
     {d && <>
      <h2>Why it matters now</h2>
      {d.why.map((p,i)=><p key={i}>{p}</p>)}
      <h2>What we look for</h2>
      <ul className="not-prose mt-4 space-y-3">{d.lookFor.map(x=><li key={x} className="flex gap-3 text-slate-700 leading-7"><CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-gold-ink"/>{x}</li>)}</ul>
      <h2>How ANCAPA engages</h2>
      <p>{d.engage}</p>
     </>}
     <h2>Current stage</h2>
     <p>{o.stage}. Information shown publicly is intentionally limited. Qualified investors and strategic partners can request a confidential discussion and additional materials where available.</p>
     <h2>Common questions</h2>
     {faq.map(f=><div key={f.q}><h3 className="text-lg font-semibold text-navy mt-6">{f.q}</h3><p>{f.a}</p></div>)}
    </div>
   </div>
   <aside className="card p-7 h-fit lg:sticky lg:top-28">
    <div className="text-xs uppercase tracking-widest text-slate-500">Opportunity profile</div>
    <dl className="mt-6 space-y-5 text-sm">
     <div><dt className="text-slate-500">Region</dt><dd className="mt-1 font-semibold text-navy">{o.region}</dd></div>
     <div><dt className="text-slate-500">Sector</dt><dd className="mt-1 font-semibold text-navy">{o.sector}</dd></div>
     <div><dt className="text-slate-500">Type</dt><dd className="mt-1 font-semibold text-navy">{o.type}</dd></div>
     <div><dt className="text-slate-500">Stage</dt><dd className="mt-1 font-semibold text-navy">{o.stage}</dd></div>
     <div><dt className="text-slate-500">Seeking</dt><dd className="mt-1 font-semibold text-navy">{o.ask}</dd></div>
    </dl>
    <Link href="/contact" className="btn btn-dark mt-8 w-full">Request discussion <ArrowRight className="h-4 w-4 ml-2"/></Link>
    {platform && <Link href={`/platforms/${platform.slug}`} className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-navy hover:border-gold transition">{platform.name}<ArrowRight className="h-4 w-4"/></Link>}
   </aside>
  </div>
  {d && <div className="mt-20 pt-14 border-t border-slate-200"><RelatedInsights slugs={d.insights} eyebrow="Our analysis" title="The thinking behind this opportunity." /></div>}
 </div>
}
