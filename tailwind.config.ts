import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      background: {
        "primary": "#151c2c",
        "soft": "#182237",
      },
      colors: {
        "soft": "#b7bac1",
        "card": "#182237",
        "cardHover": "#2e374a",
        "pending": "#f7cb7375",
        "done": "#afd6ee75",
        "cancelled": "#f7737375",
      },
    },
  },
  plugins: [
  ],
  safelist: [
    "bg-slate-800"
  ],
} satisfies Config;
export default config;
