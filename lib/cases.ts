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

// The four main cases — copy from content/homepage.md, kept in sync with the case files
// (HIS partner names anonymized per the PresScribe edit; selftest count updated to 176).
export const CASES: CaseCard[] = [
  {
    slug: "/work/kindmore",
    tag: "Service Design · Healthcare · AI-integrated ops",
    title: "Designing the whole clinic",
    blurb:
      "What if a clinic were designed end-to-end from day one? A real clinic, real patients — and a doctor visit that takes about 20 minutes instead of a whole day.",
    impact: "A whole day → ~20 min door-to-door · 5.0★ from 175 Google reviews",
    cover: "/images/kindmore-cover.jpg",
    coverFit: "cover",
  },
  {
    slug: "/work/presscribe",
    tag: "AI Product Design · Clinical UX",
    title: "The best interface in the exam room is no interface",
    blurb:
      "An AI medical scribe that turns doctor–patient conversations into clinical notes — designed so doctors can give patients their full attention.",
    impact: "In production at national scale · 30,000+ consultations across 45 hospitals",
    cover: "/images/presscribe-cover.png",
    coverFit: "contain",
  },
  {
    slug: "/work/virtual-agent",
    tag: "Brand Identity · Enterprise AI · Conversation Design",
    title: "Designing a voice, not a bot",
    blurb:
      "An AI voice-agent platform for enterprise contact centers — I designed everything from the logomark and bilingual brand guidelines to the agent-configuration platform and ops dashboard.",
    impact: "Brand identity · TH/EN guidelines · Agent platform · Ops dashboard",
    cover: "/images/virtual-agent-cover.jpg",
    coverFit: "cover",
  },
  {
    slug: "/work/designops",
    tag: "DesignOps · AI Workflow · Open Source",
    title: "Real gates, not vibes",
    blurb:
      "I encoded my design judgment into a pipeline a machine can enforce — from a project brief to a working prototype, blocked by a 10-gate audit until it meets the bar.",
    impact: "10-gate audit · 176/176 selftests · public repo — clone it and run it",
    repo: "https://github.com/npsin-oreo/DesignOps-process",
    cover: "/images/designops-cover.jpg",
    coverFit: "cover",
  },
];

export const MORE_WORK = {
  slug: "/work/scam-insight",
  title: "Scam Insight Dashboard — Making invisible damage visible",
  blurb:
    "Aggregating scam intelligence across major organizations, with AI-assisted query and summarization. Data-heavy, public-facing, and mostly confidential.",
  tag: "Short case · details on request",
  cover: "/images/scam-cover.jpg",
  coverFit: "cover" as CoverFit,
};

// Canonical list of every case (main + short), numbered 01–05.
// Used by the "Next up · More work" footer on each case page, which shows
// all cases except the one being read. Short single-word tags for the cards.
export type CaseRef = { slug: string; num: string; tag: string; title: string; cover?: string; coverFit?: CoverFit };

export const ALL_CASES: CaseRef[] = [
  { slug: "/work/kindmore", num: "01", tag: "Service", title: "Designing the whole clinic", cover: "/images/kindmore-cover.jpg", coverFit: "cover" },
  { slug: "/work/presscribe", num: "02", tag: "Product", title: "The best interface is no interface", cover: "/images/presscribe-cover.png", coverFit: "contain" },
  { slug: "/work/virtual-agent", num: "03", tag: "Brand", title: "Designing a voice, not a bot", cover: "/images/virtual-agent-cover.jpg", coverFit: "cover" },
  { slug: "/work/designops", num: "04", tag: "Process", title: "Real gates, not vibes", cover: "/images/designops-cover.jpg", coverFit: "cover" },
  { slug: "/work/scam-insight", num: "05", tag: "Data", title: "Making invisible damage visible", cover: "/images/scam-cover.jpg", coverFit: "cover" },
];

export const CONTACT = {
  email: "napasin.int@gmail.com",
  phone: "+66 63 209 7908",
  phoneHref: "tel:+66632097908",
  linkedin: "https://www.linkedin.com/in/napasin-intarayotha-76b7952b6",
  github: "https://github.com/npsin-oreo",
  resume: "/resume.pdf",
};
