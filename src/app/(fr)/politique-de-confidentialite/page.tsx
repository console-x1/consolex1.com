export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/politique-de-confidentialite',
    languages: {
      fr: 'https://consolex1.com/politique-de-confidentialite',
      en: 'https://consolex1.com/en/privacy-policy',
    },
  },
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de consolex1, décrivant le traitement des données et la protection de la vie privée.',
  keywords: ['politique de confidentialité', 'données personnelles', 'RGPD', 'consolex1'],
  openGraph: {
    title: 'Politique de confidentialité consolex1',
    description: 'Politique de confidentialité de consolex1, décrivant le traitement des données et la protection de la vie privée.',
    url: 'https://consolex1.com/politique-de-confidentialite',
    images: ['/avatar.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h1>Politique de confidentialité</h1>
        <p>Explication de la collecte, du traitement et de la protection des données chez consolex1.</p>
      </div>
      <div className="max-w-184 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[1.25rem] [&_p]:mb-4 [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-[3px]" data-reveal>
        <h2>Données personnelles</h2>
        <p>consolex1 ne collecte pas de données personnelles sensibles directement sur le site vitrine.</p>
        <p>Les données partagées via Discord sont gérées par Discord et soumises à leurs conditions de confidentialité.</p>

        <h2>Non revente des données</h2>
        <p>Nous nous engageons à ne pas vendre, louer ou monétiser les données personnelles des utilisateurs.</p>
        <p>Les informations recueillies servent uniquement à assurer le fonctionnement du service et sa sécurité.</p>

        <h2>Cookies et suivi</h2>
        <p>Le site peut utiliser des cookies pour améliorer l’expérience et mémoriser des préférences de navigation.</p>
        <p>Ces cookies ne sont pas utilisés pour profiler ou revendre des informations personnelles.</p>
        <p>Nous utilisons Google Analytics uniquement avec votre consentement via le bandeau de cookies ; vous pouvez choisir d'anonymiser votre adresse IP.</p>

        <h2>Sécurité et audits</h2>
        <p>Des vérifications sont menées par l’administration ainsi que par des scripts automatisés pour contrôler les services hébergés.</p>
        <p>Ces audits n’ont pas pour objectif de récupérer des identifiants ou des secrets, ni de copier ou voler du code.</p>
        <p>Ils visent exclusivement à détecter les usages abusifs et à protéger la plateforme et ses utilisateurs.</p>
      </div>
    </section>
  );
}