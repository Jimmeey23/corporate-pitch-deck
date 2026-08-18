import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedNumber, Reveal, Segmented, SlideShell, EASE } from "../components/ui";
import { OPTIONS, PORTFOLIO, fmtINR, fmtShort } from "../data/programme";

const SCEN_LABELS = [
  { value: "0", label: "Low" },
  { value: "1", label: "Medium" },
  { value: "2", label: "High" }
];

const CAPTIONS = [
  "A gentle start - modest commitments with room to grow",
  "A balanced rollout - where most partners land in year one",
  "Full momentum - company-wide adoption with leadership advocacy"
];

const PORTFOLIO_KEYS: ("low" | "medium" | "high")[] = ["low", "medium", "high"];

export function Comparison() {
  const [sel, setSel] = useState(1);
  const max = Math.max(...OPTIONS.map((o) => o.scenarios[sel].revenue));

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
      sub="Our programmes are designed to work together, not compete - most partners combine two or three to cover different teams and goals. Figures show indicative annual investment per programme."
      footnote="Most partners begin with hosted classes or a credit block, and grow into memberships and leadership programmes as participation builds."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Segmented
          name="portfolio"
          options={SCEN_LABELS}
          value={String(sel)}
          onChange={(v) => setSel(Number(v))}
        />
        <Reveal delay={0.1}>
          <p className="text-[10px] uppercase tracking-[0.24em] text-bone/35">{CAPTIONS[sel]}</p>
        </Reveal>
      </div>

      <div className="panel mt-8 overflow-hidden">
        <div className="relative z-10">
          {OPTIONS.map((o, i) => {
            const rev = o.scenarios[sel].revenue;
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
                  <div className="relative h-[26px] overflow-hidden rounded-full bg-white/[0.025]">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #8a6f2b 0%, #c9a227 55%, #f0d999 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, delay: 0.08 + i * 0.07, ease: EASE }}
                    />
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className="font-display text-[1.15rem] font-light leading-none tracking-[-0.02em] text-champagne">
                      <AnimatedNumber key={sel} value={rev} format={fmtShort} duration={0.95} />
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
              All six programmes combined · {SCEN_LABELS[sel].label.toLowerCase()} adoption
            </p>
          </div>
          <div className="gold-foil relative z-10 font-display text-[2rem] font-light leading-none tracking-[-0.035em] md:text-[2.5rem]">
            <AnimatedNumber key={sel} value={PORTFOLIO[PORTFOLIO_KEYS[sel]]} duration={1.3} />
            <span className="ml-2.5 align-middle font-sans text-[9px] uppercase tracking-[0.24em] text-bone/35">
              / year
            </span>
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}
