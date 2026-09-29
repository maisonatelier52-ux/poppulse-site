import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getPostsByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  return { title: category ? `${category.name} — PopPulse` : "PopPulse" };
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();
  const posts = getPostsByCategory(params.category);

  return (
    <main>
      <div className="page-header">
        <div className="wrap">
          <span className="tag" style={{ color: category.tint }}>Section</span>
          <h1 className="page-header-title">{category.name}</h1>
          <p className="page-header-copy">
            {posts.length} {posts.length === 1 ? "story" : "stories"} filed under {category.name.toLowerCase()}.
          </p>
        </div>
      </div>
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="layout-with-sidebar">
            <div>
              {posts.length === 0 ? (
                <p className="search-empty">No stories in this section yet — check back soon.</p>
              ) : (
                <div className="article-grid article-grid--2">
                  {posts.map((post) => <ArticleCard key={post.slug} post={post} />)}
                </div>
              )}
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
