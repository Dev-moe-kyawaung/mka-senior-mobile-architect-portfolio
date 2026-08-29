import Rite from "./Rite";
import { prophecies, wards } from "../arcane";

export default function Wards() {
  return (
    <section id="wards" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 veil opacity-50" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="VII"
          rune="ᚹ"
          label="The Wards"
          title={<>Six circles of protection.<br />None have been broken.</>}
          blurb="Defense in depth, sealed to OWASP MASVS Level Two — plus five thousand prophecies of failure."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Concentric wards */}
          <div className="lg:col-span-7 obsidian rounded-2xl p-7">
            <div className="flex items-baseline justify-between border-b border-[#7b5cff]/20 pb-3">
              <h3 className="font-display text-xl text-[#efeaff]">Concentric wards</h3>
              <span className="glyph-chip text-[#ff4d6d] border-[#ff4d6d]/45">MASVS · L2</span>
            </div>
            <div className="mt-6 space-y-3">
              {wards.map((w, i) => (
                <div
                  key={w.t}
                  className="group flex items-center gap-4 rounded-xl border border-[#7b5cff]/18 bg-[#7b5cff]/5 px-4 py-3 hover:border-[#35e0d8]/50 transition-colors"
                  style={{ marginLeft: `${i * 10}px` }}
                >
                  <span
                    className="w-10 h-10 shrink-0 grid place-items-center rounded-full border border-[#35e0d8]/40 font-rune text-[#35e0d8] mana-pulse"
                    style={{ color: "#35e0d8", animationDelay: `${i * 0.3}s` }}
                  >
                    {w.r}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-[15px] text-[#efeaff]">{w.t}</div>
                    <div className="text-[11.5px] text-[#cfc9e8]/50">{w.d}</div>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#35e0d8] shrink-0">
                    held
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prophecies */}
          <div className="lg:col-span-5 obsidian rounded-2xl p-7">
            <div className="flex items-baseline justify-between border-b border-[#7b5cff]/20 pb-3">
              <h3 className="font-display text-xl text-[#efeaff]">Prophecies of failure</h3>
              <span className="font-mono text-[10px] text-[#f0b64a]">5,400+ · 92%</span>
            </div>
            <div className="mt-6 space-y-5">
              {prophecies.map((p) => (
                <div key={p.l}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-sm text-[#e2ddf7]">{p.l}</span>
                    <span className="font-rune text-lg text-[#f0b64a]">{p.v}</span>
                  </div>
                  <div className="h-[3px] mana-track rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${p.pct}%`,
                        background: "linear-gradient(90deg,#7b5cff,#35e0d8,#f0b64a)",
                        boxShadow: "0 0 12px rgba(53,224,216,.5)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[12px] italic text-[#cfc9e8]/45 leading-relaxed">
              A prophecy that never fires is not wasted. It is a ward that was
              never tested — and that is the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
