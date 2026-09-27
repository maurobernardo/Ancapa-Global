import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { insights, company } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";

export function generateStaticParams() {
  return insights.filter((i) => i.body).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug && x.body);
  if (!i) return {};
  return {
    title: i.title,
    description: i.dek || i.excerpt,
    alternates: { canonical: `/insights/${i.slug}` },
    openGraph: { type: "article", title: i.title, description: i.dek || i.excerpt, publishedTime: i.date },
  };
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug && x.body);
  if (!i) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.dek || i.excerpt,
    datePublished: i.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `${siteUrl}/insights/${i.slug}`,
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    <section className="mesh hero-grid border-b border-slate-200/70">
      <div className="container pt-8 pb-16 md:pt-10 md:pb-20 max-w-3xl">
        <Reveal>
          <Link href="/insights" className="chip text-slate-600"><ArrowLeft className="h-4 w-4" />All insights</Link>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mt-6">ANCAPA · Insights · {i.category}</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="display mt-5 text-4xl md:text-6xl leading-[1.05] text-navy">{i.title}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl">{i.dek || i.excerpt}</p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="font-semibold text-navy">{company.name}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{i.date}</span>
            {i.readTime && <><span className="h-1 w-1 rounded-full bg-slate-300" /><span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{i.readTime}</span></>}
          </div>
        </Reveal>
      </div>
    </section>

    <article className="container py-14 md:py-20">
      <div className="max-w-2xl mx-auto proseish">
        {i.body!.map((block, idx) => <Reveal key={idx} delay={idx * 60} className="mb-2">
          {block.h && <h2>{block.h}</h2>}
          {block.p.map((par, pi) => <p key={pi}>{par}</p>)}
        </Reveal>)}
      </div>

      <Reveal>
        <div className="max-w-2xl mx-auto mt-14 rounded-3xl bg-navy text-white p-8 md:p-10">
          <p className="eyebrow !text-gold">Start a project conversation</p>
          <h3 className="display text-2xl md:text-3xl mt-4">Bring us a project, or a mandate to deploy.</h3>
          <p className="mt-4 text-slate-300 leading-7">If you control a project seeking a U.S. development, technology or commercial partner, or your company is looking for qualified opportunities in African growth markets, let's discuss a specific fit.</p>
          <Link href="/contact" className="btn btn-light mt-6 w-fit">Partner with ANCAPA <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
      </Reveal>

      {i.sourceNote && <p className="max-w-2xl mx-auto mt-8 text-xs text-slate-400">{i.sourceNote}</p>}
    </article>
  </main>;
}
