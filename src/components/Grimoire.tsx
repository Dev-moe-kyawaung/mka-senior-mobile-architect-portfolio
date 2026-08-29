import { useEffect, useState } from "react";
import Rite from "./Rite";
import SpellDiagram from "./SpellDiagram";
import { spellbooks } from "../arcane";

type Book = (typeof spellbooks)[number];

const TIER_COLOR: Record<string, string> = {
  Journeyman: "#5fa8ff",
  Adept: "#35e0d8",
  Master: "#a98bff",
  Archmage: "#f0b64a",
  Forbidden: "#ff4d6d",
};

export default function Grimoire() {
  const [open, setOpen] = useState<Book | null>(null);
  const [filter, setFilter] = useState("All");

  const schoolsList = ["All", ...Array.from(new Set(spellbooks.map((s) => s.school)))];
  const shown = filter === "All" ? spellbooks : spellbooks.filter((s) => s.school === filter);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section id="grimoire" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 veil opacity-60" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="IV"
          rune="ᚷ"
          label="The Grimoire"
          title={<>Twelve bound spells.<br />Open one and read.</>}
          blurb="Each working is a tome. Break the seal to view its lore, its incantation and its living diagram."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {schoolsList.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`glyph-chip transition-colors ${
                filter === s
                  ? "border-[#35e0d8] text-[#35e0d8] bg-[#35e0d8]/10"
                  : "text-[#a98bff] hover:border-[#7b5cff]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {shown.map((b) => (
            <button
              key={b.id}
              onClick={() => setOpen(b)}
              className="group text-left obsidian obsidian-hover rounded-2xl p-5 relative overflow-hidden"
            >
              <span
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity"
                style={{ background: TIER_COLOR[b.tier] }}
              />
              {/* spine */}
              <span
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ background: `linear-gradient(180deg, ${TIER_COLOR[b.tier]}, transparent)` }}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-rune text-3xl text-[#efeaff] rune-flicker">{b.sigil}</span>
                <span
                  className="glyph-chip"
                  style={{ color: TIER_COLOR[b.tier], borderColor: `${TIER_COLOR[b.tier]}66` }}
                >
                  {b.tier}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg text-[#efeaff] group-hover:text-[#35e0d8] transition-colors">
                {b.name}
              </h3>
              <div className="font-rune text-[13px] text-[#f0b64a]/80 italic mt-0.5">{b.tome}</div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-[#cfc9e8]/60 line-clamp-3">{b.lore}</p>

              <div className="mt-4">
                <div className="flex justify-between eyebrow text-[#cfc9e8]/40 mb-1">
                  <span>Mana</span>
                  <span>{b.mana}</span>
                </div>
                <div className="h-1 mana-track rounded-full overflow-hidden">
                  <div className="h-full mana-fill" style={{ width: `${b.mana}%` }} />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#7b5cff]/15">
                <span className="font-mono text-[10px] text-[#35e0d8]">{b.souls}</span>
                <span className="font-mono text-[10px] text-[#cfc9e8]/40 group-hover:text-[#35e0d8]">
                  break seal →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Opened spellbook ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-[#06050f]/92 backdrop-blur-md overflow-y-auto p-4 sm:p-8 grid place-items-center"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-5xl obsidian rune-border rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#7b5cff]/25">
              <div className="flex items-center gap-3">
                <span className="font-rune text-2xl text-[#f0b64a]">{open.sigil}</span>
                <div>
                  <div className="font-display text-lg text-[#efeaff]">{open.name}</div>
                  <div className="font-rune text-xs italic text-[#f0b64a]/80">{open.tome}</div>
                </div>
              </div>
              <button onClick={() => setOpen(null)} className="text-[#cfc9e8]/60 hover:text-[#efeaff] text-xl">
                ✕
              </button>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Left page — lore */}
              <div className="p-7 lg:border-r border-[#7b5cff]/20">
                <div className="eyebrow text-[#35e0d8]">Folio recto · lore</div>
                <p className="mt-4 text-[15px] leading-[1.8] text-[#e2ddf7] first-letter:font-rune first-letter:text-4xl first-letter:text-[#f0b64a] first-letter:mr-1.5 first-letter:float-left first-letter:leading-none">
                  {open.lore}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["School", open.school],
                    ["Tier", open.tier],
                    ["Reach", open.souls],
                    ["Mana cost", `${open.mana} / 100`],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-[#7b5cff]/20 bg-[#7b5cff]/5 px-3 py-2.5">
                      <div className="eyebrow text-[#cfc9e8]/40">{k}</div>
                      <div className="mt-1 font-display text-sm text-[#efeaff]">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="eyebrow text-[#35e0d8] mb-2">Incantation</div>
                  <div className="flex flex-wrap gap-1.5">
                    {open.incantation.map((x) => (
                      <span key={x} className="glyph-chip text-[#a98bff] normal-case tracking-normal">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={open.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#7b5cff] to-[#35e0d8] text-[#06050f] font-display font-bold text-sm hover:scale-[1.03] transition-transform"
                >
                  Read the source scroll ↗
                </a>
              </div>

              {/* Right page — diagram */}
              <div className="p-7 bg-[#06050f]/50">
                <div className="eyebrow text-[#f0b64a]">Folio verso · living diagram</div>
                <div className="mt-4 rounded-2xl border border-[#7b5cff]/20 bg-[#06050f]/60 p-3">
                  <SpellDiagram
                    type={open.diagram}
                    nodes={open.nodes}
                    color={TIER_COLOR[open.tier]}
                    accent="#35e0d8"
                  />
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-[#cfc9e8]/50 italic">
                  The diagram is not decoration — it is the actual shape of the
                  working. Nodes pulse in the order the data travels.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
