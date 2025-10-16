import Link from "next/link";
import { Brain, BriefcaseBusiness, Sparkles } from "lucide-react";

function Card({
  title, desc, chips, ctaText, href, color, Icon,
}: {
  title: string; desc: string; chips: string[];
  ctaText: string; href: string; color: "blue" | "green" | "purple";
  Icon: React.ComponentType<any>;
}) {
  const ring = { blue: "ring-blue-100", green: "ring-green-100", purple: "ring-purple-100" } as const;
  const bg  = { blue: "bg-blue-50", green: "bg-green-50", purple: "bg-purple-50" } as const;
  const btn = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  } as const;

  return (
    <div className={`card p-6 ring-1 ${ring[color]} ${bg[color]}`}>
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">{desc}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <span key={c} className="rounded-full bg-white px-2 py-1 text-xs shadow">{c}</span>
        ))}
      </div>
      <Link href={href} className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-white ${btn[color]}`}>
        {ctaText}
      </Link>
    </div>
  );
}

export function Paths() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card
        title="Life & Personal Growth"
        desc="Transform every aspect of your personal journey"
        chips={["💰 Finance","🏢 Business","💕 Relationships","👑 Leadership","💼 Career","🏃 Health","🎯 Life Vision","🙏 Spirituality"]}
        ctaText="Explore Life Path"
        href="/paths/life"
        color="blue"
        Icon={Sparkles}
      />
      <Card
        title="Professional Edge"
        desc="Specialized coaching for career excellence"
        chips={["👩‍⚕️ Doctors","👨‍⚕️ Nurses","📈 Sales","👔 Managers","✅ Finance","🧒 Young Learners","📝 English Exams","💬 Interview Prep"]}
        ctaText="Explore Professional Path"
        href="/paths/professional"
        color="green"
        Icon={BriefcaseBusiness}
      />
      <Card
        title="Mindset & Archetype"
        desc="Discover your core personality and potential"
        chips={["🔍 Self-Discovery","✨ Personality Enhancement","🌿 Foundational Wellness","🃏 10 Archetypes"]}
        ctaText="Discover Your Archetype"
        href="/archetype"
        color="purple"
        Icon={Brain}
      />
    </div>
  );
}
