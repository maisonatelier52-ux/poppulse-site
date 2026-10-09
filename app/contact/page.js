import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Get in touch</span>
          <h1 className="page-header-title">Contact</h1>
          <p className="page-header-copy">
Story tips, corrections, subscriptions or something else — pick the right desk below and we'll route it accordingly.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="layout-with-sidebar">
            <ContactForm />
            <aside>
              <div className="sidebar-widget">
                <div className="widget-title">Correction checklist</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  Article URL<br />Exact passage<br />Supporting evidence
                </p>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">Response standard</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  Factual claims should be checked against the source trail and updated
                  transparently when a material error is confirmed.
                </p>
              </div>
              <div className="sidebar-widget">
                <div className="widget-title">Current status</div>
                <p style={{ fontSize: 14.5, color: "var(--slate)" }}>
                  No form or inbox is connected, so this page does not collect or send
                  personal information.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
