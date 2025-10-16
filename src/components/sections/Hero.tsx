import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-gradient opacity-95" />
      <div className="container mx-auto px-4">
        <div className="py-14 md:py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Discover Your Path with <span className="text-yellow-300">Polaris</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl opacity-95">
            Take our personalized quiz to find your archetype and connect with AI coaches who
            adapt to your learning style while maintaining their specialized expertise.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/quiz"
              className="rounded-lg bg-yellow-400 px-5 py-3 font-medium text-black shadow hover:brightness-95"
            >
              🪙 Find Your Path Quiz
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg border border-white/80 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
