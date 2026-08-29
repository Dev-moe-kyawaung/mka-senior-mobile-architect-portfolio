import Rite from "./Rite";
import { ritual } from "../arcane";

const yaml = `name: the-seven-rites
on: [push, pull_request]
jobs:
  ascension:
    runs-on: ubuntu-latest
    strategy:
      matrix: { api: [26, 30, 34] }
    steps:
      - uses: actions/checkout@v4
      - run: ./gradlew detekt lintDebug        # purification
      - run: ./gradlew assembleDebug           # forging
      - run: ./gradlew testDebugUnitTest       # divination
      - run: ./gradlew verifyPaparazziDebug    # mirror rite
      - uses: reactivecircus/android-emulator-runner@v2
        with: { api-level: \${{ matrix.api }} } # trial by device
      - run: ./gradlew bundleRelease           # sealing
      - uses: r0adkll/upload-google-play@v1    # manifestation`;

export default function Rituals() {
  return (
    <section id="rituals" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="VI"
          rune="ᚱ"
          label="The Rituals"
          title={<>Seven rites stand between<br />my hand and yours.</>}
          blurb="No artifact reaches a mortal device until all seven judgements pass. Ten minutes, fifty-five seconds."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Ritual ladder */}
          <div className="lg:col-span-5 obsidian rounded-2xl p-6">
            <div className="flex items-center justify-between border-b border-[#7b5cff]/20 pb-3">
              <span className="font-display text-sm tracking-[0.2em] uppercase text-[#efeaff]">
                Rite of Ascension
              </span>
              <span className="glyph-chip text-[#35e0d8] border-[#35e0d8]/40">All passed</span>
            </div>

            <div className="mt-5 relative">
              <span className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-[#7b5cff] via-[#35e0d8] to-[#f0b64a] opacity-40" />
              {ritual.map((r, i) => (
                <div key={r.n} className="relative flex items-start gap-4 py-3">
                  <span
                    className="relative z-10 w-11 h-11 shrink-0 grid place-items-center rounded-full border border-[#35e0d8]/45 bg-[#0a0918] font-rune text-[#35e0d8] mana-pulse"
                    style={{ color: "#35e0d8", animationDelay: `${i * 0.25}s` }}
                  >
                    {r.r}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-[15px] text-[#efeaff]">{r.n}</span>
                      <span className="font-mono text-[10px] text-[#f0b64a]">{r.dur}</span>
                    </div>
                    <div className="text-[11.5px] text-[#cfc9e8]/50">{r.t}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#7b5cff]/20 flex items-baseline justify-between">
              <span className="eyebrow text-[#cfc9e8]/40">Total invocation</span>
              <span className="font-rune text-2xl text-[#35e0d8] text-mana-glow">10m 55s</span>
            </div>
          </div>

          {/* Scroll of the rite */}
          <div className="lg:col-span-7 obsidian rounded-2xl overflow-hidden relative">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#7b5cff]/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d6d]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0b64a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#35e0d8]" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-[#cfc9e8]/45">
                .github/workflows/seven-rites.yml
              </span>
            </div>
            <div className="relative">
              <span className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#35e0d8]/8 to-transparent scan pointer-events-none" />
              <pre className="p-6 text-[12px] leading-[1.8] font-mono overflow-x-auto">
                <code
                  dangerouslySetInnerHTML={{
                    __html: yaml
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/(#[^\n]*)/g, `<span style="color:#7b5cff;font-style:italic">$1</span>`)
                      .replace(
                        /\b(name|on|jobs|runs-on|strategy|matrix|steps|uses|run|with)\b/g,
                        `<span style="color:#f0b64a">$1</span>`
                      )
                      .replace(/(\.\/gradlew [\w-]+)/g, `<span style="color:#35e0d8">$1</span>`),
                  }}
                  className="text-[#cfc9e8]/75"
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
