// Builds the favicon set from public/icone.jpeg. Run: node scripts/generate-icons.mjs
import sharp from "sharp";
import fs from "fs";

const src = "public/icone.jpeg";
const png = (size) => sharp(src).resize(size, size, { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer();

fs.writeFileSync("app/icon.png", await png(512));        // <link rel="icon">
fs.writeFileSync("app/apple-icon.png", await png(180));  // iOS home screen
fs.writeFileSync("public/icon-192.png", await png(192)); // web manifest
fs.writeFileSync("public/icon-512.png", await png(512)); // web manifest

// favicon.ico with 16, 32 and 48 px PNG images inside
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const head = Buffer.alloc(6); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const dir = Buffer.concat(images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0); e.writeUInt8(sizes[i], 1); e.writeUInt8(0, 2); e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(img.length, 8); e.writeUInt32LE(offset, 12);
  offset += img.length; return e;
}));
fs.writeFileSync("app/favicon.ico", Buffer.concat([head, dir, ...images]));
for (const f of ["app/favicon.ico", "app/icon.png", "app/apple-icon.png", "public/icon-192.png", "public/icon-512.png"]) console.log(f.padEnd(24), Math.round(fs.statSync(f).size / 1024) + " KB");
