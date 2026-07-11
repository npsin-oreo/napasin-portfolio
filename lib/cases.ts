import type { CoverFit } from "@/components/cover-thumb";

export type CaseCard = {
  slug: string;
  tag: string;
  title: string;
  blurb: string;
  impact: string;
  repo?: string;
  cover?: string;
  coverFit?: CoverFit;
};

// The four main cases. Copy from content/homepage.md, kept in sync with the case files
// (HIS partner names anonymized per the PresScribe edit; DesignOps selftest count synced to 187).
export const CASES: CaseCard[] = [
  {
    slug: "/work/kindmore",
    tag: "Service design · Healthcare AI",
    title: "Designing the whole clinic",
    blurb:
      "What if a clinic were designed end to end from day one? A real clinic, real patients, and a doctor visit that takes about 20 minutes instead of a whole day.",
    impact: "About 20 minutes door to door, down from a whole day. 5.0★ from 170+ Google reviews.",
    cover: "/images/kindmore-cover.jpg",
    coverFit: "cover",
  },
  {
    slug: "/work/presscribe",
    tag: "AI product design · Clinical UX",
    title: "The best interface in the exam room is no interface",
    blurb:
      "An AI medical scribe that turns doctor and patient conversations into clinical notes, designed so doctors can give patients their full attention.",
    impact: "In production at national scale. 30,000+ consultations across 45 hospitals.",
    cover: "/images/presscribe-cover.png",
    coverFit: "contain",
  },
  {
    slug: "/work/virtual-agent",
    tag: "Brand identity · Enterprise AI",
    title: "Designing a voice, not a bot",
    blurb:
      "An AI voice-agent platform for enterprise contact centers. I designed everything from the logomark and bilingual brand guidelines to the agent-configuration platform and the ops dashboard.",
    impact: "Brand identity, TH/EN guidelines, agent platform, ops dashboard.",
    cover: "/images/virtual-agent-cover.jpg",
    coverFit: "cover",
  },
  {
    slug: "/work/designops",
    tag: "DesignOps · Open source",
    title: "Design judgment, encoded",
    blurb:
      "I encoded my design judgment into a pipeline a machine can enforce: a project brief goes in, a working prototype comes out, blocked by a 10-gate audit until it meets the bar.",
    impact: "18-stage pipeline, 10-gate audit, 187 of 187 selftests. A public repo you can clone and run.",
    repo: "https://github.com/npsin-oreo/DesignOps-process",
    cover: "/images/designops-cover.jpg",
    coverFit: "cover",
  },
];

export const MORE_WORK = {
  slug: "/work/scam-insight",
  title: "Scam Insight Dashboard: making invisible damage visible",
  blurb:
    "Aggregating scam intelligence across major organizations, with AI-assisted query and summarization. Data-heavy, public-facing, and mostly confidential.",
  tag: "Short case · Details on request",
  cover: "/images/scam-cover.jpg",
  coverFit: "cover" as CoverFit,
};

// Canonical list of every case (main + short), numbered 01 to 05.
// Used by the "Next up · More work" footer on each case page, which shows
// all cases except the one being read. Short single-word tags for the cards.
export type CaseRef = { slug: string; num: string; tag: string; title: string; cover?: string; coverFit?: CoverFit };

export const ALL_CASES: CaseRef[] = [
  { slug: "/work/kindmore", num: "01", tag: "Service", title: "Designing the whole clinic", cover: "/images/kindmore-cover.jpg", coverFit: "cover" },
  { slug: "/work/presscribe", num: "02", tag: "Product", title: "The best interface is no interface", cover: "/images/presscribe-cover.png", coverFit: "contain" },
  { slug: "/work/virtual-agent", num: "03", tag: "Brand", title: "Designing a voice, not a bot", cover: "/images/virtual-agent-cover.jpg", coverFit: "cover" },
  { slug: "/work/designops", num: "04", tag: "Process", title: "Design judgment, encoded", cover: "/images/designops-cover.jpg", coverFit: "cover" },
  { slug: "/work/scam-insight", num: "05", tag: "Data", title: "Making invisible damage visible", cover: "/images/scam-cover.jpg", coverFit: "cover" },
];

export const CONTACT = {
  email: "napasin.int@gmail.com",
  phone: "+66 63 209 7908",
  phoneHref: "tel:+66632097908",
  linkedin: "https://www.linkedin.com/in/napasin-intarayotha-76b7952b6",
  github: "https://github.com/npsin-oreo",
  resume: "/resume",
};
