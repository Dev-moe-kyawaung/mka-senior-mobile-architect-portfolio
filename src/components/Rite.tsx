import type { ReactNode } from "react";

export default function Rite({
  numeral,
  rune,
  label,
  title,
  blurb,
}: {
  numeral: string;
  rune: string;
  label: string;
  title: ReactNode;
  blurb?: ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 items-end">
      <div className="lg:col-span-3 flex items-center gap-4">
        <div className="relative w-14 h-14 shrink-0 grid place-items-center">
          <span className="absolute inset-0 rounded-full border border-[#7b5cff]/40 spin-slow" />
          <span className="absolute inset-2 rounded-full border border-[#35e0d8]/30 spin-mid" />
          <span className="text-2xl text-[#a98bff] rune-flicker">{rune}</span>
        </div>
        <div>
          <div className="eyebrow text-[#35e0d8]">Chapter {numeral}</div>
          <div className="font-display text-sm tracking-[0.3em] uppercase text-[#cfc9e8]/70 mt-1">
            {label}
          </div>
        </div>
      </div>
      <div className="lg:col-span-6">
        <h2 className="font-rune text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#efeaff] text-arcane-glow">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-3">
        {blurb && <p className="text-sm leading-relaxed text-[#cfc9e8]/60 italic">{blurb}</p>}
      </div>
    </div>
  );
}
