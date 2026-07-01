import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { TrendingUp, Truck, Target, Anchor, Building2, Leaf, Monitor, Globe, BarChart2, Lightbulb } from "lucide-react";

const targets = [
  {
    label: "Revenue Target",
    value: "> AED 1 Billion",
    icon: TrendingUp,
    color: "#0d6b65",
    desc: "Cross the billion-dirham threshold in 2026",
  },
  {
    label: "New Fleet Investment",
    value: "+ AED 50M",
    icon: Truck,
    color: "#0d6b65",
    desc: "Additional heavy equipment procurement planned",
  },
  {
    label: "Win Rate Target",
    value: "18–20%",
    icon: Target,
    color: "#0d6b65",
    desc: "Up from 14.3% through data-driven analytics",
  },
  {
    label: "Marine Capacity",
    value: "New Capability",
    icon: Anchor,
    color: "#9c7f1c",
    desc: "Marine and bridge specialization expansion",
  },
];

const pillars = [
  { icon: Building2,  label: "Self-Performance",     desc: "Maximum in-house delivery across all trades" },
  { icon: Leaf,       label: "Landscape Revenue",     desc: "Standalone landscape contractor positioning" },
  { icon: Monitor,    label: "Digitalization",        desc: "Full digital transformation across all ops" },
  { icon: Globe,      label: "Pan-UAE Presence",      desc: "Balanced market penetration across all emirates" },
  { icon: BarChart2,  label: "Governance",            desc: "Advanced financial and operational controls" },
  { icon: Lightbulb,  label: "Innovation Culture",    desc: "Drones, AI, and smart site technologies" },
];

export const VisionSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles showLogo>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label-aqua block mb-2">Chapter 12 · Vision</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            2026 & <span style={{ color: "#0d6b65" }}>Beyond</span>
          </h2>
          <p className="text-[#122023]/45 text-sm mt-1">The next chapter of exponential growth</p>
        </motion.div>

        {/* Target cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        >
          {targets.map((t) => (
            <motion.div
              key={t.label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white/50 rounded-2xl p-5 text-center border border-[#122023]/10 transition-all duration-300 hover:bg-white/70"
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${t.color}18` }}
              >
                <t.icon className="w-5 h-5" style={{ color: t.color }} strokeWidth={2} />
              </div>
              <div className="text-xl font-black mb-1 text-[#122023]">{t.value}</div>
              <div className="text-xs font-bold text-[#122023]/60 mb-2">{t.label}</div>
              <div className="text-[10px] text-[#122023]/40 leading-snug">{t.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="rounded-2xl p-5 bg-white/40 border border-[#122023]/10"
        >
          <div className="text-xs text-[#122023]/50 font-bold uppercase tracking-wider mb-4">
            Strategic Growth Pillars 2026–2027
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.07 }}
                className="text-center px-2 py-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
              >
                <p.icon className="w-5 h-5 text-[#122023]/50 mx-auto mb-2" strokeWidth={2} />
                <div className="text-[10px] font-bold text-[#122023] mb-1">{p.label}</div>
                <div className="text-[9px] text-[#122023]/40 leading-tight">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
