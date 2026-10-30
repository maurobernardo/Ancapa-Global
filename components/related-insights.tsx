import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { articlesFor } from "@/lib/related";

// Grid of article cards used to cross-link analysis from articles, platforms, opportunities and markets
export function RelatedInsights({ slugs, eyebrow = "Related analysis", title = "Read more from ANCAPA Insights." }: { slugs: string[]; eyebrow?: string; title?: string }) {
  const items = articlesFor(slugs);
  if (!items.length) return null;
  return <section aria-label={eyebrow} className="print:hidden">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="display text-3xl md:text-4xl text-navy mt-3 max-w-2xl">{title}</h2>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((i) => <Link key={i.slug} href={`/insights/${i.slug}`} className="group card overflow-hidden flex flex-col hover:-translate-y-1 transition">
        <div className="relative aspect-[2/1] overflow-hidden bg-slate-100">
          {i.cover && <Image src={i.cover} alt={i.coverCaption || i.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />}
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[.65rem] font-bold uppercase tracking-widest text-navy shadow-sm">{i.category}</span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold text-navy leading-6">{i.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">{i.excerpt}</p>
          <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-3">{i.date}{i.readTime && <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{i.readTime}</span>}</span>
            <ArrowRight className="h-4 w-4 text-navy transition group-hover:translate-x-1" />
          </div>
        </div>
      </Link>)}
    </div>
  </section>;
}
