import { getAllPosts, getPostsByCategory } from "@/lib/data";
import CategoryBlock from "@/components/CategoryBlock";
import LatestNewsSection from "@/components/LatestNewsSection";
import { CelebrityBuzzSection } from "@/components/CelebrityLeadSection";
import CelebrityLeadSection from "@/components/CelebrityLeadSection";
import GalaStripSection from "@/components/GalaStripSection";

export default function HomePage() {
  // Every section below draws from this single pool, and each post is marked
  // "used" the moment it's assigned — so nothing on the home page repeats,
  // no matter how many sections it passes through.
  const usedSlugs = new Set();
  const take = (pool, count) => {
    const picked = pool.filter((p) => !usedSlugs.has(p.slug)).slice(0, count);
    picked.forEach((p) => usedSlugs.add(p.slug));
    return picked;
  };

  const all = getAllPosts();

  // Category-specific blocks claim their posts first, so they always get
  // genuine top picks from their own category rather than the leftovers.
  const techPosts = take(getPostsByCategory("technology"), 3);
  const sportsPosts = take(getPostsByCategory("sports"), 6);
  const entPosts = take(getPostsByCategory("entertainment"), 3);

  // The general sections then fill in from whatever's left across all categories.
  const [heroPost] = take(all, 1);
  const sidebarPosts = take(all, 5);
  const galaPosts = take(all, 3);
  const buzzPosts = take(all, 4);
  const latestPosts = take(all, 7);

  return (
    <main className="mag-home reference-home">
      <CelebrityLeadSection hero={heroPost} sidebarPosts={sidebarPosts} />
      <GalaStripSection posts={galaPosts} />
      <CelebrityBuzzSection posts={buzzPosts} />
      <CategoryBlock slug="technology" variant="feature" posts={techPosts} />
      <CategoryBlock slug="sports" variant="grid" posts={sportsPosts} />
      <CategoryBlock slug="entertainment" variant="feature" posts={entPosts} />
      <LatestNewsSection posts={latestPosts} />
    </main>
  );
}
