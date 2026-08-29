import { useEffect, useState } from "react";
import { RUNES, chapters, sorcerer } from "../arcane";

export default function ArcaneFooter({ onCast }: { onCast: (id: string, rune: string) => void }) {
  const [clock, setClock] = useState("");
  const [band, setBand] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          timeZone: "Asia/Bangkok", hour12: false,
        }).format(new Date())
      );
      setBand(
        Array.from({ length: 40 })
          .map(() => RUNES[Math.floor(Math.random() * RUNES.length)])
          .join(" ")
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative pt-16 pb-8 border-t border-[#7b5cff]/20 overflow-hidden">
      <div className="absolute inset-0 veil opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="font-mono text-[11px] tracking-[0.3em] text-[#7b5cff]/35 truncate select-none">
          {band}
        </div>

        <div className="mt-10 font-rune text-[13vw] leading-[0.85] text-[#7b5cff]/10 hover:text-[#7b5cff]/25 transition-colors select-none">
          Arcanum Codex
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative w-10 h-10 grid place-items-center">
                <span className="absolute inset-0 rounded-full border border-[#7b5cff]/50 spin-slow" />
                <span className="font-rune text-[#a98bff]">M</span>
              </span>
              <span className="font-rune text-lg text-[#efeaff]">{sorcerer.name}</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#cfc9e8]/50 italic">
              {sorcerer.title}. Kotlin, Compose, Clean Architecture, wards and
              rituals. {sorcerer.nameMM}.
            </p>
          </div>

          <div>
            <div className="eyebrow text-[#35e0d8]">Chapters</div>
            <ul className="mt-4 space-y-2">
              {chapters.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onCast(c.id, c.rune)}
                    className="font-display text-sm text-[#cfc9e8]/70 hover:text-[#35e0d8] transition-colors"
                  >
                    <span className="text-[#a98bff] mr-2">{c.rune}</span>
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[#35e0d8]">Sendings</div>
            <ul className="mt-4 space-y-2 text-sm text-[#cfc9e8]/70 break-all">
              <li>
                <a href={`mailto:${sorcerer.email}`} className="font-mono text-[12px] hover:text-[#35e0d8]">
                  {sorcerer.email}
                </a>
              </li>
              <li className="font-mono text-[12px]">{sorcerer.phones[0]}</li>
              <li className="italic text-[12px]">{sorcerer.realm}</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-[#35e0d8]">Ley-line time</div>
            <div className="mt-4 font-rune text-3xl text-[#f0b64a] text-ember-glow tabular-nums">
              {clock || "—"}
            </div>
            <div className="mt-1 text-xs text-[#cfc9e8]/45">Bangkok · GMT+7</div>
            <div className="mt-4 glyph-chip inline-block text-[#35e0d8] border-[#35e0d8]/45">
              Circle open · 2 seats
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#7b5cff]/15 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#cfc9e8]/40">
          <span>© MMXXVI · {sorcerer.name}</span>
          <span className="font-rune normal-case tracking-normal text-[#a98bff] text-[13px]">
            “{sorcerer.creed}”
          </span>
          <span>Codex v.26.IV</span>
        </div>
      </div>
    </footer>
  );
}
