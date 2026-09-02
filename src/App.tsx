import { useCallback, useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chrome, SlideMap } from "./components/Chrome";
import { EASE } from "./components/ui";
import { Cover, WhyNow, StatusQuo, Difference, Overview } from "./slides/opening";
import { Heritage } from "./slides/heritage";
import { Option1, Option2, Option3, Option4, Option5 } from "./slides/options";
import { Comparison } from "./slides/comparison";
import { ROICalculator, FAQ } from "./slides/extras";
import { PartnershipStandard, Roadmap, Closing, ThankYou } from "./slides/closing";
import { useDeckExport } from "./utils/useDeckExport";
import { Brochure } from "./brochure/Brochure";

interface SlideEntry {
  id: string;
  title: string;
  C: ComponentType<{ onSelect?: (i: number) => void }>;
}

/**
 * Order matters. Proof and the value case land BEFORE any price does - a buyer
 * who has not yet been given a reason to care reads five pricing slides as five
 * costs.
 */
const SLIDES: SlideEntry[] = [
  { id: "cover", title: "Fitness that moves your business forward", C: Cover },
  { id: "opportunity", title: "01 · Why wellbeing, why now", C: WhyNow },
  { id: "status-quo", title: "02 · The cost of inaction", C: StatusQuo },
  { id: "heritage", title: "03 · Recognition", C: Heritage },
  { id: "method", title: "04 · The Physique 57 method", C: Difference },
  { id: "roi", title: "05 · What it's worth", C: ROICalculator },
  { id: "architecture", title: "06 · Programmes at a glance", C: Overview as SlideEntry["C"] },
  { id: "opt-1", title: "Programme 01 - Flexible benefits listing", C: Option1 },
  { id: "opt-2", title: "Programme 02 - Pooled class credits", C: Option2 },
  { id: "opt-3", title: "Programme 03 - The leadership concierge", C: Option3 },
  { id: "opt-4", title: "Programme 04 - Tiered membership menu", C: Option4 },
  { id: "opt-5", title: "Programme 05 - On-site & hosted classes", C: Option5 },
  { id: "portfolio", title: "08 · Build your programme", C: Comparison },
  { id: "standard", title: "09 · The partnership standard", C: PartnershipStandard },
  { id: "faq", title: "10 · Common questions", C: FAQ },
  { id: "roadmap", title: "11 · Your first 90 days", C: Roadmap },
  { id: "next", title: "12 · Let's begin", C: Closing },
  { id: "thanks", title: "13 · Thank you", C: ThankYou }
];

const OVERVIEW_INDEX = SLIDES.findIndex((s) => s.id === "architecture");
const OPTION_INDEX = (optionIndex: number) =>
  SLIDES.findIndex((s) => s.id === `opt-${optionIndex + 1}`);

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [mapOpen, setMapOpen] = useState(false);
  // The brochure is addressable at #brochure so the link can be shared, and so
  // the back button closes it.
  const [brochureOpen, setBrochureOpen] = useState(
    () => typeof window !== "undefined" && window.location.hash === "#brochure"
  );
  const { exporting, progress, exportDeck } = useDeckExport(SLIDES);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next));
      if (clamped === index) return;
      setDir(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [index]
  );

  const handleNext = useCallback(() => go(index + 1), [go, index]);
  const handlePrev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const sync = () => setBrochureOpen(window.location.hash === "#brochure");
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const closeBrochure = useCallback(() => {
    if (window.location.hash === "#brochure") history.back();
    else setBrochureOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (brochureOpen) return;
      if (e.key === "Escape") return setMapOpen(false);
      if (e.key === "g" || e.key === "G") return setMapOpen((v) => !v);
      if (mapOpen) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev, go, mapOpen, brochureOpen]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-ink text-bone">
      <div className={brochureOpen ? "print-hide contents" : "contents"}>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.main
          key={index}
          className="absolute inset-0"
          custom={dir}
          initial={{ opacity: 0, x: dir * 44, scale: 1.015, filter: "blur(14px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: dir * -28, scale: 0.99, filter: "blur(10px)" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          {index === OVERVIEW_INDEX ? (
            <Overview onSelect={(optionIndex) => go(OPTION_INDEX(optionIndex))} />
          ) : (
            (() => {
              const S = SLIDES[index].C;
              return <S />;
            })()
          )}
        </motion.main>
      </AnimatePresence>

      <Chrome
        index={index}
        total={SLIDES.length}
        titles={SLIDES.map((s) => s.title)}
        slideId={SLIDES[index].id}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenMap={() => setMapOpen(true)}
        onHome={() => go(0)}
        onExport={exportDeck}
        exporting={exporting}
        exportProgress={progress}
      />
      <SlideMap
        open={mapOpen}
        titles={SLIDES.map((s) => s.title)}
        index={index}
        onJump={(i) => {
          setMapOpen(false);
          go(i);
        }}
        onClose={() => setMapOpen(false)}
      />

      <div className="grain" />
      </div>

      {brochureOpen && <Brochure onClose={closeBrochure} />}
    </div>
  );
}
