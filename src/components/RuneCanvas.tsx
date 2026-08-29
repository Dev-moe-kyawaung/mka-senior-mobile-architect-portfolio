import { useEffect, useRef } from "react";
import { RUNES } from "../arcane";

type Mote = {
  x: number; y: number; vx: number; vy: number;
  ch: string; size: number; alpha: number; hue: string; life: number;
};

const HUES = ["#7b5cff", "#35e0d8", "#f0b64a", "#a98bff"];

export default function RuneCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let w = (cv.width = window.innerWidth);
    let h = (cv.height = window.innerHeight);
    let raf = 0;

    const count = Math.min(70, Math.round(window.innerWidth / 22));
    const motes: Mote[] = Array.from({ length: count }).map(() => spawn(w, h));

    function spawn(W: number, H: number): Mote {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.12 - Math.random() * 0.3,
        ch: RUNES[Math.floor(Math.random() * RUNES.length)],
        size: 10 + Math.random() * 16,
        alpha: 0.12 + Math.random() * 0.4,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
        life: Math.random() * 1000,
      };
    }

    const onResize = () => {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.life += 1;
        m.x += m.vx;
        m.y += m.vy;

        // gentle repel from cursor — the runes shy away from the reader
        const dx = m.x - mouse.current.x;
        const dy = m.y - mouse.current.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 20000 && d2 > 1) {
          const f = (20000 - d2) / 20000;
          const d = Math.sqrt(d2);
          m.x += (dx / d) * f * 1.6;
          m.y += (dy / d) * f * 1.6;
        }

        if (m.y < -40) {
          m.y = h + 30;
          m.x = Math.random() * w;
        }
        if (m.x < -40) m.x = w + 30;
        if (m.x > w + 40) m.x = -30;

        const flick = 0.75 + Math.sin(m.life / 26) * 0.25;
        ctx.globalAlpha = m.alpha * flick;
        ctx.fillStyle = m.hue;
        ctx.shadowBlur = 14;
        ctx.shadowColor = m.hue;
        ctx.font = `${m.size}px serif`;
        ctx.fillText(m.ch, m.x, m.y);
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0 opacity-70" />;
}
