import type { Locale } from '@/lib/hosting-pages';

export type Guide = {
  slug: string;
  title: string;
  description: string;
  lead: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

const guides: Record<Locale, Guide[]> = {
  en: [
    {
      slug: 'host-discord-bot-for-free',
      title: 'How to Host a Discord Bot for Free',
      description: 'A practical guide to preparing and running a small Discord bot on free hosting, from environment variables to testing.',
      lead: 'A Discord bot needs a running Node.js or Python process, its application token and enough memory for its dependencies. You can test a small bot on consolex1’s free plan, which includes 256 MB RAM and 512 MB storage.',
      sections: [
        { heading: '1. Create and test the bot locally', body: 'Create an application and bot in the Discord Developer Portal, invite it to a test server with only the permissions it needs, and confirm that it starts on your own machine. Do not share or commit the bot token.' },
        { heading: '2. Prepare the project files', body: 'Include the source code and dependency manifest (such as package.json or requirements.txt). Ensure the application reads its token from an environment variable instead of a hard-coded value.' },
        { heading: '3. Create a hosting instance', body: 'Use the consolex1 Discord onboarding flow to request an instance, select the correct runtime and open it in the Pterodactyl panel. The free plan is limited to 256 MB RAM and 512 MB storage, so keep dependencies and logs small.' },
        { heading: '4. Upload, configure and start', body: 'Upload files using SFTP or the panel file manager, set the secret token in the instance environment, install dependencies and configure the correct startup command. Check the live console for startup errors.' },
        { heading: '5. Verify and maintain the bot', body: 'Confirm the bot is online and responds in your test server. Free hosting does not include automated backups, so keep a separate copy of source code and any important data.' },
      ],
      faqs: [
        { question: 'Can I host a Discord bot for free?', answer: 'Yes. The consolex1 free plan can run a small bot if it fits within the published allocation of 256 MB RAM and 512 MB storage.' },
        { question: 'Where should I store the bot token?', answer: 'Store it as a private environment variable in the hosting panel. Never commit it to a public repository or include it in screenshots or logs.' },
        { question: 'Will the free plan work for every bot?', answer: 'No. Large dependency sets, high traffic or memory-heavy features may exceed the free resources. Test the bot and check its memory usage before relying on it.' },
      ],
    },
    {
      slug: 'host-nodejs-app-for-free',
      title: 'How to Host a Node.js App for Free',
      description: 'Deploy a small Node.js app on free hosting with a package manifest, startup command, environment variables and deployment checks.',
      lead: 'To host a Node.js app, upload its source and package.json, install dependencies, set a startup command and configure required environment variables. consolex1’s free tier provides 256 MB RAM and 512 MB storage for lightweight projects.',
      sections: [
        { heading: '1. Prepare a production start command', body: 'Add a reliable start script to package.json (for example, node server.js) and confirm it works locally. Avoid development-only commands such as hot reloaders for a long-running service.' },
        { heading: '2. Configure the application to listen correctly', body: 'Read the port from process.env.PORT where supported by the hosting environment, and bind the web server to the expected interface. Keep secrets and configuration outside committed source files.' },
        { heading: '3. Upload and install dependencies', body: 'Upload the project files with SFTP or the Pterodactyl file manager. Use the panel’s configured Node.js runtime and install dependencies from the lockfile when available.' },
        { heading: '4. Start and inspect logs', body: 'Set the instance startup command to your production script, provide environment variables in the panel and start the process. Use the live console to diagnose missing modules, invalid configuration or port binding errors.' },
        { heading: '5. Test resource use', body: 'Open the app from its assigned address and exercise its main routes. The free plan has 256 MB RAM and 512 MB storage; optimize dependencies and review paid plans if your app outgrows those limits.' },
      ],
      faqs: [
        { question: 'Can I deploy a Node.js app for free?', answer: 'Yes, small projects can use consolex1’s free tier, subject to its 256 MB RAM and 512 MB storage limits.' },
        { question: 'What command starts my Node.js app?', answer: 'Use the production start script defined for your project, commonly npm start. Confirm the script and entry point in package.json before deployment.' },
        { question: 'Can I store API keys in my source code?', answer: 'No. Configure secrets as environment variables in the hosting panel and keep them out of version control.' },
      ],
    },
    {
      slug: 'host-python-bot-for-free',
      title: 'How to Host a Python Bot for Free',
      description: 'Prepare and deploy a small Python bot on free hosting using requirements.txt, environment variables and a clear startup command.',
      lead: 'A Python bot can run on free hosting when its dependencies and memory use fit the plan. consolex1’s free allocation is 256 MB RAM and 512 MB storage, with no database or automated backups included.',
      sections: [
        { heading: '1. Verify the bot locally', body: 'Run the bot with the same Python version and dependencies you plan to deploy. Confirm it handles disconnects and reports startup errors clearly.' },
        { heading: '2. Record dependencies and startup file', body: 'Add a requirements.txt file and identify the bot’s entry point, such as bot.py. Avoid including virtual environments or cache folders in the upload.' },
        { heading: '3. Keep secrets out of the code', body: 'Read the Discord token and other credentials from environment variables. Store them in the private instance settings and never commit them to a repository.' },
        { heading: '4. Upload and launch', body: 'Create an instance through the consolex1 Discord onboarding flow, choose the Python runtime, upload project files and install dependencies. Set a startup command such as python bot.py and inspect the panel console.' },
        { heading: '5. Check limits and persistence', body: 'Verify the bot comes online and monitor memory use. Free hosting has limited resources and no automated backups, so keep source code and important state backed up separately.' },
      ],
      faqs: [
        { question: 'Can a Python bot run on free hosting?', answer: 'A lightweight bot can run on the consolex1 free plan if it fits within 256 MB RAM and 512 MB storage.' },
        { question: 'How do I install Python dependencies?', answer: 'List them in requirements.txt and use the Python instance’s configured startup/install process to install them before running the bot.' },
        { question: 'Does free hosting include database backups?', answer: 'No. The free plan does not include databases or automated backups. Keep external copies of code and important data.' },
      ],
    },
    {
      slug: 'deploy-discordjs-bot',
      title: 'How to Deploy a discord.js Bot',
      description: 'Step-by-step deployment checklist for a discord.js bot: intents, package scripts, secure tokens and production logs.',
      lead: 'A discord.js bot needs a supported Node.js runtime, installed project dependencies, a secure bot token and a persistent process. Prepare and test it locally before uploading it to a hosting panel.',
      sections: [
        { heading: '1. Check intents and permissions', body: 'Enable only the privileged gateway intents your bot actually uses in the Discord Developer Portal. Give the bot the minimum server permissions it needs.' },
        { heading: '2. Prepare package.json', body: 'Declare discord.js as a dependency, commit a lockfile and define a production start script such as node index.js. Test that script locally.' },
        { heading: '3. Protect the token', body: 'Read process.env.DISCORD_TOKEN in your code and set the token privately in the panel. If a token has been exposed, reset it in the Developer Portal immediately.' },
        { heading: '4. Deploy and start', body: 'Create a Node.js instance, upload source and manifest files, install dependencies and set the startup command. Start the service and check the live console for login or gateway errors.' },
        { heading: '5. Validate bot behavior', body: 'Confirm the bot appears online, responds to a test command and reconnects after a restart. Review memory use; the free plan provides 256 MB RAM and may not fit every bot.' },
      ],
      faqs: [
        { question: 'Which files do I upload for a discord.js bot?', answer: 'Upload the source code, package.json and preferably the package lockfile. Do not upload node_modules unless your deployment instructions specifically require it.' },
        { question: 'Where should DISCORD_TOKEN be configured?', answer: 'Set it as a private environment variable in the instance panel; never commit the token to source control.' },
        { question: 'Why does my bot fail to log in?', answer: 'Check that the token is current and correctly configured, the required intents are enabled, dependencies installed successfully and the runtime version is supported.' },
      ],
    },
    {
      slug: 'deploy-discord-py-bot',
      title: 'How to Deploy a discord.py Bot',
      description: 'Deploy a discord.py bot with requirements.txt, a secure Discord token, the correct Python entry point and panel logs.',
      lead: 'A discord.py bot needs a supported Python runtime, installed discord.py dependency, a secure token and a process that remains running. Validate the bot locally, then deploy its files and configuration to the hosting panel.',
      sections: [
        { heading: '1. Configure the Discord application', body: 'Create the bot in the Discord Developer Portal, enable only the gateway intents needed by your code and invite it to a test server with minimal permissions.' },
        { heading: '2. Prepare the Python project', body: 'Pin or specify dependencies in requirements.txt and confirm the correct entry-point file, for example bot.py. Test the startup command locally before deployment.' },
        { heading: '3. Store the token securely', body: 'Read the token from an environment variable such as DISCORD_TOKEN. Configure it privately in the panel, not in the Python file or a public repository.' },
        { heading: '4. Deploy and inspect startup', body: 'Choose a Python instance, upload the project files and install requirements. Set the startup command to python bot.py and inspect the console for import, token or intent errors.' },
        { heading: '5. Test and monitor', body: 'Verify the bot connects and handles a test interaction. Monitor memory use and keep separate backups of code and important data; the free plan has limited resources and no automated backups.' },
      ],
      faqs: [
        { question: 'What should requirements.txt contain?', answer: 'List the Python packages required by the bot, including the discord.py package version compatible with your code.' },
        { question: 'How do I set the bot token?', answer: 'Read it from an environment variable in your code and set that variable privately in the hosting panel.' },
        { question: 'What if the bot connects but slash commands are missing?', answer: 'Check command registration, application scopes and bot permissions in Discord, then review the bot’s startup logs for synchronization errors.' },
      ],
    },
  ],
  fr: [
    {
      slug: 'heberger-bot-discord-gratuitement',
      title: 'Comment héberger gratuitement un bot Discord',
      description: 'Guide pratique pour préparer et faire tourner un petit bot Discord gratuitement, du token aux tests de déploiement.',
      lead: 'Un bot Discord a besoin d’un processus Node.js ou Python actif, de son token et de suffisamment de mémoire pour ses dépendances. Le plan gratuit consolex1 peut accueillir un petit bot de test avec 256 Mo de RAM et 512 Mo de stockage.',
      sections: [
        { heading: '1. Créer et tester le bot en local', body: 'Créez une application et un bot dans le Discord Developer Portal, invitez-le sur un serveur de test avec les permissions nécessaires et vérifiez son démarrage sur votre machine. Ne partagez pas le token et ne l’ajoutez pas au dépôt.' },
        { heading: '2. Préparer les fichiers du projet', body: 'Incluez le code source et le manifeste des dépendances (package.json ou requirements.txt). L’application doit lire le token depuis une variable d’environnement, jamais depuis une valeur inscrite en dur.' },
        { heading: '3. Créer une instance d’hébergement', body: 'Utilisez le parcours Discord de consolex1 pour demander une instance, choisissez le bon runtime puis ouvrez-la dans le panel Pterodactyl. Le plan gratuit est limité à 256 Mo de RAM et 512 Mo de stockage.' },
        { heading: '4. Envoyer les fichiers et démarrer', body: 'Transférez les fichiers avec SFTP ou le gestionnaire du panel, configurez le token comme variable privée, installez les dépendances et définissez la commande de démarrage. Consultez la console en direct en cas d’erreur.' },
        { heading: '5. Vérifier et maintenir le bot', body: 'Vérifiez que le bot apparaît en ligne et répond sur le serveur de test. L’hébergement gratuit n’inclut pas de sauvegardes automatiques : conservez une copie séparée du code et des données importantes.' },
      ],
      faqs: [
        { question: 'Peut-on héberger gratuitement un bot Discord ?', answer: 'Oui. Le plan gratuit consolex1 peut faire tourner un petit bot dans la limite publiée de 256 Mo de RAM et 512 Mo de stockage.' },
        { question: 'Où stocker le token du bot ?', answer: 'Configurez-le comme variable d’environnement privée dans le panel. Ne le commitez jamais dans un dépôt public et ne l’affichez pas dans les logs ou captures.' },
        { question: 'Le plan gratuit convient-il à tous les bots ?', answer: 'Non. De nombreuses dépendances, un trafic important ou des fonctions gourmandes en mémoire peuvent dépasser les ressources gratuites. Mesurez l’usage avant de vous y fier.' },
      ],
    },
    {
      slug: 'heberger-application-nodejs-gratuitement',
      title: 'Comment héberger gratuitement une application Node.js',
      description: 'Déployez une petite application Node.js gratuitement avec un manifeste, une commande de démarrage et des variables d’environnement.',
      lead: 'Pour héberger une application Node.js, envoyez son code et package.json, installez les dépendances, définissez une commande de démarrage et configurez les variables d’environnement. L’offre gratuite consolex1 comprend 256 Mo de RAM et 512 Mo de stockage.',
      sections: [
        { heading: '1. Préparer une commande de production', body: 'Ajoutez un script de démarrage fiable dans package.json (par exemple node server.js) et vérifiez-le en local. Évitez les commandes de développement avec rechargement automatique pour un service permanent.' },
        { heading: '2. Configurer l’écoute de l’application', body: 'Lorsque l’environnement le prévoit, lisez le port depuis process.env.PORT et liez le serveur à l’interface attendue. Gardez les secrets et la configuration hors du code commité.' },
        { heading: '3. Envoyer le code et installer les dépendances', body: 'Transférez le projet avec SFTP ou le gestionnaire de fichiers Pterodactyl. Utilisez le runtime Node.js configuré et le fichier de verrouillage s’il existe.' },
        { heading: '4. Démarrer et lire les journaux', body: 'Définissez le script de production, ajoutez les variables d’environnement dans le panel et démarrez le processus. Consultez la console pour repérer un module manquant, une mauvaise configuration ou un problème de port.' },
        { heading: '5. Tester les ressources', body: 'Ouvrez l’application à son adresse et testez ses principales routes. Le plan gratuit comprend 256 Mo de RAM et 512 Mo de stockage ; optimisez les dépendances ou comparez les offres si le projet dépasse ces limites.' },
      ],
      faqs: [
        { question: 'Puis-je déployer gratuitement une application Node.js ?', answer: 'Oui, les petits projets peuvent utiliser l’offre gratuite consolex1, dans la limite de 256 Mo de RAM et 512 Mo de stockage.' },
        { question: 'Quelle commande démarre mon application Node.js ?', answer: 'Utilisez le script de production du projet, souvent npm start. Vérifiez dans package.json le script et le fichier d’entrée avant le déploiement.' },
        { question: 'Puis-je enregistrer des clés API dans mon code ?', answer: 'Non. Configurez les secrets comme variables d’environnement dans le panel et ne les ajoutez pas au contrôle de versions.' },
      ],
    },
    {
      slug: 'heberger-bot-python-gratuitement',
      title: 'Comment héberger gratuitement un bot Python',
      description: 'Préparez et déployez un petit bot Python gratuitement avec requirements.txt, un token protégé et une commande de lancement.',
      lead: 'Un bot Python peut fonctionner sur un hébergement gratuit si ses dépendances et sa consommation mémoire restent dans les limites du plan. L’offre consolex1 comprend 256 Mo de RAM et 512 Mo de stockage, sans base de données ni sauvegarde automatique.',
      sections: [
        { heading: '1. Vérifier le bot en local', body: 'Lancez le bot avec la version de Python et les dépendances prévues pour le déploiement. Vérifiez la reconnexion et la lisibilité des erreurs de démarrage.' },
        { heading: '2. Déclarer les dépendances et le fichier de lancement', body: 'Ajoutez un fichier requirements.txt et repérez le point d’entrée, par exemple bot.py. N’envoyez pas les environnements virtuels ni les dossiers de cache.' },
        { heading: '3. Protéger les secrets', body: 'Lisez le token Discord et les autres identifiants dans des variables d’environnement. Stockez-les dans les paramètres privés de l’instance, jamais dans le dépôt.' },
        { heading: '4. Envoyer les fichiers et lancer le bot', body: 'Créez une instance depuis le parcours Discord de consolex1, choisissez Python et téléversez le projet. Installez les dépendances, définissez python bot.py comme commande et contrôlez la console.' },
        { heading: '5. Contrôler les limites et les sauvegardes', body: 'Vérifiez que le bot est en ligne et surveillez la mémoire. L’offre gratuite a des ressources limitées et aucune sauvegarde automatique ; conservez séparément le code et les données.' },
      ],
      faqs: [
        { question: 'Un bot Python peut-il tourner sur une offre gratuite ?', answer: 'Un bot léger peut utiliser le plan gratuit consolex1 s’il respecte 256 Mo de RAM et 512 Mo de stockage.' },
        { question: 'Comment installer les dépendances Python ?', answer: 'Déclarez-les dans requirements.txt puis utilisez le processus d’installation configuré pour l’instance Python avant le lancement.' },
        { question: 'Les bases de données sont-elles sauvegardées gratuitement ?', answer: 'Non. Le plan gratuit ne comprend ni base de données ni sauvegarde automatique. Gardez ailleurs une copie du code et des données importantes.' },
      ],
    },
    {
      slug: 'deployer-bot-discordjs',
      title: 'Comment déployer un bot discord.js',
      description: 'Étapes de déploiement d’un bot discord.js : intents, scripts npm, token sécurisé et vérification des journaux.',
      lead: 'Un bot discord.js a besoin d’un runtime Node.js compatible, de ses dépendances installées, d’un token protégé et d’un processus actif. Préparez-le et testez-le en local avant de l’envoyer sur un panel d’hébergement.',
      sections: [
        { heading: '1. Vérifier les intents et permissions', body: 'Activez dans le Discord Developer Portal uniquement les intents privilégiés utilisés par le bot. Accordez-lui les permissions minimales nécessaires sur le serveur.' },
        { heading: '2. Préparer package.json', body: 'Déclarez discord.js comme dépendance, conservez un fichier de verrouillage et ajoutez un script de production tel que node index.js. Testez ce script en local.' },
        { heading: '3. Protéger le token', body: 'Lisez process.env.DISCORD_TOKEN dans le code et configurez le token de façon privée dans le panel. Si le token a été exposé, régénérez-le immédiatement dans le Developer Portal.' },
        { heading: '4. Déployer et démarrer', body: 'Créez une instance Node.js, téléversez le code et le manifeste, installez les dépendances et définissez la commande de démarrage. Consultez la console en cas d’erreur de connexion ou de gateway.' },
        { heading: '5. Valider le comportement', body: 'Vérifiez que le bot apparaît en ligne, répond à une commande de test et se reconnecte après un redémarrage. Surveillez la mémoire : les 256 Mo gratuits peuvent ne pas suffire à tous les bots.' },
      ],
      faqs: [
        { question: 'Quels fichiers envoyer pour un bot discord.js ?', answer: 'Envoyez le code source, package.json et de préférence le fichier de verrouillage. N’envoyez pas node_modules sauf si vos instructions de déploiement l’exigent.' },
        { question: 'Où configurer DISCORD_TOKEN ?', answer: 'Ajoutez-le comme variable d’environnement privée dans le panel et ne le commitez jamais dans le dépôt.' },
        { question: 'Pourquoi le bot ne parvient-il pas à se connecter ?', answer: 'Vérifiez que le token est valide, que les intents requis sont activés, que les dépendances sont installées et que la version du runtime est prise en charge.' },
      ],
    },
    {
      slug: 'deployer-bot-discord-py',
      title: 'Comment déployer un bot discord.py',
      description: 'Déployez un bot discord.py avec requirements.txt, un token protégé, un point d’entrée Python et les journaux du panel.',
      lead: 'Un bot discord.py a besoin d’un runtime Python compatible, de la dépendance discord.py, d’un token sécurisé et d’un processus actif. Validez le bot en local, puis déployez ses fichiers et sa configuration sur le panel.',
      sections: [
        { heading: '1. Configurer l’application Discord', body: 'Créez le bot dans le Discord Developer Portal, activez les seuls intents utilisés par le code et invitez-le sur un serveur de test avec des permissions minimales.' },
        { heading: '2. Préparer le projet Python', body: 'Déclarez les dépendances dans requirements.txt et confirmez le fichier d’entrée, par exemple bot.py. Testez la commande de démarrage en local.' },
        { heading: '3. Stocker le token de façon sûre', body: 'Lisez le token depuis une variable d’environnement comme DISCORD_TOKEN. Configurez-la dans le panel, pas dans le fichier Python ou un dépôt public.' },
        { heading: '4. Déployer et inspecter le démarrage', body: 'Choisissez une instance Python, téléversez les fichiers et installez requirements.txt. Définissez python bot.py comme commande et consultez la console en cas d’erreur d’import, de token ou d’intent.' },
        { heading: '5. Tester et surveiller', body: 'Vérifiez que le bot se connecte et répond à une interaction de test. Surveillez la mémoire et sauvegardez séparément le code et les données importantes.' },
      ],
      faqs: [
        { question: 'Que faut-il mettre dans requirements.txt ?', answer: 'Listez les paquets Python nécessaires, notamment une version de discord.py compatible avec le code du bot.' },
        { question: 'Comment configurer le token du bot ?', answer: 'Lisez-le depuis une variable d’environnement dans le code et définissez cette variable de façon privée dans le panel.' },
        { question: 'Pourquoi les commandes slash ne s’affichent-elles pas ?', answer: 'Vérifiez l’enregistrement des commandes, les scopes de l’application et les permissions du bot, puis inspectez les journaux de synchronisation.' },
      ],
    },
  ],
};

export function getGuides(locale: Locale) {
  return guides[locale];
}

export function getGuide(locale: Locale, slug: string) {
  return guides[locale].find((guide) => guide.slug === slug);
}

export function getGuideTranslation(locale: Locale, slug: string) {
  const otherLocale: Locale = locale === 'en' ? 'fr' : 'en';
  const index = guides[locale].findIndex((guide) => guide.slug === slug);
  return index < 0 ? undefined : guides[otherLocale][index];
}
