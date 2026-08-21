import CategoryBlock from "@/components/CategoryBlock";
import LatestNewsSection from "@/components/LatestNewsSection";
import { CelebrityBuzzSection, SocialProofStrip } from "@/components/CelebrityLeadSection";
import CelebrityLeadSection from "@/components/CelebrityLeadSection";
import GalaStripSection from "@/components/GalaStripSection";

export default function HomePage() {
  return (
    <main className="mag-home reference-home">
      <CelebrityLeadSection />
      <GalaStripSection />
      <CelebrityBuzzSection />
      <SocialProofStrip />
      <CategoryBlock slug="technology" variant="feature" />
      <CategoryBlock slug="sports" variant="grid" showAd />
      <CategoryBlock slug="entertainment" variant="feature" />
      <LatestNewsSection />
    </main>
  );
}
