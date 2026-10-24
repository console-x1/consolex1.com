'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Crumb = { label: string; href: string };

const routeLabels: Record<'fr' | 'en', Record<string, string>> = {
  fr: {
    'a-propos': 'À propos',
    cgu: 'Conditions générales d’utilisation',
    faq: 'Questions fréquentes',
    guides: 'Guides',
    'hebergement-bot-discord': 'Hébergement de bots Discord',
    'hebergement-bot-discord-nodejs': 'Hébergement de bots Discord avec Node.js',
    'hebergement-bot-discord-python': 'Hébergement de bots Discord avec Python',
    'hebergement-france': 'Hébergement en France',
    'hebergement-nodejs': 'Hébergement Node.js',
    'hebergement-pterodactyl': 'Hébergement Pterodactyl',
    'hebergement-python': 'Hébergement Python',
    mentions: 'Mentions légales',
    'politique-de-confidentialite': 'Politique de confidentialité',
    tarif: 'Tarifs',
    'hebergement-gratuit': 'Hébergement gratuit',
    'hebergement-gratuit-france': 'Hébergement gratuit en France',
    'hebergement-gratuit-sans-carte-bancaire': 'Hébergement sans carte bancaire',
    'heberger-bot-discord-gratuitement': 'Héberger un bot Discord',
    'heberger-application-nodejs-gratuitement': 'Héberger une application Node.js',
    'heberger-bot-python-gratuitement': 'Héberger un bot Python',
    'deployer-bot-discordjs': 'Déployer un bot discord.js',
    'deployer-bot-discord-py': 'Déployer un bot discord.py',
    'creer-un-serveur-consolex1': 'Créer un serveur consolex1',
    'guide-complet-panel-pterodactyl': 'Guide du panel Pterodactyl',
    'depanner-deploiement-nodejs': 'Dépanner Node.js',
    'depanner-deploiement-python': 'Dépanner Python',
    'sauvegardes-et-persistance-applications': 'Sauvegardes et persistance',
    'hebergement-gratuit-ou-vps': 'Hébergement gratuit ou VPS',
    'pterodactyl-ou-vps-autogere': 'Pterodactyl ou VPS autogéré',
    'discordjs-ou-discordpy': 'discord.js ou discord.py',
  },
  en: {
    about: 'About',
    'bot-discord-hosting': 'Discord bot hosting',
    'discord-bot-hosting': 'Discord bot hosting',
    'discord-bot-nodejs-hosting': 'Discord bot hosting with Node.js',
    'discord-bot-python-hosting': 'Discord bot hosting with Python',
    faq: 'Frequently asked questions',
    'france-hosting': 'Hosting in France',
    guides: 'Guides',
    'legal-notice': 'Legal notice',
    'nodejs-hosting': 'Node.js hosting',
    pricing: 'Pricing',
    'privacy-policy': 'Privacy policy',
    'pterodactyl-hosting': 'Pterodactyl hosting',
    'python-hosting': 'Python hosting',
    terms: 'Terms of use',
    'free-hosting': 'Free hosting',
    'free-hosting-france': 'Free hosting in France',
    'free-hosting-without-credit-card': 'Hosting without a credit card',
    'host-discord-bot-for-free': 'Host a Discord bot',
    'host-nodejs-app-for-free': 'Host a Node.js app',
    'host-python-bot-for-free': 'Host a Python bot',
    'deploy-discordjs-bot': 'Deploy a discord.js bot',
    'deploy-discord-py-bot': 'Deploy a discord.py bot',
    'create-consolex1-server': 'Create a consolex1 server',
    'pterodactyl-panel-guide': 'Pterodactyl panel guide',
    'troubleshoot-nodejs-deployment': 'Troubleshoot Node.js',
    'troubleshoot-python-deployment': 'Troubleshoot Python',
    'backups-and-data-persistence': 'Backups and data persistence',
    'free-hosting-vs-vps': 'Free hosting vs a VPS',
    'pterodactyl-vs-self-managed-vps': 'Pterodactyl vs a self-managed VPS',
    'discordjs-vs-discordpy': 'discord.js vs discord.py',
  },
};

function humanize(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname) return null;

  const path = pathname.replace(/\/+$/, '') || '/';
  const isEnglish = path === '/en' || path.startsWith('/en/');
  const locale = isEnglish ? 'en' : 'fr';
  if (path === '/' || path === '/en') return null;

  const parts = (isEnglish ? path.slice(4) : path.slice(1)).split('/').filter(Boolean);
  const crumbs: Crumb[] = [
    { label: isEnglish ? 'Home' : 'Accueil', href: isEnglish ? '/en' : '/' },
  ];

  if (parts[0] === 'guides' && parts.length > 1) {
    crumbs.push({
      label: routeLabels[locale].guides,
      href: `${isEnglish ? '/en' : ''}/guides`,
    });
  }

  const slug = parts[parts.length - 1];
  crumbs.push({
    label: routeLabels[locale][slug] ?? humanize(slug),
    href: path,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://consolex1.com${crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />
      <nav className="breadcrumbs" aria-label={isEnglish ? 'Breadcrumb' : 'Fil d’Ariane'}>
        <ol>
          {crumbs.map((crumb, index) => (
            <li key={crumb.href}>
              {index === crumbs.length - 1 ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
