import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  posts,
  getPostBySlug,
  getAuthorBySlug,
  getCategoryBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/data";
import { photo } from "@/lib/images";
import ArticleCard from "@/components/ArticleCard";
import ArticleSidebar from "@/components/ArticleSidebar";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ category: post.category, slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "PopPulse" };
  const image = photo(post.image, 1200, 630);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${post.category}/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updated,
      images: [{ url: imageUrl, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post || post.category !== params.category) notFound();

  const author = getAuthorBySlug(post.author);
  const category = getCategoryBySlug(post.category);
  const related = getRelatedPosts(post).slice(0, 2);
  const postUrl = `${SITE_URL}/${post.category}/${post.slug}`;
  const image = photo(post.image, 1200, 630);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: author.name,
      url: `${SITE_URL}/author/${author.slug}`,
    },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: postUrl,
  };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="wrap article-layout">
        <article className="article-main">
          <header className="article-heading">
            <nav className="article-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href={`/${category.slug}`}>{category.name}</Link>
            </nav>
            <Link href={`/${category.slug}`} className="article-kicker">{category.name}</Link>
            <h1>{post.title}</h1>
            <p className="article-dek">{post.excerpt}</p>
            <div className="article-byline">
              <Image src={author.avatar} alt="" width={32} height={32} />
              <span>
                Prepared by <Link href={`/author/${author.slug}`}><b>{author.name}</b></Link>
                <span className="article-byline-separator"> · </span>{author.role}
              </span>
            </div>
            <div className="article-dates">
              <span>Published {formatDate(post.date)}</span>
              <span>Updated {formatDate(post.updated || post.date)}</span>
              <span>{post.readTime} min read</span>
            </div>
          </header>

          <figure className="article-hero">
            <Image src={photo(post.image, 1200, 680)} alt={post.imageAlt || post.title} width={1200} height={680} priority />
            <figcaption>Original AI-assisted editorial illustration created for PopPulse.</figcaption>
          </figure>

          <div className="article-content-grid">
            <div className="article-copy">
              {post.takeaways?.length > 0 && (
                <aside className="article-takeaways" aria-labelledby="key-takeaways">
                  <p className="article-box-label">At a glance</p>
                  <h2 id="key-takeaways">What you need to know</h2>
                  <ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
                </aside>
              )}

              {post.content.map((paragraph, index) => (
                <p className={index === 0 ? "article-lead" : undefined} key={paragraph}>{paragraph}</p>
              ))}

              {post.whyItMatters && (
                <section className="article-context-block">
                  <h2>Why this matters</h2>
                  <p>{post.whyItMatters}</p>
                </section>
              )}

              {post.whatNext && (
                <section className="article-context-block">
                  <h2>What to consider next</h2>
                  <p>{post.whatNext}</p>
                </section>
              )}

              {post.sources?.length > 0 && (
                <section className="article-sources" aria-labelledby="sources-heading">
                  <p className="article-box-label">Evidence and context</p>
                  <h2 id="sources-heading">Sources and further reading</h2>
                  <p className="article-sources-intro">
                    This post was prepared from the reporting, research and records linked below so readers can inspect the evidence directly.
                  </p>
                  <ul>
                    {post.sources.map((item) => (
                      <li key={item.url}>
                        <a href={item.url} target="_blank" rel="noreferrer">{item.name}</a>
                        {item.note && <span>{item.note}</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="article-transparency">
                <b>How we write</b>
                <span>Sources are linked, uncertainty is labeled and interpretation is kept separate from established facts.</span>
                <Link href="/about#standards">Read our sourcing policy</Link>
              </div>

              <div className="more-buzz">
                <h3>More from {category.name}</h3>
                {getRelatedPosts(post).slice(0, 4).map((item) => (
                  <Link href={`/${item.category}/${item.slug}`} key={item.slug}>{item.title}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="article-share-bottom">
            <b>Share this post</b>
          </div>
        </article>
        <ArticleSidebar current={post} />
      </div>

      <section className="related-news">
        <div className="wrap">
          <h3>RELATED POSTS</h3>
          <div className="related-news-grid">{related.map((item) => <ArticleCard key={item.slug} post={item} variant="grid" />)}</div>
        </div>
      </section>
    </main>
  );
}
