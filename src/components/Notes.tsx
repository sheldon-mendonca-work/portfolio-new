import { useReveal } from "@/hooks/use-reveal";

const notes = [
  ["2026.05", "Avoid useMemo until profiling shows you need it. Premature memoization obscures intent without improving performance."],
  ["2026.04", "Component boundaries are API design. The props you expose today are the constraints you live with tomorrow."],
  ["2026.03", "The fastest code is the code you never ship. Every abstraction has a carrying cost."],
  ["2026.02", "Accessibility compounds. Fix the focus order once and keyboard users benefit on every page, forever."],
  ["2026.01", "Bundle size is a UX metric. A 300kb JS payload isn't a technical problem - it's a slow experience on a real device."],
  ["2025.12", "Type the edge cases first. If you can't express the invalid states in your type system, you haven't designed the interface yet."],
];

export function Notes() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="notes" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Notes</div>
        <h2 className="reveal" style={{ marginTop: 24, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>Engineering Notes</h2>
        <p className="reveal" style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>Short observations from the work.</p>
        <div style={{ marginTop: 64 }}>
          {notes.map(([date, body], i) => (
            <div
              key={date}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 24,
                padding: "24px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <time className="font-mono" style={{ fontSize: 13, color: "var(--subtle)" }}>{date}</time>
              <div style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 24 }}>
          <a href="#" style={{ fontSize: 13, color: "var(--muted)" }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            View all notes →
          </a>
        </div>
      </div>
    </section>
  );
}
