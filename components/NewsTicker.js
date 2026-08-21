import { getAllPosts } from "@/lib/data";

export default function NewsTicker() {
  const headlines = getAllPosts()
    .slice(0, 6)
    .map((p) => p.title);
  const loop = [...headlines, ...headlines];

  return (
    <div className="news-ticker">
      <span className="ticker-label">What&rsquo;s Hot:</span>
      <div className="ticker-viewport">
        <div className="ticker-track">
          {loop.map((title, i) => (
            <span key={i}>{title}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
