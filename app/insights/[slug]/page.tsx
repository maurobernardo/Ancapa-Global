import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { insights, company } from "@/lib/data";
import { coverRatio, coverSize } from "@/lib/cover";
import { abs, isoDate, orgId, ogImage } from "@/lib/seo";
import { Reveal } from "@/components/reveal";
import { ReadingProgress } from "@/components/reading-progress";
import { ShareBar } from "@/components/share-bar";
import { RelatedInsights } from "@/components/related-insights";
import { articleRelated, opportunitiesFor, platformsFor } from "@/lib/related";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancapaglobal.com";

export function generateStaticParams() {
  return insights.filter((i) => i.body).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug && x.body);
  if (!i) return {};
  const title = i.seoTitle || i.title;
  const description = i.metaDescription || i.dek || i.excerpt;
  const size = i.cover ? await coverSize(ogImage(i.cover)) : null;
  const image = i.cover
    ? { url: abs(ogImage(i.cover)), ...(size ?? {}), alt: i.coverCaption || i.title }
    : { url: "/opengraph-image", width: 1200, height: 630 };
  return {
    title: { absolute: title },
    description,
    keywords: i.keywords,
    alternates: { canonical: `/insights/${i.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${siteUrl}/insights/${i.slug}`,
      publishedTime: isoDate(i.date),
      modifiedTime: isoDate(i.date),
      authors: [company.name],
      section: i.category,
      tags: i.keywords,
      locale: "en_US",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = insights.find((x) => x.slug === slug && x.body);
  if (!i) notFound();

  const url = `${siteUrl}/insights/${i.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.dek || i.excerpt,
    datePublished: isoDate(i.date),
    dateModified: isoDate(i.date),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    url,
    articleSection: i.category,
    keywords: i.keywords?.join(", "),
    wordCount: i.body!.reduce((n, b) => n + b.p.join(" ").split(/\s+/).length, 0),
    image: i.cover ? [abs(ogImage(i.cover))] : [`${siteUrl}/opengraph-image`],
    author: { "@id": orgId, "@type": "Organization", name: company.name, url: siteUrl },
    publisher: { "@id": orgId, "@type": "Organization", name: company.name, logo: { "@type": "ImageObject", url: `${siteUrl}/ancapa-logo.webp` } },
    isPartOf: { "@type": "Blog", name: "ANCAPA Insights", url: `${siteUrl}/insights` },
    ...(i.sources ? { citation: i.sources.map((x) => ({ "@type": "CreativeWork", name: x.label, url: x.url })) } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
      { "@type": "ListItem", position: 3, name: i.title, item: url },
    ],
  };

  // Show the whole image; only crop when it is taller than 16:10 so portraits don't dominate
  const rel = articleRelated[i.slug];
  const ratio = Math.max(await coverRatio(i.cover), 1.6);
  // Inline images inside the body: natural ratio, cropped only below 3:2
  const bodyRatios = await Promise.all(i.body!.map(async (b) => ("img" in b && b.img ? Math.max(await coverRatio(b.img.src), 1.5) : 0)));

  return <div className="bg-white">
    <ReadingProgress />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

    {/* Print-only cover, shown when saving/printing as PDF */}
    <div className="hidden print:block px-2 pt-4 pb-8">
      <div className="flex items-center justify-between border-b-2 border-navy pb-4">
        <Image src="/ancapa-logo.webp" alt="ANCAPA Global Partners" width={500} height={500} className="h-16 w-auto object-contain" />
        <span className="text-[.7rem] tracking-[.2em] uppercase text-slate-500">Insights · {i.category}</span>
      </div>
      <p className="display mt-8 text-4xl leading-tight text-navy">{i.title}</p>
      <p className="mt-4 text-lg leading-7 text-slate-600">{i.dek || i.excerpt}</p>
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
        <span className="font-semibold text-navy">{company.name}</span>
        <span>·</span>
        <span>{i.date}</span>
        {i.readTime && <><span>·</span><span>{i.readTime}</span></>}
      </div>
      <div className="mt-6 border-t border-slate-200" />
    </div>

    {/* Hero */}
    <section className="relative overflow-hidden bg-[#08233a] text-white print:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(185,151,88,.25),transparent_45%),radial-gradient(circle_at_85%_100%,rgba(185,151,88,.12),transparent_50%)]" />
      <span className="display pointer-events-none select-none absolute -top-10 right-[-2rem] md:right-8 text-[11rem] md:text-[16rem] leading-none text-white/[.05]">01</span>
      <div className="container relative pt-6 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <Link href="/insights" className="chip border-white/20! bg-white/10! text-white/90"><ArrowLeft className="h-4 w-4" />All insights</Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow eyebrow-gold mt-7">ANCAPA · Insights · {i.category}</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="display mt-6 text-4xl md:text-6xl leading-[1.06] max-w-3xl">{i.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-300 max-w-2xl">{i.dek || i.excerpt}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span className="font-semibold text-white">{company.name}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{i.date}</span>
              {i.readTime && <><span className="h-1 w-1 rounded-full bg-white/40" /><span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{i.readTime}</span></>}
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-6 [&_a]:border-white/20 [&_a]:bg-white/10 [&_a]:text-white/90 [&_button]:border-white/20 [&_button]:bg-white/10 [&_button]:text-white/90 [&_a:hover]:border-white [&_button:hover]:border-white [&_a:hover]:text-white [&_button:hover]:text-white">
              <ShareBar url={url} title={i.title} text={i.dek || i.excerpt} />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>

    {/* Cover image */}
    {i.cover && <div className="container -mt-10 md:-mt-14 relative z-10 print:hidden">
      <Reveal>
        <figure className="max-w-5xl bg-white p-1.5 sm:p-2 md:p-3 rounded-2xl md:rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(8,35,58,.35)] border border-slate-100">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden ring-1 ring-inset ring-black/5" style={{ aspectRatio: ratio }}>
            <Image src={i.cover} alt={i.coverCaption || i.title} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" priority />
          </div>
          {i.coverCaption && <figcaption className="mt-2.5 px-1.5 pb-1 text-xs md:text-[.8rem] leading-5 text-slate-500 italic">{i.coverCaption}</figcaption>}
        </figure>
      </Reveal>
    </div>}

    {/* Body */}
    <article className="container pt-14 pb-14 md:pt-16 md:pb-20">
      <div className="max-w-5xl grid md:grid-cols-[1fr_2.4fr] gap-10 items-start">
        {i.takeaways && <Reveal className="md:sticky md:top-28 order-2 md:order-1">
          <div className="card p-6 bg-[#f7f5ef] border-none hover:-translate-y-1">
            <p className="text-[.68rem] font-bold uppercase tracking-[.18em] text-gold-ink">Key takeaways</p>
            <ul className="mt-4 space-y-4">
              {i.takeaways.map((t, idx) => <li key={idx} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-navy" />{t}</li>)}
            </ul>
          </div>
        </Reveal>}

        <div className="proseish order-1 md:order-2">
          {i.body!.map((block, idx) => <div key={idx}>
            <Reveal delay={idx * 60}>
              {block.h && <h2 className="flex items-baseline gap-3"><span className="text-gold-ink text-base font-bold tabular-nums">{String(idx).padStart(2, "0")}</span>{block.h}</h2>}
              {"img" in block && block.img && <figure className="my-7 not-prose">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl ring-1 ring-inset ring-black/5 shadow-[0_20px_45px_-25px_rgba(8,35,58,.4)]" style={{ aspectRatio: bodyRatios[idx] }}>
                  <Image src={block.img.src} alt={block.img.alt} fill sizes="(min-width: 768px) 700px, 100vw" className="object-cover" />
                </div>
                {(block.img as { caption?: string }).caption && <figcaption className="mt-2.5 px-1 text-xs md:text-[.8rem] leading-5 text-slate-500 italic">{(block.img as { caption?: string }).caption}</figcaption>}
              </figure>}
              {block.p.map((par, pi) => <p key={pi} className={idx === 0 && pi === 0 ? "first-letter:text-6xl first-letter:font-bold first-letter:text-navy first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85]" : undefined}>{par}</p>)}
            </Reveal>
            {block.quote && <Reveal className="my-8 md:pl-6 md:border-l-2 border-gold transition-transform hover:translate-x-1">
              <p className="display text-2xl md:text-3xl leading-snug text-navy">{block.quote}</p>
            </Reveal>}
          </div>)}
        </div>
      </div>

      {rel && <div className="mt-16 print:hidden">
        <RelatedInsights slugs={rel.articles} eyebrow="Keep reading" title="More from ANCAPA Insights." />
        <div className="mt-8 flex flex-wrap gap-2">
          {platformsFor(rel.platforms).map((pl) => <Link key={pl.slug} href={`/platforms/${pl.slug}`} className="chip text-navy">{pl.name} <ArrowRight className="h-3.5 w-3.5" /></Link>)}
          {opportunitiesFor(rel.opportunities).map((o) => <Link key={o.slug} href={`/opportunities/${o.slug}`} className="chip text-navy">{o.title} <ArrowRight className="h-3.5 w-3.5" /></Link>)}
        </div>
      </div>}

      <Reveal className="print:hidden">
        <div className="max-w-5xl mt-16 rounded-3xl bg-navy text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(185,151,88,.22),transparent_45%)]" />
          <div className="relative">
            <p className="eyebrow eyebrow-gold">Start a project conversation</p>
            <h3 className="display text-2xl md:text-4xl mt-4 max-w-xl">Bring us a project, or a mandate to deploy.</h3>
            <p className="mt-4 text-slate-300 leading-7 max-w-xl">If you control a project seeking a U.S. development, technology or commercial partner, or your company is looking for qualified opportunities in African growth markets, let's discuss a specific fit.</p>
            <Link href="/contact" className="btn btn-light mt-7 w-fit">Partner with ANCAPA <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </Reveal>

      {i.sourceNote && <div className="max-w-5xl mt-8 rounded-2xl border border-slate-200 bg-[#f7f5ef] px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="eyebrow shrink-0 text-navy!">Source</span>
          <p className="text-sm text-slate-700 leading-6 flex-1">{i.sourceNote}</p>
          {!i.sources && i.sourceUrl && <a href={i.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark py-2! px-4! text-xs! shrink-0 w-fit">View source <ArrowRight className="ml-2 h-3.5 w-3.5" /></a>}
        </div>
        {i.sources && <div className="mt-4 flex flex-wrap gap-2">
          {i.sources.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark py-2! px-4! text-xs!">{s.label} <ArrowRight className="ml-2 h-3.5 w-3.5" /></a>)}
        </div>}
      </div>}
    </article>
  </div>;
}
