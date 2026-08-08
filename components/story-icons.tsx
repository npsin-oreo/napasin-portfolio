import type { ComponentProps } from "react";

// Small hand-drawn stroke icons used inside case-study content blocks (duo
// cards, callouts, hflow stations) as visual anchors that break up long text.
// Same drawing language as the site's UI icons: 24-grid, round caps, 1.7 stroke.

export type StoryIcon =
  | "lightbulb"
  | "chat"
  | "clipboard"
  | "pulse"
  | "pill"
  | "mic"
  | "doc"
  | "eye"
  | "shield"
  | "clock"
  | "target"
  | "layout";

const PATHS: Record<StoryIcon, React.ReactNode> = {
  lightbulb: (
    <>
      <path d="M12 3.5a5.5 5.5 0 013.2 9.9c-.8.6-1.2 1.3-1.2 2.1h-4c0-.8-.4-1.5-1.2-2.1A5.5 5.5 0 0112 3.5Z" />
      <path d="M10 18.5h4M10.8 21h2.4" />
    </>
  ),
  chat: (
    <>
      <path d="M6.5 4.5h11a2 2 0 012 2v7a2 2 0 01-2 2H10l-3.5 2.9v-2.9h-.5a2 2 0 01-2-2v-7a2 2 0 012-2Z" />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6.5" y="5" width="11" height="15.5" rx="2" />
      <path d="M9.5 5V4A1.5 1.5 0 0111 2.5h2A1.5 1.5 0 0114.5 4v1M9.5 11h5M9.5 14.5h5" />
    </>
  ),
  pulse: <path d="M3.5 12.5h3.6l2-5 3.8 9.5 2.4-4.5h5.2" />,
  pill: (
    <>
      <path d="M8.2 4.9a4.7 4.7 0 016.6 0l4.3 4.3a4.7 4.7 0 01-6.6 6.6l-4.3-4.3a4.7 4.7 0 010-6.6Z" />
      <path d="M8.8 8.8l6.4 6.4" />
    </>
  ),
  mic: (
    <>
      <rect x="9.5" y="3.5" width="5" height="9.5" rx="2.5" />
      <path d="M6 11.5a6 6 0 0012 0M12 17.5V21M9.5 21h5" />
    </>
  ),
  doc: (
    <>
      <path d="M7.5 3.5H13L18 8.5v11a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19.5v-14A1.5 1.5 0 017.5 3.5Z" />
      <path d="M13 3.5V8.5H18M9.5 13h5M9.5 16.5h5" />
    </>
  ),
  eye: (
    <>
      <path d="M3.5 12s3.2-5.5 8.5-5.5S20.5 12 20.5 12s-3.2 5.5-8.5 5.5S3.5 12 3.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5l6.5 2.5v5.2c0 4.3-2.8 7.4-6.5 9.3-3.7-1.9-6.5-5-6.5-9.3V6Z" />
      <path d="M9.3 12l2 2 3.5-3.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  layout: (
    <>
      <rect x="4.5" y="5" width="15" height="14" rx="2" />
      <path d="M4.5 9.5h15M10 9.5V19" />
    </>
  ),
};

export function StoryGlyph({
  name,
  ...p
}: { name: StoryIcon } & ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      {PATHS[name]}
    </svg>
  );
}
