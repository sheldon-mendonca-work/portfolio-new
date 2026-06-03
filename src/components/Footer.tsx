type Props = { onOpenPalette: () => void };

export function Footer({ onOpenPalette }: Props) {
  return (
    <footer style={{ height: 64, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center" }}>
      <div className="container-x font-mono" style={{ fontSize: 13, color: "var(--subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 16 }}>
        <span>Sheldon Mendonca © 2026</span>
        <button
          onClick={onOpenPalette}
          aria-label="Open command palette"
          style={{
            color: "var(--subtle)",
            border: "1px solid var(--border)",
            padding: "4px 10px",
            borderRadius: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--text)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--subtle)"; }}
        >
          ⌘K
        </button>
        <span style={{ display: "none" }} className="md:inline">Built with TanStack Start and Typescript</span>
      </div>
    </footer>
  );
}
