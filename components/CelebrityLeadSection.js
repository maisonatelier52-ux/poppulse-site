import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

function MiniCard({ post, title }) {
  const author = getAuthorBySlug(post.author);
  return (
    <article className="celebrity-mini-card">
      <Link href={`/${post.category}/${post.slug}`} className="celebrity-mini-image">
        <Image src={photo(post.image, 520, 300)} alt={title || post.title} width={520} height={300} />
      </Link>
      <Link href={`/${post.category}/${post.slug}`}><h3>{title || post.title}</h3></Link>
      <div className="reference-meta"><span>2 years ago</span><span>By <b>{author?.name || "Clara Quick"}</b></span></div>
    </article>
  );
}

export default function CelebrityLeadSection() {
  const all = getAllPosts();
  const hero = all.find((p) => p.slug === "red-carpet-showdown-this-weekend") || all[0];
  const mini = [
    all.find((p) => p.slug === "runway-to-real-life-fashion"),
    all.find((p) => p.slug === "street-style-trends-this-season"),
    all.find((p) => p.slug === "casting-surprises-of-the-season"),
  ].filter(Boolean);
  const author = getAuthorBySlug(hero.author);

  const latestItems = [
    ["runway-to-real-life-fashion", "Lorem Ipsum Dolor Sit Amet", "Technology"],
    ["folk-tales-reimagined-culture", "Consectetur Adipiscing Elit Sed Do", "World"],
    ["hollywoods-rising-stars-to-watch", "Tempor Incididunt Ut Labore Et Dolore", "Entertainment"],
    ["y2k-fashion-is-back", "Magna Aliqua Lorem Ipsum", "Technology"],
    ["red-carpet-showdown-this-weekend", "Duis Aute Irure Dolor In Reprehenderit", "Business"],
     ["hollywoods-rising-stars-to-watch", "Tempor Incididunt Ut Labore Et Dolore", "Entertainment"],
      ["runway-to-real-life-fashion", "Lorem Ipsum Dolor Sit Amet", "Technology"],
  ];

  return (
    <section className="reference-first-section">
      <div className="wrap">
        <div className="reference-lead-grid">
          <article className="reference-hero-card">
            <Link href={`/${hero.category}/${hero.slug}`} className="reference-hero-image">
              <Image src={photo("pop-11", 1100, 650)} alt={hero.title} width={1100} height={650} priority />
              <span className="reference-tag">Business</span>
            </Link>
            <Link href={`/${hero.category}/${hero.slug}`}>
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="reference-meta reference-meta-center"><span>2 years ago</span><span>By <b>{author?.name || "Clara Quick"}</b></span></div>
          </article>

          <aside className="reference-latest-column">
            <div className="reference-section-title"><span>Latest News</span></div>
            {latestItems.map(([slug, title, category]) => {
              const item = all.find((p) => p.slug === slug);
              if (!item) return null;
              return (
                <Link href={`/${item.category}/${item.slug}`} className="reference-latest-item" key={slug}>
                  <h3>{title}</h3>
                  <div className="reference-meta"><span>2 years ago</span><span className="reference-red">{category}</span></div>
                </Link>
              );
            })}
          
          </aside>
        </div>

        <div className="reference-mini-grid">
          {mini.map((post) => <MiniCard post={post} key={post.slug} />)}
        </div>
      </div>
    </section>
  );
}

export function CelebrityBuzzSection() {
  const all = getAllPosts();
  const posts = [
    all.find((p) => p.slug === "hollywoods-rising-stars-to-watch"),
    all.find((p) => p.slug === "red-carpet-showdown-this-weekend"),
    all.find((p) => p.slug === "celebrity-secrets-that-surprised-fans"),
    all.find((p) => p.slug === "y2k-fashion-is-back"),
  ].filter(Boolean);
  return (
    <section className="reference-category-section">
      <div className="wrap">
        <div className="reference-section-title"><span>Business</span></div>
        <div className="reference-four-grid">
          {posts.map((post) => <MiniCard post={post} key={post.slug} title={
            "Lorem Ipsum Dolor Sit Amet"
          } />)}
        </div>
      </div>
    </section>
  );
}

export function SocialProofStrip() {
  const metrics = [
    ["▶", "1.3M", "Subscribers", "Subscribe"],
    ["G≡", "3.5M", "Followers", "Follow"],
    ["M", "4.9M", "Followers", "Follow"],
    ["F", "45K", "Followers", "Follow"],
  ];
  return (
    <section className="reference-social-proof">
      <div className="wrap">
        <div className="reference-social-proof-grid">
          {metrics.map(([icon, value, label, action]) => (
            <div className="reference-proof-item" key={value}>
              <span className="reference-proof-icon">{icon}</span>
              <span><b>{value}</b> {label}</span>
              <a href="#">{action}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
