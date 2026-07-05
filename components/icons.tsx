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
export function Download(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
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
