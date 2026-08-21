const items = [
  { key: "twitter", label: "Twitter", glyph: "𝕏" },
  { key: "youtube", label: "YouTube", glyph: "▶" },
  { key: "instagram", label: "Instagram", glyph: "◎" },
  { key: "stack", label: "Stack", glyph: "▱" },
  { key: "medium", label: "Medium", glyph: "M" },
];

export default function SocialIcons({ className = "social-icon-row", links = false }) {
  return (
    <div className={className} aria-label="Social media links">
      {items.map((item) => links ? (
        <a key={item.key} href="#" aria-label={item.label} title={item.label} className={`social-icon social-icon--${item.key}`}>
          <span aria-hidden="true">{item.glyph}</span>
        </a>
      ) : (
        <span key={item.key} className={`social-icon social-icon--${item.key}`} aria-label={item.label} title={item.label}>{item.glyph}</span>
      ))}
    </div>
  );
}
