import { useState } from "react";
import { Handshake, Megaphone, BarChart3, CalendarDays, Ticket, Receipt, ArrowRight, Mail, MapPin, Globe, ChevronDown } from "lucide-react";
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

const TARGET_HUBS: { area: string; companies: { name: string; sector: string }[] }[] = [
  {
    area: "Andheri East",
    companies: [
      { name: "HDFC ERGO General Insurance", sector: "Insurance" },
      { name: "Hungama Digital Media Entertainment", sector: "Media/Entertainment" },
      { name: "Red Bull Pvt Ltd (India HQ)", sector: "FMCG/Beverages" },
      { name: "Procter & Gamble Hygiene and Health Care Ltd", sector: "FMCG" },
      { name: "PVR INOX Limited", sector: "Media/Entertainment" },
      { name: "Jet Airways (Head Office)", sector: "Aviation" },
      { name: "The Supreme Industries Ltd (Corporate Office)", sector: "Manufacturing/Plastics" },
      { name: "Solitaire Corporate Park (multi-tenant)", sector: "Mixed Corporate" },
      { name: "VKG Corporate Centre (multi-tenant)", sector: "Mixed Corporate" },
      { name: "Hubtown Solaris (business park, 100+ companies)", sector: "Mixed Corporate" },
      { name: "Lodha Supremus, Andheri (business park)", sector: "Mixed Corporate" },
      { name: "Skyline Icon (business/coworking hub)", sector: "Mixed Corporate/Coworking" },
      { name: "Watson Pharma (Head Office)", sector: "Pharma" },
      { name: "Oceanic Pharmachem Pvt Ltd", sector: "Pharma" },
      { name: "Network Techlab (India) Ltd", sector: "IT Infrastructure" },
      { name: "Nirman Group of Companies", sector: "Real Estate/Construction" }
    ]
  },
  {
    area: "Nariman Point",
    companies: [
      { name: "Union Bank of India (Central Office)", sector: "Banking (PSU)" },
      { name: "DBS Bank (Nariman Point Branch)", sector: "Banking" },
      { name: "Axis Bank (Corporate Banking Branch)", sector: "Banking" },
      { name: "Bank of Baroda (Mid-Corporate Branch)", sector: "Banking (PSU)" },
      { name: "Central Bank of India (Head Office - Chander Mukhi)", sector: "Banking (PSU)" },
      { name: "Bandhan Bank", sector: "Banking" },
      { name: "Shardul Amarchand Mangaldas", sector: "Law Firm" },
      { name: "Khaitan Legal Associates", sector: "Law Firm" },
      { name: "Khemka & Associates", sector: "Law Firm" },
      { name: "Vis Legis Law Practice, Advocates", sector: "Law Firm" },
      { name: "ALMT Legal", sector: "Law Firm" },
      { name: "Regstreet Law Advisors", sector: "Law Firm" },
      { name: "RKS Associate", sector: "Law Firm" },
      { name: "Dhruve Liladhar And Co", sector: "Law Firm" }
    ]
  },
  {
    area: "Lower Parel",
    companies: [
      { name: "Tata AIG General Insurance", sector: "Insurance" },
      { name: "Cedar Management Consulting International", sector: "Consulting" },
      { name: "Cipla Ltd (Corporate HQ)", sector: "Pharma" },
      { name: "JioStar India Pvt Ltd (Star House)", sector: "Media/Entertainment" },
      { name: "ZEE Entertainment Enterprises (HQ)", sector: "Media/Entertainment" },
      { name: "Peninsula Corporate Park (multi-tenant business park)", sector: "Mixed Corporate" },
      { name: "One Lodha Place (business park)", sector: "Mixed Corporate" },
      { name: "Nippon India Mutual Fund (Corporate Office)", sector: "Asset Management" },
      { name: "Allied Blenders And Distillers Ltd", sector: "FMCG/Beverages" },
      { name: "Peninsula Land Ltd", sector: "Real Estate" }
    ]
  },
  {
    area: "BKC",
    companies: [
      { name: "De Beers Group (Corporate Office)", sector: "Luxury/Diamonds" },
      { name: "SAP India Pvt Ltd", sector: "IT/Software" },
      { name: "ONGC (Corporate HQ)", sector: "Oil & Gas (PSU)" },
      { name: "Google Mumbai", sector: "IT/Technology" },
      { name: "Godrej BKC (multi-tenant incl. Amazon, Netflix, Abbott)", sector: "Mixed Corporate" },
      { name: "JLL Mumbai (Real Estate Consulting)", sector: "Real Estate Services" },
      { name: "Abbott India Ltd", sector: "Pharma/Healthcare" },
      { name: "Pittie Group (Corporate HQ)", sector: "Conglomerate/Retail" }
    ]
  },
  {
    area: "Powai",
    companies: [
      { name: "Tata Consultancy Services (Kensington Campus)", sector: "IT/Software" },
      { name: "HCLTech", sector: "IT/Software" },
      { name: "Thoughtworks Technologies India", sector: "IT/Software" },
      { name: "LTIMindtree (LTM)", sector: "IT/Software" },
      { name: "Orion Innovation", sector: "IT/Software" },
      { name: "Tech Data Technology Solutions", sector: "IT/Distribution" },
      { name: "Moat Wealth Associates LLP", sector: "Financial Services" },
      { name: "Param Investments MF Services LLP", sector: "Financial Services" }
    ]
  },
  {
    area: "Goregaon East",
    companies: [
      { name: "Oberoi Realty Limited", sector: "Real Estate" },
      { name: "Oberoi Commerz III (business tower)", sector: "Mixed Corporate" },
      { name: "Commerz II (Oberoi business tower)", sector: "Mixed Corporate" },
      { name: "Lotus Corporate Park (200+ companies incl. Asian Paints, Mahindra)", sector: "Mixed Corporate" },
      { name: "Corporate Avenue (multi-tenant)", sector: "Mixed Corporate" },
      { name: "Synergy Business Park", sector: "Mixed Corporate" },
      { name: "Oberoi Garden City / International Business Park", sector: "Mixed Corporate" }
    ]
  },
  {
    area: "Fort",
    companies: [
      { name: "Tata Communications Ltd", sector: "Telecom" },
      { name: "Groupe Veritas Limited", sector: "Petrochemical Trading" },
      { name: "Tata Steel Ltd (Bombay House - Tata Group HQ)", sector: "Conglomerate/Steel" },
      { name: "Healthspring (Corporate HQ)", sector: "Healthcare" },
      { name: "DBS Workspace (Serviced/Shared Offices)", sector: "Business Centre" },
      { name: "Dosti Realty Ltd (Corporate Office)", sector: "Real Estate" }
    ]
  },
  {
    area: "Malad West",
    companies: [
      { name: "Mindspace Malad (IT/business park)", sector: "Mixed Corporate" },
      { name: "Tech Mahindra Limited", sector: "IT/BPO" },
      { name: "Prism Tower (Mindspace - ICICI, Bank of America, Teleperformance)", sector: "Mixed Corporate" },
      { name: "Sodexo India (Office)", sector: "Facilities/Corporate Services" },
      { name: "9 Business Bay (business park)", sector: "Mixed Corporate" }
    ]
  }
];

export function Closing() {
  const [openHub, setOpenHub] = useState<string | null>(null);

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

            <Reveal delay={0.58}>
              <div className="mt-14 max-w-3xl border-t border-gold/15 pt-7">
                <Kicker>Pipeline, ready to activate</Kicker>
                <p className="relative z-10 mt-3 max-w-xl text-[12.5px] leading-[1.7] text-bone/50">
                  94 target companies already mapped across Mumbai's top corporate hubs - spanning
                  banking, law, IT, pharma and media - so outreach can begin the day we sign. Tap a
                  hub to see who's on the list.
                </p>
                <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                  {TARGET_HUBS.map((h) => {
                    const open = openHub === h.area;
                    return (
                      <button
                        key={h.area}
                        onClick={() => setOpenHub(open ? null : h.area)}
                        aria-expanded={open}
                        className={`tnum flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[9px] uppercase tracking-[0.18em] transition-all duration-300 ${
                          open
                            ? "border-gold bg-gold/[0.14] text-champagne"
                            : "border-gold/25 bg-gold/[0.06] text-gilt/80 hover:border-gold/55 hover:bg-gold/[0.1]"
                        }`}
                      >
                        {h.area} · {h.companies.length}
                        <ChevronDown
                          size={10}
                          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div
                  className="grid transition-[grid-template-rows] duration-450 ease-out"
                  style={{ gridTemplateRows: openHub ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    {openHub && (
                      <div className="panel mt-4 max-h-[220px] overflow-y-auto p-5">
                        <div className="relative z-10 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                          {TARGET_HUBS.find((h) => h.area === openHub)!.companies.map((c) => (
                            <div key={c.name} className="flex items-baseline justify-between gap-3 text-[11.5px]">
                              <span className="text-bone/70">{c.name}</span>
                              <span className="shrink-0 text-[9px] uppercase tracking-[0.14em] text-gold/45">
                                {c.sector}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.68}>
              <div className="mt-10 grid max-w-3xl gap-6 border-t border-gold/15 pt-7 sm:grid-cols-3">
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <Mail size={13} className="shrink-0 text-gold" /> info@physique57india.com
                </div>
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <MapPin size={13} className="shrink-0 text-gold" /> Flagship studio - Mumbai & Bengaluru
                </div>
                <div className="flex items-center gap-3 text-[12px] text-bone/55">
                  <Globe size={13} className="shrink-0 text-gold" /> physique57india.com
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
