// One-off image pass: every public image becomes WebP under 300 KB.
// Article covers also get a small JPEG copy in /public/og for social previews (LinkedIn, WhatsApp and others still prefer JPEG).
// Usage: node scripts/optimize-images.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const pub = path.resolve("public");
const LIMIT = 290 * 1024;
const kb = (n) => Math.round(n / 1024) + " KB";

const photos = ["Fundo.webp", "artigo1.png", "the-mine.jpg", "nova.jpeg", "mozambique.jpeg", "powering.jpg", "sadc.jpeg", "ing0.jpeg", "lobito.jpg", "lng-2.jpeg", "lng-3.jpeg"];
const logos = ["ancapa-logo.png", "ancapa-supply-logo.png", "ANCAPA_Energy_logo-removebg-preview.png", "ANCAPA_Resources_logo-removebg-preview.png", "ANCAPA_Digital_logo-removebg-preview.png", "ANCAPA_Capital_logo-removebg-preview.png", "ANCAPA_Infrastructure_logo-removebg-preview.png"];
const covers = new Set(["artigo1.png", "the-mine.jpg", "nova.jpeg", "mozambique.jpeg", "powering.jpg", "sadc.jpeg", "ing0.jpeg", "lobito.jpg"]);

async function toWebp(srcBuf, out, { maxWidth, logo }) {
  let pipeline = sharp(srcBuf).rotate();
  const meta = await pipeline.metadata();
  if (maxWidth && meta.width > maxWidth) pipeline = pipeline.resize({ width: maxWidth });
  const base = await pipeline.toBuffer();
  const qualities = logo ? [92, 85, 75] : [84, 78, 72, 66, 60, 54, 48];
  for (const q of qualities) {
    const buf = await sharp(base).webp({ quality: q, alphaQuality: 100, effort: 6 }).toBuffer();
    if (buf.length <= LIMIT) { fs.writeFileSync(out, buf); return { q, size: buf.length }; }
  }
  // last resort: shrink further
  const buf = await sharp(base).resize({ width: Math.round((meta.width || 1200) * 0.8) }).webp({ quality: 60, effort: 6 }).toBuffer();
  fs.writeFileSync(out, buf);
  return { q: "60@0.8x", size: buf.length };
}

async function toJpeg(srcBuf, out) {
  const base = await sharp(srcBuf).rotate().flatten({ background: "#ffffff" }).resize({ width: 1200, withoutEnlargement: true }).toBuffer();
  for (const q of [82, 76, 70, 64, 58]) {
    const buf = await sharp(base).jpeg({ quality: q, mozjpeg: true }).toBuffer();
    if (buf.length <= LIMIT) { fs.writeFileSync(out, buf); return { q, size: buf.length }; }
  }
}

fs.mkdirSync(path.join(pub, "og"), { recursive: true });
for (const name of [...photos, ...logos]) {
  const file = path.join(pub, name);
  if (!fs.existsSync(file)) { console.log("skip (missing)", name); continue; }
  const srcBuf = fs.readFileSync(file);
  const stem = path.parse(name).name;
  const out = path.join(pub, `${stem}.webp`);
  const isLogo = logos.includes(name);
  const r = await toWebp(srcBuf, out + (name === `${stem}.webp` ? ".tmp" : ""), { maxWidth: isLogo ? undefined : name === "Fundo.webp" ? 1920 : 1600, logo: isLogo });
  if (name === `${stem}.webp`) fs.renameSync(out + ".tmp", out);
  let line = `${name.padEnd(46)} ${kb(srcBuf.length).padStart(8)} -> ${stem}.webp ${kb(r.size).padStart(7)} (q${r.q})`;
  if (covers.has(name)) { const j = await toJpeg(srcBuf, path.join(pub, "og", `${stem}.jpg`)); line += `  | og/${stem}.jpg ${kb(j.size)}`; }
  console.log(line);
  if (name !== `${stem}.webp`) fs.unlinkSync(file);
}
