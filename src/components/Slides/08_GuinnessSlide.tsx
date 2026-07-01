import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { Sun, Route, Link, BadgeDollarSign, Building2, MapPin } from "lucide-react";

const facts = [
  { icon: Sun,             label: "Solar-Powered Streetlights", value: "2,248" },
  { icon: Route,           label: "Total Road Length",          value: "125 km" },
  { icon: Link,            label: "Rope Barrier Installation",  value: "122 km" },
  { icon: BadgeDollarSign, label: "Project Value",              value: "AED 197.5M" },
  { icon: Building2,       label: "Client",                     value: "Aldar Properties" },
  { icon: MapPin,          label: "Location",                   value: "Al Faya · Razeen · Al Qua'a" },
];

export const GuinnessSlide = () => {
  return (
    <SlideLayout background="aqua" showCircles showLogo>
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Record badge + info */}
          <div>
            {/* Guinness badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-6"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #b8902a)",
                boxShadow: "0 4px 24px rgba(212,175,55,0.35)",
              }}
            >
              <div className="w-6 h-6 rounded bg-black/15 flex items-center justify-center text-white font-black text-xs">GR</div>
              <div>
                <div className="text-[9px] font-black text-black/60 uppercase tracking-widest">Officially Certified</div>
                <div className="text-sm font-black text-black leading-tight">GUINNESS WORLD RECORDS™</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#122023] leading-tight mb-4">
                Longest Line of Streetlights
                <br />
                <span style={{ color: "#9c7f1c" }}>Powered by Solar Energy</span>
              </h2>
              <p className="text-[#122023]/55 text-sm leading-relaxed max-w-md">
                Innovo Infra set the Guinness World Record by installing 2,248 solar-powered
                streetlights across 125 km of desert highway — the Al Faya–Razeen–Al Qua'a road
                in Abu Dhabi, for Aldar Properties.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 rounded-2xl overflow-hidden h-36 border border-[#122023]/10"
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop"
                alt="Solar street lighting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: fact grid */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.label}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="rounded-xl p-4 bg-white/50 border border-[#122023]/10 transition-all duration-200"
              >
                <f.icon className="w-4 h-4 text-[#122023]/45 mb-2" strokeWidth={2} />
                <div className="text-base md:text-lg font-black text-[#122023]">{f.value}</div>
                <div className="text-[10px] text-[#122023]/45 uppercase tracking-wider mt-0.5">{f.label}</div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="col-span-2 rounded-xl p-4 text-center"
              style={{
                background: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.35)",
              }}
            >
              <div className="text-xs font-black uppercase tracking-widest text-[#9c7f1c] mb-1">
                A-103 Project
              </div>
              <div className="text-sm text-[#122023]/55">
                Upgrade of Al Faya – Razeen – Al Qua'a Road with Solar Street Lighting
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
