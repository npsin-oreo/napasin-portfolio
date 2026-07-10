import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight, ArrowRight, Quote, Sparkle, ImageFrame } from "@/components/icons";
import { ALL_CASES } from "@/lib/cases";
import { CoverThumb } from "@/components/cover-thumb";

export type Block =
  | { t: "p"; text: string }
  | { t: "quote"; text: string }
  | { t: "callout"; text: string } // standout key insight, heavier than a pull quote
  | { t: "sub"; text: string } // small bold lead-in inside a section
  | { t: "list"; items: string[] }
  | { t: "table"; rows: [string, string][] }
  | { t: "metric"; items: { value: string; label: string }[] } // big mono numbers, pulls the hard evidence out of prose
  | { t: "compare"; before: { value: string; label: string }; after: { value: string; label: string } } // before → after
  | { t: "steps"; items: { label: string; text: string }[] } // sequenced moves; the verb-noun label is the content, not "Step 1"
  | { t: "art"; label: string; src?: string; phone?: boolean; light?: boolean }; // artifact, real image when src is set (phone = portrait frame, light = on a white card for logos), else placeholder

export type Section = { n: string; title: string; blocks: Block[] };

export type CaseData = {
  slug: string; // this case's own route, used to exclude it from the "more work" footer
  cover?: string; // path to a cover image in /public; falls back to a branded poster
  coverFit?: "cover" | "contain"; // "cover" fills the frame (photos); "contain" (default) frames mockups on a backdrop
  brandLogo?: string; // product logo shown as a small brand chip in the hero
  kicker: string;
  title: string;
  subhead: string;
  thesis?: string;
  snapshot: [string, string][];
  impact?: string[];
  sections: Section[];
  learnings?: string[];
  repo?: string;
};

export function CaseStudy({ data }: { data: CaseData }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[820px] px-6">
        {/* hero */}
        <section className="pt-16 lg:pt-24">
          <Link href="/#work" className="font-mono text-sm text-muted transition-colors hover:text-fg">
            ← Work
          </Link>
          {data.brandLogo && (
            <div className="mt-8">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.brandLogo} alt={`${data.title} logo`} className="h-6 w-auto" />
              </span>
            </div>
          )}
          <p className={`${data.brandLogo ? "mt-5" : "mt-8"} font-mono text-sm text-accent-text`}>{data.kicker}</p>
          <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.06] tracking-[-0.01em] text-fg sm:text-[3.25rem]">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{data.subhead}</p>

          {data.thesis && (
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-mono text-xs uppercase tracking-wide text-accent-text">Thesis</p>
              <p className="mt-2 font-display text-2xl font-medium leading-[1.25] text-fg">{data.thesis}</p>
            </div>
          )}
        </section>

        {/* cover */}
        <Cover slug={data.slug} title={data.title} src={data.cover} fit={data.coverFit} />

        {/* snapshot */}
        <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
          {data.snapshot.map(([k, v]) => (
            <div key={k} className="bg-surface px-5 py-4">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">{k}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-fg">{v}</dd>
            </div>
          ))}
        </dl>

        {data.impact && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.impact.map((b) => (
              <span key={b} className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted">
                {b}
              </span>
            ))}
          </div>
        )}

        {data.repo && (
          <a
            href={data.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-fg transition-opacity hover:opacity-90"
          >
            Explore the repo <ArrowUpRight className="size-4" />
          </a>
        )}

        {/* sections */}
        {data.sections.map((s) => (
          <section key={s.n} className="mt-16 border-t border-border pt-12">
            <span aria-hidden className="block h-1 w-10 rounded-full bg-accent" />
            <h2 className="mt-5 max-w-[24ch] font-display text-[28px] font-medium leading-[1.12] tracking-[-0.005em] text-fg sm:text-[34px]">
              {s.title}
            </h2>
            <div className="mt-7 space-y-5">
              {s.blocks.map((b, i) => (
                <BlockView key={i} b={b} />
              ))}
            </div>
          </section>
        ))}

        {/* learnings */}
        {data.learnings && data.learnings.length > 0 && (
          <section className="mt-16 border-t border-border pt-12">
            <div className="flex items-center gap-3">
              <Sparkle className="size-5 text-accent-text" />
              <h2 className="font-display text-[26px] font-medium text-fg sm:text-[30px]">What I learned</h2>
            </div>
            <ol className="mt-8 space-y-4">
              {data.learnings.map((l, i) => (
                <li key={i} className="flex gap-4 rounded-card border border-border bg-surface p-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/[0.08] font-mono text-sm text-accent-text">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-lg leading-relaxed text-muted">{l}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* next up, more work */}
        <MoreWork current={data.slug} />
      </main>
      <Footer />
    </>
  );
}

function Cover({ slug, title, src, fit }: { slug: string; title: string; src?: string; fit?: "cover" | "contain" }) {
  const ref = ALL_CASES.find((c) => c.slug === slug);
  const tag = ref?.tag ?? "";

  if (src && fit === "cover") {
    // Photo, fill the frame edge to edge.
    return (
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${title}, cover`} className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-white/5" />
      </div>
    );
  }

  if (src) {
    // Mockup / screenshot, contained on a branded backdrop.
    return (
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-2 via-surface to-bg">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_12%,transparent),transparent)]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${title}, cover`}
          className="absolute inset-0 h-full w-full object-contain p-5 sm:p-8"
        />
      </div>
    );
  }

  // Branded poster placeholder until a real cover image is dropped in.
  return (
    <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-2 via-surface to-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_110%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_0%_100%,color-mix(in_oklab,var(--color-accent)_8%,transparent),transparent)]"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <span className="font-mono text-xs uppercase tracking-wide text-accent-text">{tag}</span>
        <span className="mt-2 max-w-[26ch] text-2xl font-medium leading-tight text-fg/90 sm:text-3xl">
          {title}
        </span>
      </div>
    </div>
  );
}

function MoreWork({ current }: { current: string }) {
  const others = ALL_CASES.filter((c) => c.slug !== current);
  return (
    <section className="mt-20 border-t border-border pt-14">
      <p className="font-mono text-sm text-accent-text">Next up · More work</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((c) => (
          <Link
            key={c.slug}
            href={c.slug}
            className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-accent/40"
          >
            <CoverThumb cover={c.cover} coverFit={c.coverFit} num={c.num} />
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                {c.num} · {c.tag}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium leading-[1.15] text-fg">{c.title}</h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-text">
                Read case <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p className="text-lg leading-relaxed text-muted">{b.text}</p>;
    case "quote":
      return (
        <figure className="relative pl-6">
          <span aria-hidden className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-0.5 rounded bg-accent" />
          <Quote aria-hidden className="mb-2 size-6 text-accent-text/60" />
          <blockquote className="font-display text-[1.6rem] font-medium italic leading-[1.3] text-fg">{b.text}</blockquote>
        </figure>
      );
    case "callout":
      return (
        <div className="relative flex gap-4 overflow-hidden rounded-card border border-accent/25 bg-accent/[0.06] p-6">
          <Sparkle aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" />
          <p className="text-lg font-medium leading-relaxed text-fg">{b.text}</p>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_7%,transparent),transparent)]"
          />
        </div>
      );
    case "sub":
      return (
        <p className="flex items-center gap-2.5 pt-2 text-base font-medium text-fg">
          <span aria-hidden className="h-4 w-1 shrink-0 rounded-full bg-accent" />
          {b.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-muted">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-hidden rounded-item border border-border">
          <table className="w-full text-[15px]">
            <tbody className="divide-y divide-border">
              {b.rows.map(([k, v], i) => (
                <tr key={i} className="divide-x divide-border">
                  <td className="w-1/2 bg-surface px-4 py-3 font-mono text-muted">{k}</td>
                  <td className="px-4 py-3 text-fg">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "metric":
      return (
        <div
          className={`grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border ${
            b.items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
          }`}
        >
          {b.items.map((m, i) => (
            <div key={i} className="bg-surface px-5 py-6">
              <div className="font-mono text-[2rem] font-medium leading-none tracking-tight text-fg tabular-nums sm:text-[2.5rem]">
                {m.value}
              </div>
              <div className="mt-3 text-sm leading-snug text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-item border border-border bg-surface px-5 py-5">
            <div className="font-mono text-xs uppercase tracking-wide text-muted">{b.before.label}</div>
            <div className="mt-2 font-mono text-2xl text-muted line-through decoration-border decoration-1">{b.before.value}</div>
          </div>
          <div className="grid place-items-center text-accent-text">
            <ArrowRight aria-hidden className="size-6 rotate-90 sm:rotate-0" />
          </div>
          <div className="rounded-item border border-accent/30 bg-accent/[0.06] px-5 py-5">
            <div className="font-mono text-xs uppercase tracking-wide text-accent-text">{b.after.label}</div>
            <div className="mt-2 font-mono text-2xl font-medium text-fg">{b.after.value}</div>
          </div>
        </div>
      );
    case "steps":
      return (
        <ol className="space-y-5">
          {b.items.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span aria-hidden className="mt-0.5 shrink-0 font-mono text-sm text-accent-text tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium text-fg">{s.label}</p>
                <p className="mt-1.5 text-lg leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "art":
      if (b.src && b.light) {
        return (
          <figure className="overflow-hidden rounded-card border border-border">
            <div className="grid place-items-center bg-white px-8 py-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.label} className="max-h-24 w-auto" />
            </div>
            <figcaption className="flex items-center gap-2 border-t border-border px-4 py-3 font-mono text-xs text-muted/70">
              <ImageFrame aria-hidden className="size-3.5 shrink-0" />
              {b.label}
            </figcaption>
          </figure>
        );
      }
      if (b.src && b.phone) {
        return (
          <figure className="overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-2 to-bg">
            <div className="mx-auto max-w-[288px] px-6 pt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.label} className="block w-full rounded-[28px] border border-border shadow-xl shadow-black/30" />
            </div>
            <figcaption className="mt-7 flex items-center gap-2 border-t border-border px-4 py-3 font-mono text-xs text-muted/70">
              <ImageFrame aria-hidden className="size-3.5 shrink-0" />
              {b.label}
            </figcaption>
          </figure>
        );
      }
      if (b.src) {
        return (
          <figure className="overflow-hidden rounded-card border border-border bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt={b.label} className="block h-auto w-full" />
            <figcaption className="flex items-center gap-2 border-t border-border px-4 py-3 font-mono text-xs text-muted/70">
              <ImageFrame aria-hidden className="size-3.5 shrink-0" />
              {b.label}
            </figcaption>
          </figure>
        );
      }
      return (
        <figure className="relative grid aspect-[16/9] place-items-center gap-3 overflow-hidden rounded-card border border-dashed border-border bg-gradient-to-br from-surface-2 to-bg">
          <ImageFrame aria-hidden className="size-7 text-muted/40" />
          <figcaption className="max-w-[80%] text-center font-mono text-xs text-muted/70">{b.label}</figcaption>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_8%,transparent),transparent)]"
          />
        </figure>
      );
  }
}
