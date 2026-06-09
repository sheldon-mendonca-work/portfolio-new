import type { Project } from "@/data/projects";
import { statusConfig } from "@/lib/project-utils";
export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "border-color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{project.title}</div>
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: status.color,
            background: status.bg,
            padding: "4px 8px",
            borderRadius: 4,
            whiteSpace: "nowrap",
          }}
        >
          {status.label}
        </span>
      </div>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0, flex: 1 }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="font-mono" style={{ fontSize: 11, color: "var(--subtle)" }}>Progress</span>
          <span className="font-mono" style={{ fontSize: 11, color: "var(--subtle)" }}>{project.progress}%</span>
        </div>
        <div style={{ height: 2, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${project.progress}%`,
              background: status.color,
              transition: "width 0.3s",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono"
            style={{
              fontSize: 11,
              color: "var(--subtle)",
              border: "1px solid var(--border)",
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--muted)",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "8px 12px",
              textDecoration: "none",
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--text)",
              background: "transparent",
              border: "1px solid var(--text)",
              borderRadius: 6,
              padding: "8px 12px",
              textDecoration: "none",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--text)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Live
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        )}
        {!project.live && project.status === "in-progress" && (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--subtle)",
              border: "1px dashed var(--border)",
              borderRadius: 6,
              padding: "8px 12px",
            }}
          >
            Not deployed
          </div>
        )}
      </div>
    </div>
  );
}