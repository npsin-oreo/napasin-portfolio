import type { ComponentProps } from "react";

type P = ComponentProps<"svg">;
const base = (p: P) => ({ viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, ...p });

export function Check(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M5 13l4 4 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ArrowDown(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ArrowRight(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ArrowUpRight(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M7 17L17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function ChevronDown(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Download(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Quote(p: P) {
  return (
    <svg {...base(p)}>
      <path
        d="M9.4 6C6.4 6 4 8.5 4 11.6V18h6.2v-6.2H7.1c0-1.7 1-3 2.3-3.2V6zm10.6 0c-3 0-5.4 2.5-5.4 5.6V18h6.2v-6.2h-3.1c0-1.7 1-3 2.3-3.2V6z"
        fill="currentColor"
      />
    </svg>
  );
}
export function Sparkle(p: P) {
  return (
    <svg {...base(p)}>
      <path
        d="M12 2.5l1.9 5.6a3 3 0 001.9 1.9L21.5 12l-5.6 1.9a3 3 0 00-1.9 1.9L12 21.5l-1.9-5.6a3 3 0 00-1.9-1.9L2.5 12l5.6-1.9a3 3 0 001.9-1.9L12 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}
export function ImageFrame(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 16l4.5-4 4 3.5 3-2.5L20 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Compass(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.5l-2.2 5-4.8 2 2.2-5 4.8-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
export function Briefcase(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5M3 12.5h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function Code(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M8 9l-3.5 3L8 15M16 9l3.5 3L16 15M13.5 6l-3 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function GradCap(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 4L2.5 8.5 12 13l9.5-4.5L12 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 10.5V15c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5M20.5 9v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function Layers(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 12l9 4.5L21 12M3 16.5L12 21l9-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Search(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
export function Menu(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
export function Close(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
export function Mail(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Github(p: P) {
  return (
    <svg {...base(p)}>
      <path
        d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"
        fill="currentColor"
      />
    </svg>
  );
}
export function Linkedin(p: P) {
  return (
    <svg {...base(p)}>
      <path
        d="M6.94 5A1.94 1.94 0 113 5a1.94 1.94 0 013.94 0zM3.3 8.5h3.28V21H3.3V8.5zm5.42 0h3.14v1.71h.05c.44-.83 1.5-1.71 3.09-1.71 3.3 0 3.91 2.17 3.91 5v6.5h-3.28v-5.76c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V21H8.72V8.5z"
        fill="currentColor"
      />
    </svg>
  );
}
