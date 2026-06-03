import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "Resume - Sheldon Mendonca" }] }),
  component: Resume,
});

function Resume() {
  return (
    <div style={{ background: "#ffffff", color: "#111", minHeight: "100vh", fontFamily: "-apple-system, system-ui, sans-serif" }}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; }
          .resume-root { padding: 0 !important; font-size: 12px !important; }
        }
      `}</style>
      <div className="resume-root" style={{ maxWidth: 800, margin: "0 auto", padding: "64px 40px" }}>
        <a
          href="/"
          className="no-print"
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
        <div className="no-print" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
          <a href="/resume/Sheldon_Mendonca_Resume_2026.pdf"
  download style={{ padding: "8px 14px", border: "1px solid #111", background: "#fff", fontSize: 13, cursor: "pointer" }}>
            Download PDF
          </a>
        </div>

        <header>
          <h1 style={{ fontSize: 28, margin: 0 }}>Sheldon Mendonca</h1>
          <div style={{ fontSize: 14, color: "#555", marginTop: 4 }}>
            Software Development Engineer
          </div>
          <div style={{ fontSize: 11, color: "#555", marginTop: 12 }}>
            sheldonmendoncawork123@gmail.com · github.com/sheldon-mendonca-work ·
            linkedin.com/in/sheldon-mendonca
          </div>
        </header>

        <section style={{ marginTop: 32 }}>
          <h2
            style={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderBottom: "1px solid #111",
              paddingBottom: 4,
            }}
          >
            Experience
          </h2>
          {[
            {
              c: "HireHunch / JusRecruit",
              y: "2024 - 2026",
              r: "Software Development Engineer",
              b: [
                "Led delivery of the JusRecruit MVP in 3 months as the primary frontend owner.",
                "Architected and shipped 10+ production features including white-labeling and real-time streaming capabilities.",
                "Owned deployments, observability, analytics and mentored junior engineers across the team.",
              ],
            },
            {
              c: "Taal Tech India Pvt. Ltd.",
              y: "2018 - 2022",
              r: "Senior Stress Engineer",
              b: [
                "Delivered complex aerospace structural engineering projects under strict quality requirements.",
                "Mentored engineers and collaborated across multiple stakeholder groups.",
                "Contributed to internal automation tooling, leading to a transition into software engineering.",
              ],
            },
          ].map((e) => (
            <div key={e.c} style={{ marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <strong>{e.r} · {e.c}</strong>
                <span style={{ color: "#555" }}>{e.y}</span>
              </div>
              <ul style={{ margin: "6px 0 0 18px", padding: 0, fontSize: 14, color: "#333" }}>
                {e.b.map((x) => <li key={x} style={{ marginTop: 2 }}>{x}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: "1px solid #111", paddingBottom: 4 }}>Skills</h2>
          <p style={{ fontSize: 14, color: "#333", marginTop: 8 }}>
            React, TypeScript (strict), Next.js, TanStack, Vite, Node, CSS architecture, accessibility (WCAG 2.2), performance (LCP/INP/CLS), design systems, testing (Vitest, Playwright).
          </p>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: "1px solid #111", paddingBottom: 4 }}>Education</h2>
          <div style={{ marginTop: 8, fontSize: 14 }}>
            <strong>B.Tech, Mechanical Engineering</strong> · Manipal Institute Of Technology - <span style={{ color: "#555" }}>2014 - 2018</span>
          </div>
        </section>
      </div>
    </div>
  );
}
