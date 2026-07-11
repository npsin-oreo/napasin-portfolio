import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "DesignOps Pipeline: design judgment, encoded · NPSIN",
  description:
    "I encoded my design judgment into a pipeline a machine can enforce: a project brief to a working prototype, blocked by a 10-gate audit until it meets the bar. Open source, so clone it and run it.",
};

const data: CaseData = {
  slug: "/work/designops",
  cover: "/images/designops-cover.jpg",
  coverFit: "cover",
  kicker: "DesignOps · Open source",
  title: "Design judgment, encoded",
  subhead:
    "AI can produce design work 10× faster, and produce design slop 10× faster. So I encoded my judgment into a system: an 18-stage pipeline that takes a product brief to a working prototype, where every screen traces back to the requirement that created it, and nothing ships that fails a 10-gate audit. It's open source, so don't take my word for it. Clone it and run it.",
  thesis: "The question isn't “how do we make AI generate better?” It's “how do we make sure bad work can't reach handoff?” Stop trusting the output. Gate the output.",
  snapshot: [
    ["Role", "Designer and pipeline architect"],
    ["Stack", "Claude Code, zero-dependency Python, Next.js + a design-system package, Playwright, Token Studio"],
    ["Status", "Open source, DesignOps 2.0, still evolving. Public repo, CI on every PR"],
    ["Scope", "Product intent → 18-stage pipeline → audited prototype, every screen traceable to its requirement"],
  ],
  impact: ["18-stage pipeline", "10-gate audit", "187/187 selftests", "CI on every PR"],
  repo: "https://github.com/npsin-oreo/DesignOps-process",
  sections: [
    {
      n: "01",
      title: "AI does design work 10× faster, and produces slop 10× faster",
      blocks: [
        { t: "p", text: "The pain came from real projects. The distance from a ten-page brief to a design brief to a prototype a developer can build on used to cost weeks. AI collapsed that time, and exposed a new problem: prototypes that look finished but aren't. Contrast that fails accessibility. Tokens that drift from the design system. Generic default styling, what I call design slop. And worst of all: AI that invents user insights nobody ever researched." },
        { t: "quote", text: "Think of it as an assembly line: every station does one job, and no station passes work forward until it's verified correct. Not reviewed, verified. By a script, not a glance." },
        { t: "flow",
          input: "A product brief (a TOR, a PRD, or a rough idea)",
          steps: [
            { label: "Discover", note: "What do we actually know?", keywords: ["Intake", "Brief", "Research"] },
            { label: "Define", note: "Which decisions guide the design?", keywords: ["Product intelligence", "Scenario edges", "UX strategy"] },
            { label: "Develop", note: "How is the product structured?", keywords: ["Flows", "Interactions", "Screen inventory", "Aesthetic direction", "Design-system mapping"] },
            { label: "Deliver", note: "Does it work, pass, and hand off?", keywords: ["Prototype", "Critique", "Audit gate", "Runtime QA", "Handoff", "Feedback loop"] },
          ],
          output: "A working prototype, audited and traceable to the brief",
          gate: "Those four phases are 18 stages in full, one specialist agent each. A validator sits between every step: it stops the run and names the owner when a contract breaks, so nothing advances on looks alone.",
        },
      ],
    },
    {
      n: "02",
      title: "If eyeball review doesn't scale, script the review",
      blocks: [
        { t: "p", text: "Three principles run through every stage of the pipeline." },
        { t: "steps", items: [
          { label: "Every stage produces an artifact, and every artifact has a validator.", text: "Each step outputs structured JSON, and each JSON faces its own Python gate. Nothing passes because it “looks OK.” Nothing is assumed." },
          { label: "Never trust the agent.", text: "Anything checkable gets recalculated from scratch. The validator doesn't ask the AI whether contrast passes WCAG; it recomputes contrast from the hex values itself. It doesn't trust that a rich design exists because tokens exist; it scores richness from screenshots of the actual rendered page. My answer to “how do you trust AI?” is: you don't. You verify." },
          { label: "Honesty-gated research.", text: "Every UX claim must declare its evidence mode. If there's no real input, no interviews and no data, the system forces the label “inferred” or “hypothesis,” and the validator rejects research that cites evidence it doesn't have. AI is not allowed to fabricate user research. The thing the industry fears most about AI design is the thing this pipeline structurally forbids." },
        ] },
      ],
    },
    {
      n: "03",
      title: "Ten doors that bad work can't walk through",
      blocks: [
        { t: "p", text: "At the end of the line stands the audit: ten gates, each a script, each with the power to block handoff. On exit 1, the pipeline physically stops. Three of them tell the story best." },
        { t: "sub", text: "Gate 2 · WCAG, recalculated." },
        { t: "p", text: "Contrast is recomputed from the actual color values: oklch converted to sRGB, checked in both light and dark mode. Why not use the values the AI reports? Because the AI is the thing being audited. An auditor that asks the auditee for the verdict isn't an auditor." },
        { t: "sub", text: "Gate 6 · Fidelity." },
        { t: "p", text: "Checks that the aesthetic committed in the design phase actually survived into the build: theme, fonts, layout axis. Its job is catching the quiet failure: AI regressing to neutral defaults while nobody watched." },
        { t: "sub", text: "Gate 10 · Render structure." },
        { t: "p", text: "Some failures are invisible in source: a control that renders the wrong size, a desktop layout stuck in a single mobile column, correct code that still ships broken. Only rendering catches them, so Playwright renders every prototype at mobile and desktop widths and audits the actual pixels. Good gates aren't designed from theory; they're scar tissue from real failures." },
        { t: "p", text: "That gate isn't hypothetical. On one real project I ran through the pipeline, a warehouse management system (WHM) built for low-literacy frontline workers on their phones, the render gate caught two first-pass defects the static gates had passed clean: a scan button with an icon but no accessible name, and a secondary control sized 32px, below the touch-target minimum. It renders the running prototype at a real phone viewport and checks touch targets, accessible names, and whether a blocking state actually disables its primary action. The fix shipped; the caught failure is the proof." },
        { t: "p", text: "Beyond pass/fail, every prototype gets a scored critique: seven weighted dimensions, Nielsen's ten heuristics, a banned-defaults list, and a judge pass with one hard rule: beauty can't rescue broken. If the judge fails a prototype on function, its score caps at 2.0 no matter how good it looks. And one script is the only door out of the pipeline: the audit can't be skipped, and can't be forgotten." },
        { t: "art", src: "/images/designops-audit.jpg", label: "Every gate is a script, not a glance. On exit 1 the pipeline physically stops (illustrative)" },
      ],
    },
    {
      n: "04",
      title: "A system that audits itself",
      blocks: [
        { t: "p", text: "A pipeline that audits design work should survive an audit of its own. The repo carries 187 self-tests, run in CI on every pull request; the gates are themselves gated, each one proven to both pass good input and fail bad. It builds against a real design-system package, imported and pinned, never copy-pasted or patched, so a raw color value where a token exists is itself a hard-gate failure." },
        { t: "p", text: "One constraint shaped the whole token workflow: our Figma plan has no Variables REST API. Instead of waiting for a bigger plan, I designed the pipeline around Token Studio as the source of truth, so tokens flow from JSON to code to Figma without ever needing the missing API. The sample brief in the repo isn't a toy either: it's a Thai-language brief, proving the pipeline works beyond English and connecting it straight back to the healthcare work it grew out of." },
      ],
    },
    {
      n: "05",
      title: "Outcome, verifiable in public",
      blocks: [
        { t: "metric", items: [
          { value: "187/187", label: "Selftests passing, CI green on every PR" },
          { value: "18", label: "Pipeline stages, Discover to Deliver, one agent each" },
          { value: "10", label: "Static audit gates, plus a live render gate" },
        ] },
        { t: "p", text: "This case needs no permission gates and no redacted numbers. The outcome is the repository itself:" },
        { t: "list", items: [
          "Open source, public, runnable. Clone it, run the selftest, watch CI.",
          "187/187 self-tests passing, CI green on every PR.",
          "Capability: raw brief in, spec plus working prototype out, with accessibility and quality gates enforced end to end.",
          "Every gate is inspectable: the audit that blocks a build is the same code you can read and run, with no numbers to take on faith.",
        ] },
        { t: "callout", text: "Don't take my word for it. Clone it." },
      ],
    },
  ],
  learnings: [
    "Good gates come from failures, not theory. The strongest gate in the system exists because a “clean” prototype still shipped broken, the kind of lesson you only get by running the system on real work, not by designing it on paper.",
    "Taste can be encoded, partially. Richness scores, banned defaults, and mood-first aesthetics catch most slop. What they can't catch yet is why a layout feels right. The boundary between what I could encode and what I couldn't taught me more about my own judgment than anything else.",
    "Constraints design better systems. No Variables API forced a Token Studio workflow that turned out more portable than the “proper” solution would have been.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
