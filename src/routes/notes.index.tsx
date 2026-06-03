import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllNotes, type Note } from "@/lib/content";
export const Route = createFileRoute("/notes/")({
  head: () => ({ meta: [{ title: "Notes — Siddharth Chen" }] }),
  loader: (): { notes: Note[] } => ({ notes: getAllNotes() }),
  component: NotesIndex,
});
function NotesIndex() {
  const { notes } = Route.useLoaderData();
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px" }}>
      <Link
        to="/"
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
      </Link>
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
        Notes
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em" }}>
        All Notes
      </h1>
      <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>
        Short observations on engineering, systems, learning, and career growth.
      </p>
      <div style={{ marginTop: 64 }}>
        {notes.map((n: Note, i: number) => (
          <Link
            key={n.slug}
            to="/notes/$slug"
            params={{ slug: n.slug }}
            className="writing-row"
            style={{
              padding: "24px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--border)",
            }}
          >
            <div style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.5 }}>{n.title}</div>
            <time
              className="font-mono"
              style={{ fontSize: 13, color: "var(--subtle)" }}
            >
              {n.date}
            </time>
          </Link>
        ))}
      </div>
    </main>
  );
}
