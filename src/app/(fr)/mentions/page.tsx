export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/mentions',
    languages: {
      fr: 'https://consolex1.com/mentions',
      en: 'https://consolex1.com/en/legal-notice',
    },
  },
  title: 'Mentions légales',
  description: 'Mentions légales de consolex1, expliquant l’éditeur, l’hébergement et le cadre juridique.',
  keywords: ['mentions légales', 'service consolex1', 'hébergement français', 'association'],
  openGraph: {
    title: 'Mentions légales consolex1',
    description: 'Mentions légales de consolex1, expliquant l’éditeur, l’hébergement et le cadre juridique.',
    url: 'https://consolex1.com/mentions',
    images: ['/avatar.png'],
  },
};

export default function MentionsPage() {
  return (
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Mentions légales</h1>
        <p>Informations sur l’éditeur, l’hébergement et les conditions juridiques encadrant consolex1.</p>
      </div>
      <div className="max-w-190 [&_h2]:mt-[2.4rem] [&_h2]:mb-[.7rem] [&_h2]:text-[1.3rem] [&_p]:mb-[.9rem] [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline-offset-[3px]" data-reveal>
        <h2>Éditeur du service</h2>
        <p>consolex1 est un projet porté par une équipe indépendante basée en France.</p>
        <p>Adresse de contact : France.</p>
        <p>Adresse e-mail de contact : contact@consolex1.com</p>

        <h2>Statut</h2>
        <p>Le projet est actuellement en phase de structuration et n’est pas encore officiellement constitué en association.</p>
        <p>Les offres payantes sont affichées en vue de leur disponibilité future. Elles ne sont actuellement pas disponibles à l’achat.</p>
        <p>consolex1 a été créé parce que, quand j’étais plus jeune, j’avais moi aussi besoin d’un hébergeur gratuit pour tester, apprendre et développer mes projets. Aujourd’hui, je souhaite offrir cette même aide aux autres afin que chacun puisse commencer gratuitement. Les offres payantes sont prévues pour contribuer au financement de l’infrastructure et soutenir le projet à long terme.</p>

        <h2>Hébergement</h2>
        <p>Le site vitrine est hébergé sur GitHub Pages, tandis que les services d’hébergement pour les applications sont fournis depuis un serveur basé en France.</p>
        <p>Le choix d’une infrastructure française vise à garantir un niveau de conformité et de proximité des données.</p>

        <h2>Vérifications et sécurité</h2>
        <p>Des contrôles de sécurité sont réalisés par l’administration du service ainsi que par des scripts automatisés.</p>
        <p>Ces vérifications servent uniquement à s’assurer du bon usage du service, de l’intégrité des applications hébergées et du respect des conditions d’utilisation.</p>
        <p>À aucun moment ces contrôles ne récupèrent de mots de passe, de clés API ou des informations de connexion privées.</p>
        <p>Nous ne copions pas et ne volons pas le code des applications. Les analyses portent sur la présence, la conformité et l’usage des services, sans exfiltrer le contenu des applications.</p>
        <p>Les services déployés doivent respecter les conditions d’utilisation des plateformes tierces ; tout code qui les enfreint est interdit.</p>
        <h2>Contact</h2>
        <p>Pour toute question juridique ou de conformité, privilégiez le serveur Discord ou les coordonnées affichées sur le site.</p>
      </div>
    </section>
  );
}