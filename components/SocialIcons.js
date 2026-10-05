import Image from "next/image";

const items = [
  { key: "twitter", label: "Twitter", src: "/icons/twitter.webp" },
  { key: "instagram", label: "Instagram", src: "/icons/instagram.webp" },
  { key: "stack", label: "Substack", src: "/icons/substack.webp" },
  { key: "medium", label: "Medium", src: "/icons/medium.webp" },
];

export default function SocialIcons({ className = "social-icon-row" }) {
  return (
    <div className={className} aria-label="Social platforms">
      {items.map((item) => (
        <span
          key={item.key}
          className={`social-icon social-icon--${item.key}`}
          aria-label={item.label}
          title={item.label}
        >
          <Image src={item.src} alt="" width={20} height={20} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
