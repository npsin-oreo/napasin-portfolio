import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { ALL_CASES } from "@/lib/cases";
import { IMG_DIMS } from "@/lib/image-dims";
import { Reveal } from "@/components/reveal";
import { MediaReveal } from "@/components/media-reveal";
import { CaseRail } from "@/components/case-rail";
import { StoryGlyph, type StoryIcon } from "@/components/story-icons";

// The case column is 820px wide at most; on small screens it fills the viewport.
const CASE_SIZES = "(min-width: 852px) 820px, 100vw";
// Wide media (cover, art marked wide) breaks out to ~1040px, capped so it never
// exceeds the viewport minus the page padding (column 820 + 2×24 padding = 868).
const WIDE = "lg:mx-[calc(0px-min(110px,(100vw-868px)/2))]";
const WIDE_SIZES = "(min-width: 1088px) 1040px, 100vw";
const dims = (src: string): [number, number] => IMG_DIMS[src] ?? [1600, 900];

export type Block =
  | { t: "p"; text: string }
  | { t: "lead"; text: string } // section standfirst: the first, larger serif paragraph a skimmer reads
  | { t: "aside"; value: string; label: string } // a short margin stat; floats into the right margin at xl, inline rule on smaller screens
  | { t: "band"; text: string } // the story's turning line as a full-bleed deep-olive band
  | { t: "duo"; items: { title: string; text: string; icon?: StoryIcon }[] } // 2-3 titled mini-cards in a grid, for parallel points that don't need full column height
  | { t: "figrow"; src: string; label: string; text: string; side?: "l" | "r" } // portrait/square image and a paragraph side by side
  | { t: "quote"; text: string }
  | { t: "callout"; text: string } // standout key insight, heavier than a pull quote
  | { t: "sub"; text: string } // small bold lead-in inside a section
  | { t: "list"; items: string[] }
  | { t: "table"; rows: [string, string][] }
  | { t: "metric"; items: { value: string; label: string }[] } // big mono numbers, pulls the hard evidence out of prose
  | { t: "compare"; before: { value: string; label: string }; after: { value: string; label: string } } // before → after
  | { t: "steps"; items: { label: string; text: string }[] } // sequenced moves; the verb-noun label is the content, not "Step 1"
  | { t: "flow"; input: string; steps: { label: string; note: string; keywords: string[] }[]; output: string; gate?: string } // a vertical waterfall: input, cascading phases (each with its inner-stage keywords), output
  | { t: "hflow"; items: { label: string; note?: string; emphasis?: boolean; icon?: StoryIcon }[] } // a left-to-right path of stations/steps; emphasis marks the node the story turns on
  | { t: "journey"; total: { value: string; label: string }; items: { label: string; time: string; min: number; tone?: "accent" | "wait" }[] } // a time-proportional journey bar: each segment's width is its real share of the total
  | { t: "art"; label: string; src?: string; phone?: boolean; light?: boolean; wide?: boolean }; // artifact, real image when src is set (phone = portrait frame, light = on a white card for logos, wide = break out of the column), else placeholder

export type Section = { n: string; kicker?: string; title: string; blocks: Block[] };

export type CaseData = {
  slug: string; // this case's own route, used to exclude it from the "more work" footer
  cover?: string; // path to a cover image in /public; falls back to a branded poster
  coverFit?: "cover" | "contain"; // "cover" fills the frame (photos); "contain" (default) frames mockups on a backdrop
  brandLogo?: string; // product logo shown as a small brand chip in the hero
  kicker: string;
  title: string;
  subhead: string;
  thesis?: string;
  tldr?: string[]; // 2-3 plain sentences for the at-a-glance panel
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
      <CaseRail items={data.sections.map((s) => ({ n: s.n, label: s.kicker ?? s.title }))} />
      <main id="main-content" className="mx-auto max-w-[820px] px-6">
        {/* hero */}
        <section className="pt-16 lg:pt-24">
          <Link href="/#work" className="text-sm text-muted transition-colors hover:text-fg">
            ← Work
          </Link>
          {data.brandLogo && (
            <div className="mt-10">
              <Image
                src={data.brandLogo}
                alt={`${data.title} logo`}
                width={dims(data.brandLogo)[0]}
                height={dims(data.brandLogo)[1]}
                className="h-12 w-auto sm:h-14"
              />
            </div>
          )}
          <p className={`${data.brandLogo ? "mt-5" : "mt-8"} text-sm text-accent-text`}>{data.kicker}</p>
          <h1 className="mt-4 font-display text-[3rem] font-medium leading-[1.06] tracking-[-0.01em] text-fg sm:text-[3.75rem]">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-prose">{data.subhead}</p>

          {data.thesis && (
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-xs uppercase tracking-wide text-accent-text">Thesis</p>
              <p className="mt-2 font-display text-2xl font-medium italic leading-[1.25] text-fg">{data.thesis}</p>
            </div>
          )}
        </section>

        {/* cover */}
        <Cover slug={data.slug} title={data.title} src={data.cover} fit={data.coverFit} />

        {/* at a glance: tldr lead + snapshot + impact, one panel */}
        <div className="mt-12 rounded-card bg-surface p-7 shadow-card">
          {data.tldr && data.tldr.length > 0 && (
            <p className="font-display text-xl leading-snug text-fg">{data.tldr.join(" ")}</p>
          )}
          <dl className={`${data.tldr?.length ? "mt-6 border-t border-border pt-6" : ""} grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2`}>
            {data.snapshot.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wide text-muted">{k}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-fg">{v}</dd>
              </div>
            ))}
          </dl>
          {data.impact && (
            <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-accent-text tabular-nums">
              {data.impact.join("  ·  ")}
            </p>
          )}
          {data.repo && (
            <a
              href={data.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-fg transition-opacity hover:opacity-90"
            >
              Explore the repo <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>

        {/* sections */}
        {data.sections.map((s) => (
          <Reveal key={s.n} className="mt-16">
            <section id={`section-${s.n}`} className="scroll-mt-24 border-t border-border pt-12">
              <div className="relative">
                <span
                  aria-hidden
                  className="hidden select-none font-display text-6xl leading-none text-faint xl:absolute xl:-left-28 xl:top-0 xl:block"
                >
                  {s.n}
                </span>
                {s.kicker && (
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-accent-text">{s.kicker}</p>
                )}
                <h2 className="max-w-[24ch] font-display text-[28px] font-medium leading-[1.12] tracking-[-0.005em] text-fg sm:text-[34px]">
                  <span aria-hidden className="mr-3 select-none font-display text-2xl text-faint xl:hidden">{s.n}</span>
                  {s.title}
                </h2>
              </div>
              <div className="mt-7 space-y-5">
                {s.blocks.map((b, i) => (
                  <BlockView key={i} b={b} />
                ))}
              </div>
            </section>
          </Reveal>
        ))}

        {/* learnings */}
        {data.learnings && data.learnings.length > 0 && (
          <Reveal className="mt-16">
            <section className="border-t border-border pt-12">
              <h2 className="font-display text-[26px] font-medium text-fg sm:text-[30px]">What I learned</h2>
              <ol className="mt-6">
                {data.learnings.map((l, i) => (
                  <li key={i} className="flex gap-5 border-t border-border py-5 first:border-t-0">
                    <span aria-hidden className="select-none font-display text-2xl leading-none text-faint">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-relaxed text-prose">{l}</p>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
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
    // Photo: fill the frame edge to edge, square corners, wide breakout.
    return (
      <MediaReveal className={`mt-10 ${WIDE}`}>
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
          <Image src={src} alt={`${title}, cover`} fill priority sizes={WIDE_SIZES} className="object-cover" />
        </div>
      </MediaReveal>
    );
  }

  if (src) {
    // Mockup / screenshot: contained on a flat tinted backdrop.
    return (
      <MediaReveal className={`mt-10 ${WIDE}`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-surface-2">
          <Image
            src={src}
            alt={`${title}, cover`}
            fill
            priority
            sizes={WIDE_SIZES}
            className="object-contain p-5 sm:p-8"
          />
        </div>
      </MediaReveal>
    );
  }

  // Poster placeholder until a real cover image is dropped in.
  return (
    <div className={`mt-10 ${WIDE}`}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-surface-2">
        <span aria-hidden className="absolute right-6 top-4 select-none font-display text-8xl text-faint/40">
          {ref?.num}
        </span>
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <span className="text-xs uppercase tracking-wide text-accent-text">{tag}</span>
          <span className="mt-2 max-w-[26ch] font-display text-2xl font-medium leading-tight text-fg sm:text-3xl">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

function MoreWork({ current }: { current: string }) {
  const others = ALL_CASES.filter((c) => c.slug !== current);
  return (
    <section className="mt-20 border-t border-border pt-14">
      <h2 className="font-display text-[26px] font-medium text-fg">More work</h2>
      <div className="mt-6">
        {others.map((c) => (
          <Link
            key={c.slug}
            href={c.slug}
            className="group flex items-center gap-5 border-t border-border py-4 transition-colors last:border-b hover:bg-surface-2/50"
          >
            <span aria-hidden className="w-8 select-none font-display text-2xl leading-none text-faint">{c.num}</span>
            <div className="relative hidden h-14 w-20 shrink-0 overflow-hidden rounded-item bg-surface-2 sm:block">
              {c.cover && (
                <Image src={c.cover} alt="" fill sizes="80px" className={c.coverFit === "contain" ? "object-contain p-1.5" : "object-cover"} />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-display text-lg font-medium text-fg">{c.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{c.tag}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent-text" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p className="text-[1.0625rem] leading-relaxed text-prose">{b.text}</p>;
    case "lead":
      return (
        <p className="pb-1 font-display text-[1.35rem] leading-[1.45] text-fg sm:text-2xl sm:leading-[1.4]">
          {b.text}
        </p>
      );
    case "aside":
      return (
        <div className="relative">
          <div className="flex items-baseline gap-3 border-l-2 border-accent pl-4 xl:absolute xl:-right-48 xl:top-0 xl:block xl:w-40 xl:border-l-0 xl:border-t-2 xl:pl-0 xl:pt-2">
            <div className="font-display text-2xl font-medium text-accent-text">{b.value}</div>
            <div className="text-sm leading-snug text-muted xl:mt-1">{b.label}</div>
          </div>
        </div>
      );
    case "band":
      return (
        <div className="bleed my-4 bg-accent-text py-12 sm:py-14">
          <p className="mx-auto max-w-[40ch] px-6 text-center text-balance font-display text-2xl italic leading-snug text-accent-fg sm:text-[1.75rem]">
            “{b.text}”
          </p>
        </div>
      );
    case "duo":
      return (
        <div className={`grid grid-cols-1 gap-4 pt-2 ${b.items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {b.items.map((it, i) => (
            <div key={i} className="rounded-card border border-border bg-surface p-5">
              {it.icon && (
                <span className="mb-3.5 grid size-9 place-items-center rounded-item border border-accent/25 bg-accent/[0.07] text-accent-text">
                  <StoryGlyph name={it.icon} className="size-5" />
                </span>
              )}
              <h3 className="font-display text-lg font-medium leading-snug text-fg">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-prose">{it.text}</p>
            </div>
          ))}
        </div>
      );
    case "figrow":
      return (
        <figure className="grid grid-cols-1 items-center gap-6 pt-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-8">
          <div className={b.side === "r" ? "sm:order-2" : ""}>
            <div className="rounded-card border border-border bg-surface-2 p-4">
              <Image
                src={b.src}
                alt={b.label}
                width={dims(b.src)[0]}
                height={dims(b.src)[1]}
                sizes="(min-width: 640px) 320px, 80vw"
                className="mx-auto block h-auto w-full max-w-[260px] rounded-item"
              />
            </div>
            <figcaption className="mt-2 text-xs leading-snug text-muted">{b.label}</figcaption>
          </div>
          <p className={`text-[1.0625rem] leading-relaxed text-prose ${b.side === "r" ? "sm:order-1" : ""}`}>{b.text}</p>
        </figure>
      );
    case "quote":
      return (
        <figure className="relative pl-6 pt-2">
          <span aria-hidden className="absolute left-0 top-2 h-[calc(100%-1rem)] w-0.5 rounded bg-accent" />
          <blockquote className="font-display text-[1.75rem] font-medium italic leading-[1.3] text-fg">{b.text}</blockquote>
        </figure>
      );
    case "callout":
      return (
        <div className="flex gap-4 rounded-r-item border-l-[3px] border-clay bg-surface-2/70 p-6">
          <span className="grid size-9 shrink-0 place-items-center rounded-item bg-clay/10 text-clay-text">
            <StoryGlyph name="lightbulb" className="size-5" />
          </span>
          <p className="font-display text-xl leading-relaxed text-fg">{b.text}</p>
        </div>
      );
    case "sub":
      return (
        <p className="flex items-center gap-2.5 pt-2 text-base font-medium text-fg">
          <span aria-hidden className="size-2 shrink-0 bg-accent" />
          {b.text}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-prose">
              <span aria-hidden className="mt-3.5 h-px w-3 shrink-0 bg-accent" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="border-y border-border">
          <table className="w-full text-[15px]">
            <tbody className="divide-y divide-border">
              {b.rows.map(([k, v], i) => (
                <tr key={i}>
                  <td className="w-1/2 py-3 pr-4 text-muted">{k}</td>
                  <td className="py-3 text-prose">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "metric":
      return (
        <div className={`grid grid-cols-1 gap-4 pt-2 ${b.items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {b.items.map((m, i) => (
            <div key={i} className="rounded-card border-t-2 border-accent bg-surface p-5 shadow-card sm:p-6">
              <div className="font-display text-[2.5rem] font-medium leading-none tracking-tight text-fg tabular-nums">
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
            <div className="text-xs uppercase tracking-wide text-muted">{b.before.label}</div>
            <div className="mt-2 font-display text-2xl text-muted line-through decoration-border decoration-1">{b.before.value}</div>
          </div>
          <div className="grid place-items-center text-accent-text">
            <ArrowRight aria-hidden className="size-6 rotate-90 sm:rotate-0" />
          </div>
          <div className="rounded-item border border-accent/30 bg-accent/[0.07] px-5 py-5">
            <div className="text-xs uppercase tracking-wide text-accent-text">{b.after.label}</div>
            <div className="mt-2 font-display text-2xl font-medium text-fg">{b.after.value}</div>
          </div>
        </div>
      );
    case "steps":
      return (
        <ol className="space-y-5">
          {b.items.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span aria-hidden className="mt-0.5 w-6 shrink-0 select-none font-display text-xl leading-none text-muted">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-fg">{s.label}</p>
                <p className="mt-1.5 text-lg leading-relaxed text-prose">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "flow":
      return (
        <figure className="overflow-hidden rounded-card border border-border bg-surface">
          {/* input */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border px-5 py-3.5 sm:px-6">
            <span className="text-xs uppercase tracking-wide text-muted">Goes in</span>
            <span className="text-[15px] text-fg">{b.input}</span>
          </div>
          {/* waterfall: phases cascade down a rail, each showing the stages inside it */}
          <ol className="px-5 py-6 sm:px-6">
            {b.steps.map((s, i) => (
              <li key={i} className="flex gap-4 pb-7 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-item border border-accent/30 bg-accent/[0.07] text-xs text-accent-text tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < b.steps.length - 1 && <span aria-hidden className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className="min-w-0 pb-1">
                  <p className="font-display text-lg font-medium leading-tight text-fg">{s.label}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{s.note}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {s.keywords.map((k) => (
                      <span
                        key={k}
                        className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] leading-none text-muted"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          {/* output */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border px-5 py-3.5 sm:px-6">
            <span className="text-xs uppercase tracking-wide text-accent-text">Comes out</span>
            <span className="text-[15px] text-fg">{b.output}</span>
          </div>
          {b.gate && (
            <figcaption className="border-t-[3px] border-clay bg-surface-2/70 px-5 py-3.5 text-[13px] leading-snug text-prose sm:px-6">
              {b.gate}
            </figcaption>
          )}
        </figure>
      );
    case "hflow":
      return (
        <figure className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-stretch">
          {b.items.map((s, i) => (
            <div key={i} className="contents">
              {i > 0 && (
                <span aria-hidden className="grid shrink-0 place-items-center self-center text-muted">
                  <ArrowRight className="size-4 rotate-90 sm:rotate-0" />
                </span>
              )}
              <div
                className={`flex-1 rounded-item border px-4 py-3 ${
                  s.emphasis ? "border-accent/40 bg-accent/[0.07]" : "border-border bg-surface"
                }`}
              >
                <p className={`flex items-center gap-1.5 text-sm font-medium ${s.emphasis ? "text-accent-text" : "text-fg"}`}>
                  {s.icon && <StoryGlyph name={s.icon} className="size-4 shrink-0" />}
                  {s.label}
                </p>
                {s.note && <p className="mt-1 text-xs leading-snug text-muted">{s.note}</p>}
              </div>
            </div>
          ))}
        </figure>
      );
    case "journey": {
      const totalMin = b.items.reduce((sum, s) => sum + s.min, 0);
      const seg = (tone?: "accent" | "wait") =>
        tone === "accent" ? "bg-accent" : tone === "wait" ? "bg-border" : "bg-surface-2";
      const dot = (tone?: "accent" | "wait") =>
        tone === "accent" ? "bg-accent" : tone === "wait" ? "bg-border" : "border border-border bg-surface-2";
      return (
        <figure className="pt-2">
          {/* the bar: each segment sized to its real share of the visit */}
          <div aria-hidden className="flex h-10 w-full gap-0.5 overflow-hidden rounded-item">
            {b.items.map((s, i) => (
              <div key={i} className={seg(s.tone)} style={{ width: `${(s.min / totalMin) * 100}%` }} />
            ))}
          </div>
          <dl className="mt-4 space-y-1.5">
            {b.items.map((s, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span aria-hidden className={`size-2.5 shrink-0 translate-y-px rounded-sm ${dot(s.tone)}`} />
                <dt className={`text-[15px] ${s.tone === "accent" ? "font-medium text-fg" : "text-prose"}`}>{s.label}</dt>
                <span aria-hidden className="mx-1 flex-1 border-b border-dotted border-border" />
                <dd className="text-sm text-fg tabular-nums">{s.time}</dd>
              </div>
            ))}
            <div className="flex items-baseline gap-3 border-t border-border pt-2.5">
              <dt className="text-[15px] font-medium text-fg">{b.total.label}</dt>
              <span aria-hidden className="mx-1 flex-1" />
              <dd className="font-display text-xl font-medium text-accent-text tabular-nums">{b.total.value}</dd>
            </div>
          </dl>
        </figure>
      );
    }
    case "art": {
      const wide = b.wide ? WIDE : "";
      if (b.src && b.light) {
        return (
          <figure className={`overflow-hidden rounded-card border border-border ${wide}`}>
            <div className="grid place-items-center bg-white px-8 py-16">
              <Image src={b.src} alt={b.label} width={dims(b.src)[0]} height={dims(b.src)[1]} sizes="(min-width: 852px) 400px, 60vw" className="h-auto max-h-24 w-auto" />
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">{b.label}</figcaption>
          </figure>
        );
      }
      if (b.src && b.phone) {
        return (
          <figure className="overflow-hidden rounded-card bg-surface-2">
            <div className="mx-auto max-w-[288px] px-6 pt-8">
              <Image src={b.src} alt={b.label} width={dims(b.src)[0]} height={dims(b.src)[1]} sizes="288px" className="block h-auto w-full rounded-[28px] border border-border shadow-card" />
            </div>
            <figcaption className="mt-7 border-t border-border px-4 py-3 text-xs text-muted">{b.label}</figcaption>
          </figure>
        );
      }
      if (b.src) {
        return (
          <figure className={`overflow-hidden rounded-card border border-border bg-surface ${wide}`}>
            <div className="p-4 sm:p-6">
              <Image src={b.src} alt={b.label} width={dims(b.src)[0]} height={dims(b.src)[1]} sizes={b.wide ? WIDE_SIZES : CASE_SIZES} className="block h-auto w-full" />
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">{b.label}</figcaption>
          </figure>
        );
      }
      return (
        <figure className="grid aspect-[16/9] place-items-center overflow-hidden rounded-card border border-dashed border-border bg-surface-2/60">
          <figcaption className="max-w-[80%] text-center text-xs text-muted">{b.label}</figcaption>
        </figure>
      );
    }
  }
}
