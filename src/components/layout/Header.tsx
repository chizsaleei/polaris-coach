import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/theme-toggle'; // Make sure this path is correct

/**
 * The main header and navigation bar for the site.
 * It's sticky, so it stays at the top as the user scrolls.
 */
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">🧭 Polaris</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#paths" className="text-muted-foreground transition-colors hover:text-foreground">
            Find Your Path
          </Link>
          <Link href="#coaches" className="text-muted-foreground transition-colors hover:text-foreground">
            My AI Coach
          </Link>
          <Link href="#ecosystem" className="text-muted-foreground transition-colors hover:text-foreground">
            Resources
          </Link>
          <Link href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>

        {/* Action Buttons and Theme Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Sign In
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90">
            Start Free Trial
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};