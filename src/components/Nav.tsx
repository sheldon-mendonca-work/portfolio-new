import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Work", id: "work" },
  { label: "Principles", id: "principles" },
  { label: "Notes", id: "notes" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        height: 56,
        background: "rgba(8,8,8,0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-x flex items-center justify-between" style={{ height: 56 }}>
        <Link to="/" className="font-mono" style={{ fontSize: 15, color: "var(--text)" }}>SC</Link>

        <div className="hidden md:flex items-center" style={{ gap: 24 }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center" style={{ gap: 8, marginLeft: 8 }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: 9999, background: "#22c55e", display: "inline-block" }} />
            <span className="font-mono" style={{ fontSize: 11, color: "var(--muted)" }}>Available</span>
          </div>
        </div>

        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--text)", fontSize: 18 }}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mobile-nav-dropdown" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
          <div className="container-x flex flex-col">
            {links.map((l) => (
              <button key={l.id} onClick={() => { setOpen(false); setTimeout(() => scrollTo(l.id), 50); }} style={{ textAlign: "left" }}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
