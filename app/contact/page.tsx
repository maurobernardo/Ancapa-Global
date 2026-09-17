import type { Metadata } from "next";
import { MapPin, Clock, Globe2 } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a strategic conversation with ANCAPA Global Partners for investment opportunities, capital partnerships, market entry or project development.",
  alternates: { canonical: "/contact" },
};

export default function Contact(){
 return <main className="container pt-8 pb-14 md:pt-10 md:pb-16">
  <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-14">
   <div>
    <p className="eyebrow">Contact</p>
    <h1 className="display text-5xl md:text-6xl text-navy mt-4">Start a strategic conversation.</h1>
    <p className="mt-6 text-lg leading-8 text-slate-600">For investment opportunities, capital partnerships, market entry, project development or strategic collaboration, contact ANCAPA Global Partners through the form below.</p>
    <div className="mt-8 space-y-4">
     <div className="card flex items-center gap-4 p-5">
      <span className="h-11 w-11 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0"><MapPin className="h-5 w-5"/></span>
      <span><span className="block text-xs uppercase tracking-widest text-slate-400">Headquarters</span><span className="block font-semibold text-navy">{company.location}</span></span>
     </div>
     <div className="card flex items-center gap-4 p-5">
      <span className="h-11 w-11 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0"><Globe2 className="h-5 w-5"/></span>
      <span><span className="block text-xs uppercase tracking-widest text-slate-400">Focus markets</span><span className="block font-semibold text-navy">Africa · Caribbean · Southeast Asia</span></span>
     </div>
     <div className="card flex items-center gap-4 p-5">
      <span className="h-11 w-11 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0"><Clock className="h-5 w-5"/></span>
      <span><span className="block text-xs uppercase tracking-widest text-slate-400">Response time</span><span className="block font-semibold text-navy">Within 2 business days</span></span>
     </div>
    </div>
   </div>
   <div className="card p-7 md:p-9"><ContactForm/></div>
  </div>
 </main>
}
