import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "PresScribe: designing for attention · NPSIN",
  description:
    "An AI medical scribe I designed end to end, research to UI to design system. Invisible during the consultation, accountable after it. 30,000+ consultations across 40+ hospitals.",
};

const data: CaseData = {
  slug: "/work/presscribe",
  cover: "/images/presscribe-cover.png",
  brandLogo: "/images/presscribe-logo.png",
  kicker: "AI product design · Clinical UX",
  title: "The best interface in the exam room is no interface",
  subhead:
    "PresScribe is an AI medical scribe: a doctor presses one button, talks with the patient, and the clinical note writes itself, for the doctor to review, own, and sign. I designed it end to end. This is a case study in designing for trust.",
  thesis: "Clinical documentation is an attention-management problem, not a typing task.",
  tldr: [
    "An AI medical scribe: one button, a natural conversation, and the note writes itself for the doctor to review, own, and sign.",
    "I owned the design end to end, from field research to every screen to the design system. In production at national scale: 30,000+ consultations across 40+ hospitals.",
  ],
  snapshot: [
    ["Role", "End-to-end Product & Service Designer (solo designer)"],
    ["I owned", "All UX and UI, the design system, note formats and ICD-10 flow, integration UX; field research alongside the team"],
    ["Team", "The same crew behind KindMore: PM, ML engineers, QA, and doctors as clinical consultants"],
    ["Timeline", "Mid 2024 to early 2025 release. In production; UX/UI handed off stable, the ML still evolving"],
  ],
  impact: [
    "In production at national scale",
    "30,000+ consultations, 40+ hospitals",
    "App Store and Google Play",
  ],
  sections: [
    {
      n: "01",
      kicker: "The problem",
      title: "We didn't start with a product. We started with a question.",
      blocks: [
        { t: "lead", text: "The question was broad: where can AI actually help Thai healthcare? No product in hand, no solution looking for a problem. So I went to where the work happens, into hospitals with our manager team and consulting doctors, observing how doctors, nurses, and staff actually spend their shifts." },
        { t: "p", text: "The systemic insight surfaced quickly. Most large Thai hospitals run on HIS platforms 10 to 20 years old: features bolted on for decades, UX never redesigned, and every new capability another screen, another click, another workaround. The burden lands on the people at the front line, every shift." },
        { t: "quote", text: "Across every role we observed, the heaviest shared pain was the same: getting patient information into the system." },
      ],
    },
    {
      n: "02",
      kicker: "The choice",
      title: "Three users, three pains, one choice",
      blocks: [
        { t: "table", rows: [
          ["Doctors (OPD / IPD / ER)", "Limited time against tasks per shift. Heaviest of all: patient documentation"],
          ["Nurses (IPD)", "Shift handoffs plus documenting many cases at once. High error risk, never at a desk"],
          ["Pharmacists", "Explaining medication patients can't fully remember. Needs a take-home output"],
        ] },
        { t: "p", text: "We chose OPD doctors together, pushing for the user group where the impact multiplies: OPD sees the highest patient volume, and the exam room is a controlled environment where the technology could succeed first." },
        { t: "p", text: "The nurse track I prototyped went as far as wireframes tested with real nurses, far enough to see the ward's hardware reality would betray the solution, so we shelved it. A few days of prototyping bought the clarity to stop. Knowing when not to build is a design decision too." },
        { t: "art", src: "/images/presscribe-research.png", label: "Nurse-track research: journey map, service blueprint, and flow (CORRECT framework)" },
      ],
    },
    {
      n: "03",
      kicker: "The reframe",
      title: "Speed wasn't the problem. Trust was.",
      blocks: [
        { t: "lead", text: "Zoomed into the OPD exam room, the pain looked like a typing problem: doctors splitting attention between the patient and the EMR, eye contact lost to a screen. Some took paper notes during consultations and retyped them after hours, documentation so hostile it created double work." },
        { t: "callout", text: "Doctors don't want to type faster. They want to stop thinking about typing at all." },
        { t: "p", text: "But an AI that writes clinical notes raises the stakes: a wrong note can mean wrong treatment. So my design question was never “how fast can AI generate a note?” It was “how does a doctor come to trust a note they didn't write?” Three tensions shaped every screen:" },
        { t: "duo", items: [
          { icon: "eye", title: "Invisible, then controllable", text: "Invisible during the consultation, but fully inspectable and controllable the moment it ends." },
          { icon: "doc", title: "AI drafts, the doctor signs", text: "Automation against accountability: nothing reaches the record without a doctor's deliberate action." },
          { icon: "chat", title: "Standard, in the doctor's voice", text: "Safe enough to standardize, flexible enough to sound like the doctor who owns the note." },
        ] },
      ],
    },
    {
      n: "04",
      kicker: "What I designed · In the room",
      title: "One button, and the feature I cut before writing a line of code",
      blocks: [
        { t: "lead", text: "The interaction during a consultation is deliberately almost nothing: press start, talk, press stop. Every element I considered adding had to answer one question: does this pull the doctor's eyes back to a screen? If yes, it lost." },
        { t: "sub", text: "The live transcript that died in concept reviews." },
        { t: "p", text: "My early concepts included a live transcript scrolling on screen; it seemed reassuring to show the AI working. I walked the concept through doctor after doctor, and every one of them said the same thing: patients would be uneasy watching their own words appear as they spoke. The transcript came out before a line of it was built. The screen earned its emptiness in those conversations." },
        { t: "aside", value: "0", label: "audio recordings stored, by design" },
        { t: "list", items: [
          "Listening state: a quiet indicator with a live volume level, enough to reassure the doctor it's hearing, never drawing the eye.",
          "Privacy at the root: no audio is stored. PresScribe listens and summarizes; there is no recording to leak, archive, or subpoena.",
        ] },
        { t: "art", src: "/images/presscribe-flow.png", label: "PresScribe OPD: end-to-end user flow, wired screen by screen (dummy data)" },
      ],
    },
    {
      n: "05",
      kicker: "What I designed · After the room",
      title: "The moment the doctor takes back ownership",
      blocks: [
        { t: "lead", text: "After the consultation, the design's job flips completely: during the visit I hid the system; now it must be inspectable. A doctor won't sign what they can't verify quickly." },
        { t: "hflow", items: [
          { label: "Press start", note: "One button, then the screen steps back", icon: "mic" },
          { label: "Talk", note: "AI listens and summarizes; no audio stored", icon: "chat" },
          { label: "Draft appears", note: "The note writes itself, editable in place", icon: "doc" },
          { label: "Review & sign", note: "Nothing reaches the record unseen", emphasis: true, icon: "eye" },
          { label: "Medical record", note: "Note and ICD-10 codes, doctor-owned", icon: "clipboard" },
        ] },
        { t: "sub", text: "One conversation, every doctor's format." },
        { t: "p", text: "Testing the drafts revealed there is no such thing as “the note”: some doctors write short, some long, some narrative, and each was right for how they work. So the format became the doctor's to choose; the same consultation renders the way each doctor actually writes. Review and edit live on one screen, one step before the record, because if fixing the draft costs more than typing, the product dies in a week." },
        { t: "sub", text: "Designing at the model's limits." },
        { t: "p", text: "Working beside the ML team meant every screen was a negotiation with what the model could honestly do. Where it had limits, I designed around them; where a limit would cost the UX that mattered, we worked the problem together until it didn't. The failure that matters most, a mistranscribed drug name, is caught not by a clever alarm but by the one gate every note must pass: the review screen." },
        { t: "band", text: "Every note passes through the doctor's eyes before it touches the medical record. AI drafts. The doctor decides." },
        { t: "art", src: "/images/presscribe-screens.png", label: "PresScribe OPD app screens: recording, review, and summary (dummy data)" },
      ],
    },
    {
      n: "06",
      kicker: "Integration",
      title: "Designed to live inside systems that already exist",
      blocks: [
        { t: "lead", text: "A product this good is worthless if it can't enter the hospital's workflow, and hospitals differ wildly in IT readiness. So instead of demanding integration, I designed an on-ramp, reviewed level by level with the manager team:" },
        { t: "steps", items: [
          { label: "Copy and paste", text: "Works today, in any hospital, zero IT. The note is formatted to paste cleanly into any HIS field." },
          { label: "API integration", text: "Full embedding through a major national HIS platform, piloted in the OPD of a public hospital serving a heavy universal-coverage caseload. This is how PresScribe reached hospital scale." },
          { label: "Standalone app", text: "For a doctor who wants it without waiting on any rollout, on the App Store and Google Play." },
        ] },
        { t: "p", text: "Designing the low-tech path was as deliberate as the high-tech one. Meeting hospitals where they are is a design decision, not a compromise." },
      ],
    },
    {
      n: "07",
      kicker: "Proof",
      title: "Outcome",
      blocks: [
        { t: "metric", items: [
          { value: "30,000+", label: "Consultations documented" },
          { value: "40+", label: "Hospitals nationwide" },
          { value: "30-40%", label: "Less documentation time per case" },
        ] },
        { t: "p", text: "In production at national scale: 30,000+ consultations across 40+ hospitals, reach won by migrating into the installed base of a national HIS platform, plus a standalone app for doctors who adopt it on their own." },
        { t: "p", text: "Documentation time per case drops by roughly 30 to 40%, and the number that makes it real: doctors on PresScribe take on more cases per day than they could before, and the after-hours retyping simply stops." },
        { t: "p", text: "There's no polished testimonial, but in medicine the strongest endorsement is a referral: a teaching physician uses PresScribe in real practice and tells their own students to try it." },
        { t: "quote", text: "The reframe doesn't land for everyone. A minority of doctors are genuinely fast typists who feel no time saved, so they opt out. PresScribe wins where attention is the bottleneck." },
        { t: "p", text: "It runs every day inside KindMore Clinic, where consultations average roughly 8 minutes of undivided attention and patients rate the experience 5.0★ across 170+ reviews. The UX/UI has since been handed off stable; the ML underneath keeps evolving." },
      ],
    },
  ],
  learnings: [
    "Designing for AI means designing for doubt. The product's real surface isn't the happy path; it's the moment the AI is wrong and the design determines how fast a human catches it.",
    "Thai medical speech taught us what English-first ASR playbooks don't cover: code-switching between Thai and English medical terms in every sentence, and dialect underneath, all while doctors demanded speed and accuracy fully, at once.",
    "Prototype to learn, not to commit. The nurse track's rapid wireframes cost days, not months, and bought the clarity to stop before building something the ward's hardware couldn't support.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
