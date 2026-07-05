import Link from "next/link";
import { WorkMenu } from "@/components/work-menu";
import { CONTACT } from "@/lib/cases";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm tracking-tight text-fg">
          NPSIN<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-1 font-mono text-sm text-muted">
          <WorkMenu />
          <Link href="/about" className="rounded-full px-3 py-2 transition-colors hover:text-fg">About</Link>
          <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-2 transition-colors hover:text-fg">Resume</a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-accent px-4 py-2 text-accent-fg transition-opacity hover:opacity-90"
          >
            Say hi
          </a>
        </div>
      </nav>
    </header>
  );
}
