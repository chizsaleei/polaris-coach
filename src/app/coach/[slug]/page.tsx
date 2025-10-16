type Props = { params: { slug: string } };
export default function Coach({ params }: Props) {
  return <div className="container mx-auto px-4 py-10">Coach: {params.slug}</div>;
}
