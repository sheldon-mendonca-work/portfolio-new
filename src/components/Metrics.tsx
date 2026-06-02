export function Metrics() {
  const items = [
    ["Lighthouse", "100"],
    ["Accessibility", "100"],
    ["LCP", "< 1.2s"],
    ["Bundle", "< 80kb"],
    ["CLS", "0"],
  ];
  return (
    <section style={{ padding: "40px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-x font-mono" style={{ fontSize: 13, color: "var(--subtle)", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", textAlign: "center" }}>
        {items.map(([k, v], i) => (
          <span key={k} style={{ display: "inline-flex", gap: 24, alignItems: "center" }}>
            <span>{k} <span style={{ color: "var(--muted)" }}>{v}</span></span>
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
