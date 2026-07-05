import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Quote, Sparkle, ImageFrame } from "@/components/icons";
import { ALL_CASES } from "@/lib/cases";

export type Block =
  | { t: "p"; text: string }
  | { t: "quote"; text: string }
  | { t: "callout"; text: string } // standout key insight — heavier than a pull quote
  | { t: "sub"; text: string } // small bold lead-in inside a section
  | { t: "list"; items: string[] }
  | { t: "table"; rows: [string, string][] }
  | { t: "art"; label: string }; // artifact placeholder

export type Section = { n: string; title: string; blocks: Block[] };

export type CaseData = {
  slug: string; // this case's own route — used to exclude it from the "more work" footer
  cover?: string; // path to a cover image in /public; falls back to a branded poster
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
          <p className="mt-8 font-mono text-sm text-accent">{data.kicker}</p>
          <h1 className="mt-4 text-[2.25rem] font-medium leading-[1.08] tracking-[-0.02em] text-fg sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{data.subhead}</p>

          {data.thesis && (
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">Thesis</p>
              <p className="mt-2 text-xl font-medium leading-snug text-fg">{data.thesis}</p>
            </div>
          )}
        </section>

        {/* cover */}
        <Cover slug={data.slug} title={data.title} src={data.cover} />

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
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-item border border-accent/25 bg-accent/[0.08] font-mono text-sm text-accent">
                {s.n}
              </span>
              <h2 className="pt-1 text-2xl font-medium leading-snug tracking-[-0.01em] text-fg sm:text-[28px]">
                {s.title}
              </h2>
            </div>
            <div className="mt-6 space-y-5">
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
              <Sparkle className="size-5 text-accent" />
              <h2 className="text-2xl font-medium tracking-[-0.01em] text-fg sm:text-[28px]">What I learned</h2>
            </div>
            <ol className="mt-8 space-y-4">
              {data.learnings.map((l, i) => (
                <li key={i} className="flex gap-4 rounded-card border border-border bg-surface p-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/[0.08] font-mono text-sm text-accent">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-lg leading-relaxed text-muted">{l}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* next up — more work */}
        <MoreWork current={data.slug} />
      </main>
      <Footer />
    </>
  );
}

function Cover({ slug, title, src }: { slug: string; title: string; src?: string }) {
  const ref = ALL_CASES.find((c) => c.slug === slug);
  const num = ref?.num ?? "";
  const tag = ref?.tag ?? "";

  if (src) {
    return (
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-2 via-surface to-bg">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_12%,transparent),transparent)]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${title} — cover`}
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
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-4 select-none font-mono text-[11rem] leading-none text-fg/[0.05] sm:text-[15rem]"
      >
        {num}
      </span>
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <span className="font-mono text-xs uppercase tracking-wide text-accent">
          {num} · {tag}
        </span>
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
      <p className="font-mono text-sm text-accent">Next up · More work</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((c) => (
          <Link
            key={c.slug}
            href={c.slug}
            className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-accent/40"
          >
            <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 to-bg">
              <span aria-hidden className="pointer-events-none select-none font-mono text-6xl text-fg/[0.04]">
                {c.num}
              </span>
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent)]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                {c.num} · {c.tag}
              </p>
              <h3 className="mt-3 text-lg font-medium leading-snug text-fg">{c.title}</h3>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent">
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
          <Quote aria-hidden className="mb-2 size-6 text-accent/60" />
          <blockquote className="text-xl font-medium leading-snug text-fg">{b.text}</blockquote>
        </figure>
      );
    case "callout":
      return (
        <div className="relative flex gap-4 overflow-hidden rounded-card border border-accent/25 bg-accent/[0.06] p-6">
          <Sparkle aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
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
    case "art":
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
