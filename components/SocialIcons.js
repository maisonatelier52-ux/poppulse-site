const items = [
  {
    key: "twitter",
    label: "Twitter",
    src: "/icons/twitter.webp",
  },
 
  {
    key: "instagram",
    label: "Instagram",
    src: "/icons/instagram.webp",
  },
  {
    key: "stack",
    label: "Substack",
    src: "/icons/substack.webp",
  },
  {
    key: "medium",
    label: "Medium",
    src: "/icons/medium.webp",
  },
];

export default function SocialIcons({
  className = "social-icon-row",
  links = false,
}) {
  return (
    <div className={className} aria-label="Social media links">
      {items.map((item) =>
        links ? (
          <a
            key={item.key}
            href="#"
            aria-label={item.label}
            title={item.label}
            className={`social-icon social-icon--${item.key}`}
          >
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
            />
          </a>
        ) : (
          <span
            key={item.key}
            className={`social-icon social-icon--${item.key}`}
            aria-label={item.label}
            title={item.label}
          >
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
            />
          </span>
        )
      )}
    </div>
  );
}