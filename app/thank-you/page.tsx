import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Thank you",
  description: "Your inquiry has been received by ANCAPA Global Partners.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYou() {
  return <div className="container pt-12 pb-24 md:pt-20">
    <div className="max-w-2xl">
      <CheckCircle2 className="h-12 w-12 text-gold-ink" aria-hidden="true" />
      <p className="eyebrow mt-6">Inquiry received</p>
      <h1 className="display text-5xl md:text-6xl text-navy mt-4">Thank you.</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">We have your message. Someone from ANCAPA will read it and reply to the email address you gave us.</p>
      <p className="mt-4 leading-7 text-slate-600">While you wait, these are good places to start.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/insights" className="btn btn-dark">Read our insights <ArrowRight className="ml-2 h-4 w-4" /></Link>
        <Link href="/opportunities" className="btn btn-light">See opportunities</Link>
        <Link href="/" className="btn btn-light">Back to home</Link>
      </div>
    </div>
  </div>;
}
