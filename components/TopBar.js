const metrics = [
  { icon: "▶", value: "1.3M", label: "Subscribers" },
  { icon: "▣", value: "3.5M", label: "Followers" },
  { icon: "M", value: "4.9M", label: "Followers" },
  { icon: "F", value: "45K", label: "Followers" },
];

export default function TopBar() {
  return (
    <div className="mag-topbar">
      <div className="mag-top-author">By <strong>Clara Quick</strong></div>
      <div className="mag-metrics">
        {metrics.map((m, i) => (
          <div className="mag-metric" key={m.label + i}>
            <span className="mag-metric-icon">{m.icon}</span>
            <span><strong>{m.value}</strong> {m.label}</span>
            <a href="#">{i === 0 ? "Subscribe" : "Follow"}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
