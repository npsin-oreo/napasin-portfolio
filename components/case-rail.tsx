"use client";

import { useEffect, useState } from "react";

// A quiet progress rail for long case pages: section numbers + short labels,
// pinned to the far-left margin on very wide screens only (2xl), scrollspy
// highlighting the section in view. Clicking jumps (smooth scroll comes from
// the global html rule).
export function CaseRail({ items }: { items: { n: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.n ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id.replace("section-", ""));
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    for (const it of items) {
      const el = document.getElementById(`section-${it.n}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Case sections" className="fixed left-8 top-1/2 hidden -translate-y-1/2 2xl:block">
      <ol className="space-y-3">
        {items.map((it) => {
          const isActive = active === it.n;
          return (
            <li key={it.n}>
              <a
                href={`#section-${it.n}`}
                className={`group flex items-center gap-2.5 text-xs transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-px transition-all duration-300 ${
                    isActive ? "w-6 bg-accent" : "w-3 bg-border group-hover:bg-accent/50"
                  }`}
                />
                <span className="font-display text-sm leading-none">{it.n}</span>
                <span className="max-w-[130px] truncate">{it.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
