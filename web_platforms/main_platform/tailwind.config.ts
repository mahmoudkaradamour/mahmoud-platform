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
        primary: "#0A84FF",
        secondary: "#30B0C7",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        error: "#EF4444",
        success: "#10B981",
        "enterprise-gold": "#D4AF37",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
