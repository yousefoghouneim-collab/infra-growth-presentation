import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Trophy, Truck, Moon, Cpu, Wrench, Navigation, Users, HardHat } from "lucide-react";

const timelineItems = [
  {
    date: "Nov 2024",
    label: "Day One",
    machines: "5",
    value: "AED 2.5M",
    team: "1 eng · 2 tech · 5 operators",
    progress: 33,
  },
  {
    date: "Mid 2025",
    label: "Rapid Expansion",
    machines: "40+",
    value: "AED 20M+",
    team: "50+ personnel",
    progress: 66,
  },
  {
    date: "End 2025",
    label: "Major Platform",
    machines: "100+",
    value: "AED 50M",
    team: "300+ personnel",
    progress: 100,
  },
];

const achievements = [
  { icon: Trophy,     label: "JCB Award",        value: "Best Machine Utilization" },
  { icon: Truck,      label: "Fleet Brands",      value: "Komatsu · CAT · JCB · Bomag" },
  { icon: Moon,       label: "Operations",        value: "Day + Night shifts" },
  { icon: Cpu,        label: "Technology",        value: "3D Machine Control on Graders" },
  { icon: Wrench,     label: "Digitalization",    value: "Fleet Management System" },
  { icon: Navigation, label: "Tracking",          value: "Advanced GPS Hardware" },
  { icon: Users,      label: "Maintenance Team",  value: "Fleet Maintenance System" },
  { icon: HardHat,    label: "Vision",            value: "Deeper digitalization roadmap" },
];

export const PMVSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles showLogo>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label-aqua block mb-2">Chapter 08 · PMV Department</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            5 Machines <span style={{ color: "#0d6b65" }}>→ 100+</span>
          </h2>
          <p className="text-[#122023]/50 text-sm mt-1">Established: November 2024</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {timelineItems.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-5 text-center bg-white/45 border border-[#122023]/10"
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-[#122023]/50 mb-3">{t.date}</div>
              <div className="text-sm font-black text-[#122023] mb-4">{t.label}</div>

              <div className="flex justify-around mb-3">
                <div>
                  <div className="text-3xl font-black text-[#122023]">{t.machines}</div>
                  <div className="text-[10px] text-[#122023]/45 uppercase tracking-wider">Machines</div>
                </div>
                <div className="w-px bg-[#122023]/12" />
                <div>
                  <div className="text-base font-black text-[#122023]">{t.value}</div>
                  <div className="text-[10px] text-[#122023]/45 uppercase tracking-wider">Asset Value</div>
                </div>
              </div>
              <div className="text-xs text-[#122023]/45 mb-3">{t.team}</div>

              <div className="h-1.5 rounded-full bg-[#122023]/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#122023]/35"
                  initial={{ width: 0 }}
                  animate={{ width: `${t.progress}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rounded-2xl p-4 mb-4 bg-white/40 border border-[#122023]/10"
        >
          <div className="flex justify-center gap-10">
            {[
              { label: "Engineers", value: 7 },
              { label: "Staff", value: 15 },
              { label: "Technicians", value: 40 },
              { label: "Operators & Drivers", value: 250, suffix: "+" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-[#122023]">
                  <AnimatedCounter to={s.value} suffix={s.suffix} duration={1800} delay={1000 + i * 100} />
                </div>
                <div className="text-[10px] text-[#122023]/45 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievement chips */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.9 } } }}
        >
          {achievements.map((a) => (
            <motion.div
              key={a.label}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#122023]/7 border border-[#122023]/10 hover:bg-[#122023]/12 transition-colors"
            >
              <a.icon className="w-3.5 h-3.5 text-[#122023]/50 flex-shrink-0" strokeWidth={2} />
              <div>
                <div className="text-[9px] uppercase tracking-wider text-[#122023]/40 font-semibold">{a.label}</div>
                <div className="text-[10px] font-bold text-[#122023]">{a.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
};
