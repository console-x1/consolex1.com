type SectionProps = {
  title: string;
  description: string;
};

export default function Section({ title, description }: SectionProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
