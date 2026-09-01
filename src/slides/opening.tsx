import { motion } from "framer-motion";
import { ArrowRight, MoveUpRight, Check, Minus, X, TrendingDown } from "lucide-react";
import { Reveal, AnimatedNumber, SlideShell, SlideBackdrop, Kicker, EASE } from "../components/ui";
import { OPTIONS, fmtShort, fmtINR } from "../data/programme";
import {
  ANNUAL_EXITS,
  ATTRITION_BILL,
  ATTRITION_UPSIDE,
  ABSENTEEISM_BILL,
  PRESENTEEISM_BILL,
  TOTAL_INACTION_BILL,
  GYM_ANNUAL_SPEND,
  GYM_ACTUAL_USERS,
  GYM_COST_PER_USER,
  ILLUSTRATIVE
} from "../data/model";

/* ---------------------------------- Cover ---------------------------------- */

export function Cover() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-ink text-bone">
      <motion.img
        src="/images/cover.jpg"
        alt="Physique 57 barre studio"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.16, opacity: 0.35 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 2.2, ease: EASE }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 left-[18%] h-[680px] w-[680px] rounded-full opacity-[0.11] blur-[150px]"
        style={{ background: "radial-gradient(circle, #c9a227 0%, transparent 68%)" }}
      />
      <div className="vignette" />

      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -bottom-20 right-0 hidden select-none font-display text-[22rem] font-semibold italic leading-none text-gold/[0.13] lg:block"
      >
        57
      </span>

      {/* vertical edge label */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <span
          className="kicker block whitespace-nowrap text-bone/25"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Est. New York 2006 - Mumbai Flagship
        </span>
      </div>

      <div className="absolute inset-0 z-10 px-6 pb-[88px] pt-[80px] md:px-12 xl:px-16">
        <div data-scroll className="mx-auto flex h-full max-w-[1500px] flex-col overflow-y-auto">
          <div className="mt-auto">
            <Reveal delay={0.3}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-gradient-to-r from-gold to-gilt/40" />
                <span className="kicker text-gilt/80">Corporate Wellness Partnerships · India</span>
              </div>
            </Reveal>

            <h1 className="mt-8 font-display font-light leading-[0.92] tracking-[-0.038em]">
              <Reveal delay={0.42}>
                <span className="block text-[clamp(3rem,8.4vw,7.6rem)] text-cream">Fitness that moves</span>
              </Reveal>
              <Reveal delay={0.56}>
                <span className="gold-foil block text-[clamp(3rem,8.4vw,7.6rem)] italic">
                  your business forward.
                </span>
              </Reveal>
            </h1>

            <Reveal delay={0.7}>
              <p className="mt-9 max-w-lg text-[13.5px] leading-[1.8] text-bone/60 md:text-[15px]">
                Five ways to bring Physique 57 to your workplace - from flexible benefits and hosted
                classes to a leadership concierge - each with transparent pricing and room to grow
                with your teams.
              </p>
            </Reveal>

            <Reveal delay={0.82}>
              <div className="mt-11 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-bone/[0.08] pt-6 text-[10px] uppercase tracking-[0.28em] text-bone/45">
                <span className="flex items-center gap-2.5">
                  <span className="h-[3px] w-[3px] rotate-45 bg-gold" /> 5 programmes
                </span>
                <span className="flex items-center gap-2.5">
                  <span className="h-[3px] w-[3px] rotate-45 bg-gold" /> 3 adoption scenarios each
                </span>
                <span className="flex items-center gap-2.5">
                  <span className="h-[3px] w-[3px] rotate-45 bg-gold" /> Benchmarked to published rates
                </span>
                <span className="hidden items-center gap-2.5 text-bone/30 md:flex">
                  Press <ArrowRight size={12} className="inline text-gold" /> to begin
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-24 hidden text-right md:right-12 md:block xl:right-16">
        <Reveal delay={1}>
          <p className="text-[9px] uppercase tracking-[0.3em] text-bone/35">Prepared for</p>
          <p className="mt-2 font-display text-lg italic tracking-[-0.01em] text-champagne">
            People &amp; HR Leaders
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-bone/35">
            Private &amp; confidential
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Why Now --------------------------------- */

/**
 * Third-party research only. Every figure carries its source and year on the
 * slide - an unattributed statistic in front of a finance team is worth less
 * than no statistic at all.
 *
 * ⚠️  Re-verify each of these against the current edition of its source before
 *     pitching; published figures get revised.
 */
const STATS: { value: number; format: (n: number) => string; label: string; source: string }[] = [
  {
    value: 80,
    format: (n) => `${Math.round(n)}%`,
    label: "of India's workforce reported mental-health symptoms in the past year",
    source: "Deloitte India, Mental Health & Wellbeing in the Workplace, 2022"
  },
  {
    value: 14,
    format: (n) => `$${Math.round(n)}B`,
    label: "lost by Indian employers every year to absenteeism, presenteeism and attrition",
    source: "Deloitte India, 2022 - roughly ₹1.2 lakh crore"
  },
  {
    value: 47,
    format: (n) => `${Math.round(n)}%`,
    label: "name workplace stress as the single biggest factor affecting their wellbeing",
    source: "Deloitte India, 2022"
  },
  {
    value: 12,
    format: (n) => `${Math.round(n)}B`,
    label: "working days lost worldwide each year to depression and anxiety alone",
    source: "WHO & ILO, 2022"
  }
];

/**
 * Derived arithmetic, not a citation - the same model slides 03 and 06 run,
 * applied to an illustrative 500-person business so the macro figures above
 * land as something with a rupee sign in front of it.
 */
const PL_BAND = [
  {
    value: `${Math.round(ANNUAL_EXITS)}`,
    label: "people leave a 500-person business each year",
    note: "At 18% attrition"
  },
  {
    value: fmtShort(ATTRITION_BILL),
    label: "the annual bill to replace them",
    note: "7.5 months of a ₹25L average CTC"
  },
  {
    value: fmtShort(ATTRITION_UPSIDE),
    label: "returned by a two-point improvement",
    note: "Ten departures that don't happen"
  }
];

const EXPECTATIONS = [
  { title: "Participation you can measure", text: "Clear monthly reporting on enrolment, attendance and engagement - no guesswork." },
  { title: "Billing your finance team will love", text: "One consolidated, GST-compliant invoice across every programme and location." },
  { title: "Coverage beyond the head office", text: "Options for hybrid and distributed teams across every Indian pin code." },
  { title: "Experiences worth staying for", text: "Programmes premium enough to sit alongside retention and leadership plans." }
];

export function WhyNow() {
  return (
    <SlideShell
      tone="light"
      num="01"
      kicker="Why now"
      title={
        <>
          Wellbeing has moved from a perk <br className="hidden md:block" />
          to a <span className="gold-foil italic">performance strategy.</span>
        </>
      }
      sub="India's most admired employers now treat structured wellbeing as core talent infrastructure - because burnout, attrition and disengagement show up directly on the bottom line."
    >
      <div className="grid gap-3.5 lg:grid-cols-12">
        <div className="grid gap-3.5 sm:grid-cols-2 lg:col-span-7">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.18 + i * 0.09} className="h-full">
              <div className="panel panel-hover flex h-full flex-col justify-between p-5">
                <span className="gold-foil relative z-10 font-display text-[clamp(2.2rem,3vw,3.1rem)] font-light leading-[0.85] tracking-[-0.035em]">
                  <AnimatedNumber value={s.value} format={s.format} duration={1.4} />
                </span>
                <div className="relative z-10 mt-5">
                  <p className="text-[12.5px] leading-[1.55] text-bone/65">{s.label}</p>
                  <p className="mt-3 flex items-center gap-2.5 text-[9px] uppercase tracking-[0.24em] text-bone/28">
                    <span className="h-px w-6 bg-gold/50" /> {s.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="lg:col-span-5">
          <div className="panel-wash flex h-full flex-col p-7">
            <Kicker>What your teams should expect</Kicker>
            <div className="relative z-10 mt-6 flex flex-1 flex-col justify-between gap-5">
              {EXPECTATIONS.map((d, i) => (
                <div key={d.title} className="flex gap-5">
                  <span className="tnum pt-1 font-display text-xs italic text-gold/60">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-[1.15rem] font-light leading-tight tracking-[-0.015em] text-champagne">
                      {d.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.65] text-bone/50">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="relative z-10 mt-6 border-t border-gold/15 pt-4 text-[10px] uppercase tracking-[0.24em] text-bone/35">
              Wellbeing is now a standing item in leadership conversations.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.52}>
        <div className="panel-wash mt-3.5 px-7 py-6">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            <div className="max-w-[15rem]">
              <Kicker>Against your own P&amp;L</Kicker>
              <p className="mt-2.5 text-[11.5px] leading-[1.6] text-bone/40">
                The same arithmetic, on an illustrative 500-person business.
              </p>
            </div>
            {PL_BAND.map((b) => (
              <div key={b.label}>
                <p className="gold-foil tnum font-display text-[1.75rem] font-light leading-none tracking-[-0.03em]">
                  {b.value}
                </p>
                <p className="mt-2.5 max-w-[13rem] text-[12px] leading-snug text-bone/60">{b.label}</p>
                <p className="mt-1 text-[10px] text-bone/30">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}

/* ------------------------------- Status Quo -------------------------------- */

type Level = "no" | "partial" | "yes";

const COMPARISON_ROWS: { label: string; none: Level; gym: Level; p57: Level }[] = [
  { label: "Employees actually show up and keep coming back", none: "no", gym: "partial", p57: "yes" },
  { label: "Certified, instructor-led form correction", none: "no", gym: "no", p57: "yes" },
  { label: "Builds community, not just facility access", none: "no", gym: "partial", p57: "yes" },
  { label: "Reaches hybrid and distributed teams", none: "no", gym: "partial", p57: "yes" },
  { label: "Transparent, centrally benchmarked pricing", none: "no", gym: "no", p57: "yes" },
  { label: "Monthly reporting your leadership will read", none: "no", gym: "no", p57: "yes" },
  { label: "Reads as genuine investment, not a perk box ticked", none: "no", gym: "partial", p57: "yes" }
];

/** The three places the money actually leaks. Presenteeism is the largest and
 *  the least visible, which is exactly why it never gets budgeted against. */
const LEAKS = [
  {
    value: ATTRITION_BILL,
    title: "Attrition",
    note: `${Math.round(ANNUAL_EXITS)} departures replaced at 7.5 months of CTC`
  },
  {
    value: PRESENTEEISM_BILL,
    title: "Presenteeism",
    note: `A ${Math.round(ILLUSTRATIVE.presenteeismDrag * 100)}% productivity drag from people at work but not at their best`
  },
  {
    value: ABSENTEEISM_BILL,
    title: "Absenteeism",
    note: `${ILLUSTRATIVE.sickDaysAvoided} sick days per person, valued at the daily rate`
  }
];

function StatusIcon({ level }: { level: Level }) {
  if (level === "yes")
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.1] text-gold">
        <Check size={13} strokeWidth={2.6} />
      </span>
    );
  if (level === "partial")
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-bone/10 bg-bone/[0.04] text-bone/40">
        <Minus size={13} strokeWidth={2.6} />
      </span>
    );
  return (
    <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-bone/[0.06] bg-bone/[0.02] text-bone/20">
      <X size={13} strokeWidth={2.6} />
    </span>
  );
}

export function StatusQuo() {
  return (
    <SlideShell
      tone="dark"
      num="02"
      kicker="The cost of inaction"
      title={
        <>
          Doing nothing already has a price.{" "}
          <span className="gold-foil italic">It just isn't on a line item.</span>
        </>
      }
      sub="Modelled on the same illustrative 500-person business, at a ₹25L average CTC."
      footnote="Derived arithmetic, not a citation - every figure is a calculation you can redo, and we will run it against your own headcount and attrition on request."
    >
      <div className="grid items-start gap-3.5 lg:grid-cols-12">
        {/* ------------------------- what it already costs ------------------------ */}
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          <Reveal delay={0.12}>
            <div className="panel-wash px-6 py-5">
              <div className="relative z-10 flex items-baseline justify-between gap-4">
                <Kicker>Leaking every year</Kicker>
                <span className="text-[9px] uppercase tracking-[0.2em] text-bone/28">
                  500 people
                </span>
              </div>
              <p className="gold-foil relative z-10 mt-3.5 font-display text-[clamp(2.4rem,4vw,3.2rem)] font-light leading-[0.88] tracking-[-0.035em]">
                <AnimatedNumber value={TOTAL_INACTION_BILL} format={fmtShort} duration={1.5} />
              </p>
              <p className="relative z-10 mt-3 text-[12px] leading-[1.6] text-bone/45">
                Carried quietly, every year, by a business that has decided this is not a
                priority.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="panel overflow-hidden">
              <div className="relative z-10">
                {LEAKS.map((l, i) => (
                  <div
                    key={l.title}
                    className={`flex items-baseline justify-between gap-5 px-5 py-3 ${
                      i > 0 ? "border-t border-bone/[0.06]" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-bone/55">
                        {l.title}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-snug text-bone/32">{l.note}</p>
                    </div>
                    <span className="tnum shrink-0 font-display text-[1.25rem] font-light tracking-[-0.02em] text-champagne">
                      {fmtShort(l.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* The sharpest number on the slide: what an unused benefit really costs. */}
          <Reveal delay={0.3}>
            <div className="panel p-5">
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                  <TrendingDown size={13} strokeWidth={2} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  And the benefit you already buy
                </span>
              </div>
              <div className="relative z-10 mt-4 flex flex-wrap items-end gap-x-7 gap-y-3">
                <div>
                  <p className="tnum font-display text-[1.3rem] font-light leading-none tracking-[-0.02em] text-bone/50">
                    {fmtShort(GYM_ANNUAL_SPEND)}
                  </p>
                  <p className="mt-2 text-[9.5px] uppercase tracking-[0.18em] text-bone/32">
                    Spent a year
                  </p>
                </div>
                <span className="pb-2 text-bone/20">→</span>
                <div>
                  <p className="tnum font-display text-[1.3rem] font-light leading-none tracking-[-0.02em] text-bone/50">
                    {Math.round(GYM_ACTUAL_USERS)} of {ILLUSTRATIVE.headcount}
                  </p>
                  <p className="mt-2 text-[9.5px] uppercase tracking-[0.18em] text-bone/32">
                    Actually use it
                  </p>
                </div>
                <span className="pb-2 text-bone/20">→</span>
                <div>
                  <p className="gold-foil tnum font-display text-[1.55rem] font-light leading-none tracking-[-0.025em]">
                    {fmtINR(Math.round(GYM_COST_PER_USER))}
                  </p>
                  <p className="mt-2 text-[9.5px] uppercase tracking-[0.18em] text-gold/55">
                    Per person who does
                  </p>
                </div>
              </div>
              <p className="relative z-10 mt-3.5 text-[11.5px] leading-[1.6] text-bone/45">
                A ₹15,000 gym benefit at the 12% utilisation these programmes typically see. The
                per-head price was never the price.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------------------------- the alternatives --------------------------- */}
        <Reveal delay={0.24} className="lg:col-span-7">
          <div className="panel overflow-x-auto p-5 md:p-6">
            <div className="relative z-10 min-w-[520px]">
              <div className="grid grid-cols-[1fr_78px_78px_78px] items-end gap-3 pb-4 sm:grid-cols-[1fr_120px_120px_120px] sm:gap-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-bone/28">
                  So what actually changes it
                </span>
                <span className="text-center text-[9px] uppercase leading-tight tracking-[0.16em] text-bone/35">
                  No structured benefit
                </span>
                <span className="text-center text-[9px] uppercase leading-tight tracking-[0.16em] text-bone/35">
                  Generic gym membership
                </span>
                <span className="text-center text-[9px] uppercase leading-tight tracking-[0.16em] text-gold">
                  Physique 57 partnership
                </span>
              </div>
              {COMPARISON_ROWS.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid grid-cols-[1fr_78px_78px_78px] items-center gap-3 py-2.5 sm:grid-cols-[1fr_120px_120px_120px] sm:gap-4 ${
                    i > 0 ? "border-t border-bone/[0.06]" : ""
                  }`}
                >
                  <p className="text-[12px] leading-snug text-bone/65">{r.label}</p>
                  <StatusIcon level={r.none} />
                  <StatusIcon level={r.gym} />
                  <StatusIcon level={r.p57} />
                </div>
              ))}

              <div className="mt-5 border-t border-gold/15 pt-5">
                <p className="balance font-display text-[1.15rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.3rem]">
                  The question was never whether a wellbeing benefit costs money.{" "}
                  <span className="gold-foil italic">It's whether the one you pick gets used.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}

/* -------------------------------- The Method ------------------------------- */

const PILLARS = [
  {
    title: "Small movements. Serious strength.",
    text: "Sequences built on isometric holds — deceptively still, deeply effective. Kind to joints, hard on results. Most people see visible change within 8 sessions."
  },
  {
    title: "Instructor-led, form-obsessed",
    text: "Small classes, certified instructors and personal correction in every session - never a screen shouting cues into the void. Every rep is watched, adjusted and made safe, so first-timers and athletes train side by side."
  },
  {
    title: "A community worth joining",
    text: "Founders, executives and cultural figures train here - your teams join a community, not just a class. It's a rare, informal room where colleagues, clients and industry peers show up as people first."
  },
  {
    title: "Built to fit your day, not fight it.",
    text: "Fifty-seven minutes, in and out — no wasted time, no filler sets. Early morning, lunch-hour and evening slots mean the workout works around the calendar, not the other way around."
  }
];

export function Difference() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-ink text-bone">
      <SlideBackdrop variant={2} />

      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -right-6 -top-14 hidden select-none font-display text-[16rem] font-semibold italic leading-none text-gold/[0.07] lg:block"
      >
        04
      </span>

      <div className="absolute inset-0 z-10 px-6 pb-[88px] pt-[80px] md:px-12 xl:px-16">
        <div data-scroll className="mx-auto flex h-full max-w-[1500px] flex-col overflow-y-auto pr-1">
          <Reveal>
            <div className="flex items-center gap-6">
              <Kicker>The method</Kicker>
              <span className="rule-gold flex-1" />
              <span className="kicker hidden text-bone/25 md:block">04 - Corporate partnerships</span>
            </div>
          </Reveal>

          <div className="mt-7 grid flex-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col lg:col-span-7">
              <Reveal delay={0.08}>
                <h2 className="balance max-w-2xl font-display text-[clamp(2rem,4.2vw,3.6rem)] font-light leading-[1.02] tracking-[-0.028em] text-cream">
                  A 57-minute method, <span className="gold-foil italic">twenty years</span> in the
                  making.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-xl text-[13.5px] leading-[1.75] text-bone/55 md:text-[15px]">
                  Founded in New York in 2006 and loved from SoHo to Mumbai, Physique 57 set the
                  global benchmark for boutique barre. For many of your people, this is already the
                  studio they ask for by name.
                </p>
              </Reveal>

              <div className="mt-9 grid flex-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                {PILLARS.map((p, i) => (
                  <Reveal key={p.title} delay={0.32 + i * 0.08}>
                    <div className="border-l border-gold/45 pl-5">
                      <p className="font-display text-[1.15rem] font-light leading-tight tracking-[-0.015em] text-champagne">
                        {p.title}
                      </p>
                      <p className="mt-2 text-[12.5px] leading-[1.65] text-bone/50">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.34} className="hidden lg:col-span-5 lg:block">
              <div className="panel relative h-full min-h-[440px] overflow-hidden">
                <img
                  src="/images/method.jpg"
                  alt="The Physique 57 method"
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                  <div>
                    <Kicker>Barre 57</Kicker>
                    <p className="mt-2 font-display text-xl italic tracking-[-0.015em] text-champagne">
                      The signature 57-minute class
                    </p>
                  </div>
                  <span className="rounded-full border border-gold/30 bg-ink/40 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-gilt/80 backdrop-blur-md">
                    Mumbai
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Overview -------------------------------- */

/** `onSelect` receives the option index (0-4); the deck resolves it to a slide. */
export function Overview({ onSelect }: { onSelect: (optionIndex: number) => void }) {
  return (
    <SlideShell
      tone="light"
      num="07"
      kicker="Programmes at a glance"
      title={
        <>
          Five ways to work together.{" "}
          <span className="gold-foil italic">One published rate card.</span>
        </>
      }
      sub="Every programme follows transparent corporate pricing benchmarked to our Mumbai studio rates. Most partners combine two or three to cover different teams and goals - select any card to explore it."
      footnote="Pricing transparency: corporate pricing is benchmarked to published studio rates, centrally maintained and consistent across every city we serve."
    >
      <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
        {OPTIONS.map((o, i) => (
          <Reveal key={o.id} delay={0.14 + i * 0.07} className="h-full">
            <button
              onClick={() => onSelect(i)}
              className="panel panel-hover group flex h-full w-full flex-col p-7 text-left"
            >
              <div className="relative z-10 flex items-baseline justify-between">
                <span className="tnum font-display text-xs italic tracking-widest text-gold/60">
                  {o.num}
                </span>
                <MoveUpRight
                  size={15}
                  className="-translate-x-1 translate-y-1 text-gold opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </div>
              <p className="relative z-10 mt-6 font-display text-[1.45rem] font-light leading-tight tracking-[-0.02em] text-cream">
                {o.short}
              </p>
              <p className="relative z-10 mt-2.5 text-[12.5px] leading-relaxed text-bone/45">
                {o.bestFor}
              </p>
              <div className="relative z-10 mt-auto pt-8">
                <span className="tnum inline-block rounded-full border border-gold/25 bg-gold/[0.06] px-3.5 py-1.5 text-[10px] font-medium tracking-wide text-gilt/85 transition-colors duration-300 group-hover:border-gold/60 group-hover:text-champagne">
                  {o.anchor}
                </span>
                {o.unitCost && (
                  <p className="tnum mt-3 text-[10.5px] text-bone/38">
                    {o.unitCost.perSession}
                  </p>
                )}
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
