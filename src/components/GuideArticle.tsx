import Link from 'next/link';
import type { Guide } from '@/lib/guides';
import { getGuides } from '@/lib/guides';
import type { Locale } from '@/lib/hosting-pages';
import { hostingResources } from '@/lib/hosting-pages';

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
      <article>
        <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! [&_[data-reveal=header]]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
          <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
            <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">{locale === 'en' ? 'Practical guide' : 'Guide pratique'}</span>
            <h1>{guide.title}</h1>
            <p className="section-description">{guide.lead}</p>
          </div>
        </section>
        {isServerCreationGuide && (
          <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
            <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
              <h2>{locale === 'en' ? 'Open the right Discord channel' : 'Accéder au bon salon Discord'}</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              <a
                className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot
                href="https://discord.com/channels/1533218460975370332/1533401219043692737"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'en' ? 'Open the verification channel' : 'Ouvrir le salon de vérification'}
              </a>
              <a
                className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot
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
          <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
            <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
              <h2>{locale === 'en' ? 'The consolex1 custom egg' : 'L’egg personnalisé consolex1'}</h2>
              <p className="mt-4 mb-0 max-w-[46rem] text-[1.04rem] leading-[1.75] text-soft">
                {locale === 'en'
                  ? `The ${eggRepository.name} egg is developed by the consolex1 hosting provider. Its source code is public on GitHub.`
                  : `L’egg ${eggRepository.name} est développé par l’hébergeur consolex1. Son code source est public sur GitHub.`}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              <a className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href={eggRepository.url} target="_blank" rel="noopener noreferrer">
                {locale === 'en' ? `View ${eggRepository.name} on GitHub` : `Voir ${eggRepository.name} sur GitHub`}
              </a>
            </div>
          </section>
        )}
        {guide.sections.map((section) => (
          <section className="my-[clamp(3.5rem,8vw,5.5rem)]" key={section.heading}>
            <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
              <h2>{section.heading}</h2>
              <p className="mt-4 mb-0 max-w-[46rem] text-[1.04rem] leading-[1.75] text-soft">{section.body}</p>
            </div>
          </section>
        ))}
      </article>
      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
          <h2>{locale === 'en' ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
        </div>
        <div className="grid max-w-[820px] gap-[.6rem]">
          {guide.faqs.map((faq) => (
            <article className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 px-6 py-[1.2rem] [.js_&]:p-0 [&>h3]:mb-2 [&>h3]:text-[1.02rem] [&>h3]:tracking-[-.015em] [&>p]:m-0 [&>p]:text-[.96rem] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-6 [.js_&>h3]:py-[1.2rem] [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-[''] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:size-[.55rem] [.js_&>h3]:after:border-mute [.js_&>h3]:after:border-r-2 [.js_&>h3]:after:border-b-2 [.js_&>h3]:after:rotate-45 [.js_&>h3]:after:-translate-x-0.5 [.js_&>h3]:after:-translate-y-0.5 [.js_&>h3]:after:transition-[rotate,border-color] [.js_&>h3]:after:duration-[400ms] [.js_&>h3]:after:ease-soft [.js_&>h3]:hover:after:border-white [.js_&[data-open]>h3]:after:rotate-[225deg] [.js_&[data-open]>h3]:after:border-brand [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-6 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:[transition-duration:.45s,.35s,.45s,0s] [.js_&>p]:[transition-delay:0s,0s,0s,.45s] [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-[1.3rem] [.js_&[data-open]>p]:[transition-delay:0s]" data-reveal data-spot data-faq key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
          <h2>{locale === 'en' ? 'More guides' : 'Autres guides'}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {getGuides(locale)
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <Link
                className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot
                href={`${locale === 'en' ? '/en' : ''}/guides/${item.slug}`}
                key={item.slug}
                style={{ textDecoration: 'none' }}
              >
                <h3>{item.title}</h3>
              </Link>
            ))}
          {hostingResources[locale].map((resource) => (
            <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href={resource.href} key={resource.href} style={{ textDecoration: 'none' }}>
              <h3>{resource.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}