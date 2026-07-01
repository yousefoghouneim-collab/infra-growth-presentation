import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLayout } from "../Slider/SlideLayout";
import { useSlide } from "@/context/SlideContext";
import { ArrowRight, MapPin } from "lucide-react";

// Coordinate mapping — viewBox 0 0 600 420
// x = (lon - 51.2) * 108 + 20
// y = (26.4 - lat) * 96 + 15
// Based on UAE bounding box: 51.2°E–56.6°E × 22.5°N–26.4°N

// Accurate UAE mainland outline (counter-clockwise from Saudi/Gulf border)
const UAE_MAIN = `
  M 41 237
  C 60 231 70 228 82 223
  C 100 216 108 208 120 202 C 136 194 152 191 175 192
  C 195 200 215 212 238 220 C 261 219 281 221 303 211
  C 322 202 342 196 362 186
  C 375 180 390 170 408 160
  C 418 152 424 143 428 127
  L 442 135 L 449 121 L 452 107
  L 464 105 L 470 94 L 484 84
  L 500 75 L 508 74 L 520 68 L 535 58 L 547 46
  L 558 52 L 560 70 L 559 97
  C 560 108 562 122 562 134
  C 561 150 560 162 553 176
  C 547 188 541 196 532 210
  L 525 218 L 509 224
  L 496 218 L 488 230 L 476 238
  L 464 242 L 444 248 L 424 254
  L 392 262 L 360 268 L 325 274
  L 295 280 L 258 292 L 218 308
  L 175 330 L 135 350 L 100 358
  L 68 360 L 49 358 L 41 348
  L 40 320 L 40 282 L 41 247 Z
`;

// Gulf of Oman (east coast) standalone strip (Fujairah – approximate)
const FUJAIRAH_STRIP = `
  M 559 97 L 562 134 C 561 148 556 168 550 182
  C 540 198 532 210 525 218 L 509 224
  C 522 220 532 206 540 194 C 549 179 555 162 558 147
  C 560 134 561 116 560 99 Z
`;

// City/emirate reference dots
const cityDots = [
  { label: "Abu Dhabi", lon: 54.37, lat: 24.45, major: true },
  { label: "Dubai",     lon: 55.30, lat: 25.20, major: true },
  { label: "Sharjah",  lon: 55.38, lat: 25.36, major: false },
  { label: "RAK",      lon: 55.94, lat: 25.79, major: false },
  { label: "Fujairah", lon: 56.34, lat: 25.13, major: false },
  { label: "Al Ain",   lon: 55.75, lat: 24.22, major: false },
];

// Project pins
const projects = [
  {
    id: "guinness",
    name: "Al Faya – Razeen – Al Qua'a Road",
    client: "Aldar Properties",
    value: "AED 197.5M",
    highlight: "Guinness World Record — 125 km of solar-powered streetlights installed across this desert highway in Abu Dhabi. The longest such installation ever recorded on Earth.",
    type: "Roads & Utilities",
    lon: 53.72, lat: 24.05,
    slideIndex: 8,
    tag: "Guinness Record",
    color: "#D4AF37",
  },
  {
    id: "sadr",
    name: "Al Sadr Development",
    client: "Aldar",
    value: "AED 799.8M",
    highlight: "Largest single contract — 39.7 km of roads, 62.6 km of sidewalks and cycle tracks, full utility networks, and signalised intersections across a major Abu Dhabi master development.",
    type: "Roads & Infrastructure",
    lon: 54.52, lat: 24.50,
    slideIndex: 9,
    tag: "Largest Contract",
    color: "#9EF3EE",
  },
  {
    id: "bahia",
    name: "Al Bahia Residential",
    client: "Aldar",
    value: "AED 429M",
    highlight: "Full Design & Build delivery — roads, landscape, electrical power, gas networks, telecom, and solid waste systems serving an entire coastal residential community in Abu Dhabi.",
    type: "Design & Build",
    lon: 54.32, lat: 24.58,
    slideIndex: 9,
    tag: "D&B Contract",
    color: "#5ecfc8",
  },
  {
    id: "police",
    name: "New Dubai Police Academy",
    client: "Dubai Police",
    value: "AED 128M",
    highlight: "A strategic government partnership — masterplan critical infrastructure, large-scale earthworks, roads, and paving for the new Dubai Police Academy campus.",
    type: "Government",
    lon: 55.22, lat: 25.12,
    slideIndex: 9,
    tag: "Government",
    color: "#9EF3EE",
  },
];

// Convert lon/lat → SVG coords
const toSVG = (lon: number, lat: number) => ({
  x: (lon - 51.2) * 108 + 20,
  y: (26.4 - lat) * 96 + 15,
});

const emirateLabels = [
  { text: "ABU DHABI", lon: 53.9, lat: 23.75 },
  { text: "DUBAI", lon: 55.25, lat: 25.2 },
  { text: "SHARJAH", lon: 55.55, lat: 25.36 },
  { text: "FUJAIRAH", lon: 56.2, lat: 24.95 },
  { text: "RAK", lon: 55.85, lat: 25.78 },
];

export const UAEMapSlide = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { goTo } = useSlide();
  const hoveredProject = projects.find((p) => p.id === hovered);

  return (
    <SlideLayout background="aqua" showCircles={false} showLogo>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="section-label-aqua block mb-1">Chapter 06 · Project Map</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#122023]">
            Projects Across the <span style={{ color: "#0d5e59" }}>UAE</span>
          </h2>
          <p className="text-xs text-[#122023]/45 mt-1">Hover a pin to explore · Click to navigate to the project slide</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {/* Map */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#122023]/14 bg-white/55 backdrop-blur-sm shadow-sm">
              <svg viewBox="25 35 555 340" className="w-full" style={{ minHeight: 260 }}>
                {/* Gulf sea fill */}
                <rect x="25" y="35" width="555" height="340" fill="rgba(94,207,200,0.18)" />

                {/* UAE mainland */}
                <motion.path
                  d={UAE_MAIN}
                  fill="rgba(18,32,35,0.07)"
                  stroke="rgba(18,32,35,0.3)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }}
                />

                {/* City dots */}
                {cityDots.map((c) => {
                  const pt = toSVG(c.lon, c.lat);
                  return (
                    <g key={c.label}>
                      <motion.circle
                        cx={pt.x} cy={pt.y}
                        r={c.major ? 3 : 2}
                        fill={c.major ? "rgba(18,32,35,0.45)" : "rgba(18,32,35,0.28)"}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                      />
                      <text
                        x={pt.x + 5} y={pt.y + 1}
                        style={{ fontSize: c.major ? 7 : 5.5, fill: "rgba(18,32,35,0.45)", fontFamily: "Poppins", fontWeight: 600, letterSpacing: "0.06em" }}
                      >
                        {c.label}
                      </text>
                    </g>
                  );
                })}

                {/* Emirate region labels */}
                {emirateLabels.map((e) => {
                  const pt = toSVG(e.lon, e.lat);
                  return (
                    <motion.text
                      key={e.text}
                      x={pt.x} y={pt.y}
                      textAnchor="middle"
                      style={{ fontSize: 8, fill: "rgba(18,32,35,0.18)", fontFamily: "Poppins", fontWeight: 800, letterSpacing: "0.18em" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      {e.text}
                    </motion.text>
                  );
                })}

                {/* Project pins */}
                {projects.map((p, i) => {
                  const pt = toSVG(p.lon, p.lat);
                  const isHov = hovered === p.id;
                  return (
                    <g
                      key={p.id}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setHovered(p.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => goTo(p.slideIndex)}
                    >
                      {/* Outer pulse ring */}
                      <motion.circle
                        cx={pt.x} cy={pt.y} r={16}
                        fill="none" stroke={p.color} strokeWidth="1"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55 }}
                        style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
                      />
                      {/* Inner ring */}
                      <motion.circle
                        cx={pt.x} cy={pt.y} r={9}
                        fill="none" stroke={p.color} strokeWidth="1.2" strokeOpacity={0.5}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55 + 0.4 }}
                        style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
                      />
                      {/* Core pin */}
                      <motion.circle
                        cx={pt.x} cy={pt.y}
                        r={isHov ? 7 : 5}
                        fill={p.color}
                        stroke="white" strokeWidth="1.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.15, type: "spring", stiffness: 300 }}
                        style={{ filter: isHov ? `drop-shadow(0 0 5px ${p.color})` : "none", transition: "r 0.2s, filter 0.2s" }}
                      />
                      {/* Pin label on hover */}
                      {isHov && (
                        <motion.g initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>
                          <rect x={pt.x - 32} y={pt.y - 22} width={64} height={13} rx={3} fill={p.color} />
                          <text x={pt.x} y={pt.y - 13} textAnchor="middle"
                            style={{ fontSize: 6.5, fill: "#122023", fontFamily: "Poppins", fontWeight: 700 }}
                          >{p.tag}</text>
                        </motion.g>
                      )}
                    </g>
                  );
                })}

                {/* Legend — Gulf labels */}
                <text x={80} y={100} textAnchor="middle"
                  style={{ fontSize: 7.5, fill: "rgba(13,110,105,0.35)", fontFamily: "Poppins", fontWeight: 600, fontStyle: "italic" }}
                >PERSIAN GULF</text>
                <text x={548} y={155} textAnchor="middle" transform="rotate(-70, 548, 155)"
                  style={{ fontSize: 6.5, fill: "rgba(13,110,105,0.3)", fontFamily: "Poppins", fontWeight: 600, fontStyle: "italic" }}
                >GULF OF OMAN</text>
              </svg>
            </div>
          </motion.div>

          {/* Side panel */}
          <div className="flex flex-col gap-3">
            <AnimatePresence mode="wait">
              {hoveredProject ? (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, x: 12, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -12, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-4 bg-white border"
                  style={{ borderColor: `${hoveredProject.color}50` }}
                >
                  <div className="text-[9px] font-black uppercase tracking-widest mb-1.5"
                    style={{ color: hoveredProject.color === "#D4AF37" ? "#9c7f1c" : "#0d5e59" }}>
                    {hoveredProject.type}
                  </div>
                  <h3 className="text-sm font-black text-[#122023] mb-0.5 leading-snug">{hoveredProject.name}</h3>
                  <div className="text-[10px] text-[#122023]/40 mb-2">Client: {hoveredProject.client}</div>
                  <div className="text-lg font-black text-[#122023] mb-2">{hoveredProject.value}</div>
                  <p className="text-[10px] text-[#122023]/60 leading-relaxed mb-3">{hoveredProject.highlight}</p>
                  <motion.button
                    whileHover={{ x: 3 }}
                    onClick={() => goTo(hoveredProject.slideIndex)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#0d5e59] hover:text-[#122023] transition-colors"
                  >
                    View project details <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div key="ph" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="rounded-2xl p-6 border-2 border-dashed border-[#122023]/12 flex flex-col items-center justify-center text-center min-h-[160px]"
                >
                  <MapPin className="w-7 h-7 text-[#122023]/20 mb-2" />
                  <div className="text-xs text-[#122023]/30">Hover a pin on the map<br />to explore project details</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Project list */}
            <div className="flex flex-col gap-1.5">
              {projects.map((p, i) => (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                  onClick={() => goTo(p.slideIndex)}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border text-left transition-all ${
                    hovered === p.id ? "border-[#122023]/18 bg-white shadow-sm" : "border-[#122023]/8 bg-white/35 hover:bg-white/60"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-[#122023] truncate leading-tight">{p.name}</div>
                    <div className="text-[9px] text-[#122023]/40">{p.value}</div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#122023]/25 flex-shrink-0" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
