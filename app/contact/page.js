import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Contact &amp; corrections</span>
          <h1 className="page-header-title">Correction standards and contact status</h1>
          <p className="page-header-copy">
            A verified contact route will be published before public launch. When it is
            available, correction requests should identify the post, the passage at issue
            and a reliable source supporting the change.
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
