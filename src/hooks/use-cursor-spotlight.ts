import { useEffect } from "react";

export function useCursorSpotlight() {
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.body.style.setProperty("--mx", `${x}px`);
        document.body.style.setProperty("--my", `${y}px`);
        raf = 0;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
