import { ImageResponse } from "next/og";
import { company } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #08233a 0%, #061826 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="56" height="56" viewBox="0 0 64 64">
            <path d="M32 5 56 54H45L32 27 19 54H8L32 5Z" fill="#ffffff" />
            <path d="M14 48c12-17 25-24 39-21-7 4-13 10-18 21H14Z" fill="#b99758" />
          </svg>
          <div style={{ fontSize: 28, letterSpacing: 4, fontWeight: 700 }}>ANCAPA GLOBAL PARTNERS</div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 48, maxWidth: 980, lineHeight: 1.15 }}>
          Bridging U.S. Capital and Global Growth Markets.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#b99758", marginTop: 32, letterSpacing: 2 }}>
          {company.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
