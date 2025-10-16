// src/types/index.ts

/**
 * Defines the shape of a user object.
 */
export interface User {
  id: string
  email: string
  name?: string // Name can be optional
  avatarUrl?: string
  role: 'visitor' | 'student' | 'admin'
  subscriptionId?: string // Link to their subscription
  createdAt: Date
}

// =================================================================
// Component Prop Types (for landing page sections)
// =================================================================

/**
 * Defines the shape of a single AI Coach object.
 * Used in the AiCoaches.tsx component.
 */
export interface Coach {
  icon: string
  name: string
  title: string
  description: string
  tags: string[]
  buttonText: string
  color: 'blue' | 'green' | 'purple'
}

/**
 * Defines the shape of a single Learning Path object.
 * Used in the CorePaths.tsx component.
 */
export interface CorePath {
  icon: string
  title: string
  description: string
  tags: string[]
  buttonText: string
  color: 'blue' | 'green' | 'purple'
  quote?: string // Optional field for the mindset card
}

/**
 * Defines the shape of an item in the ecosystem section.
 * Used in the Ecosystem.tsx component.
 */
export interface EcosystemItem {
  icon: string
  title: string
  description: string
  features: string[]
  buttonText: string
  color: 'blue' | 'green' | 'purple'
}

/**
 * Defines the shape of a single Pricing Plan object.
 * Used in the Pricing.tsx component.
 */
export interface Plan {
  plan: string
  price: string
  period?: string
  features: string[]
  buttonText: string
  color?: 'blue' | 'purple' | 'yellow'
  isFeatured?: boolean
}

// =================================================================
// Interactive Feature Types (Quiz & Subscriptions)
// =================================================================

/**
 * Defines the structure for a single quiz question.
 */
export interface QuizQuestion {
  id: string
  question: string
  options: { id: string; text: string; value: string }[]
}

/**
 * Defines the outcome of a user completing the quiz.
 */
export interface QuizResult {
  coachId: string // ID of the matched AI Coach
  pathId: string // ID of the recommended Core Path
  archetype: string
}

/**
 * Defines the structure for a user's subscription status.
 */
export interface Subscription {
  id: string
  userId: string
  plan: 'freemium' | 'leverage_pro' | 'choice_vip'
  status: 'active' | 'cancelled' | 'trialing'
  currentPeriodEnd: Date
}
