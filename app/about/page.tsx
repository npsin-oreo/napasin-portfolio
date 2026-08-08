import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { MediaEntrance } from "@/components/media-reveal";

export const metadata: Metadata = {
  title: "About · Napasin Intarayotha (O)",
  description:
    "Product & Service Designer in Bangkok. 7 years from brand craft to AI systems: healthcare products, real-world services, and design operations.",
};

const TIMELINE = [
  {
    stage: "Craft",
    tag: "Brand & packaging",
    body: "I started as a graphic and brand designer. My first real design lessons didn't come from a screen, they came from field trips. Designing packaging for OTOP community products meant sitting with producers, understanding what they made and why, then translating that into something a shelf could sell. Research-first wasn't a method I adopted later; it's how I learned to design at all.",
  },
  {
    stage: "Product",
    tag: "AI healthcare",
    body: "Four years ago I moved into UX/UI at Looloo Technology, into the deep end: AI healthcare. I designed PresScribe, an AI medical scribe that writes clinical notes so doctors can keep their eyes on patients. That work taught me to treat clinical documentation as an attention-management problem, not a typing task.",
  },
  {
    stage: "Service",
    tag: "Whole systems",
    body: "Then the scope kept growing. We built KindMore Clinic, a real clinic designed end to end as a living sandbox, where a doctor visit takes about 20 minutes instead of a whole day. I designed the service, the system behind it, and the measurement loop that keeps improving it. Alongside that, Virtual Agent stretched me across the full width of design: brand identity, bilingual guidelines, and an enterprise voice-agent platform.",
  },
  {
    stage: "Systems",
    tag: "DesignOps",
    body: "Today I also design the way design gets done. My DesignOps pipeline encodes my judgment, from accessibility to honesty about evidence, into steps a machine can run. Seven years in, my scope has grown from a package on a shelf to the operating system of a design team. The thread has never changed: understand the real work first, then design for it.",
  },
];

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "AI augments. It doesn't replace.",
    body: "Every AI product I design starts from the same question: what should the human own? AI drafts the clinical note, the doctor signs it. AI answers the routine call, the human takes the one that matters.",
  },
  {
    title: "Don't trust. Verify.",
    body: "“Looks right” isn't a quality bar. I measure: clinic visits timed at every station. Design output audited by 10 gates that recalculate everything themselves. If it can't be checked, it isn't done.",
  },
  {
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
    period: "2020 to 2022",
    role: "Graphic Designer",
    where: "JC&CO Communications (PR agency). Key visuals and artwork for a diverse client roster, each piece tuned to that organization's own identity and voice.",
  },
  {
    period: "2019 to 2020",
    role: "Packaging Designer",
    where: "Workprint Studio. Packaging for community-enterprise (OTOP) products: field visits to survey the products and each locality's identity, then translating both into shelf-ready packaging.",
  },
];

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Design",
    items: ["Product design (web / responsive)", "Service design & blueprinting", "Design systems & tokens", "Brand identity & guidelines (TH/EN)"],
  },
  {
    group: "Research",
    items: ["Field observation & shadowing", "Journey mapping / swimlanes", "Usability testing", "Research synthesis"],
  },
  {
    group: "AI & DesignOps",
    items: ["AI product UX: trust & failure states", "Human-in-the-loop design", "AI-assisted workflows", "Claude Code", "Token Studio", "Figma-to-code pipelines"],
  },
  {
    group: "Tools & code",
    items: ["Figma suite", "Adobe suite", "Next.js + shadcn/ui", "Git / GitHub", "Playwright (visual audit)"],
  },
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
      <main id="main-content" className="mx-auto max-w-[1200px] px-6">
        {/* intro: a deep-olive color-block band, full-bleed (accent-text is
            the dark olive of the palette; used here as a fill) */}
        <section className="bleed bg-accent-text">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_420px] lg:py-24">
          <Reveal>
            <p className="text-sm text-accent-fg/70">About</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-[2.75rem] font-medium leading-[1.04] tracking-[-0.01em] text-accent-fg sm:text-[3.25rem] lg:text-6xl">
              Hi, I&apos;m Napasin, most people call me O.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-accent-fg/85">
              Product &amp; Service Designer at Looloo Technology, Bangkok. I design AI products for
              people whose work leaves{" "}
              <span className="font-medium text-accent-fg">no room for error</span>: doctors, nurses, and
              the teams behind them.
            </p>
            <p className="mt-8 text-sm text-accent-fg/70 tabular-nums">
              7 years designing · 4 years in AI healthcare · Bangkok
            </p>
          </Reveal>
          {/* portrait */}
          <MediaEntrance className="order-first mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-none lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-2">
              <Image
                src="/images/napasin-portrait.jpg"
                alt="Napasin Intarayotha (O)"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 280px"
                priority
                className="object-cover"
              />
            </div>
          </MediaEntrance>
          </div>
        </section>

        {/* career arc: timeline */}
        <Reveal className="mt-16">
        <section className="pt-2">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-fg sm:text-[2.5rem]">
                From craft to systems
              </h2>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-prose">
                Seven years, one thread:{" "}
                <span className="font-medium text-fg">understand the real work first, then design for it.</span>
              </p>
              <p className="mt-4 text-sm text-muted">
                Craft <span className="text-accent-text">→</span> Product <span className="text-accent-text">→</span>{" "}
                Service <span className="text-accent-text">→</span> Systems
              </p>
            </div>

            <ol className="relative border-l border-border pl-10">
              {TIMELINE.map((e, i) => (
                <li key={e.stage} className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-10 top-0 -translate-x-1/2 bg-bg py-1 font-display text-xl leading-none text-accent-text"
                  >
                    {i + 1}
                  </span>
                  <p className="flex items-baseline gap-2">
                    <span className="font-display text-lg font-medium text-fg">{e.stage}</span>
                    <span className="text-sm text-muted">· {e.tag}</span>
                  </p>
                  <p className="mt-3 max-w-[62ch] text-lg leading-relaxed text-prose">{e.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        </Reveal>

        {/* full-bleed pull quote */}
        <Reveal className="mt-20">
          <div className="bleed bg-surface-2 py-16">
            <blockquote className="mx-auto max-w-[24ch] px-6 text-center font-display text-3xl font-medium italic leading-[1.25] text-fg sm:text-4xl">
              Understand the real work first, then design for it.
            </blockquote>
          </div>
        </Reveal>

        {/* how I work */}
        <Section title="How I work">
          <ol className="border-y border-border">
            {PRINCIPLES.map((p, i) => (
              <li key={i} className="grid grid-cols-[48px_1fr] gap-4 border-t border-border py-7 first:border-t-0 sm:grid-cols-[64px_1fr] sm:gap-8">
                <span aria-hidden className="select-none font-display text-4xl leading-none text-faint">{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-medium leading-snug text-fg">{p.title}</h3>
                  <p className="mt-2.5 max-w-[68ch] text-base leading-relaxed text-prose">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* experience */}
        <Section title="Experience">
          <div className="divide-y divide-border border-y border-border">
            {EXPERIENCE.map((e) => (
              <div key={e.period} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <span className="text-sm text-accent-text tabular-nums">{e.period}</span>
                <div>
                  <h3 className="text-lg font-medium text-fg">{e.role}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-prose">{e.where}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* skills */}
        <Section title="Skills & tools">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="border-t-2 border-accent pt-4">
                <h3 className="font-display text-lg font-medium text-fg">{s.group}</h3>
                <ul className="mt-3.5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm leading-snug text-prose"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
                <p className="mt-1 text-[15px] leading-relaxed text-prose">{e.sub}</p>
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
    <Reveal className="mt-20">
      <section className="border-t border-border pt-14">
        <h2 className="mb-8 font-display text-[1.75rem] font-medium tracking-[-0.005em] text-fg sm:text-[2rem]">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}
