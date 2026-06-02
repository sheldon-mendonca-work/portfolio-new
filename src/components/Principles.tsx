import { useReveal } from "@/hooks/use-reveal";

const principles = [
  { title: "Users experience milliseconds, not architectures.", desc: "Performance isn't a technical metric - it's a product experience. Every render cycle, every byte, every blocking resource is felt by a real person." },
  { title: "The compiler should catch what code review misses.", desc: "TypeScript strict mode isn't overhead - it's documentation that runs. If the type system can enforce a contract, a comment shouldn't have to." },
  { title: "Component boundaries are API design.", desc: "The props you expose are a public interface. Name them well, keep them minimal and make illegal states unrepresentable." },
  { title: "Accessibility is a default, not an audit.", desc: "Screen readers, keyboard users and low-vision users aren't edge cases. Semantic HTML and focus management cost nothing when you start with them." },
  { title: "The fastest code is the code you never ship.", desc: "Every dependency has a maintenance cost and a bundle cost. The best abstraction is often the one you didn't write." },
  { title: "Slow CI is a team problem.", desc: "A 20-minute test suite isn't a CI problem - it's a productivity tax on every engineer, every day. Build times are worth optimizing like production code." },
];

export function Principles() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="principles" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div ref={ref} className="container-x">
        <div className="reveal font-mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Principles</div>
        <h2 className="reveal" style={{ marginTop: 24, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text)" }}>Engineering Beliefs</h2>
        <p className="reveal" style={{ marginTop: 16, fontSize: 15, color: "var(--muted)" }}>How I think about the craft.</p>
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
              <div className="font-mono" style={{ fontSize: 11, color: "var(--subtle)" }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{p.title}</div>
                <div style={{ marginTop: 8, fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
