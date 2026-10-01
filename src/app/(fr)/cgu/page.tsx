export const metadata = {
    alternates: {
      canonical: 'https://consolex1.com/cgu',
      languages: {
        fr: 'https://consolex1.com/cgu',
        en: 'https://consolex1.com/en/terms',
      },
    },
  title: 'CGU',
  description: 'Conditions générales d’utilisation de consolex1, décrivant les droits, obligations et engagements du service.',
  keywords: ['CGU', 'conditions générales', 'service consolex1', 'association'],
  openGraph: {
    title: 'CGU consolex1',
    description: 'Conditions générales d’utilisation de consolex1, décrivant les droits, obligations et engagements du service.',
    url: 'https://consolex1.com/cgu',
    images: ['/avatar.png'],
  },
};

export default function CGUPage() {
  return (
    <section className="section legal-page">
      <div className="section-header">
        <h1>Conditions générales d’utilisation</h1>
        <p>Cadre d’utilisation du service consolex1 et des ressources proposées.</p>
      </div>
      <div className="legal-content">
        <h2>Acceptation</h2>
        <p>L’accès et l’utilisation du service impliquent l’acceptation pleine et entière des présentes conditions générales.</p>

        <h2>Usage autorisé</h2>
        <p>Le service est destiné aux projets personnels, bots, sites et applications compatibles avec Pterodactyl.</p>
        <p>L’usage est strictement interdit pour toute activité illégale, malveillante, de spam ou de contournement des protections techniques.</p>

        <h2>Usages interdits</h2>
        <p>Il est formellement interdit d’héberger ou d’exécuter des services de minage de cryptomonnaie.</p>
        <p>Les applications enfreignant un quelconque contrat ou ToS externe, comme l’utilisation de selfbots Discord ou d’autres automatismes interdits, sont proscrites.</p>
        <p>L’usage de proxy, VPN, tunnel ou de tout mécanisme visant à dissimuler l’origine d’une connexion ou à contourner des limitations est également interdit.</p>
        <p>Cela inclut les services déployés pour cacher, rediriger ou relayer des activités en violation des conditions d’utilisation de tiers.</p>

        <h2>Jeux et serveurs gourmands en ressources</h2>
        <p>Afin de préserver les ressources disponibles pour l’ensemble de nos utilisateurs, <strong>l’hébergement de serveurs BombSquad n’est pas autorisé sur nos offres gratuites</strong>.</p>
        <p>BombSquad peut générer une consommation importante de bande passante et de ressources serveur, incompatible avec les limites et les objectifs de nos offres gratuites.</p>
        <p>Cette restriction s’applique à <strong>tout serveur BombSquad</strong>, quel que soit le nombre de joueurs ou la configuration utilisée.</p>
        <p>Les offres payantes peuvent être utilisées pour ce type de serveur, sous réserve du respect de nos CGU et des limites de ressources applicables.</p>

        <h2>Engagement associatif</h2>
        <p>consolex1 se positionne comme un projet à vocation associative. Ce statut n’est pas encore officiel aujourd’hui.</p>
        <p>Dans cette attente, aucun service payant ne sera vendu.</p>

        <h2>Vérifications de sécurité</h2>
        <p>Des contrôles manuels et automatisés peuvent être effectués par l’administration pour vérifier les services hébergés.</p>
        <p>Ces contrôles ont uniquement pour objectif de garantir la sécurité et le respect des conditions d’utilisation.</p>
        <p>Ils ne récupèrent ni mots de passe, ni clés privées, ni informations de connexion utilisateur.</p>

        <h2>Responsabilité</h2>
        <p>consolex1 ne peut garantir une disponibilité ininterrompue du service.</p>
        <p>La sauvegarde et la protection des données restent à la charge de l’utilisateur.</p>
      </div>
    </section>
  );
}
