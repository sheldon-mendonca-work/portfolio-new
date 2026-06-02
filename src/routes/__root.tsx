import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { useCursorSpotlight } from "../hooks/use-cursor-spotlight";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title:
          "Sheldon Mendonca - Software Engineer | React, Spring Boot, Full Stack",
      },

      {
        name: "description",
        content:
          "Software Engineer with experience building production systems at scale. Specialized in React, Next.js, TypeScript, Spring Boot, AWS, frontend architecture and full-stack product development.",
      },

      {
        name: "author",
        content: "Sheldon Mendonca",
      },

      {
        name: "keywords",
        content:
          "Sheldon Mendonca, Software Engineer, Full Stack Engineer, React Developer, Next.js Developer, TypeScript Developer, Spring Boot Developer, Java Developer, Frontend Engineer, Backend Engineer, AWS, PostgreSQL, MongoDB, Software Development Engineer, Bengaluru, India",
      },

      {
        name: "robots",
        content: "index, follow",
      },

      {
        property: "og:title",
        content:
          "Sheldon Mendonca - Software Engineer",
      },

      {
        property: "og:description",
        content:
          "Building scalable web applications with React, TypeScript, Spring Boot, AWS and modern software architecture.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:site_name",
        content: "Sheldon Mendonca",
      },

      {
        property: "og:locale",
        content: "en_US",
      },

      {
        property: "og:url",
        content: "https://yourdomain.com",
      },

      {
        property: "og:image",
        content: "https://yourdomain.com/og-image.png",
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
          "Full Stack Engineer focused on React, Spring Boot, scalable systems, frontend architecture and product engineering.",
      },

      {
        name: "twitter:image",
        content: "https://yourdomain.com/og-image.png",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "canonical",
        href: "https://yourdomain.com",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useCursorSpotlight();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
