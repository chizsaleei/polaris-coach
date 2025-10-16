import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/landing/Hero';
import { CorePaths } from '@/components/landing/CorePaths';
import { AiCoaches } from '@/components/landing/AiCoaches';
import { Ecosystem } from '@/components/landing/Ecosystem';
import { Pricing } from '@/components/landing/Pricing';

/**
 * This is the main component for the homepage.
 * It assembles all the individual landing page sections
 * into a single, cohesive page that matches the reference layout.
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* The main header component for site navigation */}
      <Header />

      {/* The main content area of the page */}
      <main>
        <Hero />
        <CorePaths />
        <AiCoaches />
        <Ecosystem />
        <Pricing />
      </main>

      {/* A Footer component can be added here in the future */}
      {/* <Footer /> */}
    </div>
  );
}