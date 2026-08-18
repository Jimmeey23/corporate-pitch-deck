import { useState } from "react";
import { RotateCcw, Pencil } from "lucide-react";
import { Reveal, Segmented, SlideShell } from "../components/ui";
import { OPTIONS, fmtINR, fmtShort } from "../data/programme";

const PRESETS: { value: string; label: string; scenario: 0 | 1 | 2 }[] = [
  { value: "0", label: "Low", scenario: 0 },
  { value: "1", label: "Medium", scenario: 1 },
  { value: "2", label: "High", scenario: 2 }
];

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

const DEFAULT_VALUES = OPTIONS.map((o) => o.scenarios[1].revenue);

export function Comparison() {
  const [values, setValues] = useState<number[]>(DEFAULT_VALUES);
  const [preset, setPreset] = useState<string | null>("1");

  const max = Math.max(...values);
  const total = values.reduce((s, r) => s + r, 0);

  const applyPreset = (v: string) => {
    const p = PRESETS.find((p) => p.value === v)!;
    setValues(OPTIONS.map((o) => o.scenarios[p.scenario].revenue));
    setPreset(v);
  };

  const setValue = (i: number, next: number) => {
    setValues((prev) => {
      const copy = [...prev];
      copy[i] = clamp(next, 0, 1e9);
      return copy;
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
      sub="Our programmes are designed to work together, not compete - most partners combine two or three to cover different teams and goals. Drag a bar or type an exact figure to model your own mix."
      footnote="Most partners begin with hosted classes or a credit block, and grow into memberships and leadership programmes as participation builds. Edit any figure below - the combined total updates instantly."
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
            const rev = values[i];
            const lo = o.scenarios[0].revenue;
            const hi = o.scenarios[2].revenue;
            const t = clamp((rev - lo) / (hi - lo || 1), 0, 1);
            const pct = clamp((rev / max) * 100, 3, 100);
            return (
              <Reveal key={o.id} delay={0.14 + i * 0.07}>
                <div
                  className={`grid grid-cols-[96px_1fr] items-center gap-4 px-6 py-4 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[210px_1fr_150px] sm:gap-5 ${
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
                      step={0.005}
                      value={t}
                      onChange={(e) => setValue(i, Math.round(lerpVal(lo, hi, parseFloat(e.target.value))))}
                      aria-label={`${o.short} adoption level`}
                      className="absolute inset-0 h-full w-full cursor-grab opacity-0 active:cursor-grabbing"
                    />
                    <div
                      className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-gilt shadow-[0_0_10px_rgba(231,200,122,0.8)]"
                      style={{ left: `${pct}%` }}
                    />
                  </div>

                  <div className="hidden text-right sm:block">
                    <div className="font-display text-[1.15rem] font-light leading-none tracking-[-0.02em] text-champagne">
                      {fmtShort(rev)}
                    </div>
                    <label className="group mt-1.5 flex items-center justify-end gap-1.5">
                      <Pencil size={9} className="text-gold/40 transition-colors duration-200 group-focus-within:text-gold" />
                      <span className="tnum text-[9px] text-bone/28">₹</span>
                      <input
                        type="number"
                        min={0}
                        step={1000}
                        value={Math.round(rev)}
                        onChange={(e) => setValue(i, Number(e.target.value) || 0)}
                        className="tnum w-[86px] border-b border-dashed border-gold/25 bg-transparent text-right text-[10px] tracking-wide text-bone/60 outline-none transition-colors duration-200 hover:border-gold/50 focus:border-gold focus:text-champagne"
                      />
                    </label>
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

function lerpVal(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
