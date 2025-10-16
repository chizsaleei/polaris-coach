import Link from "next/link";
import { Heart, Target, BriefcaseBusiness } from "lucide-react";

function CoachCard({
  name,
  title,
  desc,
  tags,
  color,
  Icon,
  href,
}: {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  color: "blue" | "green" | "purple";
  Icon: React.ComponentType<any>;
  href: string;
}) {
  const ring = {
    blue: "ring-blue-200 dark:ring-blue-900/40",
    green: "ring-green-200 dark:ring-green-900/40",
    purple: "ring-purple-200 dark:ring-purple-900/40",
  } as const;

  const btn = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  } as const;

  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm p-6 ring-1 ${ring[color]} 
      border-slate-200 dark:border-slate-700 dark:bg-slate-800`}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow dark:bg-slate-900/60">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-slate-100">
        {name}
      </h3>
      <p className="text-center text-sm text-slate-600 dark:text-slate-300">
        {title}
      </p>

      {/* Description with strong contrast in light and dark */}
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 text-center">
        {desc}
      </p>

      {/* Tag pills: readable in both themes */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full px-2 py-1 text-xs 
                       bg-indigo-50 text-indigo-700 
                       dark:bg-indigo-900/40 dark:text-indigo-200"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-white ${btn[color]}`}
      >
        Chat with {name.split(" ")[0]}
      </Link>
    </div>
  );
}

export function Coaches() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <CoachCard
        name="Dr. Sophia Chen"
        title="AI Life & Personal Development Coach"
        desc="Structured, evidence-based approach to goal-setting and habit formation. Adapts cognitive behavioral techniques to your learning pace."
        tags={["Goal Setting", "Mindfulness", "Habits"]}
        color="blue"
        Icon={Target}
        href="/coach/sophia"
      />
      <CoachCard
        name="Marcus Rodriguez"
        title="AI Career & Leadership Coach"
        desc="Direct, results-oriented coaching style. Maintains executive-level standards while adapting strategies to your career stage and industry."
        tags={["Leadership", "Career Growth", "Networking"]}
        color="green"
        Icon={BriefcaseBusiness}
        href="/coach/marcus"
      />
      <CoachCard
        name="Luna Patel"
        title="AI Wellness & Mental Health Coach"
        desc="Compassionate, holistic approach blending ancient wisdom with modern psychology. Adjusts techniques based on your emotional readiness."
        tags={["Stress Relief", "Emotional Intelligence", "Wellness"]}
        color="purple"
        Icon={Heart}
        href="/coach/luna"
      />
    </div>
  );
}
