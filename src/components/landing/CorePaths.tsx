// src/components/landing/CorePaths.tsx
import React from 'react'
import type { CorePath } from '@/types'

type CardColor = 'blue' | 'green' | 'purple'

const colorVariants: Record<
  CardColor,
  { iconBg: string; title: string; tagBg: string; tagText: string; button: string }
> = {
  blue: {
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    title: 'text-blue-600 dark:text-blue-400',
    tagBg: 'bg-blue-50 dark:bg-blue-900/30',
    tagText: 'text-blue-700 dark:text-blue-300',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  green: {
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    title: 'text-green-600 dark:text-green-400',
    tagBg: 'bg-green-50 dark:bg-green-900/30',
    tagText: 'text-green-700 dark:text-green-300',
    button: 'bg-green-600 hover:bg-green-700 text-white',
  },
  purple: {
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    title: 'text-purple-600 dark:text-purple-400',
    tagBg: 'bg-purple-50 dark:bg-purple-900/30',
    tagText: 'text-purple-700 dark:text-purple-300',
    button: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
}

function PathCard({ icon, title, description, tags, buttonText, color, quote }: CorePath) {
  const c = colorVariants[color]
  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-2xl border p-6 shadow-sm">
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${c.iconBg}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className={`mb-1 text-xl font-bold ${c.title}`}>{title}</h3>
      <p className="text-muted-foreground mb-5 text-sm">{description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className={`rounded-full px-2 py-1 text-xs ${c.tagBg} ${c.tagText}`}>
            {t}
          </span>
        ))}
      </div>

      {quote ? (
        <p className="text-muted-foreground mb-6 text-sm italic">&ldquo;{quote}&rdquo;</p>
      ) : null}

      <button
        className={`mt-auto w-full rounded-lg py-2 font-semibold transition-colors ${c.button}`}
      >
        {buttonText}
      </button>
    </div>
  )
}

export function CorePaths() {
  const paths: CorePath[] = [
    {
      icon: '🌟',
      title: 'Life & Personal Growth',
      description: 'Transform every aspect of your personal journey',
      tags: [
        '💰 Finance',
        '📚 Business',
        '💕 Relationships',
        '👑 Leadership',
        '🚀 Career',
        '🧘 Health',
        '🎯 Life Vision',
        '🙏 Spirituality',
      ],
      buttonText: 'Explore Life Path',
      color: 'blue',
    },
    {
      icon: '💼',
      title: 'Professional Edge',
      description: 'Specialized coaching for career excellence',
      tags: [
        '👩‍⚕️ Doctors',
        '👩‍⚕️ Nurses',
        '📈 Sales',
        '📊 Managers',
        '✅ Finance',
        '🎓 Young Learners',
        '📝 English Exams',
        '🤝 Interview Prep',
      ],
      buttonText: 'Explore Professional Path',
      color: 'green',
    },
    {
      icon: '🧠',
      title: 'Mindset & Archetype',
      description: 'Discover your core personality and potential',
      tags: [
        '🔎 Self-Discovery',
        '✨ Personality Enhancement',
        '🪴 Foundational Wellness',
        '🔟 10 Archetypes',
      ],
      // Only change: use curly/HTML entities around the quote to satisfy ESLint
      quote: 'Know thyself and unlock your true potential',
      buttonText: 'Discover Your Archetype',
      color: 'purple',
    },
  ]

  return (
    <section id="paths" className="bg-muted/40 dark:bg-background py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose Your Growth Path</h2>
          <p className="text-muted-foreground text-lg">
            Three specialized domains designed to meet you where you are in your journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {paths.map((p) => (
            <PathCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
