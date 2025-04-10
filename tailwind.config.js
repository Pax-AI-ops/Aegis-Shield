import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omegaBlue: "#00A6ED",
        deepBlack: "#0A0A0A",
        neonAccent: "#00FFC2",
        danger: "#FF3C38",
      },
      fontFamily: {
        futuristic: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
