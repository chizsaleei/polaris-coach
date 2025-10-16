// src/components/landing/Hero.tsx
import React from 'react'

/**
 * The main hero section for the landing page.
 * Matches the reference layout (purple gradient, bold title, two CTAs).
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="py-20 text-white md:py-28"
      // Unique, non-reusable background gradient (kept inline on purpose)
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <div className="container text-center">
        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
          Discover Your Path with <span className="text-yellow-300">Polaris</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg opacity-90 md:text-xl">
          Take our personalized quiz to find your archetype and connect with AI coaches who adapt to
          your learning style while maintaining their specialized expertise.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#quiz"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl"
            aria-label="Take the path quiz"
          >
            🧭 <span>Find Your Path Quiz</span>
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Start free trial"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
