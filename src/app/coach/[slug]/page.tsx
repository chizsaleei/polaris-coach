// Server component for /coach/[slug] — Next.js 15
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// Inline fixed chat pinned to slug
const ChatFixed = dynamic(() => import("@/components/coach/ChatFixed"), { ssr: false });
const ViewBeacon = dynamic(() => import("@/components/coach/CoachViewBeacon"), { ssr: false });

const COACH_MAP = {
  business: {
    id: "business",
    name: "Marcus Rodriguez",
    tagline: "Career, leadership, and business strategy",
    bio: "Direct, outcome focused coaching. Frameworks, networking, and execution plans that move your career or business forward.",
    chips: ["Career", "Leadership", "Networking", "Finance"],
    gradient:
      "bg-[linear-gradient(135deg,hsl(var(--brand-sky))_0%,hsl(var(--brand-ink))_60%,hsl(var(--brand-night))_100%)]",
  },
  wellness: {
    id: "wellness",
    name: "Luna Patel",
    tagline: "Holistic wellness and mindset",
    bio: "Motivational interviewing, mindfulness, and habit design paced to your readiness. Support for life vision, spirituality, stress, and nutrition.",
    chips: ["Mindfulness", "Habits", "Life Vision", "Nutrition"],
    gradient:
      "bg-[linear-gradient(135deg,hsl(var(--brand-ice))_0%,hsl(var(--brand-sky))_40%,hsl(var(--brand-ink))_100%)]",
  },
  exams: {
    id: "exams",
    name: "Dr. Sophia Chen",
    tagline: "IELTS, interviews, and study plans",
    bio: "CBT-style scaffolding with spaced repetition. Tight feedback loops for English exams, interviews, and medical-school style study.",
    chips: ["IELTS", "Interviews", "Study Plans", "CBT"],
    gradient:
      "bg-[linear-gradient(135deg,hsl(var(--brand-deep))_0%,hsl(var(--brand-sky))_50%,hsl(var(--brand-ice))_100%)]",
  },
} as const;

type CoachSlug = keyof typeof COACH_MAP;

export default async function CoachPage({
  params,
}: {
  params: { slug: string };
}) {
  const coach = COACH_MAP[params.slug as CoachSlug];
  if (!coach) notFound();

  return (
    <main className="container-page py-10">
      {/* Hero */}
      <section className={`rounded-2xl ${coach.gradient} text-white p-8 shadow-sm border`}>
        <div className="flex items-center gap-3">
          <Compass className="h-7 w-7 text-white/90" />
          <h1 className="text-3xl font-semibold">{coach.name}</h1>
        </div>
        <p className="mt-2 text-white/90">{coach.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {coach.chips.map((c) => (
            <span key={c} className="chip bg-white/15 text-white border-white/20 backdrop-blur-sm">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* About + CTA */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 card">
          <div className="card-body">
            <h2 className="text-xl font-semibold">About this coach</h2>
            <p className="mt-2 text-muted-foreground">{coach.bio}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#chat" className="btn-primary">Start a session</a>
              <a href="/resources" className="btn-secondary">Explore tools and guides</a>
            </div>

            <p className="mt-4 text-xs text-white/70 md:text-muted-foreground">
              Polaris coaches provide educational guidance only. For medical or mental health emergencies, contact local services or a licensed professional.
            </p>
          </div>
        </article>

        <aside className="card">
          <div className="card-body">
            <h3 className="text-sm font-semibold">Good for</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {coach.chips.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Pinned chat */}
      <section id="chat" className="mt-10">
        <h2 className="text-xl font-semibold">Try a quick chat</h2>
        <p className="text-sm text-muted-foreground">
          Ask a question to get a short plan and one exercise you can try now.
        </p>
        <div className="mt-4">
          <ChatFixed coach={coach.id as "business" | "wellness" | "exams"} />
        </div>
      </section>

      {/* Lightweight analytics beacon */}
      <ViewBeacon coach={coach.id} />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const coach = COACH_MAP[params.slug as CoachSlug];
  const title = coach ? `Coach – ${coach.name}` : "Coach";
  const description = coach ? `${coach.name}: ${coach.tagline}` : "Polaris Coach";
  return { title, description, alternates: { canonical: `/coach/${coach?.id ?? ""}` } };
}

function Compass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M14.5 9.5l-2 5-3-3 5-2z" strokeWidth="1.5" />
    </svg>
  );
}
