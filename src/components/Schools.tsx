import Rite from "./Rite";
import { schools } from "../arcane";

export default function Schools() {
  return (
    <section id="schools" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="III"
          rune="ᛊ"
          label="Schools of Magic"
          title={<>Eight disciplines<br />I have mastered.</>}
          blurb="Every architectural decision, rewritten as the school of magic it truly is."
        />

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {schools.map((s, i) => (
            <article
              key={s.name}
              className="group obsidian obsidian-hover rounded-2xl p-6 relative overflow-hidden"
            >
              <span
                className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-45 transition-opacity"
                style={{ background: s.color }}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span
                    className="w-12 h-12 grid place-items-center rounded-xl border font-rune text-2xl rune-flicker"
                    style={{ borderColor: `${s.color}55`, color: s.color, background: `${s.color}12` }}
                  >
                    {s.rune}
                  </span>
                  <span className="font-mono text-[10px] text-[#cfc9e8]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 eyebrow" style={{ color: s.color }}>{s.school}</div>
                <h3 className="mt-1 font-display text-xl text-[#efeaff]">{s.name}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[#cfc9e8]/60 italic">{s.lore}</p>

                <div className="mt-5 space-y-1.5">
                  {s.effects.map((e) => (
                    <div key={e.k} className="flex items-baseline justify-between text-xs">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#cfc9e8]/40">
                        {e.k}
                      </span>
                      <span className="font-display" style={{ color: s.color }}>{e.v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="flex justify-between eyebrow text-[#cfc9e8]/35 mb-1">
                    <span>Attunement</span>
                    <span>{s.mana}</span>
                  </div>
                  <div className="h-1 mana-track rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.mana}%`, background: `linear-gradient(90deg, ${s.color}, #35e0d8)` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
