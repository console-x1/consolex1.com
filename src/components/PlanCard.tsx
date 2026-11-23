type PlanCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  accent: 'green' | 'blue' | 'yellow' | 'orange';
  locale: 'en' | 'fr';
};

const accents = {
  green: '[--accent:#34d399]',
  blue: '[--accent:#4da3ff]',
  yellow: '[--accent:#fbbf24]',
  orange: '[--accent:#ff9a3c]',
} as const;

export default function PlanCard({ title, price, description, features, accent, locale }: PlanCardProps) {
  const isFreePlan = price.startsWith('0 €/');
  const [amount, per] = price.split('/');
  const fr = locale === 'fr';

  return (
    <article
      data-reveal
      data-spot
      className={`flex flex-col p-[1.6rem] after:absolute after:inset-x-[1.6rem] after:top-0 after:h-0.5 after:origin-center after:scale-x-[.35] after:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] after:opacity-45 after:transition-[scale,opacity] after:duration-500 after:ease-soft hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:shadow-[0_28px_60px_-28px_color-mix(in_srgb,var(--accent)_45%,transparent)] hover:after:scale-x-100 hover:after:opacity-100 ${accents[accent]} ${isFreePlan
        ? 'relative isolate overflow-hidden rounded-[20px] border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100'
        : 'relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100'
        }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 text-[.95rem] font-semibold tracking-[.02em] text-soft">{title}</h3>
        <span
          className={`rounded-full border px-[.6rem] py-[.18rem] text-[.7rem] font-medium ${isFreePlan
            ? 'border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] text-(--accent)'
            : 'border-white/8 text-mute'
            }`}
        >
          {isFreePlan ? (fr ? 'Disponible' : 'Available') : fr ? 'Bientôt' : 'Soon'}
        </span>
      </div>
      <p className="mt-4 mb-0 flex items-baseline gap-[.3rem] text-white">
        <span className="text-[clamp(2rem,3.4vw,2.5rem)] font-bold tracking-[-.04em]">{amount}</span>
        {per && <span className="text-[.9rem] text-mute">/{per}</span>}
      </p>
      <p className="mt-[.8rem] mb-[1.4rem] text-[.92rem] text-mute">{description}</p>
      <ul className="m-0 grid list-none gap-[.65rem] border-t border-white/8 p-0 pt-5">
        {features.map((feature) => (
          <li
            key={feature}
            className="relative pl-[1.55rem] text-[.92rem] text-soft before:absolute before:top-[.42em] before:left-0 before:size-[.85rem] before:rounded-full before:bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] before:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_55%,transparent)] after:absolute after:top-[calc(.42em+.2rem)] after:left-[.3rem] after:h-[.4rem] after:w-[.22rem] after:rotate-[40deg] after:border-(color:--accent) after:border-r-[1.5px] after:border-b-[1.5px]"
          >
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-[1.6rem]">
        <a
          data-btn
          className={isFreePlan ? 'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] w-full px-[.8rem] py-[.8rem] text-center text-[.85rem] leading-[1.3] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]' : 'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] w-full px-[.8rem] py-[.8rem] text-center text-[.85rem] leading-[1.3] border-white/8 bg-white/[.055] text-ink hover:border-white/16 hover:bg-white/[.09] border-dashed bg-transparent text-mute'}
          href="https://discord.consolex1.com"
        >
          {isFreePlan ? 'Discord' : fr ? 'Indisponible pour le moment' : 'Not available yet'}
        </a>
      </div>
    </article>
  );
}