import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#87CEEB",
          DEFAULT: "#4682B4",
          dark: "#1E3A5F",
        },
        yacht: {
          hull: "#8B4513",
          deck: "#D4AF37",
          sail: "#FFFFFF",
        },
        egg: {
          shell: "#FFF8DC",
          eye: "#2c3e50",
        },
        storm: {
          sky: "#1a1a2e",
          cloud: "#2c3e50",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      animation: {
        wave: "wave 15s linear infinite",
        float: "float 3s ease-in-out infinite",
        "hampton-wave": "hamptonWave 2s ease-in-out infinite",
        "counter-float": "counterFloat 3s ease-in-out infinite",
        "icon-pulse": "iconPulse 2s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "cloud-move": "cloudMove 20s infinite linear",
        "rain-fall": "rainFall linear infinite",
        "storm-wave": "stormWaveMove 3s ease-in-out infinite",
        "yacht-storm": "yachtStorm 0.5s ease-in-out infinite",
        "lightning-flash": "lightningFlash 0.1s",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "egg-spin": "eggSpin 0.5s ease-in-out",
        "egg-shake": "eggShake 0.3s ease-in-out",
        "sail-away": "sailAway 3s ease-in-out forwards",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        hamptonWave: {
          "0%, 100%": { transform: "translateX(-50%) rotate(0deg)" },
          "25%": { transform: "translateX(-50%) rotate(-5deg)" },
          "75%": { transform: "translateX(-50%) rotate(5deg)" },
        },
        counterFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        iconPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.7" },
        },
        cloudMove: {
          "0%": { left: "-300px" },
          "100%": { left: "100%" },
        },
        rainFall: {
          "0%": { transform: "translateY(-100px)", opacity: "1" },
          "100%": { transform: "translateY(calc(100vh + 100px))", opacity: "0.3" },
        },
        stormWaveMove: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-30px)" },
        },
        yachtStorm: {
          "0%, 100%": { transform: "rotate(-15deg) translateY(0)" },
          "25%": { transform: "rotate(20deg) translateY(-10px)" },
          "50%": { transform: "rotate(-20deg) translateY(-5px)" },
          "75%": { transform: "rotate(15deg) translateY(-10px)" },
        },
        lightningFlash: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        eggSpin: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
        eggShake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px) rotate(-5deg)" },
          "75%": { transform: "translateX(5px) rotate(5deg)" },
        },
        sailAway: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(200px) translateY(-50px)" },
          "100%": { transform: "translateX(400px) translateY(0)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

