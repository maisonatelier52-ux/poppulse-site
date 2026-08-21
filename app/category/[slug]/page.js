import { redirect } from "next/navigation";
export default function LegacyCategory({ params }) { redirect(`/${params.slug}`); }
