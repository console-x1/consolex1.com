import { getGuides } from '@/lib/guides';
import { getHostingPages } from '@/lib/hosting-pages';

export const SITE_URL = 'https://consolex1.com';

export type SitePage = {
    path: string;
    title: string;
    description: string;
    locale: 'fr' | 'en';
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly';
    alternate?: string | null;
    kind: 'page' | 'hosting' | 'guide';
};

// Pages statiques (titres et descriptions repris des metadata de chaque page)
const STATIC_PAGES: SitePage[] = [
    { "path": "/a-propos", "title": "À propos de consolex1 | Pourquoi cet hébergement gratuit existe", "description": "Découvrez l’histoire et la philosophie de consolex1, un projet indépendant d’hébergement français avec une infrastructure à Paris chez Equinix PA5.", "locale": "fr", "priority": 0.5, "changeFrequency": "monthly", "alternate": "/en/about", "kind": "page" },
    { "path": "/cgu", "title": "CGU", "description": "Conditions générales d’utilisation de consolex1, décrivant les droits, obligations et engagements du service.", "locale": "fr", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/en/terms", "kind": "page" },
    { "path": "/faq", "title": "FAQ sur l’hébergement consolex1 | consolex1", "description": "Réponses aux questions courantes sur l'offre, la localisation des serveurs et les limitations.", "locale": "fr", "priority": 0.8, "changeFrequency": "weekly", "alternate": "/en/faq", "kind": "page" },
    { "path": "/guides", "title": "Guides d’hébergement Discord, Node.js et Python", "description": "Guides pratiques pour héberger gratuitement un bot Discord, déployer Node.js, Python, discord.js et discord.py.", "locale": "fr", "priority": 0.5, "changeFrequency": "monthly", "alternate": "/en/guides", "kind": "page" },
    { "path": "/hebergement-bot-discord", "title": "Hébergement gratuit de bot Discord en France | consolex1", "description": "Hébergez votre bot Discord en France sur consolex1 avec Node.js, Python, Pterodactyl, sauvegardes et infrastructure locale.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/discord-bot-hosting", "kind": "page" },
    { "path": "/hebergement-bot-discord-nodejs", "title": "Hébergement Bot Discord Node.js en France | consolex1", "description": "Découvrez le meilleur hébergement bot Discord Node.js en France avec consolex1, Pterodactyl, stabilité et simplicité.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/discord-bot-nodejs-hosting", "kind": "page" },
    { "path": "/hebergement-bot-discord-python", "title": "Hébergement Bot Discord Python en France | consolex1", "description": "Hébergez votre bot Discord Python en France avec consolex1, une infrastructure locale et des outils de gestion simplifiés.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/discord-bot-python-hosting", "kind": "page" },
    { "path": "/hebergement-france", "title": "Hébergement en France | consolex1", "description": "Hébergement en France pour bots Discord, APIs, services web et applications Node.js/Python avec consolex1.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/france-hosting", "kind": "page" },
    { "path": "/hebergement-nodejs", "title": "Hébergement gratuit Node.js en France | consolex1", "description": "Hébergez vos applications Node.js en France avec consolex1, Pterodactyl, deployment simple et ressources adaptées aux APIs et services web.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/nodejs-hosting", "kind": "page" },
    { "path": "/hebergement-pterodactyl", "title": "Hébergement Pterodactyl | consolex1", "description": "Découvrez comment utiliser Pterodactyl avec consolex1 pour gérer vos apps, bots Discord et services web en toute simplicité.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/pterodactyl-hosting", "kind": "page" },
    { "path": "/hebergement-python", "title": "Hébergement gratuit Python en France | consolex1", "description": "Hébergez vos applications Python, scripts et services web en France avec consolex1 et Pterodactyl.", "locale": "fr", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/en/python-hosting", "kind": "page" },
    { "path": "/mentions", "title": "Mentions légales", "description": "Mentions légales de consolex1, expliquant l’éditeur, l’hébergement et le cadre juridique.", "locale": "fr", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/en/legal-notice", "kind": "page" },
    { "path": "/", "title": "Hébergement gratuit en France : Node.js, Python et Discord | consolex1", "description": "consolex1 est un hébergeur français gratuit pour petits projets Node.js, services Python et bots Discord. Offre à 0 € sans carte bancaire, serveurs à Paris.", "locale": "fr", "priority": 1.0, "changeFrequency": "daily", "alternate": "/en", "kind": "page" },
    { "path": "/politique-de-confidentialite", "title": "Politique de confidentialité", "description": "Politique de confidentialité de consolex1, décrivant le traitement des données et la protection de la vie privée.", "locale": "fr", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/en/privacy-policy", "kind": "page" },
    { "path": "/tarif", "title": "Tarifs", "description": "Comparez les offres consolex1 et choisissez celle qui convient à votre projet.", "locale": "fr", "priority": 0.9, "changeFrequency": "weekly", "alternate": "/en/pricing", "kind": "page" },
    { "path": "/en/about", "title": "About consolex1 | Why we built free hosting in France", "description": "Learn why consolex1 exists, how its independent project is built, and about its free hosting infrastructure in Paris at Equinix PA5.", "locale": "en", "priority": 0.5, "changeFrequency": "monthly", "alternate": "/a-propos", "kind": "page" },
    { "path": "/en/discord-bot-hosting", "title": "Free Discord Bot Hosting in France | consolex1", "description": "Host your Discord bot in France with consolex1, using Node.js, Python, Pterodactyl, backups and a local infrastructure.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-bot-discord", "kind": "page" },
    { "path": "/en/discord-bot-nodejs-hosting", "title": "Discord Bot Node.js Hosting in France | consolex1", "description": "Discover Node.js Discord bot hosting in France with consolex1, including Pterodactyl, stability and simple deployment.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-bot-discord-nodejs", "kind": "page" },
    { "path": "/en/discord-bot-python-hosting", "title": "Discord Bot Python Hosting in France | consolex1", "description": "Host your Discord bot in Python in France with consolex1, using a local infrastructure and simplified management tools.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-bot-discord-python", "kind": "page" },
    { "path": "/en/faq", "title": "Hosting FAQ | consolex1", "description": "Answers to common questions about consolex1 hosting, server location, and limitations.", "locale": "en", "priority": 0.8, "changeFrequency": "weekly", "alternate": "/faq", "kind": "page" },
    { "path": "/en/france-hosting", "title": "Hosting in France | consolex1", "description": "Hosting in France for Discord bots, APIs, web services and Node.js/Python apps with consolex1.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-france", "kind": "page" },
    { "path": "/en/guides", "title": "Free Hosting Guides for Discord, Node.js and Python", "description": "Practical guides to free Discord bot hosting, Node.js deployment, Python bots, discord.js and discord.py.", "locale": "en", "priority": 0.5, "changeFrequency": "monthly", "alternate": "/guides", "kind": "page" },
    { "path": "/en/legal-notice", "title": "Legal notice", "description": "Legal information about consolex1, including publisher details and hosting terms.", "locale": "en", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/mentions", "kind": "page" },
    { "path": "/en/nodejs-hosting", "title": "Free Node.js Hosting in France | consolex1", "description": "Host your Node.js applications in France with consolex1, including Pterodactyl, simple deployment and resources for APIs and web services.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-nodejs", "kind": "page" },
    { "path": "/en", "title": "Free Hosting in France for Node.js, Python and Discord Bots | consolex1", "description": "consolex1 is a French free hosting provider for Node.js, Python, Discord bot and web hosting. The €0 plan requires no credit card and includes 256 MB RAM and 512 MB storage on servers in Paris at Equinix PA5.", "locale": "en", "priority": 1.0, "changeFrequency": "weekly", "alternate": "/", "kind": "page" },
    { "path": "/en/pricing", "title": "Pricing", "description": "Compare consolex1 plans and choose the package for your project.", "locale": "en", "priority": 0.9, "changeFrequency": "weekly", "alternate": "/tarif", "kind": "page" },
    { "path": "/en/privacy-policy", "title": "Privacy policy", "description": "Privacy policy for consolex1, describing data handling and user privacy protections.", "locale": "en", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/politique-de-confidentialite", "kind": "page" },
    { "path": "/en/pterodactyl-hosting", "title": "Pterodactyl Hosting | consolex1", "description": "Learn how to use Pterodactyl with consolex1 to manage your apps, Discord bots and web services with ease.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-pterodactyl", "kind": "page" },
    { "path": "/en/python-hosting", "title": "Free Python Hosting in France | consolex1", "description": "Host your Python applications, scripts and services in France with consolex1 and Pterodactyl.", "locale": "en", "priority": 0.7, "changeFrequency": "weekly", "alternate": "/hebergement-python", "kind": "page" },
    { "path": "/en/terms", "title": "Terms", "description": "consolex1 terms of use describing rights, obligations, and service commitments.", "locale": "en", "priority": 0.3, "changeFrequency": "monthly", "alternate": "/cgu", "kind": "page" },
];

// Priorités / fréquences des pages générées depuis les données (hébergement et guides)
const DEFAULTS: Record<'hosting' | 'guide', { priority: number; changeFrequency: SitePage['changeFrequency'] }> = {
    hosting: { priority: 0.8, changeFrequency: 'weekly' },
    guide: { priority: 0.7, changeFrequency: 'monthly' },
};

const prefix = (locale: 'fr' | 'en') => (locale === 'en' ? '/en' : '');

export function getSitePages(): SitePage[] {
    const pages: SitePage[] = STATIC_PAGES.map((p) => ({ ...p, kind: 'page' as const }));

    for (const locale of ['fr', 'en'] as const) {
        const other = locale === 'fr' ? 'en' : 'fr';

        const hosting = getHostingPages(locale);
        const hostingOther = getHostingPages(other);
        hosting.forEach((page, i) =>
            pages.push({
                path: `${prefix(locale)}/${page.slug}`,
                title: page.title,
                description: page.description,
                locale,
                ...DEFAULTS.hosting,
                alternate: hostingOther[i] ? `${prefix(other)}/${hostingOther[i].slug}` : null,
                kind: 'hosting',
            }),
        );

        const guides = getGuides(locale);
        const guidesOther = getGuides(other);
        guides.forEach((guide, i) =>
            pages.push({
                path: `${prefix(locale)}/guides/${guide.slug}`,
                title: guide.title,
                description: guide.description,
                locale,
                ...DEFAULTS.guide,
                alternate: guidesOther[i] ? `${prefix(other)}/guides/${guidesOther[i].slug}` : null,
                kind: 'guide',
            }),
        );
    }

    return pages;
}

export function findSitePage(path: string): SitePage | undefined {
    const clean = path.length > 1 ? path.replace(/\/+$/, '') : path;
    return getSitePages().find((p) => p.path === clean);
}