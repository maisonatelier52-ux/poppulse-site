export const metadata = { title: "About the blog" };

export default function AboutPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>About PopPulse</span>
          <h1 className="page-header-title">Useful ideas with a visible source trail</h1>
          <p className="page-header-copy">
            PopPulse is an independent blog publishing practical explainers and essays
            about technology, money, culture and public life.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="static-content">
            <p>
              PopPulse is designed for readers who want to understand a subject quickly
              without losing the evidence behind it. Posts explain the central idea,
              why it matters and where readers can inspect the reporting, research or
              public records used.
            </p>
            <h2>What we cover</h2>
            <p>
              The blog covers Technology, Business, Politics, Sports, World, Finance and
              Entertainment. Most posts are explainers, reading guides and evidence-led
              commentary rather than live or breaking-news coverage.
            </p>
            <h2 id="standards">Sourcing policy</h2>
            <p>
              Factual claims are attributed to named sources wherever possible. Posts
              distinguish evidence from interpretation, label important uncertainty and
              link to the material used. Headlines should not claim more than the cited
              evidence supports.
            </p>
            <h2>Corrections and updates</h2>
            <p>
              An updated date records the latest check; it does not turn an older post into
              live coverage. Material corrections should explain what changed. A verified
              contact route will be added before public launch.
            </p>
            <h2>Independence and transparency</h2>
            <p>
              PopPulse does not currently run advertising, paid memberships or sponsored
              posts. If that changes, commercial relationships will be labeled and kept
              separate from editorial judgments.
            </p>
            <h2>Illustrations</h2>
            <p>
              Article images are original AI-assisted editorial illustrations created for
              PopPulse. They are interpretive visual companions—not documentary photographs,
              eyewitness evidence or representations of a source—and are labeled on every post.
            </p>
            <h2>Get in touch</h2>
            <p>
              The <a href="/contact" style={{ textDecoration: "underline" }}>contact page</a>{" "}
              records the current contact status and will list a verified address before
              the blog is made public.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
