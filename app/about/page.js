export const metadata = { title: "About — PopPulse" };

export default function AboutPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>About PopPulse</span>
          <h1 className="page-header-title">Culture, unfiltered</h1>
          <p className="page-header-copy">
            PopPulse is a digital magazine covering technology, business, politics, sports,
            world news, finance and entertainment.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="static-content">
            <p>
              PopPulse started with a simple idea: the internet doesn't need another
              outlet chasing every headline first — it needs one that actually gets the
              story right, with a bit of personality. We cover the premieres, the red
              carpets and the trends, but we take the time to find the angle nobody else
              bothered to chase down.
            </p>
            <h2>What we cover</h2>
            <p>
              Our desks are organised around seven beats — Technology, Business, Politics, Sports,
              World, Finance and Entertainment — each led by a writer who follows the
              subject closely and brings a clear editorial point of view.
            </p>
            <h2>How we're funded</h2>
            <p>
              PopPulse is funded by advertising and reader subscriptions. We label
              sponsored content clearly, and our editorial desk never trades coverage
              for a partnership.
            </p>
            <h2>Get in touch</h2>
            <p>
              Story tips, corrections and general enquiries are all welcome — see our{" "}
              <a href="/contact" style={{ textDecoration: "underline" }}>contact page</a>{" "}
              for the right address to use.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
