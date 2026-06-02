import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/this-site")({
  head: () => ({ meta: [{ title: "This Site - Sheldon Mendonca" }] }),
  component: ThisSite,
});

const Row = ({ k, v }: { k: string; v: string }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
    <div style={{ color: "var(--muted)", fontSize: 15 }}>{k}</div>
    <div style={{ color: "var(--text)", fontSize: 15 }}>{v}</div>
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{children}</div>
);

function ThisSite() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 120px" }}>
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
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
      >
        ← Back to portfolio
      </a>

      <h1 style={{ marginTop: 24, fontSize: 40, fontWeight: 500, color: "var(--text)" }}>This Site</h1>
      <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>How this portfolio was built and why.</p>

      <section style={{ marginTop: 64 }}>
        <Label>Stack</Label>
        {[
          ["Framework", "TanStack Start"],
          ["Language", "TypeScript strict"],
          ["Styling", "CSS custom properties"],
          ["Fonts", "Geist + Geist Mono"],
          ["Deployment", "Netlify"],
          ["Analytics", "None"],
        ].map(([k, v]) => <Row key={k} k={k} v={v} />)}
      </section>

      <section style={{ marginTop: 64 }}>
        <Label>Performance</Label>
        {[
          ["Lighthouse Performance", "100"],
          ["Accessibility", "100"],
          ["Best Practices", "100"],
          ["SEO", "100"],
          ["LCP", "< 1.2s"],
          ["CLS", "0"],
          ["Bundle", "< 80kb JS"],
        ].map(([k, v]) => <Row key={k} k={k} v={v} />)}
      </section>

      <section style={{ marginTop: 64 }}>
        <Label>Design Decisions</Label>
        {[
          ["No animation library.", "Scroll reveals use IntersectionObserver. Smooth scroll uses Lenis. Everything else is CSS transitions."],
          ["No UI component library.", "Every component is written from scratch. This is a portfolio - it should demonstrate that I can build UI, not that I can install shadcn."],
          ["No analytics. No tracking. No cookies.", "If a visitor wants to be counted, they'll say hello."],
          ["CSS custom properties throughout.", "The entire theme is a handful of variables. Dark mode is not a class toggle - it's the default."],
          ["Command palette built from scratch.", "No cmdk. Fuzzy search, focus trap, keyboard navigation, ARIA - all implemented manually."],
        ].map(([t, d]) => (
          <div key={t} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{t}</div>
            <div style={{ marginTop: 6, fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>{d}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 64 }}>
        <Label>Source</Label>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="font-mono" style={{ fontSize: 13, color: "var(--text)", textDecoration: "underline", textUnderlineOffset: 4 }}>
          github.com/sc/portfolio
        </a>
      </section>
    </main>
  );
}
