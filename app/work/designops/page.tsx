import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "DesignOps Pipeline — Real gates, not vibes · NPSIN",
  description:
    "I encoded my design judgment into a pipeline a machine can enforce: a project brief to a working prototype, blocked by a 10-gate audit until it meets the bar. Open source — clone it and run it.",
};

const data: CaseData = {
  kicker: "DesignOps · AI workflow · Open source",
  title: "Real gates, not vibes",
  subhead:
    "AI can produce design work 10× faster — and produce design slop 10× faster. So I encoded my judgment into a system: a pipeline that takes a project brief to a working prototype, and blocks anything that doesn't pass a 10-gate audit. It's open source. Don't take my word for it — clone it and run it.",
  thesis: "The question isn't “how do we make AI generate better?” It's “how do we make sure bad work can't reach handoff?” Stop trusting the output. Gate the output.",
  snapshot: [
    ["Role", "Designer & pipeline architect"],
    ["Stack", "Claude Code · Next.js + shadcn/ui · Python · Playwright · Token Studio"],
    ["Status", "Open source — public repo, CI on every PR"],
    ["Scope", "Brief → spec → prototype, with a runnable audit as the gate"],
  ],
  impact: ["10-gate audit", "176/176 selftests", "28 scripts", "CI on every PR"],
  repo: "https://github.com/npsin-oreo/DesignOps-process",
  sections: [
    {
      n: "01",
      title: "AI does design work 10× faster — and produces slop 10× faster",
      blocks: [
        { t: "p", text: "The pain came from real projects. The distance from a ten-page brief to a design brief to a prototype a developer can build on used to cost weeks. AI collapsed that time — and exposed a new problem: prototypes that look finished but aren't. Contrast that fails accessibility. Tokens that drift from the design system. Generic default styling — what I call design slop. And worst of all: AI that invents user insights nobody ever researched." },
        { t: "quote", text: "Think of it as an assembly line: every station does one job, and no station passes work forward until it's verified correct. Not reviewed — verified. By a script, not a glance." },
      ],
    },
    {
      n: "02",
      title: "If eyeball review doesn't scale — script the review",
      blocks: [
        { t: "p", text: "Three principles run through every stage of the pipeline." },
        { t: "sub", text: "1 · Every stage produces an artifact, and every artifact has a validator." },
        { t: "p", text: "Each step outputs structured JSON, and each JSON faces its own Python gate. Nothing passes because it “looks OK.” Nothing is assumed." },
        { t: "sub", text: "2 · Never trust the agent." },
        { t: "p", text: "Anything checkable gets recalculated from scratch. The validator doesn't ask the AI whether contrast passes WCAG — it recomputes contrast from the hex values itself. It doesn't trust that a rich design exists because tokens exist — it scores richness from screenshots of the actual rendered page. My answer to “how do you trust AI?” is: you don't. You verify." },
        { t: "sub", text: "3 · Honesty-gated research." },
        { t: "p", text: "Every UX claim must declare its evidence mode. If there's no real input — no interviews, no data — the system forces the label “inferred” or “hypothesis,” and the validator rejects research that cites evidence it doesn't have. AI is not allowed to fabricate user research. The thing the industry fears most about AI design is the thing this pipeline structurally forbids." },
      ],
    },
    {
      n: "03",
      title: "Ten doors that bad work can't walk through",
      blocks: [
        { t: "p", text: "At the end of the line stands the audit: ten gates, each a script, each with the power to block handoff — exit 1, the pipeline physically stops. Three of them tell the story best." },
        { t: "sub", text: "Gate 2 — WCAG, recalculated." },
        { t: "p", text: "Contrast is recomputed from the actual color values — oklch converted to sRGB, checked in both light and dark mode. Why not use the values the AI reports? Because the AI is the thing being audited. An auditor that asks the auditee for the verdict isn't an auditor." },
        { t: "sub", text: "Gate 6 — Fidelity." },
        { t: "p", text: "Checks that the aesthetic committed in the design phase actually survived into the build — theme, fonts, layout axis. Its job is catching the quiet failure: AI regressing to neutral defaults while nobody watched." },
        { t: "sub", text: "Gate 10 — Render structure." },
        { t: "p", text: "Some failures are invisible in source: a control that renders the wrong size, a desktop layout stuck in a single mobile column — correct code that still ships broken. Only rendering catches them, so Playwright renders every prototype at mobile and desktop widths and audits the actual pixels. Good gates aren't designed from theory; they're scar tissue from real failures." },
        { t: "p", text: "Beyond pass/fail, every prototype gets a scored critique: seven weighted dimensions, Nielsen's ten heuristics, a banned-defaults list — and a judge pass with one hard rule: beauty can't rescue broken. If the judge fails a prototype on function, its score caps at 2.0 no matter how good it looks. And one script is the only door out of the pipeline — the audit can't be skipped, and can't be forgotten." },
        { t: "art", label: "Audit report — a build blocked at the gate" },
      ],
    },
    {
      n: "04",
      title: "A system that audits itself",
      blocks: [
        { t: "p", text: "A pipeline that audits design work should survive an audit of its own. The repo carries 176 self-tests, run in CI on every pull request — the gates are themselves gated. It builds against a real design-system package — imported, not copy-pasted — the same token-architecture discipline that makes multi-product theming possible." },
        { t: "p", text: "One constraint shaped the whole token workflow: our Figma plan has no Variables REST API. Instead of waiting for a bigger plan, I designed the pipeline around Token Studio as the source of truth — tokens flow from JSON to code to Figma without ever needing the missing API. The sample brief in the repo isn't a toy either: it's a Thai-language brief, proving the pipeline works beyond English and connecting it straight back to the healthcare work it grew out of." },
      ],
    },
    {
      n: "05",
      title: "Outcome — verifiable in public",
      blocks: [
        { t: "p", text: "This case needs no permission gates and no redacted numbers. The outcome is the repository itself:" },
        { t: "list", items: [
          "Open source, public, runnable — clone it, run the selftest, watch CI.",
          "176/176 self-tests passing · CI green on every PR.",
          "Capability: raw brief in → spec + working prototype out, with accessibility and quality gates enforced end-to-end.",
          "Every gate is inspectable: the audit that blocks a build is the same code you can read and run — no numbers to take on faith.",
        ] },
        { t: "quote", text: "Don't take my word for it. Clone it." },
      ],
    },
  ],
  learnings: [
    "Good gates come from failures, not theory. The strongest gate in the system exists because a “clean” prototype still shipped broken — the kind of lesson you only get by running the system on real work, not by designing it on paper.",
    "Taste can be encoded — partially. Richness scores, banned defaults, and mood-first aesthetics catch most slop. What they can't catch yet is why a layout feels right. The boundary between what I could encode and what I couldn't taught me more about my own judgment than anything else.",
    "Constraints design better systems. No Variables API forced a Token Studio workflow that turned out more portable than the “proper” solution would have been.",
  ],
  next: { title: "Back to where it started — KindMore Clinic", href: "/work/kindmore" },
};

export default function Page() {
  return <CaseStudy data={data} />;
}
