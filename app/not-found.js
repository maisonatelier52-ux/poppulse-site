import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section">
        <div className="wrap static-content">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>404</span>
          <h1>This page could not be found</h1>
          <p>The post may have moved, or the address may be incomplete.</p>
          <p><Link href="/" className="btn btn-primary">Return to the blog</Link></p>
        </div>
      </section>
    </main>
  );
}
