import { Handshake, Megaphone, BarChart3, CalendarDays, Ticket, Receipt, ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SlideShell, Kicker, EASE } from "../components/ui";

/* ---------------------------- The Partnership ---------------------------- */

const STANDARD = [
  { icon: Handshake, title: "A dedicated programme partner", text: "A named account lead and quarterly reviews - one accountable contact from day one." },
  { icon: Megaphone, title: "Launch communications, done for you", text: "Co-branded invitations, emails, WhatsApp creatives and posters - ready from week one." },
  { icon: BarChart3, title: "Monthly participation reporting", text: "Enrolment, attendance and engagement reporting your leadership will actually read." },
  { icon: CalendarDays, title: "A quarterly team experience", text: "One hosted studio or on-site experience each quarter to keep energy and enrolment high." },
  { icon: Ticket, title: "Guest passes built in", text: "Members can bring colleagues and friends - the programme grows by word of mouth." },
  { icon: Receipt, title: "Simple, consolidated billing", text: "One GST-compliant invoice across every programme, transparent in every location." }
];

export function PartnershipStandard() {
  return (
    <SlideShell
      tone="light"
      num="09"
      kicker="The partnership standard"
      title={
        <>
          What every partnership includes.{" "}
          <span className="gold-foil italic">No exceptions.</span>
        </>
      }
      sub="Whichever programmes you choose, the experience around them stays the same - because a benefit only works if people genuinely use it."
    >
      <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
        {STANDARD.map((s, i) => (
          <Reveal key={s.title} delay={0.14 + i * 0.07} className="h-full">
            <div className="panel panel-hover group flex h-full flex-col p-7">
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-gilt group-hover:to-gold group-hover:text-ink group-hover:shadow-[0_10px_28px_-10px_rgba(201,162,39,0.8)]">
                <s.icon size={16} strokeWidth={1.7} />
              </span>
              <p className="relative z-10 mt-6 font-display text-[1.3rem] font-light leading-tight tracking-[-0.02em] text-cream">
                {s.title}
              </p>
              <p className="relative z-10 mt-3 text-[12.5px] leading-[1.7] text-bone/50">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}

/* --------------------------------- Roadmap --------------------------------- */

const PHASES = [
  { wk: "Week 0–2", title: "Design", points: ["Programmes tailored to your teams", "Benefits and payroll mapping", "Pricing confirmed for your cities"] },
  { wk: "Week 3–4", title: "Launch", points: ["Co-branded campaign goes live", "Leadership kickoff class", "Enrolment opens"] },
  { wk: "Week 5–8", title: "Pilot", points: ["Taster weeks and hosted classes", "First members onboarded", "Weekly check-ins with your HR team"] },
  { wk: "Week 9–12", title: "Scale", points: ["Full rollout across locations", "Monthly reporting goes live", "Quarterly review and refinement"] }
];

export function Roadmap() {
  return (
    <SlideShell
      tone="light"
      num="11"
      kicker="Your first 90 days"
      title={
        <>
          From agreement to first class{" "}
          <span className="gold-foil italic">in one quarter.</span>
        </>
      }
      sub="A proven rollout we run with every partner. Preferential pricing grows from week nine as participation does."
    >
      <Reveal delay={0.08}>
        <div className="relative mb-10">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #8a6f2b 0%, #c9a227 55%, #f0d999 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: EASE }}
            />
          </div>
          <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.2em] text-bone/35">
            <span>Day 0 · Signed</span>
            <span>Day 30</span>
            <span>Day 60</span>
            <span>Day 90 · Scaled</span>
          </div>
        </div>
      </Reveal>

      <div className="relative">
        <div
          className="absolute left-0 right-0 top-[23px] hidden h-px md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(201,162,39,0.6), rgba(201,162,39,0.22) 55%, transparent)"
          }}
        />
        <div className="grid gap-9 md:grid-cols-4 md:gap-5">
          {PHASES.map((p, i) => (
            <Reveal key={p.title} delay={0.16 + i * 0.1}>
              <div className="group relative">
                <div className="flex items-center gap-4">
                  <span className="tnum relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-sm italic text-gold transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-gilt group-hover:to-gold group-hover:text-ink group-hover:shadow-[0_12px_30px_-12px_rgba(201,162,39,0.9)]">
                    {i + 1}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold/85">
                    {p.wk}
                  </span>
                </div>
                <p className="mt-6 font-display text-[1.6rem] font-light tracking-[-0.025em] text-cream">
                  {p.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[12.5px] leading-[1.6] text-bone/50">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rotate-45 bg-gold/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.6}>
        <div className="panel-wash mt-14 p-8">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <Kicker>A simple place to start</Kicker>
              <p className="balance mt-3 max-w-xl font-display text-[1.35rem] font-light leading-snug tracking-[-0.02em] text-champagne md:text-[1.6rem]">
                One programme, one city, one quarter - we handle the launch, the instruction and the
                reporting. Your people simply show up.
              </p>
            </div>
            <span className="rounded-full border border-gold/35 bg-gold/[0.06] px-5 py-2.5 text-[9px] uppercase tracking-[0.24em] text-gilt/85">
              Ready to launch in 14 days
            </span>
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}

/* --------------------------------- Closing --------------------------------- */

export function Closing() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-ink text-bone">
      <motion.img
        src="/images/cover.jpg"
        alt=""
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.28 }}
        transition={{ duration: 1.9, ease: EASE }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/88 to-ink/72" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[620px] w-[620px] rounded-full opacity-[0.11] blur-[150px]"
        style={{ background: "radial-gradient(circle, #c9a227 0%, transparent 68%)" }}
      />
      <div className="vignette" />

      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -bottom-20 right-0 hidden select-none font-display text-[22rem] font-semibold italic leading-none text-gold/[0.13] lg:block"
      >
        57
      </span>

      <div className="absolute inset-0 z-10 px-6 pb-[104px] pt-[92px] md:px-12 xl:px-16">
        <div data-scroll className="mx-auto flex h-full max-w-[1500px] flex-col overflow-y-auto">
          <div className="m-auto w-full">
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-gradient-to-r from-gold to-gilt/40" />
                <span className="kicker text-gilt/80">Let's begin</span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.8rem,6.8vw,6rem)] font-light leading-[0.95] tracking-[-0.038em] text-cream">
                Let's put your teams <br className="hidden md:block" />
                <span className="gold-foil italic">on the barre.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-8 max-w-lg text-[13.5px] leading-[1.8] text-bone/60 md:text-[15px]">
                Choose a programme, choose a cohort, and give us one quarter. We'll bring the
                instructors, the launch campaign and the reporting - your people bring the energy.
              </p>
            </Reveal>

            <Reveal delay={0.48}>
              <div className="mt-11 flex flex-wrap items-center gap-3.5">
                <a
                  href="mailto:info@physique57india.com?subject=Corporate%20Wellness%20%E2%80%94%20Introduction%20Call"
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-all duration-400 hover:shadow-[0_20px_50px_-14px_rgba(201,162,39,0.85)]"
                  style={{
                    background: "linear-gradient(140deg, #f0d999 0%, #d8b23f 40%, #c9a227 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 14px 36px -16px rgba(201,162,39,0.7)"
                  }}
                >
                  Book an introduction call
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-400 group-hover:translate-x-1.5"
                  />
                </a>
                <a
                  href="mailto:info@physique57india.com?subject=Corporate%20Programme%20Brochure%20Request"
                  className="inline-flex items-center gap-3 rounded-full border border-gold/35 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-gilt/85 transition-all duration-400 hover:border-gold/70 hover:bg-gold/[0.07] hover:text-champagne"
                >
                  Request the full brochure
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mt-16 grid max-w-3xl gap-6 border-t border-gold/15 pt-7 sm:grid-cols-3">
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <Mail size={13} className="shrink-0 text-gold" /> info@physique57india.com
                </div>
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <MapPin size={13} className="shrink-0 text-gold" /> Flagship studio - Mumbai
                </div>
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <Globe size={13} className="shrink-0 text-gold" /> physique57.com
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <p className="mt-12 text-[9px] uppercase leading-relaxed tracking-[0.24em] text-bone/25">
                Private &amp; confidential · All prices exclusive of GST · Benchmarked to published
                Mumbai studio rates · Figures indicative, finalised with your programme design
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
