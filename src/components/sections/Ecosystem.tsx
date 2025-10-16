import Link from "next/link";

function EcoCard({ title, desc, bullets, cta, href }:{
  title: string; desc: string; bullets: string[]; cta: string; href: string;
}) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-6 border-slate-200 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-xl dark:bg-indigo-900/30">
        📚
      </div>
      <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-center text-sm text-slate-700 dark:text-slate-300">{desc}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
        {bullets.map((b) => (<li key={b}>• {b}</li>))}
      </ul>
      <Link href={href} className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        {cta}
      </Link>
    </div>
  );
}

export function Ecosystem() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <EcoCard
        title="Expert Resources"
        desc="Curated articles, research, and guides tailored to your chosen path and learning style."
        bullets={["Research-backed content","Path-specific resources","Weekly expert insights","Downloadable guides"]}
        cta="Browse Resources"
        href="/resources"
      />
      <EcoCard
        title="Interactive Tools"
        desc="Pre-built web tools that automatically save progress and sync with your personal dashboard."
        bullets={["Goal tracking system","Habit builder","Progress analytics","Custom assessments"]}
        cta="Explore Tools"
        href="/tools"
      />
      <EcoCard
        title="Recommended Products"
        desc="Carefully selected health, education, and lifestyle products to support your growth journey."
        bullets={["Health & wellness products","Educational materials","Productivity tools","Affiliate partnerships"]}
        cta="Shop Recommendations"
        href="/shop"
      />
    </div>
  );
}
