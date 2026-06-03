import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getNoteBySlug } from "@/lib/content";
export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNoteBySlug(params.slug);
    if (!note) throw notFound();
    return { note };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.note.title} - Notes` },
          { name: "description", content: loaderData.note.title },
        ]
      : [{ title: "Note" }],
  }),
  component: NotePost,
  notFoundComponent: () => (
    <div style={{ padding: 120, textAlign: "center" }}>
      <p style={{ color: "var(--muted)" }}>Note not found.</p>
      <Link to="/notes" style={{ color: "var(--text)" }}>← Notes</Link>
    </div>
  ),
});
function NotePost() {
  const { note } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="reading-progress">
        <div style={{ width: `${progress * 100}%` }} />
      </div>
      <main
        className="writing-page"
        style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 120px" }}
      >
        <Link to="/notes" className="font-mono" style={{ fontSize: 13, color: "var(--muted)" }}>
          ← Notes
        </Link>
        <h1
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            lineHeight: 1.3,
          }}
        >
          {note.title}
        </h1>
        <div
          className="font-mono"
          style={{ marginTop: 16, fontSize: 13, color: "var(--subtle)" }}
        >
          <time>{note.date}</time>
        </div>
        <div style={{ margin: "40px 0", borderTop: "1px solid var(--border)" }} />
        <article
          style={{
            fontSize: 17,
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: 680,
            whiteSpace: "pre-wrap",
          }}
        >
          {note.body}
        </article>
        <div style={{ marginTop: 64 }}>
          <Link to="/notes" className="font-mono" style={{ fontSize: 13, color: "var(--muted)" }}>
            ← Back to Notes
          </Link>
        </div>
      </main>
    </>
  );
}