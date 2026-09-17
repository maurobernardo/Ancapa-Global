"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Info, LayoutGrid, MapPinned, Briefcase, Newspaper, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { platforms } from "@/lib/data";

const navLinks: [string, string, React.ComponentType<{ className?: string }>][] = [
  ["Home", "/", Home],
  ["About", "/#about", Info],
  ["Markets", "/markets", MapPinned],
  ["Opportunities", "/opportunities", Briefcase],
  ["Insights", "/insights", Newspaper],
  ["Contact", "/contact", Mail],
];

function NavLink({ href, icon: Icon, label, active }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string; active: boolean }) {
  return <Link href={href} className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition text-[.83rem] ${active ? "bg-navy text-white font-semibold shadow-[0_6px_16px_-8px_rgba(8,35,58,.55)]" : "text-slate-700 hover:text-navy hover:bg-slate-100"}`}><Icon className="h-3.5 w-3.5"/>{label}</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isPlatforms = pathname.startsWith("/platforms");
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
    <div className="container flex h-24 md:h-28 items-center justify-between">
      <Logo />
      <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
        <NavLink href="/" icon={Home} label="Home" active={pathname === "/"}/>
        <NavLink href="/#about" icon={Info} label="About" active={false}/>
        <div className="relative group/platforms">
          <button className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition text-[.83rem] ${isPlatforms ? "bg-navy text-white font-semibold shadow-[0_6px_16px_-8px_rgba(8,35,58,.55)]" : "text-slate-700 hover:text-navy hover:bg-slate-100"}`}><LayoutGrid className="h-3.5 w-3.5"/>Platforms<ChevronDown className="h-3.5 w-3.5 transition group-hover/platforms:rotate-180"/></button>
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-80 opacity-0 invisible translate-y-1 group-hover/platforms:opacity-100 group-hover/platforms:visible group-hover/platforms:translate-y-0 transition-all duration-200 z-50">
            <div className="card bg-white p-3 shadow-2xl border-slate-100">
              <div className="px-2 pb-2 pt-1 text-[.68rem] font-bold uppercase tracking-[.18em] text-slate-400">Our platforms</div>
              <div className="flex flex-col gap-0.5">
                {platforms.map(p=><Link key={p.slug} href={`/platforms/${p.slug}`} className="group/item flex items-center gap-3 rounded-2xl px-2.5 py-2.5 hover:bg-slate-50 transition"><span className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-slate-50 p-1.5"><Image src={p.logo} alt="" width={40} height={40} className="h-full w-full object-contain"/></span><span className="flex-1"><span className="block text-sm font-semibold text-navy">{p.name}</span><span className="block text-xs text-slate-500">{p.short}</span></span><ArrowRight className="h-4 w-4 text-slate-300 transition group-hover/item:text-gold group-hover/item:translate-x-0.5"/></Link>)}
              </div>
            </div>
          </div>
        </div>
        {navLinks.slice(2).map(([label, href, Icon])=><NavLink key={href} href={href} icon={Icon} label={label} active={pathname === href}/>)}
        <Link href="/contact" className="btn btn-dark ml-3 px-4! py-2! text-xs!">Partner with ANCAPA</Link>
      </nav>
      <button className="lg:hidden" onClick={() => setOpen(v=>!v)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
    </div>
    {open && <div className="lg:hidden border-t bg-white px-6 py-5 flex flex-col gap-4">
      <Link href="/" onClick={()=>setOpen(false)} className={`flex items-center gap-2.5 rounded-xl px-3 py-2 -mx-3 ${pathname==="/"?"bg-navy text-white font-semibold":"text-slate-700"}`}><Home className="h-4 w-4"/>Home</Link>
      <Link href="/#about" onClick={()=>setOpen(false)} className="flex items-center gap-2.5 text-slate-700"><Info className="h-4 w-4"/>About</Link>
      <div className={isPlatforms ? "text-navy" : "text-slate-700"}>
        <div className="flex items-center gap-2.5 font-medium"><LayoutGrid className="h-4 w-4"/>Platforms</div>
        <div className="mt-2 ml-6 flex flex-col gap-1">
          {platforms.map(p=><Link key={p.slug} href={`/platforms/${p.slug}`} onClick={()=>setOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm text-slate-600"><span className="h-7 w-7 rounded-lg overflow-hidden bg-slate-50 p-1 shrink-0"><Image src={p.logo} alt="" width={28} height={28} className="h-full w-full object-contain"/></span>{p.name}</Link>)}
        </div>
      </div>
      {navLinks.slice(2).map(([label, href, Icon])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={`flex items-center gap-2.5 rounded-xl px-3 py-2 -mx-3 ${pathname===href?"bg-navy text-white font-semibold":"text-slate-700"}`}><Icon className="h-4 w-4"/>{label}</Link>)}
    </div>}
  </header>
}
