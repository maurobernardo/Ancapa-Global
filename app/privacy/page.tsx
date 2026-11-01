import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { company } from "@/lib/data";

export const metadata: Metadata = pageMeta({ title: "Privacy Policy", description: "How ANCAPA Global Partners handles the personal information you send through this website.", path: "/privacy" });

const updated = "November 2, 2026";
const analytics = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID || "");

export default function Privacy() {
  return <div className="container pt-8 pb-14 md:pt-10 md:pb-16">
    <div className="max-w-3xl">
      <p className="eyebrow">Legal</p>
      <h1 className="display text-5xl md:text-6xl text-navy mt-4">Privacy Policy</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">This policy explains what personal information we collect through ancapaglobal.com, why we collect it and what you can ask us to do with it. Last updated {updated}.</p>

      <div className="proseish mt-10">
        <h2>Who we are</h2>
        <p>{company.legal} ("ANCAPA", "we", "us") operates this website from {company.location}. We are the controller of the information described below.</p>

        <h2>What we collect</h2>
        <p>Only what you choose to send us through the contact form: your name, business email address, organization (optional), area of interest (optional) and your message.</p>
        <p>Like any website, our hosting provider records basic technical data when you visit, such as IP address, browser type, pages requested and time. We do not use this data to identify you personally. To limit spam, we also count requests per IP address for a few minutes in server memory, and we discard the count afterwards.</p>

        <h2>Cookies and tracking</h2>
        {analytics
          ? <p>We do not use advertising cookies or social media trackers. With your permission we use Google Analytics to count visits (pages viewed, approximate location, device and browser). It sets cookies only after you click Accept in the banner. You can decline, and you can change your choice at any time with the "Cookie settings" link in the footer. Google acts as our service provider for this. Our hosting and security provider may also set technical cookies needed to deliver the site and protect it from abuse.</p>
          : <p>We do not use advertising cookies, analytics scripts or social media trackers. Our hosting and security provider may set technical cookies needed to deliver the site and protect it from abuse.</p>}

        <h2>Why we use it</h2>
        <p>To read and answer your inquiry, to assess a possible partnership or project, and to keep the website secure. We do not use your details for unrelated marketing, and we do not sell your personal information.</p>

        <h2>Who sees it</h2>
        <p>Your inquiry is delivered by email to the ANCAPA team. The service providers that host the website and run our email handle it on our behalf. We may also disclose information where the law requires it. We do not share inquiries with third parties for their own purposes.</p>

        <h2>International transfers</h2>
        <p>We are based in the United States, and our providers may process data in other countries. If you contact us from outside the United States, your information will be transferred to and handled in the United States.</p>

        <h2>How long we keep it</h2>
        <p>We keep an inquiry for as long as we need it to deal with your request and any business relationship that follows, and for legitimate record keeping. After that we delete it. You can ask us to delete it sooner.</p>

        <h2>Your rights</h2>
        <p>Depending on where you live, you may ask to see the information we hold about you, correct it, delete it, object to how we use it or receive a copy. California residents have these rights under California law, and we will not treat you differently for using them. To make a request, send us a message through the <Link href="/contact" className="underline underline-offset-2">contact form</Link> and mention "privacy request". We may need to confirm your identity first.</p>

        <h2>Security</h2>
        <p>The website is served over HTTPS and we limit access to inquiries to the people who need them. No online service is completely secure, so please do not send sensitive information such as passwords or financial account numbers through the form.</p>

        <h2>Children</h2>
        <p>This website is for business use and is not directed at children. We do not knowingly collect information from them.</p>

        <h2>Changes</h2>
        <p>If we change this policy, we will update the date above. Material changes will appear on this page.</p>

        <h2>Contact</h2>
        <p>Questions about this policy: use the <Link href="/contact" className="underline underline-offset-2">contact form</Link>.</p>
      </div>
    </div>
  </div>;
}
