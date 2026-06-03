import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticleBySlug } from "@/lib/content";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.article.title} - Sheldon Mendonca` },
      { name: "description", content: loaderData.article.description },
    ] : [{ title: "Writing" }],
  }),
  component: WritingPost,
  notFoundComponent: () => (
    <div style={{ padding: 120, textAlign: "center" }}>
      <p style={{ color: "var(--muted)" }}>Article not found.</p>
      <Link to="/" style={{ color: "var(--text)" }}>← Home</Link>
    </div>
  ),
});

function WritingPost() {
  const { article } = Route.useLoaderData();
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

      <main className="writing-page" style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 120px" }}>
        <Link to="/writing" className="font-mono" style={{ fontSize: 13, color: "var(--muted)" }}>← Writing</Link>
        <h1 style={{ marginTop: 24, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>{article.title}</h1>
        <div className="font-mono" style={{ marginTop: 16, fontSize: 13, color: "var(--subtle)", display: "flex", gap: 16 }}>
          <time>{article.date}</time>
          <span>{article.readingTime} min read</span>
        </div>
        <div style={{ margin: "40px 0", borderTop: "1px solid var(--border)" }} />

        <article style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8, maxWidth: 680, whiteSpace: "pre-wrap" }}>
          {article.body}
        </article>
      </main>
    </>
  );
}
