// Server component for /coach/[slug] — Next.js 15 compatible

export default async function CoachPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // TODO: fetch coach by slug here
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">Coach: {slug}</h1>
      <p className="text-muted-foreground">
        This is the /coach/{'{slug}'} page. Replace with real content.
      </p>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: `Coach – ${slug}` };
}
