"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/reveal";

// Decorative hero background: the seven-year career thread drawn as a dotted
// journey-map path — Craft → Product → Service → Systems — arriving at the
// headline's claim. Each station is a POI-style circle holding a hand-drawn
// stroke icon for that stage (pen nib, screen, blueprint grid, gear, person).
// The dashed line is revealed by an animated solid path inside a mask
// (animating pathLength directly would normalize the dash pattern away).
// Static under reduced motion. Purely decorative: aria-hidden, no pointer
// events (the same arc is real, readable content on the About page).

const PATH =
  "M60,510 C180,490 300,470 420,430 C540,390 380,350 230,300 C110,262 280,215 430,175 C500,156 535,110 560,60";

// Icons are authored on a 24×24 grid and scaled into the node circle.
const ICONS = {
  pencil: (
    <>
      <path d="M14.5 5 L19 9.5 L9 19.5 L4.5 20 L5 15 Z" />
      <path d="M13 6.5 L17.5 11" />
    </>
  ),
  screen: (
    <>
      <rect x="4.5" y="6" width="15" height="12" rx="2" />
      <path d="M4.5 9.5 H19.5 M7.5 13.5 H12.5" />
    </>
  ),
  blueprint: <path d="M9.5 4.5 V19.5 M14.5 4.5 V19.5 M4.5 9.5 H19.5 M4.5 14.5 H19.5" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="1.2" />
      <path d="M17.4 12h2.2 M15.8 15.8l1.6 1.6 M12 17.4v2.2 M8.2 15.8l-1.6 1.6 M6.6 12H4.4 M8.2 8.2L6.6 6.6 M12 6.6V4.4 M15.8 8.2l1.6-1.6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="9" r="3" />
      <path d="M5.5 19 C5.5 15.2 8.4 13.4 12 13.4 C15.6 13.4 18.5 15.2 18.5 19" />
    </>
  ),
} as const;

type Station = {
  x: number;
  y: number;
  icon: keyof typeof ICONS;
  title: string;
  sub?: string;
  side: "l" | "r";
  end?: boolean;
};

const STATIONS: Station[] = [
  { x: 60, y: 510, icon: "pencil", title: "Craft", sub: "brand & packaging", side: "r" },
  { x: 420, y: 430, icon: "screen", title: "Product", sub: "PresScribe", side: "r" },
  { x: 230, y: 300, icon: "blueprint", title: "Service", sub: "KindMore Clinic", side: "l" },
  { x: 430, y: 175, icon: "gear", title: "Systems", sub: "DesignOps", side: "r" },
  { x: 560, y: 60, icon: "person", title: "the human side of AI", side: "l", end: true },
];

const R = 16; // station circle radius

export function JourneyLine() {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 560"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-y-4 right-0 hidden h-[calc(100%-2rem)] w-[44%] select-none md:block"
    >
      <defs>
        <mask id="journey-reveal">
          <motion.path
            d={PATH}
            fill="none"
            stroke="#fff"
            strokeWidth={14}
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
          />
        </mask>
      </defs>

      <g mask="url(#journey-reveal)">
        <path
          d={PATH}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="0.5 9"
          className="stroke-accent/70"
        />
      </g>

      {STATIONS.map((s, i) => {
        const dx = s.side === "r" ? R + 10 : -(R + 10);
        const anchor = s.side === "r" ? "start" : "end";
        return (
          <motion.g
            key={i}
            initial={reduce ? false : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: reduce ? 0 : 0.4 + (i / (STATIONS.length - 1)) * 2.0 }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <circle
              cx={s.x}
              cy={s.y}
              r={R}
              className={s.end ? "fill-bg stroke-accent" : "fill-bg stroke-accent/70"}
              strokeWidth={1.75}
            />
            <g
              transform={`translate(${s.x}, ${s.y}) scale(0.85) translate(-12, -12)`}
              fill="none"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-accent-text"
            >
              {ICONS[s.icon]}
            </g>
            {s.end ? (
              <text
                x={s.x + dx}
                y={s.y + 5}
                textAnchor={anchor}
                className="fill-fg font-display italic"
                fontSize={17}
              >
                {s.title}
              </text>
            ) : (
              <>
                <text
                  x={s.x + dx}
                  y={s.y + 1}
                  textAnchor={anchor}
                  className="fill-accent-text font-sans font-medium"
                  fontSize={13}
                >
                  {s.title}
                </text>
                <text x={s.x + dx} y={s.y + 16} textAnchor={anchor} className="fill-muted font-sans" fontSize={11}>
                  {s.sub}
                </text>
              </>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}
