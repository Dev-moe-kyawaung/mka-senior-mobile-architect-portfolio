import { useState } from "react";
import Rite from "./Rite";
import SpellCircle from "./SpellCircle";
import { relics, visions } from "../arcane";

export default function Scrying() {
  const [v, setV] = useState(0);
  const [lens, setLens] = useState<string | null>(null);

  return (
    <section id="scrying" className="relative py-28 sm:py-32">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="VIII"
          rune="ᛇ"
          label="The Scrying Pool"
          title={<>Visions drawn<br />from the dark water.</>}
          blurb="Motion captured from shipped workings, and relics recovered from the archive."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-3xl overflow-hidden rune-border bg-[#06050f]">
              <video
                key={v}
                src={visions[v]}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover opacity-90"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#06050f]/70 via-transparent to-transparent" />
              <SpellCircle
                size={160}
                className="absolute -bottom-6 -right-6 pointer-events-none"
                opacity={0.5}
              />
              <div className="absolute top-4 left-4 glyph-chip text-[#35e0d8] border-[#35e0d8]/45 bg-[#06050f]/70">
                Vision {String(v + 1).padStart(2, "0")} / {visions.length}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
            {visions.map((src, i) => (
              <button
                key={src}
                onClick={() => setV(i)}
                className={`relative rounded-xl overflow-hidden transition-all ${
                  i === v ? "ring-2 ring-[#35e0d8]" : "ring-1 ring-[#7b5cff]/25 hover:ring-[#7b5cff]/70"
                }`}
              >
                <video src={src} muted playsInline className="w-full aspect-video object-cover opacity-70" />
                <span className="absolute inset-0 grid place-items-center font-rune text-sm text-[#efeaff] bg-[#06050f]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Relic wall */}
        <div className="mt-16">
          <div className="flex items-end justify-between border-b border-[#7b5cff]/25 pb-3">
            <h3 className="font-display text-2xl text-[#efeaff]">Relic archive</h3>
            <span className="font-mono text-[10px] text-[#cfc9e8]/40">{relics.length} artifacts</span>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[130px] gap-3">
            {relics.map((r, i) => (
              <button
                key={r}
                onClick={() => setLens(r)}
                className={`group relative rounded-xl overflow-hidden ring-1 ring-[#7b5cff]/20 hover:ring-[#35e0d8]/70 transition-all ${
                  i % 6 === 0 ? "row-span-2 col-span-2" : ""
                }`}
              >
                <img
                  src={r}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#7b5cff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lens && (
        <button
          className="fixed inset-0 z-[200] bg-[#06050f]/94 backdrop-blur-md grid place-items-center p-6"
          onClick={() => setLens(null)}
        >
          <img src={lens} alt="" className="max-h-[86vh] max-w-[92vw] object-contain rounded-2xl" />
        </button>
      )}
    </section>
  );
}
