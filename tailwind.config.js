/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-up": { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slide-left": { "0%": { opacity: "0", transform: "translateX(40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "slide-right": { "0%": { opacity: "0", transform: "translateX(-40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.85)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "float": { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        "pulse-glow": {
          "0%,100%": { "box-shadow": "0 0 20px rgba(158,243,238,0.3)" },
          "50%": { "box-shadow": "0 0 40px rgba(158,243,238,0.8), 0 0 80px rgba(158,243,238,0.4)" }
        },
        "spin-slow": { "from": { transform: "rotate(0deg)" }, "to": { transform: "rotate(360deg)" } },
        "bar-fill": { "0%": { transform: "scaleY(0)" }, "100%": { transform: "scaleY(1)" } },
        "shimmer": {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" }
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.8)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        "line-draw": {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2)", opacity: "0" }
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "slide-left": "slide-left 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "slide-right": "slide-right 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "bar-fill": "bar-fill 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
        "shimmer": "shimmer 3s linear infinite",
        "counter-up": "counter-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "line-draw": "line-draw 1s ease-out forwards",
        "ping-slow": "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
