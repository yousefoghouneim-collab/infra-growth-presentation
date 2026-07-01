import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { useSlide } from "@/context/SlideContext";
import {
  Rocket, Sprout, BarChart2, TrendingUp, Scale,
  FileText, Map, Award, FolderOpen, Truck,
  Building, ShieldCheck, Cpu, Compass, Handshake,
} from "lucide-react";

const chapters = [
  { index: 0,  icon: Rocket,      label: "Hero",         subtitle: "Introduction" },
  { index: 2,  icon: Sprout,      label: "Genesis",      subtitle: "How it started" },
  { index: 3,  icon: BarChart2,   label: "Growth",       subtitle: "Timeline 2023–2025" },
  { index: 4,  icon: TrendingUp,  label: "Financials",   subtitle: "Revenue & margins" },
  { index: 5,  icon: Scale,       label: "Scale",        subtitle: "Workforce & capacity" },
  { index: 6,  icon: FileText,    label: "Tendering",    subtitle: "Win rate & pipeline" },
  { index: 7,  icon: Map,         label: "UAE Map",      subtitle: "Projects on the ground" },
  { index: 8,  icon: Award,       label: "Record",       subtitle: "Guinness achievement" },
  { index: 9,  icon: FolderOpen,  label: "Projects",     subtitle: "Key deliveries" },
  { index: 10, icon: Truck,       label: "PMV",          subtitle: "Fleet & equipment" },
  { index: 11, icon: Building,    label: "Departments",  subtitle: "Org structure" },
  { index: 12, icon: ShieldCheck, label: "HSE",          subtitle: "Safety record" },
  { index: 13, icon: Cpu,         label: "Innovation",   subtitle: "Digital-first approach" },
  { index: 14, icon: Compass,     label: "Vision 2026",  subtitle: "The next chapter" },
  { index: 15, icon: Handshake,   label: "Closing",      subtitle: "Building tomorrow" },
];

export const AgendaSlide = () => {
  const { goTo } = useSlide();

  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Agenda</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Presentation <span className="text-[#5ecfc8]">Index</span>
          </h2>
          <p className="text-sm text-[#122023]/35 mt-1">Click any chapter to navigate directly</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}
        >
          {chapters.map((ch) => (
            <motion.button
              key={ch.index}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => goTo(ch.index)}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-[#122023]/8 bg-white hover:border-[#9EF3EE] hover:bg-[#9EF3EE]/10 transition-all duration-200 cursor-pointer text-center"
            >
              <div className="w-9 h-9 rounded-xl bg-[#122023]/5 group-hover:bg-[#9EF3EE]/40 flex items-center justify-center transition-colors">
                <ch.icon className="w-4 h-4 text-[#122023]/50 group-hover:text-[#122023]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#122023] leading-tight">{ch.label}</div>
                <div className="text-[9px] text-[#122023]/35 mt-0.5">{ch.subtitle}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-[#122023]/10" />
          <span className="text-[10px] text-[#122023]/25 tracking-widest uppercase">Innovo Infra · Confidential</span>
          <div className="h-px flex-1 max-w-[80px] bg-[#122023]/10" />
        </motion.div>
      </div>
    </SlideLayout>
  );
};
