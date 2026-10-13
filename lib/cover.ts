import path from "path";
import sharp from "sharp";

// Natural aspect ratio of a /public cover, read at build time. Falls back to 16:9.
export async function coverRatio(cover?: string): Promise<number> {
  if (!cover) return 16 / 9;
  try {
    const { width, height } = await sharp(path.join(process.cwd(), "public", cover)).metadata();
    return width && height ? width / height : 16 / 9;
  } catch {
    return 16 / 9;
  }
}
