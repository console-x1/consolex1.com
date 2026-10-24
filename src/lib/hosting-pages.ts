export type Locale = 'en' | 'fr';

export type HostingFaq = {
  question: string;
  answer: string;
};

export type HostingPageContent = {
  slug: string;
  title: string;
  description: string;
  badge: string;
  heading: string;
  shortAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: HostingFaq[];
};

const hostingPages: Record<Locale, HostingPageContent[]> = {
  en: [
    {
      slug: 'free-hosting',
      title: 'Free Hosting in France for Apps and Bots',
      description:
        'Start with free hosting in France for Node.js apps, Python services and Discord bots. No payment details are required for the free plan.',
      badge: 'Free hosting • France',
      heading: 'Free hosting for apps, bots and websites',
      shortAnswer:
        'consolex1 is a French free hosting provider for small Node.js apps, Python services and Discord bots. The free plan costs €0 and does not require a credit card; servers are located in Paris at Equinix PA5.',
      sections: [
        {
          heading: 'What can you host for free?',
          body:
            'Use the free plan to learn, test a Discord bot, publish a small Node.js or Python service, or run a prototype. The plan includes 256 MB RAM and 512 MB storage, so check your project requirements before deploying.',
        },
        {
          heading: 'How the free plan works',
          body:
            'Create and manage an instance through the consolex1 Discord onboarding flow and Pterodactyl panel. The free tier has limited resources, no included database and no automated backups. Paid plans are displayed for future availability. They are currently not available for purchase, so do not rely on an upgrade for a critical service.',
        },
        {
          heading: 'French infrastructure',
          body:
            'The hosting infrastructure is in Paris, France, at Equinix PA5. This location can be relevant for projects serving users in France and elsewhere in Europe; actual latency depends on the user’s network.',
        },
      ],
      faqs: [
        { question: 'Is consolex1 free hosting really free?', answer: 'The Free plan is listed at €0 per month. It provides limited resources for testing and small projects. Paid plans are displayed for future availability. They are currently not available for purchase.' },
        { question: 'Do I need a credit card to start?', answer: 'No credit card or payment details are required for the free plan.' },
        { question: 'Which runtimes can I use?', answer: 'The service supports Node.js, Python, Java, Go and Rust, along with nginx. Choose the runtime that matches your application.' },
        { question: 'Is the free plan suitable for a production app?', answer: 'It is intended for learning, prototypes and small projects. With 256 MB RAM, limited storage, no database and no automated backups, it may not meet production requirements.' },
        { question: 'Where are the servers located?', answer: 'The consolex1 infrastructure is located in Paris, France, in the Equinix PA5 datacenter.' },
        { question: 'How do I deploy a project?', answer: 'Start through the consolex1 Discord onboarding flow, then upload and manage files using the Pterodactyl panel and SFTP.' },
      ],
    },
    {
      slug: 'free-hosting-france',
      title: 'Free Hosting in France | Paris Server',
      description:
        'Compare free hosting in France for small apps and bots. consolex1 has a €0 plan, no credit-card requirement and infrastructure in Paris at Equinix PA5.',
      badge: 'Free hosting • Paris, France',
      heading: 'Free hosting in France',
      shortAnswer:
        'consolex1 is a French free hosting provider with servers in Paris at Equinix PA5. Its €0 plan is available without a credit card for small Node.js apps, Python services and Discord bots.',
      sections: [
        {
          heading: 'A Paris location for European projects',
          body:
            'The infrastructure is hosted in Paris, France, in the Equinix PA5 datacenter. A French location may help reduce network distance for some French and European users, although latency varies by network and destination.',
        },
        {
          heading: 'Know the free-plan limits',
          body:
            'The free offer includes 256 MB RAM and 512 MB storage. Databases and automated backups are not included in the free plan. These published limits make it most suitable for learning, testing and lightweight projects.',
        },
        {
          heading: 'Choose a project-specific setup',
          body:
            'Run a small Discord bot, Node.js application or Python service using the Pterodactyl panel. Review each runtime guide and check memory, storage and persistence needs before choosing a plan.',
        },
      ],
      faqs: [
        { question: 'Is this hosting actually located in France?', answer: 'Yes. consolex1 states that its infrastructure is in Paris, France, at Equinix PA5.' },
        { question: 'Can I use the French free plan without a credit card?', answer: 'Yes. The €0 free plan does not require credit-card details.' },
        { question: 'What resources does the free plan include?', answer: 'The published free plan lists 256 MB RAM and 512 MB storage. A database and automated backups are not included.' },
        { question: 'What kinds of projects can run on it?', answer: 'Small Node.js applications, Python services and Discord bots are suitable starting points, provided they fit within the free plan’s resource limits.' },
        { question: 'Does a Paris server guarantee low latency?', answer: 'No. A Paris location can reduce network distance for some users, but latency depends on the user’s ISP, route and destination.' },
        { question: 'Can I upgrade later?', answer: 'Paid plans are displayed on the pricing page for future availability. They are currently not available for purchase, so do not rely on an upgrade if your project outgrows the free allocation.' },
      ],
    },
    {
      slug: 'free-hosting-without-credit-card',
      title: 'Free Hosting Without a Credit Card',
      description:
        'Start a free Node.js app, Python service or Discord bot on consolex1 without entering credit-card details. Servers are hosted in Paris, France.',
      badge: 'Free hosting • No credit card',
      heading: 'Free hosting without a credit card',
      shortAnswer:
        'You can start the consolex1 Free plan without entering credit-card details. It costs €0 and is intended for small apps and bots running on infrastructure in Paris, France.',
      sections: [
        {
          heading: 'No payment details for the free tier',
          body:
            'The consolex1 free plan does not require a credit card. Set up an instance through the Discord onboarding flow and manage it in Pterodactyl. Paid plans are displayed for future availability. They are currently not available for purchase.',
        },
        {
          heading: 'Check resource limits before deployment',
          body:
            'The free plan includes 256 MB RAM and 512 MB storage, with no database or automated backups included. Keep dependencies lightweight and test your application within these limits.',
        },
        {
          heading: 'Supported project types',
          body:
            'Node.js applications, Python services and Discord bots are common use cases. The runtime guides explain the basics of preparing an app before uploading it to the panel.',
        },
      ],
      faqs: [
        { question: 'Can I sign up without a credit card?', answer: 'Yes. Credit-card details are not required for the consolex1 Free plan.' },
        { question: 'Will I be charged automatically?', answer: 'The free plan is priced at €0 per month. Paid plans are displayed for future availability and are currently not available for purchase.' },
        { question: 'What are the free-plan resource limits?', answer: 'The published allocation is 256 MB RAM and 512 MB storage. Databases and automated backups are not included.' },
        { question: 'Can I host a Discord bot without a card?', answer: 'Yes, a small Discord bot can use the free plan without payment details if it fits the available resources.' },
        { question: 'Where is the service hosted?', answer: 'The consolex1 infrastructure is in Paris, France, at Equinix PA5.' },
        { question: 'What if my app needs more resources?', answer: 'The pricing page lists plans intended for future availability. They are currently not available for purchase, so make sure your project fits the free allocation before deploying.' },
      ],
    },
  ],
  fr: [
    {
      slug: 'hebergement-gratuit',
      title: 'Hébergement gratuit en France pour applications et bots',
      description:
        'Démarrez gratuitement un bot Discord, une application Node.js ou un service Python en France, sans carte bancaire, avec consolex1.',
      badge: 'Hébergement gratuit • France',
      heading: 'Hébergement gratuit pour apps, bots et sites',
      shortAnswer:
        'consolex1 est un hébergeur français gratuit pour petits projets Node.js, services Python et bots Discord. L’offre gratuite coûte 0 € et ne demande pas de carte bancaire ; les serveurs sont à Paris, chez Equinix PA5.',
      sections: [
        {
          heading: 'Que peut-on héberger gratuitement ?',
          body:
            'Utilisez le plan gratuit pour apprendre, tester un bot Discord, publier un petit service Node.js ou Python ou lancer un prototype. Le plan comprend 256 Mo de RAM et 512 Mo de stockage ; vérifiez les besoins de votre projet avant son déploiement.',
        },
        {
          heading: 'Fonctionnement et limites du plan gratuit',
          body:
            'La création et la gestion d’instance passent par le parcours Discord de consolex1 et le panel Pterodactyl. L’offre gratuite dispose de ressources limitées, sans base de données ni sauvegardes automatiques. Les offres payantes sont affichées en vue de leur disponibilité future, mais ne sont pas disponibles à l’achat ; ne comptez donc pas sur une mise à niveau pour un service critique.',
        },
        {
          heading: 'Une infrastructure en France',
          body:
            'L’infrastructure est située à Paris, en France, dans le datacenter Equinix PA5. Cette localisation peut convenir aux projets destinés à la France et à l’Europe ; la latence réelle dépend aussi du réseau de chaque utilisateur.',
        },
      ],
      faqs: [
        { question: 'L’hébergement gratuit consolex1 est-il vraiment gratuit ?', answer: 'Le plan Free est affiché à 0 € par mois. Ses ressources sont limitées et conviennent aux tests et petits projets. Les offres payantes sont affichées en vue de leur disponibilité future, mais ne sont pas encore disponibles à l’achat.' },
        { question: 'Faut-il une carte bancaire pour commencer ?', answer: 'Non, aucune carte bancaire ni donnée de paiement n’est demandée pour l’offre gratuite.' },
        { question: 'Quels langages et runtimes sont pris en charge ?', answer: 'Le service prend en charge Node.js, Python, Java, Go, Rust et nginx. Choisissez le runtime compatible avec votre application.' },
        { question: 'Le plan gratuit convient-il à la production ?', answer: 'Il vise surtout l’apprentissage, les prototypes et les petits projets. Avec 256 Mo de RAM, un stockage limité, aucune base de données et aucune sauvegarde automatique, il peut ne pas répondre aux besoins de production.' },
        { question: 'Où se trouvent les serveurs ?', answer: 'L’infrastructure consolex1 se trouve à Paris, en France, dans le datacenter Equinix PA5.' },
        { question: 'Comment déployer un projet ?', answer: 'Commencez depuis le parcours Discord de consolex1, puis téléversez et gérez vos fichiers depuis le panel Pterodactyl et SFTP.' },
      ],
    },
    {
      slug: 'hebergement-gratuit-france',
      title: 'Hébergement gratuit en France | Serveur à Paris',
      description:
        'Découvrez un hébergement gratuit en France pour petits projets. consolex1 propose une offre à 0 €, sans carte bancaire, sur une infrastructure à Paris chez Equinix PA5.',
      badge: 'Hébergement gratuit • Paris, France',
      heading: 'Hébergement gratuit en France',
      shortAnswer:
        'consolex1 est un hébergeur français gratuit dont les serveurs sont à Paris, chez Equinix PA5. Son offre à 0 €, accessible sans carte bancaire, accueille de petits projets Node.js, Python et des bots Discord.',
      sections: [
        {
          heading: 'Une localisation parisienne pour vos projets européens',
          body:
            'L’infrastructure est hébergée à Paris, en France, dans le datacenter Equinix PA5. Une localisation française peut réduire la distance réseau pour certains utilisateurs en France et en Europe, mais la latence varie selon les réseaux et les destinations.',
        },
        {
          heading: 'Connaître les limites de l’offre gratuite',
          body:
            'L’offre gratuite comprend 256 Mo de RAM et 512 Mo de stockage. Elle n’inclut ni base de données ni sauvegardes automatiques. Ces limites la destinent surtout à l’apprentissage, aux tests et aux projets légers.',
        },
        {
          heading: 'Choisir une configuration adaptée au projet',
          body:
            'Lancez un petit bot Discord, une application Node.js ou un service Python avec le panel Pterodactyl. Consultez les guides et vérifiez les besoins mémoire, stockage et persistance avant de choisir une offre.',
        },
      ],
      faqs: [
        { question: 'Cet hébergement est-il réellement situé en France ?', answer: 'Oui. consolex1 indique que son infrastructure se situe à Paris, en France, chez Equinix PA5.' },
        { question: 'L’offre française gratuite est-elle accessible sans carte bancaire ?', answer: 'Oui. Le plan gratuit à 0 € ne demande pas de coordonnées de carte bancaire.' },
        { question: 'Quelles ressources sont comprises dans le plan gratuit ?', answer: 'Le plan gratuit affiche 256 Mo de RAM et 512 Mo de stockage. Il n’inclut ni base de données ni sauvegardes automatiques.' },
        { question: 'Quels projets peut-on y héberger ?', answer: 'De petites applications Node.js, services Python et bots Discord sont de bons projets de départ s’ils respectent les limites de ressources.' },
        { question: 'Un serveur à Paris garantit-il une faible latence ?', answer: 'Non. Une localisation à Paris peut réduire la distance réseau pour certains utilisateurs, mais la latence dépend aussi du fournisseur d’accès et des routes réseau.' },
        { question: 'Puis-je changer d’offre plus tard ?', answer: 'Les offres payantes sont affichées en vue de leur disponibilité future, mais ne sont pas encore disponibles à l’achat. Ne comptez pas sur une mise à niveau si votre projet dépasse les ressources gratuites.' },
      ],
    },
    {
      slug: 'hebergement-gratuit-sans-carte-bancaire',
      title: 'Hébergement gratuit sans carte bancaire',
      description:
        'Hébergez gratuitement une application Node.js, un service Python ou un bot Discord sans saisir de carte bancaire avec consolex1, en France.',
      badge: 'Hébergement gratuit • Sans carte bancaire',
      heading: 'Hébergement gratuit sans carte bancaire',
      shortAnswer:
        'Vous pouvez démarrer sur le plan gratuit consolex1 sans saisir de coordonnées de carte bancaire. Il coûte 0 € et convient aux petits projets hébergés à Paris, en France.',
      sections: [
        {
          heading: 'Aucune donnée de paiement pour l’offre gratuite',
          body:
            'Le plan gratuit consolex1 ne demande pas de carte bancaire. Créez une instance via le parcours Discord et gérez-la dans Pterodactyl. Les offres payantes sont affichées en vue de leur disponibilité future, mais ne sont pas encore disponibles à l’achat.',
        },
        {
          heading: 'Vérifier les limites avant le déploiement',
          body:
            'L’offre gratuite comprend 256 Mo de RAM et 512 Mo de stockage, sans base de données ni sauvegardes automatiques. Privilégiez des dépendances légères et testez votre application dans ces limites.',
        },
        {
          heading: 'Types de projets pris en charge',
          body:
            'Les applications Node.js, services Python et bots Discord sont des cas d’usage fréquents. Consultez les guides de déploiement pour préparer votre application avant de l’envoyer sur le panel.',
        },
      ],
      faqs: [
        { question: 'Puis-je m’inscrire sans carte bancaire ?', answer: 'Oui. Les coordonnées de carte bancaire ne sont pas demandées pour le plan gratuit consolex1.' },
        { question: 'Vais-je être automatiquement facturé ?', answer: 'Le plan gratuit est affiché à 0 € par mois. Les offres payantes sont affichées en vue de leur disponibilité future et ne sont pas encore disponibles à l’achat.' },
        { question: 'Quelles sont les limites de ressources gratuites ?', answer: 'L’allocation publiée est de 256 Mo de RAM et 512 Mo de stockage. Les bases de données et sauvegardes automatiques ne sont pas comprises.' },
        { question: 'Puis-je héberger un bot Discord sans carte ?', answer: 'Oui, un petit bot Discord peut utiliser l’offre gratuite sans donnée de paiement s’il respecte les ressources disponibles.' },
        { question: 'Où le service est-il hébergé ?', answer: 'L’infrastructure consolex1 est située à Paris, en France, chez Equinix PA5.' },
        { question: 'Que faire si mon application a besoin de plus de ressources ?', answer: 'La page des tarifs présente des offres prévues pour une disponibilité future. Elles ne sont pas encore disponibles à l’achat ; vérifiez donc que votre projet respecte les limites gratuites avant de le déployer.' },
      ],
    },
  ],
};

export function getHostingPages(locale: Locale) {
  return hostingPages[locale];
}

export function getHostingPage(locale: Locale, slug: string) {
  return hostingPages[locale].find((page) => page.slug === slug);
}

export const hostingResources = {
  en: [
    { title: 'Free hosting', href: '/en/free-hosting' },
    { title: 'Free hosting in France', href: '/en/free-hosting-france' },
    { title: 'Free hosting without a credit card', href: '/en/free-hosting-without-credit-card' },
    { title: 'Free Discord bot hosting', href: '/en/discord-bot-hosting' },
    { title: 'Free Node.js hosting', href: '/en/nodejs-hosting' },
    { title: 'Free Python hosting', href: '/en/python-hosting' },
    { title: 'Pterodactyl hosting', href: '/en/pterodactyl-hosting' },
    { title: 'Guides', href: '/en/guides' },
  ],
  fr: [
    { title: 'Hébergement gratuit', href: '/hebergement-gratuit' },
    { title: 'Hébergement gratuit en France', href: '/hebergement-gratuit-france' },
    { title: 'Hébergement sans carte bancaire', href: '/hebergement-gratuit-sans-carte-bancaire' },
    { title: 'Hébergement gratuit de bot Discord', href: '/hebergement-bot-discord' },
    { title: 'Hébergement gratuit Node.js', href: '/hebergement-nodejs' },
    { title: 'Hébergement gratuit Python', href: '/hebergement-python' },
    { title: 'Hébergement Pterodactyl', href: '/hebergement-pterodactyl' },
    { title: 'Guides', href: '/guides' },
  ],
} satisfies Record<Locale, { title: string; href: string }[]>;
