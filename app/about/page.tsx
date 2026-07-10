import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Sparkle, Check, Layers, Compass, Search, Code, Briefcase, GradCap } from "@/components/icons";

type Icon = ComponentType<{ className?: string }>;

export const metadata: Metadata = {
  title: "About · Napasin Intarayotha (O)",
  description:
    "Product & Service Designer in Bangkok. 7 years from brand craft to AI systems: healthcare products, real-world services, and design operations.",
};

const TIMELINE = [
  {
    stage: "CRAFT",
    tag: "Brand & packaging",
    body: "I started as a graphic and brand designer. My first real design lessons didn't come from a screen, they came from field trips. Designing packaging for OTOP community products meant sitting with producers, understanding what they made and why, then translating that into something a shelf could sell. Research-first wasn't a method I adopted later; it's how I learned to design at all.",
  },
  {
    stage: "PRODUCT",
    tag: "AI healthcare",
    body: "Four years ago I moved into UX/UI at Looloo Technology, into the deep end: AI healthcare. I designed PresScribe, an AI medical scribe that writes clinical notes so doctors can keep their eyes on patients. That work taught me to treat clinical documentation as an attention-management problem, not a typing task.",
  },
  {
    stage: "SERVICE",
    tag: "Whole systems",
    body: "Then the scope kept growing. We built KindMore Clinic, a real clinic designed end to end as a living sandbox, where a doctor visit takes about 20 minutes instead of a whole day. I designed the service, the system behind it, and the measurement loop that keeps improving it. Alongside that, Virtual Agent stretched me across the full width of design: brand identity, bilingual guidelines, and an enterprise voice-agent platform.",
  },
  {
    stage: "SYSTEMS",
    tag: "DesignOps",
    body: "Today I also design the way design gets done. My DesignOps pipeline encodes my judgment, from accessibility to honesty about evidence, into steps a machine can run. Seven years in, my scope has grown from a package on a shelf to the operating system of a design team. The thread has never changed: understand the real work first, then design for it.",
  },
];

const PRINCIPLES: { icon: Icon; title: string; body: string }[] = [
  {
    icon: Sparkle,
    title: "AI augments. It doesn't replace.",
    body: "Every AI product I design starts from the same question: what should the human own? AI drafts the clinical note, the doctor signs it. AI answers the routine call, the human takes the one that matters.",
  },
  {
    icon: Check,
    title: "Don't trust. Verify.",
    body: "“Looks right” isn't a quality bar. I measure: clinic visits timed at every station. Design output audited by 10 gates that recalculate everything themselves. If it can't be checked, it isn't done.",
  },
  {
    icon: Layers,
    title: "Design the backstage first.",
    body: "The 20-minute clinic visit wasn't won in the exam room; it was won in the workflows around it. The best experience improvements are usually invisible to the person receiving them.",
  },
];

const EXPERIENCE = [
  {
    period: "2022 to now",
    role: "UX/UI Designer → Product & Service Design",
    where:
      "Looloo Technology. AI healthcare (PresScribe, KindMore Clinic), enterprise AI (Virtual Agent), and more.",
  },
  {
    period: "2019 to 2022",
    role: "Graphic / Brand Designer",
    where: "Branding, packaging (OTOP), PR agency, key visuals, all field-research-driven.",
  },
];

const SKILLS: { icon: Icon; group: string; items: string }[] = [
  { icon: Compass, group: "Design", items: "Product design (web/responsive), service design & blueprinting, design systems & tokens, brand identity & guidelines (TH/EN)" },
  { icon: Search, group: "Research", items: "Field observation & shadowing, journey mapping / swimlanes, usability testing, research synthesis" },
  { icon: Sparkle, group: "AI & DesignOps", items: "AI product UX (trust, human-in-the-loop, failure states), AI-assisted workflow design, Claude Code, Token Studio, Figma-to-code pipelines" },
  { icon: Code, group: "Tools & code", items: "Figma suite, Adobe suite, Next.js + shadcn/ui, Git/GitHub, Playwright (visual audit)" },
];

const EDUCATION = [
  { title: "B.A., Communications Art and Design", sub: "Faculty of Architecture, Art and Design, King Mongkut's Institute of Technology Ladkrabang (KMITL)" },
  { title: "Advanced Design System, the “One-to-Many” concept", sub: "Day-1 Academy. Design-system structure, tokens, and rolling them out across a company" },
  { title: "AI Design System Bootcamp", sub: "Design Lasyyy. Design operations with AI tools" },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-6">
        {/* intro */}
        <section className="grid grid-cols-1 items-center gap-12 pt-20 pb-16 lg:grid-cols-[1fr_380px] lg:pt-28">
          <div>
            <p className="font-mono text-sm text-accent-text">About</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-[2.75rem] font-medium leading-[1.04] tracking-[-0.01em] text-fg sm:text-[3.25rem] lg:text-6xl">
              Hi, I&apos;m Napasin, most people call me O.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              Product &amp; Service Designer at Looloo Technology, Bangkok. I design AI products for
              people whose work leaves{" "}
              <span className="font-medium text-fg">no room for error</span>: doctors, nurses, and
              the teams behind them.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["7 years designing", "4 years in AI healthcare", "Bangkok"].map((b) => (
                <span key={b} className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted">
                  {b}
                </span>
              ))}
            </div>
          </div>
          {/* portrait */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-border bg-surface-2">
              <Image
                src="/images/napasin-portrait.jpg"
                alt="Napasin Intarayotha (O)"
                fill
                sizes="380px"
                priority
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_100%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent)]"
              />
            </div>
          </div>
        </section>

        {/* career arc: timeline */}
        <section className="mt-20 border-t border-border pt-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-fg sm:text-[2.5rem]">
                From craft to systems
              </h2>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-muted">
                Seven years, one thread:{" "}
                <span className="font-medium text-fg">understand the real work first, then design for it.</span>
              </p>
              <p className="mt-4 font-mono text-sm text-muted">
                Craft <span className="text-accent-text">→</span> Product <span className="text-accent-text">→</span>{" "}
                Service <span className="text-accent-text">→</span> Systems
              </p>
            </div>

            <ol className="relative border-l border-border pl-10">
              {TIMELINE.map((e, i) => (
                <li key={e.stage} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-10 top-0 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-accent/30 bg-accent/[0.1] font-mono text-xs text-accent-text ring-4 ring-bg">
                    0{i + 1}
                  </span>
                  <p className="font-mono text-sm">
                    <span className="text-accent-text">{e.stage}</span>{" "}
                    <span className="text-muted/70">· {e.tag}</span>
                  </p>
                  <p className="mt-3 max-w-[62ch] text-lg leading-relaxed text-muted">{e.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* how I work */}
        <Section title="How I work" icon={Compass}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="flex flex-col rounded-card border border-border bg-surface p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-item border border-accent/25 bg-accent/[0.08] text-accent-text">
                    <p.icon className="size-5" />
                  </span>
                  <span className="font-mono text-sm text-muted/50">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-medium leading-snug text-fg">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* experience */}
        <Section title="Experience" icon={Briefcase}>
          <div className="divide-y divide-border border-y border-border">
            {EXPERIENCE.map((e) => (
              <div key={e.period} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <span className="font-mono text-sm text-accent-text">{e.period}</span>
                <div>
                  <h3 className="text-lg font-medium text-fg">{e.role}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{e.where}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* skills */}
        <Section title="Skills & tools" icon={Code}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="rounded-card border border-border bg-surface p-6">
                <h3 className="flex items-center gap-2.5 font-mono text-sm text-accent-text">
                  <s.icon className="size-4" />
                  {s.group}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* education */}
        <Section title="Education & training" icon={GradCap}>
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

function Section({ title, icon: Icon, children }: { title: string; icon: Icon; children: React.ReactNode }) {
  return (
    <section className="mt-20 border-t border-border pt-14">
      <div className="mb-8 flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-item border border-accent/25 bg-accent/[0.08] text-accent-text">
          <Icon className="size-5" />
        </span>
        <h2 className="font-display text-[1.75rem] font-medium tracking-[-0.005em] text-fg sm:text-[2rem]">{title}</h2>
      </div>
      {children}
    </section>
  );
}
