"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useId, useState } from "react";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const MESSAGES: Record<Field, string> = {
  name: "Please enter your name.",
  email: "Enter a valid email address, for example name@company.com.",
  message: "Please tell us a little about what you are exploring.",
};

function validate(data: Record<string, FormDataEntryValue>): Errors {
  const errors: Errors = {};
  if (String(data.name || "").trim().length < 2) errors.name = MESSAGES.name;
  if (!/^\S+@\S+\.\S+$/.test(String(data.email || "").trim())) errors.email = MESSAGES.email;
  if (String(data.message || "").trim().length < 10) errors.message = MESSAGES.message;
  return errors;
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const fieldProps = (f: Field) => ({
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${uid}-${f}` : undefined,
  });
  const fieldError = (f: Field) => errors[f] && <p id={`${uid}-${f}`} className="mt-1.5 text-sm text-red-700">{errors[f]}</p>;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const found = validate(data);
    setErrors(found);
    setServerError("");
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Unable to submit inquiry.");
      setStatus("success");
      form.reset();
      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setServerError(error instanceof Error ? error.message : "Unable to submit inquiry.");
    }
  }

  // Clear a field's error as soon as the person starts fixing it
  function onInput(e: FormEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name as Field;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return <form onSubmit={submit} onInput={onInput} noValidate className="grid gap-4">
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "sm:grid-cols-2"}`}>
      <div><input required name="name" aria-label="Full name" autoComplete="name" maxLength={120} placeholder="Full name" className="field" {...fieldProps("name")} />{fieldError("name")}</div>
      <div><input required type="email" name="email" aria-label="Business email" autoComplete="email" maxLength={180} placeholder="Business email" className="field" {...fieldProps("email")} />{fieldError("email")}</div>
    </div>
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "sm:grid-cols-2"}`}>
      <input name="organization" aria-label="Organization" autoComplete="organization" maxLength={180} placeholder="Organization" className="field" />
      <select name="interest" aria-label="Area of interest" className="field" defaultValue="">
        <option value="" disabled>Area of interest</option>
        <option>Investment opportunity</option><option>Capital partnership</option><option>Energy</option><option>Resources</option><option>Digital</option><option>Infrastructure</option><option>Supply and procurement</option><option>Market entry</option><option>Other</option>
      </select>
    </div>
    <div><textarea required name="message" aria-label="Your message" maxLength={3000} placeholder="Tell us what you are exploring..." rows={compact ? 4 : 6} className="field resize-y" {...fieldProps("message")} />{fieldError("message")}</div>
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    <p className="text-xs leading-5 text-slate-500">We use your details only to reply to this inquiry. See our <Link href="/privacy" className="underline underline-offset-2 hover:text-navy">Privacy Policy</Link>.</p>
    <button disabled={status === "sending" || status === "success"} className="btn btn-dark w-fit disabled:opacity-60">{status === "sending" ? "Sending..." : "Submit inquiry"}</button>
    <p role="alert" className="text-sm text-red-700">{serverError}</p>
  </form>;
}
