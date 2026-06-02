import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles } from "@/components/Writing";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.article.title} - Sheldon Mendonca` },
      { name: "description", content: loaderData.article.desc },
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
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 1, background: "transparent", zIndex: 100 }}>
        <div style={{ height: "100%", width: `${progress * 100}%`, background: "#eeeeee" }} />
      </div>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 120px" }}>
        <Link to="/" className="font-mono" style={{ fontSize: 13, color: "var(--muted)" }}>← Back</Link>
        <div className="font-mono" style={{ fontSize: 13, color: "var(--subtle)", marginTop: 24 }}>{article.date}</div>
        <h1 style={{ marginTop: 16, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>{article.title}</h1>
        <p style={{ marginTop: 24, fontSize: 18, color: "var(--muted)", lineHeight: 1.6 }}>{article.desc}</p>

        <article style={{ marginTop: 64, fontSize: 17, color: "var(--muted)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 24 }}>
          <p>
            Most performance discussions get framed as engineering concerns - caches, code-splitting, lazy loading. But for the
            person on the other side of the network, a slow site is just a slow product. They don't see the architecture; they
            see a spinner.
          </p>
          <p>
            Treating bundle size as a product metric changes the conversation. It moves the discussion out of the engineering
            room and into roadmap planning, where it belongs. Every kilobyte ships to a real device on a real network.
          </p>
          <p>
            The discipline is simple: budget it, measure it on every PR and treat regressions the way you'd treat a UI bug.
            What used to be invisible becomes visible - and visible problems get fixed.
          </p>
          <p>
            This is the lens I apply to most frontend work. The compiler can catch type errors and CI can catch test failures,
            but only intent catches the slow stuff.
          </p>
        </article>
      </main>
    </>
  );
}
