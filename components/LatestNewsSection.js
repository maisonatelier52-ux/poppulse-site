import { getAllPosts, getCategoryBySlug, formatDate } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { photo } from "@/lib/images";

export default function LatestNewsSection({ posts }) {
  const items = posts || getAllPosts().slice(0, 7);
  return (
    <section data-contained-sticky-section className="latest-mag-section">
      <div className="wrap">
        <div className="latest-mag-layout latest-mag-layout--single">
          <div>
            <div className="latest-heading"><span>Latest Posts</span></div>
            <div className="latest-mag-list">
              {items.map((post) => {
                const category = getCategoryBySlug(post.category);
                return (
                  <article className="latest-mag-item" key={post.slug}>
                    <Link href={`/${post.category}/${post.slug}`} className="latest-mag-media">
                      <Image src={photo(post.image, 420, 260)} alt={post.imageAlt || post.title} width={420} height={260} />
                    </Link>
                    <div className="latest-mag-copy">
                      <Link href={`/${post.category}/${post.slug}`}><h3>{post.title}</h3></Link>
                      <p>{post.excerpt}</p>
                      <div className="mag-meta"><span>{formatDate(post.date)}</span><span className="latest-category">{category?.name}</span></div>
                    </div>
                  </article>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
