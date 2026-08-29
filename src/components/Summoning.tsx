import { useEffect, useState } from "react";
import SpellCircle from "./SpellCircle";
import { RUNES } from "../arcane";

const PHASES = [
  "Drawing the circle…",
  "Binding the runes…",
  "Channelling mana…",
  "Awakening the familiar…",
  "The codex opens.",
];

export default function Summoning({ onDone }: { onDone: () => void }) {
  const [p, setP] = useState(0);
  const [out, setOut] = useState(false);
  const [glyphs, setGlyphs] = useState("");

  useEffect(() => {
    const g = setInterval(() => {
      setGlyphs(
        Array.from({ length: 9 })
          .map(() => RUNES[Math.floor(Math.random() * RUNES.length)])
          .join(" ")
      );
    }, 90);
    return () => clearInterval(g);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setP((v) => {
        const n = Math.min(100, v + Math.random() * 9 + 3.5);
        if (n >= 100) {
          clearInterval(id);
          setTimeout(() => setOut(true), 420);
          setTimeout(onDone, 1250);
        }
        return n;
      });
    }, 90);
    return () => clearInterval(id);
  }, [onDone]);

  const phase = PHASES[Math.min(PHASES.length - 1, Math.floor(p / 21))];

  return (
    <div
      className={`fixed inset-0 z-[300] bg-[#06050f] grid place-items-center overflow-hidden transition-all duration-700 ${
        out ? "opacity-0 scale-110 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 starfield opacity-50" />

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <SpellCircle size={340} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[#35e0d8] text-lg tracking-[0.3em]">{glyphs}</div>
              <div className="mt-3 font-rune text-4xl text-[#efeaff] text-arcane-glow">
                {String(Math.floor(p)).padStart(3, "0")}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="eyebrow text-[#f0b64a]">Arcanum Codex · MMXXVI</div>
          <h1 className="mt-3 font-rune text-4xl sm:text-6xl grad-arcane">Moe Kyaw Aung</h1>
          <p className="mt-3 font-display text-sm tracking-[0.34em] uppercase text-[#cfc9e8]/60">
            {phase}
          </p>
        </div>

        <div className="mt-8 w-72 h-[3px] mana-track rounded-full overflow-hidden">
          <div className="h-full mana-fill transition-all duration-200" style={{ width: `${p}%` }} />
        </div>
      </div>
    </div>
  );
}
