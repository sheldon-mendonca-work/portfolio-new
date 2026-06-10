import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const EMAIL = "sheldonmendoncawork123@gmail.com";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x" style={{ textAlign: "center" }}>
        <h2 className="reveal" style={{ fontSize: "clamp(30px, 6vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--text)" }}>
          Always interested in well-engineered systems.
        </h2>
        <p className="reveal" style={{ marginTop: 24, fontSize: 18, color: "var(--muted)" }}>
If you're building something interesting, I'd like to hear about it.</p>
        <div className="reveal" style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <a
            href={`mailto:${EMAIL}`}
            className="footer-mail-to"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            {EMAIL}
          </a>
          <button
            onClick={copy}
            aria-label="Copy email"
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--subtle)",
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "4px 8px",
              cursor: "pointer",
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--subtle)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="reveal font-mono" style={{ marginTop: 40, display: "flex", gap: 32, justifyContent: "center", fontSize: 13, color: "var(--muted)" }}>
          {[
            { l: "GitHub", h: "https://github.com/sheldon-mendonca-work" },
            { l: "LinkedIn", h: "https://linkedin.com/in/sheldon-mendonca" },
            // { l: "Twitter", h: "https://twitter.com" },
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
