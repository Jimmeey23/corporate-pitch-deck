import { Award as AwardIcon } from "lucide-react";
import { AnimatedNumber, Reveal, SlideShell, Kicker } from "../components/ui";
import { AWARDS, FEATURED_IN, BRAND_STATS, OPERATING_PROOF } from "../data/brand";

/**
 * Sits before the method slide. The method answers "what is the class"; this
 * answers "is this brand safe to choose" - which is the question a People lead
 * is actually holding when they imagine putting a vendor's name in front of
 * their CEO.
 *
 * Every claim here was made by somebody else. That is the point, and it is the
 * same argument the rest of the deck runs on: nothing you have to take our word
 * for.
 */
export function Heritage() {
  return (
    <SlideShell
      tone="light"
      num="03"
      kicker="Recognition"
      title={
        <>
          Twenty years of proof -{" "}
          <span className="gold-foil italic">and none of it ours.</span>
        </>
      }
      sub="Every claim on this slide was made by someone else, and every one of them can be checked before you sign anything."
      footnote="Awards and press as published by the awarding titles; full citations available on request. Re-confirmed ahead of each presentation."
    >
      <div className="grid items-start gap-3.5 lg:grid-cols-12">
        {/* -------------------------------- awards ------------------------------- */}
        <div className="flex flex-col gap-3.5 lg:col-span-7">
          <div className="grid gap-3.5 sm:grid-cols-2">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={0.12 + i * 0.08} className="h-full">
                <div className="panel panel-hover flex h-full flex-col p-5">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-gold">
                    <AwardIcon size={14} strokeWidth={1.7} />
                  </span>
                  <p className="relative z-10 mt-4 font-display text-[1.15rem] font-light leading-tight tracking-[-0.018em] text-cream">
                    {a.title}
                  </p>
                  <div className="relative z-10 mt-2.5 flex flex-wrap items-baseline gap-x-2.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">
                      {a.body}
                    </span>
                    {a.year && (
                      <span className="tnum text-[10px] tracking-[0.12em] text-bone/30">
                        {a.year}
                      </span>
                    )}
                  </div>
                  {a.note && (
                    <p className="relative z-10 mt-3 text-[11.5px] leading-[1.6] text-bone/45">
                      {a.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.44}>
            <div className="panel px-6 py-5">
              <Kicker>Featured in</Kicker>
              <div className="relative z-10 mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                {FEATURED_IN.map((f) => (
                  <span
                    key={f}
                    className="text-[11.5px] tracking-[0.02em] text-bone/45 transition-colors duration-300 hover:text-champagne"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------------------------ what it means operationally ------------------- */}
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="panel grid grid-cols-3 overflow-hidden">
              {BRAND_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`relative z-10 p-4 ${i > 0 ? "border-l border-bone/[0.06]" : ""}`}
                >
                  <div className="gold-foil font-display text-[1.5rem] font-light leading-none tracking-[-0.03em]">
                    <AnimatedNumber value={s.value} format={s.format} />
                  </div>
                  <p className="mt-2.5 text-[9px] uppercase leading-tight tracking-[0.18em] text-bone/35">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="panel-wash p-6">
              <Kicker>What that buys you</Kicker>
              <div className="relative z-10 mt-5 flex flex-col gap-5">
                {OPERATING_PROOF.map((o) => (
                  <div key={o.title}>
                    <p className="font-display text-[1.1rem] font-light leading-tight tracking-[-0.015em] text-champagne">
                      {o.title}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-[1.65] text-bone/50">{o.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
