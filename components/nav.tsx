import Link from "next/link";
import { WorkMenu } from "@/components/work-menu";
import { MobileNav } from "@/components/mobile-nav";
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
      <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="font-display text-lg tracking-tight text-fg">
          Napasin<span className="text-accent-text">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 text-sm text-muted md:flex">
            <WorkMenu />
            <Link href="/about" className="px-2 py-2 underline-offset-4 decoration-accent/50 transition-colors hover:text-fg hover:underline">About</Link>
            <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="px-2 py-2 underline-offset-4 decoration-accent/50 transition-colors hover:text-fg hover:underline">Resume</a>
          </div>
          <MobileNav />
        </div>
      </nav>
      </header>
    </>
  );
}
