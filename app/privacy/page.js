export const metadata = { title: "Privacy — PopPulse" };

export default function PrivacyPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Legal</span>
          <h1 className="page-header-title">Privacy Policy</h1>
          <p className="page-header-copy">Last updated August 2026.</p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="static-content">
            <p>
              This is placeholder policy text for the PopPulse template. Replace it with your
              organisation's actual privacy policy before this site goes live with real
              subscribers.
            </p>
            <h2>Information we collect</h2>
            <ul>
              <li>Email address, if you subscribe to the newsletter</li>
              <li>Basic analytics on which articles are read</li>
              <li>Any information you submit through the contact form</li>
            </ul>
            <h2>How we use it</h2>
            <p>
              Email addresses are used only to send the newsletter you signed up for.
              Analytics data is aggregated and never sold to third parties.
            </p>
            <h2>Your rights</h2>
            <p>
              You can unsubscribe from the newsletter at any time using the link at the
              bottom of every email, or by writing to support@poppulse.example.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
