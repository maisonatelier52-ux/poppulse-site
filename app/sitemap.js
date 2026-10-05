import { authors, categories, posts } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticPages = ["", "/about", "/authors", "/contact", "/privacy"];
  const categoryPages = categories.map((category) => `/${category.slug}`);
  const authorPages = authors.map((author) => `/author/${author.slug}`);
  const postPages = posts.map((post) => `/${post.category}/${post.slug}`);

  return [...staticPages, ...categoryPages, ...authorPages, ...postPages].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-30"),
    changeFrequency: path === "" ? "weekly" : "monthly",
  }));
}
