import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chrome, SlideMap } from "./components/Chrome";
import { EASE } from "./components/ui";
import { Cover, WhyNow, Difference, Overview } from "./slides/opening";
import { Option1, Option2, Option3, Option4, Option5, Option6 } from "./slides/options";
import { Comparison } from "./slides/comparison";
import { PartnershipStandard, Roadmap, Closing } from "./slides/closing";

interface SlideEntry {
  id: string;
  title: string;
  C: ComponentType<{ onSelect?: (i: number) => void }>;
}

const SLIDES: SlideEntry[] = [
  { id: "cover", title: "Fitness that moves your business forward", C: Cover },
  { id: "opportunity", title: "01 · Why wellbeing, why now", C: WhyNow },
  { id: "method", title: "02 · The Physique 57 method", C: Difference },
  { id: "architecture", title: "03 · Programmes at a glance", C: Overview as SlideEntry["C"] },
  { id: "opt-1", title: "Programme 01 - Flexible benefits listing", C: Option1 },
  { id: "opt-2", title: "Programme 02 - Pooled class credits", C: Option2 },
  { id: "opt-3", title: "Programme 03 - The leadership concierge", C: Option3 },
  { id: "opt-4", title: "Programme 04 - Tiered membership menu", C: Option4 },
  { id: "opt-5", title: "Programme 05 - On-site & hosted classes", C: Option5 },
  { id: "opt-6", title: "Programme 06 - Digital access pass", C: Option6 },
  { id: "portfolio", title: "05 · The complete picture", C: Comparison },
  { id: "standard", title: "06 · The partnership standard", C: PartnershipStandard },
  { id: "roadmap", title: "07 · Your first 90 days", C: Roadmap },
  { id: "next", title: "08 · Let's begin", C: Closing }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [mapOpen, setMapOpen] = useState(false);
  const lock = useRef(0);
  const touch = useRef<{ x: number; y: number; scrollable: boolean } | null>(null);

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setMapOpen(false);
      if (e.key === "g" || e.key === "G") return setMapOpen((v) => !v);
      if (mapOpen) return;
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        handleNext();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
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
  }, [handleNext, handlePrev, go, mapOpen]);

  const onWheel = (e: React.WheelEvent) => {
    if (mapOpen) return;
    // Let internal slide scrolling happen naturally; only change slides at the edges
    const scroller = (e.target as HTMLElement).closest?.("[data-scroll]") as HTMLElement | null;
    if (scroller && scroller.scrollHeight > scroller.clientHeight + 4) {
      const atTop = scroller.scrollTop <= 0;
      const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4;
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
    }
    const now = Date.now();
    if (now - lock.current < 1100 || Math.abs(e.deltaY) < 30) return;
    lock.current = now;
    if (e.deltaY > 0) handleNext();
    else handlePrev();
  };

  return (
    <div
      className="relative h-dvh w-screen overflow-hidden bg-ink text-bone"
      onWheel={onWheel}
      onTouchStart={(e) => {
        const scroller = (e.target as HTMLElement).closest?.("[data-scroll]") as HTMLElement | null;
        const scrollable = !!scroller && scroller.scrollHeight > scroller.clientHeight + 4;
        touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, scrollable };
      }}
      onTouchEnd={(e) => {
        if (!touch.current || mapOpen) return;
        const dy = e.changedTouches[0].clientY - touch.current.y;
        const dx = e.changedTouches[0].clientX - touch.current.x;
        const inScroller = touch.current.scrollable;
        touch.current = null;
        if (Math.abs(dy) < 60 && Math.abs(dx) < 60) return;
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) handleNext();
          else handlePrev();
        } else if (!inScroller) {
          if (dy < 0) handleNext();
          else handlePrev();
        }
      }}
    >
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
          {index === 3 ? <Overview onSelect={(i) => go(i)} /> : (() => { const S = SLIDES[index].C; return <S />; })()}
        </motion.main>
      </AnimatePresence>

      <Chrome
        index={index}
        total={SLIDES.length}
        titles={SLIDES.map((s) => s.title)}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenMap={() => setMapOpen(true)}
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
  );
}
