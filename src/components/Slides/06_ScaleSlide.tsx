import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { HardHat, Truck, Trophy, Clock, Cpu, Wrench } from "lucide-react";
import rayanImg from "@/assets/rayan-innovo.jpg";

const metrics = [
  {
    title: "Workforce",
    items: [
      { year: "2023", value: 6, suffix: "" },
      { year: "2024", value: 450, suffix: "" },
      { year: "2025", value: 1400, suffix: "+" },
    ],
    color: "#9EF3EE",
  },
  {
    title: "Fleet Units",
    items: [
      { year: "2023", value: 0, suffix: "" },
      { year: "2024", value: 19, suffix: "" },
      { year: "2025", value: 100, suffix: "+" },
    ],
    color: "#7de8e3",
  },
  {
    title: "Asset Value (AED)",
    items: [
      { year: "2023", value: 0, suffix: "" },
      { year: "2024", value: 9, suffix: "M" },
      { year: "2025", value: 50, suffix: "M" },
    ],
    color: "#D4AF37",
  },
];

const highlights = [
  { icon: Trophy,  label: "JCB Award", value: "Best Machine Utilization" },
  { icon: Truck,   label: "Brands in Fleet", value: "Komatsu · CAT · JCB · Bomag" },
  { icon: Clock,   label: "Operations Mode", value: "Day & Night Shifts" },
  { icon: HardHat, label: "Workforce Mix", value: "12+ nationalities on-site" },
  { icon: Cpu,     label: "3D Machine Control", value: "Graders Equipped" },
  { icon: Wrench,  label: "Fleet Management", value: "Digital System Live" },
];

export const ScaleSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles showLogo>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label-aqua block mb-2">Chapter 04 · Scale & Workforce</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Built to <span style={{ color: "#0d6b65" }}>Scale Fast</span>
          </h2>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-4">
            <img
              src={rayanImg}
              alt="Rayan"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
            />
          </div>
        </motion.div>

        {/* Growth bars */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {metrics.map((m, mi) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + mi * 0.1 }}
              className="rounded-2xl p-5 bg-white/40 border border-[#122023]/10"
            >
              <div className="font-bold text-[#122023] text-sm mb-4">{m.title}</div>

              <div className="space-y-3">
                {m.items.map((item, ii) => {
                  const max = m.items[m.items.length - 1].value || 1;
                  const pct = (item.value / max) * 100;
                  return (
                    <div key={item.year}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs text-[#122023]/50 font-semibold">{item.year}</span>
                        <span className="text-sm font-black text-[#122023]">
                          <AnimatedCounter
                            to={item.value}
                            suffix={item.suffix}
                            duration={1800}
                            delay={600 + mi * 150 + ii * 100}
                          />
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-[#122023]/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(pct, 2)}%` }}
                          transition={{ duration: 1.2, delay: 0.7 + mi * 0.1 + ii * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{ background: m.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.8 } } }}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#122023]/7 border border-[#122023]/10 hover:bg-[#122023]/12 transition-colors"
            >
              <h.icon className="w-4 h-4 text-[#122023]/50 flex-shrink-0" strokeWidth={2} />
              <div>
                <div className="text-[9px] uppercase tracking-wider text-[#122023]/40 font-semibold">{h.label}</div>
                <div className="text-xs font-bold text-[#122023]">{h.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
};
