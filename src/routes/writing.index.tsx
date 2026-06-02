import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing/")({
  head: () => ({ meta: [{ title: "Writing - Sheldon Mendonca" }] }),
  component: WritingIndex,
});

function WritingIndex() {
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
      >
        ← Back to portfolio
      </a>
      <div className="font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
        Writing
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 500, color: "var(--text)" }}>All Writing</h1>
      <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>Coming soon.</p>
    </main>
  );
}
