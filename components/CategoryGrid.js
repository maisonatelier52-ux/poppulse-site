import Link from "next/link";
import { getCategoryBySlug, getPostsByCategory } from "@/lib/data";
import ArticleCard from "./ArticleCard";

export default function CategoryGrid({ slug, count = 4 }) {
  const category = getCategoryBySlug(slug);
  const posts = getPostsByCategory(slug).slice(0, count);
  if (!posts.length) return null;

  return (
    <section className="section section--tight">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
          <span className="boxed-heading">{category?.name}</span>
          <Link href={`/${slug}`} className="section-link" style={{ color: "var(--brick)" }}>
            Show More
          </Link>
        </div>
        <div className="article-grid article-grid--4">
          {posts.map((post) => (
            <ArticleCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
