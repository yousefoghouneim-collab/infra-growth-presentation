import { motion } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";

const projects = [
  { name: "Dubai Master Developments – Enabling Works (The Haven, DX Park & The Wilds)", client: "ALDAR Properties", value: 113_300_000 },
  { name: "Eden Hills Villas Development – Roads & Utilities", client: "H&H", value: 134_000_000 },
  { name: "Ghaf Woods – Infrastructure & Roads", client: "MAF", value: 179_500_000 },
  { name: "New Dubai Police Academy – Infrastructure", client: "Dubai Police", value: 128_000_000 },
  { name: "Shallow Services – Golf Lane (Emaar South)", client: "EMAAR", value: 48_200_000 },
  { name: "Grand Polo Club Phase 1 – Deep Services", client: "EMAAR", value: 38_500_000 },
  { name: "Prime Dubai – Enabling Works", client: "ARM Holding", value: 58_000_000 },
  { name: "The Valley Mid Parcel – Deep Services", client: "EMAAR", value: 78_000_000 },
  { name: "Junction B Flood Protection (Sharjah)", client: "Etihad Rail", value: 127_400_000 },
  { name: "Dubai South – Roads & Infrastructure", client: "Dubai South", value: 167_500_000 },
  { name: "Saadiyat Lagoons – Package 3", client: "Innovo Build / ALDAR", value: 323_000_000 },
  { name: "Al Faya-Razeen-Al Qua'a Lighting Network", client: "ALDAR Projects", value: 107_347_405 },
  { name: "232 Residential Plots Infrastructure", client: "ALDAR Projects", value: 197_500_000 },
  { name: "North Al Bahia – Full Infra Package", client: "ALDAR Projects", value: 429_000_000 },
  { name: "Al Sader Housing – Infrastructure", client: "ALDAR Projects", value: 799_759_787 },
];

const col1 = projects.slice(0, 8);
const col2 = projects.slice(8);

const totalValue = projects.reduce((s, p) => s + p.value, 0);

const fmt = (n: number) =>
  "AED " + (n >= 1_000_000 ? (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M" : n.toLocaleString());

const Row = ({ p, i, delay }: { p: typeof projects[0]; i: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, delay }}
    className="flex items-center gap-2 py-1.5 border-b border-[#122023]/6 last:border-0 group"
  >
    <span className="text-[11px] font-black text-[#5ecfc8] w-5 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-semibold text-[#122023] leading-tight truncate">{p.name}</p>
      <p className="text-[11px] text-[#122023]/40">{p.client}</p>
    </div>
    <span className="text-xs font-black text-[#0d6b65] shrink-0 tabular-nums">{fmt(p.value)}</span>
  </motion.div>
);

export const ProjectsSlide = () => (
  <SlideLayout background="white" showCircles showLogo>
    <div className="max-w-7xl w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="section-label block mb-1">Chapter 07 · Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-black text-[#122023]">
          Ongoing <span className="text-[#5ecfc8]">Projects</span>
        </h2>
        <p className="text-[#122023]/35 text-xs mt-1">
          {projects.length} active contracts · Combined value: AED {(totalValue / 1_000_000_000).toFixed(2)}B
        </p>
      </motion.div>

      {/* Two-column table */}
      <div className="grid grid-cols-2 gap-5">
        {/* Column headers */}
        {[col1, col2].map((col, ci) => (
          <div key={ci}>
            <div className="grid grid-cols-[20px_1fr_auto] gap-2 px-1 pb-1.5 mb-1 border-b-2 border-[#5ecfc8]/40">
              <span className="text-[10px] font-black text-[#5ecfc8] uppercase tracking-widest">#</span>
              <span className="text-[10px] font-black text-[#122023]/40 uppercase tracking-widest">Project · Client</span>
              <span className="text-[10px] font-black text-[#122023]/40 uppercase tracking-widest text-right">Value</span>
            </div>
            {col.map((p, i) => (
              <Row
                key={p.name}
                p={p}
                i={ci * col1.length + i}
                delay={0.15 + (ci * col1.length + i) * 0.03}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Total bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-4 flex items-center justify-between rounded-xl px-5 py-2.5 border border-[#5ecfc8]/30 bg-[#5ecfc8]/6"
      >
        <span className="text-[10px] font-semibold text-[#122023]/50 uppercase tracking-wider">
          Total Portfolio Value
        </span>
        <span className="text-lg font-black text-[#0d6b65]">
          AED {(totalValue / 1_000_000_000).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}B
        </span>
      </motion.div>
    </div>
  </SlideLayout>
);
