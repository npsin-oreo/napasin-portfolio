import type { ComponentProps } from "react";

/* ── inline icons (no dependency on the Figma asset URLs, which expire) ───────── */
function Check(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowDown(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Download(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path d="M8 2v8m0 0l3-3m-3 3L5 7M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PROOF = [
  { stat: "7 yrs", label: "designing" },
  { stat: "In prod", label: "AI medical scribe" },
  { stat: "~20 min", label: "clinic visit, not a day" },
];

export default function Home() {
  return (
    <>
      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <a href="/" className="font-mono text-sm text-fg">
            napasin<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-1 font-mono text-sm text-muted">
            <a href="#work" className="rounded-full px-3 py-2 transition-colors hover:text-fg">Work</a>
            <a href="#about" className="rounded-full px-3 py-2 transition-colors hover:text-fg">About</a>
            <a href="#" className="rounded-full px-3 py-2 transition-colors hover:text-fg">Resume</a>
            <a href="#contact" className="ml-2 rounded-full bg-accent px-4 py-2 text-accent-fg transition-opacity hover:opacity-90">
              Say hi
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[1200px] px-6">
        {/* hero */}
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
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base text-accent-fg transition-opacity hover:opacity-90"
              >
                See my work <ArrowDown className="size-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base text-fg transition-colors hover:bg-surface"
              >
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>

          {/* proof card */}
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
      </main>
    </>
  );
}
