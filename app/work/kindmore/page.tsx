import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "KindMore Clinic: designing the whole clinic · NPSIN",
  description:
    "A real clinic designed end to end. I designed its LINE front door, its HIS, and the AI in its exam room; a doctor visit now takes about 20 minutes, rated 5.0★ across 170+ reviews.",
};

const data: CaseData = {
  slug: "/work/kindmore",
  cover: "/images/kindmore-front.jpg",
  coverFit: "cover",
  brandLogo: "/images/kindmore-logo.png",
  kicker: "Service design · Healthcare AI",
  title: "Designing the whole clinic",
  subhead:
    "What if a doctor visit were designed from scratch: the space, the staff workflow, the software, and the AI behind it? We built a real clinic to find out. I designed its digital backbone, and a visit now takes about 20 minutes, not a whole day.",
  thesis: "We didn't make the consultation faster. We made everything around it disappear.",
  tldr: [
    "A real, operating clinic designed end to end. I designed the LINE front door, the HIS that runs the clinic, and the AI scribe in its exam room.",
    "A visit takes about 20 minutes instead of a whole day, at 800+ visits a month and 5.0★ across 170+ Google reviews.",
  ],
  snapshot: [
    ["Role", "End-to-end Product & Service Designer (solo designer on the team)"],
    ["I owned", "LINE OA, the clinic HIS, PresScribe integration; led the service blueprint"],
    ["Team", "PM, 4 engineers, QA, doctors as clinical consultants; physical layout and business ops shaped together; measurement system by the data team"],
    ["Timeline", "Sep 2025 to Mar 2026 opening. Operating and expanding; design since handed off"],
  ],
  impact: ["About 20 min door to door", "800+ visits / month", "5.0★, 170+ Google reviews"],
  sections: [
    {
      n: "01",
      kicker: "The problem",
      title: "“Going to the doctor,” the phrase every Thai is tired of",
      blocks: [
        { t: "lead", text: "Everyone in Thailand knows this pain. A clinic visit means an hour in the waiting room; a hospital visit means taking the day off: queuing at registration, for vitals, for the doctor, to pay, for medicine. All of it for a consultation that lasts a few minutes." },
        { t: "p", text: "Our team had already built PresScribe, an AI scribe that frees doctors from note-taking, retrofitted into systems designed decades ago. That raised a bigger question:" },
        { t: "callout", text: "If we designed a clinic from day one, every touchpoint, with AI in the system from the start, how good could the experience get?" },
        { t: "p", text: "So we built one. Before designing anything, we mapped a traditional visit station by station, and the finding reframed the project: most of a patient's time isn't spent with the doctor; it's lost in the seams between stations. The challenge became making the visit fast without patients feeling rushed, without staff burning out, and without compromising clinical standards." },
      ],
    },
    {
      n: "02",
      kicker: "What I designed · The service",
      title: "The service, designed backstage-first",
      blocks: [
        { t: "lead", text: "I led the service blueprint and designed every digital touchpoint on it. The physical path was shaped by the wider team, and the two were designed to mirror each other: stations flow forward, never backward, because every backward step in space is a queue reborn." },
        { t: "hflow", items: [
          { label: "LINE OA", note: "Booked and known before arriving", icon: "chat" },
          { label: "Registration", note: "BP and prescreen at the same stop", icon: "clipboard" },
          { label: "Exam room", note: "Doctor already briefed; AI takes the note", emphasis: true, icon: "pulse" },
          { label: "Payment & pharmacy", note: "One counter, scan-checked, label printed", icon: "pill" },
        ] },
        { t: "sub", text: "LINE turns arrival into a relationship, not a form." },
        { t: "figrow", src: "/images/kindmore-line.png", side: "r", label: "LINE OA, the clinic's front door (dummy data)", text: "I designed the clinic's LINE OA as a two-way channel: patients book a queue, look up their own history and medication instructions, and ask questions; after the visit, the same line carries follow-ups and summaries. A returning patient arrives already known, greeted, not processed." },
        { t: "art", src: "/images/kindmore-line-flow.png", wide: true, label: "LINE OA screen flow, end to end: registration and OTP (with every error state), appointment booking, reminders, and history (dummy data)" },
        { t: "sub", text: "The doctor is briefed before the door opens." },
        { t: "p", text: "By the time a patient enters, the doctor has already seen the chief complaint, history, and vitals, surfaced by the HIS. And PresScribe runs in the room: one button, and the note writes itself for review. The roughly 8 minutes of consultation are genuinely quality time; the doctor's eyes never drop to a keyboard." },
        { t: "art", src: "/images/kindmore-blueprint.png", label: "Service blueprint: frontstage, backstage, and systems (customer journey → evidence → technology → support)" },
      ],
    },
    {
      n: "03",
      kicker: "What I designed · The HIS",
      title: "An HIS that works on day one",
      blocks: [
        { t: "lead", text: "Service blueprints don't run clinics; software does. I designed the HIS that staff and doctors use all day, with one bar: a new employee should be productive on their first day, because a small clinic can't afford weeks of training." },
        { t: "duo", items: [
          { icon: "layout", title: "Front desk: hierarchy follows frequency", text: "The screen is organized around the actions staff perform hundreds of times a day, not the database schema: today's queue, dispensing, and payment, front and center. Every menu staff can't act on is just noise, so the doctor's views simply aren't there." },
          { icon: "shield", title: "Medication card: safety under speed", text: "Safety is split across two hands on purpose: the doctor orders in the exam room, the front desk dispenses, and a barcode scan sits between them, so a wrong-box pick is caught by the system, not the patient." },
        ] },
        { t: "art", src: "/images/kindmore-exam-note.png", label: "The HIS exam room: vitals flagged against the patient's history, the structured clinical note with ICD-10 suggestions, and the AI differential at right (dummy data)" },
      ],
    },
    {
      n: "04",
      kicker: "What went wrong",
      title: "The form I got wrong, and what it taught me",
      blocks: [
        { t: "lead", text: "My first registration form was designed around Thai patients: a 13-digit national ID and every field a Thai record needs. Reality disagreed. The clinic drew far more foreign patients than we assumed, and for them most of the form didn't apply, so every registration paid a tax of irrelevant fields. The weekly numbers flagged it, and standing at the front desk confirmed it." },
        { t: "p", text: "I proposed restructuring rather than trimming: ask one question first, Thai or foreign, and let the answer collapse the form to only what's relevant. Fewer fields per patient, and the staff focus that used to scatter across a long form came back." },
        { t: "compare", before: { label: "V1 · one form for everyone", value: "Every field" }, after: { label: "V2 · ask nationality first", value: "2 paths" } },
        { t: "aside", value: "~30%", label: "faster registration than the clinics we surveyed" },
        { t: "p", text: "Measured against the clinics we surveyed, registration at KindMore now runs about 30% faster. The same weekly loop caught a second miss: the clinical-note field doctors found hard to work in during the first weeks. Same answer, structural UI rework, not training." },
        { t: "sub", text: "Refusing features is the hard part." },
        { t: "p", text: "Two of the best design decisions were things we didn't build. No on-site lab: one room, no space, so samples are drawn on site and sent next door, and results flow back into the record. And drug-stock management was pulled out of our platform entirely in favor of off-the-shelf software: a deliberate trade-off that cut what the team had to build and maintain. Both were team decisions; meeting the constraint beat pretending it wasn't there." },
      ],
    },
    {
      n: "05",
      kicker: "How we worked",
      title: "Every week, on the floor",
      blocks: [
        { t: "lead", text: "Every week I went on site: standing behind the front desk watching staff work the HIS, walking the real patient journey, interviewing patients, and collecting feedback from the doctors. The doctors set the clinical requirements and the flow as it should be; my job was to study how they actually behaved and design for that." },
        { t: "art", src: "/images/kindmore-examroom-photo.jpg", label: "The exam room in daily use: the HIS I designed, on the desk where the work actually happens (on-site visit)" },
        { t: "band", text: "The staff weren't confident with the system at first. The doctors used the exam room the moment they saw it." },
        { t: "p", text: "Both reactions taught me something. Doctor-side, the day-one bar held. Staff-side, confidence came through onboarding run by the customer-service team, and through the same weekly loop: every station is timestamped by the HIS, a data team turns the logs into measurements, and in the weekly review, with the director, PM, engineers, ML, marketing, and support in the room, everyone reports their own numbers and anyone can propose a fix. The registration split and the note-field rework both came out of that room." },
        { t: "p", text: "The loop also found the clinic's real bottleneck: every case, an illness, a wound dressing, a medical certificate, funnels through the doctor, and each takes a different length of time. When patients arrive together, the single exam room becomes a queue. No amount of UI fixes that; the team is reworking the process now. Measuring tells you which problems are design problems and which are not." },
      ],
    },
    {
      n: "06",
      kicker: "Proof",
      title: "Outcome",
      blocks: [
        { t: "compare", before: { label: "Same care · the hospital flow", value: "A whole day" }, after: { label: "Same care · the KindMore flow", value: "~20 min" } },
        { t: "metric", items: [
          { value: "5.0★", label: "Across 170+ Google reviews, four months at 100% five-star" },
          { value: "800+", label: "Visits per month, and 500+ new patients" },
          { value: "~1 in 4", label: "Reviewers mention speed, unprompted" },
        ] },
        { t: "journey", total: { value: "~20 min", label: "Door-to-door" }, items: [
          { label: "Registration", time: "~3 min", min: 3 },
          { label: "Wait for doctor", time: "~5 min", min: 5, tone: "wait" },
          { label: "Consultation", time: "~8 min", min: 8, tone: "accent" },
          { label: "Wait to pay", time: "~3 min", min: 3, tone: "wait" },
          { label: "Payment & pharmacy", time: "~2 min", min: 2 },
        ] },
        { t: "p", text: "A typical clinic visit costs an hour or more of waiting; a hospital visit costs the day. At KindMore, the consultation itself, at roughly 8 minutes, is nearly 40% of the visit. We didn't rush the doctor. We removed everything else." },
        { t: "p", text: "800+ visits a month, 500+ new patients, and 5.0★ across 170+ Google reviews, four consecutive months at 100% five-star. Unprompted, nearly a quarter of reviewers mention speed: “Fast service.” “Very welcoming.” “Friendly and kind throughout.”" },
        { t: "p", text: "Six months after opening, the clinic is operating profitably enough to expand: a second branch is underway, and I've handed the design system off to the next designer to carry it." },
      ],
    },
  ],
  learnings: [
    "Service design's ceiling isn't digital. The single exam room, and a process where every case funnels through the doctor, taught me that past a certain point the bottleneck moves from software to space and process. Next clinic, architecture and case-routing are in the first workshop, not the last.",
    "Design for the patients you get, not the patients you assumed. My “complete” one-form registration was built for Thai IDs; the real clinic drew foreigners daily. Completeness isn't the same as usable, and the fix is structural, not cosmetic.",
    "Fast and caring aren't opposites, but only if speed comes from the backstage. Patients praised both the speed and the warmth, which was the bet all along: remove the waiting, keep the human.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
