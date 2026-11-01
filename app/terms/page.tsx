import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: "The terms for using the ANCAPA Global Partners website, including that its content is not investment advice or an offer of securities.",
  path: "/terms",
});

const updated = "November 2, 2026";

export default function Terms() {
  return <div className="container pt-8 pb-14 md:pt-10 md:pb-16">
    <div className="max-w-3xl">
      <p className="eyebrow">Legal</p>
      <h1 className="display text-5xl md:text-6xl text-navy mt-4">Terms of Use</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">These terms apply when you use ancapaglobal.com. By using the site you accept them. Last updated {updated}.</p>

      <div className="proseish mt-10">
        <h2>Who runs this site</h2>
        <p>{company.legal} ("ANCAPA", "we", "us"), based in {company.location}.</p>

        <h2>Not investment advice, not an offer</h2>
        <p>Everything on this site is general information about ANCAPA's services and our own market commentary. It is not investment, legal, tax or accounting advice, and it is not an offer to sell or a solicitation to buy any security or financial product. Any transaction would happen only under separate written agreements and in line with applicable law. Please get your own professional advice before you act on anything you read here.</p>

        <h2>Opportunities are indicative</h2>
        <p>The opportunities and platforms described here are high level and may change or end at any time. A listing does not mean a project is available, approved, financed or that ANCAPA has a mandate for it.</p>

        <h2>Our analysis and its sources</h2>
        <p>Articles in Insights are ANCAPA's independent analysis. Figures and facts come from the sources named in each article and may change after publication. We work to keep content accurate, but we do not promise that it is complete or current. Statements about the future are views, not predictions or guarantees.</p>

        <h2>Other organizations</h2>
        <p>Names and logos of other organizations, such as government agencies, development finance institutions and companies, appear only to describe public events, programs or sources. Their use does not mean affiliation with, sponsorship by or endorsement from those organizations.</p>

        <h2>Our content</h2>
        <p>The text, design, images and logos on this site belong to ANCAPA or its licensors. You may link to any page and quote short extracts with a clear credit to ANCAPA Global Partners and a link back. Anything beyond that, including copying whole articles, needs our written permission.</p>

        <h2>How you may use the site</h2>
        <p>Use the site lawfully and honestly. Do not try to break or overload it, probe it for weaknesses, copy it at scale with automated tools or send false or harmful content through the contact form.</p>

        <h2>Links to other sites</h2>
        <p>We link to outside sources for reference. We do not control them and are not responsible for what they say or how they handle your data.</p>

        <h2>No warranty and limits on liability</h2>
        <p>The site is provided "as is" and "as available". To the fullest extent the law allows, ANCAPA is not liable for losses that come from using the site or relying on its content, including indirect or consequential losses. Nothing here limits any right you have that the law does not allow us to limit.</p>

        <h2>Your information</h2>
        <p>How we handle personal information is explained in our <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>.</p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the State of California, United States, and disputes belong in the courts located in California, unless the law of your country gives you the right to go elsewhere.</p>

        <h2>Changes</h2>
        <p>We may update these terms. The date above shows the latest version, and continued use of the site means you accept the update.</p>

        <h2>Contact</h2>
        <p>Questions about these terms: use the <Link href="/contact" className="underline underline-offset-2">contact form</Link>.</p>
      </div>
    </div>
  </div>;
}
