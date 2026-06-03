import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllArticles, type Article } from "@/lib/content";

export const Route = createFileRoute("/writing/")({
  head: () => ({ meta: [{ title: "Writing - Sheldon Mendonca" }] }),
  loader: (): { articles: Article[] } => ({ articles: getAllArticles() }),
  component: WritingIndex,
});

function WritingIndex() {
  const { articles } = Route.useLoaderData();
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
      <div className="font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
        Writing
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 500, color: "var(--text)", letterSpacing: "-0.02em" }}>All Writing</h1>
      <div style={{ marginTop: 64 }}>
        {articles.map((a: Article, i: number) => (
          <Link
            key={a.slug}
            to="/writing/$slug"
            params={{ slug: a.slug }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              padding: "24px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--border)",
              alignItems: "baseline",
            }}
          >
            <div>
              <div style={{ fontSize: 15, color: "var(--text)" }}>{a.title}</div>
              <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>{a.description}</div>
            </div>
            <div className="font-mono" style={{ fontSize: 13, color: "var(--subtle)", display: "flex", gap: 12 }}>
              <time>{a.date}</time>
              <span>{a.readingTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
