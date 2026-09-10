export const metadata = {
  title: 'Privacy policy',
  description: 'Privacy policy for Consolex1, describing data handling and user privacy protections.',
  keywords: ['privacy policy', 'personal data', 'GDPR', 'consolex1'],
  openGraph: {
    title: 'Consolex1 privacy policy',
    description: 'Privacy policy for Consolex1, describing data handling and user privacy protections.',
    url: 'https://consolex1.com/en/privacy-policy',
    images: ['/avatar.png'],
  },
};

export default function EnPrivacyPolicyPage() {
  return (
    <section className="section legal-page">
      <div className="section-header">
        <h1>Privacy policy</h1>
        <p>How Consolex1 handles data and protects user privacy.</p>
      </div>
      <div className="legal-content">
        <h2>Personal data</h2>
        <p>Consolex1 does not collect sensitive personal data directly through the showcase site.</p>
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
