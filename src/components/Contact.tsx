import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x" style={{ textAlign: "center" }}>
        <h2 className="reveal" style={{ fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--text)" }}>
          Let's build something.
        </h2>
        <p className="reveal" style={{ marginTop: 24, fontSize: 18, color: "var(--muted)" }}>Open to software engineering roles.</p>
        <div className="reveal" style={{ marginTop: 40 }}>
          <a
            href="mailto:sheldonmendoncawork123@gmail.com"
            className="font-mono"
            style={{ fontSize: 24, color: "var(--text)" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            sheldonmendoncawork123@gmail.com
          </a>
        </div>
        <div className="reveal font-mono" style={{ marginTop: 40, display: "flex", gap: 32, justifyContent: "center", fontSize: 13, color: "var(--muted)" }}>
          {[
            { l: "GitHub", h: "https://github.com" },
            { l: "LinkedIn", h: "https://linkedin.com" },
            { l: "Twitter", h: "https://twitter.com" },
          ].map((x) => (
            <a key={x.l} href={x.h} target="_blank" rel="noreferrer"
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
              {x.l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
