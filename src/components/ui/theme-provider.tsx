'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

/**
 * Thin wrapper so we can centralize default props and keep a stable import path.
 * Usage: <ThemeProvider attribute="class" defaultTheme="system" enableSystem>...</ThemeProvider>
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
