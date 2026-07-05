import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About — Napasin Intarayotha (O)",
  description:
    "Product & Service Designer in Bangkok. 7 years from brand craft to AI systems — healthcare products, real-world services, and design operations.",
};

const ARC = [
  "I started as a graphic and brand designer. My first real design lessons didn't come from a screen — they came from field trips. Designing packaging for OTOP community products meant sitting with producers, understanding what they made and why, then translating that into something a shelf could sell.",
  "Four years ago I moved into UX/UI at Looloo Technology, into the deep end: AI healthcare. I designed PresScribe, an AI medical scribe that writes clinical notes so doctors can keep their eyes on patients — work that taught me to treat clinical documentation as an attention-management problem, not a typing task.",
  "Then the scope kept growing. We built KindMore Clinic — a real clinic, designed end-to-end as a living sandbox, where a doctor visit takes about 20 minutes instead of a whole day. I designed the service, the HIS behind it, and the measurement loop that keeps improving it. Alongside, Virtual Agent stretched me across the full width of design: brand identity, bilingual guidelines, and an enterprise voice-agent platform.",
  "Today I also design the way design gets done. My DesignOps pipeline encodes my judgment — accessibility, token discipline, honesty about evidence — into gates a machine can enforce. Seven years in, my scope has grown from a package on a shelf to the operating system of a design team.",
  "That arc explains something recruiters often ask about: why my work has both visual craft (brand identities, guidelines, key visuals) and systems thinking (service blueprints, design ops, AI workflows). They aren't two skill sets — they're the same habit applied at growing scale. And the thread has never changed since that first packaging job: go to where the work happens, understand it first, then design for it. Research-driven isn't a method I adopted when I became a UX designer. It's how I learned to design at all.",
];

const PRINCIPLES = [
  {
    title: "AI augments. It doesn't replace.",
    body: "Every AI product I design starts from the same question: what should the human own? AI drafts the clinical note — the doctor signs it. AI answers the routine call — the human takes the one that matters.",
  },
  {
    title: "Don't trust — verify.",
    body: "“Looks right” isn't a quality bar. I measure: clinic visits timed at every station. Design output audited by 10 gates that recalculate everything themselves. If it can't be checked, it isn't done.",
  },
  {
    title: "Design the backstage first.",
    body: "The 20-minute clinic visit wasn't won in the exam room — it was won in the workflows around it. The best experience improvements are usually invisible to the person receiving them.",
  },
];

const EXPERIENCE = [
  {
    period: "2022 – now",
    role: "UX/UI Designer → Product & Service Design",
    where:
      "Looloo Technology — AI healthcare (PresScribe, KindMore Clinic), enterprise AI (Virtual Agent), and more.",
  },
  {
    period: "2019 – 2022",
    role: "Graphic / Brand Designer",
    where: "Branding, packaging (OTOP), PR agency, key visuals — field-research-driven.",
  },
];

const SKILLS = [
  { group: "Design", items: "Product design (web/responsive) · Service design & blueprinting · Design systems & tokens · Brand identity & guidelines (TH/EN)" },
  { group: "Research", items: "Field observation & shadowing · Journey mapping / swimlanes · Usability testing · Research synthesis" },
  { group: "AI & DesignOps", items: "AI product UX (trust, human-in-the-loop, failure states) · AI-assisted workflow design · Claude Code · Token Studio · Figma-to-code pipelines" },
  { group: "Tools & code", items: "Figma suite · Adobe suite · Next.js + shadcn/ui · Git/GitHub · Playwright (visual audit)" },
];

const EDUCATION = [
  { title: "B.A., Communications Art and Design", sub: "Faculty of Architecture, Art and Design, King Mongkut's Institute of Technology Ladkrabang (KMITL)" },
  { title: "Advanced Design System — “One-to-Many” concept", sub: "Day-1 Academy — design-system structure, tokens, and rolling them out across a company" },
  { title: "AI Design System Bootcamp", sub: "Design Lasyyy — design operations with AI tools" },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-6">
        {/* intro */}
        <section className="grid grid-cols-1 items-center gap-12 pt-20 pb-16 lg:grid-cols-[1fr_380px] lg:pt-28">
          <div>
            <p className="font-mono text-sm text-accent">About</p>
            <h1 className="mt-4 max-w-[16ch] text-[2.5rem] font-medium leading-[1.06] tracking-[-0.02em] text-fg sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Napasin — most people call me O.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              Product &amp; Service Designer at Looloo Technology, Bangkok. I design AI products for
              people whose work leaves no room for error — doctors, nurses, and the teams behind them.
            </p>
          </div>
          {/* portrait placeholder */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-2 to-bg">
              <div className="grid h-full w-full place-items-center">
                <span aria-hidden className="font-mono text-8xl text-fg/[0.05]">O</span>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_9%,transparent),transparent)]" />
            </div>
          </div>
        </section>

        {/* career arc */}
        <Section title="From craft to systems">
          <div className="max-w-[68ch] space-y-5">
            {ARC.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">{p}</p>
            ))}
          </div>
        </Section>

        {/* how I work */}
        <Section title="How I work">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="flex flex-col rounded-card border border-border bg-surface p-6">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-medium leading-snug text-fg">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* experience */}
        <Section title="Experience">
          <div className="divide-y divide-border border-y border-border">
            {EXPERIENCE.map((e) => (
              <div key={e.period} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <span className="font-mono text-sm text-muted">{e.period}</span>
                <div>
                  <h3 className="text-lg font-medium text-fg">{e.role}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{e.where}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* skills */}
        <Section title="Skills & tools">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="rounded-card border border-border bg-surface p-6">
                <h3 className="font-mono text-sm text-accent">{s.group}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* education */}
        <Section title="Education & training">
          <div className="divide-y divide-border border-y border-border">
            {EDUCATION.map((e) => (
              <div key={e.title} className="py-5">
                <h3 className="text-base font-medium text-fg">{e.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.sub}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-20 border-t border-border pt-14">
      <h2 className="mb-8 text-2xl font-medium tracking-[-0.02em] text-fg sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}
