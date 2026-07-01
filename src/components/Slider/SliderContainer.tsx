import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { SlideContext } from "@/context/SlideContext";

const SLIDE_SECTIONS = [
  { label: "Hero" },
  { label: "Agenda" },
  { label: "Genesis" },
  { label: "Growth" },
  { label: "Financials" },
  { label: "Scale" },
  { label: "Tendering" },
  { label: "UAE Map" },
  { label: "Record" },
  { label: "Projects" },
  { label: "PMV" },
  { label: "Departments" },
  { label: "HSE" },
  { label: "Innovation" },
  { label: "Vision 2026" },
  { label: "Closing" },
];

interface SliderContainerProps {
  children: React.ReactNode[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.97,
  }),
};

export const SliderContainer = ({ children }: SliderContainerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const total = children.length;

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 650);
    },
    [currentSlide, isTransitioning]
  );

  const next = useCallback(() => {
    if (currentSlide < total - 1) goTo(currentSlide + 1);
  }, [currentSlide, total, goTo]);

  const prev = useCallback(() => {
    if (currentSlide > 0) goTo(currentSlide - 1);
  }, [currentSlide, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const showNavTemporarily = useCallback(() => {
    setShowNav(true);
    clearTimeout(navTimeout.current);
    navTimeout.current = setTimeout(() => setShowNav(false), 3000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const section = SLIDE_SECTIONS[currentSlide] || SLIDE_SECTIONS[0];

  return (
    <SlideContext.Provider value={{ goTo, currentSlide }}>
      <div
        className="relative w-full h-screen overflow-hidden bg-white perspective-1000"
        onMouseMove={showNavTemporarily}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>

        {/* Top bar */}
        <motion.div
          animate={{ opacity: showNav ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 z-50 flex items-center gap-3 px-5 py-4 pointer-events-none"
        >
          <span className="nav-label">{section.label}</span>
          <span className="text-xs font-mono text-[#122023]/30">
            {String(currentSlide + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={toggleFullscreen}
            className="pointer-events-auto p-1.5 rounded-lg bg-[#122023]/6 hover:bg-[#122023]/12 transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-[#122023]/50" />
            ) : (
              <Maximize2 className="w-4 h-4 text-[#122023]/50" />
            )}
          </button>
        </motion.div>

        {/* Prev arrow */}
        <motion.button
          animate={{ opacity: showNav && currentSlide > 0 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-[#122023]/8 border border-[#122023]/12 flex items-center justify-center hover:bg-[#122023]/15 transition-colors"
          style={{ pointerEvents: showNav && currentSlide > 0 ? "auto" : "none" }}
        >
          <ChevronLeft className="w-5 h-5 text-[#122023]/60" />
        </motion.button>

        {/* Next arrow */}
        <motion.button
          animate={{ opacity: showNav && currentSlide < total - 1 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-[#122023]/8 border border-[#122023]/12 flex items-center justify-center hover:bg-[#122023]/15 transition-colors"
          style={{ pointerEvents: showNav && currentSlide < total - 1 ? "auto" : "none" }}
        >
          <ChevronRight className="w-5 h-5 text-[#122023]/60" />
        </motion.button>

        {/* Bottom numbered navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1 pointer-events-auto px-3 py-2 rounded-full bg-white/70 backdrop-blur border border-[#122023]/10 shadow-sm"
        >
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={SLIDE_SECTIONS[i]?.label || `Slide ${i + 1}`}
              className={`w-6 h-6 rounded-full text-[9px] font-bold transition-all duration-300 flex items-center justify-center ${
                i === currentSlide
                  ? "bg-[#122023] text-white scale-110"
                  : "text-[#122023]/40 hover:text-[#122023]/70 hover:bg-[#122023]/8"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </motion.div>
        </div>
      </div>
    </SlideContext.Provider>
  );
};
