import type { Metadata } from "next";
import { company, operatingModel } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "ANCAPA Global Partners is a U.S.-anchored investment and strategic development platform. Learn about our founding, mission and Originate-Validate-Structure-Mobilize-Execute operating model.",
  alternates: { canonical: "/about" },
};

export default function About(){return <main><section className="container py-14 md:py-16 grid lg:grid-cols-2 gap-14"><div><p className="eyebrow">About ANCAPA</p><h1 className="display text-5xl md:text-6xl text-navy mt-4">Global capital. Local execution.</h1></div><div><p className="text-xl leading-9 text-slate-600">{company.summary}</p><p className="mt-6 text-slate-600 leading-7">Formally established in {company.founded}, the platform is designed to originate, structure and advance opportunities where strategic capital, technology, natural resources and enabling infrastructure intersect.</p></div></section><section className="bg-[#f7f5ef]"><div className="container py-14 md:py-16"><p className="eyebrow">Operating model</p><div className="grid md:grid-cols-5 gap-4 mt-8">{operatingModel.map(m=><div className="bg-white rounded-2xl border border-slate-200 p-6" key={m.step}><div className="text-gold text-xs tracking-[.2em]">{m.step}</div><h2 className="text-lg font-semibold text-navy mt-4">{m.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{m.text}</p></div>)}</div></div></section></main>}
