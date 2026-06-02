import { useScramble } from "@/hooks/use-scramble";
import { useReveal } from "@/hooks/use-reveal";
import InteractiveGrid from "./InteractiveGrid";

const DotGrid = () => (
  <svg
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      maskImage: "radial-gradient(ellipse at 50% 30%, #000 0%, transparent 75%)",
      WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 0%, transparent 75%)",
    }}
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.18)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export function Hero() {
  const name = useScramble("Sheldon Mendonca", 1000);
  const ref = useReveal<HTMLDivElement>();
  return (
    <section style={{ position: "relative", paddingTop: 200, paddingBottom: 120, isolation: "isolate" }}>
      {/* <DotGrid /> */}
      <InteractiveGrid />
      <div ref={ref} className="container-x relative" style={{ zIndex: 2 }}>
        <div className="grid hero-grid" style={{ gridTemplateColumns: "minmax(0,3fr) minmax(0,2fr)", gap: 80, alignItems: "start" }}>
          <div>
            <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Frontend Engineer
            </div>
            <h1
              className="reveal hero-name"
              style={{
                marginTop: 24,
                fontSize: "clamp(56px, 9vw, 96px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--text)",
              }}
            >
              {name}
            </h1>
            <p
              className="reveal"
              style={{ marginTop: 40, fontSize: 18, color: "var(--muted)", lineHeight: 1.5, maxWidth: 520 }}
            >
              I build frontend systems that stay fast<br />
              as products, teams and codebases grow.
            </p>
            <div className="reveal" style={{ marginTop: 40 }}>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ fontSize: 15, color: "var(--text)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                View Work →
              </a>
            </div>
          </div>

          <div className="reveal font-mono hero-meta" style={{ textAlign: "right", fontSize: 13 }}>
            {[
              { label: "Status", values: ["Available for work"] },
              { label: "Based in", values: ["India"] },
              { label: "Focus", values: ["React Architecture", "Performance", "Accessibility", "Developer Experience"] },
            ].map((g) => (
              <div key={g.label} style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: "var(--subtle)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{g.label}</div>
                <div style={{ marginTop: 8, color: "var(--muted)", display: "flex", flexDirection: "column", gap: 4 }}>
                  {g.values.map((v) => <div key={v}>{v}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
