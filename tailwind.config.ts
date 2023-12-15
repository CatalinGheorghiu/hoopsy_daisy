import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-playfair)"],
        body: ["var(--font-lato)"]
      },
      fontSize: {},
      colors: {
        "custom-black": {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E6E6E6",
          400: "#BDBDBD",
          500: "#808080",
          600: "#545454",
          700: "#424242",
          800: "#292929",
          900: "#1A1A1A"
        },
        "custom-purple": {
          100: "#F9F7FC",
          200: "#EDE8F7",
          300: "#C5B5E3",
          400: "#B49FDA",
          500: "#977BCC",
          600: "#8565C3",
          700: "#7A56BD",
          800: "#6340A5",
          900: "#583993"
        },
        "custom-green": "#5FDD82"
      }
    }
  },
  plugins: []
};
export default config;
