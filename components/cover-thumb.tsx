import Image from "next/image";

export type CoverFit = "cover" | "contain";

// Card thumbnails render at roughly half the viewport on tablet and ~380px in
// the three-up "Next up" grid; this keeps next/image from serving oversized files.
const THUMB_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw";

// Card thumbnail used by the home "Selected work" cards and the case-page
// "Next up" grid. Shows the case cover (photo = fill, mockup = contained),
// or a numbered placeholder when there's no cover.
export function CoverThumb({
  cover,
  coverFit,
  num,
}: {
  cover?: string;
  coverFit?: CoverFit;
  num: string;
}) {
  const glow =
    "bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent)]";

  if (cover && coverFit !== "contain") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={cover}
          alt=""
          fill
          sizes={THUMB_SIZES}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
      </div>
    );
  }

  if (cover) {
    // Transparent mockup / screenshot: contain on the branded backdrop.
    return (
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 to-bg">
        <Image
          src={cover}
          alt=""
          fill
          sizes={THUMB_SIZES}
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div aria-hidden className={`pointer-events-none absolute inset-0 ${glow}`} />
      </div>
    );
  }

  return (
    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 to-bg">
      <span aria-hidden className="pointer-events-none select-none font-mono text-7xl text-fg/[0.04]">
        {num}
      </span>
      <div aria-hidden className={`pointer-events-none absolute inset-0 ${glow}`} />
    </div>
  );
}
