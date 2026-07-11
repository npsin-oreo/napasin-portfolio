import Link from "next/link";
import { WorkMenu } from "@/components/work-menu";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { CONTACT } from "@/lib/cases";

export function Nav() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-fg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm tracking-tight text-fg">
          NPSIN<span className="text-accent-text">.</span>
        </Link>
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 font-mono text-sm text-muted md:flex">
            <WorkMenu />
            <Link href="/about" className="rounded-full px-3 py-2 transition-colors hover:text-fg">About</Link>
            <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-2 transition-colors hover:text-fg">Resume</a>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
      </header>
    </>
  );
}
