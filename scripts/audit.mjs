// Site audit against a running server: node scripts/audit.mjs http://localhost:3111
const base = process.argv[2] || "http://localhost:3111";
const xml = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...xml.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
const issues = []; const seenLinks = new Set(); let imgs = 0;
for (const path of urls) {
  const res = await fetch(base + path, { headers: { "Accept-Encoding": "gzip, br" } });
  const html = await res.text();
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const mains = (html.match(/<main[\s>]/g) || []).length;
  const noAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  imgs += (html.match(/<img[\s]/g) || []).length;
  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  let ldBad = 0; for (const m of ld) { try { JSON.parse(m[1]); } catch { ldBad++; } }
  const p = [];
  if (res.status !== 200) p.push("status " + res.status);
  if (title.length < 15 || title.length > 70) p.push(`title length ${title.length}: "${title}"`);
  if (desc.length < 70 || desc.length > 175) p.push(`description length ${desc.length}`);
  if (!canon) p.push("no canonical");
  if (h1 !== 1) p.push(`h1 count ${h1}`);
  if (mains !== 1) p.push(`main count ${mains}`);
  if (noAlt) p.push(`${noAlt} img without alt`);
  if (!ld.length) p.push("no JSON-LD"); if (ldBad) p.push(`${ldBad} invalid JSON-LD`);
  if (!/<html lang="en"/.test(html)) p.push("no html lang");
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) seenLinks.add(m[1]);
  console.log((p.length ? "FAIL " : "ok   ") + path.padEnd(70) + p.join("; "));
  if (p.length) issues.push(path);
}
let broken = 0;
for (const l of seenLinks) { if (/\.(webp|jpg|png|xml|txt|ico|jpeg)$/.test(l) || l.startsWith("/_next")) continue; const r = await fetch(base + l, { redirect: "manual" }); if (r.status >= 400) { broken++; console.log("BROKEN LINK", l, r.status); } }
const h = await fetch(base + "/");
console.log("\nheaders:", ["strict-transport-security", "x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy", "content-encoding"].map((k) => `${k}=${h.headers.get(k) ? "yes" : "NO"}`).join(" "));
console.log(`pages ${urls.length}, with issues ${issues.length}, internal links checked ${seenLinks.size}, broken ${broken}, <img> tags ${imgs}`);
