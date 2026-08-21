import Link from "next/link";
import Image from "next/image";
import { getAuthorBySlug, getCategoryBySlug, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";

export default function ArticleCard({ post, variant = "grid" }) {
  const category = getCategoryBySlug(post.category);
  const author = getAuthorBySlug(post.author);
  const isRow = variant === "row";
  const isWide = variant === "wide";

  return (
    <article className={`article-card${isRow ? " article-card--row" : ""}${isWide ? " article-card--wide" : ""}`}>
      <Link href={`/${post.category}/${post.slug}`} className="article-card-media">
        <Image
          src={photo(post.image, isRow ? 200 : isWide ? 500 : 700, isRow ? 200 : isWide ? 340 : 520)}
          alt={post.title}
          width={isRow ? 96 : isWide ? 220 : 700}
          height={isRow ? 96 : isWide ? 150 : 520}
        />
      </Link>
      <div>
        <span className="tag" style={{ color: category?.tint }}>
          {category?.name}
        </span>
        <Link href={`/${post.category}/${post.slug}`}>
          <h3 className="article-card-title">{post.title}</h3>
        </Link>
        {!isRow && <p className="article-card-excerpt">{post.excerpt}</p>}
        <div className="meta-row">
          <Link href={`/author/${author.slug}`}>{author.name}</Link>
          <span className="dot">—</span>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </article>
  );
}
