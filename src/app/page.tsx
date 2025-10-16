import Header from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Paths } from "@/components/sections/Paths";
import { Coaches } from "@/components/sections/Coaches";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Pricing } from "@/components/sections/Pricing";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-background">
        <section id="paths" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Choose Your Growth Path</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Three specialized domains designed to meet you where you are in your journey
            </p>
            <Paths />
          </div>
        </section>

        <section id="coaches" className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Meet Your AI Coaching Team</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Each AI coach maintains their unique persona while adapting to your learning style and progress
            </p>
            <Coaches />
          </div>
        </section>

        <section id="resources" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Complete Growth Ecosystem</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Beyond AI coaching - tools, resources, and products to accelerate your transformation
            </p>
            <Ecosystem />
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Hyper-Affordable Growth</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Pricing designed to make transformation accessible to everyone worldwide
            </p>
            <Pricing />
          </div>
        </section>
      </main>
    </>
  );
}
