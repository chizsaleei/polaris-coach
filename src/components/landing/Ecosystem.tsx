// src/components/landing/Ecosystem.tsx
import React from 'react'
import type { EcosystemItem } from '@/types'

type CardColor = 'blue' | 'green' | 'purple'

const colorVariants: Record<CardColor, { iconBg: string; button: string }> = {
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  green: {
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    button: 'bg-green-600 hover:bg-green-700 text-white',
  },
  purple: {
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    button: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
}

function EcosystemCard({ icon, title, description, features, buttonText, color }: EcosystemItem) {
  const c = colorVariants[color]

  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-2xl border p-8 text-center shadow-sm">
      <div
        className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${c.iconBg}`}
      >
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-5 text-left text-sm">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <button
        className={`mt-auto w-full rounded-lg py-2 font-semibold transition-colors ${c.button}`}
      >
        {buttonText}
      </button>
    </div>
  )
}

export function Ecosystem() {
  const items: EcosystemItem[] = [
    {
      icon: '🧩',
      title: 'Expert Resources',
      description:
        'Curated articles, research, and guides tailored to your chosen path and learning style.',
      features: [
        'Research-backed content',
        'Path-specific resources',
        'Weekly expert insights',
        'Downloadable guides',
      ],
      buttonText: 'Browse Resources',
      color: 'blue',
    },
    {
      icon: '🛠️',
      title: 'Interactive Tools',
      description:
        'Pre-built web tools that automatically save progress and sync with your personal dashboard.',
      features: [
        'Goal tracking system',
        'Habit builder',
        'Progress analytics',
        'Custom assessments',
      ],
      buttonText: 'Explore Tools',
      color: 'green',
    },
    {
      icon: '🛍️',
      title: 'Recommended Products',
      description:
        'Carefully selected health, education, and lifestyle products to support your growth journey.',
      features: [
        'Health & wellness products',
        'Educational materials',
        'Productivity tools',
        'Affiliate partnerships',
      ],
      buttonText: 'Shop Recommendations',
      color: 'purple',
    },
  ]

  return (
    <section id="ecosystem" className="bg-muted/40 dark:bg-background py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Complete Growth Ecosystem</h2>
          <p className="text-muted-foreground text-lg">
            Beyond AI coaching — tools, resources, and products to accelerate your transformation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <EcosystemCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
