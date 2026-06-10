import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useReveal } from "@/hooks/use-reveal";
export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  const inProgress = projects.filter((p) => p.status === "in-progress").length;
  const deployed = projects.filter((p) => p.status === "deployed").length;
  return (
    <section id="projects" style={{ paddingTop: 120, paddingBottom: 120 }}>
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
          Projects
        </div>
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <h2 className="reveal"
          style={{
            marginTop: 24,
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}>
            What I'm building
          </h2>
          <span className="font-mono" style={{ fontSize: 12, color: "var(--subtle)" }}>
            {inProgress} in progress{" · "}{deployed} deployed
          </span>
        </div>
        <div className="reveal projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 24 }}>
          <a 
            href="https://github.com/sheldon-mendonca-work"
            target="_blank"
            rel="noopener noreferrer"
            
            style={{ fontSize: 13, color: "var(--muted)" }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}