import { redirect } from "next/navigation";
import { categories } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function LegacyCategory({ params }) { redirect(`/${params.slug}`); }
