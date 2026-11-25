type PlanCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  accent: 'green' | 'blue' | 'yellow' | 'orange';
  locale: 'en' | 'fr';
};

// Couleur de repère de chaque plan, exposée en variable CSS (icône, jauges, puces, bordure)
const accents = {
  green: '[--plan:#46c08a]',
  blue: '[--plan:#5aa9ff]',
  yellow: '[--plan:#f0b43a]',
  orange: '[--plan:#ff8f2e]',
} as const;

// Une icône et une animation (au survol de la carte) par offre
function PlanIcon({ accent }: { accent: PlanCardProps['accent'] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (accent === 'green') {
    // Free : une pousse
    return (
      <svg {...common} className="origin-bottom group-hover/plan:animate-sway">
        <path d="M12 21v-9" />
        <path d="M12 13c0-4.2 3-6.6 7.5-6.6 0 4.4-3 6.6-7.5 6.6z" />
        <path d="M12 16c0-3.2-2.4-5.4-6.2-5.4 0 3.4 2.4 5.4 6.2 5.4z" />
      </svg>
    );
  }
  if (accent === 'blue') {
    // Basic : un éclair
    return (
      <svg {...common} className="group-hover/plan:animate-flicker">
        <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z" />
      </svg>
    );
  }
  if (accent === 'yellow') {
    // Pro : des couches empilées
    return (
      <svg {...common} className="group-hover/plan:animate-hover-y">
        <path d="m12 3 9 4.8-9 4.8-9-4.8z" />
        <path d="m3 12.2 9 4.8 9-4.8" />
        <path d="m3 16.6 9 4.8 9-4.8" />
      </svg>
    );
  }
  // Premium : une couronne
  return (
    <svg {...common} className="group-hover/plan:animate-crown">
      <path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z" />
      <path d="M5.5 21h13" />
    </svg>
  );
}

// « CPU : 40% » / « RAM : 1,5 Go » deviennent des jauges animées (échelle : 100 % et 1,5 Go)
function meter(feature: string): { label: string; value: string; ratio: number } | null {
  const cpu = feature.match(/^CPU\s*:\s*(\d+(?:[.,]\d+)?)\s*%/i);
  if (cpu) {
    const n = parseFloat(cpu[1].replace(',', '.'));
    return { label: 'CPU', value: `${n}%`, ratio: Math.min(1, n / 100) };
  }
  const ram = feature.match(/^RAM\s*:\s*(\d+(?:[.,]\d+)?)\s*(Mo|Go|MB|GB)/i);
  if (ram) {
    const n = parseFloat(ram[1].replace(',', '.'));
    const mb = /g/i.test(ram[2]) ? n * 1024 : n;
    return { label: 'RAM', value: feature.replace(/^RAM\s*:\s*/i, ''), ratio: Math.min(1, mb / 1536) };
  }
  return null;
}

export default function PlanCard({ title, price, description, features, accent, locale }: PlanCardProps) {
  const isFreePlan = price.startsWith('0 €/');
  const [amount, per] = price.split('/');
  const fr = locale === 'fr';
  const meters = features.map(meter).filter((m): m is NonNullable<ReturnType<typeof meter>> => m !== null);
  const rest = features.filter((f) => meter(f) === null);

  return (
    <article
      data-reveal
      className={`group/plan relative row-span-5 grid grid-rows-subgrid gap-0 rounded-xl border bg-panel p-5 transition-[border-color,translate,box-shadow] duration-300 ease-soft after:absolute after:inset-x-5 after:top-0 after:h-0.5 after:origin-left after:bg-(--plan) after:transition-transform after:duration-500 after:ease-soft hover:-translate-y-1 hover:shadow-[0_18px_36px_-22px_var(--plan)] hover:after:scale-x-100 sm:p-6 sm:after:inset-x-6 ${accents[accent]} ${isFreePlan ? 'border-brand after:scale-x-100' : 'border-line after:scale-x-0 hover:border-line-strong'
        }`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--plan)_16%,transparent)] text-(--plan) transition-transform duration-300 ease-soft group-hover/plan:scale-110">
          <PlanIcon accent={accent} />
        </span>
        <h3 className="m-0 min-w-0 flex-1 truncate font-display text-[1.1rem] font-semibold tracking-normal text-ink">{title}</h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-[.7rem] font-semibold ${isFreePlan ? 'bg-brand text-on-brand' : 'border border-line font-medium text-mute'
            }`}
        >
          {isFreePlan ? (fr ? 'Disponible' : 'Available') : fr ? 'Bientôt' : 'Soon'}
        </span>
      </div>

      <p className="mt-5 mb-0 flex items-baseline gap-1.5 text-ink">
        <span className="font-display text-[2.4rem] leading-none font-bold tracking-[-.03em]">{amount}</span>
        {per && <span className="text-[.9rem] text-mute">/{per}</span>}
      </p>
      <p className="mt-3 mb-5 text-[.92rem] leading-[1.55] text-mute">{description}</p>

      <div className="border-t border-line pt-4">
        {meters.length > 0 && (
          <div className="mb-4 grid gap-3">
            {meters.map((m) => (
              <div key={m.label}>
                <div className="flex items-baseline justify-between text-[.85rem] text-soft">
                  <span className="font-mono text-[.72rem] tracking-[.08em] text-mute uppercase">{m.label}</span>
                  <span className="font-medium text-ink tabular-nums">{m.value}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full origin-left rounded-full bg-(--plan) transition-transform duration-1100 ease-soft transform-[scaleX(var(--v))] in-[.js]:transform-[scaleX(0)] in-[.js]:group-data-in/plan:transform-[scaleX(var(--v))]"
                    style={{ '--v': m.ratio } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        <ul className="m-0 grid list-none gap-2.5 p-0">
          {rest.map((feature) => (
            <li
              key={feature}
              className="flex gap-2.5 text-[.92rem] leading-[1.45] text-soft before:mt-[.5em] before:size-1.5 before:shrink-0 before:bg-(--plan)"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="self-end pt-6">
        <a
          className={
            isFreePlan
              ? 'group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent min-h-11 px-3 py-2.5 text-center text-[.9rem] leading-[1.3] font-semibold no-underline cursor-pointer transition-[translate,box-shadow] duration-200 ease-soft bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] active:translate-x-0 active:translate-y-0 active:shadow-none'
              : 'relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-line-strong bg-transparent min-h-11 px-3 py-2.5 text-center text-[.88rem] leading-[1.3] font-semibold text-mute no-underline cursor-pointer transition-colors duration-200 hover:border-ink hover:text-ink'
          }
          href="https://discord.consolex1.com"
        >
          {isFreePlan ? 'Discord' : fr ? 'Indisponible pour le moment' : 'Not available yet'}
        </a>
      </div>
    </article>
  );
}