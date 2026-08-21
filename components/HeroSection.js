import Link from "next/link";
import Image from "next/image";
import { getAuthorBySlug, getCategoryBySlug, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";

export default function HeroSection({ post }) {
  const category = getCategoryBySlug(post.category);
  const author = getAuthorBySlug(post.author);

  return (
    <section className="hero-centered">
      <div className="wrap">
        <Link href={`/${post.category}/${post.slug}`} className="hero-centered-media">
          <Image
            src={photo(post.image, 1400, 700)}
            alt={post.title}
            width={1400}
            height={700}
            priority
          />
        </Link>
        <div className="hero-centered-body">
          <span className="tag" style={{ color: category?.tint, justifyContent: "center" }}>
            {category?.name}
          </span>
          <Link href={`/${post.category}/${post.slug}`}>
            <h1 className="hero-centered-title">{post.title}</h1>
          </Link>
          <p className="hero-centered-excerpt">{post.excerpt}</p>
          <div className="meta-row" style={{ justifyContent: "center" }}>
            <span>By</span>
            <Link href={`/author/${author.slug}`} style={{ fontWeight: 700, color: "var(--ink)" }}>
              {author.name}
            </Link>
            <span className="dot">—</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
