import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export type Block =
  | { t: "p"; text: string }
  | { t: "quote"; text: string }
  | { t: "sub"; text: string } // small bold lead-in inside a section
  | { t: "list"; items: string[] }
  | { t: "table"; rows: [string, string][] }
  | { t: "art"; label: string }; // artifact placeholder

export type Section = { n: string; title: string; blocks: Block[] };

export type CaseData = {
  kicker: string;
  title: string;
  subhead: string;
  thesis?: string;
  snapshot: [string, string][];
  impact?: string[];
  sections: Section[];
  learnings: string[];
  next: { title: string; href: string };
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
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h2 className="text-2xl font-medium leading-snug tracking-[-0.01em] text-fg sm:text-[28px]">
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
        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl font-medium tracking-[-0.01em] text-fg sm:text-[28px]">What I learned</h2>
          <ol className="mt-6 space-y-5">
            {data.learnings.map((l, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 font-mono text-sm text-accent">{i + 1}</span>
                <p className="text-lg leading-relaxed text-muted">{l}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* next */}
        <Link
          href={data.next.href}
          className="group mt-16 flex items-center justify-between gap-6 rounded-card border border-border bg-surface p-6 transition-colors hover:border-accent/40"
        >
          <span>
            <span className="font-mono text-xs uppercase tracking-wide text-muted">Next case</span>
            <span className="mt-1.5 block text-lg font-medium text-fg">{data.next.title}</span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p className="text-lg leading-relaxed text-muted">{b.text}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-5 text-xl font-medium leading-snug text-fg">
          {b.text}
        </blockquote>
      );
    case "sub":
      return <p className="pt-1 text-base font-medium text-fg">{b.text}</p>;
    case "list":
      return (
        <ul className="space-y-2">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-muted">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
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
        <div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-card border border-dashed border-border bg-gradient-to-br from-surface-2 to-bg">
          <span className="max-w-[80%] text-center font-mono text-xs text-muted/70">{b.label}</span>
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_8%,transparent),transparent)]" />
        </div>
      );
  }
}
