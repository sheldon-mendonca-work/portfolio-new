import type { ProjectStatus } from "@/data/projects";
export const statusConfig: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  deployed: {
    label: "Deployed",
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.08)",
  },
  "in-progress": {
    label: "In Progress",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)",
  },
  archived: {
    label: "Archived",
    color: "#555555",
    bg: "rgba(255, 255, 255, 0.04)",
  },
};