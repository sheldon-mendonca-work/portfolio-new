import { useReveal } from "@/hooks/use-reveal";

const principles = [
  {
    title: "You can't fully understand frontend without backend.",
    desc: "Learning how data is structured and served changed how I think about state management. Most frontend complexity is just a symptom of what's happening underneath.",
  },
  {
    title: "Frontend without a system gets ugly fast.",
    desc: "Most people treat frontend as assembly. I treat it as architecture - which is why I studied backend system design.",
  },
  {
    title: "Shipping broken code is lying to your users.",
    desc: "Users feel broken experiences. That's enough reason to delay a release and own the fix.",
  },
  {
    title: "If you can't explain it, it shouldn't merge.",
    desc: "Over-engineered state, 20-prop components, utilities nobody dares touch - these are clarity failures before they're technical ones.",
  },
  {
    title: "The fastest code is the code you never ship.",
    desc: "Every dependency has a maintenance cost and a bundle cost. The best abstraction is often the one you didn't write.",
  },
  {
    title: "Principles evolve. That's the point.",
    desc: "I used to believe in moving fast and fixing bugs later. Production taught me otherwise. The best engineers I know hold their beliefs firmly and update them often.",
  },
];

export function Principles() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="principles" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div
          className="reveal font-mono"
          style={{
            fontSize: 11,
            color: "var(--subtle)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Principles
        </div>
        <h2
          className="reveal"
          style={{
            marginTop: 24,
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Engineering Beliefs
        </h2>
        <p className="reveal" style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>
          How I think about the craft.
        </p>
        <div style={{ marginTop: 64 }}>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: 24,
                padding: "24px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="font-mono" style={{ fontSize: 11, color: "var(--subtle)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{p.title}</div>
                <div style={{ marginTop: 8, fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
