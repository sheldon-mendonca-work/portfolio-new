import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Principles } from "@/components/Principles";
import { Notes } from "@/components/Notes";
import { Writing } from "@/components/Writing";
import { Metrics } from "@/components/Metrics";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { useLenis } from "@/hooks/use-lenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sheldon Mendonca - Software Engineer | React, Spring Boot, Full Stack",
      },

      {
        name: "description",
        content:
          "Software Engineer with 2+ years building production systems at scale. Experienced in React, Next.js, TypeScript, Spring Boot, AWS, frontend architecture and full-stack product development.",
      },

      {
        name: "keywords",
        content:
          "Sheldon Mendonca, Software Engineer, Full Stack Engineer, React Developer, Next.js Developer, TypeScript Developer, Spring Boot Developer, Java Developer, Frontend Engineer, Backend Engineer, AWS, PostgreSQL, MongoDB, Software Development Engineer, Bengaluru, India",
      },

      {
        property: "og:title",
        content:
          "Sheldon Mendonca - Software Engineer",
      },

      {
        property: "og:description",
        content:
          "Full Stack Engineer specializing in React, TypeScript, Spring Boot, scalable web applications, performance and product engineering.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://sheldon-mendonca.netlify.app",
      },

      {
        property: "og:image",
        content: "https://sheldon-mendonca.netlify.app/images/Sheldon_Mendonca_Square.webp",
      },

      {
        property: "og:site_name",
        content: "Sheldon Mendonca",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "Sheldon Mendonca - Software Engineer",
      },

      {
        name: "twitter:description",
        content:
          "Full Stack Engineer building scalable products with React, Next.js, TypeScript, Spring Boot and AWS.",
      },

      {
        name: "author",
        content: "Sheldon Mendonca",
      },

      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [palette, setPalette] = useState(false);
  useLenis();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Experience />
        <Principles />
        <Notes />
        <Writing />
        <Metrics />
        <Contact />
      </main>
      <Footer onOpenPalette={() => setPalette(true)} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </>
  );
}
