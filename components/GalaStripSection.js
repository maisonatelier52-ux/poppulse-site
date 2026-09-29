import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAuthorBySlug } from "@/lib/data";
import { photo } from "@/lib/images";

export default function GalaStripSection({ posts }) {
  const cards = posts || getAllPosts().slice(0, 3);

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
                  <div className="gala-card-meta"><span>3 hrs ago</span><span>By <b>{author?.name || "Clara Quick"}</b></span></div>
                </article>
              );
            })}

          </div>
        
        </div>
      </div>
    </section>
  );
}
