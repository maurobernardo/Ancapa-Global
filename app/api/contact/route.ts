import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "ainguane@ancapaglobal.com";

async function sendEmail(payload: Record<string, string>) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return false;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: Number(SMTP_PORT) !== 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"ANCAPA Website" <${SMTP_USER}>`,
    to: CONTACT_TO,
    replyTo: payload.email,
    subject: `New inquiry from ${payload.name}${payload.organization ? ` (${payload.organization})` : ""}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Organization: ${payload.organization || "-"}`,
      `Area of interest: ${payload.interest || "-"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });
  return true;
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

  try {
    const emailed = await sendEmail(payload);

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store" });
      if (!response.ok) return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 502 });
    }

    if (!emailed && !webhook) console.info("ANCAPA inquiry", payload);
  } catch (error) {
    console.error("ANCAPA inquiry delivery failed", error);
    return NextResponse.json({ error: "Unable to send your inquiry right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
