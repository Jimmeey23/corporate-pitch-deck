import { useEffect } from "react";
import { Printer, X } from "lucide-react";
import { OPTIONS } from "../data/programme";
import { RATE_SECTIONS, INCLUDED, TERMS } from "./rateCard";

/* --------------------------------- Chrome --------------------------------- */

function Masthead({ page }: { page: 1 | 2 }) {
  return (
    <header className="flex items-end justify-between">
      <div className="flex items-center gap-3.5">
        <span className="font-display text-[15px] font-semibold tracking-[0.16em] text-[#17171a]">
          PHYSIQUE&nbsp;57
        </span>
        <span className="h-3 w-px bg-[#c9a227]" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8a6f2b]">
          India
        </span>
      </div>
      <span className="text-[8.5px] uppercase tracking-[0.28em] text-[#17171a]/40">
        Corporate wellness partnerships · {page} of 2
      </span>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto pt-4">
      <div className="rule-ink" />
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 text-[8.5px] uppercase tracking-[0.22em] text-[#17171a]/40">
        <span>info@physique57india.com · physique57india.com</span>
        <span>Private &amp; confidential · All rates exclusive of GST</span>
      </div>
    </footer>
  );
}

/* --------------------------------- Page 1 --------------------------------- */

function PageOne() {
  return (
    <article className="paper paper-edge flex flex-col px-[16mm] py-[14mm]">
      <Masthead page={1} />

      <div className="mt-7">
        <span className="kicker">The corporate programme</span>
        <h1 className="mt-3.5 font-display text-[34px] font-light leading-[1.02] tracking-[-0.03em] text-[#17171a]">
          Five ways to bring Physique 57
          <br />
          <span className="paper-foil italic">to your workplace.</span>
        </h1>
        <p className="mt-4 max-w-[135mm] text-[10.5px] leading-[1.7] text-[#17171a]/65">
          Every programme below is priced against our published Mumbai studio rates — centrally
          maintained, consistent across every city we serve, and open to your finance team's
          scrutiny. Most partners combine two or three to cover different teams and goals.
        </p>
      </div>

      <div className="mt-6 flex flex-col">
        {OPTIONS.map((o, i) => (
          <div
            key={o.id}
            className={`grid grid-cols-[10mm_1fr_44mm] gap-x-5 py-4 ${
              i > 0 ? "border-t border-[#17171a]/10" : "border-t border-[#c9a227]/50"
            }`}
          >
            <span className="tnum pt-1 font-display text-[13px] italic text-[#8a6f2b]">{o.num}</span>

            <div className="min-w-0">
              <h2 className="font-display text-[16px] font-light leading-tight tracking-[-0.02em] text-[#17171a]">
                {o.name.replace("•", "·")}
              </h2>
              <p className="mt-1.5 text-[10px] leading-[1.6] text-[#17171a]/60">{o.tagline}</p>
              <p className="mt-2 text-[8.5px] font-semibold uppercase tracking-[0.2em] text-[#8a6f2b]">
                {o.bestFor}
              </p>
            </div>

            <div className="text-right">
              <p className="tnum font-display text-[15px] font-light leading-tight tracking-[-0.02em] text-[#17171a]">
                {o.anchor}
              </p>
              {o.unitCost && (
                <>
                  {o.unitCost.perMonth && (
                    <p className="tnum mt-1.5 text-[9.5px] text-[#17171a]/55">{o.unitCost.perMonth}</p>
                  )}
                  <p className="tnum mt-1 text-[9.5px] font-medium text-[#8a6f2b]">
                    {o.unitCost.perSession}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-[#c9a227]/50 bg-[#c9a227]/[0.07] px-5 py-4">
        <span className="kicker">The number that matters</span>
        <p className="mt-2.5 max-w-[150mm] font-display text-[13.5px] font-light leading-snug tracking-[-0.015em] text-[#17171a]">
          A benefit's real price is not what it costs per head — it is what it costs per head who
          actually uses it. Every rate above is quoted{" "}
          <span className="italic text-[#8a6f2b]">per attended class</span>, because that is the only
          figure that survives contact with your utilisation report.
        </p>
      </div>

      <Footer />
    </article>
  );
}

/* --------------------------------- Page 2 --------------------------------- */

function PageTwo() {
  return (
    <article className="paper paper-edge flex flex-col px-[16mm] py-[14mm]">
      <Masthead page={2} />

      <div className="mt-6">
        <span className="kicker">The rate card</span>
        <h1 className="mt-3 font-display text-[23px] font-light leading-[1.04] tracking-[-0.03em] text-[#17171a]">
          Published rates,{" "}
          <span className="paper-foil italic">and what you pay instead.</span>
        </h1>
      </div>

      <div className="mt-3.5 flex flex-col gap-3">
        {RATE_SECTIONS.map((sec) => (
          <section key={sec.title}>
            <div className="flex items-baseline justify-between gap-5">
              <h2 className="font-display text-[13px] font-light tracking-[-0.015em] text-[#17171a]">
                {sec.title}
              </h2>
              <span className="h-px flex-1 bg-[#17171a]/12" />
            </div>
            {sec.intro && (
              <p className="mt-1.5 max-w-[155mm] text-[8.5px] leading-[1.5] text-[#17171a]/55">
                {sec.intro}
              </p>
            )}

            <div className="mt-2">
              <div className="grid grid-cols-[1fr_28mm_28mm_26mm] gap-x-3 border-b border-[#17171a]/15 pb-0.5">
                <span className="text-[7.5px] uppercase tracking-[0.18em] text-[#17171a]/40">
                  Item
                </span>
                {sec.columns.map((c) => (
                  <span
                    key={c}
                    className="text-right text-[7.5px] uppercase tracking-[0.18em] text-[#17171a]/40"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {sec.rows.map((r) => (
                <div
                  key={r.item}
                  className="grid grid-cols-[1fr_28mm_28mm_26mm] items-baseline gap-x-3 border-b border-[#17171a]/[0.07] py-[3px]"
                >
                  <div className="min-w-0">
                    <p className="text-[9.5px] leading-snug text-[#17171a]/85">{r.item}</p>
                    {r.note && (
                      <p className="text-[8px] leading-snug text-[#17171a]/40">{r.note}</p>
                    )}
                  </div>
                  <span className="tnum text-right text-[9px] text-[#17171a]/45">
                    {r.published ?? "—"}
                  </span>
                  <span className="tnum text-right text-[10px] font-medium text-[#17171a]">
                    {r.corporate}
                  </span>
                  <span className="tnum text-right text-[8.5px] text-[#8a6f2b]">{r.saving ?? "—"}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-4 border-t border-[#c9a227]/50 pt-3.5">
        <span className="kicker">Every partnership includes</span>
        <div className="mt-2.5 grid grid-cols-3 gap-x-5 gap-y-1.5">
          {INCLUDED.map((inc) => (
            <div key={inc.title}>
              <p className="text-[9px] font-semibold leading-snug text-[#17171a]">{inc.title}</p>
              <p className="mt-0.5 text-[8px] leading-[1.5] text-[#17171a]/50">{inc.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 border-t border-[#17171a]/12 pt-2.5">
        <span className="text-[7.5px] uppercase tracking-[0.2em] text-[#17171a]/40">Terms</span>
        <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-0.5">
          {TERMS.map((t) => (
            <li key={t} className="flex gap-2 text-[7.5px] leading-[1.5] text-[#17171a]/50">
              <span className="mt-[5px] h-[2px] w-[2px] shrink-0 rotate-45 bg-[#c9a227]" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </article>
  );
}

/* -------------------------------- Overlay --------------------------------- */

export function Brochure({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) return; // let the browser handle it
      e.stopPropagation();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  return (
    <div className="brochure-root fixed inset-0 z-[60] overflow-y-auto bg-ink/97 px-4 py-10 backdrop-blur-xl">
      <div className="print-hide mx-auto mb-8 flex max-w-[210mm] items-center justify-between gap-5">
        <div>
          <span className="kicker text-gold">Corporate programme brochure</span>
          <p className="mt-2 text-[11.5px] text-bone/45">
            Two pages, A4. Print or save as PDF to leave behind.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink transition-all duration-400 hover:shadow-[0_18px_44px_-14px_rgba(201,162,39,0.85)]"
            style={{
              background: "linear-gradient(140deg, #f0d999 0%, #d8b23f 40%, #c9a227 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 12px 30px -16px rgba(201,162,39,0.7)"
            }}
          >
            <Printer size={13} strokeWidth={1.9} /> Print / Save PDF
          </button>
          <button
            onClick={onClose}
            aria-label="Close brochure"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gilt transition-all duration-400 hover:rotate-90 hover:border-gold/70 hover:bg-gold/10"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-fit flex-col gap-8">
        <PageOne />
        <PageTwo />
      </div>
    </div>
  );
}
