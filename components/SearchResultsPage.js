"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { searchPosts, getCategoryBySlug, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchPosts(query) : [];

  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--brick)" }}>Search</span>
          <h1 className="page-header-title">
            {query ? `Results for “${query}”` : "Search PopPulse"}
          </h1>
          <p className="page-header-copy">
            Use the search icon in the header to find posts by headline, summary or topic.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap search-results-wrap" style={{ maxWidth: 860 }}>
          {query && results.length === 0 && <p className="search-empty">Nothing matched that search.</p>}
          {results.map((post) => {
            const category = getCategoryBySlug(post.category);
            return (
              <Link href={`/${post.category}/${post.slug}`} key={post.slug} className="search-result-row">
                <div className="search-result-media">
                  <Image src={photo(post.image, 200, 200)} alt={post.imageAlt || ""} width={84} height={84} />
                </div>
                <div>
                  <span className="tag" style={{ color: category?.tint }}>{category?.name}</span>
                  <h3 className="article-card-title" style={{ fontSize: 18, margin: "6px 0 4px" }}>{post.title}</h3>
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
