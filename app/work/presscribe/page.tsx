import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "PresScribe — Designing for attention · NPSIN",
  description:
    "An AI medical scribe that turns doctor–patient conversations into clinical notes. A case study in AI trust design: invisible during the consultation, accountable after it.",
};

const data: CaseData = {
  slug: "/work/presscribe",
  cover: "/images/presscribe-cover.png",
  kicker: "AI Product Design · Clinical UX",
  title: "The best interface in the exam room is no interface",
  subhead:
    "PresScribe is an AI medical scribe: a doctor presses one button, talks with the patient, and the clinical note writes itself — for the doctor to review, own, and sign. This is a case study in designing for trust.",
  thesis: "Clinical documentation is an attention-management problem, not a typing task.",
  snapshot: [
    ["Role", "UX/UI Designer"],
    ["Timeline", "Mid 2024 – early 2025 (release) · ongoing"],
    ["Team", "Project manager · Medical consultant · ML engineers"],
    ["Scope", "Product design · AI UX (trust, review, failure states) · Design system & tokens · EMR/HIS integration UX"],
  ],
  impact: [
    "In production at national scale",
    "30,000+ consultations · 45 hospitals",
    "App Store · Google Play",
  ],
  sections: [
    {
      n: "01",
      title: "We didn't start with a product. We started with a question.",
      blocks: [
        { t: "p", text: "The question was broad: where can AI actually help Thai healthcare? No product in hand, no solution looking for a problem — so we went to where the work happens. We spent time in hospitals, observing how doctors, nurses, and staff actually spend their shifts." },
        { t: "p", text: "The systemic insight surfaced quickly. Most large Thai hospitals run on HIS platforms that are 10–20 years old. Features have been bolted on for decades, but the UX has never been redesigned — so every new capability adds another screen, another click, another workaround. The burden lands on the people at the front line, every shift, every day." },
        { t: "quote", text: "Across every role we observed, the heaviest shared pain was the same: getting patient information into the system." },
        { t: "p", text: "PresScribe wasn't born from “we want to build AI.” It was born from a legacy system that couldn't be fixed from the inside — so we built a new layer on top of it." },
      ],
    },
    {
      n: "02",
      title: "Three users, three pains, one choice",
      blocks: [
        { t: "p", text: "We studied three user types, each fighting the system in a different way:" },
        { t: "table", rows: [
          ["Doctors (OPD / IPD / ER)", "Limited time vs. tasks per shift — heaviest of all: patient documentation"],
          ["Nurses (IPD)", "Shift handoffs + documenting many cases at once — high error risk; never at a desk"],
          ["Pharmacists", "Explaining medication patients can't fully remember — needs a take-home output"],
        ] },
        { t: "p", text: "We chose OPD doctors first, on two criteria. Impact — OPD sees the highest patient volume, so every minute saved multiplies across the most encounters. Feasibility — the exam room is a controlled environment: one doctor, one patient, a desk, predictable acoustics. The technology could succeed there first." },
        { t: "p", text: "The nurse track made it to wireframe prototypes tested with real nurses — far enough to see that the ward's hardware reality would betray the solution, so we shelved it. Knowing when not to build is a design decision too." },
      ],
    },
    {
      n: "03",
      title: "Speed wasn't the problem. Trust was.",
      blocks: [
        { t: "p", text: "Zoomed into the OPD exam room, the pain looked like a typing problem: doctors splitting attention between the patient and the EMR — half listening, half typing, eye contact lost to a screen. Some doctors took paper notes during consultations and retyped them after hours: documentation so hostile it created double work." },
        { t: "callout", text: "Doctors don't want to type faster. They want to stop thinking about typing at all. Clinical documentation is an attention-management problem, not a typing task." },
        { t: "p", text: "But an AI that writes clinical notes raises the stakes: a wrong note can mean wrong treatment. So the design question was never “how fast can AI generate a note?” — it was “how does a doctor come to trust a note they didn't write?”" },
        { t: "list", items: [
          "Invisible during the consultation — but controllable after it.",
          "Automation vs. accountability. AI drafts; the doctor signs.",
          "Clinical standards vs. personal style — standard enough to be safe, flexible enough to sound like the doctor who owns them.",
        ] },
      ],
    },
    {
      n: "04",
      title: "One button in the exam room",
      blocks: [
        { t: "p", text: "The interaction during a consultation is deliberately almost nothing: press start, talk, press stop. Every element we considered adding had to answer one question — does this pull the doctor's eyes back to a screen? If yes, it lost." },
        { t: "sub", text: "The screen that earns its emptiness" },
        { t: "p", text: "Early on, a live transcript scrolling on screen was one of the options — it seemed reassuring to show the AI “working.” Testing with doctors killed it. It failed in both directions of the room at once: doctors read the running text and lost focus on the patient — the exact attention drain the product exists to remove — and patients, watching their words appear as they spoke, grew anxious. So the transcript came out. The screen earned its emptiness by failing the version that wasn't empty." },
        { t: "list", items: [
          "Listening state — a quiet indicator with a live volume level: present enough to reassure the doctor it's hearing them, never covering the screen or drawing the eye.",
          "Privacy & consent, designed at the root — no audio is stored. PresScribe listens and summarizes; there is no recording to leak, archive, or subpoena. In the hospitals running it, that architecture shows: patients aren't anxious about the AI in the room.",
        ] },
        { t: "art", label: "Wireframe evolution — “screen full of transcript” → “almost empty”" },
      ],
    },
    {
      n: "05",
      title: "The moment the doctor takes back ownership",
      blocks: [
        { t: "p", text: "After the consultation, the AI's draft appears — and the design's job flips completely. During the visit we hid the system; now we must make it inspectable. A doctor won't sign what they can't verify quickly." },
        { t: "sub", text: "Verify fast" },
        { t: "p", text: "The flow is a checkpoint, not an auto-save: the moment the doctor ends the session and asks for the note, the AI's summary appears for review — read, recheck, correct — and only a deliberate action commits it to the record. Nothing reaches the system unseen; nothing is kept but the note (the audio is never stored, only listened to)." },
        { t: "sub", text: "Editing must be cheap" },
        { t: "p", text: "If fixing the AI's draft costs more than typing from scratch, the product dies in a week. So the summary lands editable, adjusted in place, then saved — review and edit are the same screen, one step before the record." },
        { t: "sub", text: "Style vs. standard" },
        { t: "p", text: "The safety net is standardization; the humanity is style — so the note format is the doctor's to choose. The same consultation can render as a short note, a long one, a narrative, or “the way this doctor writes.”" },
        { t: "sub", text: "Coding, suggested — not decided" },
        { t: "p", text: "From the diagnosis, PresScribe suggests the matching ICD-10 codes — the same contract as the note: the AI proposes, the doctor confirms. Coding, usually a separate after-hours chore, folds into the moment the note is signed." },
        { t: "sub", text: "Failure states" },
        { t: "p", text: "The real test of AI UX isn't when the AI is right — it's how fast the doctor catches it when it's wrong. In practice, unclear audio is rarely the failure; the model recovers most of it. The error that matters is a mistranscribed drug name — and the design's answer isn't a clever alarm, it's the review screen: the one kind of mistake that can do harm is caught in the one place every note must pass, before it's signed." },
        { t: "quote", text: "Every note passes through the doctor's eyes before it touches the medical record. AI drafts. The doctor decides." },
        { t: "art", label: "UI — review screen (dummy data)" },
      ],
    },
    {
      n: "06",
      title: "Designed to live inside systems that already exist",
      blocks: [
        { t: "p", text: "A product this good is worthless if it can't enter the hospital's workflow. Hospitals differ wildly in IT readiness — so instead of demanding integration, we designed an on-ramp:" },
        { t: "list", items: [
          "Level 1 — Copy & Paste. Works today, in any hospital, zero IT. The note is formatted to paste cleanly into any HIS field.",
          "Level 2 — API integration. Full workflow embedding through a major national HIS platform — the note flows into the EMR natively, which is how PresScribe reached hospital scale.",
          "Level 3 — Standalone app. For a doctor who wants it without waiting on any rollout — publicly available on the App Store and Google Play.",
        ] },
        { t: "p", text: "Designing the low-tech path was as deliberate as designing the high-tech one. Meeting hospitals where they are is a design decision, not a compromise." },
      ],
    },
    {
      n: "07",
      title: "Outcome",
      blocks: [
        { t: "p", text: "In production at national scale: 30,000+ consultations documented across 45 hospitals nationwide — reach won by migrating into the installed base of a major national HIS platform, plus a standalone app for doctors who adopt it on their own." },
        { t: "p", text: "Per case, documentation time drops by roughly 30–40% — enough that a doctor can see more patients in the same clinic, and the after-hours retyping simply stops." },
        { t: "p", text: "There's no polished testimonial — but in medicine the strongest endorsement isn't a quote, it's a referral: a teaching physician uses PresScribe in real practice and tells their own students to try it." },
        { t: "quote", text: "The reframe doesn't land for everyone. A minority of doctors are genuinely fast typists who feel no time saved, so they opt out. PresScribe wins where attention is the bottleneck — not where raw typing speed already is." },
        { t: "p", text: "And it runs every day inside KindMore Clinic — where consultations average 7:56 of undivided attention, and patients rate the experience 5.0★ across 175 reviews." },
      ],
    },
  ],
  learnings: [
    "Designing for AI means designing for doubt. The product's real surface isn't the happy path — it's the moment the AI is wrong and the design determines how fast a human catches it.",
    "Thai medical speech taught us what English-first ASR playbooks don't cover: code-switching between Thai and English medical terms is every sentence. The harder layer under that was dialect — hearing Thai as it's actually spoken, not the textbook version — all under a line doctors never let us cross: they wanted speed and accuracy, fully, at once.",
    "Prototype to learn, not to commit. The nurse track's rapid wireframes cost days, not months — and bought the clarity to stop before building something the ward's hardware couldn't support.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
