import Link from "next/link";
import Image from "next/image";
import { posts, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

export default function ArticleSidebar({ current }) {
  const popular = posts.filter((p) => p.slug !== current.slug).slice(0, 5);
  const author = getAuthorBySlug(current.author);
  return (
    <aside className="article-sidebar">
      <section className="article-side-box">
        <h3 className="article-side-title">Popular</h3>
        <div className="popular-list">
          {popular.map((p) => (
            <Link href={`/${p.category}/${p.slug}`} className="popular-item" key={p.slug}>
              <Image src={photo(p.image, 180, 110)} alt="" width={180} height={110} />
              <div>
                <span className="popular-tag">{p.category.replace("-", " ")}</span>
                <strong>{p.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

     

      <div className="article-ad">
        <small>— Advertisement —</small>
        <div className="article-ad-art"><b>POPCULT<span>c.</span></b><div className="article-ad-person">✦</div></div>
      </div>

      <section className="article-side-box article-author-box">
        <h3 className="article-side-title">About the Author</h3>
        <Link href={`/author/${author.slug}`} className="article-author-card">
          <Image src={author.avatar} alt={author.name} width={64} height={64} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
            <p>{author.bio}</p>
            <em>View Profile →</em>
          </div>
        </Link>
      </section>
    </aside>
  );
}
