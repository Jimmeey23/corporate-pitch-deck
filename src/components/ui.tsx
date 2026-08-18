import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { fmtINR, type Scenario, type Tone } from "../data/programme";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Kicker ---------------------------------- */

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`kicker inline-flex items-center gap-2.5 text-gold ${className}`}>
      <span className="inline-block h-[3px] w-[3px] rotate-45 bg-gold" />
      {children}
    </span>
  );
}

/* ------------------------------ AnimatedNumber ----------------------------- */

export function AnimatedNumber({
  value,
  format = fmtINR,
  duration = 1.2,
  delay = 0.15,
  className
}: {
  value: number;
  format?: (n: number) => string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => format(v));

  useEffect(() => {
    mv.set(0);
    const c = animate(mv, value, { duration, delay, ease: EASE });
    return () => c.stop();
  }, [value, duration, delay]);

  return (
    <motion.span key={value} className={`tnum ${className ?? ""}`}>
      {text}
    </motion.span>
  );
}

/* -------------------------------- Segmented -------------------------------- */

export function Segmented({
  name,
  options,
  value,
  onChange
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  tone?: Tone;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-bone/10 bg-white/[0.025] p-1 backdrop-blur-sm">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`relative rounded-full px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
              active ? "text-ink" : "text-bone/45 hover:text-bone/90"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`seg-${name}`}
                className="absolute inset-0 rounded-full bg-gradient-to-b from-gilt to-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_6px_18px_-8px_rgba(201,162,39,0.9)]"
                transition={{ duration: 0.45, ease: EASE }}
              />
            )}
            <span className="relative z-10">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------------------------- ScenarioExplorer ----------------------------- */

export function ScenarioExplorer({ scenarios }: { scenarios: Scenario[]; tone?: Tone }) {
  const [sel, setSel] = useState(1);
  const s = scenarios[sel];

  return (
    <div className="flex h-full flex-col">
      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="kicker text-bone/35">Adoption scenario</span>
          <Segmented
            name={`sc-${scenarios[0].tag}`}
            options={scenarios.map((sc, i) => ({ value: String(i), label: sc.label }))}
            value={String(sel)}
            onChange={(v) => setSel(Number(v))}
          />
        </div>
      </Reveal>

      <Reveal delay={0.22} className="mt-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="gold-foil font-display text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[0.9] tracking-[-0.03em]">
              <AnimatedNumber value={s.revenue} />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.26em] text-bone/40">
              Indicative annual investment · {s.label} adoption
            </p>
          </div>
          <span className="hidden font-display text-[4.5rem] italic leading-[0.7] text-gold/25 sm:block">
            {s.label === "Low" ? "α" : s.label === "Medium" ? "β" : "γ"}
          </span>
        </div>
      </Reveal>

      <div className="mt-7 grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-3">
        {scenarios.map((sc, i) => {
          const active = i === sel;
          return (
            <Reveal key={sc.key} delay={0.3 + i * 0.09} className="h-full">
              <button
                onClick={() => setSel(i)}
                className={`flex h-full w-full flex-col p-5 text-left transition-transform duration-500 ${
                  active ? "panel-gold -translate-y-1" : "panel panel-hover text-bone"
                }`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-65">
                    {sc.label}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${
                      active ? "bg-ink/20 text-ink/90" : "bg-gold/10 text-gilt/80"
                    }`}
                  >
                    {sc.tag}
                  </span>
                </div>
                <div className="relative z-10 mt-5 flex-1 space-y-3">
                  {sc.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-2 text-[13px]">
                      <span className="opacity-55">{m.label}</span>
                      <span className="tnum font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div
                  className={`relative z-10 mt-5 border-t pt-3.5 ${
                    active ? "border-ink/15" : "border-bone/8"
                  }`}
                >
                  <div className="font-display text-xl font-light leading-none tracking-[-0.02em]">
                    {fmtINR(sc.revenue)}
                  </div>
                  <div className="mt-1.5 text-[9px] uppercase tracking-[0.22em] opacity-50">
                    indicative · per year
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------ SlideBackdrop ------------------------------ */

export function SlideBackdrop({ variant = 0 }: { variant?: number }) {
  const positions = [
    { left: "-12%", top: "22%" },
    { left: "58%", top: "-14%" },
    { left: "22%", top: "62%" }
  ];
  const p = positions[variant % positions.length];
  return (
    <>
      <div className="hairgrid" />
      <div
        aria-hidden
        className="pointer-events-none absolute h-[620px] w-[620px] rounded-full opacity-[0.09] blur-[140px]"
        style={{ ...p, background: "radial-gradient(circle, #c9a227 0%, transparent 68%)" }}
      />
      <div className="vignette" />
    </>
  );
}

/* -------------------------------- SlideShell ------------------------------- */

export function SlideShell({
  tone,
  num,
  kicker,
  title,
  sub,
  footnote,
  children
}: {
  tone: Tone;
  num: string;
  kicker: string;
  title: ReactNode;
  sub?: string;
  footnote?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`relative h-full w-full overflow-hidden text-bone ${
        tone === "light" ? "bg-ink-2" : "bg-ink"
      }`}
    >
      <SlideBackdrop variant={Number(num) % 3} />

      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -right-6 -top-14 hidden select-none font-display text-[16rem] font-semibold italic leading-none text-gold/[0.07] lg:block"
      >
        {num}
      </span>

      <div className="absolute inset-0 z-10 px-6 pb-[104px] pt-[92px] md:px-12 xl:px-16">
        <div data-scroll className="mx-auto flex h-full max-w-[1500px] flex-col overflow-y-auto pr-1">
          <Reveal>
            <div className="flex items-center gap-6">
              <Kicker>{kicker}</Kicker>
              <span className="rule-gold flex-1" />
              <span className="kicker hidden text-bone/25 md:block">
                {num} - Corporate wellness partnerships
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="balance mt-7 max-w-4xl font-display text-[clamp(2rem,4.2vw,3.6rem)] font-light leading-[1.02] tracking-[-0.028em] text-cream">
              {title}
            </h2>
          </Reveal>

          {sub && (
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-2xl text-[13.5px] leading-[1.75] text-bone/55 md:text-[15px]">
                {sub}
              </p>
            </Reveal>
          )}

          <div className="mt-10 shrink-0 md:mt-12">{children}</div>

          {footnote && (
            <Reveal delay={0.45}>
              <p className="mt-10 flex items-start gap-3.5 text-[11px] leading-relaxed text-bone/32">
                <span className="mt-[6px] h-px w-9 shrink-0 bg-gold/45" />
                <span className="italic">{footnote}</span>
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
