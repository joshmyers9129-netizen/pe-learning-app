import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        access: "#2294BD",
        cream: "#F0E6DD",
        rust: "#D9532B",
        amber: "#FAA51A",
        "light-cream": "#FBF7F3",
        muted: "#404040",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
