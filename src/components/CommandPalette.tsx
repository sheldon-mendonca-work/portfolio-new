import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

type Item =
  | { id: string; icon: string; label: string; hint?: string; kind: "section" | "route" | "link"; target: string }
  | { id: string; icon: string; label: string; hint?: string; kind: "theme"; value: "dark" | "light" | "system" }
  | { id: string; icon: string; label: string; hint?: string; kind: "copy"; value: string };

const ITEMS: Item[] = [
  { id: "work", icon: "↓", label: "Work", kind: "section", target: "work" },
  { id: "projects", icon: "↓", label: "Projects", kind: "section", target: "projects" },
  { id: "principles", icon: "↓", label: "Principles", kind: "section", target: "principles" },
  { id: "notes", icon: "↓", label: "Notes", kind: "section", target: "notes" },
  { id: "writing", icon: "↓", label: "Writing", kind: "section", target: "writing" },
  { id: "resume", icon: "→", label: "Resume", hint: "/resume", kind: "route", target: "/resume" },
  { id: "now", icon: "→", label: "Now", hint: "/now", kind: "route", target: "/now" },
  { id: "this-site", icon: "→", label: "This Site", hint: "/this-site", kind: "route", target: "/this-site" },
  { id: "github", icon: "↗", label: "GitHub", kind: "link", target: "https://github.com/sheldon-mendonca-work" },
  { id: "linkedin", icon: "↗", label: "LinkedIn", kind: "link", target: "https://linkedin.com" },
  { id: "contact", icon: "✉", label: "Contact", kind: "section", target: "contact" },
  { id: "copy-email", icon: "✉", label: "Copy Email", hint: "clipboard", kind: "copy", value: "sheldonmendoncawork123@gmail.com" },
  { id: "theme-dark", icon: "◐", label: "Dark Mode", hint: "theme", kind: "theme", value: "dark" },
  { id: "theme-light", icon: "○", label: "Light Mode", hint: "theme", kind: "theme", value: "light" },
  { id: "theme-system", icon: "◑", label: "System Mode", hint: "theme", kind: "theme", value: "system" },
];

function sectionFor(kind: Item["kind"]): string {
  if (kind === "section" || kind === "route") return "Navigation";
  if (kind === "theme") return "Theme";
  if (kind === "copy") return "Actions";
  return "Links";
}

function fuzzyMatch(query: string, text: string): { ok: boolean; positions: number[] } {
  if (!query) return { ok: true, positions: [] };
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  const positions: number[] = [];
  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      positions.push(ti);
      qi++;
    }
  }
  return { ok: qi === q.length, positions };
}

function Highlight({ text, positions }: { text: string; positions: number[] }) {
  if (!positions.length) return <>{text}</>;
  const set = new Set(positions);
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} style={{ color: set.has(i) ? "var(--text)" : "inherit" }}>{ch}</span>
      ))}
    </>
  );
}

type Props = { open: boolean; onClose: () => void };

export function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return ITEMS.map((item) => {
      const m = fuzzyMatch(query, item.label);
      return { item, match: m };
    }).filter((x) => x.match.ok);
  }, [query]);

  useEffect(() => { setActive(0); }, [query, open]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setTimeout(() => inputRef.current?.focus(), 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  const execute = (item: Item) => {
    switch (item.kind) {
      case "section":
        onClose();
        setTimeout(() => document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" }), 60);
        break;
      case "route":
        onClose();
        navigate({ to: item.target });
        break;
      case "link":
        onClose();
        window.open(item.target, "_blank", "noreferrer");
        break;
      case "theme":
        localStorage.setItem("portfolio-theme", item.value);
        document.documentElement.setAttribute(
          "data-theme",
          item.value === "system"
            ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            : item.value
        );
        onClose();
        break;
      case "copy":
        navigator.clipboard.writeText(item.value);
        onClose();
        break;
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(filtered.length - 1, a + 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
      if (e.key === "Enter") {
        e.preventDefault();
        const sel = filtered[active];
        if (sel) execute(sel.item);
      }
      if (e.key === "Tab") {
        const root = modalRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>('input, button, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  if (!open) return null;

  let lastSection = "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "15vh",
      }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(480px, calc(100% - 32px))",
          background: "var(--surface)",
          border: "1px solid var(--border-hover)",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command or search..."
          aria-label="Command input"
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid var(--border)",
            padding: "16px 20px",
            color: "var(--text)",
            fontSize: 15,
            fontFamily: "var(--font-sans)",
          }}
        />
        <div role="listbox" style={{ maxHeight: 360, overflowY: "auto", padding: "8px 0" }}>
          {filtered.length === 0 && (
            <div style={{ padding: "10px 20px", fontSize: 14, color: "var(--subtle)" }}>No results</div>
          )}
          {filtered.map(({ item, match }, i) => {
            const isActive = i === active;
            const section = sectionFor(item.kind);
            const showHeader = section !== lastSection;
            lastSection = section;
            return (
              <div key={item.id}>
                {showHeader && (
                  <div className="font-mono" style={{ padding: "8px 20px 4px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)" }}>
                    {section}
                  </div>
                )}
                <button
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => execute(item)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "10px 20px",
                    background: isActive ? "var(--border)" : "transparent",
                    color: isActive ? "var(--text)" : "var(--muted)",
                    fontSize: 14,
                    textAlign: "left",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="font-mono" style={{ fontSize: 13, color: "var(--subtle)", width: 14 }}>{item.icon}</span>
                  <span style={{ flex: 1 }}><Highlight text={item.label} positions={match.positions} /></span>
                  {item.hint && <span className="font-mono" style={{ fontSize: 11, color: "var(--subtle)" }}>{item.hint}</span>}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
