import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now - Sheldon Mendonca" },
      { name: "description", content: "What I'm doing now." },
    ],
  }),
  component: NowPage,
});

const sections = [
  {
    heading: "Work",
    items: [
      "Open to SDE1 or SDE2 roles in front-end, back-end or full-stack development.",
      "Open to product companies, startups Series A and above, and select remote opportunities",
    ],
  },
  {
    heading: "Building",
    items: [
      "This portfolio - treating it as a real frontend project with architecture decisions, performance budgets, and accessibility standards",
    ],
  },
  {
    heading: "Learning",
    items: [
      "Going deeper on React compiler internals and the upcoming concurrent features",
      "Revisiting system design fundamentals with a frontend lens",
    ],
  },
  {
    heading: "Reading",
    items: [
      "A Philosophy of Software Design - John Ousterhout",
      "Staff Engineer - Will Larson",
    ],
  },
];

function NowPage() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px" }}>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginBottom: 40,
          fontSize: 13,
          fontFamily: "var(--font-mono)",
          color: "var(--muted)",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
      >
        ← Back to portfolio
      </a>

      <div
        className="font-mono"
        style={{
          fontSize: 11,
          color: "var(--subtle)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Now
      </div>

      <h1 style={{ fontSize: 40, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em" }}>
        What I'm doing now
      </h1>

      <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
        Updated June 2026. Inspired by{" "}
        <a
          href="https://sive.rs/nowff"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          Derek Sivers
        </a>
        .
      </p>

      {sections.map((section) => (
        <div
          key={section.heading}
          style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border)" }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: "var(--subtle)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {section.heading}
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {section.items.map((item) => (
              <li
                key={item}
                style={{
                  display: "grid",
                  gridTemplateColumns: "16px 1fr",
                  gap: 12,
                  fontSize: 15,
                  color: "var(--text)",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "var(--subtle)" }}>–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
