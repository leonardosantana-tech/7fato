import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        header: "#141414",
        primary: "#09a401",
        gbg: "#0b2918",
        bbg: "#010101",
      },
    },
  },
  plugins: [],
};

export default config;
