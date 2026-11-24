export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/terms',
    languages: {
      fr: 'https://consolex1.com/cgu',
      en: 'https://consolex1.com/en/terms',
    },
  },
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
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Terms of use</h1>
        <p>The terms and conditions for using the consolex1 service.</p>
      </div>
      <div className="max-w-190 [&_h2]:mt-[2.4rem] [&_h2]:mb-[.7rem] [&_h2]:text-[1.3rem] [&_p]:mb-[.9rem] [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline-offset-[3px]" data-reveal>
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

        <h2>Resource-intensive games and servers</h2>
        <p>To preserve available resources for all our users, <strong>hosting BombSquad servers is not permitted on our free plans</strong>.</p>
        <p>BombSquad can generate significant bandwidth and server resource usage, which is incompatible with the limits and objectives of our free plans.</p>
        <p>This restriction applies to <strong>any BombSquad server</strong>, regardless of the number of players or the configuration used.</p>
        <p>Once paid plans become available, they may be used for this type of server, provided that our Terms of Service and applicable resource limits are respected.</p>

        <h2>Association plans</h2>
        <p>consolex1 is intended as an association-style project. This status is not yet official.</p>
        <p>Paid plans are displayed for future availability. They are currently not available for purchase.</p>

        <h2>Security reviews</h2>
        <p>Manual and automated checks may be performed by the administration to verify hosted services.</p>
        <p>These checks are intended to ensure security and compliance only.</p>
        <p>They do not collect passwords, private keys, or user authentication data.</p>
        <p>For security reasons, we strongly recommend that you do not store passwords or API keys in plain text.</p>
        <p>Use a .env file! Automated tests utilize AI, any password or API key read by the AI could potentially end up on the internet!</p>
        <p>The .env and config.json files are NEVER read by our team or by automated tests.</p>

        <h2>Liability</h2>
        <p>consolex1 cannot guarantee uninterrupted availability.</p>
        <p>Users remain responsible for their own data backups and protection.</p>
      </div>
    </section>
  );
}
