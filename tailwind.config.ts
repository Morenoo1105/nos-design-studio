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
        stroke: "url('/nos/images/stroke.png')",
        circles: "url('/nos/images/circles.png')",
        price1: "url('/nos/images/price1.png')",
        price2: "url('/nos/images/price2.png')",
        price3: "url('/nos/images/price3.png')",
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
    },
  },
  plugins: [],
};
export default config;
