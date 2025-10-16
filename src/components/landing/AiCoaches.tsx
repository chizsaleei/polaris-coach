import React from 'react';
import { Coach } from '@/types'; // Import the shared Coach type

/**
 * A reusable card component to display information about a single AI coach.
 * It now uses the imported Coach type for its props.
 */
const CoachCard = ({ icon, name, title, description, tags, buttonText, color }: Coach) => {
  // Define color variants for Tailwind CSS to pick up
  const colorVariants = {
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
  };

  const selectedColor = colorVariants[color];

  return (
    <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm border text-center flex flex-col">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${selectedColor.bg}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className={`text-xl font-bold ${selectedColor.text}`}>{name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{title}</p>
      <p className="text-sm text-muted-foreground mb-6 h-24">{description}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {tags.map((tag) => (
          <span key={tag} className={`px-2 py-1 text-xs rounded-full ${selectedColor.tagBg} ${selectedColor.tagText}`}>
            {tag}
          </span>
        ))}
      </div>
      <button className={`mt-auto w-full font-semibold py-2 rounded-lg transition-colors ${selectedColor.button}`}>
        {buttonText}
      </button>
    </div>
  );
};

/**
 * The main section component that displays the team of AI coaches.
 */
export const AiCoaches = () => {
  // This array is now type-checked against the imported Coach type.
  const coaches: Coach[] = [
    {
      icon: '🎯',
      name: 'Dr. Sophia Chen',
      title: 'AI Life & Personal Development Coach',
      description: 'Structured, evidence-based approach to goal-setting and habit formation. Adapts cognitive behavioral techniques to your learning pace.',
      tags: ['Goal Setting', 'Mindfulness', 'Habits'],
      buttonText: 'Chat with Dr. Chen',
      color: 'blue',
    },
    {
      icon: '💼',
      name: 'Marcus Rodriguez',
      title: 'AI Career & Leadership Coach',
      description: 'Direct, results-oriented coaching style. Maintains executive-level standards while adapting strategies to your career stage and industry.',
      tags: ['Leadership', 'Career Growth', 'Networking'],
      buttonText: 'Chat with Marcus',
      color: 'green',
    },
    {
      icon: '🧘‍♀️',
      name: 'Luna Patel',
      title: 'AI Wellness & Mental Health Coach',
      description: 'Compassionate, holistic approach blending ancient wisdom with modern psychology. Adjusts techniques based on your emotional readiness.',
      tags: ['Stress Relief', 'Emotional Intelligence', 'Wellness'],
      buttonText: 'Chat with Luna',
      color: 'purple',
    },
  ];

  return (
    <section id="coaches" className="py-20 md:py-24 bg-muted/40 dark:bg-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your AI Coaching Team</h2>
          <p className="text-lg text-muted-foreground">
            Each AI coach maintains their unique persona while adapting to your learning style and progress
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};