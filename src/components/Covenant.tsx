import { useState } from "react";
import Rite from "./Rite";
import SpellCircle from "./SpellCircle";
import { guilds, outposts, scrolls, sorcerer } from "../arcane";

const PACTS = ["Architecture audit", "Modularization", "MVP conjuring", "Ritual (CI/CD)", "Founding pact", "Warding"];

export default function Covenant() {
  const [sealed, setSealed] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (p: string) =>
    setPicked((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  return (
    <section id="covenant" className="relative py-28 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 veil" />
      <SpellCircle
        size={860}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        opacity={0.16}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <Rite
          numeral="X"
          rune="ᛏ"
          label="The Covenant"
          title={<>Step into the circle.<br />Let us bind something.</>}
          blurb="Two engagements remain open this quarter. Speak plainly and I answer within a day's turning."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Terms */}
          <div className="lg:col-span-5 space-y-4">
            <div className="obsidian rune-border rounded-2xl p-7">
              <div className="eyebrow text-[#35e0d8]">Primary sending</div>
              <div className="mt-3 font-display text-2xl text-[#efeaff] break-all">{sorcerer.email}</div>
              <a
                href={`mailto:${sorcerer.email}`}
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7b5cff] to-[#35e0d8] text-[#06050f] font-display font-bold hover:scale-[1.03] transition-transform"
              >
                Send the sending ➤
              </a>
            </div>

            <div className="obsidian rounded-2xl p-7">
              <div className="eyebrow text-[#35e0d8]">Voice channel</div>
              {sorcerer.phones.map((p) => (
                <div key={p} className="mt-2 font-mono text-[15px] text-[#e2ddf7]">{p}</div>
              ))}
              <div className="mt-3 text-xs text-[#cfc9e8]/45">{sorcerer.realm}</div>
            </div>

            <div className="obsidian rounded-2xl p-7 flex items-center gap-4">
              <span className="relative w-16 h-16 shrink-0">
                <span className="absolute inset-0 rounded-full border border-[#7b5cff]/45 spin-slow" />
                <img
                  src={sorcerer.avatar}
                  alt=""
                  className="absolute inset-1.5 rounded-full object-cover w-[calc(100%-12px)] h-[calc(100%-12px)]"
                />
              </span>
              <div>
                <div className="font-rune text-lg text-[#efeaff]">{sorcerer.name}</div>
                <div className="text-[11px] text-[#cfc9e8]/50 italic">“{sorcerer.creed}”</div>
              </div>
            </div>
          </div>

          {/* Pact form */}
          <form
            className="lg:col-span-7 obsidian rune-border rounded-2xl p-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSealed(true);
              setTimeout(() => setSealed(false), 4200);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your true name" placeholder="Somchai T." />
              <Field label="Sending address" placeholder="you@guild.com" type="email" />
            </div>
            <div className="mt-5">
              <Field label="House / order" placeholder="CTO of a rising guild" />
            </div>

            <div className="mt-6">
              <div className="eyebrow text-[#35e0d8] mb-3">Nature of the pact</div>
              <div className="flex flex-wrap gap-2">
                {PACTS.map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => toggle(p)}
                    className={`glyph-chip normal-case tracking-normal transition-colors ${
                      picked.includes(p)
                        ? "bg-[#35e0d8]/15 border-[#35e0d8] text-[#35e0d8]"
                        : "text-[#a98bff] hover:border-[#7b5cff]"
                    }`}
                  >
                    {picked.includes(p) ? "✦ " : ""}{p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="eyebrow text-[#35e0d8] mb-2">Inscribe your intent</div>
              <textarea
                rows={6}
                placeholder="Describe the working you need bound…"
                className="w-full bg-[#06050f]/60 border border-[#7b5cff]/28 focus:border-[#35e0d8] focus:outline-none rounded-2xl px-4 py-3 text-sm text-[#efeaff] placeholder:text-[#cfc9e8]/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-between px-7 py-4 rounded-full bg-gradient-to-r from-[#7b5cff] via-[#a98bff] to-[#35e0d8] text-[#06050f] font-display font-bold text-lg hover:scale-[1.01] transition-transform"
              style={{ boxShadow: "0 0 44px -10px rgba(123,92,255,.8)" }}
            >
              <span>{sealed ? "✦ The pact is sealed — I answer within a day" : "Seal the pact"}</span>
              <span className="w-9 h-9 rounded-full bg-[#06050f] text-[#35e0d8] grid place-items-center">ᛏ</span>
            </button>
          </form>
        </div>

        {/* Guilds & outposts */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <SubHead t="Guild halls" n={guilds.length} />
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {guilds.map((g) => (
                <a
                  key={g.name}
                  href={g.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#7b5cff]/22 hover:border-[#35e0d8]/60 transition-colors"
                >
                  <span className="font-rune text-[#a98bff] group-hover:text-[#35e0d8]">{g.rune}</span>
                  <span className="text-[13px] text-[#e2ddf7]">{g.name}</span>
                  <span className="ml-auto text-[#cfc9e8]/30 group-hover:text-[#35e0d8]">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <SubHead t="Outposts & scrolls" n={outposts.length + scrolls.length} />
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[...outposts, ...scrolls].map((u, i) => (
                <a
                  key={u + i}
                  href={u}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#7b5cff]/18 hover:border-[#7b5cff]/60 transition-colors font-mono text-[10.5px] text-[#cfc9e8]/65 hover:text-[#efeaff]"
                >
                  <span className="text-[#35e0d8]">◈</span>
                  <span className="truncate">
                    {u.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubHead({ t, n }: { t: string; n: number }) {
  return (
    <div className="flex items-end justify-between border-b border-[#7b5cff]/25 pb-2">
      <h3 className="font-display text-xl text-[#efeaff]">{t}</h3>
      <span className="font-mono text-[10px] text-[#cfc9e8]/40">{n}</span>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="eyebrow text-[#35e0d8] mb-2">{label}</div>
      <input
        {...rest}
        className="w-full bg-[#06050f]/60 border border-[#7b5cff]/28 focus:border-[#35e0d8] focus:outline-none rounded-full px-4 py-2.5 text-sm text-[#efeaff] placeholder:text-[#cfc9e8]/30"
      />
    </div>
  );
}
