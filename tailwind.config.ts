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
        dark: "#212121",
        fluor: "#B5FF24",
        light: "#ACACAC",
      },
      fontFamily: {
        manrope: ["var(--manrope)"],
        kanit: ["var(--kanit)"],
      },
      backgroundImage: {
        stroke: "url('/demoWebs/nos/stroke.png')",
        circles: "url('/demoWebs/nos/circles.png')",
        price1: "url('/demoWebs/nos/price1.png')",
        price2: "url('/demoWebs/nos/price2.png')",
        price3: "url('/demoWebs/nos/price3.png')",
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
    },
  },
  plugins: [],
};
export default config;
