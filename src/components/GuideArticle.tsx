import Link from 'next/link';
import type { Guide } from '@/lib/guides';
import { getGuides } from '@/lib/guides';
import type { Locale } from '@/lib/hosting-pages';
import { hostingResources } from '@/lib/hosting-pages';
import { parseHeading, readingMinutes, renderInline, slugify, splitParagraphs } from '@/lib/guide-utils';
import GuideToc from './GuideToc';
import ShareButton from './ShareButton';

export default function GuideArticle({
  guide,
  locale,
}: {
  guide: Guide;
  locale: Locale;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'consolex1', url: 'https://consolex1.com' },
    publisher: { '@type': 'Organization', name: 'consolex1', url: 'https://consolex1.com' },
    mainEntityOfPage: `https://consolex1.com${locale === 'en' ? '/en' : ''}/guides/${guide.slug}`,
  };
  const pageUrl = `https://consolex1.com${locale === 'en' ? '/en' : ''}/guides/${guide.slug}`;
  const english = locale === 'en';
  const sections = guide.sections.map((section, i) => {
    const { step, title } = parseHeading(section.heading);
    return { ...section, step, title, id: `${slugify(title) || 'section'}-${i + 1}` };
  });
  const steps = sections.filter((section) => section.step);
  const minutes = readingMinutes([guide.lead, ...guide.sections.map((x) => `${x.heading} ${x.body}`), ...guide.faqs.map((f) => `${f.question} ${f.answer}`)]);
  const howTo =
    steps.length >= 3
      ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: guide.title,
        description: guide.description,
        inLanguage: locale,
        step: steps.map((section, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: section.title,
          text: section.body,
          url: `${pageUrl}#${section.id}`,
        })),
      }
      : null;
  const isServerCreationGuide =
    guide.slug === 'create-consolex1-server' || guide.slug === 'creer-un-serveur-consolex1';
  const eggRepository =
    guide.slug.includes('nodejs') || guide.slug.includes('discordjs')
      ? {
        name: 'Node.js Universal',
        url: 'https://github.com/console-x1/pterodactyl-node',
      }
      : guide.slug.includes('python') || guide.slug.includes('discord-py')
        ? {
          name: 'Python Universal',
          url: 'https://github.com/console-x1/pterodactyl-python',
        }
        : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      {howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo).replace(/</g, '\\u003c') }}
        />
      )}
      <article>
        <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
          <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">{locale === 'en' ? 'Practical guide' : 'Guide pratique'}</span>
            <h1>{guide.title}</h1>
            <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">{guide.lead}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[.88rem] text-mute">
              <span className="inline-flex items-center gap-2 font-mono text-[.78rem] tracking-[.04em] uppercase">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {english ? `${minutes} min read` : `${minutes} min de lecture`}
              </span>
              <ShareButton title={guide.title} locale={locale} />
            </div>
            {sections.length > 2 && (
              <details className="group mt-6 rounded-xl border border-line bg-panel lg:hidden">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-[.95rem] font-semibold text-ink after:font-mono after:text-[1.3rem] after:text-mute after:content-['+'] group-open:after:content-['−']">
                  {english ? 'In this guide' : 'Dans ce guide'}
                </summary>
                <div className="border-t border-line px-2 py-3">
                  <GuideToc items={sections.map((x) => ({ id: x.id, label: x.title }))} />
                </div>
              </details>
            )}
          </div>
        </section>
        {isServerCreationGuide && (
          <section className="my-[clamp(3rem,7vw,5rem)]">
            <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
              <h2>{locale === 'en' ? 'Open the right Discord channel' : 'Accéder au bon salon Discord'}</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
              <a
                className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal
                href="https://discord.com/channels/1533218460975370332/1533401219043692737"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'en' ? 'Open the verification channel' : 'Ouvrir le salon de vérification'}
              </a>
              <a
                className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal
                href="https://discord.com/channels/1533218460975370332/1540032329559310446"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'en' ? 'Open the commands channel' : 'Ouvrir le salon commandes'}
              </a>
            </div>
          </section>
        )}
        {eggRepository && (
          <section className="my-[clamp(3rem,7vw,5rem)]">
            <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
              <h2>{locale === 'en' ? 'The consolex1 custom egg' : 'L’egg personnalisé consolex1'}</h2>
              <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
                {locale === 'en'
                  ? `The ${eggRepository.name} egg is developed by the consolex1 hosting provider. Its source code is public on GitHub.`
                  : `L’egg ${eggRepository.name} est développé par l’hébergeur consolex1. Son code source est public sur GitHub.`}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
              <a className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href={eggRepository.url} target="_blank" rel="noopener noreferrer">
                {locale === 'en' ? `View ${eggRepository.name} on GitHub` : `Voir ${eggRepository.name} sur GitHub`}
              </a>
            </div>
          </section>
        )}
        <div className="my-[clamp(2rem,5vw,3.5rem)] lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-28 border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10"
              >
                <div className={section.step ? 'grid gap-x-6 gap-y-2 sm:grid-cols-[3.25rem_minmax(0,1fr)]' : ''}>
                  {section.step && (
                    <span className="font-mono text-[1.7rem] leading-none font-semibold text-accent sm:pt-1.5" aria-hidden="true">
                      {section.step.padStart(2, '0')}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h2 className="group/h text-[clamp(1.35rem,2.6vw,1.8rem)]">
                      {section.title}
                      <a
                        href={`#${section.id}`}
                        aria-label={english ? 'Link to this section' : 'Lien vers cette section'}
                        className="ml-2 align-middle font-mono text-[.8em] font-normal text-mute no-underline opacity-0 transition-opacity duration-200 group-hover/h:opacity-100 focus-visible:opacity-100"
                      >
                        #
                      </a>
                    </h2>
                    {splitParagraphs(section.body).map((paragraph, i) => (
                      <p key={i} className="mt-4 mb-0 max-w-176 text-[1.04rem] leading-[1.85] text-soft">
                        {renderInline(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
          {sections.length > 2 && (
            <aside className="hidden lg:block" aria-label={english ? 'Table of contents' : 'Sommaire'}>
              <div className="sticky top-24">
                <p className="m-0 mb-3 font-mono text-[.72rem] tracking-[.08em] text-mute uppercase">
                  {english ? 'In this guide' : 'Dans ce guide'}
                </p>
                <GuideToc items={sections.map((x) => ({ id: x.id, label: x.title }))} />
              </div>
            </aside>
          )}
        </div>
      </article>
      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>{locale === 'en' ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
        </div>
        <div className="grid max-w-208 gap-2">
          {guide.faqs.map((faq) => (
            <article className="relative overflow-hidden rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 hover:border-line-strong sm:px-6 in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-base [&>h3]:font-semibold [&>p]:m-0 [&>p]:text-[.95rem] [&>p]:leading-[1.65] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:min-h-13 [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-5 [.js_&>h3]:py-3 [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-['+'] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:font-mono [.js_&>h3]:after:text-[1.4rem] [.js_&>h3]:after:leading-none [.js_&>h3]:after:text-mute [.js_&>h3]:after:transition-[rotate,color] [.js_&>h3]:after:duration-200 [.js_&>h3]:hover:after:text-ink [.js_&>h3]:sm:px-6 [.js_&[data-open]>h3]:after:rotate-45 [.js_&[data-open]>h3]:after:text-accent [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-5 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.35s,.25s,.35s,0s] [.js_&>p]:delay-[0s,0s,0s,.35s] [.js_&>p]:sm:px-6 [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-5 [.js_&[data-open]>p]:delay-[0s]" data-reveal data-faq key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>{locale === 'en' ? 'More guides' : 'Autres guides'}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {getGuides(locale)
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <Link
                className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal
                href={`${locale === 'en' ? '/en' : ''}/guides/${item.slug}`}
                key={item.slug}
                style={{ textDecoration: 'none' }}
              >
                <h3>{item.title}</h3>
              </Link>
            ))}
          {hostingResources[locale].map((resource) => (
            <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href={resource.href} key={resource.href} style={{ textDecoration: 'none' }}>
              <h3>{resource.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}