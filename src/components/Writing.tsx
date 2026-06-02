import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

export const articles = [
  { slug: "bundle-size-product-metric", title: "Why I treat bundle size as a product metric", desc: "Frontend performance is a user experience problem, not a technical one.", date: "2026.04" },
  { slug: "component-boundaries-api-design", title: "Component boundaries are API design", desc: "The props you expose are a contract. Treat them like one.", date: "2026.02" },
  { slug: "accessibility-not-a-feature-flag", title: "Accessibility is not a feature flag", desc: "Semantic HTML and focus management aren't extras - they're the baseline.", date: "2025.11" },
  { slug: "good-custom-hook", title: "What makes a good custom hook", desc: "Hooks that do one thing well are reusable. Hooks that do everything are technical debt.", date: "2025.09" },
];

export function Writing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="writing" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 64 }}>Writing</div>
        <div>
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to="/writing/$slug"
              params={{ slug: a.slug }}
              className="reveal group"
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
                <div className="article-title" style={{ fontSize: 15, color: "var(--text)", transition: "color 0.2s" }}>{a.title}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>{a.desc}</div>
              </div>
              <time className="font-mono" style={{ fontSize: 13, color: "var(--subtle)" }}>{a.date}</time>
            </Link>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 24 }}>
          <a href="/writing" style={{ fontSize: 13, color: "var(--muted)" }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            View all writing →
          </a>
        </div>
      </div>
      <style>{`
        a:hover .article-title { color: #ffffff; text-decoration: underline; text-underline-offset: 4px; }
      `}</style>
    </section>
  );
}
