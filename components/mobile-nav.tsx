"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ALL_CASES, CONTACT } from "@/lib/cases";
import { Menu, Close, ArrowUpRight } from "@/components/icons";
import { EASE } from "@/components/reveal";

const linkItem = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
};

const emptySubscribe = () => () => {};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // Portal target is only available on the client (false during SSR).
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Close the sheet whenever the route changes (state adjusted during render,
  // per React's "adjusting state when props change" pattern).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

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

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg md:hidden"
            >
              <motion.div
                className="mx-auto max-w-[1200px] px-6 py-6"
                initial={reduce ? undefined : "hidden"}
                animate={reduce ? undefined : "show"}
                variants={{ show: { transition: { staggerChildren: 0.04 } } }}
              >
                <p className="px-1 pb-2 text-xs uppercase tracking-wide text-muted">Work</p>
                <div className="flex flex-col">
                  {ALL_CASES.map((c) => {
                    const active = pathname === c.slug;
                    return (
                      <motion.div key={c.slug} variants={linkItem}>
                        <Link
                          href={c.slug}
                          className={`flex gap-3 rounded-item px-3 py-3 transition-colors ${
                            active ? "bg-surface-2" : "hover:bg-surface-2"
                          }`}
                        >
                          <span className="w-6 pt-0.5 font-display text-base text-muted">{c.num}</span>
                          <span className="min-w-0">
                            <span className="block text-[15px] font-medium leading-snug text-fg">
                              {c.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-muted">{c.tag}</span>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div variants={linkItem} className="my-4 border-t border-border" />

                <div className="flex flex-col text-[15px]">
                  <motion.div variants={linkItem}>
                    <Link href="/#work" className="flex items-center justify-between rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2">
                      All work
                      <ArrowUpRight className="size-4 text-muted" />
                    </Link>
                  </motion.div>
                  <motion.div variants={linkItem}>
                    <Link href="/about" className="block rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2">
                      About
                    </Link>
                  </motion.div>
                  <motion.div variants={linkItem}>
                    <a
                      href={CONTACT.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-item px-3 py-3 text-fg transition-colors hover:bg-surface-2"
                    >
                      Resume
                      <ArrowUpRight className="size-4 text-muted" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
