import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "KindMore Clinic — Designing the whole clinic · NPSIN",
  description:
    "A real clinic designed end-to-end as a living sandbox: service design + AI turned a whole-day doctor visit into ~20 minutes, with a 5.0★ rating from 175 reviews.",
};

const data: CaseData = {
  slug: "/work/kindmore",
  cover: "/images/kindmore-cover.jpg",
  coverFit: "cover",
  brandLogo: "/images/kindmore-logo.png",
  kicker: "Service Design · Healthcare · AI-integrated operations",
  title: "Designing the whole clinic",
  subhead:
    "What if we could design a doctor visit from scratch — the space, the staff workflow, the software, and the AI behind it? We built a real clinic to find out. A visit now takes about 20 minutes, not a whole day.",
  snapshot: [
    ["Role", "UX/UI Designer"],
    ["Timeline", "Sep 2025 → opened Mar 2026 · operating & expanding"],
    ["Team", "Working closely with business, engineering, and clinic staff"],
    ["Scope", "Service design · HIS product design · AI integration (PresScribe) · Measurement system"],
  ],
  impact: ["~20 min door-to-door", "831 visits / month", "5.0★ · 175 Google reviews"],
  sections: [
    {
      n: "01",
      title: "“Going to the doctor” — the phrase every Thai is tired of",
      blocks: [
        { t: "p", text: "Everyone in Thailand knows this pain. A clinic visit means an hour in the waiting room. A hospital visit means taking the day off — queuing at registration, for vitals, for the doctor, to pay, for medicine. All of it for a consultation that lasts a few minutes." },
        { t: "p", text: "Our team had already built PresScribe, an AI scribe that frees doctors from note-taking. It worked — retrofitted into systems designed decades ago. That raised a bigger question:" },
        { t: "callout", text: "If we designed a clinic from day one — every touchpoint, with AI in the system from the start — how good could the experience get?" },
        { t: "p", text: "So we built one. KindMore Clinic (ใกล้หมอ) is a real, operating medical clinic — real patients, real staff, real doctors — that doubles as a living sandbox where service-design decisions get tested against reality and measured every day." },
      ],
    },
    {
      n: "02",
      title: "The time doesn't disappear in the exam room",
      blocks: [
        { t: "p", text: "Before designing anything, we mapped the journey of a traditional visit — station by station — and observed where time actually went. The finding reframed the whole project:" },
        { t: "quote", text: "Most of a patient's time isn't spent seeing the doctor. It's lost in the seams between stations — waiting for a queue number, for records, for medicine, to pay." },
        { t: "sub", text: "That turned “make the visit faster” into a sharper challenge:" },
        { t: "list", items: [
          "Make the visit fast — without patients feeling rushed,",
          "without staff burning out,",
          "without compromising clinical standards.",
        ] },
        { t: "p", text: "And it meant designing for two users at once. A beautiful patient flow that exhausts the staff collapses within months; an efficient back office that herds patients like cattle earns one star, not five." },
      ],
    },
    {
      n: "03",
      title: "Design the backstage before the frontstage",
      blocks: [
        { t: "quote", text: "We didn't make the consultation faster. We made everything around it disappear." },
        { t: "sub", text: "1 · LINE turns arrival into a relationship, not a form." },
        { t: "p", text: "The clinic's LINE OA is a two-way channel: patients book a queue, look up their own treatment history and medication instructions, and ask questions — and after the visit the same line carries follow-ups and summaries. A returning patient arrives already known, greeted, not processed. And a walk-in with no queue ahead starts right away — register, BP, prescreen, straight in to the doctor." },
        { t: "art", src: "/images/kindmore-line.png", phone: true, label: "LINE OA — the clinic's front door: book, history, and post-visit follow-up (dummy data)" },
        { t: "sub", text: "2 · Stations flow forward, never backward." },
        { t: "p", text: "The physical path mirrors the service path: registration → exam room → payment & pharmacy, in one direction. No patient walks back to a previous counter — because every backward step in space is a queue reborn." },
        { t: "sub", text: "3 · The doctor is briefed before the door opens." },
        { t: "p", text: "By the time a patient enters, the doctor has already seen the chief complaint, history, and vitals — surfaced by our HIS. The consultation starts at the problem, not at “so, what brings you here?”" },
        { t: "sub", text: "4 · AI takes the paperwork, the doctor takes the patient." },
        { t: "p", text: "PresScribe runs in the exam room: one button, and the note writes itself for review. That's why 7:56 of consultation is genuinely quality time — the doctor's eyes never drop to a keyboard." },
        { t: "art", src: "/images/kindmore-blueprint.png", label: "Service blueprint — frontstage, backstage & systems (customer journey → evidence → technology → support)" },
      ],
    },
    {
      n: "04",
      title: "An HIS that new staff can use on day one",
      blocks: [
        { t: "p", text: "Service blueprints don't run clinics — software does. I designed the HIS staff and doctors use all day, with one bar: a new employee should be productive on their first day, because a small clinic can't afford weeks of training." },
        { t: "sub", text: "Front desk: hierarchy follows frequency." },
        { t: "p", text: "The front-desk screen is organized around the actions staff perform hundreds of times a day, not the database schema. Front and center is the one continuous loop the desk lives in — today's queue, dispensing, and payment. Deliberately absent are the exam-room views the doctor works in: staff never touch them, and every menu they can't act on is just noise." },
        { t: "sub", text: "Medication order card: safety under speed." },
        { t: "p", text: "The safety is split across two hands on purpose: the doctor orders in the exam room, the front desk dispenses — with a barcode scan between them. Staff scan each drug against the order before handing it over, so a wrong-box pick is caught by the system, not the patient. And usage directions are editable per patient before the label prints fresh." },
        { t: "sub", text: "Refusing features is the hard part." },
        { t: "p", text: "The clearest “no” was an on-site lab: one room, no space, so instead of forcing a lab into a clinic that couldn't hold one, we designed around the gap. Samples are drawn on site and sent to a lab next door; results flow back into the record. Meeting the constraint beat pretending it wasn't there." },
        { t: "sub", text: "Iteration — the weekly loop, one concrete turn." },
        { t: "p", text: "Reviews run weekly, and one surfaced a slow spot: registration. The first design used one form for everyone, ordered to hold every field a Thai or a foreign patient might need — so every registration paid for fields that didn't apply. The fix was structural: ask one thing first — Thai or foreigner — and collapse the form to only what's relevant. Registration got about 30% faster." },
        { t: "art", src: "/images/kindmore-examroom.png", label: "The clinic HIS — exam room, with the staff modules (queue · dispensing · payment) in the rail and PresScribe's AI summary at right (dummy data)" },
      ],
    },
    {
      n: "05",
      title: "Measured every minute, every week",
      blocks: [
        { t: "p", text: "Launch wasn't the finish line — it was the start of the measurement loop. Every station is timed continuously. Every week, the numbers are reviewed, root causes analyzed, and findings fed back into the design." },
        { t: "p", text: "One example: the analysis showed ~76% of consultation delays trace to a single physical constraint — the clinic has one exam room. When patients arrive together, everything funnels through that one door, and the doctor absorbs the full mix through it: routine consults, minor procedures, and medical certificates, each a different length. No amount of UI polish fixes that; it became a facilities decision. Measuring tells you which problems are design problems and which are building problems." },
        { t: "art", src: "/images/kindmore-measure.jpg", label: "Every station timed continuously; reviewed weekly, root-caused, fed back into the design (illustrative)" },
      ],
    },
    {
      n: "06",
      title: "Outcome",
      blocks: [
        { t: "table", rows: [
          ["Registration", "3:05"],
          ["Wait for doctor", "4:40"],
          ["Consultation", "7:56"],
          ["Wait to pay", "2:45"],
          ["Payment & pharmacy", "2:33"],
          ["Door-to-door", "20:49"],
        ] },
        { t: "p", text: "A typical clinic visit costs an hour or more of waiting; a hospital visit costs the day. At KindMore, total non-consultation time is 12:52 — and the consultation itself, at 7:56, is nearly 40% of the visit. We didn't rush the doctor. We removed everything else." },
        { t: "p", text: "831 visits/month · 526 new patients · ~27.7 visits/day. And 5.0★ — every one of 175 Google reviews, four consecutive months at 100% five-star. Unprompted, 23.7% of reviewers mention speed: “Fast service.” “Very welcoming.” “Friendly and kind throughout.”" },
        { t: "p", text: "Six months after opening, the clinic is operating profitably enough to expand: a second branch is now underway." },
      ],
    },
  ],
  learnings: [
    "Service design's ceiling is physical, not digital. The single exam room taught me that past a certain point, the bottleneck moves from software to space. If I designed the next clinic, architecture would be in the first workshop, not the last.",
    "Standardization vs. front-line flexibility is a daily negotiation. Our own registration form taught it early: one universal flow, built to be “complete,” was slow for everyone until we let it flex to who the patient actually was. Completeness isn't the same as usable.",
    "Fast and caring aren't opposites — but only if speed comes from the backstage. Patients praised both the speed and the warmth, which was the bet all along: remove the waiting, keep the human.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
