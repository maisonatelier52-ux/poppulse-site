import Link from "next/link";
import Image from "next/image";
import { getCategoryBySlug, getPostsByCategory, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";
import NewsletterBox from "@/components/NewsletterBox";
import SectionContainedSticky from "@/components/SectionContainedSticky";

function Meta({ post }) {
  const author = getAuthorBySlug(post.author);
  return <div className="mag-meta"><span>2 years ago</span><span>By <b>{author?.name || "Clara Quick"}</b></span></div>;
}

function SmallCard({ post, overlay = false }) {
  return (
    <article className={`mag-small-card${overlay ? " mag-small-card--overlay" : ""}`}>
      <Link href={`/${post.category}/${post.slug}`} className="mag-small-media">
        <Image src={photo(post.image, 700, 430)} alt={post.title} width={700} height={430} />
      
      </Link>
      <Link href={`/${post.category}/${post.slug}`}><h3 className="mag-small-title">{post.title}</h3></Link>
      <Meta post={post} />
    </article>
  );
}

function FeatureCard({ post, badge }) {
  const category = getCategoryBySlug(post.category);
  return (
    <article className="mag-feature">
      <Link href={`/${post.category}/${post.slug}`} className="mag-feature-media">
        <Image src={photo(post.image, 1200, 720)} alt={post.title} width={1200} height={720} />
        <span className="tag-badge">{badge || category?.name}</span>
      </Link>
      <Link href={`/${post.category}/${post.slug}`}><h3 className="mag-feature-title">{post.title}</h3></Link>
      <p className="mag-feature-excerpt">{post.excerpt}</p>
      <Meta post={post} />
    </article>
  );
}

export default function CategoryBlock({ slug, variant = "feature", showAd = false }) {
  const category = getCategoryBySlug(slug);
  const posts = getPostsByCategory(slug);
  if (!posts.length) return null;

  const isTravel = slug === "sports";
  const isFashion = slug === "technology";

  return (
    <section data-contained-sticky-section className={`mag-section mag-section--${variant} mag-section--${slug}${isTravel ? " mag-section--travel" : ""}`}>
      <div className="wrap">
        <div className="mag-section-heading">
          <span className="boxed-heading">{category?.name}</span>
        </div>

        {isTravel ? (
          <div className="travel-section-layout">
            <aside className="travel-sticky-column">
              <SectionContainedSticky top={92}>
                <NewsletterBox />
              </SectionContainedSticky>
            </aside>
            <div className="travel-section-content">
              <div className="mag-four-grid">
                {posts.slice(0, 4).map((post) => <SmallCard key={post.slug} post={post} />)}
              </div>
              <div className="travel-secondary-grid">
                {posts.slice(4, 6).map((post) => <SmallCard key={post.slug} post={post} />)}
              </div>
              {showAd && (
                <div className="mag-ad">
                  <span>- Advertisement -</span>
                  <div><strong>POPCULT</strong><b>•</b></div>
                </div>
              )}
            </div>
          </div>
        ) : isFashion ? (
          <div className="fashion-feature-layout">
            <FeatureCard post={posts[0]} badge="" />
            <div className="fashion-side-card">
              <SmallCard post={posts.find((p) => p.slug === "y2k-fashion-is-back") || posts[1]} overlay />
              <SmallCard post={posts.find((p) => p.slug === "throwback-y2k-runway-return") || posts[2]} />
            </div>
          </div>
        ) : (
          <div className="mag-feature-layout">
            <FeatureCard post={posts[0]} />
            <div className="mag-side-cards">
              {posts.slice(1, 3).map((post) => <SmallCard key={post.slug} post={post} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
