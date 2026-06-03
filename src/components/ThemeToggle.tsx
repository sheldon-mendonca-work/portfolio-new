import { useTheme, type Theme } from "@/hooks/use-theme";

const icons: Record<Theme, string> = {
  dark: "◐",
  light: "○",
  system: "◑",
};

const next: Record<Theme, Theme> = {
  dark: "light",
  light: "system",
  system: "dark",
};

const labels: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(next[theme])}
      aria-label={`Current theme: ${labels[theme]}. Click to switch to ${labels[next[theme]]}.`}
      title={labels[theme]}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        gap: 6,
        fontSize: 13,
        fontFamily: "var(--font-mono)",
        color: "var(--subtle)",
        background: "none",
        border: "none",
        cursor: "pointer",
        width: '4rem',
        padding: "4px 0",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--subtle)")}
    >
      <span style={{ fontSize: 14 }}>{icons[theme]}</span>
      <span>{labels[theme]}</span>
    </button>
  );
}
