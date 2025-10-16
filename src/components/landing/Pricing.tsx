import React from 'react';

// Define the type for the props that the PricingCard component will accept
type PricingCardProps = {
  plan: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  color?: 'blue' | 'purple' | 'yellow'; // color is optional for the freemium plan
  isFeatured?: boolean;
};

/**
 * A reusable card component to display a single pricing plan.
 */
const PricingCard = ({ plan, price, period, features, buttonText, color, isFeatured }: PricingCardProps) => {
  // Define color variants for borders and buttons
  const colorVariants = {
    blue: {
      border: 'border-blue-400',
      text: 'text-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    purple: {
      border: 'border-purple-400',
      text: 'text-purple-500',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
    yellow: {
      border: 'border-yellow-400',
      text: 'text-yellow-600 dark:text-yellow-500',
      button: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    },
  };
  
  const selectedColor = color ? colorVariants[color] : null;

  return (
    <div 
      className={`rounded-2xl p-6 text-center flex flex-col transition-all duration-300
        ${isFeatured ? `border-2 bg-card ${selectedColor?.border}` : 'bg-muted/50 border'}`
      }
    >
      <h3 className={`text-lg font-bold mb-2 ${isFeatured ? selectedColor?.text : 'text-foreground'}`}>{plan}</h3>
      <div className="text-4xl font-bold mb-1">{price}</div>
      {period && <div className="text-sm text-muted-foreground mb-4">{period}</div>}
      
      <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left list-disc pl-5 flex-grow">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-2 font-semibold rounded-lg transition-colors 
          ${isFeatured ? selectedColor?.button : 'bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 text-white'}`
        }
      >
        {buttonText}
      </button>
    </div>
  );
};


/**
 * The main section component for "Hyper-Affordable Growth".
 */
export const Pricing = () => {
  // Data for each pricing plan, stored in an array for easy mapping
  const plans: PricingCardProps[] = [
    { 
      plan: 'Freemium', 
      price: 'Free', 
      features: ['Core Path Selection', '1 AI Session/Week (10 min)', 'All Blog/Research Content', 'Basic Progress Tracking'], 
      buttonText: 'Start Free' 
    },
    { 
      plan: 'Leverage Pro', 
      price: '$10', 
      period: '/month', 
      features: ['Unlimited AI Sessions', 'Full Single Domain Access', 'Ad-free Experience', 'Advanced Tools'], 
      buttonText: 'Choose Pro', 
      color: 'blue', 
      isFeatured: true 
    },
    { 
      plan: 'Choice VIP', 
      price: '$15', 
      period: '/month', 
      features: ['All Domains Access', 'Priority New Features', 'Professional Certificates', 'Premium Support'], 
      buttonText: 'Go VIP', 
      color: 'purple', 
      isFeatured: true 
    },
    { 
      plan: 'Certificates', 
      price: '$5', 
      period: '/certificate', 
      features: ['Official Verification', 'Downloadable & Printable', 'Available for Free Users', 'LinkedIn Integration'], 
      buttonText: 'Get Certified', 
      color: 'yellow', 
      isFeatured: true 
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-24 bg-muted/40 dark:bg-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hyper-Affordable Growth</h2>
          <p className="text-lg text-muted-foreground">
            Pricing designed to make transformation accessible to everyone worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => <PricingCard key={p.plan} {...p} />)}
        </div>
        <div className="text-center mt-12">
           <button 
             className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
             style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
           >
            🧭 Take the Path Quiz - Free
          </button>
        </div>
      </div>
    </section>
  );
};