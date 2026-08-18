import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedNumber, Reveal, Segmented, SlideShell, Kicker } from "../components/ui";
import { fmtINR, fmtShort } from "../data/programme";

/* ------------------------------ ROI Calculator ------------------------------ */

const TEAM_SIZES = [50, 150, 300];
const ADOPTION = 0.25; // medium-scenario opt-in, consistent with the scenario modelling elsewhere in this deck
const PROGRAMME_COST_PER_HEAD = 172500; // blended Tiered Membership Menu rate
const HBR_MULTIPLIER = 3.27; // Harvard Business Review: returned in reduced medical costs per $1 invested

export function ROICalculator() {
  const [team, setTeam] = useState(150);
  const enrolled = Math.round(team * ADOPTION);
  const investment = enrolled * PROGRAMME_COST_PER_HEAD;
  const returned = investment * HBR_MULTIPLIER;
  const netGain = returned - investment;

  return (
    <SlideShell
      tone="light"
      num="07"
      kicker="What it's worth"
      title={
        <>
          A structured wellbeing benefit{" "}
          <span className="gold-foil italic">pays for itself - and then some.</span>
        </>
      }
      sub="Every rupee spent well doesn't just lift morale, it shows up as a measurable return. Choose a team size to see an illustrative model."
      footnote="Illustrative model: assumes 25% adoption of the Tiered Membership Menu (blended ₹1,72,500 / head) and applies the Harvard Business Review benchmark of $3.27 returned in reduced medical costs and productivity for every $1 invested in structured workplace wellness. Tailored to your workforce data on request."
    >
      <Reveal delay={0.12}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Kicker>Team size</Kicker>
          <Segmented
            name="roi-team"
            options={TEAM_SIZES.map((t) => ({ value: String(t), label: `${t} people` }))}
            value={String(team)}
            onChange={(v) => setTeam(Number(v))}
          />
        </div>
      </Reveal>

      <div className="mt-7 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Employees enrolled", value: enrolled, format: (n: number) => `${Math.round(n)}`, sub: `${Math.round(ADOPTION * 100)}% of ${team}` },
          { label: "Annual investment", value: investment, format: fmtShort, sub: fmtINR(investment) },
          { label: "Value returned", value: returned, format: fmtShort, sub: `${HBR_MULTIPLIER}x per HBR benchmark` },
          { label: "Net gain to the business", value: netGain, format: fmtShort, sub: "Beyond the investment itself" }
        ].map((s, i) => (
          <Reveal key={s.label} delay={0.2 + i * 0.08} className="h-full">
            <div className="panel panel-hover flex h-full flex-col justify-between p-6">
              <span className="gold-foil relative z-10 font-display text-[clamp(2rem,3vw,2.7rem)] font-light leading-[0.9] tracking-[-0.03em]">
                <AnimatedNumber key={`${team}-${s.label}`} value={s.value} format={s.format} duration={1} />
              </span>
              <div className="relative z-10 mt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-bone/45">{s.label}</p>
                <p className="tnum mt-2 text-[11px] text-bone/30">{s.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.56}>
        <div className="panel-wash mt-4 p-7">
          <p className="balance relative z-10 max-w-2xl font-display text-[1.2rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.4rem]">
            At {team} people, a well-adopted programme returns roughly{" "}
            <span className="gold-foil italic">{fmtShort(netGain)}</span> more than it costs -
            before counting attrition, absenteeism or hiring savings.
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
    a: "Yes. The Digital Access Pass reaches every pin code from day one, and hosted classes travel to your office in any city we operate in. Most distributed teams combine both."
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
    q: "What happens to unused digital seats or class credits?",
    a: "Digital seats can be reassigned each quarter; pooled class credits stay valid for 12 months and are shared across your whole team, so nothing goes to waste."
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
      num="09"
      kicker="Common questions"
      title={
        <>
          Common questions, <span className="gold-foil italic">answered honestly.</span>
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
