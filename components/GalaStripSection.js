import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

const fallbackCards = [
  { title: "Lorem Ipsum Dolor Sit Amet", slug: "runway-to-real-life-fashion", image: "pop-03" },
  { title: "Consectetur Adipiscing Elit Sed Do", slug: "folk-tales-reimagined-culture", image: "pop-07" },
  { title: "Celebrity Cameos: Surprise Appearances That Stole the Show", slug: "casting-surprises-of-the-season", image: "pop-02" },
];

export default function GalaStripSection() {
  const posts = getAllPosts();
  const cards = fallbackCards.map((item) => {
    const post = posts.find((p) => p.slug === item.slug);
    return { ...item, author: post?.author || "ana-ferreira" };
  });

  return (
    <section className="gala-strip-section">
      <div className="wrap gala-strip-wrap">
       
        <div className="gala-rule" />
        <div className="gala-grid">
          <div className="gala-card-grid">
            {cards.map((card) => {
              const author = getAuthorBySlug(card.author);
              return (
                <article className="gala-card" key={card.slug}>
                  <Link href={`/${card.category}/${card.slug}`} className="gala-card-media">
                    <Image src={photo(card.image, 520, 300)} alt={card.title} width={520} height={300} />
                  </Link>
                  <Link href={`/${card.category}/${card.slug}`}><h3>{card.title}</h3></Link>
                  <div className="gala-card-meta"><span>2 years ago</span><span>By <b>{author?.name || "Clara Quick"}</b></span></div>
                </article>
              );
            })}
          </div>
        
        </div>
      </div>
    </section>
  );
}
