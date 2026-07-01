import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import {
  RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer,
} from "recharts";

const clients = [
  "Aldar Projects", "Bloom Holding", "Imkan Properties", "DHRE",
  "H&H Development", "Majid Al Futtaim", "Dubai Police", "Emaar Development",
  "Dubai South", "Etihad Rail", "Sobha", "Al Siniya",
];

const winRateData = [{ name: "Win Rate", value: 14.3, fill: "#9EF3EE" }];

export const TenderingSlide = () => {
  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Chapter 05 · Tendering</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            Tendering <span className="text-[#5ecfc8]">Powerhouse</span>
          </h2>
          <p className="text-sm text-[#122023]/40 mt-1">March 2023 — February 2026</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Big stats */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          >
            {[
              { value: 145, suffix: "", label: "Tenders Submitted", sub: "Across 3 years", bg: "rgba(158,243,238,0.12)" },
              { value: 25.9, suffix: "B", prefix: "AED ", label: "Total Submitted Value", sub: "Massive reach", decimals: 1, bg: "rgba(158,243,238,0.08)" },
              { value: 3.7, suffix: "B", prefix: "AED ", label: "Projects Won", sub: "Secured value", decimals: 1, bg: "rgba(212,175,55,0.1)" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-5 border border-[#122023]/8 text-center"
                style={{ background: s.bg }}
              >
                <div className="text-3xl md:text-4xl font-black text-[#122023] mb-1">
                  <AnimatedCounter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                    duration={2000}
                    delay={700 + i * 200}
                  />
                </div>
                <div className="text-xs font-bold text-[#122023] mb-0.5">{s.label}</div>
                <div className="text-[10px] text-[#122023]/40">{s.sub}</div>
              </motion.div>
            ))}

            {/* Team growth */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="col-span-3 rounded-2xl p-5 border border-[#122023]/8 bg-[#122023]/3"
            >
              <div className="text-xs font-bold text-[#122023]/45 uppercase tracking-wider mb-3">
                Tendering Team Growth
              </div>
              <div className="flex items-center gap-6">
                {[
                  { year: "2023", count: 4, note: "Estimation software upgraded" },
                  { year: "2024", count: 8, note: "Tier-1 client access" },
                  { year: "2025", count: 10, note: "D&B + Landscape team" },
                  { year: "2026", count: 12, note: "Target 18-20% win rate" },
                ].map((t, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="text-xl font-black text-[#122023]">{t.count}</div>
                    <div className="text-[10px] font-bold text-[#5ecfc8]">{t.year}</div>
                    <div className="text-[9px] text-[#122023]/40 mt-0.5 leading-tight">{t.note}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Win rate dial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-2xl p-4 border border-[#122023]/8 bg-[#122023]/3"
            >
              <div className="text-xs font-bold text-[#122023]/45 uppercase tracking-wider mb-2 text-center">
                Win Rate
              </div>
              <div className="flex items-center justify-around">
                <div className="h-28 w-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%" cy="50%"
                      innerRadius="60%" outerRadius="90%"
                      data={winRateData}
                      startAngle={90} endAngle={-270}
                    >
                      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                      <RadialBar dataKey="value" background={{ fill: "rgba(18,32,35,0.06)" }} cornerRadius={6} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#122023]">14.3%</div>
                  <div className="text-xs text-[#122023]/40">Current Rate</div>
                  <div className="mt-2 px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[10px] font-bold text-[#9c7f1c]">
                    Target: 18–20%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key clients */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="rounded-2xl p-4 border border-[#122023]/8 bg-[#122023]/3 flex-1"
            >
              <div className="text-xs font-bold text-[#122023]/45 uppercase tracking-wider mb-3">
                Key Clients
              </div>
              <div className="flex flex-wrap gap-1.5">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#9EF3EE]/20 text-[#122023] border border-[#9EF3EE]/35 hover:bg-[#9EF3EE]/35 transition-colors cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
