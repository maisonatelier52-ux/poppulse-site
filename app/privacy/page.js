export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Legal</span>
          <h1 className="page-header-title">Privacy Policy</h1>
          <p className="page-header-copy">Last updated September 2026.</p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="static-content">
            <p>
              PopPulse is currently a static, private preview. The site does not offer user
              accounts and its contact page does not collect or transmit
              personal information.
            </p>
            <h2>Information we collect</h2>
            <ul>
              <li>No contact-form messages are collected.</li>
              <li>No advertising or analytics trackers have been added by PopPulse.</li>
            </ul>
            <h2>How we use it</h2>
            <p>
              The hosting provider may process standard technical information needed to
              serve and secure the site. This policy will be updated before analytics,
              advertising, analytics or a working contact form is introduced.
            </p>
            <h2>Your rights</h2>
            <p>
              Because PopPulse does not currently collect personal information through the
              site, there is no account record or contact submission to access or delete.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
