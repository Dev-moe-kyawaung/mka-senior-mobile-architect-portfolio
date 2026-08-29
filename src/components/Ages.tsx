import Rite from "./Rite";
import { ages } from "../arcane";

export default function Ages() {
  return (
    <section id="ages" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 veil opacity-50" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="IX"
          rune="ᚦ"
          label="The Ages"
          title={<>Eight ages of practice,<br />written as they happened.</>}
          blurb="From the first sigil drawn in Java to the Tongue-Weaving Spell still being bound."
        />

        <div className="mt-14 relative">
          <span className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7b5cff]/50 to-transparent" />

          <div className="space-y-6">
            {ages.map((a, i) => (
              <div
                key={a.year}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block flex-1" />

                <span
                  className="absolute left-[26px] md:left-1/2 -translate-x-1/2 mt-6 w-4 h-4 rounded-full border-2 border-[#35e0d8] bg-[#06050f] mana-pulse z-10"
                  style={{ color: "#35e0d8", animationDelay: `${i * 0.2}s` }}
                />

                <div className="ml-14 md:ml-0 flex-1">
                  <div className="obsidian obsidian-hover rounded-2xl p-6">
                    <div className="flex items-baseline justify-between">
                      <span className="font-rune text-3xl text-[#f0b64a] text-ember-glow">{a.year}</span>
                      <span className="font-mono text-[10px] text-[#cfc9e8]/35">
                        AGE {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl text-[#efeaff]">{a.age}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#cfc9e8]/60 italic">{a.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
