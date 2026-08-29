import type { Diagram } from "../arcane";

export default function SpellDiagram({
  type,
  nodes,
  color = "#7b5cff",
  accent = "#35e0d8",
}: {
  type: Diagram;
  nodes: string[];
  color?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 340 260" className="w-full h-auto">
      <defs>
        <filter id="dg-glow">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="dg-core">
          <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {type === "flow" && <Flow nodes={nodes} color={color} accent={accent} />}
      {type === "orbit" && <Orbit nodes={nodes} color={color} accent={accent} />}
      {type === "layers" && <Layers nodes={nodes} color={color} accent={accent} />}
      {type === "mesh" && <Mesh nodes={nodes} color={color} accent={accent} />}
    </svg>
  );
}

type P = { nodes: string[]; color: string; accent: string };

function Flow({ nodes, color, accent }: P) {
  const y = 130;
  const step = 300 / Math.max(1, nodes.length);
  return (
    <g filter="url(#dg-glow)">
      <line x1="20" y1={y} x2="320" y2={y} stroke={color} strokeWidth="1" opacity="0.25" />
      <line
        x1="20" y1={y} x2="320" y2={y}
        stroke={accent} strokeWidth="1.6" className="dash-flow" opacity="0.9"
      />
      {nodes.map((n, i) => {
        const cx = 20 + step * i + step / 2;
        return (
          <g key={n}>
            <circle cx={cx} cy={y} r="26" fill="url(#dg-core)" />
            <circle
              cx={cx} cy={y} r="20" fill="#0a0918"
              stroke={i % 2 ? accent : color} strokeWidth="1.4"
              className="mana-pulse"
              style={{ color: i % 2 ? accent : color, animationDelay: `${i * 0.35}s` }}
            />
            <text x={cx} y={y + 4} textAnchor="middle" fill="#efeaff" fontSize="9" fontFamily="monospace">
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={cx} y={y + 46} textAnchor="middle" fill="#cfc9e8" fontSize="9.5" opacity="0.8">
              {n}
            </text>
          </g>
        );
      })}
      <text x="170" y="36" textAnchor="middle" fill={accent} fontSize="9" letterSpacing="4" fontFamily="monospace">
        UNIDIRECTIONAL FLOW
      </text>
    </g>
  );
}

function Orbit({ nodes, color, accent }: P) {
  return (
    <g filter="url(#dg-glow)">
      <circle cx="170" cy="130" r="90" fill="none" stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="4 8" />
      <circle cx="170" cy="130" r="58" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.3" strokeDasharray="3 7" />
      <circle cx="170" cy="130" r="34" fill="url(#dg-core)" />
      <circle cx="170" cy="130" r="26" fill="#0a0918" stroke={accent} strokeWidth="1.5" />
      <text x="170" y="134" textAnchor="middle" fill={accent} fontSize="11" fontFamily="serif">ᛝ</text>

      <g style={{ transformOrigin: "170px 130px" }} className="spin-slow">
        {nodes.map((n, i) => {
          const a = (i / nodes.length) * Math.PI * 2;
          const cx = 170 + Math.cos(a) * 90;
          const cy = 130 + Math.sin(a) * 90;
          return (
            <g key={n}>
              <line x1="170" y1="130" x2={cx} y2={cy} stroke={color} strokeWidth="0.8" opacity="0.35" />
              <circle cx={cx} cy={cy} r="16" fill="#0a0918" stroke={color} strokeWidth="1.3" />
              <text x={cx} y={cy + 3.5} textAnchor="middle" fill="#cfc9e8" fontSize="7.5">
                {n.slice(0, 6)}
              </text>
            </g>
          );
        })}
      </g>
      <text x="170" y="248" textAnchor="middle" fill={color} fontSize="9" letterSpacing="4" fontFamily="monospace">
        SATELLITE BINDING
      </text>
    </g>
  );
}

function Layers({ nodes, color, accent }: P) {
  const h = 30;
  const gap = 10;
  const top = 26;
  return (
    <g filter="url(#dg-glow)">
      {nodes.map((n, i) => {
        const y = top + i * (h + gap);
        const inset = i * 12;
        const c = i % 2 ? accent : color;
        return (
          <g key={n}>
            <rect
              x={40 + inset} y={y} width={260 - inset * 2} height={h} rx="8"
              fill={`${c}14`} stroke={c} strokeWidth="1.2"
              className="mana-pulse" style={{ color: c, animationDelay: `${i * 0.3}s` }}
            />
            <text x={54 + inset} y={y + 19} fill="#efeaff" fontSize="10" fontFamily="monospace">{n}</text>
            <text x={286 - inset} y={y + 19} textAnchor="end" fill={c} fontSize="8.5" fontFamily="monospace">
              L{i + 1}
            </text>
            {i < nodes.length - 1 && (
              <line
                x1="170" y1={y + h} x2="170" y2={y + h + gap}
                stroke={accent} strokeWidth="1.4" className="dash-flow" markerEnd=""
              />
            )}
          </g>
        );
      })}
      <text x="170" y="250" textAnchor="middle" fill={accent} fontSize="9" letterSpacing="4" fontFamily="monospace">
        DEPENDENCIES DESCEND ONLY
      </text>
    </g>
  );
}

function Mesh({ nodes, color, accent }: P) {
  const pts = nodes.map((_, i) => {
    const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 170 + Math.cos(a) * 82, y: 122 + Math.sin(a) * 82 };
  });
  return (
    <g filter="url(#dg-glow)">
      {pts.map((p, i) =>
        pts.slice(i + 1).map((q, j) => (
          <line
            key={`${i}-${j}`}
            x1={p.x} y1={p.y} x2={q.x} y2={q.y}
            stroke={j % 2 ? accent : color}
            strokeWidth="0.9"
            opacity="0.45"
            className="dash-flow"
            style={{ animationDelay: `${(i + j) * 0.2}s` }}
          />
        ))
      )}
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="24" fill="url(#dg-core)" />
          <circle
            cx={p.x} cy={p.y} r="17" fill="#0a0918" stroke={color} strokeWidth="1.3"
            className="mana-pulse" style={{ color, animationDelay: `${i * 0.25}s` }}
          />
          <text x={p.x} y={p.y + 3.5} textAnchor="middle" fill="#cfc9e8" fontSize="7.5">
            {nodes[i].slice(0, 6)}
          </text>
        </g>
      ))}
      <text x="170" y="242" textAnchor="middle" fill={color} fontSize="9" letterSpacing="4" fontFamily="monospace">
        FULLY CONNECTED WEAVE
      </text>
    </g>
  );
}
