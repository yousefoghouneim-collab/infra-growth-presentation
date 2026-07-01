import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { Settings2, MapPin, Monitor, Drone } from "lucide-react";
import mobileMappingImg from "@/assets/mobile-mapping-survey.jpg";

const innovations = [
  {
    title: "3D Machine Control",
    subtitle: "Graders Equipped",
    desc: "Real-time 3D guidance for graders enables automated leveling, improving construction precision and significantly reducing costly rework.",
    icon: Settings2,
    color: "#9EF3EE",
    status: "LIVE",
    dept: "PMV & Survey",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Mobile Mapping Survey",
    subtitle: "Corridor-Level Efficiency",
    desc: "Advanced mobile mapping technology accelerates data capture and improves survey efficiency across large project corridors.",
    icon: MapPin,
    color: "#7de8e3",
    status: "LIVE",
    dept: "Land Survey",
    img: mobileMappingImg,
  },
  {
    title: "Digital Fleet Management",
    subtitle: "Real-Time Visibility",
    desc: "Fleet Management and Fleet Maintenance systems with advanced GPS tracking hardware and digital dashboards for 100+ machines.",
    icon: Monitor,
    color: "#9EF3EE",
    status: "LIVE",
    dept: "PMV",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Drone Topographic Survey",
    subtitle: "Next Phase",
    desc: "Planned integration of drone-based topographic surveying to improve data coverage, efficiency, and digital survey capabilities.",
    icon: Drone,
    color: "#D4AF37",
    status: "PLANNED",
    dept: "Land Survey",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80&auto=format&fit=crop",
  },
];

const digitalInitiatives = [
  { label: "Digital Incident Reporting", dept: "HSE" },
  { label: "KPI Dashboard System", dept: "HSE" },
  { label: "Estimation Software", dept: "Tendering" },
  { label: "Tender Analytics Platform", dept: "Tendering" },
  { label: "Strategic Sourcing Tools", dept: "Procurement" },
  { label: "Supplier Performance Mgmt", dept: "Procurement" },
];

export const InnovationSlide = () => {
  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Chapter 11 · Technology</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Digital-First <span className="text-[#5ecfc8]">Infrastructure</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {innovations.map((inn, i) => (
            <motion.div
              key={inn.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group rounded-2xl overflow-hidden border border-[#122023]/8 bg-white cursor-default transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-28 overflow-hidden">
                <img
                  src={inn.img}
                  alt={inn.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                <div
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider"
                  style={{
                    background: inn.status === "LIVE" ? inn.color : "rgba(212,175,55,0.15)",
                    color: inn.status === "LIVE" ? "#122023" : "#9c7f1c",
                    border: inn.status === "LIVE" ? "none" : "1px solid rgba(212,175,55,0.4)",
                  }}
                >
                  {inn.status}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${inn.color}30` }}
                  >
                    <inn.icon className="w-3.5 h-3.5 text-[#122023]" strokeWidth={2} />
                  </div>
                  <span className="text-[9px] font-semibold text-[#6F8695] uppercase tracking-wider">{inn.dept}</span>
                </div>
                <h3 className="text-sm font-black text-[#122023] mb-0.5">{inn.title}</h3>
                <p className="text-[9px] text-[#122023]/50 leading-relaxed">{inn.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-2xl p-5 border border-[#122023]/8 bg-[#122023]/3"
        >
          <div className="text-xs font-bold text-[#122023]/45 uppercase tracking-wider mb-3">
            Additional Digital Initiatives Across Departments
          </div>
          <div className="flex flex-wrap gap-2">
            {digitalInitiatives.map((d) => (
              <div
                key={d.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold bg-[#9EF3EE]/18 text-[#122023] border border-[#9EF3EE]/30"
              >
                <span>{d.label}</span>
                <span className="text-[#0d6b65]">· {d.dept}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
