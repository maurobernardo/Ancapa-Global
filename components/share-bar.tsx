"use client";
import { Facebook, Twitter, Linkedin, Mail, Printer } from "lucide-react";

export function ShareBar({ url, title, text }: { url: string; title: string; text: string }) {
  const shareText = `${title}. ${text}`;
  const links = [
    { label: "Facebook", Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Share on X", Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}` },
    { label: "LinkedIn", Icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "Email", Icon: Mail, href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText}\n\n${url}`)}` },
  ];

  return (
    <div className="print:hidden flex items-center gap-2">
      {links.map(({ label, Icon, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
          className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-navy hover:border-navy hover:-translate-y-0.5 transition">
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button onClick={() => window.print()} aria-label="Print or save as PDF"
        className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-navy hover:border-navy hover:-translate-y-0.5 transition">
        <Printer className="h-4 w-4" />
      </button>
    </div>
  );
}
