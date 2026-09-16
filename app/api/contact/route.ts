import { NextRequest, NextResponse } from "next/server";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const name = clean(body.name, 120);
  const email = clean(body.email, 180).toLowerCase();
  const organization = clean(body.organization, 180);
  const interest = clean(body.interest, 120);
  const message = clean(body.message, 3000);
  const honeypot = clean(body.website, 200);

  if (honeypot) return NextResponse.json({ ok: true });
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid name, email and message." }, { status: 422 });
  }

  const payload = { name, email, organization, interest, message, source: "ancapa-website", receivedAt: new Date().toISOString() };

  // Production integration: set CONTACT_WEBHOOK_URL to HubSpot, Zapier, Make,
  // a CRM intake endpoint, or your own serverless function.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 502 });
  } else {
    console.info("ANCAPA inquiry", payload);
  }

  return NextResponse.json({ ok: true });
}
