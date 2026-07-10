import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CASES, MORE_WORK, CONTACT } from "@/lib/cases";
import { CoverThumb } from "@/components/cover-thumb";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "@/components/icons";

// Real, measured numbers: the hero's proof, sitting right next to the claim.
const PROOF = [
  { stat: "30,000+", label: "AI-scribed consultations in production, across 45 hospitals" },
  { stat: "20 min", label: "A clinic visit I service-designed, down from a whole day" },
  { stat: "5.0★", label: "From 170+ reviews at the clinic it runs in" },
  { stat: "176/176", label: "Selftests on my open-source DesignOps pipeline" },
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
        <section className="grid grid-cols-1 items-center gap-12 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
          <div>
            <p className="font-mono text-sm text-muted">Product &amp; Service Designer · Bangkok</p>
            <h1 className="mt-6 max-w-[15ch] font-display text-[3rem] font-medium leading-[1.03] tracking-[-0.01em] text-fg sm:text-6xl lg:text-[72px] lg:leading-[1.0]">
              I design AI people actually trust.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
              Seven years from brand craft to AI systems. Lately I design AI for healthcare and other
              work that leaves no room for error. The numbers on the right are the point.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-accent-fg transition-opacity hover:opacity-90">
                See the work <ArrowDown className="size-4" />
              </a>
              <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base text-fg transition-colors hover:bg-surface">
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>

          {/* evidence panel: the claim's proof, right beside it */}
          <dl className="overflow-hidden rounded-card border border-border bg-surface">
            {PROOF.map((p, i) => (
              <div
                key={p.stat}
                className={`flex items-baseline gap-5 px-6 py-5 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <dt className="w-[112px] shrink-0 font-mono text-[1.9rem] font-medium leading-none tracking-tight text-fg tabular-nums">
                  {p.stat}
                </dt>
                <dd className="text-[15px] leading-snug text-muted">{p.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── selected work ────────────────────────────────────── */}
        <section id="work" className="scroll-mt-20 border-t border-border pt-16">
          <p className="font-mono text-sm text-accent-text">Selected work</p>
          <h2 className="mt-3 max-w-[26ch] font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-fg sm:text-[2.5rem]">
            Four cases, four altitudes: service, product, brand, and process.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-accent/40"
              >
                <CoverThumb cover={c.cover} coverFit={c.coverFit} num={`0${i + 1}`} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">{c.tag}</p>
                  <h3 className="mt-3 font-display text-[1.35rem] font-medium leading-[1.15] text-fg">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.blurb}</p>
                  <p className="mt-5 text-[13px] leading-relaxed text-muted/90">{c.impact}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-text">
                    Read case <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* more work: scam */}
          <Link
            href={MORE_WORK.slug}
            className="group mt-5 flex flex-col gap-5 overflow-hidden rounded-card border border-dashed border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-item border border-border bg-surface-2 sm:aspect-[4/3] sm:w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MORE_WORK.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">More work · {MORE_WORK.tag}</p>
              <h3 className="mt-2 font-display text-xl font-medium text-fg">{MORE_WORK.title}</h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted">{MORE_WORK.blurb}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent-text" />
          </Link>
        </section>

        {/* ── proof strip ──────────────────────────────────────── */}
        <section className="mt-24 flex flex-col items-start justify-between gap-6 rounded-card border border-border bg-surface px-7 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-muted">
            <span className="text-fg">Brand → Product → Service → Systems.</span> One continuous thread, seven years in.
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
