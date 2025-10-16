import React from 'react';

// Define the type for the props that the PathCard component will accept
type PathCardProps = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  buttonText: string;
  color: 'blue' | 'green' | 'purple';
  quote?: string;
};

/**
 * A reusable card component for displaying a single growth path.
 */
const PathCard = ({ icon, title, description, tags, buttonText, color, quote }: PathCardProps) => {
  // Object to map the color prop to specific Tailwind CSS classes for clean dynamic styling
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
    <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm border flex flex-col">
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${selectedColor.bg}`}>
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${selectedColor.text}`}>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="my-6 space-y-2 flex-grow">
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span key={tag} className={`px-3 py-1 text-sm rounded-full ${selectedColor.tagBg} ${selectedColor.tagText}`}>
              {tag}
            </span>
          ))}
        </div>
        {quote && (
           <div className="text-center pt-4">
             <p className="text-sm text-muted-foreground italic">"{quote}"</p>
           </div>
        )}
      </div>

      <button className={`mt-auto w-full font-semibold py-3 rounded-lg transition-colors ${selectedColor.button}`}>
        {buttonText}
      </button>
    </div>
  );
};

/**
 * The main section component for "Choose Your Growth Path".
 */
export const CorePaths = () => {
  // Data for the path cards, stored in an array for easy mapping
  const paths: PathCardProps[] = [
    {
      icon: '🌟',
      title: 'Life & Personal Growth',
      description: 'Transform every aspect of your personal journey',
      tags: ['💰 Finance', '🏢 Business', '💕 Relationships', '👑 Leadership', '🚀 Career', '🏃‍♂️ Health', '🎯 Life Vision', '🙏 Spirituality'],
      buttonText: 'Explore Life Path',
      color: 'blue',
    },
    {
      icon: '💼',
      title: 'Professional Edge',
      description: 'Specialized coaching for career excellence',
      tags: ['👩‍⚕️ Doctors', '👨‍⚕️ Nurses', '📈 Sales', '👔 Managers', '💹 Finance', '🎓 Young Learners', '📝 English Exams', '🤝 Interview Prep'],
      buttonText: 'Explore Professional Path',
      color: 'green',
    },
    {
      icon: '🧠',
      title: 'Mindset & Archetype',
      description: 'Discover your core personality and potential',
      tags: ['🔍 Self-Discovery', '✨ Personality Enhancement', '🌱 Foundational Wellness', '🎭 10 Archetypes'],
      buttonText: 'Discover Your Archetype',
      color: 'purple',
      quote: "Know thyself and unlock your true potential"
    },
  ];

  return (
    <section id="paths" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Growth Path</h2>
          <p className="text-lg text-muted-foreground">
            Three specialized domains designed to meet you where you are in your journey
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path) => (
            <PathCard key={path.title} {...path} />
          ))}
        </div>
      </div>
    </section>
  );
};