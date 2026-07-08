import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";

const years = [
  {
    year: "2023",
    label: "Foundation",
    color: "#9EF3EE",
    tagline: "Build the base. Earn credibility.",
    stats: [
      { label: "Revenue", value: "AED 2M" },
      { label: "Net Result", value: "–AED 1.2M" },
      { label: "Employees", value: "6" },
      { label: "Equipment", value: "Zero" },
    ],
    desc: "Year of setup, credibility, partnerships, and operational foundation. First 2 projects in Dubai. Initial pipeline AED 49M.",
  },
  {
    year: "2024",
    label: "Breakthrough",
    color: "#7de8e3",
    tagline: "Enter the market. Make a name.",
    stats: [
      { label: "Revenue", value: "AED 259M" },
      { label: "Backlog", value: "AED 724M" },
      { label: "Net Profit", value: "AED 15M" },
      { label: "Workforce", value: "450" },
      { label: "Fleet Units", value: "19 units" },
      { label: "Fleet Value", value: "≈AED 9M" },
    ],
    desc: "Breakthrough into structured infrastructure with real market presence. Prequalified with Tier-1 clients. Fleet established.",
  },
  {
    year: "2025",
    label: "Scale",
    color: "#5ecfc8",
    tagline: "Self-perform. Go big.",
    stats: [
      { label: "Revenue", value: "AED 653M" },
      { label: "Backlog", value: "AED 2B" },
      { label: "Net Profit", value: "AED 48M" },
      { label: "Workforce", value: "1,400" },
      { label: "Equipment", value: "100+ units" },
      { label: "Asset Value", value: "AED 50M" },
    ],
    desc: "Scale, self-performance, asset-backed growth, operational maturity. First Guinness World Record achieved.",
  },
  {
    year: "2026",
    label: "One Billion",
    color: "#D4AF37",
    tagline: "Cross the billion. Lead the market.",
    stats: [
      { label: "Target Revenue", value: ">AED 1B" },
      { label: "Equipment Invest.", value: "+AED 50M" },
      { label: "Win Rate Target", value: "18–20%" },
      { label: "Marine Capacity", value: "New" },
    ],
    desc: "Next major expansion. Revenue exceeding AED 1 billion. Marine capacity, advanced governance, and further fleet growth.",
  },
];

export const GrowthTimelineSlide = () => {
  const [active, setActive] = useState(0);

  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Chapter 02 · Growth Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Four Years. <span className="text-[#5ecfc8]">Four Leaps.</span>
          </h2>
        </motion.div>

        {/* Timeline row */}
        <div className="relative mb-8">
          {/* Connecting line track */}
          <div className="absolute top-[8px] left-[12.5%] right-[12.5%] h-px bg-[#122023]/10" />
          <motion.div
            className="absolute top-[8px] left-[12.5%] h-px"
            style={{ background: "#5ecfc8" }}
            initial={{ width: 0 }}
            animate={{ width: `${(active / 3) * 75}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-4 gap-4">
            {years.map((y, i) => (
              <motion.div
                key={y.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActive(i)}
              >
                <motion.div
                  animate={{
                    scale: active === i ? 1.35 : 1,
                    background: active === i ? y.color : "white",
                    borderColor: active === i ? y.color : "rgba(18,32,35,0.2)",
                    boxShadow: active === i ? `0 0 0 3px ${y.color}40` : "none",
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-4 h-4 rounded-full border-2 mb-3 z-10"
                />

                <div
                  className="text-2xl md:text-3xl font-black mb-1 transition-colors duration-300"
                  style={{ color: active === i ? y.color === "#D4AF37" ? "#b8902a" : y.color : "rgba(18,32,35,0.25)" }}
                >
                  {y.year}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#122023]/35">{y.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 border border-[#122023]/8"
            style={{ background: `${years[active].color}10` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <div
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: years[active].color === "#D4AF37" ? "#b8902a" : years[active].color }}
                >
                  {years[active].year} · {years[active].label}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#122023] mb-3 leading-tight">
                  "{years[active].tagline}"
                </h3>
                <p className="text-sm text-[#122023]/50 leading-relaxed">{years[active].desc}</p>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                {years[active].stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-xl p-3 border bg-white"
                    style={{ borderColor: `${years[active].color}40` }}
                  >
                    <div className="text-lg md:text-xl font-black text-[#122023]">{s.value}</div>
                    <div className="text-[10px] text-[#122023]/40 uppercase tracking-wider">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideLayout>
  );
};
