import Image from "next/image";

export type CoverFit = "cover" | "contain";

// Card thumbnails render at roughly half the viewport on tablet and ~380px in
// the three-up "Next up" grid; this keeps next/image from serving oversized files.
const THUMB_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw";

// Card thumbnail used by the home work cards and the case-page "More work"
// rows. Shows the case cover (photo = fill, mockup = contained on a flat
// backdrop), or a numbered placeholder when there's no cover.
export function CoverThumb({
  cover,
  coverFit,
  num,
}: {
  cover?: string;
  coverFit?: CoverFit;
  num: string;
}) {
  if (cover && coverFit !== "contain") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={cover}
          alt=""
          fill
          sizes={THUMB_SIZES}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  if (cover) {
    // Transparent mockup / screenshot: contain on a flat tinted backdrop.
    return (
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={cover}
          alt=""
          fill
          sizes={THUMB_SIZES}
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-border bg-surface-2">
      <span aria-hidden className="pointer-events-none select-none font-display text-7xl text-faint/40">
        {num}
      </span>
    </div>
  );
}
