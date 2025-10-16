"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Light/Dark toggle with hydration-safe label */
export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const effective = mounted ? (theme === "system" ? systemTheme : theme) : null;

  function handleToggle() {
    const next = effective === "dark" ? "light" : "dark";
    setTheme(next ?? "light");
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="hover:bg-muted/60 bg-background text-foreground inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors"
    >
      {mounted && effective === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline" suppressHydrationWarning>
        {!mounted ? "Theme" : effective === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}

// Also export default so either import style works
export default ThemeToggle;
