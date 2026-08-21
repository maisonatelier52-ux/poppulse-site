import Link from "next/link";
import Image from "next/image";

export default function AuthorCard({ author }) {
  return (
    <Link href={`/author/${author.slug}`} className="author-card">
      <div className="author-avatar">
        <Image src={author.avatar} alt={author.name} width={240} height={240} />
      </div>
      <div className="author-name">{author.name}</div>
      <div className="author-meta">{author.role} · {author.city}</div>
    </Link>
  );
}
