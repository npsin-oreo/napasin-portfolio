import type { Metadata } from "next";
import { ResumeToolbar } from "@/components/resume-toolbar";
import { CONTACT } from "@/lib/cases";

// Print palette (the sheet is always white; hexes are deliberate, not tokens,
// but they mirror the site's Warm Studio ink/olive):
//   ink #2c241b · body #453c30 · meta #5f574a · faint #9a9488
//   hairline #e6e1d4 · olive text #42502a · olive rule/bullet #5c6b3c
//   desk backdrop #26201a

export const metadata: Metadata = {
  title: "Résumé · Napasin Intarayotha (O)",
  description: "Product & Service Designer. 7 years from brand craft to AI systems in healthcare and enterprise.",
};

const EXPERIENCE = [
  {
    role: "UX/UI Designer → Product & Service Design",
    org: "Looloo Technology",
    period: "2022 to Present",
    place: "Bangkok",
    bullets: [
      "PresScribe (AI medical scribe): designed the clinical UX around trust, review, and failure states. In production at national scale: 30,000+ consultations documented across 40+ hospitals, plus a standalone app.",
      "KindMore Clinic: service-designed a real, operating clinic end to end: space, staff workflow, HIS, and measurement loop. A doctor visit dropped from a whole day to about 20 minutes; 5.0★ across 170+ Google reviews.",
      "Virtual Agent (enterprise voice AI): owned the full width: logomark, bilingual TH/EN brand guidelines, the agent-configuration platform, and the ops dashboard. POC piloted with insurance/banking/finance clients; MVP redesign in development.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "JC&CO Communications · PR agency",
    period: "2020 to 2022",
    place: "Bangkok",
    bullets: [
      "Key visuals and campaign artwork for a diverse client roster, each piece tuned to that organization's own identity and voice.",
    ],
  },
  {
    role: "Packaging Designer",
    org: "Workprint Studio",
    period: "2019 to 2020",
    place: "Bangkok",
    bullets: [
      "Packaging for community-enterprise (OTOP) products: field visits to survey the products and each locality's identity, then translated both into shelf-ready packaging.",
    ],
  },
];

const PROJECTS = [
  {
    name: "DesignOps Pipeline",
    note: "Open source",
    text: "Encoded my design judgment into a machine-runnable pipeline: an 18-stage flow from product brief to working prototype, blocked by a 10-gate audit (WCAG recomputed, theme fidelity, render structure). 187/187 selftests, CI on every PR.",
  },
];

const SKILLS: [string, string][] = [
  ["Design", "Product design (web / responsive), service design & blueprinting, design systems & tokens, brand identity & guidelines (TH/EN)"],
  ["Research", "Field observation & shadowing, journey mapping / swimlanes, usability testing, research synthesis"],
  ["AI & DesignOps", "AI product UX (trust, human-in-the-loop, failure states), AI-assisted workflow, Claude Code, Token Studio, Figma-to-code"],
  ["Tools", "Figma suite, Adobe suite, Next.js + shadcn/ui, Git/GitHub, Playwright (visual audit)"],
];

const EDUCATION = [
  ["B.A., Communications Art & Design", "King Mongkut's Institute of Technology Ladkrabang (KMITL). Faculty of Architecture, Art & Design"],
  ["Advanced Design System, “One-to-Many”", "Day-1 Academy"],
  ["AI Design System Bootcamp", "Design Lasyyy"],
];

export default function Resume() {
  return (
    <div className="resume-backdrop min-h-svh bg-[#26201a] px-4 py-8 sm:py-12">
      <ResumeToolbar />

      <main className="a4 mx-auto mt-6 rounded-sm print:mt-0 print:rounded-none">
        {/* header */}
        <header className="flex items-end justify-between gap-6 border-b-2 border-[#5c6b3c] pb-4">
          <div>
            <h1 className="text-[26px] font-semibold leading-none tracking-tight text-[#2c241b]">
              Napasin Intarayotha
              <span className="ml-2 text-[16px] font-normal text-[#9a9488]">(O)</span>
            </h1>
            <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-[#42502a]">
              Product &amp; Service Designer
            </p>
          </div>
          <div className="text-right text-[10.5px] leading-[1.6] text-[#5f574a]">
            <p>Bangkok, Thailand</p>
            <p>
              <a href={`mailto:${CONTACT.email}`} className="text-[#5f574a] no-underline">{CONTACT.email}</a>
            </p>
            <p>{CONTACT.phone}</p>
            <p>
              <a href={CONTACT.linkedin} className="text-[#5f574a] no-underline">
                {CONTACT.linkedin.replace("https://www.", "")}
              </a>
            </p>
            <p>
              <a href={CONTACT.github} className="text-[#5f574a] no-underline">
                {CONTACT.github.replace("https://", "")}
              </a>
            </p>
          </div>
        </header>

        {/* summary */}
        <p className="mt-4 text-[11.5px] leading-[1.55] text-[#453c30]">
          Product &amp; service designer with <span className="font-semibold text-[#2c241b]">7 years</span> spanning brand
          craft to AI systems. I design AI products for high-stakes work: healthcare and enterprise, where there is{" "}
          <span className="font-semibold text-[#2c241b]">no room for error</span>, and build the DesignOps that keep that
          quality honest. Research-first, backstage-first, verify-don&apos;t-trust.
        </p>

        {/* body */}
        <div className="mt-5 grid grid-cols-[1.65fr_1fr] gap-7">
          {/* left column */}
          <div>
            <Section title="Experience" />
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="mb-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[12.5px] font-semibold text-[#2c241b]">{e.role}</h3>
                  <span className="shrink-0 text-[10px] font-medium text-[#5f574a]">{e.period}</span>
                </div>
                <p className="text-[11px] font-medium text-[#42502a]">
                  {e.org} <span className="text-[#9a9488]">· {e.place}</span>
                </p>
                <ul className="mt-1.5 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-[10.5px] leading-[1.5] text-[#453c30]">
                      <span className="mt-[6px] size-1 shrink-0 rounded-full bg-[#5c6b3c]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <Section title="Selected project" />
            {PROJECTS.map((p) => (
              <div key={p.name} className="mb-2">
                <h3 className="text-[12px] font-semibold text-[#2c241b]">
                  {p.name} <span className="text-[10px] font-medium text-[#42502a]">· {p.note}</span>
                </h3>
                <p className="mt-1 text-[10.5px] leading-[1.5] text-[#453c30]">{p.text}</p>
              </div>
            ))}
          </div>

          {/* right column */}
          <div>
            <Section title="Skills" />
            <div className="space-y-2.5">
              {SKILLS.map(([group, items]) => (
                <div key={group}>
                  <p className="text-[10.5px] font-semibold text-[#2c241b]">{group}</p>
                  <p className="mt-0.5 text-[10px] leading-[1.5] text-[#5f574a]">{items}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Section title="Education" />
              <div className="space-y-2.5">
                {EDUCATION.map(([title, sub]) => (
                  <div key={title}>
                    <p className="text-[10.5px] font-semibold leading-snug text-[#2c241b]">{title}</p>
                    <p className="mt-0.5 text-[10px] leading-[1.5] text-[#5f574a]">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <Section title="Languages" />
              <p className="text-[10.5px] leading-[1.6] text-[#5f574a]">
                Thai (native) · English (professional working proficiency)
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-6 border-t border-[#e6e1d4] pt-2.5 text-[9.5px] text-[#9a9488]">
          Full case studies available in my portfolio and on request.
        </footer>
      </main>
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <h2 className="mb-2 border-b border-[#e6e1d4] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#42502a]">
      {title}
    </h2>
  );
}
