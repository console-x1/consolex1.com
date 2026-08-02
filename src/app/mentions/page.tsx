export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de consolex1, explicant l’éditeur, l’hébergement et le cadre juridique actuel.',
};

export default function MentionsPage() {
  return (
    <section className="section legal-page">
      <div className="section-header">
        <h1>Mentions légales</h1>
        <p>Informations sur l’éditeur, l’hébergement et les conditions juridiques encadrant consolex1.</p>
      </div>
      <div className="legal-content">
        <h2>Éditeur du service</h2>
        <p>Consolex1 est un projet porté par une équipe indépendante basée en France.</p>
        <p>Adresse de contact : France.</p>
        <p>Email de contact : contact@consolex1.com</p>

        <h2>Statut</h2>
        <p>Le projet est actuellement en phase de structuration et n’est pas encore officiellement constitué en association.</p>
        <p>Jusqu’à l’obtention de ce statut, aucune offre payante ne sera commercialisée par le service.</p>

        <h2>Hébergement</h2>
        <p>Le site vitrine est hébergé sur GitHub Pages, tandis que les services d’hébergement pour les applications sont fournis depuis un serveur basé en France.</p>
        <p>Le choix d’une infrastructure française vise à garantir un niveau de conformité et de proximité des données.</p>

        <h2>Vérifications et sécurité</h2>
        <p>Des contrôles de sécurité sont réalisés par l’administration du service ainsi que par des scripts automatisés.</p>
        <p>Ces vérifications servent uniquement à s’assurer du bon usage du service, de l’intégrité des applications hébergées et du respect des conditions d’utilisation.</p>
        <p>À aucun moment ces contrôles ne récupèrent de mots de passe, de clés API ou des informations de connexion privées.</p>
        <p>Nous ne copions pas et ne volons pas le code des applications. Les analyses portent sur la présence, la conformité et l’usage des services, sans exfiltrer le contenu des applications.</p>        
        <p>Les services déployés doivent respecter les ToS externes applicables ; tout code violant ces règles, est interdit.</p>
        <h2>Contact</h2>
        <p>Pour toute question juridique ou de conformité, privilégiez le serveur Discord ou les coordonnées affichées sur le site.</p>
      </div>
    </section>
  );
}
