export const metadata = {
  title: 'Terms',
  description: 'consolex1 terms of use describing rights, obligations, and service commitments.',
  keywords: ['terms', 'consolex1 terms', 'conditions', 'hosting service'],
  openGraph: {
    title: 'consolex1 terms',
    description: 'consolex1 terms of use describing rights, obligations, and service commitments.',
    url: 'https://consolex1.com/en/terms',
    images: ['/avatar.png'],
  },
};

export default function EnTermsPage() {
  return (
    <section className="section legal-page">
      <div className="section-header">
        <h1>Terms of use</h1>
        <p>The terms and conditions for using the consolex1 service.</p>
      </div>
      <div className="legal-content">
        <h2>Acceptance</h2>
        <p>Access and use of the service imply full acceptance of these terms.</p>

        <h2>Permitted use</h2>
        <p>The service is intended for personal projects, bots, websites and applications compatible with Pterodactyl.</p>
        <p>Use is strictly prohibited for illegal activities, spam, malware, or circumvention of protections.</p>

        <h2>Prohibited content</h2>
        <p>Cryptocurrency mining services are expressly forbidden.</p>
        <p>Applications violating an external contract or ToS, including Discord selfbots and other disallowed automations, are prohibited.</p>
        <p>Using proxies, VPNs, tunnels or mechanisms to hide connection origin or bypass third-party restrictions is banned.</p>
        <p>This includes services deployed to hide, redirect, or relay activity that violates third-party terms.</p>

        <h2>Association plans</h2>
        <p>consolex1 is intended as an association-style project. This status is not yet official.</p>
        <p>No paid services are offered until the status is formalized.</p>

        <h2>Security reviews</h2>
        <p>Manual and automated checks may be performed by the administration to verify hosted services.</p>
        <p>These checks are intended to ensure security and compliance only.</p>
        <p>They do not collect passwords, private keys, or user authentication data.</p>

        <h2>Liability</h2>
        <p>consolex1 cannot guarantee uninterrupted availability.</p>
        <p>Users remain responsible for their own data backups and protection.</p>
      </div>
    </section>
  );
}
