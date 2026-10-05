import Link from "next/link";
import Image from "next/image";
import { formatDate, getAllPosts, getCategoryBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

function MiniCard({ post, title }) {
  return (
    <article className="celebrity-mini-card">
      <Link href={`/${post.category}/${post.slug}`} className="celebrity-mini-image">
        <Image src={photo(post.image, 520, 300)} alt={post.imageAlt || title || post.title} width={520} height={300} />
      </Link>
      <Link href={`/${post.category}/${post.slug}`}><h3>{title || post.title}</h3></Link>
      <div className="reference-meta"><span>{formatDate(post.date)}</span></div>
    </article>
  );
}

export default function CelebrityLeadSection({ hero, sidebarPosts }) {
  const all = getAllPosts();
  const heroPost = hero || all[0];
  const category = getCategoryBySlug(heroPost.category);
  const items = sidebarPosts || all.slice(1, 6);

  return (
    <section className="reference-first-section">
      <div className="wrap">
        <div className="reference-lead-grid">
          <article className="reference-hero-card">
            <Link href={`/${heroPost.category}/${heroPost.slug}`} className="reference-hero-image">
              <Image src={photo(heroPost.image, 1100, 650)} alt={heroPost.imageAlt || heroPost.title} width={1100} height={650} priority />
              <span className="reference-tag">{category?.name}</span>
            </Link>
            <Link href={`/${heroPost.category}/${heroPost.slug}`}>
              <h1>{heroPost.title}</h1>
            </Link>
            <p>{heroPost.excerpt}</p>
            <div className="reference-meta reference-meta-center"><span>{formatDate(heroPost.date)}</span></div>
          </article>

          <aside className="reference-latest-column">
            <div className="reference-section-title"><span>Latest Posts</span></div>
            {items.map((item) => (
              <Link href={`/${item.category}/${item.slug}`} className="reference-latest-item" key={item.slug}>
                <h3>{item.title}</h3>
                <div className="reference-meta"><span className="reference-red">{getCategoryBySlug(item.category)?.name}</span></div>
              </Link>
            ))}
          
          </aside>
        </div>

     
      </div>
    </section>
  );
}

export function CelebrityBuzzSection({ posts }) {
  const items = posts || getAllPosts().slice(0, 4);
  return (
    <section className="reference-category-section">
      <div className="wrap">
        <div className="reference-section-title"><span>Editor&rsquo;s Picks</span></div>
        <div className="reference-four-grid">
          {items.map((post) => <MiniCard post={post} key={post.slug} />)}
        </div>
      </div>
    </section>
  );
}
