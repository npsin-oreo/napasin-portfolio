import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { CONTACT } from "@/lib/cases";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

// A two-voice type system:
//   display: Newsreader (with its optical-size axis, so display sizes get the
//            display cut) — all h1–h3, pull quotes, thesis lines, featured
//            titles, decorative numerals, big stat values, and single-word
//            italic emphasis
//   sans:    Plus Jakarta Sans — prose, UI, buttons, nav, labels, small
//            numbers (tabular-nums)
const appDisplay = Newsreader({ variable: "--font-app-display", subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], display: "swap" });
const appSans = Plus_Jakarta_Sans({ variable: "--font-app-sans", subsets: ["latin"], display: "swap" });

const DESCRIPTION =
  "Napasin (O), Product & Service Designer. Seven years in, four in healthcare AI. I design the human side of AI: systems doctors and patients trust.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Napasin · Product & Service Designer",
    template: "%s",
  },
  description: DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "Napasin Intarayotha",
    "product designer",
    "service designer",
    "AI healthcare design",
    "UX designer Bangkok",
    "DesignOps",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${SITE_NAME} · Product & Service Designer`,
    url: SITE_URL,
    title: "Napasin · Product & Service Designer",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Napasin · Product & Service Designer",
    description: DESCRIPTION,
  },
};

// Person structured data, so search engines read the identity, role, and profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "O",
  jobTitle: "Product & Service Designer",
  description: DESCRIPTION,
  url: SITE_URL,
  email: CONTACT.email,
  address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
  sameAs: [CONTACT.linkedin, CONTACT.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${appDisplay.variable} ${appSans.variable} antialiased`}
    >
      <body className="min-h-svh bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <CursorGlow />
      </body>
    </html>
  );
}
