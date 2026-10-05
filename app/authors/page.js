import { authors } from "@/lib/data";
import AuthorCard from "@/components/AuthorCard";

export const metadata = { title: "Editorial identity" };

export default function AuthorsPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>PopPulse</span>
          <h1 className="page-header-title">Editorial identity</h1>
          <p className="page-header-copy">
            All current posts are published under one editorial identity. Named contributors
            will appear only when their identity and role can be verified.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="author-grid">
            {authors.map((author) => (
              <AuthorCard key={author.slug} author={author} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
