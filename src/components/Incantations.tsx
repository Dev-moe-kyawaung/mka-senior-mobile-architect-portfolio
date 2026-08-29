import Rite from "./Rite";
import { incantations } from "../arcane";

export default function Incantations() {
  return (
    <section id="incantations" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 veil opacity-50" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="V"
          rune="ᛁ"
          label="Incantations"
          title={<>The words I speak<br />to make machines obey.</>}
          blurb="Each tongue with its true attunement level, measured honestly."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {Object.entries(incantations).map(([group, items], gi) => (
            <div key={group} className="obsidian rounded-2xl p-6">
              <div className="flex items-baseline justify-between border-b border-[#7b5cff]/20 pb-3">
                <h3 className="font-display text-xl text-[#efeaff]">
                  <span className="font-mono text-[10px] text-[#35e0d8] mr-2">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  {group}
                </h3>
                <span className="font-mono text-[10px] text-[#cfc9e8]/40">{items.length} words</span>
              </div>

              <div className="mt-5 space-y-4">
                {items.map((t) => (
                  <div key={t.n} className="group">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm text-[#e2ddf7]">
                        <span
                          className="w-2 h-2 rounded-full mana-pulse"
                          style={{ background: t.c, color: t.c }}
                        />
                        {t.n}
                      </span>
                      <span className="font-mono text-[11px]" style={{ color: t.c }}>{t.lvl}</span>
                    </div>
                    <div className="h-[3px] mana-track rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${t.lvl}%`,
                          background: `linear-gradient(90deg, ${t.c}, #35e0d8)`,
                          boxShadow: `0 0 12px ${t.c}80`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
