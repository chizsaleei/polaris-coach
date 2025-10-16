"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/**
 * Centralized ThemeProvider with sensible defaults.
 * Use: <ThemeProvider>{children}</ThemeProvider>
 */
export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  storageKey = "theme", // keep or rename if you want
  ...rest
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey={storageKey}
      {...rest}
    >
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
