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
        { heading: '3. Create a hosting instance', body: 'Join the consolex1 Discord server, complete verification, then run /account register and /server create in the commands channel. Open the created instance in the Pterodactyl panel. The free plan is limited to 256 MB RAM and 512 MB storage, so keep dependencies and logs small.' },
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
        { heading: '3. Select Node.js Universal and upload the project', body: 'The Node.js Universal egg currently offers Node.js 14, 16, 18, 20, 22, 24 and 26. Select the egg when creating the server, then choose the version in the Startup tab and upload the project files with SFTP or the Pterodactyl file manager. Versions 14, 16 and 18 are no longer maintained upstream and are available for compatibility only.' },
        { heading: '4. Start and inspect logs', body: 'Set the instance startup command to your production script, provide environment variables in the panel and start the process. Use the live console to diagnose missing modules, invalid configuration or port binding errors.' },
        { heading: '5. Test resource use', body: 'Open the app from its assigned address and exercise its main routes. The free plan has 256 MB RAM and 512 MB storage; optimize dependencies and confirm the project fits those limits because paid plans are not currently available for purchase.' },
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
        { heading: '4. Select Python Universal and launch', body: 'Create an instance through the consolex1 Discord onboarding flow, choose the Python Universal egg and select Python 3.9, 3.10, 3.11, 3.12, 3.13 or 3.14 in the Startup tab. Set the main file (for example bot.py) and start the server. Python 3.9 is no longer maintained upstream and is provided for compatibility only.' },
        { heading: '5. Let the egg install dependencies', body: 'Python Universal creates a .venv automatically and recreates it if you change Python versions. It uses uv to install dependencies detected from requirements.txt, pyproject.toml or uv.lock. Optional settings support git pull on startup and extra pip packages.' },
        { heading: '6. Check limits and persistence', body: 'Verify the bot comes online and monitor memory use. Free hosting has limited resources and no automated backups, so keep source code and important state backed up separately.' },
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
        { heading: '4. Choose the Node.js version, deploy and start', body: 'The Node.js Universal egg currently offers versions 14, 16, 18, 20, 22, 24 and 26. Choose Node.js Universal when creating the server, select the version in the Startup tab, upload source and manifest files, install dependencies and set the startup command. Versions 14, 16 and 18 are no longer maintained upstream and are available for compatibility only. Start the service and check the live console for login or gateway errors.' },
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
        { heading: '4. Choose Python Universal and inspect startup', body: 'Python Universal supports Python 3.9 through 3.14 (3.9, 3.10, 3.11, 3.12, 3.13 and 3.14). Select the egg when creating the server, choose a version in the Startup tab, set the main file (for example bot.py) and start it. Python 3.9 is no longer maintained upstream and is provided for compatibility only. The egg creates a .venv and uses uv to install dependencies from requirements.txt, pyproject.toml or uv.lock.' },
        { heading: '5. Test and monitor', body: 'Verify the bot connects and handles a test interaction. Monitor memory use and keep separate backups of code and important data; the free plan has limited resources and no automated backups.' },
      ],
      faqs: [
        { question: 'What should requirements.txt contain?', answer: 'List the Python packages required by the bot, including the discord.py package version compatible with your code.' },
        { question: 'How do I set the bot token?', answer: 'Read it from an environment variable in your code and set that variable privately in the hosting panel.' },
        { question: 'What if the bot connects but slash commands are missing?', answer: 'Check command registration, application scopes and bot permissions in Discord, then review the bot’s startup logs for synchronization errors.' },
      ],
    },
    {
      slug: 'create-consolex1-server',
      title: 'How to Create a consolex1 Server',
      description: 'Follow the exact Discord verification, account registration and server creation steps for consolex1.',
      lead: 'Create a consolex1 hosting server in three steps: verify your Discord account, register an account with the bot, then create a server. Account and server commands must be run in the designated commands channel.',
      sections: [
        { heading: '1. Join Discord and verify your account', body: 'Join the consolex1 Discord server using the invite on the website. Open the verification channel and complete its verification process before continuing.' },
        { heading: '2. Register your account', body: 'In the commands channel, enter /account register. Follow the bot’s prompts to finish account registration.' },
        { heading: '3. Create your server', body: 'Still in the commands channel, enter /server create. Follow the bot’s on-screen prompts to choose the configuration and complete server creation.' },
        { heading: '4. Open the server panel', body: 'After creation, manage files, startup settings and the live console in the Pterodactyl panel at panel.consolex1.com. If you run into a problem, open a support ticket in the Discord ticket channel.' },
      ],
      faqs: [
        { question: 'Where do I run /account register and /server create?', answer: 'Both commands must be entered in the consolex1 Discord commands channel, not in the verification channel.' },
        { question: 'What should I do before registering?', answer: 'Join the consolex1 Discord server and complete verification in the verification channel.' },
        { question: 'Where do I manage my server after creation?', answer: 'Use the Pterodactyl panel at panel.consolex1.com. For help, open a ticket in the Discord ticket channel.' },
      ],
    },
    {
      slug: 'pterodactyl-panel-guide',
      title: 'Complete Guide to the Pterodactyl Panel',
      description: 'Learn how to use Pterodactyl to upload files, configure startup settings, read logs and manage a consolex1 server.',
      lead: 'Pterodactyl is the web panel used to manage a hosting instance. This guide covers the everyday workflow: open the right server, configure its runtime, transfer files, start it and diagnose errors without changing infrastructure settings.',
      sections: [
        { heading: '1. Open the correct server', body: 'After creating an instance through the consolex1 Discord flow, sign in to panel.consolex1.com and select that server. Confirm its name and allocation before changing settings or uploading files.' },
        { heading: '2. Review startup settings', body: 'Open the Startup tab and check the selected egg, runtime version, entry file and any required variables. Use the runtime that matches the project; avoid changing values you do not recognize.' },
        { heading: '3. Transfer project files', body: 'Use the panel file manager for small edits or SFTP for larger uploads. Include the source and dependency manifests, but do not upload local caches or virtual environments unless a project specifically needs them.' },
        { heading: '4. Configure secrets safely', body: 'Set tokens and private configuration in the panel’s environment settings when supported. Do not paste secrets into public files, screenshots, support messages or logs.' },
        { heading: '5. Start and inspect the console', body: 'Start the server and watch the live console from the beginning of the startup sequence. Resolve the first actionable error, such as a missing file or dependency, before responding to later errors that may be consequences.' },
        { heading: '6. Protect files and data', body: 'The Free plan does not include automated backups. Keep an independent copy of source code and important data, and verify that a restore works before relying on a backup.' },
      ],
      faqs: [
        { question: 'Can I manage my server from the panel?', answer: 'Yes. The panel provides file management, startup settings and a live console for the instance.' },
        { question: 'Does the Free plan include automatic backups?', answer: 'No. Keep a separate copy of code and important data outside the hosting instance.' },
        { question: 'What should I do when startup fails?', answer: 'Read the first relevant console error, verify the startup file and runtime settings, then check that dependencies are installed.' },
      ],
    },
    {
      slug: 'troubleshoot-nodejs-deployment',
      title: 'Troubleshoot a Node.js Deployment',
      description: 'Diagnose common Node.js startup failures by checking runtime versions, package scripts, dependencies, configuration and memory.',
      lead: 'When a Node.js process exits, use the first meaningful error in the console rather than changing several settings at once. Work through the runtime, files, start command, environment and resource limits in that order.',
      sections: [
        { heading: '1. Confirm the runtime and entry point', body: 'Check that the selected Node.js version is compatible with the project and that the configured entry file exists with the same capitalization. Older runtimes may be available for compatibility but are no longer maintained upstream.' },
        { heading: '2. Check the package manifest', body: 'Verify that package.json is present and contains the production start script used by the instance. Keep the lockfile with the manifest so dependency versions remain reproducible.' },
        { heading: '3. Read dependency errors first', body: 'For a missing-module error, confirm that the package is declared in the project manifest and that installation completed successfully. Do not upload node_modules from a different operating system as a first fix.' },
        { heading: '4. Validate configuration and ports', body: 'Check required environment variables in the panel and confirm that the application reads the port supplied by its hosting environment. Keep credentials out of source code and logs.' },
        { heading: '5. Check memory and logs', body: 'Look for repeated restarts, memory exhaustion or large log output. Reduce unnecessary dependencies and test with a small workload; the Free plan has 256 MB RAM and 512 MB storage.' },
      ],
      faqs: [
        { question: 'Why does npm start fail?', answer: 'Check that package.json defines a start script and that its referenced entry file exists.' },
        { question: 'Should I upload node_modules?', answer: 'Usually no. Upload the manifest and lockfile, then let the hosting environment install compatible dependencies.' },
        { question: 'What if my app exceeds the Free plan limits?', answer: 'Paid plans are currently not available for purchase, so confirm that the project fits the published Free allocation before deploying.' },
      ],
    },
    {
      slug: 'troubleshoot-python-deployment',
      title: 'Troubleshoot a Python Deployment',
      description: 'Fix common Python deployment issues involving the entry file, runtime version, dependency manifests, environment variables and memory.',
      lead: 'Python startup problems are often caused by a wrong entry file, an undeclared dependency or a mismatch between the selected Python version and the project. Check one item at a time and use the panel console to verify the result.',
      sections: [
        { heading: '1. Verify the Python version and main file', body: 'In the Startup tab, confirm the selected supported Python version and the exact main file name, including capitalization. The configured file must exist in the instance root or match its configured path.' },
        { heading: '2. Declare dependencies', body: 'List required packages in requirements.txt, pyproject.toml or uv.lock. Python Universal uses uv to install dependencies from supported manifests; check the console for package resolution errors.' },
        { heading: '3. Resolve import errors', body: 'Confirm that the module is declared, that the import name is correct and that the application files were uploaded to the expected directory. Avoid uploading a local .venv built on another operating system.' },
        { heading: '4. Check secrets and startup behavior', body: 'Read tokens from environment variables configured privately in the panel. Make sure the process stays in the foreground and prints useful startup errors rather than exiting silently.' },
        { heading: '5. Measure resource use', body: 'Monitor memory during startup and normal activity. The Free plan includes 256 MB RAM and 512 MB storage; large dependencies and caches can consume a meaningful share of that allocation.' },
      ],
      faqs: [
        { question: 'Where should requirements.txt go?', answer: 'Place it in the project directory used by the configured startup process so the runtime can find it.' },
        { question: 'Why does Python report ModuleNotFoundError?', answer: 'Check the dependency manifest, install output, working directory and import name before changing the Python version.' },
        { question: 'Can I upload my local virtual environment?', answer: 'Avoid it. Virtual environments can contain operating-system-specific files; declare dependencies and let the server create its own environment.' },
      ],
    },
    {
      slug: 'backups-and-data-persistence',
      title: 'Backups and Data Persistence for Small Apps',
      description: 'Plan reliable backups for application code and data, understand the Free plan limitations, and test recovery before an incident.',
      lead: 'A hosting instance is not a backup. Keep independent copies of source code and important data, and know how to restore them. The consolex1 Free plan does not include automated backups or a database.',
      sections: [
        { heading: '1. Separate code from runtime data', body: 'Store source code and configuration templates in a version-controlled repository. Keep secrets out of that repository and identify which files or database records are user data that must be backed up separately.' },
        { heading: '2. Keep copies outside the server', body: 'A copy on the same hosting instance will not help if the instance is lost. Store backups in a separate system you control and restrict access to sensitive data.' },
        { heading: '3. Choose a schedule and retention period', body: 'Back up data often enough to meet your recovery needs, and retain more than one recent copy when practical. The right schedule depends on how frequently data changes and how much loss is acceptable.' },
        { heading: '4. Test recovery', body: 'Periodically restore a copy into a test location and verify that the application can read it. A backup that has never been restored is an untested assumption.' },
        { heading: '5. Plan for the Free plan limits', body: 'The Free plan does not include a database or automated backups. Do not treat temporary files on the instance as durable storage; use an independent data store only if your project and service terms support it.' },
      ],
      faqs: [
        { question: 'Does the Free plan include automated backups?', answer: 'No. Keep an independent copy of important code and data.' },
        { question: 'How often should I back up?', answer: 'Choose a schedule based on how often your data changes and how much recent data you can afford to lose.' },
        { question: 'How do I know a backup works?', answer: 'Restore it to a test location and verify the application can use the recovered data.' },
      ],
    },
    {
      slug: 'free-hosting-vs-vps',
      title: 'Free App Hosting vs a VPS',
      description: 'Compare a limited free application-hosting plan with a virtual private server by setup, control, maintenance and resource needs.',
      lead: 'Free application hosting and a VPS solve different problems. Compare the control you need and the work you are prepared to maintain rather than choosing on price alone.',
      sections: [
        { heading: 'Setup and maintenance', body: 'A managed panel can simplify starting an application and viewing its logs. A VPS gives more operating-system control, but you are generally responsible for system updates, services, firewall rules and recovery.' },
        { heading: 'Resource limits and control', body: 'A free plan has published limits and is best for lightweight experiments. A VPS offers configurable resources, but its usable capacity still depends on the plan and your system administration.' },
        { heading: 'Security and responsibility', body: 'With either option, secure application secrets and dependencies. A VPS adds responsibility for operating-system maintenance and network exposure; panel-based hosting does not remove responsibility for application security.' },
        { heading: 'Which option fits?', body: 'Choose a free plan for learning or a small prototype that fits its stated limits. Consider a VPS when you need system-level control and can maintain it. consolex1 paid plans are displayed for future availability and are not currently available for purchase.' },
      ],
      faqs: [
        { question: 'Is free hosting a replacement for every VPS?', answer: 'No. Free hosting is limited and does not provide the same system-level control as a VPS.' },
        { question: 'Does a VPS manage itself?', answer: 'No. Operating-system updates, services, access control and backups require ongoing attention.' },
        { question: 'Which should a beginner choose?', answer: 'Start with the simplest option that meets the project’s actual resource and control requirements.' },
      ],
    },
    {
      slug: 'pterodactyl-vs-self-managed-vps',
      title: 'Pterodactyl Panel Hosting vs Managing a VPS',
      description: 'Understand the differences between managing an application through Pterodactyl and administering a server directly over SSH.',
      lead: 'A Pterodactyl panel and a self-managed VPS are different ways to operate software. The panel organizes common server tasks, while direct VPS administration exposes more system controls and more maintenance work.',
      sections: [
        { heading: 'Everyday workflow', body: 'Pterodactyl provides a browser-based view for files, startup settings and a live console. Direct VPS administration commonly uses SSH and command-line tools, which can be more flexible but requires familiarity with Linux services and permissions.' },
        { heading: 'Infrastructure responsibility', body: 'Panel hosting abstracts much of the underlying machine configuration. On a self-managed VPS, the operator is responsible for system packages, process management, firewall rules, updates and recovery.' },
        { heading: 'Limits and flexibility', body: 'A managed instance may restrict system-level changes and has a defined resource allocation. A VPS gives broader control, but the operator must prevent one service from exhausting resources needed by others.' },
        { heading: 'Choose by workload and skills', body: 'Use a panel when its supported runtime and limits fit the application and you prefer a guided workflow. Choose direct VPS administration when the application needs system-level control and you can maintain the host securely.' },
      ],
      faqs: [
        { question: 'Does Pterodactyl provide full VPS root access?', answer: 'No. A panel-managed application instance is not the same as root access to a virtual machine.' },
        { question: 'Is managing a VPS more flexible?', answer: 'It offers more operating-system control, along with responsibility for maintaining and securing that system.' },
        { question: 'Can I move between the two?', answer: 'Usually the application can be redeployed, but verify runtime, storage, network and data requirements before migrating.' },
      ],
    },
    {
      slug: 'discordjs-vs-discordpy',
      title: 'discord.js vs discord.py: Choosing a Discord Bot Library',
      description: 'Compare discord.js and discord.py by language, ecosystem, project familiarity and deployment requirements.',
      lead: 'Both discord.js and discord.py can power Discord bots. The better choice is usually the language your team already understands and can maintain, not a universal performance claim.',
      sections: [
        { heading: 'Language and ecosystem', body: 'discord.js is a JavaScript/TypeScript library used in Node.js projects. discord.py is a Python library. Consider the tooling, dependencies and deployment workflow already used by your project.' },
        { heading: 'Commands and interactions', body: 'Both libraries support building bots with commands and interactions. Check each library’s current documentation for API changes, required gateway intents and examples that match your installed version.' },
        { heading: 'Runtime and deployment', body: 'A discord.js bot needs a compatible Node.js runtime; discord.py needs a compatible Python runtime. In either case, keep the process running, configure the bot token as a secret and inspect startup logs after deployment.' },
        { heading: 'Make a maintainable choice', body: 'Choose the library the maintainers can debug and update confidently. Prototype the bot, verify its permissions and memory use, and avoid selecting a language based only on assumptions about speed.' },
      ],
      faqs: [
        { question: 'Which library is faster?', answer: 'Performance depends on the workload and implementation; for most small bots, familiarity and maintainability are more useful selection criteria.' },
        { question: 'Can I use either library on consolex1?', answer: 'The service supports Node.js and Python runtimes. Confirm that your project fits the published resource limits.' },
        { question: 'Can I switch libraries later?', answer: 'A rewrite is usually required because the libraries use different languages and APIs. Keep bot logic and configuration organized to make changes easier.' },
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
        { heading: '3. Créer une instance d’hébergement', body: 'Rejoignez le Discord consolex1, vérifiez votre compte dans le salon vérification, puis lancez /account register et /server create dans le salon commandes. Ouvrez l’instance créée dans le panel Pterodactyl. Le plan gratuit est limité à 256 Mo de RAM et 512 Mo de stockage.' },
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
        { heading: '3. Choisir Node.js Universal et envoyer le projet', body: 'L’egg Node.js Universal propose actuellement Node.js 14, 16, 18, 20, 22, 24 et 26. Sélectionnez cet egg lors de la création du serveur, puis choisissez la version dans l’onglet Startup et transférez le projet avec SFTP ou le gestionnaire Pterodactyl. Les versions 14, 16 et 18 ne sont plus maintenues en amont et sont disponibles uniquement pour compatibilité.' },
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
        { heading: '4. Choisir Python Universal et démarrer', body: 'Créez une instance via le parcours Discord consolex1, choisissez l’egg Python Universal puis Python 3.9, 3.10, 3.11, 3.12, 3.13 ou 3.14 dans l’onglet Startup. Définissez le fichier principal (par exemple bot.py) et démarrez le serveur. Python 3.9 n’est plus maintenu en amont et reste disponible pour compatibilité.' },
        { heading: '5. Laisser l’egg installer les dépendances', body: 'Python Universal crée automatiquement un environnement .venv et le recrée si vous changez de version Python. Il utilise uv pour installer les dépendances détectées dans requirements.txt, pyproject.toml ou uv.lock. Des paramètres facultatifs permettent un git pull au démarrage et l’ajout de paquets pip.' },
        { heading: '6. Contrôler les limites et les sauvegardes', body: 'Vérifiez que le bot est en ligne et surveillez la mémoire. L’offre gratuite a des ressources limitées et aucune sauvegarde automatique ; conservez séparément le code et les données.' },
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
        { heading: '4. Choisir la version Node.js, déployer et démarrer', body: 'L’egg Node.js Universal propose actuellement les versions 14, 16, 18, 20, 22, 24 et 26. Choisissez Node.js Universal lors de la création du serveur, sélectionnez la version dans l’onglet Startup, téléversez le code et le manifeste, installez les dépendances et définissez la commande de démarrage. Les versions 14, 16 et 18 ne sont plus maintenues en amont et restent disponibles pour compatibilité. Consultez la console en cas d’erreur de connexion ou de gateway.' },
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
        { heading: '4. Choisir Python Universal et inspecter le démarrage', body: 'Python Universal prend en charge Python 3.9 à 3.14 (3.9, 3.10, 3.11, 3.12, 3.13 et 3.14). Sélectionnez cet egg lors de la création du serveur, choisissez une version dans l’onglet Startup, définissez le fichier principal (par exemple bot.py) et démarrez-le. Python 3.9 n’est plus maintenu en amont et reste disponible pour compatibilité. L’egg crée un environnement .venv et utilise uv pour installer les dépendances depuis requirements.txt, pyproject.toml ou uv.lock.' },
        { heading: '5. Tester et surveiller', body: 'Vérifiez que le bot se connecte et répond à une interaction de test. Surveillez la mémoire et sauvegardez séparément le code et les données importantes.' },
      ],
      faqs: [
        { question: 'Que faut-il mettre dans requirements.txt ?', answer: 'Listez les paquets Python nécessaires, notamment une version de discord.py compatible avec le code du bot.' },
        { question: 'Comment configurer le token du bot ?', answer: 'Lisez-le depuis une variable d’environnement dans le code et définissez cette variable de façon privée dans le panel.' },
        { question: 'Pourquoi les commandes slash ne s’affichent-elles pas ?', answer: 'Vérifiez l’enregistrement des commandes, les scopes de l’application et les permissions du bot, puis inspectez les journaux de synchronisation.' },
      ],
    },
    {
      slug: 'creer-un-serveur-consolex1',
      title: 'Comment créer un serveur consolex1',
      description: 'Suivez les étapes exactes pour vérifier votre compte Discord, enregistrer un compte consolex1 et créer un serveur.',
      lead: 'La création d’un serveur consolex1 se fait en trois étapes : vérifiez votre compte Discord, inscrivez un compte avec le bot, puis créez votre serveur. Les commandes de compte et de serveur doivent être lancées dans le salon commandes.',
      sections: [
        { heading: '1. Rejoindre Discord et vérifier votre compte', body: 'Rejoignez le serveur Discord consolex1 via le lien du site. Ouvrez le salon vérification et terminez la procédure avant de continuer.' },
        { heading: '2. Enregistrer votre compte', body: 'Dans le salon commandes, saisissez /account register. Suivez les instructions du bot pour terminer l’inscription.' },
        { heading: '3. Créer votre serveur', body: 'Toujours dans le salon commandes, saisissez /server create. Suivez les instructions affichées par le bot pour choisir la configuration et terminer la création.' },
        { heading: '4. Ouvrir le panel du serveur', body: 'Après sa création, gérez les fichiers, les paramètres de démarrage et la console en direct dans le panel Pterodactyl sur panel.consolex1.com. En cas de problème, ouvrez un ticket dans le salon support Discord.' },
      ],
      faqs: [
        { question: 'Où lancer /account register et /server create ?', answer: 'Les deux commandes doivent être saisies dans le salon commandes Discord de consolex1, et non dans le salon de vérification.' },
        { question: 'Que faire avant de m’inscrire ?', answer: 'Rejoignez le serveur Discord consolex1 et terminez la vérification dans le salon prévu à cet effet.' },
        { question: 'Où gérer mon serveur après sa création ?', answer: 'Utilisez le panel Pterodactyl sur panel.consolex1.com. Pour obtenir de l’aide, ouvrez un ticket dans le salon support Discord.' },
      ],
    },
    {
      slug: 'guide-complet-panel-pterodactyl',
      title: 'Guide complet du panel Pterodactyl',
      description: 'Apprenez à utiliser Pterodactyl pour transférer des fichiers, configurer le démarrage, lire les journaux et gérer un serveur consolex1.',
      lead: 'Pterodactyl est le panel web qui permet de gérer une instance d’hébergement. Ce guide présente les opérations courantes : ouvrir le bon serveur, régler son runtime, transférer les fichiers, le démarrer et diagnostiquer les erreurs sans modifier l’infrastructure.',
      sections: [
        { heading: '1. Ouvrir le bon serveur', body: 'Après avoir créé une instance avec le parcours Discord de consolex1, connectez-vous à panel.consolex1.com et sélectionnez le serveur correspondant. Vérifiez son nom et son allocation avant de modifier des réglages ou d’envoyer des fichiers.' },
        { heading: '2. Vérifier les paramètres de démarrage', body: 'Dans l’onglet Startup, contrôlez l’egg sélectionné, la version du runtime, le fichier d’entrée et les variables nécessaires. Choisissez un runtime compatible avec le projet et ne modifiez pas les valeurs que vous ne connaissez pas.' },
        { heading: '3. Transférer les fichiers du projet', body: 'Utilisez le gestionnaire de fichiers pour les petits changements ou SFTP pour les transferts plus volumineux. Envoyez le code et les manifestes de dépendances, mais évitez les caches locaux et les environnements virtuels sauf besoin particulier.' },
        { heading: '4. Configurer les secrets de façon sûre', body: 'Lorsque c’est pris en charge, définissez les tokens et paramètres privés dans les variables d’environnement du panel. Ne collez pas de secret dans un fichier public, une capture d’écran, un ticket d’assistance ou un journal.' },
        { heading: '5. Démarrer et lire la console', body: 'Démarrez le serveur et suivez la console en direct dès le lancement. Corrigez d’abord la première erreur exploitable, par exemple un fichier ou une dépendance manquante, avant de traiter les erreurs suivantes qui peuvent en découler.' },
        { heading: '6. Protéger les fichiers et les données', body: 'Le plan Free n’inclut pas de sauvegardes automatiques. Conservez une copie indépendante du code et des données importantes, puis vérifiez qu’une restauration fonctionne avant de compter sur une sauvegarde.' },
      ],
      faqs: [
        { question: 'Que permet de gérer le panel ?', answer: 'Le panel donne accès aux fichiers, aux paramètres de démarrage et à une console en direct pour l’instance.' },
        { question: 'Le plan Free inclut-il des sauvegardes automatiques ?', answer: 'Non. Conservez une copie distincte du code et des données importantes, en dehors de l’instance.' },
        { question: 'Que faire si le démarrage échoue ?', answer: 'Lisez la première erreur pertinente dans la console, vérifiez le fichier de démarrage et le runtime, puis contrôlez l’installation des dépendances.' },
      ],
    },
    {
      slug: 'depanner-deploiement-nodejs',
      title: 'Dépanner le déploiement d’une application Node.js',
      description: 'Diagnostiquez les erreurs de démarrage Node.js en vérifiant le runtime, les scripts, les dépendances, la configuration et la mémoire.',
      lead: 'Lorsqu’un processus Node.js s’arrête, partez de la première erreur utile affichée dans la console au lieu de modifier plusieurs réglages à la fois. Vérifiez dans l’ordre le runtime, les fichiers, la commande de démarrage, la configuration et les limites de ressources.',
      sections: [
        { heading: '1. Vérifier le runtime et le fichier d’entrée', body: 'Contrôlez que la version de Node.js choisie est compatible avec le projet et que le fichier d’entrée configuré existe, avec la bonne casse. Les anciennes versions peuvent rester disponibles pour compatibilité sans être maintenues en amont.' },
        { heading: '2. Contrôler le manifeste du projet', body: 'Vérifiez la présence de package.json et du script de démarrage de production utilisé par l’instance. Conservez le fichier lock avec le manifeste pour rendre les versions des dépendances reproductibles.' },
        { heading: '3. Traiter les erreurs de dépendances', body: 'Si un module manque, vérifiez qu’il est déclaré dans le manifeste et que l’installation s’est terminée correctement. N’envoyez pas en premier recours un dossier node_modules créé sur un autre système d’exploitation.' },
        { heading: '4. Valider la configuration et le port', body: 'Contrôlez les variables d’environnement requises dans le panel et vérifiez que l’application lit le port fourni par son environnement d’hébergement. Gardez les identifiants hors du code source et des journaux.' },
        { heading: '5. Surveiller la mémoire et les journaux', body: 'Recherchez les redémarrages répétés, les dépassements de mémoire et les journaux trop volumineux. Réduisez les dépendances inutiles et testez avec une charge légère ; le plan Free comprend 256 Mo de RAM et 512 Mo de stockage.' },
      ],
      faqs: [
        { question: 'Pourquoi npm start échoue-t-il ?', answer: 'Vérifiez que package.json définit un script start et que le fichier qu’il référence existe.' },
        { question: 'Dois-je envoyer node_modules ?', answer: 'En général, non. Envoyez le manifeste et le fichier lock, puis laissez l’environnement installer des dépendances compatibles.' },
        { question: 'Que faire si mon application dépasse les limites Free ?', answer: 'Les offres payantes ne sont actuellement pas disponibles à l’achat ; vérifiez que le projet respecte les limites publiées de l’offre Free avant de le déployer.' },
      ],
    },
    {
      slug: 'depanner-deploiement-python',
      title: 'Dépanner le déploiement d’une application Python',
      description: 'Résolvez les problèmes courants de déploiement Python liés au fichier d’entrée, à la version, aux dépendances, aux variables et à la mémoire.',
      lead: 'Les erreurs de démarrage Python viennent souvent d’un mauvais fichier d’entrée, d’une dépendance non déclarée ou d’une incompatibilité entre la version choisie et le projet. Vérifiez un point à la fois et observez le résultat dans la console du panel.',
      sections: [
        { heading: '1. Vérifier la version Python et le fichier principal', body: 'Dans l’onglet Startup, contrôlez la version de Python choisie et le nom exact du fichier principal, casse comprise. Ce fichier doit se trouver à la racine de l’instance ou dans le chemin configuré.' },
        { heading: '2. Déclarer les dépendances', body: 'Listez les paquets nécessaires dans requirements.txt, pyproject.toml ou uv.lock. Python Universal utilise uv pour installer les dépendances des manifestes pris en charge ; vérifiez la console en cas d’erreur de résolution.' },
        { heading: '3. Résoudre les erreurs d’import', body: 'Vérifiez que le module est déclaré, que le nom d’import est correct et que les fichiers ont été envoyés dans le bon répertoire. Évitez de transférer un dossier .venv construit sur un autre système d’exploitation.' },
        { heading: '4. Contrôler les secrets et le démarrage', body: 'Lisez les tokens depuis des variables d’environnement configurées en privé dans le panel. Vérifiez que le processus reste au premier plan et qu’il affiche des erreurs de démarrage utiles.' },
        { heading: '5. Mesurer les ressources utilisées', body: 'Surveillez la mémoire au démarrage et pendant l’activité normale. Le plan Free comprend 256 Mo de RAM et 512 Mo de stockage ; les dépendances et caches volumineux peuvent occuper une part importante de ces ressources.' },
      ],
      faqs: [
        { question: 'Où placer requirements.txt ?', answer: 'Placez-le dans le répertoire du projet utilisé par la commande de démarrage afin que le runtime puisse le trouver.' },
        { question: 'Pourquoi Python affiche-t-il ModuleNotFoundError ?', answer: 'Vérifiez le manifeste, les journaux d’installation, le répertoire de travail et le nom d’import avant de changer la version Python.' },
        { question: 'Puis-je envoyer mon environnement virtuel local ?', answer: 'Évitez-le. Un environnement virtuel peut contenir des fichiers propres à votre système ; déclarez les dépendances et laissez le serveur créer le sien.' },
      ],
    },
    {
      slug: 'sauvegardes-et-persistance-applications',
      title: 'Sauvegardes et persistance des données d’une application',
      description: 'Organisez des sauvegardes fiables du code et des données, comprenez les limites du plan Free et testez la restauration.',
      lead: 'Une instance d’hébergement ne constitue pas une sauvegarde. Gardez des copies indépendantes du code et des données importantes, et sachez comment les restaurer. Le plan Free consolex1 n’inclut ni sauvegardes automatiques ni base de données.',
      sections: [
        { heading: '1. Séparer le code des données d’exécution', body: 'Conservez le code source et les modèles de configuration dans un dépôt versionné. Gardez les secrets hors du dépôt et identifiez les fichiers ou enregistrements qui contiennent des données à sauvegarder séparément.' },
        { heading: '2. Garder les copies hors du serveur', body: 'Une copie stockée sur la même instance ne protège pas si celle-ci devient indisponible. Conservez les sauvegardes dans un système distinct que vous contrôlez et limitez l’accès aux données sensibles.' },
        { heading: '3. Définir une fréquence et une rétention', body: 'Effectuez les sauvegardes assez souvent pour répondre à vos besoins de restauration et gardez plusieurs copies récentes si possible. La fréquence dépend du rythme de modification des données et de la perte acceptable.' },
        { heading: '4. Tester la restauration', body: 'Restaurez périodiquement une copie dans un environnement de test et vérifiez que l’application peut la lire. Une sauvegarde qui n’a jamais été restaurée reste une hypothèse non vérifiée.' },
        { heading: '5. Tenir compte des limites du plan Free', body: 'Le plan Free ne comprend ni base de données ni sauvegardes automatiques. Ne traitez pas les fichiers temporaires de l’instance comme un stockage durable ; n’utilisez un système de données externe que si le projet et les conditions du service le permettent.' },
      ],
      faqs: [
        { question: 'Le plan Free inclut-il des sauvegardes automatiques ?', answer: 'Non. Conservez une copie indépendante du code et des données importantes.' },
        { question: 'À quelle fréquence faut-il sauvegarder ?', answer: 'Choisissez une fréquence selon l’évolution des données et la quantité de données récentes que vous pouvez vous permettre de perdre.' },
        { question: 'Comment vérifier une sauvegarde ?', answer: 'Restaurez-la dans un environnement de test et vérifiez que l’application peut utiliser les données récupérées.' },
      ],
    },
    {
      slug: 'hebergement-gratuit-ou-vps',
      title: 'Hébergement applicatif gratuit ou VPS : que choisir ?',
      description: 'Comparez une offre gratuite d’hébergement applicatif et un VPS selon la mise en route, le contrôle, la maintenance et les ressources.',
      lead: 'L’hébergement applicatif gratuit et un VPS ne répondent pas aux mêmes besoins. Comparez le niveau de contrôle souhaité et le travail de maintenance que vous pouvez assurer, pas seulement le prix.',
      sections: [
        { heading: 'Mise en route et maintenance', body: 'Un panel géré peut simplifier le démarrage d’une application et la lecture des journaux. Un VPS donne davantage de contrôle sur le système, mais vous devez généralement gérer les mises à jour, services, règles réseau et restaurations.' },
        { heading: 'Limites et contrôle', body: 'Une offre gratuite comporte des limites publiées et convient surtout aux essais légers. Un VPS permet de configurer davantage de ressources, mais sa capacité utile dépend toujours de l’offre choisie et de l’administration du système.' },
        { heading: 'Sécurité et responsabilités', body: 'Dans les deux cas, protégez les secrets et les dépendances de l’application. Un VPS ajoute la responsabilité de maintenir le système d’exploitation et d’exposer les services réseau de façon sûre ; un panel ne supprime pas la responsabilité liée à la sécurité applicative.' },
        { heading: 'Quelle option choisir ?', body: 'Choisissez une offre gratuite pour apprendre ou tester un petit projet qui respecte ses limites. Envisagez un VPS si vous avez besoin d’un contrôle système et pouvez l’administrer. Les offres payantes consolex1 sont affichées en vue de leur disponibilité future et ne sont pas disponibles à l’achat.' },
      ],
      faqs: [
        { question: 'L’hébergement gratuit remplace-t-il tous les VPS ?', answer: 'Non. Une offre gratuite est limitée et ne fournit pas le même contrôle du système qu’un VPS.' },
        { question: 'Un VPS s’administre-t-il tout seul ?', answer: 'Non. Les mises à jour système, les services, les accès et les sauvegardes demandent un suivi régulier.' },
        { question: 'Quelle solution choisir pour débuter ?', answer: 'Commencez par la solution la plus simple qui répond aux besoins réels du projet en ressources et en contrôle.' },
      ],
    },
    {
      slug: 'pterodactyl-ou-vps-autogere',
      title: 'Panel Pterodactyl ou VPS administré soi-même',
      description: 'Comprenez les différences entre gérer une application dans Pterodactyl et administrer directement un serveur via SSH.',
      lead: 'Un panel Pterodactyl et un VPS autogéré sont deux façons différentes d’exploiter un logiciel. Le panel regroupe des opérations courantes ; l’administration directe donne davantage de contrôle système et implique plus de maintenance.',
      sections: [
        { heading: 'Les opérations courantes', body: 'Pterodactyl propose une interface web pour les fichiers, les paramètres de démarrage et une console en direct. L’administration d’un VPS passe souvent par SSH et la ligne de commande : elle est plus flexible, mais demande de connaître les services Linux et les permissions.' },
        { heading: 'La responsabilité de l’infrastructure', body: 'Un panel d’hébergement masque une partie de la configuration de la machine. Sur un VPS autogéré, l’administrateur s’occupe des paquets système, de la gestion des processus, des règles réseau, des mises à jour et de la restauration.' },
        { heading: 'Limites et flexibilité', body: 'Une instance gérée peut limiter les changements système et dispose d’une allocation définie. Un VPS offre un contrôle plus large, mais l’administrateur doit empêcher un service de consommer les ressources des autres.' },
        { heading: 'Choisir selon le projet et ses compétences', body: 'Choisissez un panel si les runtimes pris en charge et les limites conviennent au projet et si vous préférez une interface guidée. Choisissez l’administration directe d’un VPS si le projet exige un contrôle système et si vous pouvez maintenir le serveur en sécurité.' },
      ],
      faqs: [
        { question: 'Pterodactyl donne-t-il un accès root complet ?', answer: 'Non. Une instance gérée dans un panel n’équivaut pas à un accès root à une machine virtuelle.' },
        { question: 'Un VPS est-il plus flexible ?', answer: 'Il donne davantage de contrôle sur le système d’exploitation, mais implique aussi la responsabilité de le maintenir et de le sécuriser.' },
        { question: 'Peut-on passer d’une solution à l’autre ?', answer: 'L’application peut souvent être redéployée, mais vérifiez les besoins en runtime, stockage, réseau et données avant la migration.' },
      ],
    },
    {
      slug: 'discordjs-ou-discordpy',
      title: 'discord.js ou discord.py : choisir une bibliothèque Discord',
      description: 'Comparez discord.js et discord.py selon le langage, l’écosystème, les compétences de l’équipe et les besoins du déploiement.',
      lead: 'discord.js et discord.py permettent tous deux de développer des bots Discord. Le meilleur choix dépend généralement du langage que l’équipe connaît et peut maintenir, pas d’une promesse universelle de performance.',
      sections: [
        { heading: 'Langage et écosystème', body: 'discord.js est une bibliothèque JavaScript/TypeScript utilisée avec Node.js. discord.py est une bibliothèque Python. Tenez compte des outils, des dépendances et des méthodes de déploiement déjà utilisés dans le projet.' },
        { heading: 'Commandes et interactions', body: 'Les deux bibliothèques permettent de créer des bots, commandes et interactions. Consultez la documentation actuelle de chacune pour vérifier les changements d’API, les intents nécessaires et les exemples correspondant à la version installée.' },
        { heading: 'Runtime et déploiement', body: 'Un bot discord.js nécessite un runtime Node.js compatible ; discord.py nécessite un runtime Python compatible. Dans les deux cas, gardez le processus actif, configurez le token comme secret et vérifiez les journaux après le démarrage.' },
        { heading: 'Faire un choix maintenable', body: 'Choisissez la bibliothèque que les personnes chargées du projet savent déboguer et mettre à jour. Testez le bot, vérifiez ses permissions et sa mémoire, et évitez de choisir un langage sur la seule base d’hypothèses de vitesse.' },
      ],
      faqs: [
        { question: 'Quelle bibliothèque est la plus rapide ?', answer: 'Les performances dépendent de la charge et de l’implémentation ; pour un petit bot, les compétences de l’équipe et la maintenance sont souvent des critères plus utiles.' },
        { question: 'Les deux bibliothèques peuvent-elles être hébergées sur consolex1 ?', answer: 'Le service prend en charge les runtimes Node.js et Python. Vérifiez que le projet respecte les limites de ressources publiées.' },
        { question: 'Peut-on changer de bibliothèque plus tard ?', answer: 'Une réécriture est généralement nécessaire, car ces bibliothèques utilisent des langages et des API différents. Organisez le code et la configuration pour faciliter les changements.' },
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
