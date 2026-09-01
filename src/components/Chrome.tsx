import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, LayoutGrid, Loader2, X, NotebookPen, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "./ui";
import type { ExportFormat } from "../utils/useDeckExport";
import { SPEAKER_NOTES } from "../data/speakerNotes";

const navBtn =
  "flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-white/[0.03] text-gilt/80 backdrop-blur-md transition-all duration-400 hover:border-gold/70 hover:bg-gold/10 hover:text-champagne active:scale-95";

const EXPORT_OPTIONS: { format: ExportFormat; label: string }[] = [
  { format: "pdf", label: "PDF" },
  { format: "pptx", label: "PowerPoint" },
  { format: "png", label: "PNG images (.zip)" },
  { format: "html", label: "Standalone HTML" }
];

function ExportMenu({
  exporting,
  progress,
  onExport
}: {
  exporting: boolean;
  progress: { done: number; total: number };
  onExport: (format: ExportFormat) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-auto relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={exporting}
        aria-label="Export deck"
        className={navBtn}
      >
        {exporting ? <Loader2 size={13} strokeWidth={1.8} className="animate-spin" /> : <Download size={13} strokeWidth={1.8} />}
      </button>

      <AnimatePresence>
        {open && !exporting && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute bottom-12 right-0 z-40 w-52 overflow-hidden rounded-2xl border border-gold/25 bg-ink-2/95 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
          >
            {EXPORT_OPTIONS.map((opt) => (
              <button
                key={opt.format}
                onClick={() => {
                  setOpen(false);
                  onExport(opt.format);
                }}
                className="block w-full px-4 py-3 text-left text-[11px] uppercase tracking-[0.18em] text-bone/70 transition-colors duration-200 hover:bg-gold/10 hover:text-champagne"
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {exporting && (
        <div className="absolute bottom-12 right-0 z-40 whitespace-nowrap rounded-full border border-gold/25 bg-ink-2/95 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-bone/60 backdrop-blur-xl">
          Exporting {progress.done}/{progress.total}
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Speaker notes ------------------------------ */

/**
 * Presenter-only. Lives in the chrome rather than the slide so it is never
 * captured by the export and never projected - `data-export-hide` keeps it out
 * of any future capture that walks the chrome too.
 */
function SpeakerNotes({ slideId }: { slideId: string }) {
  const [open, setOpen] = useState(false);
  const note = SPEAKER_NOTES[slideId];

  // `n` toggles. The panel deliberately stays open across slides so a presenter
  // can leave it up for the whole pitch.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (e.key === "n" || e.key === "N") setOpen((v) => !v);
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!note) return null;

  return (
    <div className="pointer-events-auto relative" data-export-hide>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Hide speaker notes" : "Show speaker notes"}
        aria-expanded={open}
        className={`${navBtn} ${open ? "border-gold/70 bg-gold/10 text-champagne" : ""}`}
      >
        <NotebookPen size={13} strokeWidth={1.8} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="absolute bottom-12 right-0 z-40 max-h-[62vh] w-[min(90vw,26rem)] overflow-y-auto rounded-2xl border border-gold/25 bg-ink-2/97 p-6 text-left shadow-[0_24px_60px_-18px_rgba(0,0,0,0.75)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="kicker inline-flex items-center gap-2.5 text-gold">
                <span className="inline-block h-[3px] w-[3px] rotate-45 bg-gold" />
                Speaker notes
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-bone/25">Press N</span>
            </div>

            <p className="mt-5 font-display text-[1.05rem] font-light leading-snug tracking-[-0.015em] text-champagne">
              {note.hook}
            </p>

            <ul className="mt-5 space-y-3 border-t border-bone/[0.08] pt-5">
              {note.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[12px] leading-[1.65] text-bone/60">
                  <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rotate-45 bg-gold/70" />
                  {pt}
                </li>
              ))}
            </ul>

            {note.watchFor && (
              <div className="mt-5 flex gap-3 border-t border-gold/15 pt-5">
                <AlertTriangle size={13} className="mt-[3px] shrink-0 text-gold/70" strokeWidth={1.8} />
                <p className="text-[11.5px] leading-[1.6] text-bone/45">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold/60">Watch for </span>
                  {note.watchFor}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Chrome({
  index,
  total,
  titles,
  slideId,
  onPrev,
  onNext,
  onOpenMap,
  onHome,
  onExport,
  exporting,
  exportProgress
}: {
  index: number;
  total: number;
  titles: string[];
  slideId: string;
  onPrev: () => void;
  onNext: () => void;
  onOpenMap: () => void;
  onHome: () => void;
  onExport: (format: ExportFormat) => void;
  exporting: boolean;
  exportProgress: { done: number; total: number };
}) {
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 bg-gradient-to-b from-ink via-ink/85 to-transparent px-6 pb-10 pt-6 md:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <button
            onClick={onHome}
            aria-label="Back to cover"
            className="pointer-events-auto flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-75"
          >
            <span className="font-display text-[15px] font-semibold tracking-[0.16em] text-cream">
              PHYSIQUE&nbsp;57
            </span>
            <span className="h-3 w-px bg-gold/40" />
            <span className="text-[9px] uppercase tracking-[0.32em] text-gold/70">India</span>
          </button>
          <span className="hidden text-[9px] uppercase tracking-[0.32em] text-bone/28 sm:block">
            Corporate Wellness Partnerships
          </span>
        </div>
      </header>

      <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-ink via-ink/90 to-transparent px-6 pb-6 pt-12 md:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-8">
          <div className="flex min-w-[130px] flex-col gap-1.5">
            <span className="tnum text-[11px] font-medium tracking-[0.2em] text-champagne">
              {String(index + 1).padStart(2, "0")}
              <span className="text-bone/25"> / {String(total).padStart(2, "0")}</span>
            </span>
            <span className="hidden max-w-[240px] truncate text-[9px] uppercase tracking-[0.24em] text-bone/32 md:block">
              {titles[index]}
            </span>
          </div>

          <div className="relative mx-auto hidden h-px w-full max-w-lg flex-1 sm:block">
            <div className="absolute inset-0 bg-bone/12" />
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left"
              style={{
                background: "linear-gradient(90deg, rgba(138,111,43,0.7), #c9a227 60%, #f0d999)"
              }}
              initial={false}
              animate={{ scaleX: total > 1 ? index / (total - 1) : 1 }}
              transition={{ duration: 0.7, ease: EASE }}
            />
            <motion.span
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-gilt shadow-[0_0_12px_rgba(231,200,122,0.9)]"
              initial={false}
              animate={{ left: `${total > 1 ? (index / (total - 1)) * 100 : 100}%` }}
              transition={{ duration: 0.7, ease: EASE }}
            />
          </div>

          <div className="pointer-events-auto flex min-w-[130px] items-center justify-end gap-2.5">
            <SpeakerNotes slideId={slideId} />
            <ExportMenu exporting={exporting} progress={exportProgress} onExport={onExport} />
            <button onClick={onOpenMap} aria-label="Programme guide" className={navBtn}>
              <LayoutGrid size={13} strokeWidth={1.8} />
            </button>
            <button onClick={onPrev} aria-label="Previous slide" className={navBtn}>
              <ArrowLeft size={13} strokeWidth={1.8} />
            </button>
            <button onClick={onNext} aria-label="Next slide" className={navBtn}>
              <ArrowRight size={13} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export function SlideMap({
  open,
  titles,
  index,
  onJump,
  onClose
}: {
  open: boolean;
  titles: string[];
  index: number;
  onJump: (i: number) => void;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/97 text-bone backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="mx-auto max-w-[1500px] px-6 py-7 md:px-12 xl:px-16">
            <div className="flex items-center justify-between">
              <span className="kicker inline-flex items-center gap-2.5 text-gold">
                <span className="inline-block h-[3px] w-[3px] rotate-45 bg-gold" />
                Programme guide
              </span>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gilt transition-all duration-400 hover:rotate-90 hover:border-gold/70 hover:bg-gold/10"
                aria-label="Close"
              >
                <X size={13} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-2.5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
              {titles.map((t, i) => (
                <motion.button
                  key={t}
                  onClick={() => onJump(i)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.035, ease: EASE }}
                  className={`panel panel-hover group flex items-baseline gap-4 p-6 text-left ${
                    i === index ? "ring-1 ring-gold/50" : ""
                  }`}
                >
                  <span
                    className={`tnum relative z-10 font-display text-xs italic ${
                      i === index ? "text-gold" : "text-gold/45"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`relative z-10 font-display text-[1.05rem] font-light leading-snug tracking-[-0.015em] ${
                      i === index ? "text-champagne" : "text-bone/75"
                    }`}
                  >
                    {t}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
