import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CASES, CONTACT } from "@/lib/cases";
import { CoverThumb } from "@/components/cover-thumb";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { MediaReveal } from "@/components/media-reveal";
import { JourneyLine } from "@/components/journey-line";
import { ArrowDown, ArrowRight, Download } from "@/components/icons";

const [kindmore, presscribe, virtualAgent, designops] = CASES;

// The homepage is a narrative feed, not a grid: two featured cases told at
// hero scale (each in a different composition), two secondary cards, one
// hairline row. Evidence lives inline with each story, not in a stat band.
export default function Home() {
  return (
    <>
      <Nav />

      <main id="main-content" className="mx-auto max-w-[1200px] px-6">
        {/* ── hero: left-aligned, the claim carries the room ───── */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-24">
          <JourneyLine />
          <RevealStagger mount className="relative flex flex-col items-start">
            <RevealItem>
              <p className="text-sm text-muted">Product &amp; Service Designer · Bangkok</p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 max-w-[13ch] font-display text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-fg sm:text-7xl lg:text-[96px] lg:leading-[1.0]">
                I design the <em className="italic">human</em> side of AI.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-8 max-w-[56ch] text-pretty text-lg leading-relaxed text-prose sm:text-xl">
                I&apos;m Napasin, a product and service designer
                <br className="hidden sm:block" /> seven years into the craft, four of them in healthcare AI:
                <br className="hidden sm:block" /> clinics, scribes, and systems people trust with their care.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-10 flex flex-wrap items-center gap-3">
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

        {/* ── bridge: the claim's proof, in one sentence ───────── */}
        <Reveal className="bleed bg-accent-text">
          <div className="mx-auto max-w-[60ch] px-6 py-14 text-center sm:py-16">
            <p className="text-balance font-display text-2xl italic leading-snug text-accent-fg sm:text-[1.75rem]">
              “The measure of AI isn&apos;t what it automates.
              <br className="hidden sm:block" /> It&apos;s what it gives back: attention, time, and&nbsp;trust.”
            </p>
            <p className="mt-6 text-sm tracking-wide text-accent-fg/70">
              Four projects below, one thread.
            </p>
          </div>
        </Reveal>

        {/* ── the work: narrative feed ─────────────────────────── */}
        <section id="work" className="scroll-mt-20 pt-20">
          <h2 className="sr-only">The work</h2>

          {/* 01 · KindMore — panel-split, text left / photo right */}
          <article className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <MediaReveal className="lg:order-2">
              <Link href={kindmore.slug} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface-2">
                  <Image
                    src="/images/kindmore-front.jpg"
                    alt="The storefront of KindMore Clinic, Bangkok"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </MediaReveal>
            <Reveal className="lg:order-1">
              <p aria-hidden className="select-none font-display text-6xl leading-none text-faint sm:text-7xl">01</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-muted">{kindmore.tag}</p>
              <h3 className="mt-2 max-w-[20ch] font-display text-3xl font-medium leading-[1.1] text-fg sm:text-4xl">
                <Link href={kindmore.slug} className="hover:text-accent-text transition-colors">{kindmore.title}</Link>
              </h3>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-prose">{kindmore.blurb}</p>
              <p className="mt-5 text-sm text-accent-text tabular-nums">20 min door to door · 5.0★ from 170+ reviews</p>
              <Link href={kindmore.slug} className="group mt-4 inline-flex items-center gap-1.5 text-base text-accent-text">
                Read the case <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </article>

          {/* 02 · PresScribe — panel-split */}
          <article className="mt-24 grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <MediaReveal>
              <Link href={presscribe.slug} className="group block">
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-card bg-surface-2">
                  <Image
                    src="/images/presscribe-cover.png"
                    alt="PresScribe, the AI medical scribe, in the exam room"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </MediaReveal>
            <Reveal>
              <p aria-hidden className="select-none font-display text-6xl leading-none text-faint sm:text-7xl">02</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-muted">{presscribe.tag}</p>
              <h3 className="mt-2 max-w-[20ch] font-display text-3xl font-medium leading-[1.1] text-fg sm:text-4xl">
                <Link href={presscribe.slug} className="hover:text-accent-text transition-colors">{presscribe.title}</Link>
              </h3>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-prose">{presscribe.blurb}</p>
              <p className="mt-5 text-sm text-accent-text tabular-nums">30,000+ consultations · 40+ hospitals</p>
              <Link href={presscribe.slug} className="group mt-4 inline-flex items-center gap-1.5 text-base text-accent-text">
                Read the case <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </article>

          {/* 03 + 04 · secondary cards */}
          <RevealStagger className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[virtualAgent, designops].map((c, i) => (
              <RevealItem key={c.slug} className="flex">
                <Link
                  href={c.slug}
                  className="group flex w-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/30"
                >
                  <CoverThumb cover={c.cover} coverFit={c.coverFit} num={`0${i + 3}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-wide text-muted">{c.tag}</p>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug text-fg">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-prose">{c.blurb}</p>
                    <p className="mt-5 text-[13px] text-accent-text tabular-nums">{c.impact}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-text">
                      Read case <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>
      </main>

      <Footer />
    </>
  );
}
