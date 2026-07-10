"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_CASES, CONTACT } from "@/lib/cases";
import { Menu, Close, ArrowUpRight } from "@/components/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Portal target is only available on the client.
  useEffect(() => setMounted(true), []);

  // Close the sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + wire Escape while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-2 flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-2"
      >
        {open ? <Close className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && mounted && createPortal(
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg md:hidden"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-6">
            <p className="px-1 pb-2 font-mono text-xs uppercase tracking-wide text-muted">Work</p>
            <div className="flex flex-col">
              {ALL_CASES.map((c) => {
                const active = pathname === c.slug;
                return (
                  <Link
                    key={c.slug}
                    href={c.slug}
                    className={`flex gap-3 rounded-item px-3 py-3 transition-colors ${
                      active ? "bg-surface-2" : "hover:bg-surface-2"
                    }`}
                  >
                    <span className="pt-0.5 font-mono text-sm text-accent-text">{c.num}</span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium leading-snug text-fg">
                        {c.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">{c.tag}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="my-4 border-t border-border" />

            <div className="flex flex-col font-mono text-[15px]">
              <Link href="/#work" className="flex items-center justify-between rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2">
                All work
                <ArrowUpRight className="size-4 text-muted" />
              </Link>
              <Link href="/about" className="rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2">
                About
              </Link>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2"
              >
                Resume
                <ArrowUpRight className="size-4 text-muted" />
              </a>
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-4 flex items-center justify-center rounded-full bg-accent px-4 py-3 font-mono text-[15px] text-accent-fg transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
