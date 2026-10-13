import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Commercial intelligence for strategic markets: perspectives on capital formation, critical minerals corridors and digital infrastructure across ANCAPA's focus markets.",
  alternates: { canonical: "/insights" },
};

type Insight = (typeof insights)[number];

// 2:1 frame: the wide covers (some carry banner text) show whole; the squarer ones lose a little height.
function Cover({ i, sizes, className = "" }: { i: Insight; sizes: string; className?: string }) {
  return <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
    {i.cover && <Image src={i.cover} alt={i.coverCaption || i.title} fill sizes={sizes} className="object-cover transition duration-700 group-hover:scale-[1.04]" />}
    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[.65rem] font-bold uppercase tracking-widest text-navy shadow-sm">{i.category}</span>
  </div>;
}

function Meta({ i }: { i: Insight }) {
  return <div className="mt-auto pt-6 flex items-center justify-between text-xs text-slate-400">
    <span className="flex items-center gap-3">{i.date}{i.readTime && <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{i.readTime}</span>}</span>
    {i.body && <span className="chip text-navy py-1.5 px-3">Read article <ArrowRight className="h-3.5 w-3.5" /></span>}
  </div>;
}

export default function Insights() {
  const [first, ...rest] = insights;
  const wrap = (i: Insight, cls: string, children: React.ReactNode) =>
    i.body ? <Link key={i.slug} href={`/insights/${i.slug}`} className={`group ${cls} hover:-translate-y-1 transition`}>{children}</Link>
           : <article key={i.slug} className={cls}>{children}</article>;

  return <main className="container pt-8 pb-14 md:pt-10 md:pb-16">
    <div className="max-w-3xl">
      <p className="eyebrow">Insights</p>
      <h1 className="display text-5xl md:text-6xl text-navy mt-4">Intelligence for capital and strategic markets.</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">Short perspectives on the sectors, corridors and execution questions shaping investment across ANCAPA's focus markets.</p>
    </div>

    <div className="mt-12 grid gap-5">
      {wrap(first, "card overflow-hidden grid md:grid-cols-[1.15fr_1fr]", <>
        <Cover i={first} sizes="(min-width: 768px) 60vw, 100vw" className="aspect-[2/1] md:aspect-auto md:min-h-[22rem]" />
        <div className="p-6 md:p-9 flex flex-col">
          <span className="inline-flex w-fit chip bg-navy! text-white! border-navy! py-1! px-3! text-[.65rem]">Latest</span>
          <h2 className="display text-2xl md:text-3xl text-navy mt-4 leading-tight">{first.title}</h2>
          <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">{first.excerpt}</p>
          <Meta i={first} />
        </div>
      </>)}

      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map(i => wrap(i, "card overflow-hidden flex flex-col", <>
          <Cover i={i} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[2/1]" />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-navy leading-7">{i.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{i.excerpt}</p>
            <Meta i={i} />
          </div>
        </>))}
      </div>
    </div>
  </main>;
}
