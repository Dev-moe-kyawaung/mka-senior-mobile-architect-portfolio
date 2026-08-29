import { useEffect, useState } from "react";
import SpellCircle from "./SpellCircle";
import { powerStats, sorcerer } from "../arcane";

const TITLES = [
  "Archmage of the Android Order",
  "Binder of Two-and-Forty Modules",
  "Keeper of the Green Sigil",
  "Weaver of the Kotlin Tongue",
];

export default function Sanctum({ onCast }: { onCast: (id: string, rune: string) => void }) {
  const [txt, setTxt] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = TITLES[i % TITLES.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(cur.slice(0, j + 1));
          setJ(j + 1);
          if (j + 1 === cur.length) setTimeout(() => setDel(true), 1700);
        } else {
          setTxt(cur.slice(0, j - 1));
          setJ(j - 1);
          if (j === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 24 : 52
    );
    return () => clearTimeout(t);
  }, [i, j, del]);

  return (
    <section id="sanctum" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <img
        src="/images/sanctum.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06050f]/70 via-[#06050f]/85 to-[#06050f]" />
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 hex-grid opacity-70" />

      {/* Embers */}
      {Array.from({ length: 14 }).map((_, k) => (
        <span
          key={k}
          className="absolute w-1 h-1 rounded-full ember"
          style={{
            left: `${(k * 7.3) % 100}%`,
            bottom: "-10px",
            background: k % 3 === 0 ? "#35e0d8" : k % 3 === 1 ? "#7b5cff" : "#f0b64a",
            boxShadow: "0 0 10px currentColor",
            animationDelay: `${k * 0.6}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[76vh]">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 glyph-chip text-[#35e0d8] border-[#35e0d8]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35e0d8] mana-pulse" style={{ color: "#35e0d8" }} />
              The circle is open · two seats remain
            </div>

            <h1 className="mt-7 font-rune text-[13vw] sm:text-[9vw] lg:text-[6.4vw] leading-[0.92]">
              <span className="block text-[#efeaff] text-arcane-glow">Code is the</span>
              <span className="block grad-arcane">last living magic.</span>
            </h1>

            <div className="mt-6 font-display text-lg sm:text-2xl text-[#35e0d8] min-h-[2.2em]">
              {txt}
              <span className="caret">▍</span>
            </div>

            <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-[#cfc9e8]/75">
              I am <span className="text-[#f0b64a]">{sorcerer.name}</span> — {sorcerer.nameMM} —
              and I bind Android applications the way older orders bound spirits:
              in layers, with wards, and never without a circle of tests around
              them. Forty-three workings released. Ten million souls have touched
              them without ever learning my name.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => onCast("grimoire", "ᚷ")}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#7b5cff] to-[#35e0d8] text-[#06050f] font-display font-bold tracking-wide hover:scale-[1.04] transition-transform"
                style={{ boxShadow: "0 0 40px -6px rgba(123,92,255,.7)" }}
              >
                Open the Grimoire
                <span className="group-hover:translate-x-1 transition-transform">➤</span>
              </button>
              <button
                onClick={() => onCast("familiar", "ᚠ")}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#35e0d8]/45 text-[#35e0d8] font-display tracking-wide hover:bg-[#35e0d8]/10 transition-colors"
              >
                ᚠ Speak to my familiar
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {powerStats.map((s) => (
                <div key={s.l} className="obsidian rounded-2xl p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-rune text-3xl text-[#efeaff]">{s.n}</span>
                    <span className="text-[#7b5cff] rune-flicker">{s.rune}</span>
                  </div>
                  <div className="eyebrow text-[#cfc9e8]/45 mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — the archmage inside the circle */}
          <div className="lg:col-span-5 relative grid place-items-center">
            <div className="relative w-full max-w-[520px] aspect-square grid place-items-center">
              <SpellCircle size={520} className="absolute inset-0 w-full h-full" />
              <div className="relative w-[46%] aspect-square rounded-full overflow-hidden rune-border bob">
                <img src={sorcerer.avatar} alt={sorcerer.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06050f]/70 to-transparent" />
              </div>
            </div>

            <div className="mt-2 text-center">
              <div className="font-rune text-2xl text-[#f0b64a] text-ember-glow">{sorcerer.epithet}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.24em] uppercase text-[#cfc9e8]/50">
                {sorcerer.realm}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-[#cfc9e8]/40">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#7b5cff]/50" />
          <span className="font-mono text-[10px] tracking-[0.34em] uppercase">Descend into the codex</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#7b5cff]/50" />
        </div>
      </div>
    </section>
  );
}
