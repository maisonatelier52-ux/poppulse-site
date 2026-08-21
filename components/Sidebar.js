import Link from "next/link";
import { getAllPosts, getCategoryBySlug, formatDate } from "@/lib/data";

export default function Sidebar() {
  const latest = getAllPosts().slice(0, 5);

  return (
    <aside>
      <div className="sidebar-widget">
        <div className="text-list-title">Latest News</div>
        <div className="text-list">
          {latest.map((post) => {
            const category = getCategoryBySlug(post.category);
            return (
              <Link href={`/${post.category}/${post.slug}`} key={post.slug} className="text-list-item">
                <h3 className="text-list-item-title">{post.title}</h3>
                <span className="meta-row">
                  {formatDate(post.date)}
                  <span className="dot">—</span>
                  <span className="tag" style={{ color: category?.tint }}>
                    {category?.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sidebar-widget">
        <a href="#" className="ad-banner">
          <span className="ad-banner-label">Advertisement</span>
          <div className="ad-banner-box">
            Pop<span className="accent">Pulse</span>
          </div>
        </a>
      </div>
    </aside>
  );
}
