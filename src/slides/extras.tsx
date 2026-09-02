import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedNumber, Reveal, Segmented, SlideShell, Kicker } from "../components/ui";
import { fmtINR, fmtShort } from "../data/programme";

/* ------------------------------ ROI Calculator ------------------------------ */

/**
 * The value case is built on attrition and absenteeism - two costs the employer
 * already carries, already measures, and can verify without taking our word for
 * anything.
 *
 * We deliberately do NOT use the "$3.27 returned per $1 invested" wellness
 * figure that circulates in decks like this one. It comes from Baicker et al.
 * (2010), and the later randomised trial by Song & Baicker (JAMA, 2019, ~33,000
 * employees) found no significant effect on health spending or absenteeism at
 * 18 months. A finance team that knows the literature will dismantle it, and
 * everything said after that gets discounted too.
 */

const COHORTS = [10, 25, 50];
const CTC_BANDS = [1500000, 2500000, 4000000];

const PROGRAMMES = [
  { id: "tiered", label: "Tiered membership", rate: 172500, note: "Blended across Base / Mid / Premium" },
  { id: "concierge", label: "Leadership concierge", rate: 250000, note: "All-In Annual plus concierge services" }
];

/** Replacing a mid-to-senior hire costs 6-9 months of CTC. We model the midpoint. */
const REPLACEMENT_COST_MONTHS = 7.5;
/** Sick days avoided per active member per year. Deliberately conservative. */
const SICK_DAYS_AVOIDED = 3;
const WORKING_DAYS = 240;

const fmtBand = (n: number) => `₹${n / 100000}L`;

/** "4.0 departures" reads like a typo. Show a whole number when it is one. */
const fmtExits = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

export function ROICalculator() {
  const [cohort, setCohort] = useState(25);
  const [ctc, setCtc] = useState(2500000);
  const [programmeId, setProgrammeId] = useState("concierge");

  const programme = PROGRAMMES.find((p) => p.id === programmeId)!;
  const investment = cohort * programme.rate;
  const replacementCost = ctc * (REPLACEMENT_COST_MONTHS / 12);
  const breakevenExits = investment / replacementCost;
  const absenteeismRecovered = cohort * SICK_DAYS_AVOIDED * (ctc / WORKING_DAYS);
  /**
   * The figure that holds at every setting: what one avoided departure buys.
   * Cohort break-even moves with the inputs, so the headline cannot depend on
   * it - at 25 leaders on the concierge programme it is four, not one.
   */
  const membershipsPerDeparture = Math.floor(replacementCost / programme.rate);

  return (
    <SlideShell
      tone="light"
      num="05"
      kicker="What it's worth"
      title={
        <>
          Retention pays for this{" "}
          <span className="gold-foil italic">long before wellbeing does.</span>
        </>
      }
      sub="Not a wellness multiplier - two costs you already carry. Set your cohort and salary band; the arithmetic is yours to check."
      footnote="Replacement cost modelled at 7.5 months of CTC, the midpoint of the widely used 6-9 month range for mid-to-senior roles, covering recruitment fees, notice-period overlap, onboarding and lost productivity. Absenteeism modelled at three avoided sick days per active member per year against a 240-day working year. Both are deliberately conservative and exclude the cost of disengagement, backfill and lost institutional knowledge."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-2.5">
            <Kicker>Cohort enrolled</Kicker>
            <Segmented
              name="roi-cohort"
              options={COHORTS.map((c) => ({ value: String(c), label: `${c} people` }))}
              value={String(cohort)}
              onChange={(v) => setCohort(Number(v))}
            />
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="flex flex-col gap-2.5">
            <Kicker>Average CTC</Kicker>
            <Segmented
              name="roi-ctc"
              options={CTC_BANDS.map((c) => ({ value: String(c), label: fmtBand(c) }))}
              value={String(ctc)}
              onChange={(v) => setCtc(Number(v))}
            />
          </div>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="flex flex-col gap-2.5">
            <Kicker>Programme</Kicker>
            <Segmented
              name="roi-programme"
              options={PROGRAMMES.map((p) => ({ value: p.id, label: p.label }))}
              value={programmeId}
              onChange={setProgrammeId}
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-7 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Annual programme investment",
            value: investment,
            format: fmtShort,
            sub: `${cohort} × ${fmtINR(programme.rate)}`
          },
          {
            label: "Cost of one departure",
            value: replacementCost,
            format: fmtShort,
            sub: `7.5 months of ${fmtBand(ctc)} CTC`
          },
          {
            label: "Departures avoided to break even",
            value: breakevenExits,
            format: fmtExits,
            sub: `Out of ${cohort} enrolled`
          },
          {
            label: "Absenteeism value recovered",
            value: absenteeismRecovered,
            format: fmtShort,
            sub: `${SICK_DAYS_AVOIDED} days × ${cohort} people`
          }
        ].map((s, i) => (
          <Reveal key={s.label} delay={0.3 + i * 0.08} className="h-full">
            <div className="panel panel-hover flex h-full flex-col justify-between p-6">
              <span className="gold-foil relative z-10 font-display text-[clamp(2rem,3vw,2.7rem)] font-light leading-[0.9] tracking-[-0.03em]">
                <AnimatedNumber
                  key={`${cohort}-${ctc}-${programmeId}-${s.label}`}
                  value={s.value}
                  format={s.format}
                  duration={1}
                />
              </span>
              <div className="relative z-10 mt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-bone/45">{s.label}</p>
                <p className="tnum mt-2 text-[11px] text-bone/30">{s.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.62}>
        <div className="panel-wash mt-4 p-7">
          <p className="balance relative z-10 max-w-3xl font-display text-[1.2rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.4rem]">
            One departure you prevent pays for{" "}
            <span className="gold-foil italic">{membershipsPerDeparture}</span> of these
            memberships. Breaking even across the whole cohort takes{" "}
            <span className="gold-foil italic">{fmtExits(breakevenExits)}</span> of {cohort} -{" "}
            before counting the {fmtShort(absenteeismRecovered)} in recovered sick days, or a single
            rupee of engagement, employer brand or hiring advantage.
          </p>
        </div>
      </Reveal>
    </SlideShell>
  );
}

/* ----------------------------------- FAQ ------------------------------------ */

const QA = [
  {
    q: "What if adoption is lower than we expect?",
    a: "Every programme works at low, medium and high adoption. Flexible-benefits listings and hosted classes carry zero to minimal fixed cost, so a slow start never becomes a sunk cost - and we review enrolment with you every quarter to adjust the mix."
  },
  {
    q: "We have people outside Mumbai. Does this still work for them?",
    a: "Yes. Hosted classes travel to your office in any city we operate in, and flexible-benefits listings work wherever your team can access the marketplace. Most distributed teams combine both."
  },
  {
    q: "How do we know the pricing is genuinely fair?",
    a: "Every rate is benchmarked to our published Mumbai studio rates and centrally maintained - the same numbers your finance team could verify independently. Multi-year partnerships lock pricing for the full length of the agreement."
  },
  {
    q: "What's the lowest-commitment way to start?",
    a: "A single hosted class or a starter credit block. No annual commitment, no seat licences - it's the format most partners use to test appetite before rolling out memberships."
  },
  {
    q: "How is success measured, and who sees it?",
    a: "Monthly participation reporting - enrolment, attendance and engagement - goes to your named account partner and your HR team, with a quarterly review to discuss what's working."
  },
  {
    q: "What happens to unused class credits?",
    a: "Pooled class credits stay valid for 12 months and are shared across your whole team, so nothing goes to waste."
  },
  {
    q: "Who actually runs the rollout?",
    a: "A dedicated, named programme partner from day one - handling launch communications, instructor scheduling and reporting, so nothing sits on your HR team's plate."
  },
  {
    q: "Can we combine more than one programme?",
    a: "Most partners do. A common pattern is hosted classes to build early engagement, layered with a flexible-benefits listing or tiered menu for teams who want more."
  }
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
  delay
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="panel overflow-hidden">
        <button
          onClick={onToggle}
          className="relative z-10 flex w-full items-center justify-between gap-6 p-6 text-left"
        >
          <span className="font-display text-[1.05rem] font-light leading-snug tracking-[-0.01em] text-champagne">
            {q}
          </span>
          <ChevronDown
            size={15}
            className={`shrink-0 text-gold transition-transform duration-400 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p className="relative z-10 px-6 pb-6 text-[12.5px] leading-[1.7] text-bone/50">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SlideShell
      tone="dark"
      num="11"
      kicker="Common questions"
      title={
        <>
          Common questions, <span className="gold-foil italic">answered.</span>
        </>
      }
      sub="The things procurement, finance and HR usually ask before signing."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {QA.map((item, i) => (
          <FAQItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
            delay={0.1 + i * 0.05}
          />
        ))}
      </div>
    </SlideShell>
  );
}
