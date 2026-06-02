import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}-=+*^?#";

export function useScramble(target: string, duration = 1000) {
  const [text, setText] = useState(target);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const resolvedCount = Math.floor(p * target.length);
      let out = "";
      for (let i = 0; i < target.length; i++) {
        if (i < resolvedCount || target[i] === " ") {
          out += target[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setText(out);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setText(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return text;
}
