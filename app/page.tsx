import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CASES, MORE_WORK, CONTACT } from "@/lib/cases";
import { Check, ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "@/components/icons";

const PROOF = [
  { stat: "7 yrs", label: "designing" },
  { stat: "In prod", label: "AI medical scribe" },
  { stat: "~20 min", label: "clinic visit, not a day" },
];

export default function Home() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg">
        Skip to content
      </a>
      <Nav />

      <main className="mx-auto max-w-[1200px] px-6">
        {/* ── hero ─────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 items-center gap-12 pt-20 pb-24 lg:grid-cols-[1fr_476px] lg:gap-10 lg:pt-28">
          <div>
            <p className="flex items-center gap-2 font-mono text-sm text-muted">
              <span className="text-lg" aria-hidden>👋</span> Hey, I&apos;m O · Bangkok
            </p>
            <h1 className="mt-7 max-w-[11ch] text-[2.75rem] font-medium leading-[1.04] tracking-[-0.02em] text-fg sm:text-6xl lg:text-[72px] lg:leading-[1.02]">
              I design AI people actually trust.
            </h1>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-muted">
              Product &amp; Service Designer, 7 years in. Lately I design AI for healthcare and other
              high-stakes work.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base text-accent-fg transition-opacity hover:opacity-90">
                See my work <ArrowDown className="size-4" />
              </a>
              <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base text-fg transition-colors hover:bg-surface">
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>

          <div className="rounded-card border border-border bg-surface p-3.5">
            <p className="px-4 py-3 font-sans text-sm text-muted">A few quick proof points</p>
            <div className="flex flex-col gap-2">
              {PROOF.map((p) => (
                <div key={p.stat} className="flex items-center gap-4 rounded-item bg-bg p-4">
                  <Check className="size-5 shrink-0 text-accent" />
                  <span className="min-w-[72px] font-mono text-2xl text-fg">{p.stat}</span>
                  <span className="text-base text-muted">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── selected work ────────────────────────────────────── */}
        <section id="work" className="scroll-mt-20 border-t border-border pt-16">
          <p className="font-mono text-sm text-accent">Selected work</p>
          <h2 className="mt-3 max-w-[26ch] text-3xl font-medium tracking-[-0.02em] text-fg sm:text-4xl">
            Four cases, four altitudes — service, product, brand, and process.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-accent/40"
              >
                <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 to-bg">
                  <span aria-hidden className="pointer-events-none select-none font-mono text-7xl text-fg/[0.04]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent)]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">{c.tag}</p>
                  <h3 className="mt-3 text-xl font-medium leading-snug text-fg">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.blurb}</p>
                  <p className="mt-5 font-mono text-xs text-muted/90">{c.impact}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent">
                    Read case <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* more work — scam */}
          <Link
            href={MORE_WORK.slug}
            className="group mt-5 flex flex-col gap-2 rounded-card border border-dashed border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">More work · {MORE_WORK.tag}</p>
              <h3 className="mt-2 text-lg font-medium text-fg">{MORE_WORK.title}</h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted">{MORE_WORK.blurb}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
          </Link>
        </section>

        {/* ── proof strip ──────────────────────────────────────── */}
        <section className="mt-24 flex flex-col items-start justify-between gap-6 rounded-card border border-border bg-surface px-7 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-muted">
            7 years in design · 4 years in AI healthcare ·{" "}
            <span className="text-fg">Brand → Product → Service → Systems</span>
          </p>
          <div className="flex items-center gap-2">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2.5 text-muted transition-colors hover:text-fg">
              <Github className="size-4" />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted transition-colors hover:text-fg">
              <Linkedin className="size-4" />
            </a>
            <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 font-mono text-sm text-muted transition-colors hover:text-fg">
              <Download className="size-4" /> Resume
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
