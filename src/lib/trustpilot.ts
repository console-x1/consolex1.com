export const TRUSTPILOT = {
    url: {
        fr: 'https://fr.trustpilot.com/review/consolex1.com',
        en: 'https://www.trustpilot.com/review/consolex1.com',
    },
    // Pour afficher les avis directement sur le site : copier l'identifiant d'entreprise et le modèle
    // depuis Trustpilot Business > Intégrations > TrustBox. Tant que l'identifiant est vide, seul le lien est affiché.
    businessUnitId: '',
    templateId: '53aa8807dec7e10d38f59f32', // TrustBox « Mini »
    domain: 'consolex1.com',
    locale: { fr: 'fr-FR', en: 'en-US' },
} as const;