import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — PopPulse" };

export default function ContactPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Get in touch</span>
          <h1 className="page-header-title">Contact</h1>
          <p className="page-header-copy">
            Story tips, corrections, subscriptions or something else — pick the right
            desk below and we'll route it accordingly.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="layout-with-sidebar">
            <ContactForm />
            <aside>
              <div className="sidebar-widget">
                <div className="widget-title">Editorial</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  editors@poppulse.example<br />For tips, corrections and pitches.
                </p>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">Subscriptions</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  support@poppulse.example<br />For billing and account questions.
                </p>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">Studio</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  PopPulse Media<br />Los Angeles, CA
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
