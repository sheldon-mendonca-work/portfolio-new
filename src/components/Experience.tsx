import { useReveal } from "@/hooks/use-reveal";

const entries = [
  {
    company: "HireHunch",
    years: "2024 - 2026",
    role: "Product Development Engineer",
    bullets: [
      "Led delivery of the JusRecruit MVP in 3 months as the primary frontend owner.",
      "Architected and shipped 10+ production features including white-labeling and real-time streaming capabilities.",
      "Owned deployments, observability, analytics and mentored junior engineers across the team.",
    ],
  },
  {
    company: "Taal Tech India Pvt. Ltd.",
    years: "2018 - 2022",
    role: "Senior Stress Engineer",
    bullets: [
      "Delivered complex aerospace structural engineering projects under strict quality requirements.",
      "Mentored engineers and collaborated across multiple stakeholder groups.",
      "Contributed internal automation tooling, leading to a transition into software engineering.",
    ],
  },
  {
    company: "Stripe",
    years: "2019 - 2021",
    role: "Frontend Engineer",
    bullets: [
      "Maintained the checkout SDK shipped to thousands of merchants, kept payload under 38kb gzip.",
      "Authored the team's testing guidelines and migrated 1,200 tests to Vitest.",
    ],
  },
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="work" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div
          className="reveal font-mono"
          style={{
            fontSize: 11,
            color: "var(--subtle)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 64,
          }}
        >
          Work
        </div>
        <div>
          {entries.map((e, i) => (
            <div
              key={e.company}
              className="reveal experience-row"
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 40,
                padding: "40px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div className="experience-meta">
                <div style={{ fontSize: 15, color: "var(--muted)" }}>{e.company}</div>
                <div
                  className="font-mono"
                  style={{ fontSize: 13, color: "var(--subtle)", marginTop: 8 }}
                >
                  {e.years}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 18, color: "var(--text)", fontWeight: 500 }}>{e.role}</div>
                <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  {e.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
