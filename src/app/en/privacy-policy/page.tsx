export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/privacy-policy',
    languages: {
      fr: 'https://consolex1.com/politique-de-confidentialite',
      en: 'https://consolex1.com/en/privacy-policy',
    },
  },
  title: 'Privacy policy',
  description: 'Privacy policy for consolex1, describing data handling and user privacy protections.',
  keywords: ['privacy policy', 'personal data', 'GDPR', 'consolex1'],
  openGraph: {
    title: 'consolex1 privacy policy',
    description: 'Privacy policy for consolex1, describing data handling and user privacy protections.',
    url: 'https://consolex1.com/en/privacy-policy',
    images: ['/avatar.png'],
  },
};

export default function EnPrivacyPolicyPage() {
  return (
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Privacy policy</h1>
        <p>How consolex1 handles data and protects user privacy.</p>
      </div>
      <div className="max-w-190 [&_h2]:mt-[2.4rem] [&_h2]:mb-[.7rem] [&_h2]:text-[1.3rem] [&_p]:mb-[.9rem] [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline-offset-[3px]" data-reveal>
        <h2>Personal data</h2>
        <p>consolex1 does not collect sensitive personal data directly through the showcase site.</p>
        <p>Data shared through Discord is managed by Discord and covered by their privacy terms.</p>

        <h2>No resale</h2>
        <p>We commit not to sell, rent, or monetize users’ personal data.</p>
        <p>Collected information is used only to operate the service and maintain security.</p>

        <h2>Cookies and tracking</h2>
        <p>The site may use cookies to improve experience and remember browsing preferences.</p>
        <p>Cookies are not used for profiling or selling personal information.</p>
        <p>We use Google Analytics only with your consent via the cookie banner; you can choose to anonymize your IP address.</p>

        <h2>Security and audits</h2>
        <p>Administrative and automated checks monitor hosted services for abuse.</p>
        <p>These audits do not aim to collect credentials or secrets, nor to copy or steal code.</p>
        <p>They are solely intended to detect abusive use and protect the platform and users.</p>
      </div>
    </section>
  );
}