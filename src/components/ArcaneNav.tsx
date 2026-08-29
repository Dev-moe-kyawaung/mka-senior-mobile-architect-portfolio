import { useEffect, useState } from "react";
import { chapters, sorcerer } from "../arcane";

export default function ArcaneNav({
  onCast,
  onOpenFamiliar,
}: {
  onCast: (id: string, rune: string) => void;
  onOpenFamiliar: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("sanctum");

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30);
    s();
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-42% 0px -52% 0px" }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-[#06050f]/85 backdrop-blur-xl border-b border-[#7b5cff]/20" : ""
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 h-[74px] flex items-center justify-between">
          <button onClick={() => onCast("sanctum", "ᚨ")} className="flex items-center gap-3 group">
            <span className="relative w-11 h-11 grid place-items-center">
              <span className="absolute inset-0 rounded-full border border-[#7b5cff]/50 spin-slow" />
              <span className="absolute inset-1.5 rounded-full border border-[#35e0d8]/40 spin-mid" />
              <span className="font-rune text-[#a98bff] text-lg">M</span>
            </span>
            <span className="text-left leading-tight">
              <span className="block font-rune text-[15px] text-[#efeaff]">{sorcerer.name}</span>
              <span className="block font-mono text-[9px] tracking-[0.24em] uppercase text-[#35e0d8]">
                Arcanum Codex
              </span>
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-0.5">
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => onCast(c.id, c.rune)}
                className={`group relative px-3 py-2 transition-colors ${
                  active === c.id ? "text-[#35e0d8]" : "text-[#cfc9e8]/65 hover:text-[#efeaff]"
                }`}
              >
                <span className="font-mono text-[9px] mr-1 opacity-50">{c.n}</span>
                <span className="font-display text-[13px] tracking-wider">{c.label}</span>
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-px bg-[#35e0d8] transition-transform origin-left ${
                    active === c.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenFamiliar}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#35e0d8]/40 text-[#35e0d8] hover:bg-[#35e0d8]/10 transition-colors font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#35e0d8] mana-pulse" style={{ color: "#35e0d8" }} />
              Summon Nyx
            </button>
            <button
              onClick={() => onCast("covenant", "ᛏ")}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#7b5cff] to-[#35e0d8] text-[#06050f] font-mono text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform"
            >
              Forge a pact
            </button>
            <button
              className="xl:hidden w-10 h-10 rounded-full border border-[#7b5cff]/40 grid place-items-center text-[#a98bff]"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden px-5 pb-5 grid grid-cols-2 gap-2 bg-[#06050f]/95 backdrop-blur-xl">
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setOpen(false);
                  onCast(c.id, c.rune);
                }}
                className="px-4 py-3 rounded-2xl border border-[#7b5cff]/25 text-left"
              >
                <span className="text-[#a98bff] mr-2">{c.rune}</span>
                <span className="font-display text-sm">{c.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Right-side chapter rail */}
      <aside className="hidden 2xl:flex fixed right-7 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {chapters.map((c) => (
          <button
            key={c.id}
            onClick={() => onCast(c.id, c.rune)}
            className="group flex items-center justify-end gap-3"
            title={c.label}
          >
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.2em] transition-opacity ${
                active === c.id ? "opacity-100 text-[#35e0d8]" : "opacity-0 group-hover:opacity-70"
              }`}
            >
              {c.label}
            </span>
            <span
              className={`grid place-items-center rounded-full border transition-all ${
                active === c.id
                  ? "w-8 h-8 border-[#35e0d8] text-[#35e0d8] bg-[#35e0d8]/10"
                  : "w-6 h-6 border-[#7b5cff]/35 text-[#a98bff]/60 group-hover:border-[#7b5cff]"
              }`}
            >
              <span className="text-[11px]">{c.rune}</span>
            </span>
          </button>
        ))}
      </aside>
    </>
  );
}
