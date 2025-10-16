// src/components/landing/Pricing.tsx
import React from 'react'

type PricingCardProps = {
  plan: string
  price: string
  period?: string
  features: string[]
  buttonText: string
  color?: 'blue' | 'purple' | 'yellow'
  isFeatured?: boolean
}

/**
 * Reusable pricing card.
 * Uses brand-friendly colors and supports a "featured" style.
 */
const PricingCard = ({
  plan,
  price,
  period,
  features,
  buttonText,
  color,
  isFeatured,
}: PricingCardProps) => {
  const colorVariants = {
    blue: {
      border: 'border-blue-400',
      text: 'text-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      pill: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    },
    purple: {
      border: 'border-purple-400',
      text: 'text-purple-500',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      pill: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    },
    yellow: {
      border: 'border-yellow-400',
      text: 'text-yellow-600 dark:text-yellow-500',
      button: 'bg-yellow-500 hover:bg-yellow-600 text-white',
      pill: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    },
  } as const

  const selected = color ? colorVariants[color] : null

  return (
    <div
      className={[
        'flex flex-col rounded-2xl border p-6 text-center shadow-sm transition-all duration-300',
        isFeatured && selected ? `border-2 ${selected.border} bg-card` : 'bg-muted/50',
      ].join(' ')}
    >
      {/* Featured pill */}
      {isFeatured && selected && (
        <div className="mb-3 flex justify-center">
          <span
            className={[
              'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
              selected.pill,
            ].join(' ')}
          >
            Most popular
          </span>
        </div>
      )}

      <h3
        className={[
          'mb-2 text-lg font-bold',
          isFeatured && selected ? selected.text : 'text-foreground',
        ].join(' ')}
      >
        {plan}
      </h3>

      <div className="mb-1 text-4xl font-bold">{price}</div>
      {period ? (
        <div className="text-muted-foreground mb-4 text-sm">{period}</div>
      ) : (
        <div className="mb-4" />
      )}

      <ul className="text-muted-foreground mb-6 flex-grow list-disc space-y-2 pl-5 text-left text-sm">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button
        className={[
          'w-full rounded-lg py-2 font-semibold transition-colors',
          isFeatured && selected
            ? selected.button
            : 'bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500',
        ].join(' ')}
        aria-label={buttonText}
      >
        {buttonText}
      </button>
    </div>
  )
}

/**
 * Pricing section — aligns with the reference landing layout.
 */
export function Pricing() {
  const plans: PricingCardProps[] = [
    {
      plan: 'Freemium',
      price: 'Free',
      features: [
        'Core Path Selection',
        '1 AI Session/Week (10 min)',
        'All Blog/Research Content',
        'Basic Progress Tracking',
      ],
      buttonText: 'Start Free',
    },
    {
      plan: 'Leverage Pro',
      price: '$10',
      period: '/month',
      features: [
        'Unlimited AI Sessions',
        'Full Single Domain Access',
        'Ad-free Experience',
        'Advanced Tools',
      ],
      buttonText: 'Choose Pro',
      color: 'blue',
      isFeatured: true,
    },
    {
      plan: 'Choice VIP',
      price: '$15',
      period: '/month',
      features: [
        'All Domains Access',
        'Priority New Features',
        'Professional Certificates',
        'Premium Support',
      ],
      buttonText: 'Go VIP',
      color: 'purple',
      isFeatured: true,
    },
    {
      plan: 'Certificates',
      price: '$5',
      period: '/certificate',
      features: [
        'Official Verification',
        'Downloadable & Printable',
        'Available for Free Users',
        'LinkedIn Integration',
      ],
      buttonText: 'Get Certified',
      color: 'yellow',
      isFeatured: true,
    },
  ]

  return (
    <section id="pricing" className="bg-muted/40 dark:bg-background py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hyper-Affordable Growth</h2>
          <p className="text-muted-foreground text-lg">
            Pricing designed to make transformation accessible to everyone worldwide
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <PricingCard key={p.plan} {...p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quiz"
            className="inline-flex transform items-center justify-center rounded-lg px-12 py-4 text-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
            aria-label="Take the Path Quiz for free"
          >
            🧭 Take the Path Quiz — Free
          </a>
        </div>
      </div>
    </section>
  )
}
