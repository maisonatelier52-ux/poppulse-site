import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { posts, categories, getPostBySlug, getAuthorBySlug, getCategoryBySlug, getRelatedPosts, formatDate } from "@/lib/data";
import { photo } from "@/lib/images";
import ArticleCard from "@/components/ArticleCard";
import ArticleSidebar from "@/components/ArticleSidebar";
import StickyShare from "@/components/StickyShare";

export function generateStaticParams() {
  return posts.map((p) => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return { title: post ? `${post.title} — PopPulse` : "PopPulse" };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post || post.category !== params.category) notFound();
  const author = getAuthorBySlug(post.author);
  const category = getCategoryBySlug(post.category);
  const related = getRelatedPosts(post).slice(0, 2);
  const inlineImages = post.content.length >= 3 ? [photo(`${post.image}-inline-1`, 900, 560), photo(`${post.image}-inline-2`, 900, 560)] : [];

  return (
    <main className="article-page">
      <div className="wrap article-layout">
        <article className="article-main">
          <StickyShare />
          <header className="article-heading">
            <Link href={`/${category.slug}`} className="article-kicker">{category.name}</Link>
            <h1>{post.title}</h1>
            <p className="article-dek">{post.excerpt}</p>
            <div className="article-byline">
              <Image src={author.avatar} alt="" width={28} height={28} />
              <span><b>{author.name}</b> · {author.role} · {formatDate(post.date)}</span>
              <span className="article-updated">Last updated: December 5, 2024 5:38 am</span>
            </div>
           
          </header>

          <div className="article-hero"><Image src={photo(post.image, 1200, 680)} alt={post.title} width={1200} height={680} priority /></div>

          <div className="article-content-grid">
            <div className="article-copy">
              <p className="article-lead">{post.content[0]}</p>
              <div className="article-content-columns">
             
                <p>{post.content[1] || post.content[0]}</p>
              </div>
              {inlineImages[0] && <Image className="article-inline-image" src={inlineImages[0]} alt="" width={900} height={560} />}
              <h2 id="spotlight">Lorem Ipsum Dolor</h2>
              <p>{post.content[2] || post.content[1] || post.content[0]}</p>
              {inlineImages[1] && <Image className="article-inline-image" src={inlineImages[1]} alt="" width={900} height={560} />}
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<cite>— Lorem Ipsum</cite></blockquote>
              {post.content.slice(3).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              <div className="more-buzz"><h3>Lorem Ipsum</h3>{getRelatedPosts(post).slice(0, 4).map((p) => <Link href={`/${p.category}/${p.slug}`} key={p.slug}>＋ {p.title}</Link>)}</div>
              <h2 id="next">Lorem Ipsum?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            </div>
          </div>

          <div className="article-share-bottom"><b>⌁ Lorem Ipsum</b><span>𝕏</span><span>F</span><span>↗</span></div>
          <section className="comment-section">
            <h3>◯ Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet. Required fields are marked <b>*</b></p>
            <textarea placeholder="Lorem ipsum" />
            <div className="comment-fields"><input placeholder="Lorem ipsum" /><input placeholder="Lorem ipsum" /><input placeholder="Lorem ipsum" /></div>
            <label><input type="checkbox" /> Lorem ipsum dolor sit amet.</label>
            <button className="comment-submit">Lorem Ipsum</button>
          </section>
        </article>
        <ArticleSidebar current={post} />
      </div>

      <section className="related-news"><div className="wrap"><h3>RELATED NEWS</h3><div className="related-news-grid">{related.map((p) => <ArticleCard key={p.slug} post={p} variant="grid" />)}</div></div></section>
    </main>
  );
}
