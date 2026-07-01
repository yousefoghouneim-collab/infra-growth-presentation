import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import {
  HardHat, Search, Wrench, Leaf, TrafficCone, Stethoscope, ClipboardList,
} from "lucide-react";

const kpis = [
  { label: "HSE Inspection Score", value: "94.98%", sub: "Monthly average across all projects" },
  { label: "ISO Alignment", value: "45001 + 14001", sub: "OHS & Environmental Standards" },
  { label: "Regulatory Compliance", value: "100%", sub: "ADOSH & local authority compliance" },
  { label: "Internal Audits", value: "Zero NCs", sub: "No major non-conformities" },
];

const teamRoles = [
  { icon: HardHat,      role: "Project HSE Managers" },
  { icon: Search,       role: "Area HSE Manager" },
  { icon: Wrench,       role: "Lifting Engineers" },
  { icon: Leaf,         role: "Environmental Specialists" },
  { icon: TrafficCone,  role: "Traffic Coordinators" },
  { icon: Stethoscope,  role: "Male Nurses" },
  { icon: ClipboardList,role: "HSE Officers / Inspectors" },
];

export const HSESlide = () => {
  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label block mb-2">Chapter 10 · HSE Excellence</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Zero Harm. <span className="text-[#5ecfc8]">Zero Compromise.</span>
          </h2>
        </motion.div>

        {/* Hero number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <div className="inline-block">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-[#122023]">
              <AnimatedCounter to={10660700} duration={3000} delay={500} />
            </div>
            <div className="text-base md:text-lg text-[#122023]/50 font-medium tracking-wide">
              Man-Hours Worked Without a Single LTI or MTC
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-1 rounded-full mt-3 mx-auto max-w-md"
              style={{ background: "linear-gradient(90deg, transparent, #9EF3EE, transparent)", transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* KPI cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
          >
            {kpis.map((k) => (
              <motion.div
                key={k.label}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-4 text-center border border-[#122023]/8 bg-[#9EF3EE]/12 hover:bg-[#9EF3EE]/20 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-black mb-1 text-[#122023]">
                  {k.value}
                </div>
                <div className="text-xs font-bold text-[#122023] mb-0.5">{k.label}</div>
                <div className="text-[10px] text-[#122023]/40">{k.sub}</div>
              </motion.div>
            ))}

            {/* System banner */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="col-span-2 rounded-2xl p-4 border border-[#122023]/8 bg-[#122023]/3"
            >
              <div className="text-xs text-[#122023]/50 font-bold uppercase tracking-wider mb-2">HSE Management System</div>
              <div className="flex flex-wrap gap-1.5">
                {["OSH Manual", "SOPs", "HSE Policy", "Risk Assessments", "Method Statements", "Digital Incident Reporting", "KPI Dashboards", "Real-time Reporting"].map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-[#9EF3EE]/25 text-[#122023] border border-[#9EF3EE]/40">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Team roles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="rounded-2xl p-5 border border-[#122023]/8 bg-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-[#122023]">45+</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#122023]/60">HSE Professionals</div>
                <div className="text-[10px] text-[#122023]/35">Started with 1 HSE Manager</div>
              </div>
            </div>

            <div className="space-y-1.5">
              {teamRoles.map((t, i) => (
                <motion.div
                  key={t.role}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.07 }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#122023]/4 hover:bg-[#122023]/7 transition-colors"
                >
                  <t.icon className="w-3.5 h-3.5 text-[#122023]/45" strokeWidth={2} />
                  <span className="text-xs text-[#122023]/60">{t.role}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 px-3 py-2 rounded-lg bg-[#D4AF37]/12 border border-[#D4AF37]/25">
              <div className="text-[9px] font-bold uppercase tracking-wider text-[#9c7f1c]">External Recognition</div>
              <div className="text-[11px] text-[#122023]/55 mt-0.5">Multiple appreciation certificates from clients & consultants</div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
