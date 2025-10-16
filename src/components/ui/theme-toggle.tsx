'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

/**
 * Small button that toggles between light/dark/system.
 */
export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()

  // rotate through: system -> light -> dark -> system...
  const handleToggle = () => {
    if (theme === 'system') setTheme('light')
    else if (theme === 'light') setTheme('dark')
    else setTheme('system')
  }

  const effective =
    theme === 'system' ? (systemTheme as 'light' | 'dark' | undefined) : (theme as 'light' | 'dark')

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="hover:bg-muted/60 bg-background text-foreground inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors"
    >
      {effective === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline">
        {theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}
