import { useReveal } from "@/hooks/use-reveal";
import { getAllNotes } from "@/lib/content";

const notes = getAllNotes();

export function Notes() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="notes" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Notes</div>
        <h2 className="reveal" style={{ marginTop: 24, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>Engineering Notes</h2>
        <p className="reveal" style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>Short observations from the work.</p>
        <div style={{ marginTop: 64 }}>
          {notes.map((n, i) => (
            <div
              key={n.slug}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 24,
                padding: "24px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <time className="font-mono" style={{ fontSize: 13, color: "var(--subtle)" }}>{n.date}</time>
              <div style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{n.body}</div>
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
