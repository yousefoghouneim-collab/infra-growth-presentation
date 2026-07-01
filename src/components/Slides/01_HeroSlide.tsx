import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { TrendingUp, Users, Wrench, Database } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 653, prefix: "AED ", suffix: "M", label: "Revenue 2025" },
  { icon: Users, value: 1400, prefix: "", suffix: "+", label: "Team Members" },
  { icon: Wrench, value: 100, prefix: "", suffix: "+", label: "Heavy Equipment" },
  { icon: Database, value: 2, prefix: "AED ", suffix: "B", label: "Active Backlog" },
];

export const HeroSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles isHeroSlide showLogo>
      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#122023]/10 text-[#122023]/55 text-xs font-bold uppercase tracking-widest">
            Growth Presentation · 2023 – 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <h1 className="text-5xl md:text-7xl font-black text-[#122023] leading-[1.05] tracking-tight">
            From 6 to
            <br />
            <span className="shimmer-text-slate">1,400+</span>
            <br />
            in 3 Years.
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-[#122023]/55 font-medium max-w-xl mx-auto mb-12 leading-relaxed"
        >
          The story of Innovo Infra — zero equipment in February 2023 to a leading
          UAE infrastructure contractor delivering over AED 653M by 2025.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-stretch justify-center rounded-2xl overflow-hidden border border-[#122023]/10"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className={`flex-1 min-w-[140px] flex flex-col items-center gap-1.5 bg-white/45 px-6 py-5 ${
                i < stats.length - 1 ? "border-r border-[#122023]/8" : ""
              }`}
            >
              <s.icon className="w-4 h-4 text-[#122023]/35 mb-1" strokeWidth={2} />
              <div className="text-2xl md:text-3xl font-black text-[#122023]">
                <AnimatedCounter
                  from={0}
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  delay={0.9}
                />
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#122023]/45">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigate cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] text-[#122023]/30 tracking-widest uppercase">Press arrow to navigate</span>
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#122023]/20 text-lg"
          >
            →
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
