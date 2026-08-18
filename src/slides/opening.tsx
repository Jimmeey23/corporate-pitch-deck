import { motion } from "framer-motion";
import { ArrowRight, MoveUpRight, Check, Minus, X } from "lucide-react";
import { Reveal, AnimatedNumber, SlideShell, SlideBackdrop, Kicker, EASE } from "../components/ui";
import { OPTIONS } from "../data/programme";

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

      <div className="absolute inset-0 z-10 px-6 pb-[104px] pt-[92px] md:px-12 xl:px-16">
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
                Six ways to bring Physique 57 to your workplace - from flexible benefits and hosted
                classes to a leadership concierge - each with transparent pricing and room to grow
                with your teams.
              </p>
            </Reveal>

            <Reveal delay={0.82}>
              <div className="mt-11 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-bone/[0.08] pt-6 text-[10px] uppercase tracking-[0.28em] text-bone/45">
                <span className="flex items-center gap-2.5">
                  <span className="h-[3px] w-[3px] rotate-45 bg-gold" /> 6 programmes
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

const STATS: { value: number; format: (n: number) => string; label: string; source: string }[] = [
  {
    value: 80,
    format: (n) => `${Math.round(n)}%`,
    label: "of India's workforce reported mental-health strain in the past year",
    source: "Deloitte India Wellbeing Survey"
  },
  {
    value: 14,
    format: (n) => `$${Math.round(n)}B`,
    label: "the annual cost of poor employee wellbeing to Indian employers - ≈ ₹1.2 lakh crore",
    source: "Deloitte estimate"
  },
  {
    value: 3.27,
    format: (n) => `$${n.toFixed(2)}`,
    label: "returned in reduced medical costs for every $1 invested in structured wellness",
    source: "Harvard Business Review"
  },
  {
    value: 57,
    format: (n) => `${Math.round(n)}%`,
    label: "of employees say wellbeing support influences where they choose to work",
    source: "Gallup workplace research"
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
      <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
        <div className="grid gap-3.5 sm:grid-cols-2 lg:col-span-7">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.18 + i * 0.09} className="h-full">
              <div className="panel panel-hover flex h-full flex-col justify-between p-6">
                <span className="gold-foil relative z-10 font-display text-[clamp(2.6rem,3.6vw,3.8rem)] font-light leading-[0.85] tracking-[-0.035em]">
                  <AnimatedNumber value={s.value} format={s.format} duration={1.4} />
                </span>
                <div className="relative z-10 mt-7">
                  <p className="text-[13px] leading-[1.6] text-bone/65">{s.label}</p>
                  <p className="mt-4 flex items-center gap-2.5 text-[9px] uppercase tracking-[0.24em] text-bone/28">
                    <span className="h-px w-6 bg-gold/50" /> {s.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="lg:col-span-5">
          <div className="panel-wash flex h-full flex-col p-8">
            <Kicker>What your teams should expect</Kicker>
            <div className="relative z-10 mt-8 flex flex-1 flex-col justify-between gap-6">
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
            <p className="relative z-10 mt-8 border-t border-gold/15 pt-5 text-[10px] uppercase tracking-[0.24em] text-bone/35">
              Wellbeing is now a standing item in leadership conversations.
            </p>
          </div>
        </Reveal>
      </div>
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
      kicker="The alternative cost"
      title={
        <>
          Doing nothing is a decision too -{" "}
          <span className="gold-foil italic">and it shows up on the P&amp;L.</span>
        </>
      }
      sub="A generic gym perk checks a box on a benefits deck. It rarely changes behaviour. Here's how the realistic alternatives actually compare."
      footnote="Comparisons reflect typical corporate gym benefits offered in India; specific inclusions vary by provider."
    >
      <div className="panel overflow-x-auto p-6 md:p-7">
        <div className="relative z-10 min-w-[560px]">
          <div className="grid grid-cols-[1fr_84px_84px_84px] items-end gap-3 pb-5 sm:grid-cols-[1fr_140px_140px_140px] sm:gap-5">
            <span />
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
            <Reveal key={r.label} delay={0.14 + i * 0.06}>
              <div
                className={`grid grid-cols-[1fr_84px_84px_84px] items-center gap-3 py-4 sm:grid-cols-[1fr_140px_140px_140px] sm:gap-5 ${
                  i > 0 ? "border-t border-bone/[0.06]" : ""
                }`}
              >
                <p className="text-[12.5px] leading-snug text-bone/65 sm:text-[13px]">{r.label}</p>
                <StatusIcon level={r.none} />
                <StatusIcon level={r.gym} />
                <StatusIcon level={r.p57} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.62}>
        <div className="panel-wash mt-4 p-7">
          <p className="balance relative z-10 max-w-2xl font-display text-[1.25rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.45rem]">
            The question isn't whether a wellbeing benefit costs money.{" "}
            <span className="gold-foil italic">It's whether the one you pick gets used.</span>
          </p>
        </div>
      </Reveal>
    </SlideShell>
  );
}

/* -------------------------------- The Method ------------------------------- */

const PILLARS = [
  {
    title: "Ballet-meets-strength intervals",
    text: "Low-impact, high-intensity sequences built on isometric holds - kind to joints, serious about results. Visible tone and posture change in as few as 8 sessions, with a fraction of the recovery downtime of HIIT or running."
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
    title: "On-demand between meetings",
    text: "The full digital library keeps members consistent through travel weeks and hybrid schedules, on any device, anywhere. No studio, no equipment and no excuse - a 20-minute reset fits between back-to-back calls."
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
        03
      </span>

      <div className="absolute inset-0 z-10 px-6 pb-[104px] pt-[92px] md:px-12 xl:px-16">
        <div data-scroll className="mx-auto flex h-full max-w-[1500px] flex-col overflow-y-auto pr-1">
          <Reveal>
            <div className="flex items-center gap-6">
              <Kicker>The method</Kicker>
              <span className="rule-gold flex-1" />
              <span className="kicker hidden text-bone/25 md:block">03 - Corporate partnerships</span>
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

              <Reveal delay={0.24}>
                <div className="panel mt-9 grid grid-cols-3 overflow-hidden">
                  {[
                    { v: 2006, f: (n: number) => String(Math.round(n)), l: "Founded in New York" },
                    { v: 57, f: (n: number) => `${Math.round(n)} min`, l: "The signature Sculpt" },
                    { v: 8, f: (n: number) => `${Math.round(n)} sessions`, l: "To visible results" }
                  ].map((s, i) => (
                    <div
                      key={s.l}
                      className={`relative z-10 p-5 ${i > 0 ? "border-l border-bone/[0.06]" : ""}`}
                    >
                      <div className="gold-foil font-display text-[1.9rem] font-light leading-none tracking-[-0.03em] md:text-[2.2rem]">
                        <AnimatedNumber value={s.v} format={s.f} />
                      </div>
                      <p className="mt-3 text-[9px] uppercase tracking-[0.22em] text-bone/35">{s.l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="mt-10 grid flex-1 gap-x-10 gap-y-7 sm:grid-cols-2">
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

export function Overview({ onSelect }: { onSelect: (i: number) => void }) {
  return (
    <SlideShell
      tone="light"
      num="04"
      kicker="Programmes at a glance"
      title={
        <>
          Six ways to work together.{" "}
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
              onClick={() => onSelect(6 + i)}
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
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
