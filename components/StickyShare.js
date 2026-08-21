import SocialIcons from "./SocialIcons";

export default function StickyShare() {
  return (
    <div className="sticky-share" aria-label="Share this article">
      <span className="sticky-share-label">SHARE</span>
      <SocialIcons className="sticky-social-icons" links />
    </div>
  );
}
