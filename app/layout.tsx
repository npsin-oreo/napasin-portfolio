import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Geist_Mono } from "next/font/google";
import { CONTACT } from "@/lib/cases";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

// A three-voice type system:
//   display: an editorial serif for headlines and pull-quotes (the authored, human voice)
//   sans:    friendly-but-formal humanist body for reading
//   mono:    precise numbers, labels, and eyebrows (the measured, machine voice)
const appDisplay = Newsreader({ variable: "--font-app-display", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const appSans = Plus_Jakarta_Sans({ variable: "--font-app-sans", subsets: ["latin"], display: "swap" });
const appMono = Geist_Mono({ variable: "--font-app-mono", subsets: ["latin"], display: "swap" });

const DESCRIPTION =
  "Napasin (O), Product & Service Designer, 7 years in. I design AI people actually trust, for healthcare and other high-stakes work.";

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

// Runs synchronously in <head> before first paint: applies the saved theme so
// there is no light/dark flash. The site defaults to light for first-time visitors.
const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${appDisplay.variable} ${appSans.variable} ${appMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-svh bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
