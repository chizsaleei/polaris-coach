import React from 'react';

/**
 * The main hero section for the landing page.
 */
export const Hero = () => {
  return (
    <section 
      id="hero"
      className="text-white py-20 md:py-28" 
      // The gradient is applied via inline style for this unique, non-reusable background.
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Path with <span className="text-yellow-300">Polaris</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Take our personalized quiz to find your archetype and connect with AI coaches who adapt to your learning style while maintaining their specialized expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            🧭 Find Your Path Quiz
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};