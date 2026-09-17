import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "./logo";
import { company } from "@/lib/data";

export function Footer(){
 return <footer className="bg-[#071c2c] text-white">
   <div className="container py-14 grid gap-10 md:grid-cols-[1.3fr_.8fr_.8fr_.9fr]">
     <div><div className="brightness-0 invert w-fit"><Logo /></div><p className="mt-6 max-w-md text-sm leading-7 text-slate-300">U.S.-anchored platform connecting capital, technology and strategic projects across Africa, the Caribbean and Southeast Asia.</p><p className="mt-6 text-xs tracking-[.22em] text-slate-400">ESTABLISHED 2019</p></div>
     <div><h3 className="text-sm font-semibold mb-4">Platforms</h3><div className="space-y-3 text-sm text-slate-300">{["energy","resources","digital","capital","infrastructure"].map(x=><Link className="block" key={x} href={`/platforms/${x}`}>ANCAPA {x[0].toUpperCase()+x.slice(1)}</Link>)}</div></div>
     <div><h3 className="text-sm font-semibold mb-4">Global corridors</h3><div className="space-y-3 text-sm text-slate-300"><p>United States → Africa</p><p>United States → Caribbean</p><p>United States → Southeast Asia</p></div></div>
     <div><h3 className="text-sm font-semibold mb-4">Contact</h3><div className="space-y-3 text-sm text-slate-300"><p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0"/>{company.location}</p><Link href="/contact" className="block hover:text-white transition">Start a conversation →</Link></div></div>
   </div>
   <div className="container border-t border-white/10 py-5 text-xs text-slate-400 flex flex-col md:flex-row md:justify-between gap-2"><span>© {new Date().getFullYear()} ANCAPA Global Partners. All rights reserved.</span><span>Global Capital. Local Execution.</span></div>
 </footer>
}
