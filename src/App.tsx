import { useCallback, useEffect, useRef, useState } from "react";
import RuneCanvas from "./components/RuneCanvas";
import Summoning from "./components/Summoning";
import SpellTransition from "./components/SpellTransition";
import ArcaneNav from "./components/ArcaneNav";
import Sanctum from "./components/Sanctum";
import Schools from "./components/Schools";
import Grimoire from "./components/Grimoire";
import Incantations from "./components/Incantations";
import Rituals from "./components/Rituals";
import Wards from "./components/Wards";
import Scrying from "./components/Scrying";
import Ages from "./components/Ages";
import Covenant from "./components/Covenant";
import ArcaneFooter from "./components/ArcaneFooter";
import { FamiliarDock, FamiliarProvider, FamiliarSection } from "./components/Familiar";

function Codex() {
  const [summoned, setSummoned] = useState(false);
  const [dock, setDock] = useState(false);
  const [trans, setTrans] = useState<{ on: boolean; rune: string }>({ on: false, rune: "ᚨ" });
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, hot: false });
  const timers = useRef<number[]>([]);

  const done = useCallback(() => setSummoned(true), []);

  /* Spell-circle transition between chapters */
  const cast = useCallback((id: string, rune: string) => {
    setTrans({ on: true, rune });
    const t1 = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    }, 460);
    const t2 = window.setTimeout(() => setTrans((s) => ({ ...s, on: false })), 900);
    timers.current.push(t1, t2);
  }, []);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setCursor({
        x: e.clientX,
        y: e.clientY,
        hot: !!el.closest("a, button, input, textarea"),
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!summoned) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [summoned]);

  return (
    <div className="relative min-h-screen bg-[#06050f] text-[#cfc9e8] overflow-x-hidden">
      {!summoned && <Summoning onDone={done} />}

      <RuneCanvas />

      {/* Mana progress */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-[160] bg-[#7b5cff]/12">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${progress})`,
            background: "linear-gradient(90deg,#7b5cff,#35e0d8,#f0b64a)",
            boxShadow: "0 0 12px rgba(53,224,216,.7)",
          }}
        />
      </div>

      {/* Arcane cursor */}
      <div
        className="pointer-events-none fixed z-[220] hidden md:block"
        style={{ left: cursor.x, top: cursor.y, transform: "translate(-50%,-50%)" }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            cursor.hot
              ? "w-11 h-11 border-[#35e0d8] bg-[#35e0d8]/10"
              : "w-3.5 h-3.5 border-[#a98bff] bg-[#a98bff]/40"
          }`}
          style={{ boxShadow: cursor.hot ? "0 0 22px rgba(53,224,216,.6)" : "0 0 12px rgba(169,139,255,.5)" }}
        />
      </div>

      <SpellTransition active={trans.on} rune={trans.rune} />

      <ArcaneNav onCast={cast} onOpenFamiliar={() => setDock(true)} />

      <main className="relative z-10">
        <Sanctum onCast={cast} />
        <FamiliarSection />
        <Schools />
        <Grimoire />
        <Incantations />
        <Rituals />
        <Wards />
        <Scrying />
        <Ages />
        <Covenant />
      </main>

      <ArcaneFooter onCast={cast} />
      <FamiliarDock open={dock} onToggle={() => setDock((d) => !d)} />
    </div>
  );
}

export default function App() {
  return (
    <FamiliarProvider>
      <Codex />
    </FamiliarProvider>
  );
}
