'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeroTerminal from './HeroTerminal';

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
    discord: 'Discord',
    heroButtonPrimary: 'Rejoindre Discord',
    heroButtonSecondary: 'Découvrir nos offres',
    eyebrow: 'Basé à Paris — datacenter Equinix PA5',
    title: 'Hébergement gratuit pour vos apps, bots et sites web.',
    highlight: 'gratuit',
    description: 'consolex1 est un hébergeur français gratuit pour vos petits projets Node.js, Python et bots Discord, sur une infrastructure à Paris.',
    statusText: 'État des services :',
    alternate: 'English',
    menu: 'Menu',
    alert: 'Vous cherchiez le profil de consolex1 et non pas l’hébergeur ?',
  },
  en: {
    brand: 'consolex1',
    tariffs: 'Pricing',
    faq: 'FAQ',
    guides: 'Guides',
    about: 'About',
    plans: 'Plans',
    discord: 'Discord',
    heroButtonPrimary: 'Join Discord',
    heroButtonSecondary: 'View plans',
    eyebrow: 'Hosted in Paris — Equinix PA5',
    title: 'Free hosting for your apps, bots and websites.',
    highlight: 'Free',
    description:
      'consolex1 is a French free hosting provider for small Node.js apps, Python services and Discord bots, with infrastructure in Paris.',
    statusText: 'Check service status:',
    alternate: 'Français',
    menu: 'Menu',
    alert: 'Looking for the consolex1 profile instead of hosting?',
  },
};

const routeMap: Record<Locale, { pricing: string; faq: string; guides: string; about: string; home: string }> = {
  fr: {
    pricing: '/tarif',
    faq: '/faq',
    guides: '/guides',
    about: '/a-propos',
    home: '/',
  },
  en: {
    pricing: '/en/pricing',
    faq: '/en/faq',
    guides: '/en/guides',
    about: '/en/about',
    home: '/en',
  },
};

function renderTitle(title: string, highlight: string) {
  const i = title.indexOf(highlight);
  if (i < 0) return title;
  return (
    <>
      {title.slice(0, i)}
      <span className="animate-shimmer bg-[linear-gradient(100deg,#4da3ff,#5eead4)] bg-[length:200%_auto] bg-clip-text text-transparent">{highlight}</span>
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
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (value: boolean) => setOpenFor(value ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenFor(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = [
    { href: routes.pricing, label: text.tariffs },
    { href: routes.faq, label: text.faq },
    { href: routes.guides, label: text.guides },
    { href: routes.about, label: text.about },
  ];

  return (
    <>
      <div className="pt-[.35rem] pb-[.6rem] text-center text-[.8rem] text-mute">
        <p className="m-0">
          {text.alert} <a className="text-soft underline decoration-white/16 underline-offset-[3px] transition-colors hover:text-white hover:decoration-brand" href="https://me.consolex1.com">
            me.consolex1.com
          </a>
        </p>
      </div>

      <header className="sticky top-3 z-50">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/8 bg-[rgba(10,14,22,.55)] py-2 pr-[.55rem] pl-4 backdrop-blur-[16px] backdrop-saturate-[1.4] transition-[background-color,border-color,box-shadow] duration-300 [html[data-scrolled]_&]:border-white/16 [html[data-scrolled]_&]:bg-[rgba(8,11,18,.85)] [html[data-scrolled]_&]:shadow-[0_14px_44px_rgba(0,0,0,.5)]">
          <Link href={routes.home} className="group inline-flex items-center gap-[.6rem] text-[1.02rem] font-semibold tracking-[-.015em] text-white no-underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="transition-transform duration-500 ease-soft group-hover:-rotate-[8deg] group-hover:scale-[1.12]" src="/avatar.png" alt="" width={26} height={26} />
            <span>{text.brand}</span>
          </Link>

          <nav
            id="main-nav"
            className={`flex gap-[.15rem] max-[860px]:absolute max-[860px]:inset-x-0 max-[860px]:top-[calc(100%+.5rem)] max-[860px]:origin-top max-[860px]:flex-col max-[860px]:rounded-[20px] max-[860px]:border max-[860px]:border-white/16 max-[860px]:bg-[#080b12] max-[860px]:p-2 max-[860px]:shadow-[0_24px_60px_rgba(0,0,0,.55)] max-[860px]:transition-[opacity,translate,scale,visibility] max-[860px]:duration-300 ${open ? 'max-[860px]:visible max-[860px]:opacity-100' : 'max-[860px]:invisible max-[860px]:-translate-y-2 max-[860px]:scale-[.98] max-[860px]:opacity-0'}`}
            aria-label={locale === 'en' ? 'Main navigation' : 'Navigation principale'}
            onClick={() => setOpen(false)}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={path === link.href ? 'page' : undefined}
                className={`relative rounded-full px-[.85rem] py-[.42rem] text-[.92rem] font-medium no-underline transition-colors hover:bg-white/[.055] hover:text-white max-[860px]:px-4 max-[860px]:py-[.8rem] max-[860px]:text-base ${path === link.href ? 'bg-white/[.055] text-white' : 'text-soft'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="relative rounded-full px-[.85rem] py-[.42rem] text-[.92rem] font-medium text-soft no-underline transition-colors hover:bg-white/[.055] hover:text-white max-[860px]:px-4 max-[860px]:py-[.8rem] max-[860px]:text-base"
              href={`${routes.home}#plans`}
            >
              {text.plans}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={alternateHref} className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-4 py-2 text-[.85rem] border-white/16 bg-transparent text-soft hover:border-white/30 hover:bg-white/[.028] hover:text-white" data-btn>
              {text.alternate}
            </Link>
            <a className="max-[560px]:hidden relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-4 py-2 text-[.85rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="https://discord.consolex1.com">
              {text.discord}
            </a>
            <button
              type="button"
              className="relative hidden size-10 cursor-pointer rounded-full border border-white/8 bg-white/[.028] max-[860px]:block"
              aria-expanded={open}
              aria-controls="main-nav"
              aria-label={text.menu}
              onClick={() => setOpen(!open)}
            >
              <span
                className={`absolute inset-x-3 h-0.5 rounded-sm bg-white transition-[top,rotate] duration-[350ms] ease-soft ${open ? 'top-[18px] rotate-45' : 'top-[15px]'
                  }`}
              />
              <span
                className={`absolute inset-x-3 h-0.5 rounded-sm bg-white transition-[top,rotate] duration-[350ms] ease-soft ${open ? 'top-[18px] -rotate-45' : 'top-[22px]'
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isHome && (
        <section data-hero className="relative grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] items-center gap-12 pt-[clamp(3rem,8vw,6rem)] pb-[clamp(2rem,5vw,3.5rem)] max-[900px]:grid-cols-1 max-[900px]:gap-10 before:pointer-events-none before:absolute before:-top-[8%] before:-left-[12%] before:-z-10 before:size-[480px] before:animate-float before:rounded-full before:bg-[radial-gradient(circle,rgba(77,163,255,.28),transparent_65%)] before:blur-[70px] after:pointer-events-none after:absolute after:-right-[8%] after:-bottom-[18%] after:-z-10 after:size-[480px] after:animate-float-slow after:rounded-full after:bg-[radial-gradient(circle,rgba(255,154,60,.16),transparent_65%)] after:blur-[70px]">
          <div className="[&>*]:animate-rise [&>:nth-child(2)]:[animation-delay:80ms] [&>:nth-child(3)]:[animation-delay:160ms] [&>:nth-child(4)]:[animation-delay:240ms] [&>:nth-child(5)]:[animation-delay:320ms]">
            <p className="m-0 inline-flex items-center gap-[.6rem] rounded-full border border-white/8 bg-white/[.028] py-[.35rem] pr-[.85rem] pl-[.7rem] text-[.8rem] text-soft before:size-[7px] before:animate-pulse-ring before:rounded-full before:bg-ok">{text.eyebrow}</p>
            <p className="mt-[1.4rem] mb-0 text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.03] font-bold tracking-[-.04em] text-white">{renderTitle(text.title, text.highlight)}</p>
            <p className="mt-[1.4rem] mb-0 max-w-[34rem] text-[1.08rem] text-soft">{text.description}</p>

            <div className="mt-8 flex flex-wrap gap-3 max-[640px]:flex-col max-[640px]:items-stretch">
              <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="https://discord.consolex1.com">
                {text.heroButtonPrimary}
              </a>
              <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] border-white/8 bg-white/[.055] text-ink hover:border-white/16 hover:bg-white/[.09]" data-btn href={`${routes.home}#plans`}>
                {text.heroButtonSecondary}
              </a>
            </div>

            <p className="mt-7 mb-0 text-[.88rem] text-mute">
              <span className="mr-2 inline-block size-[7px] animate-pulse-ring rounded-full bg-ok" />
              {text.statusText} <a className="text-soft underline decoration-white/16 underline-offset-[3px] hover:text-white" href="https://status.consolex1.com">status.consolex1.com</a>
            </p>
          </div>

          <HeroTerminal locale={locale} />
        </section>
      )}
    </>
  );
}