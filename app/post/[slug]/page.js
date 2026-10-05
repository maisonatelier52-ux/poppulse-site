import { notFound, redirect } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function LegacyPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  redirect(`/${post.category}/${post.slug}`);
}
