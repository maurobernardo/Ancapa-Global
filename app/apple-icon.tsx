import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#08233a" }}>
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path d="M32 5 56 54H45L32 27 19 54H8L32 5Z" fill="#ffffff" />
          <path d="M14 48c12-17 25-24 39-21-7 4-13 10-18 21H14Z" fill="#b99758" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
