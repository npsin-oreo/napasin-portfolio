import Link from "next/link";
import { CONTACT } from "@/lib/cases";
import { Reveal } from "@/components/reveal";
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="mt-32 border-t border-border">
      <Reveal className="mx-auto max-w-[1200px] px-6 py-20">
        <p className="font-mono text-sm text-accent-text">Contact</p>
        <h2 className="mt-4 max-w-[18ch] font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.01em] text-fg sm:text-5xl">
          Let&apos;s talk
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
          Open to senior product / service design roles, especially where AI meets real-world,
          high-stakes workflows. The fastest way to reach me is email.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" /> Get in touch
          </a>
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base text-fg transition-colors hover:bg-surface"
          >
            <Download className="size-4" /> Resume
          </a>
        </div>

        {/* contact rows */}
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
          <ContactRow label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} icon={<Mail className="size-4" />} />
          <ContactRow label="Phone" value={CONTACT.phone} href={CONTACT.phoneHref} />
          <ContactRow label="LinkedIn" value="in/napasin-intarayotha" href={CONTACT.linkedin} icon={<Linkedin className="size-4" />} external />
          <ContactRow label="GitHub" value="github.com/npsin-oreo" href={CONTACT.github} icon={<Github className="size-4" />} external />
        </dl>

        <p className="mt-14 text-sm text-muted">
          © 2026 Napasin Intarayotha (NPSIN) · Designed &amp; built by me. This site passed its own{" "}
          <Link href="/work/designops" className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent">
            10-gate design audit
          </Link>
          .
        </p>
      </Reveal>
    </footer>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
  external,
}: {
  label: string;
  value: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center justify-between gap-4 bg-surface px-5 py-4 transition-colors hover:bg-surface-2"
    >
      <span className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
        <span className="text-base text-fg">{value}</span>
      </span>
      <span className="text-muted transition-colors group-hover:text-accent-text">
        {icon ?? <ArrowUpRight className="size-4" />}
      </span>
    </a>
  );
}
