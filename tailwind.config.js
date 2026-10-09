/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090b",
        surface: "#101216",
        "surface-card": "#161920",
        border: "#20242e",
        accent: {
          green: "#00ff87",
          cyan: "#60efff",
          amber: "#ff9f1c",
          red: "#ff3366",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widestx: "0.28em",
        ultra: "0.38em",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 255, 135, 0.35)",
        "glow-cyan": "0 0 40px -10px rgba(96, 239, 255, 0.35)",
        "glow-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
