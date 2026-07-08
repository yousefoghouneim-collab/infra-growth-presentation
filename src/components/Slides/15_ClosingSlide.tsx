import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { Sprout, Rocket, Award, Diamond } from "lucide-react";

const milestones = [
  { year: "2023", icon: Sprout,  label: "Founded" },
  { year: "2024", icon: Rocket,  label: "Breakthrough" },
  { year: "2025", icon: Award,   label: "Guinness Record" },
  { year: "2026", icon: Diamond, label: "One Billion" },
];

export const ClosingSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles isHeroSlide showLogo>
      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Milestone strip */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-10"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[#122023]/10 flex items-center justify-center">
                <m.icon className="w-5 h-5 text-[#122023]/60" strokeWidth={2} />
              </div>
              <div className="text-base font-black text-[#122023]">{m.year}</div>
              <div className="text-[10px] text-[#122023]/45 font-semibold uppercase tracking-wide">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black text-[#122023] leading-tight mb-4">
            Building Tomorrow's
            <br />
            <span style={{ color: "#0d5e59" }}>Infrastructure</span>
            <br />
            Today.
          </h1>
          <p className="text-lg text-[#122023]/55 font-medium max-w-xl mx-auto leading-relaxed">
            From a team of 6 with zero equipment in 2023 — to a 1,400+ strong organization
            delivering over AED 653M in infrastructure excellence by 2025.
          </p>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.4 } } }}
        >
          {[
            { v: "AED 1B+", l: "2026 Target" },
            { v: "1,400+", l: "Team Members" },
            { v: "100+", l: "Heavy Equipment" },
            { v: "AED 2B", l: "Active Backlog" },
            { v: "1 Record", l: "Guinness World" },
          ].map((s) => (
            <motion.div
              key={s.l}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="px-5 py-3 rounded-full border border-[#122023]/18 bg-white/40 text-center"
            >
              <div className="text-lg font-black text-[#122023]">{s.v}</div>
              <div className="text-[10px] text-[#122023]/45 uppercase tracking-wider">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-px w-32 bg-[#122023]/15 mb-3" />
          <div className="text-sm font-bold text-[#122023]/45 tracking-widest uppercase">
            Innovo Infra · Established February 2023
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
