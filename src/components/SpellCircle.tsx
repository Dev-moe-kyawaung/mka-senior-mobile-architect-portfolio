import { RUNES } from "../arcane";

function ringRunes(count: number, seed: number) {
  let s = "";
  for (let i = 0; i < count; i++) s += RUNES[(i * 7 + seed) % RUNES.length] + " ";
  return s;
}

export default function SpellCircle({
  size = 520,
  className = "",
  opacity = 0.85,
  colors = ["#7b5cff", "#35e0d8", "#f0b64a"],
}: {
  size?: number;
  className?: string;
  opacity?: number;
  colors?: string[];
}) {
  const [c1, c2, c3] = colors;
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      aria-hidden
    >
      <defs>
        <path id="sc-outer" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" />
        <path id="sc-inner" d="M200,200 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
        <radialGradient id="sc-core">
          <stop offset="0%" stopColor={c2} stopOpacity="0.55" />
          <stop offset="60%" stopColor={c1} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c1} stopOpacity="0" />
        </radialGradient>
        <filter id="sc-glow">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="200" cy="200" r="150" fill="url(#sc-core)" />

      {/* Outer runic ring */}
      <g className="spin-slow" filter="url(#sc-glow)">
        <circle cx="200" cy="200" r="188" fill="none" stroke={c1} strokeWidth="0.7" opacity="0.5" />
        <circle cx="200" cy="200" r="176" fill="none" stroke={c1} strokeWidth="1.4" opacity="0.75" />
        <text fill={c1} fontSize="13" letterSpacing="5" fontFamily="serif" opacity="0.95">
          <textPath href="#sc-outer">{ringRunes(46, 3)}</textPath>
        </text>
      </g>

      {/* Mid dashed ring */}
      <g className="spin-mid" filter="url(#sc-glow)">
        <circle
          cx="200" cy="200" r="150" fill="none" stroke={c2}
          strokeWidth="1.1" strokeDasharray="3 12" opacity="0.85"
        />
        <circle cx="200" cy="200" r="140" fill="none" stroke={c2} strokeWidth="0.5" opacity="0.4" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={200 + Math.cos(a) * 150}
              cy={200 + Math.sin(a) * 150}
              r="3"
              fill={c2}
              className="mana-pulse"
              style={{ color: c2, animationDelay: `${i * 0.18}s` }}
            />
          );
        })}
      </g>

      {/* Inner runic ring */}
      <g className="spin-fast" filter="url(#sc-glow)">
        <circle cx="200" cy="200" r="118" fill="none" stroke={c3} strokeWidth="1" opacity="0.65" />
        <text fill={c3} fontSize="10" letterSpacing="4" fontFamily="serif" opacity="0.9">
          <textPath href="#sc-inner">{ringRunes(34, 11)}</textPath>
        </text>
      </g>

      {/* Sacred geometry: two interlocked triangles + square */}
      <g className="spin-mid" filter="url(#sc-glow)" opacity="0.85">
        <polygon points="200,92 293,254 107,254" fill="none" stroke={c1} strokeWidth="1.2" />
        <polygon points="200,308 107,146 293,146" fill="none" stroke={c2} strokeWidth="1.2" />
      </g>
      <g className="spin-slow" opacity="0.5">
        <rect x="126" y="126" width="148" height="148" fill="none" stroke={c3} strokeWidth="0.8" />
      </g>

      {/* Core nucleus */}
      <circle cx="200" cy="200" r="30" fill="none" stroke={c2} strokeWidth="1" opacity="0.8" className="mana-pulse" style={{ color: c2 }} />
      <circle cx="200" cy="200" r="8" fill={c2} opacity="0.8" className="mana-pulse" style={{ color: c2 }} />
    </svg>
  );
}
