import { Check, Sparkles, ShieldCheck, Activity } from "lucide-react";
import { Reveal, ScenarioExplorer, SlideShell } from "../components/ui";
import { OPTIONS, fmtINR, type OptionDef } from "../data/programme";

/* ------------------------------ Mechanics list ----------------------------- */

function MechanicsList({ o }: { o: OptionDef }) {
  return (
    <div className="panel overflow-hidden">
      <div className="relative z-10">
        {o.mechanics.map((m, i) => (
          <Reveal key={m.label} delay={0.16 + i * 0.07}>
            <div
              className={`group flex items-baseline justify-between gap-5 px-5 py-3.5 transition-colors duration-300 hover:bg-white/[0.022] ${
                i > 0 ? "border-t border-bone/[0.06]" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.18em] text-bone/45">{m.label}</p>
                {m.note && <p className="mt-1.5 text-[11px] leading-snug text-bone/32">{m.note}</p>}
              </div>
              <span className="tnum shrink-0 font-display text-xl font-light tracking-[-0.02em] text-champagne md:text-[1.4rem]">
                {m.value}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Tier menu -------------------------------- */

function TierMenu({ o }: { o: OptionDef }) {
  return (
    <div>
      <div className="grid gap-3.5 sm:grid-cols-3">
        {o.tiers!.map((t, i) => (
          <Reveal key={t.name} delay={0.16 + i * 0.08} className="h-full">
            <div
              className={`flex h-full flex-col p-4 ${
                t.featured ? "panel-gold" : "panel panel-hover text-bone"
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-display text-lg italic tracking-[-0.01em]">{t.name}</span>
                <span
                  className={`tnum rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${
                    t.featured ? "bg-ink/20 text-ink/90" : "bg-gold/10 text-gilt/80"
                  }`}
                >
                  {t.mix}% mix
                </span>
              </div>
              <p
                className={`relative z-10 mt-2 text-[10px] leading-snug ${
                  t.featured ? "text-ink/60" : "text-bone/35"
                }`}
              >
                {t.pkg}
              </p>
              <p className="tnum relative z-10 mt-3.5 font-display text-[1.6rem] font-light leading-none tracking-[-0.03em]">
                {fmtINR(t.price)}
                <span
                  className={`ml-1.5 align-middle font-sans text-[9px] uppercase tracking-[0.2em] ${
                    t.featured ? "text-ink/55" : "text-bone/35"
                  }`}
                >
                  / yr
                </span>
              </p>
              <ul
                className={`relative z-10 mt-4 space-y-1.5 border-t pt-3.5 text-[11px] leading-snug ${
                  t.featured ? "border-ink/15 text-ink/80" : "border-bone/[0.07] text-bone/60"
                }`}
              >
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check
                      size={12}
                      className={`mt-[3px] shrink-0 ${t.featured ? "text-ink/70" : "text-gold"}`}
                      strokeWidth={2.6}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <div className="panel-wash mt-3.5 flex flex-wrap items-center justify-between gap-3 px-6 py-3">
          <span className="relative z-10 text-[10px] uppercase tracking-[0.24em] text-bone/50">
            Blended price / head · 50 – 30 – 20 mix
          </span>
          <span className="gold-foil tnum relative z-10 font-display text-[1.75rem] font-light tracking-[-0.03em]">
            {fmtINR(o.blended!)}
          </span>
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------ Unit economics ----------------------------- */

/**
 * The comparative number a buyer can hold against any other benefit: what one
 * class an employee actually attends costs. A ₹1,500 gym pass used twelve times
 * a year costs ₹18,000 per attended session; this is the framing that makes a
 * premium price read as the cheaper option.
 */
function UnitEconomics({ o }: { o: OptionDef }) {
  if (!o.unitCost) return null;
  const { perMonth, perSession, sessionNote } = o.unitCost;
  return (
    <Reveal delay={0.3}>
      <div className="panel-wash px-6 py-5">
        <div className="relative z-10 flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
            <Activity size={13} strokeWidth={2} />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
            What it actually costs
          </span>
        </div>
        <div className="relative z-10 mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          {perMonth && (
            <div>
              <p className="tnum font-display text-[1.4rem] font-light leading-none tracking-[-0.02em] text-champagne">
                {perMonth}
              </p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-bone/35">
                Per head
              </p>
            </div>
          )}
          <div>
            <p className="gold-foil tnum font-display text-[1.4rem] font-light leading-none tracking-[-0.02em]">
              {perSession}
            </p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-bone/35">
              Cost per attended class
            </p>
          </div>
        </div>
        <p className="relative z-10 mt-4 text-[11.5px] leading-[1.6] text-bone/45">{sessionNote}</p>
      </div>
    </Reveal>
  );
}

/* --------------------------------- Callout --------------------------------- */

function Callout({ o }: { o: OptionDef }) {
  const Icon = o.callout.important ? ShieldCheck : Sparkles;
  return (
    <Reveal delay={0.38}>
      <div className={o.callout.important ? "panel-wash p-6" : "panel p-6"}>
        <div className="relative z-10 flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
            <Icon size={13} strokeWidth={2} />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
            {o.callout.title}
          </span>
        </div>
        <p className="relative z-10 mt-4 text-[12.5px] leading-[1.75] text-bone/55">{o.callout.text}</p>
      </div>
    </Reveal>
  );
}

/* -------------------------------- OptionSlide ------------------------------ */

function OptionSlide({ o, kickerNum }: { o: OptionDef; kickerNum: string }) {
  const [head, tail] = o.name.split("•");
  return (
    <SlideShell
      tone={o.tone}
      num={kickerNum}
      kicker={`Programme ${o.num}`}
      title={
        <>
          {head.trim()}
          {tail && <span className="gold-foil italic"> · {tail.trim()}</span>}
        </>
      }
      sub={o.tagline}
      footnote={o.footnote}
    >
      <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          <Reveal delay={0.12}>
            <span className="kicker text-bone/35">{o.tiers ? "The menu" : "How it's priced"}</span>
          </Reveal>
          {o.tiers ? <TierMenu o={o} /> : <MechanicsList o={o} />}
          <Callout o={o} />
        </div>
        {/* Unit economics sits under the scenarios so the two columns land at a
            similar height - on the left it pushed the callout past the fold. */}
        <div className="flex flex-col gap-3.5 lg:col-span-7">
          <ScenarioExplorer scenarios={o.scenarios} />
          <UnitEconomics o={o} />
        </div>
      </div>
    </SlideShell>
  );
}

export const Option1 = () => <OptionSlide o={OPTIONS[0]} kickerNum="08" />;
export const Option2 = () => <OptionSlide o={OPTIONS[1]} kickerNum="08" />;
export const Option3 = () => <OptionSlide o={OPTIONS[2]} kickerNum="08" />;
export const Option4 = () => <OptionSlide o={OPTIONS[3]} kickerNum="08" />;
export const Option5 = () => <OptionSlide o={OPTIONS[4]} kickerNum="08" />;
