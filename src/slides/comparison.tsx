import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Reveal, Segmented, SlideShell } from "../components/ui";
import { OPTIONS, fmtINR, fmtShort } from "../data/programme";

const PRESETS: { value: string; label: string; t: number }[] = [
  { value: "0", label: "Low", t: 0 },
  { value: "1", label: "Medium", t: 0.5 },
  { value: "2", label: "High", t: 1 }
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const DEFAULT_LEVELS = OPTIONS.map(() => 0.5);

export function Comparison() {
  const [levels, setLevels] = useState<number[]>(DEFAULT_LEVELS);
  const [preset, setPreset] = useState<string | null>("1");

  const revenues = OPTIONS.map((o, i) => lerp(o.scenarios[0].revenue, o.scenarios[2].revenue, levels[i]));
  const max = Math.max(...revenues);
  const total = revenues.reduce((s, r) => s + r, 0);

  const applyPreset = (v: string) => {
    const p = PRESETS.find((p) => p.value === v)!;
    setLevels(OPTIONS.map(() => p.t));
    setPreset(v);
  };

  const updateLevel = (i: number, t: number) => {
    setLevels((prev) => {
      const next = [...prev];
      next[i] = t;
      return next;
    });
    setPreset(null);
  };

  return (
    <SlideShell
      tone="dark"
      num="07"
      kicker="The complete picture"
      title={
        <>
          Three levels of ambition,{" "}
          <span className="gold-foil italic">one clear picture.</span>
        </>
      }
      sub="Our programmes are designed to work together, not compete - most partners combine two or three to cover different teams and goals. Drag any bar to model your own mix; figures show indicative annual investment per programme."
      footnote="Most partners begin with hosted classes or a credit block, and grow into memberships and leadership programmes as participation builds. Each slider ranges from that programme's low to high adoption scenario."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Segmented
          name="portfolio"
          options={PRESETS.map(({ value, label }) => ({ value, label }))}
          value={preset ?? ""}
          onChange={applyPreset}
        />
        <Reveal delay={0.1}>
          <button
            onClick={() => applyPreset("1")}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-bone/35 transition-colors duration-300 hover:text-gilt"
          >
            <RotateCcw size={11} /> Reset to medium
          </button>
        </Reveal>
      </div>

      <div className="panel mt-8 overflow-hidden">
        <div className="relative z-10">
          {OPTIONS.map((o, i) => {
            const rev = revenues[i];
            const pct = Math.max((rev / max) * 100, 3);
            return (
              <Reveal key={o.id} delay={0.14 + i * 0.07}>
                <div
                  className={`grid grid-cols-[96px_1fr] items-center gap-5 px-6 py-4 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[230px_1fr_140px] ${
                    i > 0 ? "border-t border-bone/[0.055]" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="tnum font-display text-[11px] italic text-gold/55">{o.num}</span>
                    <p className="text-[12.5px] font-medium tracking-[-0.005em] text-bone/85">
                      {o.short}
                    </p>
                  </div>

                  <div className="relative h-[26px]">
                    <div className="absolute inset-0 overflow-hidden rounded-full bg-white/[0.025]">
                      <div
                        className="h-full rounded-full transition-[width] duration-150 ease-out"
                        style={{
                          width: `${pct}%`,
                          background: "linear-gradient(90deg, #8a6f2b 0%, #c9a227 55%, #f0d999 100%)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={levels[i]}
                      onChange={(e) => updateLevel(i, parseFloat(e.target.value))}
                      aria-label={`${o.short} adoption level`}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <div
                      className="pointer-events-none absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt shadow-[0_0_10px_rgba(231,200,122,0.7)]"
                      style={{ left: `${pct}%` }}
                    />
                  </div>

                  <div className="hidden text-right sm:block">
                    <div className="font-display text-[1.15rem] font-light leading-none tracking-[-0.02em] text-champagne">
                      {fmtShort(rev)}
                    </div>
                    <div className="tnum mt-1.5 text-[9px] tracking-wide text-bone/28">
                      {fmtINR(rev)}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.55}>
        <div className="panel-wash mt-4 flex flex-wrap items-center justify-between gap-5 px-7 py-6">
          <div className="relative z-10">
            <span className="kicker text-gold">The complete programme</span>
            <p className="mt-2 text-[12px] text-bone/45">
              All six programmes combined ·{" "}
              {preset ? `${PRESETS.find((p) => p.value === preset)!.label.toLowerCase()} adoption` : "your custom mix"}
            </p>
          </div>
          <div className="gold-foil relative z-10 font-display text-[2rem] font-light leading-none tracking-[-0.035em] md:text-[2.5rem]">
            {fmtINR(total)}
            <span className="ml-2.5 align-middle font-sans text-[9px] uppercase tracking-[0.24em] text-bone/35">
              / year
            </span>
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}
