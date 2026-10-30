import path from "path";
import sharp from "sharp";

// Real pixel size of a /public image, read at build time. null when missing/unreadable.
export async function coverSize(cover?: string): Promise<{ width: number; height: number } | null> {
  if (!cover) return null;
  try {
    const { width, height } = await sharp(path.join(process.cwd(), "public", cover)).metadata();
    return width && height ? { width, height } : null;
  } catch {
    return null;
  }
}

// Natural aspect ratio of a cover. Falls back to 16:9.
export async function coverRatio(cover?: string): Promise<number> {
  const s = await coverSize(cover);
  return s ? s.width / s.height : 16 / 9;
}
