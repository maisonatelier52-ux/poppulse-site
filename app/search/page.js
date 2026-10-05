import { Suspense } from "react";
import SearchResultsPage from "@/components/SearchResultsPage";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <Suspense fallback={<main><div className="page-header"><div className="wrap"><h1 className="page-header-title">Search PopPulse</h1></div></div></main>}>
      <SearchResultsPage />
    </Suspense>
  );
}
