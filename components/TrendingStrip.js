import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getCategoryBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

export default function TrendingStrip() {
  const posts = getAllPosts().slice(1, 5);

  return (
    <div className="trending-strip">
      <div className="wrap">
        <div className="trending-strip-grid">
          {posts.map((post) => {
            const category = getCategoryBySlug(post.category);
            return (
              <Link href={`/${post.category}/${post.slug}`} className="trending-strip-item" key={post.slug}>
                <div className="trending-strip-media">
                  <Image src={photo(post.image, 200, 200)} alt={post.imageAlt || post.title} width={140} height={140} />
                </div>
                <span className="tag" style={{ color: category?.tint }}>
                  {category?.name}
                </span>
                <h3 className="trending-strip-title">{post.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
