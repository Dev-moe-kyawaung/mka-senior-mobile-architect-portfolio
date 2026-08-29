import SpellCircle from "./SpellCircle";

export default function SpellTransition({ active, rune }: { active: boolean; rune: string }) {
  return (
    <div
      className={`fixed inset-0 z-[250] grid place-items-center transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: active ? "radial-gradient(circle, rgba(6,5,15,.94), rgba(6,5,15,.72))" : "transparent" }}
    >
      {active && (
        <div className="relative sigil-bloom">
          <SpellCircle size={460} />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-rune text-7xl text-[#35e0d8] text-mana-glow">{rune}</span>
          </div>
        </div>
      )}
    </div>
  );
}
