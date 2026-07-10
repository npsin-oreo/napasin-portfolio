"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@/components/icons";

type Theme = "light" | "dark";

// Reads the theme the no-flash inline script (in layout.tsx) already applied
// to <html data-theme>, so React's first client render matches the DOM.
function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setReady(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice just won't persist */
    }
  }

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {/* Before hydration we don't know the theme; render nothing to avoid a wrong icon flash. */}
      {ready && (theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />)}
    </button>
  );
}
