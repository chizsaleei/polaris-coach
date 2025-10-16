// src/components/landing/AiCoaches.tsx
import React from 'react'
import type { Coach } from '@/types' // <-- type-only import fixes the build error

/**
 * A reusable card to display information about a single AI coach.
 */
const CoachCard = ({ icon, name, title, description, tags, buttonText, color }: Coach) => {
  // Tailwind color variants that match our three coach themes
  const COLOR_VARIANTS = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/50',
      text: 'text-blue-600 dark:text-blue-400',
      tagBg: 'bg-blue-50 dark:bg-blue-900/30',
      tagText: 'text-blue-700 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/50',
      text: 'text-green-600 dark:text-green-400',
      tagBg: 'bg-green-50 dark:bg-green-900/30',
      tagText: 'text-green-700 dark:text-green-300',
      button: 'bg-green-600 hover:bg-green-700 text-white',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/50',
      text: 'text-purple-600 dark:text-purple-400',
      tagBg: 'bg-purple-50 dark:bg-purple-900/30',
      tagText: 'text-purple-700 dark:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
  } as const

  const selectedColor = COLOR_VARIANTS[color]

  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-2xl border p-6 text-center shadow-sm">
      <div
        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${selectedColor.bg}`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className={`text-xl font-bold ${selectedColor.text}`}>{name}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{title}</p>
      <p className="text-muted-foreground mb-6 h-24 text-sm">{description}</p>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-2 py-1 text-xs ${selectedColor.tagBg} ${selectedColor.tagText}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        className={`mt-auto w-full rounded-lg py-2 font-semibold transition-colors ${selectedColor.button}`}
      >
        {buttonText}
      </button>
    </div>
  )
}

/**
 * The main section that displays the team of AI coaches.
 */
export const AiCoaches = () => {
  // Type-checked against the shared Coach type
  const coaches: Coach[] = [
    {
      icon: '🎯',
      name: 'Dr. Sophia Chen',
      title: 'AI Life & Personal Development Coach',
      description:
        'Structured, evidence-based approach to goal-setting and habit formation. Adapts cognitive behavioral techniques to your learning pace.',
      tags: ['Goal Setting', 'Mindfulness', 'Habits'],
      buttonText: 'Chat with Dr. Chen',
      color: 'blue',
    },
    {
      icon: '💼',
      name: 'Marcus Rodriguez',
      title: 'AI Career & Leadership Coach',
      description:
        'Direct, results-oriented coaching style. Maintains executive-level standards while adapting strategies to your career stage and industry.',
      tags: ['Leadership', 'Career Growth', 'Networking'],
      buttonText: 'Chat with Marcus',
      color: 'green',
    },
    {
      icon: '🧘‍♀️',
      name: 'Luna Patel',
      title: 'AI Wellness & Mental Health Coach',
      description:
        'Compassionate, holistic approach blending ancient wisdom with modern psychology. Adjusts techniques based on your emotional readiness.',
      tags: ['Stress Relief', 'Emotional Intelligence', 'Wellness'],
      buttonText: 'Chat with Luna',
      color: 'purple',
    },
  ]

  return (
    <section id="coaches" className="bg-muted/40 dark:bg-background py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Your AI Coaching Team</h2>
          <p className="text-muted-foreground text-lg">
            Each AI coach maintains their unique persona while adapting to your learning style and
            progress
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} {...coach} />
          ))}
        </div>
      </div>
    </section>
  )
}
