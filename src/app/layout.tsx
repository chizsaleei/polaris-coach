// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Polaris",
  description:
    "Discover your path with Polaris — AI coaches, tools and resources for personal and professional growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {/* ThemeProvider must set attribute="class" so Tailwind's dark mode works */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
