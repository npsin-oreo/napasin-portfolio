"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_CASES } from "@/lib/cases";
import { ChevronDown, ArrowUpRight } from "@/components/icons";

export function WorkMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 rounded-full px-3 py-2 transition-colors hover:text-fg data-[open=true]:text-fg"
        data-open={open}
      >
        Work
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-2">
          <div
            role="menu"
            className="w-[360px] overflow-hidden rounded-card border border-border bg-surface p-2 font-sans shadow-xl shadow-black/30"
          >
            {ALL_CASES.map((c) => {
              const active = pathname === c.slug;
              return (
                <Link
                  key={c.slug}
                  href={c.slug}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex gap-3 rounded-item px-3 py-2.5 transition-colors ${
                    active ? "bg-surface-2" : "hover:bg-surface-2"
                  }`}
                >
                  <span className="pt-0.5 font-mono text-sm text-accent">{c.num}</span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium leading-snug text-fg">
                      {c.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">{c.tag}</span>
                  </span>
                </Link>
              );
            })}

            <div className="mx-1 my-1.5 border-t border-border" />

            <Link
              href="/#work"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-item px-3 py-2.5 text-[15px] text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              All work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
