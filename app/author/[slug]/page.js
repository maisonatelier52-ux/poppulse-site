import { notFound } from "next/navigation";
import Image from "next/image";
import { authors, getAuthorBySlug, getPostsByAuthor } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const author = getAuthorBySlug(params.slug);
  return { title: author ? `${author.name} — PopPulse` : "PopPulse" };
}

export default function AuthorPage({ params }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(params.slug);

  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <div className="author-hero">
            <div className="author-hero-avatar">
              <Image src={author.avatar} alt={author.name} width={108} height={108} />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--brick)" }}>
                {author.role} · {author.city}
              </span>
              <h1 className="page-header-title" style={{ margin: "8px 0 10px" }}>
                {author.name}
              </h1>
              <p className="page-header-copy">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">Articles by {author.name.split(" ")[0]}</h2>
          </div>
          {posts.length === 0 ? (
            <p className="search-empty">No published stories yet.</p>
          ) : (
            <div className="article-grid article-grid--3">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
