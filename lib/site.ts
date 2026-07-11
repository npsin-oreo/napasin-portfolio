// Canonical site origin, used for metadataBase, sitemap, robots, OG images, and
// JSON-LD. Set NEXT_PUBLIC_SITE_URL in the deploy env to the real domain; the
// fallback is only a sensible default for previews.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://napasin-portfolio.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Napasin Intarayotha";
export const SITE_TAGLINE = "Product & Service Designer";
