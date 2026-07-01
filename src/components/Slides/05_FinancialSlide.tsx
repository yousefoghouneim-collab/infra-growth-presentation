import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList,
} from "recharts";

const revenueData = [
  { year: "2023", revenue: 2, profit: -1.2 },
  { year: "2024", revenue: 259, profit: 15 },
  { year: "2025", revenue: 653, profit: 48 },
  { year: "2026F", revenue: 1000, profit: null },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl p-3 shadow-lg border border-[#122023]/10 text-sm">
        <div className="font-bold text-[#122023] mb-1">{label}</div>
        {payload.map((p: any) => p.value != null && (
          <div key={p.dataKey} className="text-[#122023]/60">
            {p.name}: <span className="text-[#122023] font-semibold">AED {p.value}M</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const FinancialSlide = () => {
  return (
    <SlideLayout background="white" showCircles showLogo>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-label block mb-2">Chapter 03 · Financials</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#122023]">
            The Revenue <span className="text-[#5ecfc8]">Explosion</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: KPI cards */}
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {[
              { label: "2025 Revenue", value: "AED 653M", sub: "↑ 152% vs 2024", accent: "#9EF3EE" },
              { label: "2025 Backlog", value: "AED 2B", sub: "Future visibility", accent: "#9EF3EE" },
              { label: "2025 Net Profit", value: "AED 48M", sub: "↑ 220% vs 2024", accent: "#7de8e3" },
              { label: "2026 Forecast", value: ">AED 1B", sub: "Revenue target", accent: "#D4AF37" },
              { label: "3-Year CAGR", value: "~221%", sub: "Revenue growth rate", accent: "#9EF3EE" },
            ].map((k) => (
              <motion.div
                key={k.label}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl p-4 flex items-center justify-between border border-[#122023]/8 bg-white hover:border-[#9EF3EE] hover:bg-[#9EF3EE]/8 transition-colors"
              >
                <div>
                  <div className="text-[10px] text-[#122023]/40 uppercase tracking-wider mb-0.5">{k.label}</div>
                  <div className="text-xl font-black text-[#122023]">{k.value}</div>
                </div>
                <div className="text-xs text-[#122023]/35 text-right">{k.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-[#122023]/8 bg-white p-6">
              <div className="text-xs font-bold text-[#122023]/40 uppercase tracking-wider mb-4">
                Revenue Growth (AED Millions)
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData} barGap={8}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9EF3EE" stopOpacity={1} />
                      <stop offset="100%" stopColor="#5ecfc8" stopOpacity={0.7} />
                    </linearGradient>
                    <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#9c7f1c" stopOpacity={0.5} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(18,32,35,0.06)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fill: "rgba(18,32,35,0.45)", fontSize: 12, fontFamily: "Poppins" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(18,32,35,0.3)", fontSize: 10, fontFamily: "Poppins" }} axisLine={false} tickLine={false} width={50} tickFormatter={(v) => `${v}M`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(18,32,35,0.04)" }} />
                  <Bar dataKey="revenue" name="Revenue" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {revenueData.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={i === 3 ? "transparent" : "url(#revenueGradient)"}
                        stroke={i === 3 ? "#D4AF37" : "none"}
                        strokeWidth={i === 3 ? 2 : 0}
                        strokeDasharray={i === 3 ? "6 3" : "none"}
                      />
                    ))}
                    <LabelList dataKey="revenue" position="top"
                      formatter={(v: number) => v >= 1000 ? ">AED 1B" : `${v}M`}
                      style={{ fill: "rgba(18,32,35,0.5)", fontSize: 10, fontFamily: "Poppins", fontWeight: 700 }}
                    />
                  </Bar>
                  <Bar dataKey="profit" name="Net Profit" fill="url(#profitGradient)" radius={[6, 6, 0, 0]} maxBarSize={30}>
                    <LabelList dataKey="profit" position="top"
                      formatter={(v: number | null) => v == null ? "" : v < 0 ? `${v}M` : `+${v}M`}
                      style={{ fill: "rgba(180,140,30,0.9)", fontSize: 9, fontFamily: "Poppins", fontWeight: 700 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#9EF3EE]" />
                  <span className="text-xs text-[#122023]/40">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#D4AF37]" />
                  <span className="text-xs text-[#122023]/40">Net Profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm border-2 border-[#D4AF37] border-dashed bg-transparent" />
                  <span className="text-xs text-[#122023]/40">2026 Forecast</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
