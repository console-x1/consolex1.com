// Caractéristiques des offres, utilisées par l'assistant « quelle offre choisir ? ».
// À garder alignées avec les cartes de la page Tarifs.
export type PlanKey = 'free' | 'basic' | 'pro' | 'premium';

export type PlanInfo = {
    key: PlanKey;
    name: string;
    price: { fr: string; en: string };
    available: boolean;
    accent: 'green' | 'blue' | 'yellow' | 'orange';
    cpu: number;
    ramMb: number;
    storageMb: number;
    databases: number;
};

export const PLANS: PlanInfo[] = [
    { key: 'free', name: 'Free', price: { fr: '0 €/mois', en: '€0/month' }, available: true, accent: 'green', cpu: 40, ramMb: 256, storageMb: 512, databases: 0 },
    { key: 'basic', name: 'Basic', price: { fr: '1,49 €/mois', en: '€1.49/month' }, available: false, accent: 'blue', cpu: 60, ramMb: 512, storageMb: 1024, databases: 1 },
    { key: 'pro', name: 'Pro', price: { fr: '2,49 €/mois', en: '€2.49/month' }, available: false, accent: 'yellow', cpu: 80, ramMb: 1024, storageMb: 2048, databases: 2 },
    { key: 'premium', name: 'Premium', price: { fr: '3,49 €/mois', en: '€3.49/month' }, available: false, accent: 'orange', cpu: 100, ramMb: 1536, storageMb: 3072, databases: 3 },
];

export function formatSize(mb: number, locale: 'fr' | 'en') {
    if (mb < 1024) return `${mb} ${locale === 'fr' ? 'Mo' : 'MB'}`;
    const gb = mb / 1024;
    const text = Number.isInteger(gb) ? String(gb) : gb.toFixed(1).replace('.', locale === 'fr' ? ',' : '.');
    return `${text} ${locale === 'fr' ? 'Go' : 'GB'}`;
}

// Réponses : [type de projet 0-2, fréquentation 0-2, bases de données 0-3]
// Charge : 0-1 → Free, 2 → Basic, 3 → Pro, 4 → Premium. Les bases de données imposent un minimum (1 → Basic, 2 → Pro, 3 → Premium).
export function recommend(answers: number[]): PlanInfo {
    const [type = 0, usage = 0, db = 0] = answers;
    const load = type + usage;
    const byLoad = load <= 1 ? 0 : Math.min(3, load - 1);
    const byDb = Math.min(3, db);
    return PLANS[Math.max(byLoad, byDb)];
}