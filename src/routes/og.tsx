import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";

export const Route = createFileRoute("/og")({
  server: {
    handlers: {
      GET: async () => {
        return new ImageResponse(
          (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#080808",
                color: "#eeeeee",
                padding: 80,
                fontFamily: "sans-serif",
              }}
            >
              <div style={{ fontSize: 22, letterSpacing: 4, color: "#888" }}>
                SOFTWARE ENGINEER
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ fontSize: 96, fontWeight: 500, letterSpacing: -3, lineHeight: 1 }}>
                  Sheldon Mendonca
                </div>
                <div style={{ fontSize: 32, color: "#888", maxWidth: 900, lineHeight: 1.3 }}>
                  Building frontend systems that stay fast as products, teams and codebases grow.
                </div>
              </div>
              <div style={{ fontSize: 22, color: "#555" }}>sheldonmendoncawork123@gmail.com</div>
            </div>
          ),
          { width: 1200, height: 630 }
        );
      },
    },
  },
});
