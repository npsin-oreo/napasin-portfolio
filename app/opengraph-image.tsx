import { ImageResponse } from "next/og";

export const alt = "Napasin Intarayotha · Product & Service Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide social card. Warm near-black canvas, mint accent, the headline
// claim, and the three numbers that back it. Flexbox only (Satori constraint).
export default function Image() {
  const bg = "#141613";
  const fg = "#eceee9";
  const muted = "#a2a69e";
  const accent = "#4cc296";
  const border = "#2c302a";

  const proof: [string, string][] = [
    ["30,000+", "AI-scribed consultations"],
    ["20 min", "clinic visit, from a whole day"],
    ["5.0 / 5", "rating from 170+ reviews"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, letterSpacing: -0.5, color: fg }}>
          NPSIN
          <span style={{ color: accent }}>.</span>
          <span style={{ marginLeft: 20, color: muted, fontSize: 24 }}>Product &amp; Service Designer</span>
        </div>

        <div style={{ display: "flex", fontSize: 88, lineHeight: 1.05, fontWeight: 600, color: fg, letterSpacing: -2 }}>
          I design AI people actually trust.
        </div>

        <div style={{ display: "flex", gap: 20, borderTop: `1px solid ${border}`, paddingTop: 28 }}>
          {proof.map(([stat, label]) => (
            <div key={stat} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <span style={{ fontSize: 44, fontWeight: 600, color: fg, letterSpacing: -1 }}>{stat}</span>
              <span style={{ fontSize: 22, color: muted, marginTop: 6 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
