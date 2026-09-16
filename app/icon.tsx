import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#08233a", borderRadius: 14 }}>
        <svg width="42" height="42" viewBox="0 0 64 64">
          <path d="M32 5 56 54H45L32 27 19 54H8L32 5Z" fill="#ffffff" />
          <path d="M14 48c12-17 25-24 39-21-7 4-13 10-18 21H14Z" fill="#b99758" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
