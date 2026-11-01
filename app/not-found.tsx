import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <div className="container pt-16 pb-24 md:pt-24">
    <div className="max-w-2xl">
      <p className="eyebrow">Error 404</p>
      <h1 className="display text-5xl md:text-6xl text-navy mt-4">This page is not here.</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">The link may be old or mistyped. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-dark">Home <ArrowRight className="ml-2 h-4 w-4" /></Link>
        <Link href="/insights" className="btn btn-light">Read our insights</Link>
        <Link href="/opportunities" className="btn btn-light">See opportunities</Link>
        <Link href="/contact" className="btn btn-light">Contact us</Link>
      </div>
    </div>
  </div>;
}
