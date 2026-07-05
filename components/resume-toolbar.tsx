"use client";

import Link from "next/link";
import { ArrowRight, Download } from "@/components/icons";

export function ResumeToolbar() {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[210mm] items-center justify-between px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowRight className="size-4 rotate-180" /> Back to site
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm text-accent-fg transition-opacity hover:opacity-90"
        >
          <Download className="size-4" /> Save as PDF
        </button>
      </div>
    </div>
  );
}
