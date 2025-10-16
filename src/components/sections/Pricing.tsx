import Link from "next/link";

function PriceCard({
  title, highlight, price, period, bullets, cta, href, ring, btn,
}: {
  title: string; highlight?: string; price: string; period?: string; bullets: string[];
  cta: string; href: string; ring: string; btn: string;
}) {
  return (
    <div className={`rounded-2xl border bg-white shadow-sm p-6 ring-1 ${ring} border-slate-200 dark:border-slate-700 dark:bg-slate-800`}>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      {highlight ? (
        <p className="text-emerald-600 text-2xl font-bold mt-1">{highlight}</p>
      ) : (
        <p className="text-3xl font-bold mt-1 text-slate-900 dark:text-slate-100">
          {price} <span className="text-sm text-slate-600 dark:text-slate-300">{period}</span>
        </p>
      )}
      <ul className="mt-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
        {bullets.map((b) => (<li key={b}>• {b}</li>))}
      </ul>
      <Link href={href} className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-white ${btn}`}>
        {cta}
      </Link>
    </div>
  );
}

export function Pricing() {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <PriceCard
          title="Freemium"
          highlight="Free"
          price="$0"
          bullets={["Core Path Selection","1 AI Session/Week (10 min)","All Blog/Research Content","Basic Progress Tracking"]}
          cta="Start Free"
          href="/auth/signup?plan=free"
          ring="ring-gray-200 dark:ring-gray-800"
          btn="bg-gray-700 hover:bg-gray-800"
        />
        <PriceCard
          title="Leverage Pro"
          price="$10"
          period="/month"
          bullets={["Unlimited AI Sessions","Full Single Domain Access","Ad-free Experience","Advanced Tools"]}
          cta="Choose Pro"
          href="/checkout?plan=pro"
          ring="ring-blue-200 dark:ring-blue-900/40"
          btn="bg-blue-600 hover:bg-blue-700"
        />
        <PriceCard
          title="Choice VIP"
          price="$15"
          period="/month"
          bullets={["All Domains Access","Priority New Features","Professional Certificates","Premium Support"]}
          cta="Go VIP"
          href="/checkout?plan=vip"
          ring="ring-purple-200 dark:ring-purple-900/40"
          btn="bg-purple-600 hover:bg-purple-700"
        />
        <PriceCard
          title="Certificates"
          price="$5"
          period="/certificate"
          bullets={["Official Verification","Downloadable & Printable","Available for Free Users","LinkedIn Integration"]}
          cta="Get Certified"
          href="/checkout?product=certificate"
          ring="ring-yellow-200 dark:ring-yellow-900/40"
          btn="bg-amber-600 hover:bg-amber-700"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <a href="/quiz" className="rounded-xl px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow hover:opacity-95">
          🪙 Take the Path Quiz - Free
        </a>
      </div>
    </>
  );
}
