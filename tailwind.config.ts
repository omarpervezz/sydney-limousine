import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-cyan": "#008b8b",
      },
      borderColor: {
        blanchedalmond: "#ffebcd",
      },
      colors: {
        teal: {
          700: "#008b8b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
