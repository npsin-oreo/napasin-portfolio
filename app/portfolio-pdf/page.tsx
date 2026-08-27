import type { Metadata } from "next";
import { ResumeToolbar } from "@/components/resume-toolbar";
import { CONTACT } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";

// Print palette (mirrors /resume — the sheet is always white; hexes are
// deliberate, not tokens, but mirror the site's Warm Studio ink/olive):
//   ink #2c241b · body #453c30 · meta #5f574a · faint #9a9488
//   hairline #e6e1d4 · olive text #42502a · olive rule/bullet #5c6b3c
//   clay #96421f · desk backdrop #26201a

export const metadata: Metadata = {
  title: "Portfolio · Napasin Intarayotha (O)",
  description:
    "A downloadable portfolio: seven years from brand craft to AI systems, told through four case studies in healthcare and enterprise AI.",
};

type Stat = { value: string; label: string };

type CaseEntry = {
  num: string;
  kicker: string;
  title: string;
  thesis: string;
  narrative: string;
  iOwned: string;
  status?: string;
  stats?: Stat[];
  chips?: string[];
  flow?: string[];
  bar?: { total: string; totalLabel: string; items: { label: string; time: string; min: number; tone?: "accent" | "wait" }[] };
  repo?: string;
};

const COVER_SUBHEAD =
  "Product and service designer in Bangkok, seven years into the craft, four of them in healthcare AI. I design the systems around AI: clinics, scribes, voice agents, and the way design itself gets done.";

const JOURNEY = [
  {
    stage: "Craft",
    tag: "Brand & packaging",
    body: "I started in graphic and brand design. The lessons came from field trips, not screens: sitting with OTOP producers, learning what they made and why, then translating that into something a shelf could sell. Research-first is how I learned to design at all.",
  },
  {
    stage: "Product",
    tag: "AI healthcare",
    body: "Four years ago I moved into UX/UI at Looloo Technology, straight into the deep end: AI healthcare. I designed PresScribe, an AI medical scribe that writes clinical notes so doctors can keep their eyes on patients. That work taught me to treat documentation as attention, not typing.",
  },
  {
    stage: "Service",
    tag: "Whole systems",
    body: "Then the scope kept growing. We built KindMore Clinic end to end, where a visit takes about 20 minutes instead of a whole day; I designed the service and the system behind it. Virtual Agent stretched me from brand identity to an enterprise voice platform.",
  },
  {
    stage: "Systems",
    tag: "DesignOps",
    body: "Today I also design the way design gets done. My DesignOps pipeline encodes my judgment, from accessibility to honesty about evidence, into steps a machine can run. Seven years in, the thread hasn't changed: understand the real work first, then design for it.",
  },
];

const PRINCIPLES = [
  {
    title: "AI augments. It doesn't replace.",
    body: "Every AI product I design starts from one question: what should the human own? AI drafts the clinical note, the doctor signs it. AI answers the routine call, the human takes the one that matters.",
  },
  {
    title: "Don't trust. Verify.",
    body: "“Looks right” isn't a quality bar. Clinic visits get timed at every station; design output faces 10 gates that recalculate everything themselves. If it can't be checked, it isn't done.",
  },
  {
    title: "Design the backstage first.",
    body: "The 20-minute clinic visit wasn't won in the exam room. It was won in the workflows around it. The best improvements are usually invisible to the person receiving them.",
  },
];

const CLOSING_LINE =
  "Every case here has a longer version on the site, with the decisions and the dead ends in full. If something here is useful to you, write to me.";

const CASES: CaseEntry[] = [
  {
    num: "01",
    kicker: "Service design · Healthcare AI",
    title: "Designing the whole clinic",
    thesis: "We didn't make the consultation faster. We made everything around it disappear.",
    narrative:
      "A hospital visit in Thailand costs a day: queue to register, queue for vitals, queue for the doctor, queue to pay, queue for medicine, all for a few minutes of consultation. So we built a clinic from day one with AI in the system, and mapped a traditional visit station by station. The lost time sat in the seams between stations, not in the consultation. I led the service blueprint and designed every digital touchpoint on it: the LINE OA, the clinic HIS, and PresScribe in the exam room. My first registration form assumed Thai national IDs; the clinic drew far more foreign patients than we expected, so I restructured it to ask nationality first and branch. It now runs about 30% faster than surveyed peer clinics.",
    iOwned: "LINE OA, the clinic HIS, PresScribe integration; led the service blueprint",
    stats: [
      { value: "5.0★", label: "170+ Google reviews, four months at 100% five-star" },
      { value: "800+", label: "Visits per month, 500+ new patients" },
      { value: "~1 in 4", label: "Reviewers mention speed, unprompted" },
    ],
    bar: {
      total: "~20 min",
      totalLabel: "Door to door",
      items: [
        { label: "Registration", time: "~3 min", min: 3 },
        { label: "Wait for doctor", time: "~5 min", min: 5, tone: "wait" },
        { label: "Consultation", time: "~8 min", min: 8, tone: "accent" },
        { label: "Wait to pay", time: "~3 min", min: 3, tone: "wait" },
        { label: "Payment & pharmacy", time: "~2 min", min: 2 },
      ],
    },
  },
  {
    num: "02",
    kicker: "AI product design · Clinical UX",
    title: "The best interface in the exam room is no interface",
    thesis: "Clinical documentation is an attention-management problem, not a typing task.",
    narrative:
      "It started as a question, not a product: where can AI actually help Thai healthcare? Inside hospitals running 10- to 20-year-old systems, the heaviest shared pain was getting patient information into the record. I chose the OPD doctors, then reframed the problem from speed to trust: a note you didn't write is a note you have to be able to check. So the interaction during a consultation is almost nothing — press start, talk, press stop — and I cut a planned live transcript after doctors said patients would be uneasy watching their words appear. Afterwards it flips fully inspectable: AI drafts, the doctor edits and signs, nothing reaches the record unseen. A three-tier on-ramp let hospitals adopt at any level of IT readiness.",
    iOwned: "All UX and UI, the design system, note formats and ICD-10 flow, integration UX; field research alongside the team",
    stats: [
      { value: "30,000+", label: "Consultations documented" },
      { value: "40+", label: "Hospitals nationwide" },
      { value: "30–40%", label: "Less documentation time per case" },
    ],
    flow: ["Copy & paste", "API integration", "Standalone app"],
  },
  {
    num: "03",
    kicker: "AI product + brand · Enterprise voice",
    title: "Designing a voice, not a bot",
    thesis: "In a voice product, the voice is the interface. Tone, pacing, and timing aren't polish; they're the core UX.",
    narrative:
      "Enterprise call centers scale in one currency — people — and quality caps out at fatigue and turnover. AI agents could absorb the routine outbound calls, reminders and prescreening, so people take the ones that need a person. But outbound financial calls already fight suspicion; the failure mode isn't wrong answers, it's someone hanging up before the agent answers anything. So the agent opens by identifying itself as an intelligent assistant, disclosure first, not buried. The flow stays deliberately bounded: flexibility costs latency, and latency breaks the rhythm that makes a voice believable. I designed the brand and its TH/EN guidelines — formal enough for a bank, still human — the platform where ops teams configure responses without writing code, and the ops dashboard. The ML team owns the flows and intents.",
    iOwned: "Brand identity and TH/EN guidelines, the agent-configuration platform UX/UI, and the ops dashboard",
    status: "POC piloted with enterprise trial clients · MVP redesign in development",
    chips: ["Brand identity", "TH/EN guidelines", "Agent platform", "Ops dashboard"],
  },
  {
    num: "04",
    kicker: "DesignOps · Open source",
    title: "Design judgment, encoded",
    thesis:
      "The question isn't “how do we make AI generate better?” It's “how do we make sure bad work can't reach handoff?” Stop trusting the output. Gate the output.",
    narrative:
      "AI makes design work 10x faster and design slop 10x faster: prototypes that look finished but fail accessibility, drift from design-system tokens, or cite user insights nobody researched. So I encoded my own judgment into an 18-stage pipeline, Discover through Deliver, with a validator between every step that halts the run and names the owner when a contract breaks. Anything checkable is recalculated from scratch rather than taken on the AI's word: one gate recomputes WCAG contrast from the raw color values, and another renders every prototype at real mobile and desktop viewports and reads the pixels. On one real project that render gate caught a scan button with no accessible name and a control below the touch-target minimum, both fixed before handoff. This portfolio was audited through it before shipping.",
    iOwned: "Designer and pipeline architect (solo side project)",
    stats: [
      { value: "187/187", label: "Selftests passing, CI green on every PR" },
      { value: "18", label: "Pipeline stages, Discover to Deliver" },
      { value: "10", label: "Static gates, plus a live render gate" },
    ],
    flow: ["Discover", "Define", "Develop", "Deliver"],
    repo: "https://github.com/npsin-oreo/DesignOps-process",
  },
];

export default function PortfolioPdf() {
  return (
    <div className="resume-backdrop min-h-svh bg-[#26201a] px-4 py-8 sm:py-12">
      <ResumeToolbar />

      <main className="mx-auto mt-6 flex max-w-[210mm] flex-col items-center print:mt-0">
        {/* ── Cover ─────────────────────────────────────────── */}
        <section className="a4-page rounded-sm print:rounded-none">
          <div className="flex h-full flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#42502a]">
              Portfolio · 2026
            </p>
            <h1 className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-[#2c241b]">
              Napasin Intarayotha
              <span className="ml-2 text-[22px] font-normal text-[#9a9488]">(O)</span>
            </h1>
            <p className="mt-2 text-[15px] font-medium uppercase tracking-[0.12em] text-[#42502a]">
              Product &amp; Service Designer · Bangkok
            </p>

            <h2 className="mt-14 max-w-[16ch] text-[34px] font-medium italic leading-[1.15] text-[#2c241b]">
              I design the human side of AI.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[13px] leading-[1.65] text-[#453c30]">{COVER_SUBHEAD}</p>

            <p className="mt-8 text-[11.5px] text-[#5f574a]">
              Craft <span className="text-[#5c6b3c]">→</span> Product{" "}
              <span className="text-[#5c6b3c]">→</span> Service <span className="text-[#5c6b3c]">→</span> Systems
            </p>

            <div className="mt-auto pt-14">
              <p className="border-t border-[#e6e1d4] pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#42502a]">
                Inside this portfolio
              </p>
              <ul className="mt-3 space-y-2">
                {CASES.map((c) => (
                  <li key={c.num} className="flex items-baseline gap-3 text-[11.5px]">
                    <span className="w-5 shrink-0 text-[#9a9488] tabular-nums">{c.num}</span>
                    <span className="text-[#2c241b]">{c.title}</span>
                    <span className="flex-1 border-b border-dotted border-[#e6e1d4]" />
                    <span className="shrink-0 text-[#9a9488]">{c.kicker}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[10.5px] leading-[1.6] text-[#5f574a]">
                {CONTACT.email} · {CONTACT.phone} · {CONTACT.linkedin.replace("https://www.", "")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Journey + how I work ─────────────────────────────── */}
        <section className="a4-page rounded-sm print:rounded-none">
          <Header title="From craft to systems" />
          <p className="mt-3 max-w-[56ch] text-[12.5px] leading-[1.6] text-[#453c30]">
            Seven years, one thread: understand the real work first, then design for it.
          </p>

          <ol className="mt-8 space-y-5 border-y border-[#e6e1d4] py-6">
            {JOURNEY.map((j, i) => (
              <li key={j.stage} className="keep-together flex gap-4">
                <span className="w-6 shrink-0 text-[13px] font-medium text-[#42502a] tabular-nums">{i + 1}</span>
                <div>
                  <p className="flex items-baseline gap-2">
                    <span className="text-[13px] font-semibold text-[#2c241b]">{j.stage}</span>
                    <span className="text-[10.5px] text-[#9a9488]">· {j.tag}</span>
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-[#453c30]">{j.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="keep-together mx-auto mt-8 max-w-[28ch] text-center text-[19px] font-medium italic leading-[1.35] text-[#2c241b]">
            Understand the real work first, then design for it.
          </blockquote>

          <Header title="How I work" className="mt-10" />
          <ol className="mt-4 divide-y divide-[#e6e1d4] border-y border-[#e6e1d4]">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="keep-together grid grid-cols-[28px_1fr] gap-4 py-4">
                <span className="text-[18px] leading-none text-[#9a9488]">{i + 1}</span>
                <div>
                  <p className="text-[12.5px] font-semibold text-[#2c241b]">{p.title}</p>
                  <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[#453c30]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Cases ─────────────────────────────────────────── */}
        {CASES.map((c) => (
          <section key={c.num} className="a4-page rounded-sm print:rounded-none">
            <p className="text-[11px] text-[#9a9488] tabular-nums">{c.num} / 04</p>
            <p className="mt-4 text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#42502a]">{c.kicker}</p>
            <h2 className="mt-2 max-w-[22ch] text-[27px] font-medium leading-[1.15] text-[#2c241b]">{c.title}</h2>

            <blockquote className="keep-together mt-5 border-l-2 border-[#5c6b3c] pl-4 text-[15px] font-medium italic leading-[1.4] text-[#2c241b]">
              {c.thesis}
            </blockquote>

            <p className="mt-6 text-[12.5px] leading-[1.65] text-[#453c30]">{c.narrative}</p>

            <div className="keep-together mt-6 flex items-baseline gap-2 border-t border-[#e6e1d4] pt-4 text-[11px]">
              <span className="shrink-0 font-semibold uppercase tracking-wide text-[#42502a]">I owned</span>
              <span className="text-[#5f574a]">{c.iOwned}</span>
            </div>
            {c.status && <p className="mt-1.5 text-[11px] text-[#5f574a]">{c.status}</p>}

            {c.stats && (
              <div className="keep-together mt-6 grid grid-cols-3 gap-3">
                {c.stats.map((s) => (
                  <div key={s.label} className="rounded-sm border-t-2 border-[#5c6b3c] bg-[#faf8f2] px-3 py-3">
                    <div className="text-[19px] font-semibold leading-none tracking-tight text-[#2c241b] tabular-nums">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[10px] leading-[1.4] text-[#5f574a]">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {c.chips && (
              <div className="keep-together mt-6 flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#e6e1d4] bg-[#faf8f2] px-3 py-1 text-[10.5px] text-[#453c30]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {c.flow && (
              <div className="keep-together mt-6 flex flex-wrap items-center gap-2">
                {c.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    {i > 0 && <span className="text-[#9a9488]">→</span>}
                    <span className="rounded-sm border border-[#e6e1d4] px-2.5 py-1 text-[10.5px] text-[#2c241b]">
                      {step}
                    </span>
                  </span>
                ))}
              </div>
            )}

            {c.bar && (
              <div className="keep-together mt-7">
                <div className="flex h-6 w-full gap-0.5 overflow-hidden rounded-sm">
                  {c.bar.items.map((s) => {
                    const total = c.bar!.items.reduce((sum, it) => sum + it.min, 0);
                    const fill = s.tone === "accent" ? "#5c6b3c" : s.tone === "wait" ? "#ddd6c2" : "#ece7d8";
                    return (
                      <div key={s.label} style={{ width: `${(s.min / total) * 100}%`, background: fill }} />
                    );
                  })}
                </div>
                <dl className="mt-3 space-y-1">
                  {c.bar.items.map((s) => (
                    <div key={s.label} className="flex items-baseline gap-2 text-[10.5px]">
                      <dt className="text-[#453c30]">{s.label}</dt>
                      <span className="flex-1 border-b border-dotted border-[#e6e1d4]" />
                      <dd className="text-[#2c241b] tabular-nums">{s.time}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline gap-2 border-t border-[#e6e1d4] pt-2 text-[11.5px] font-semibold">
                    <dt className="text-[#2c241b]">{c.bar.totalLabel}</dt>
                    <span className="flex-1" />
                    <dd className="text-[#42502a] tabular-nums">{c.bar.total}</dd>
                  </div>
                </dl>
              </div>
            )}

            {c.repo && (
              <p className="mt-6 text-[10.5px] text-[#5f574a]">
                Public repo: {c.repo.replace("https://", "")}
              </p>
            )}
          </section>
        ))}

        {/* ── Closing ───────────────────────────────────────── */}
        <section className="a4-page rounded-sm print:rounded-none">
          <div className="flex h-full flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#42502a]">Contact</p>
            <h2 className="mt-4 max-w-[16ch] text-[32px] font-medium leading-[1.1] text-[#2c241b]">
              Let&apos;s talk
            </h2>
            <p className="mt-5 max-w-[46ch] text-[13px] leading-[1.6] text-[#453c30]">{CLOSING_LINE}</p>

            <dl className="mt-10 divide-y divide-[#e6e1d4] border-y border-[#e6e1d4]">
              <ContactRow label="Email" value={CONTACT.email} />
              <ContactRow label="Phone" value={CONTACT.phone} />
              <ContactRow label="LinkedIn" value={CONTACT.linkedin.replace("https://www.", "")} />
              <ContactRow label="GitHub" value={CONTACT.github.replace("https://", "")} />
            </dl>

            <p className="mt-auto pt-14 text-[10px] text-[#9a9488]">
              © 2026 Napasin Intarayotha (NPSIN). This portfolio was designed, built, and audited by me,
              through my own DesignOps pipeline. Full case studies at{" "}
              {SITE_URL.replace("https://", "")}/work.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function Header({ title, className = "" }: { title: string; className?: string }) {
  return (
    <h2 className={`border-b border-[#e6e1d4] pb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#42502a] ${className}`}>
      {title}
    </h2>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <span className="w-20 shrink-0 text-[10px] uppercase tracking-wide text-[#9a9488]">{label}</span>
      <span className="flex-1 text-[13px] text-[#2c241b]">{value}</span>
    </div>
  );
}
