'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import HeroTerminal from './HeroTerminal';
import Logo from './Logo';
import StatusBanner from './StatusBanner';
import StatusPill from './StatusPill';
import ThemeToggle from './ThemeToggle';

type Locale = 'fr' | 'en';

type HeaderProps = {
  locale: Locale;
};

const labels = {
  fr: {
    brand: 'consolex1',
    tariffs: 'Tarifs',
    faq: 'FAQ',
    guides: 'Guides',
    about: 'À propos',
    plans: 'Plans',
    stats: "Statistiques",
    discord: 'Discord',
    heroButtonPrimary: 'Rejoindre Discord',
    heroButtonSecondary: 'Découvrir nos offres',
    eyebrow: 'Paris · datacenter Equinix PA5',
    title: 'Hébergement gratuit pour vos apps, bots et sites web.',
    highlight: 'gratuit',
    description:
      'consolex1 est un hébergeur français gratuit pour vos petits projets Node.js, Python et bots Discord, sur une infrastructure à Paris.',
    alternate: 'English',
    alternateShort: 'EN',
    alternateLang: 'en',
    menu: 'Menu',
    nav: 'Navigation principale',
    alert: 'Vous cherchiez le profil de consolex1 et non pas l’hébergeur ?',
  },
  en: {
    brand: 'consolex1',
    tariffs: 'Pricing',
    faq: 'FAQ',
    guides: 'Guides',
    about: 'About',
    plans: 'Plans',
    stats: "Statistics",
    discord: 'Discord',
    heroButtonPrimary: 'Join Discord',
    heroButtonSecondary: 'View plans',
    eyebrow: 'Paris · Equinix PA5 datacenter',
    title: 'Free hosting for your apps, bots and websites.',
    highlight: 'Free',
    description:
      'consolex1 is a French free hosting provider for small Node.js apps, Python services and Discord bots, with infrastructure in Paris.',
    alternate: 'Français',
    alternateShort: 'FR',
    alternateLang: 'fr',
    menu: 'Menu',
    nav: 'Main navigation',
    alert: 'Looking for the consolex1 profile instead of hosting?',
  },
};

const routeMap: Record<Locale, { pricing: string; faq: string; guides: string; about: string; home: string, stats: string }> = {
  fr: {
    pricing: '/tarif',
    faq: '/faq',
    guides: '/guides',
    about: '/a-propos',
    home: '/',
    stats: '/stats',
  },
  en: {
    pricing: '/en/pricing',
    faq: '/en/faq',
    guides: '/en/guides',
    about: '/en/about',
    home: '/en',
    stats: '/en/stats',
  },
};

// Trait ondulé (masque SVG) rempli par un dégradé qui défile en continu
const SQUIGGLE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12' preserveAspectRatio='none'%3E%3Cpath d='M3 8.5C38 3 82 11 121 5.5S178 3.5 197 7' fill='none' stroke='black' stroke-width='4.5' stroke-linecap='round'/%3E%3C/svg%3E\")";
const UNDERLINE_MASK = {
  WebkitMaskImage: SQUIGGLE,
  maskImage: SQUIGGLE,
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
} as const;

// Le mot mis en avant est souligné d'un trait dessiné à la main, rempli par un dégradé animé
function renderTitle(title: string, highlight: string) {
  const i = title.indexOf(highlight);
  if (i < 0) return title;
  return (
    <>
      {title.slice(0, i)}
      <span className="relative inline-block whitespace-nowrap">
        {highlight}
        <span
          aria-hidden="true"
          className="absolute bottom-[-0.12em] left-0 block h-[.26em] w-full animate-[slide-x_5s_linear_infinite,wipe_.9s_.5s_cubic-bezier(.65,0,.35,1)_backwards] bg-[linear-gradient(90deg,var(--c-accent),var(--c-warn),var(--c-ok),var(--c-brand),var(--c-accent))] bg-size-[200%_100%]"
          style={UNDERLINE_MASK}
        />
      </span>
      {title.slice(i + highlight.length)}
    </>
  );
}

export default function Header({ locale }: HeaderProps) {
  const text = labels[locale];
  const routes = routeMap[locale];
  const alternateHref = locale === 'fr' ? '/en' : '/';
  const pathname = usePathname();
  const path = (pathname ?? '/').replace(/\/+$/, '') || '/';
  const isHome = path === '/' || path === '/en';
  const headerRef = useRef<HTMLElement>(null);

  // le menu mobile est lié à la page où il a été ouvert : il se referme tout seul à chaque navigation
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenFor(null);
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenFor(null);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const links = [
    { href: routes.pricing, label: text.tariffs },
    { href: routes.faq, label: text.faq },
    { href: routes.guides, label: text.guides },
    { href: routes.about, label: text.about },
    { href: routes.stats, label: text.stats },
  ];

  return (
    <>
      <p className="m-0 py-2 text-center text-[.78rem] leading-[1.4] text-mute sm:text-[.8rem]">
        {text.alert}{' '}
        <a
          className="text-soft underline decoration-line-strong underline-offset-[3px] transition-colors hover:text-ink hover:decoration-accent"
          href="https://me.consolex1.com"
        >
          me.consolex1.com
        </a>
      </p>

      <StatusBanner locale={locale} />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 -mx-4 border-b border-line bg-page/90 px-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 2xl:-mx-14 2xl:px-14"
      >
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-3">
          <Link href={routes.home} className="inline-flex min-h-11 items-center gap-2.5 font-display text-[1.12rem] font-bold tracking-[-.02em] text-ink no-underline">
            <Logo size={28} />
            <span>{text.brand}</span>
          </Link>

          <nav
            id="main-nav"
            aria-label={text.nav}
            onClick={() => setOpenFor(null)}
            className={`absolute inset-x-0 top-full flex flex-col border-b border-line bg-page px-3 py-2 shadow-[0_18px_30px_-14px_rgba(0,0,0,.4)] transition-[opacity,translate,visibility] duration-200 min-[860px]:visible min-[860px]:static min-[860px]:translate-y-0 min-[860px]:flex-row min-[860px]:gap-1 min-[860px]:border-0 min-[860px]:bg-transparent min-[860px]:p-0 min-[860px]:opacity-100 min-[860px]:shadow-none ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
              }`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={path === link.href ? 'page' : undefined}
                className={`relative flex min-h-11 items-center rounded-lg px-3 text-[.95rem] font-medium no-underline transition-colors hover:bg-panel-hover hover:text-ink min-[860px]:min-h-10 min-[860px]:text-[.92rem] ${path === link.href ? 'text-ink after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-accent' : 'text-soft'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href={alternateHref}
              lang={text.alternateLang}
              hrefLang={text.alternateLang}
              aria-label={text.alternate}
              className="inline-flex min-h-11 items-center rounded-lg px-2.5 text-[.85rem] font-semibold text-soft no-underline transition-colors hover:bg-panel-hover hover:text-ink sm:min-h-10 sm:px-3"
            >
              <span className="sm:hidden">{text.alternateShort}</span>
              <span className="hidden sm:inline">{text.alternate}</span>
            </Link>
            <ThemeToggle locale={locale} />
            <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-4 py-2 text-[.88rem] sm:min-h-10 bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] max-[639px]:hidden" href="https://discord.consolex1.com">
              {text.discord}
            </a>
            <button
              type="button"
              className="relative size-11 shrink-0 cursor-pointer rounded-lg border border-line bg-transparent min-[860px]:hidden"
              aria-expanded={open}
              aria-controls="main-nav"
              aria-label={text.menu}
              onClick={() => setOpenFor(open ? null : pathname)}
            >
              <span
                className={`absolute inset-x-3 h-0.5 rounded-sm bg-ink transition-[top,rotate] duration-200 ${open ? 'top-5.25 rotate-45' : 'top-4'
                  }`}
              />
              <span
                className={`absolute inset-x-3 h-0.5 rounded-sm bg-ink transition-[top,rotate] duration-200 ${open ? 'top-5.25 -rotate-45' : 'top-6.5'
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isHome && (
        <section
          data-hero
          className="grid items-center gap-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:pt-20 lg:pb-24"
        >
          <div className="min-w-0 *:animate-rise [&>:nth-child(2)]:[animation-delay:70ms] [&>:nth-child(3)]:[animation-delay:140ms] [&>:nth-child(4)]:[animation-delay:210ms] [&>:nth-child(5)]:[animation-delay:280ms]">
            <p className="m-0 inline-flex items-center gap-2 font-mono text-[.74rem] tracking-[.08em] text-mute uppercase before:size-[.45rem] before:bg-accent">
              {text.eyebrow}
            </p>
            <p className="mt-5 mb-0 font-display text-[clamp(2.1rem,8.4vw,4.1rem)] leading-[1.04] font-bold tracking-[-.035em] text-ink">
              {renderTitle(text.title, text.highlight)}
            </p>
            <p className="mt-5 mb-0 max-w-136 text-base leading-[1.65] text-soft sm:text-[1.1rem]">
              {text.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href="https://discord.consolex1.com">
                {text.heroButtonPrimary}
              </a>
              <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] border-line-strong bg-panel text-ink bg-[linear-gradient(var(--c-line),var(--c-line))] bg-size-[0%_100%] bg-left bg-no-repeat hover:bg-size-[100%_100%] hover:border-ink after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href={`${routes.home}#plans`}>
                {text.heroButtonSecondary}
              </a>
            </div>
            <div className="mt-5">
              <StatusPill locale={locale} />
            </div>
          </div>
          <HeroTerminal locale={locale} />
        </section>
      )}
    </>
  );
}