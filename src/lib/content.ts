import { parseFrontmatter } from "./content-parser";

// Import all MDX files as raw strings at build time. This works in any runtime
// (browser, Node, Cloudflare Workers) because Vite inlines the contents.
const noteFiles = import.meta.glob("/content/notes/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const articleFiles = import.meta.glob("/content/writing/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface Note {
  slug: string;
  date: string;
  title: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string;
  readingTime: number;
}

function slugFromPath(p: string): string {
  return p.split("/").pop()!.replace(/\.mdx$/, "");
}

export function getAllNotes(): Note[] {
  return Object.entries(noteFiles)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
       const body = content.trim();
      const firstLine = body.split(/\r?\n/)[0] ?? "";
      const title = firstLine.length > 80 ? firstLine.slice(0, 80).trimEnd() + "…" : firstLine;
      return {
        slug: slugFromPath(path),
        date: data.date ?? "",
        title,
        body,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}


export function getAllArticles(): Article[] {
  return Object.entries(articleFiles)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      const words = content.trim().split(/\s+/).filter(Boolean).length;
      return {
        slug: slugFromPath(path),
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        body: content.trim(),
        readingTime: Math.max(1, Math.round(words / 200)),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}
