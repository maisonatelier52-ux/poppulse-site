import { getAllPosts, getCategoryBySlug, getAuthorBySlug, formatDate } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { photo } from "@/lib/images";
import SectionContainedSticky from "@/components/SectionContainedSticky";

export default function LatestNewsSection() {
  const posts = getAllPosts().slice(0, 7);
  return (
    <section data-contained-sticky-section className="latest-mag-section">
      <div className="wrap">
        <div className="latest-mag-layout">
          <div>
            <div className="latest-heading"><span>Latest News</span></div>
            <div className="latest-mag-list">
              {posts.map((post) => {
                const category = getCategoryBySlug(post.category);
                const author = getAuthorBySlug(post.author);
                return (
                  <article className="latest-mag-item" key={post.slug}>
                    <Link href={`/${post.category}/${post.slug}`} className="latest-mag-media">
                      <Image src={photo(post.image, 420, 260)} alt={post.title} width={420} height={260} />
                    </Link>
                    <div className="latest-mag-copy">
                      <Link href={`/${post.category}/${post.slug}`}><h3>{post.title}</h3></Link>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className="mag-meta"><span>{formatDate(post.date)}</span><span>By {author.name}</span><span className="latest-category">{category?.name}</span></div>
                    </div>
                  </article>
                );
              })}
            </div>
            
          </div>
          <aside className="latest-upgrade latest-upgrade--sticky">
            <SectionContainedSticky top={92}>
              <div>
                <h3>Upgrade to <span>PopPulse+</span> today and take advantage of these fantastic updates!</h3>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </SectionContainedSticky>
          </aside>
        </div>
      </div>
    </section>
  );
}
