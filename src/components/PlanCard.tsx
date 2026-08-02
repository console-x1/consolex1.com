type PlanCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  accent: 'green' | 'blue' | 'yellow' | 'orange';
};

export default function PlanCard({ title, price, description, features, accent }: PlanCardProps) {
  return (
    <article className={`plan-card plan-card-${accent}`}>
      <div className="plan-header">
        <h3 className="plan-title">{title}</h3>
        <p className="plan-price">{price}</p>
      </div>
      <p className="plan-description">{description}</p>
      <ul className="plan-list">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="plan-action">
        <a className="button button-secondary" href="https://discord.consolex1.com">
          Choisir ce plan
        </a>
      </div>
    </article>
  );
}
