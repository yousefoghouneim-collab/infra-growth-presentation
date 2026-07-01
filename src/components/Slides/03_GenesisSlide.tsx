import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { Calendar, Users, Package, MapPin } from "lucide-react";

const origins = [
  {
    icon: Calendar,
    title: "February 2023",
    desc: "Innovo Infra formally established in the UAE — a blank-canvas start in a competitive market.",
  },
  {
    icon: Users,
    title: "6 Founders",
    desc: "Started with a core team of 6 people, deep industry expertise, and a shared ambition.",
  },
  {
    icon: Package,
    title: "Zero Equipment",
    desc: "No plant, no fleet, no warehouse. Everything built from the ground up through sheer execution.",
  },
  {
    icon: MapPin,
    title: "UAE Infrastructure",
    desc: "Focused on roads, civils, utilities, and landscaping — sectors with massive government demand.",
  },
];

export const GenesisSlide = () => {
  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label mb-3 block"
            >
              Chapter 01 · The Genesis
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#122023] mb-1 leading-tight"
            >
              February 2023
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-[#5ecfc8] mb-6"
            >
              Day One.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#122023]/55 text-base leading-relaxed mb-8 max-w-md"
            >
              Innovo Infra was established in February 2023 with six employees, zero equipment,
              and two small projects in Dubai. What began as a lean startup with an initial project
              pipeline of AED 49M rapidly transformed into one of the UAE's fastest-growing
              infrastructure contractors.
            </motion.p>

            {/* Origin pillars */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            >
              {origins.map((o) => (
                <motion.div
                  key={o.title}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#122023]/4 border border-[#122023]/8 hover:bg-[#9EF3EE]/15 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#9EF3EE]/35 flex items-center justify-center flex-shrink-0">
                    <o.icon className="w-3.5 h-3.5 text-[#122023]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wide text-[#122023] mb-0.5">{o.title}</div>
                    <div className="text-[10px] text-[#122023]/50 leading-snug">{o.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                alt="Construction foundation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9EF3EE]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-[#122023]/10">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#122023]/50 mb-0.5">
                    Foundation Year
                  </div>
                  <div className="text-2xl font-black text-[#122023]">2023</div>
                  <div className="text-xs text-[#122023]/50">From the ground up</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#9EF3EE] rounded-xl px-4 py-3 text-center border border-[#122023]/10 shadow-lg"
            >
              <div className="text-2xl font-black text-[#122023]">AED 49M</div>
              <div className="text-[9px] text-[#122023]/60 uppercase tracking-wide">Initial Pipeline</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
