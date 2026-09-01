import { Quote, TrendingUp } from "lucide-react";
import { AnimatedNumber, Reveal, SlideShell, Kicker } from "../components/ui";
import { PROOF_STATS, CASE_STUDY, PARTNER_LOGOS, PARTNER_COUNT } from "../data/proof";

/**
 * Proof sits before pricing on purpose. Every other number in this deck is
 * borrowed from Deloitte, Gallup or HBR - a buyer discounts all of it. These
 * are ours, they are checkable, and they are the only claims that answer the
 * question actually being asked: "will our people use it?"
 */
export function Proof() {
  return (
    <SlideShell
      tone="dark"
      num="05"
      kicker="The proof"
      title={
        <>
          The benefit people{" "}
          <span className="gold-foil italic">actually turn up for.</span>
        </>
      }
      sub="Everything before this slide is industry research. Everything on it is ours - measured across our own corporate members, and open to your scrutiny."
      footnote="Figures cover corporate members across a trailing twelve-month period and are available in full, with methodology, on request."
    >
      <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        {PROOF_STATS.map((s, i) => (
          <Reveal key={s.label} delay={0.12 + i * 0.08} className="h-full">
            <div className="panel panel-hover flex h-full flex-col justify-between p-6">
              <span className="gold-foil relative z-10 font-display text-[clamp(2.2rem,3.2vw,3rem)] font-light leading-[0.88] tracking-[-0.035em]">
                <AnimatedNumber value={s.value} format={s.format} duration={1.3} />
              </span>
              <div className="relative z-10 mt-6">
                <p className="text-[12.5px] leading-[1.55] text-bone/65">{s.label}</p>
                <p className="mt-3 flex items-start gap-2.5 text-[10.5px] leading-snug text-bone/32">
                  <span className="mt-[7px] h-px w-5 shrink-0 bg-gold/50" />
                  {s.context}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-3.5 grid gap-3.5 lg:grid-cols-12">
        <Reveal delay={0.44} className="lg:col-span-7">
          <div className="panel flex h-full flex-col p-7">
            <div className="relative z-10 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                <TrendingUp size={13} strokeWidth={2} />
              </span>
              <Kicker>How it played out</Kicker>
            </div>

            <p className="relative z-10 mt-5 font-display text-[1.3rem] font-light leading-tight tracking-[-0.02em] text-champagne">
              {CASE_STUDY.client}
            </p>

            <div className="relative z-10 mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-gold/55">The problem</p>
                <p className="mt-2 text-[12px] leading-[1.65] text-bone/50">{CASE_STUDY.challenge}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-gold/55">What we did</p>
                <p className="mt-2 text-[12px] leading-[1.65] text-bone/50">{CASE_STUDY.intervention}</p>
              </div>
            </div>

            <div className="relative z-10 mt-6 grid gap-4 border-t border-bone/[0.07] pt-5 sm:grid-cols-3">
              {CASE_STUDY.results.map((r) => (
                <div key={r.label}>
                  <p className="gold-foil tnum font-display text-[1.7rem] font-light leading-none tracking-[-0.03em]">
                    {r.value}
                  </p>
                  <p className="mt-2.5 text-[11px] leading-snug text-bone/55">{r.label}</p>
                  <p className="mt-1 text-[10px] text-bone/30">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.54} className="lg:col-span-5">
          <div className="panel-wash flex h-full flex-col justify-between p-7">
            <div className="relative z-10">
              <Quote size={20} className="text-gold/50" strokeWidth={1.6} />
              <p className="balance mt-5 font-display text-[1.25rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.4rem]">
                {CASE_STUDY.quote}
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-bone/35">
                {CASE_STUDY.attribution}
              </p>
            </div>

            <div className="relative z-10 mt-8 border-t border-gold/15 pt-5">
              <p className="text-[9px] uppercase tracking-[0.24em] text-gold/55">
                Corporate partners
              </p>
              {PARTNER_LOGOS.length > 0 ? (
                <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
                  {PARTNER_LOGOS.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-6 opacity-45 grayscale transition-opacity duration-300 hover:opacity-80"
                    />
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-[11.5px] leading-relaxed text-bone/35">
                  {PARTNER_COUNT > 0
                    ? `${PARTNER_COUNT} organisations currently run a Physique 57 programme. Logos shared on request, with each partner's permission.`
                    : "Add partner logos to /public/images/logos and list them in src/data/proof.ts - a logo wall changes this meeting more than any statistic on this slide."}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
