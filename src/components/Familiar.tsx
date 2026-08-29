import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode,
} from "react";
import SpellCircle from "./SpellCircle";
import Rite from "./Rite";
import { RUNES, familiarIntro, familiarTopics } from "../arcane";

type Msg = { who: "nyx" | "seeker"; text: string; shown: string; done: boolean };

type Ctl = {
  msgs: Msg[];
  ask: (q: string) => void;
  thinking: boolean;
};

const Ctx = createContext<Ctl | null>(null);

function divine(q: string): string {
  const s = q.toLowerCase();
  let best: { score: number; a: string } | null = null;
  for (const t of familiarTopics) {
    let score = 0;
    for (const k of t.key) if (s.includes(k)) score += 2;
    for (const w of t.q.toLowerCase().split(/\W+/)) {
      if (w.length > 3 && s.includes(w)) score += 1;
    }
    if (!best || score > best.score) best = { score, a: t.a };
  }
  if (!best || best.score === 0) {
    return "That thread is not yet woven into my binding. Ask me instead of the module topology, the Clean Architecture rings, how dependencies are summoned, the seven-stage deployment ritual, the six wards of security, the testing prophecies, or the flagship Ledger of the Merchant King. I know those by heart.";
  }
  return best.a;
}

export function FamiliarProvider({ children }: { children: ReactNode }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    { who: "nyx", text: familiarIntro, shown: familiarIntro, done: true },
  ]);
  const [thinking, setThinking] = useState(false);
  const timer = useRef<number | null>(null);

  const ask = useCallback((q: string) => {
    if (!q.trim()) return;
    setMsgs((m) => [...m, { who: "seeker", text: q, shown: q, done: true }]);
    setThinking(true);

    window.setTimeout(() => {
      const answer = divine(q);
      setThinking(false);
      setMsgs((m) => [...m, { who: "nyx", text: answer, shown: "", done: false }]);

      let i = 0;
      if (timer.current) window.clearInterval(timer.current);
      timer.current = window.setInterval(() => {
        i += 3;
        setMsgs((m) => {
          const c = [...m];
          const last = c[c.length - 1];
          if (!last || last.who !== "nyx" || last.done) return m;
          last.shown = last.text.slice(0, i);
          if (i >= last.text.length) {
            last.done = true;
            if (timer.current) window.clearInterval(timer.current);
          }
          return c;
        });
      }, 16);
    }, 620);
  }, []);

  useEffect(() => () => { if (timer.current) window.clearInterval(timer.current); }, []);

  const value = useMemo(() => ({ msgs, ask, thinking }), [msgs, ask, thinking]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useFamiliar() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useFamiliar outside provider");
  return c;
}

/* ---------- The orb ---------- */
function Orb({ size = 96, awake }: { size?: number; awake: boolean }) {
  const [rune, setRune] = useState("ᚠ");
  useEffect(() => {
    const id = setInterval(() => setRune(RUNES[Math.floor(Math.random() * RUNES.length)]), 420);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative grid place-items-center" style={{ width: size, height: size }}>
      <span className="absolute inset-0 rounded-full border border-[#35e0d8]/40 spin-slow" />
      <span className="absolute inset-[12%] rounded-full border border-[#7b5cff]/50 spin-mid" />
      <span
        className="absolute inset-[26%] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #a5fff6, #35e0d8 40%, #7b5cff 75%)",
          boxShadow: awake
            ? "0 0 34px rgba(53,224,216,.85), inset 0 0 20px rgba(255,255,255,.5)"
            : "0 0 18px rgba(53,224,216,.45)",
        }}
      />
      <span className="relative font-rune text-[#06050f] text-lg font-bold">{rune}</span>
    </span>
  );
}

/* ---------- Chat body shared by section + dock ---------- */
function ChatBody({ compact = false }: { compact?: boolean }) {
  const { msgs, ask, thinking } = useFamiliar();
  const [q, setQ] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, thinking]);

  return (
    <>
      <div
        className={`overflow-y-auto hide-scroll space-y-4 pr-1 ${compact ? "h-[300px]" : "h-[360px]"}`}
      >
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.who === "seeker" ? "justify-end" : ""}`}>
            {m.who === "nyx" && (
              <span className="shrink-0 mt-1">
                <Orb size={28} awake />
              </span>
            )}
            <div
              className={`max-w-[86%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed ${
                m.who === "nyx"
                  ? "bg-[#7b5cff]/10 border border-[#7b5cff]/25 text-[#e2ddf7]"
                  : "bg-[#35e0d8]/10 border border-[#35e0d8]/30 text-[#d7fbf8]"
              }`}
            >
              {m.who === "nyx" && (
                <div className="eyebrow text-[#35e0d8] mb-1.5">Nyx · bound familiar</div>
              )}
              {m.shown}
              {!m.done && <span className="caret text-[#35e0d8]">▍</span>}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex items-center gap-3 text-[#35e0d8]">
            <Orb size={28} awake />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
              consulting the codex
              <span className="caret">…</span>
            </span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {familiarTopics.slice(0, compact ? 4 : 7).map((t) => (
          <button
            key={t.q}
            onClick={() => ask(t.q)}
            className="glyph-chip text-[#a98bff] hover:border-[#35e0d8]/60 hover:text-[#35e0d8] transition-colors normal-case tracking-normal"
            style={{ fontSize: 10 }}
          >
            {t.q}
          </button>
        ))}
      </div>

      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
          setQ("");
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask Nyx about the magic…"
          className="flex-1 bg-[#06050f]/70 border border-[#7b5cff]/30 focus:border-[#35e0d8] focus:outline-none rounded-full px-4 py-2.5 text-sm text-[#efeaff] placeholder:text-[#cfc9e8]/30"
        />
        <button
          type="submit"
          className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-[#7b5cff] to-[#35e0d8] text-[#06050f] font-bold grid place-items-center hover:scale-105 transition-transform"
        >
          ➤
        </button>
      </form>
    </>
  );
}

/* ---------- Section ---------- */
export function FamiliarSection() {
  return (
    <section id="familiar" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="II"
          rune="ᚠ"
          label="The Familiar"
          title={<>A sprite that has read<br />every line I wrote.</>}
          blurb="Nyx is bound to this codex. She will explain the architecture, the wards, or the rituals in plain speech."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative grid place-items-center">
            <div className="relative w-full max-w-[420px] aspect-square grid place-items-center">
              <SpellCircle size={420} className="absolute inset-0 w-full h-full" colors={["#35e0d8", "#7b5cff", "#a98bff"]} />
              <div className="bob">
                <Orb size={140} awake />
              </div>
            </div>
            <div className="text-center -mt-2">
              <div className="font-rune text-3xl text-[#35e0d8] text-mana-glow">Nyx</div>
              <div className="mt-1 eyebrow text-[#cfc9e8]/50">Lesser sprite · knowledge-bound · non-corporeal</div>
              <div className="mt-4 flex justify-center gap-2">
                {["Architecture", "Wards", "Rituals", "Tongues"].map((d) => (
                  <span key={d} className="glyph-chip text-[#a98bff]">{d}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="obsidian rune-border rounded-3xl p-6">
              <div className="flex items-center justify-between border-b border-[#7b5cff]/20 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#35e0d8] mana-pulse" style={{ color: "#35e0d8" }} />
                  <span className="font-display text-sm tracking-[0.2em] uppercase text-[#efeaff]">
                    Familiar link · established
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#cfc9e8]/40">latency 0ms · local binding</span>
              </div>
              <ChatBody />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Floating dock ---------- */
export function FamiliarDock({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-[150] group"
        aria-label="Summon familiar"
      >
        <span className="absolute -inset-3 rounded-full bg-[#35e0d8]/15 blur-xl group-hover:bg-[#35e0d8]/30 transition-colors" />
        <span className="relative block bob">
          <Orb size={64} awake={open} />
        </span>
      </button>

      <div
        className={`fixed bottom-24 right-6 z-[150] w-[min(400px,calc(100vw-3rem))] transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="obsidian rune-border rounded-3xl p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#7b5cff]/20 pb-3 mb-3">
            <div className="font-rune text-lg text-[#35e0d8]">Nyx</div>
            <button onClick={onToggle} className="text-[#cfc9e8]/50 hover:text-[#efeaff]">✕</button>
          </div>
          <ChatBody compact />
        </div>
      </div>
    </>
  );
}
