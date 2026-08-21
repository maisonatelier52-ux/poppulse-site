import { notFound, redirect } from "next/navigation";
import { getPostBySlug } from "@/lib/data";
export default function LegacyPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  redirect(`/${post.category}/${post.slug}`);
}
