import { authors } from "@/lib/data";
import AuthorCard from "@/components/AuthorCard";

export const metadata = { title: "Authors — PopPulse" };

export default function AuthorsPage() {
  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>PopPulse</span>
          <h1 className="page-header-title">Authors</h1>
          <p className="page-header-copy">
            The writers and editors covering technology, business, politics, sports, world news,
            finance and entertainment from around the world.
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
