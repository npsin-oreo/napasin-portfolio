import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CASES, MORE_WORK, CONTACT } from "@/lib/cases";
import { CoverThumb } from "@/components/cover-thumb";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "@/components/icons";

// Real, measured numbers: the hero's proof, sitting right next to the claim.
const PROOF = [
  { stat: "30,000+", label: "AI-scribed consultations in production, across 45 hospitals" },
  { stat: "20 min", label: "A clinic visit I service-designed, down from a whole day" },
  { stat: "5.0★", label: "From 170+ reviews at the clinic it runs in" },
  { stat: "187/187", label: "Selftests on my open-source DesignOps pipeline" },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="main-content" className="mx-auto max-w-[1200px] px-6">
        {/* ── hero: centered claim ─────────────────────────────── */}
        <section className="pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <RevealStagger className="flex flex-col items-center">
            <RevealItem>
              <p className="font-mono text-sm text-muted">Product &amp; Service Designer · Bangkok</p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 max-w-[18ch] font-display text-[3.25rem] font-medium leading-[1.02] tracking-[-0.015em] text-fg sm:text-7xl lg:text-[88px] lg:leading-[0.98]">
                I design AI people actually trust.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted sm:text-xl">
                Seven years from brand craft to AI systems. Lately I design AI for healthcare and other
                work that leaves no room for error.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-accent-fg transition-[opacity,transform] hover:opacity-90 active:scale-[0.97]">
                  See the work <ArrowDown className="size-4" />
                </a>
                <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base text-fg transition-[background-color,transform] hover:bg-surface active:scale-[0.97]">
                  <Download className="size-4" /> Resume
                </a>
              </div>
            </RevealItem>
          </RevealStagger>
        </section>

        {/* ── evidence band: the claim's proof, measured ───────── */}
        <section className="border-t border-border pt-10 pb-4">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-wide text-muted">In production, measured</p>
          </Reveal>
          <RevealStagger className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border lg:grid-cols-4">
            {PROOF.map((p) => (
              <RevealItem key={p.stat} className="bg-surface px-5 py-6">
                <div className="font-mono text-[2rem] font-medium leading-none tracking-tight text-fg tabular-nums sm:text-[2.25rem]">
                  {p.stat}
                </div>
                <div className="mt-3 text-sm leading-snug text-muted">{p.label}</div>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* ── selected work ────────────────────────────────────── */}
        <section id="work" className="scroll-mt-20 border-t border-border pt-16">
          <Reveal>
            <p className="font-mono text-sm text-accent-text">Selected work</p>
            <h2 className="mt-3 max-w-[26ch] font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-fg sm:text-[2.5rem]">
              Four cases, four altitudes: service, product, brand, and process.
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CASES.map((c, i) => (
              <RevealItem key={c.slug} className="flex">
                <Link
                  href={c.slug}
                  className="group flex w-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
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
              </RevealItem>
            ))}
          </RevealStagger>

          {/* more work: scam */}
          <Reveal>
          <Link
            href={MORE_WORK.slug}
            className="group mt-5 flex flex-col gap-5 overflow-hidden rounded-card border border-dashed border-border bg-surface/40 p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-item border border-border bg-surface-2 sm:aspect-[4/3] sm:w-44">
              <Image
                src={MORE_WORK.cover}
                alt=""
                fill
                sizes="(min-width: 640px) 176px, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">More work · {MORE_WORK.tag}</p>
              <h3 className="mt-2 font-display text-xl font-medium text-fg">{MORE_WORK.title}</h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted">{MORE_WORK.blurb}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent-text" />
          </Link>
          </Reveal>
        </section>

        {/* ── proof strip ──────────────────────────────────────── */}
        <Reveal className="mt-24">
        <section className="flex flex-col items-start justify-between gap-6 rounded-card border border-border bg-surface px-7 py-6 sm:flex-row sm:items-center">
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
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
