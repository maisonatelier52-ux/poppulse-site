import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

export default function ArticleSidebar({ current }) {
  const popular = getAllPosts().filter((p) => p.slug !== current.slug).slice(0, 5);
  const author = getAuthorBySlug(current.author);
  return (
    <aside className="article-sidebar">
      <section className="article-side-box">
        <h3 className="article-side-title">Latest</h3>
        <div className="popular-list">
          {popular.map((p) => (
            <Link href={`/${p.category}/${p.slug}`} className="popular-item" key={p.slug}>
              <Image src={photo(p.image, 180, 110)} alt={p.imageAlt || ""} width={180} height={110} />
              <div>
                <span className="popular-tag">{p.category.replace("-", " ")}</span>
                <strong>{p.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

     

      <section className="article-side-box article-author-box">
        <h3 className="article-side-title">About PopPulse</h3>
        <Link href={`/author/${author.slug}`} className="article-author-card">
          <Image src={author.avatar} alt={author.name} width={64} height={64} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
            <p>{author.bio}</p>
            <em>View editorial identity →</em>
          </div>
        </Link>
      </section>
    </aside>
  );
}
