import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle' // Make sure this path is correct

/**
 * The main header and navigation bar for the site.
 * It's sticky, so it stays at the top as the user scrolls.
 */
export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">🧭 Polaris</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="#paths"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Find Your Path
          </Link>
          <Link
            href="#coaches"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            My AI Coach
          </Link>
          <Link
            href="#ecosystem"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Action Buttons and Theme Toggle */}
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground hidden text-sm font-medium transition-colors sm:inline-block">
            Sign In
          </button>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-semibold">
            Start Free Trial
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
