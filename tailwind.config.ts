// tailwind.config.ts
import type { Config } from "tailwindcss"

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Add brand tokens here as you grow
      colors: {
        // example:
        // "lotus-white": "#F7F7F5",
        // "temple-gold": "#C9A227",
      },
      fontFamily: {
        // use Inter as CSS var from layout.tsx
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config
