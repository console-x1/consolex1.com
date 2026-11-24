type PlanCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  accent: 'green' | 'blue' | 'yellow' | 'orange';
  locale: 'en' | 'fr';
};

// Couleur de repère de chaque plan (petit carré devant le nom et puces de la liste)
const accents = {
  green: '[--plan:#46c08a]',
  blue: '[--plan:#5aa9ff]',
  yellow: '[--plan:#f0b43a]',
  orange: '[--plan:#ff8f2e]',
} as const;

export default function PlanCard({ title, price, description, features, accent, locale }: PlanCardProps) {
  const isFreePlan = price.startsWith('0 €/');
  const [amount, per] = price.split('/');
  const fr = locale === 'fr';

  return (
    <article
      data-reveal
      className={`relative row-span-5 grid grid-rows-subgrid gap-0 rounded-xl border bg-panel p-5 transition-colors duration-200 sm:p-6 ${accents[accent]} ${isFreePlan ? 'border-brand' : 'border-line hover:border-line-strong'
        }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 flex items-center gap-2.5 font-display text-base font-semibold tracking-normal text-ink before:size-2.5 before:bg-(--plan)">
          {title}
        </h3>
        <span
          className={`rounded px-2 py-0.5 text-[.7rem] font-semibold ${isFreePlan ? 'bg-brand text-on-brand' : 'border border-line font-medium text-mute'
            }`}
        >
          {isFreePlan ? (fr ? 'Disponible' : 'Available') : fr ? 'Bientôt' : 'Soon'}
        </span>
      </div>
      <p className="mt-5 mb-0 flex items-baseline gap-1.5 text-ink">
        <span className="font-display text-[2.3rem] leading-none font-bold tracking-[-.03em]">{amount}</span>
        {per && <span className="text-[.9rem] text-mute">/{per}</span>}
      </p>
      <p className="mt-3 mb-5 text-[.92rem] leading-[1.55] text-mute">{description}</p>
      <ul className="m-0 grid list-none gap-2.5 border-t border-line p-0 pt-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2.5 text-[.92rem] leading-[1.45] text-soft before:mt-[.5em] before:size-1.5 before:shrink-0 before:bg-(--plan)"
          >
            {feature}
          </li>
        ))}
      </ul>
      <div className="self-end pt-6">
        <a
          className={isFreePlan ? 'relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 w-full px-3 py-2.5 text-center text-[.9rem] leading-[1.3] bg-brand text-on-brand hover:brightness-110' : 'relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 w-full px-3 py-2.5 text-center text-[.88rem] leading-[1.3] border-line-strong bg-transparent text-soft hover:bg-panel-hover hover:text-ink border-dashed text-mute'}
          href="https://discord.consolex1.com"
        >
          {isFreePlan ? 'Discord' : fr ? 'Indisponible pour le moment' : 'Not available yet'}
        </a>
      </div>
    </article>
  );
}