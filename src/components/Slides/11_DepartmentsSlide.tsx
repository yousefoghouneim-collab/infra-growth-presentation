import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { Zap, FileText, Map, Leaf, ShieldCheck, ShoppingCart, MousePointer } from "lucide-react";

const depts = [
  {
    id: "elec",
    name: "Electrical",
    icon: Zap,
    color: "#D4AF37",
    start: "Jan 2026",
    team: "24 members",
    headline: "Zero to TAQA-Approved Electrical Contractor",
    achievements: [
      "TAQA contracting license approved July 2025",
      "TAQA prequalification (LV Works) approved Nov 2025",
      "Added to TAQA vendor list as approved contractor",
      "Commenced in 2023 with zero electrical engineers",
    ],
  },
  {
    id: "tend",
    name: "Tendering",
    icon: FileText,
    color: "#9EF3EE",
    start: "Mar 2023",
    team: "12 members",
    headline: "145 Tenders · AED 25.9B · AED 3.7B Won",
    achievements: [
      "4 staff → 12 staff (2023–2026)",
      "14.3% win rate across AED 25.9B pipeline",
      "Tier-1 client portfolio established",
      "D&B and landscape estimation capability",
    ],
  },
  {
    id: "surv",
    name: "Land Survey",
    icon: Map,
    color: "#06D6A0",
    start: "Mar 2025",
    team: "78 surveyors",
    headline: "18-Person Startup to 78 Surveyors",
    achievements: [
      "Scaled from 18 to 78 personnel since Mar 2025",
      "Supporting 19+ infrastructure projects",
      "Machine control on graders deployed",
      "Mobile mapping solutions introduced",
    ],
  },
  {
    id: "land",
    name: "Landscape",
    icon: Leaf,
    color: "#8BC34A",
    start: "Apr 2025",
    team: "Growing",
    headline: "Fast Growth Company Award — UAE Landscape",
    achievements: [
      "Established April 2025 with 1 founder",
      "50,000 m² in-house nursery established",
      "First standalone project won Jan 2026",
      "Fast Growth Company in UAE — Landscape Award",
    ],
  },
  {
    id: "hse",
    name: "HSE",
    icon: ShieldCheck,
    color: "#9EF3EE",
    start: "2023",
    team: "45+ professionals",
    headline: "10,660,700 Man-Hours. Zero LTI.",
    achievements: [
      "10.66M man-hours without any LTI or MTC",
      "94.98% monthly HSE inspection score",
      "ISO 45001 & ISO 14001 aligned",
      "1 HSE Manager → 45+ qualified professionals",
    ],
  },
  {
    id: "proc",
    name: "Procurement",
    icon: ShoppingCart,
    color: "#8ba8c8",
    start: "2023",
    team: "9 members",
    headline: "From 2 People to Strategic Partner",
    achievements: [
      "Started with 2 individuals",
      "Now: Senior engineers + officers + specialists",
      "Diversified supplier network established",
      "Stronger commercial negotiation & governance",
    ],
  },
];

export const DepartmentsSlide = () => {
  const [active, setActive] = useState<string | null>("elec");
  const activeDept = depts.find((d) => d.id === active);

  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Chapter 09 · Departmental Growth</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Built From <span className="text-[#5ecfc8]">Scratch</span>
          </h2>
          <p className="text-sm text-[#122023]/40 mt-1">Every department created and scaled in under 3 years</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Dept cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          >
            {depts.map((d) => (
              <motion.div
                key={d.id}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(active === d.id ? null : d.id)}
                whileHover={{ y: -4, scale: 1.04 }}
                className="rounded-2xl p-4 cursor-pointer transition-all duration-200 border-2"
                style={{
                  background: active === d.id ? `${d.color}18` : `${d.color}08`,
                  borderColor: active === d.id ? `${d.color}70` : `${d.color}20`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                  style={{ background: `${d.color}25` }}
                >
                  <d.icon className="w-4 h-4 text-[#122023]/70" strokeWidth={2} />
                </div>
                <div className="text-sm font-black text-[#122023]">{d.name}</div>
                <div className="text-[9px] text-[#122023]/40 mt-0.5">Est. {d.start} · {d.team}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detail panel */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeDept ? (
                <motion.div
                  key={activeDept.id}
                  initial={{ opacity: 0, x: 20, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6 border-2"
                  style={{
                    background: `${activeDept.color}10`,
                    borderColor: `${activeDept.color}35`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${activeDept.color}30` }}
                    >
                      <activeDept.icon className="w-5 h-5 text-[#122023]" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-[#122023]/60">
                        {activeDept.name} Department
                      </div>
                      <div className="text-xs text-[#122023]/40">Est. {activeDept.start} · {activeDept.team}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#122023] mb-4 leading-tight">
                    {activeDept.headline}
                  </h3>

                  <div className="space-y-2">
                    {activeDept.achievements.map((a, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-2.5 text-sm text-[#122023]/65"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: activeDept.color }}
                        />
                        {a}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl p-8 border-2 border-dashed border-[#122023]/10 flex flex-col items-center justify-center text-center min-h-[200px]"
                >
                  <MousePointer className="w-8 h-8 text-[#122023]/20 mb-3" />
                  <div className="text-sm text-[#122023]/35">Select a department to explore its growth story</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
