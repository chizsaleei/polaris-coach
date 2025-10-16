import React from 'react';

// Define the type for the props the EcosystemCard will accept
type EcosystemCardProps = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  color: 'blue' | 'green' | 'purple';
};

/**
 * A reusable card component for displaying an item in the ecosystem section.
 */
const EcosystemCard = ({ icon, title, description, features, buttonText, color }: EcosystemCardProps) => {
  // Map colors to specific Tailwind classes for dynamic styling
  const colorVariants = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/50',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/50',
      button: 'bg-green-600 hover:bg-green-700 text-white',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/50',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
  };

  const selectedColor = colorVariants[color];

  return (
    <div className="bg-card text-card-foreground rounded-2xl p-8 text-center shadow-sm border flex flex-col">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${selectedColor.bg}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left list-disc pl-5">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className={`mt-auto w-full font-semibold py-2 rounded-lg transition-colors ${selectedColor.button}`}>
        {buttonText}
      </button>
    </div>
  );
};

/**
 * The main section component for the "Complete Growth Ecosystem".
 */
export const Ecosystem = () => {
  // Data for the ecosystem cards, kept separate for easy management
  const ecosystemItems: EcosystemCardProps[] = [
    {
      icon: '📚',
      title: 'Expert Resources',
      description: 'Curated articles, research, and guides tailored to your chosen path and learning style.',
      features: ['Research-backed content', 'Path-specific resources', 'Weekly expert insights', 'Downloadable guides'],
      buttonText: 'Browse Resources',
      color: 'blue',
    },
    {
      icon: '🛠️',
      title: 'Interactive Tools',
      description: 'Pre-built web tools that automatically save progress and sync with your personal dashboard.',
      features: ['Goal tracking system', 'Habit builder', 'Progress analytics', 'Custom assessments'],
      buttonText: 'Explore Tools',
      color: 'green',
    },
    {
      icon: '🛍️',
      title: 'Recommended Products',
      description: 'Carefully selected health, education, and lifestyle products to support your growth journey.',
      features: ['Health & wellness products', 'Educational materials', 'Productivity tools', 'Affiliate partnerships'],
      buttonText: 'Shop Recommendations',
      color: 'purple',
    },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Growth Ecosystem</h2>
          <p className="text-lg text-muted-foreground">
            Beyond AI coaching - tools, resources, and products to accelerate your transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemItems.map((item) => (
            <EcosystemCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};