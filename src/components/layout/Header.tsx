"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const nav = [
  { href: "/#paths", label: "Find Your Path" },
  { href: "/#coaches", label: "My AI Coach" },
  { href: "/#resources", label: "Resources" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4">
        <nav className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border">🧭</span>
            <span>Polaris</span>
          </Link>

          {/* Center nav */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/auth/signin"
              className="hidden sm:inline-flex rounded-lg border px-3 py-2 text-sm hover:bg-muted/60"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              Start Free Trial
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
