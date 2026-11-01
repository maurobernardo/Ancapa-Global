"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Unable to submit inquiry.");
      setStatus("success");
      setMessage("Thank you. Your inquiry has been received by ANCAPA Global Partners.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit inquiry.");
    }
  }

  return <form onSubmit={submit} className="grid gap-4">
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "sm:grid-cols-2"}`}>
      <input required name="name" aria-label="Full name" autoComplete="name" maxLength={120} placeholder="Full name" className="field" />
      <input required type="email" name="email" aria-label="Business email" autoComplete="email" maxLength={180} placeholder="Business email" className="field" />
    </div>
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "sm:grid-cols-2"}`}>
      <input name="organization" aria-label="Organization" autoComplete="organization" maxLength={180} placeholder="Organization" className="field" />
      <select name="interest" aria-label="Area of interest" className="field" defaultValue="">
        <option value="" disabled>Area of interest</option>
        <option>Investment opportunity</option><option>Capital partnership</option><option>Energy</option><option>Resources</option><option>Digital</option><option>Infrastructure</option><option>Supply and procurement</option><option>Market entry</option><option>Other</option>
      </select>
    </div>
    <textarea required name="message" aria-label="Your message" maxLength={3000} placeholder="Tell us what you are exploring..." rows={compact ? 4 : 6} className="field resize-y" />
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    <p className="text-xs leading-5 text-slate-500">We use your details only to reply to this inquiry. See our <Link href="/privacy" className="underline underline-offset-2 hover:text-navy">Privacy Policy</Link>.</p>
    <button disabled={status === "sending"} className="btn btn-dark w-fit disabled:opacity-60">{status === "sending" ? "Sending..." : "Submit inquiry"}</button>
    <p role="status" aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>{message}</p>
  </form>;
}
