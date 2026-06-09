export type ProjectStatus = "deployed" | "in-progress" | "archived";
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  progress: number;
  github?: string;
  live?: string;
}
export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Portfolio",
    description:
      "Redesigned my portfolio using the latest front-end technologies. Kept the bundle size low with aim to reach perfect lighthouse metrics.",
    stack: ["React", "TypeScript", "Tanstack-Router", "Tailwind"],
    status: "deployed",
    progress: 100,
    github: "https://github.com/sheldon-mendonca-work",
    live: "https://sheldon-mendonca.netlify.app/",
  },
  {
    id: "nand2tetris-two",
    title: "Nand2Tetris",
    description:
      "Building a computer system from NAND gate to operating system. Written in C++.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    status: "archived",
    progress: 100,
    github: "https://github.com/sheldon-mendonca-work/nand2tetris",
  },
  {
    id: "flowpay",
    title: "Flowpay",
    description:
      "Production-grade distributed payment system focused on reliability, idempotency, and fault tolerance. Built to learn and demonstrate real-world backend and distributed systems engineering.",
    stack: ["Golang", "Postgres", "Kafka", "Prometheus"],
    status: "in-progress",
    progress: 60,
    github: "https://github.com/sheldon-mendonca-work/FlowPay",
  },
];