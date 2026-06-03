import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { getAllArticles } from "@/lib/content";

export const articles = getAllArticles();

export function Writing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="writing" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Writing</div>
        <h2 className="reveal" style={{ marginTop: 24, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>Writing</h2>
        <p className="reveal" style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>
          Thoughts on engineering, frontend architecture, performance, systems design, and building products.
        </p>
        <div style={{ marginTop: 64 }}>
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to="/writing/$slug"
              params={{ slug: a.slug }}
              className="reveal group writing-row"
              style={{
                padding: "24px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div className="writing-row-main">
                <div className="article-title" style={{ fontSize: 15, color: "var(--text)", transition: "color 0.2s" }}>{a.title}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>{a.description}</div>
              </div>
             <div className="font-mono writing-row-meta" style={{ fontSize: 13, color: "var(--subtle)" }}>
                <time>{a.date}</time>
                <span className="writing-meta-sep"> • </span>
                <span>{a.readingTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 24 }}>
          <Link to="/writing" style={{ fontSize: 13, color: "var(--muted)" }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            View all writing →
          </Link>
        </div>
      </div>
      <style>{`
        a:hover .article-title { color: var(--accent); text-decoration: underline; text-underline-offset: 4px; }
      `}</style>
    </section>
  );
}
