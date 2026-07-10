import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Geist_Mono } from "next/font/google";
import "./globals.css";

// A three-voice type system:
//   display: an editorial serif for headlines and pull-quotes (the authored, human voice)
//   sans:    friendly-but-formal humanist body for reading
//   mono:    precise numbers, labels, and eyebrows (the measured, machine voice)
const appDisplay = Newsreader({ variable: "--font-app-display", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const appSans = Plus_Jakarta_Sans({ variable: "--font-app-sans", subsets: ["latin"], display: "swap" });
const appMono = Geist_Mono({ variable: "--font-app-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Napasin · Product & Service Designer",
  description:
    "Napasin (O), Product & Service Designer, 7 years in. I design AI people actually trust, for healthcare and other high-stakes work.",
};

// Runs synchronously in <head> before first paint: applies the saved theme
// (or the OS preference for first-time visitors) so there is no light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${appDisplay.variable} ${appSans.variable} ${appMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-svh bg-bg text-fg">{children}</body>
    </html>
  );
}
