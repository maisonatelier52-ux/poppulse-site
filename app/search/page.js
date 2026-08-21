import Link from "next/link";
import Image from "next/image";
import { searchPosts, getCategoryBySlug, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";

export const metadata = { title: "Search — PopPulse" };

export default function SearchPage({ searchParams }) {
  const q = searchParams?.q || "";
  const results = q ? searchPosts(q) : [];

  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Search</span>
          <h1 className="page-header-title">
            {q ? `Results for “${q}”` : "Search PopPulse"}
          </h1>
          <p className="page-header-copy">
            Use the search icon in the header for live results, or share a link to this
            page with a query string, e.g. <code>/search?q=technology</code>.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap search-results-wrap" style={{ maxWidth: 860 }}>
          {q && results.length === 0 && (
            <p className="search-empty">Nothing matched that search.</p>
          )}
          {results.map((post) => {
            const cat = getCategoryBySlug(post.category);
            return (
              <Link href={`/${post.category}/${post.slug}`} key={post.slug} className="search-result-row">
                <div className="search-result-media">
                  <Image src={photo(post.image, 200, 200)} alt="" width={84} height={84} />
                </div>
                <div>
                  <span className="tag" style={{ color: cat?.tint }}>{cat?.name}</span>
                  <h3 className="article-card-title" style={{ fontSize: 18, margin: "6px 0 4px" }}>
                    {post.title}
                  </h3>
                  <span className="meta-row">{formatDate(post.date)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
