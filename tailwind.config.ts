import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        header: ["var(--font-playfair)"],
        body: ["var(--font-lato)"]
      },
      colors: {
        "custom-black": {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(0, 0%, 96%)",
          300: "hsl(0, 0%, 90%)",
          400: "hsl(0, 0%, 74%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 33%)",
          700: "hsl(0, 0%, 26%)",
          800: "hsl(0, 0%, 16%)",
          900: "hsl(0, 0%, 10%)"
        },
        "custom-purple": {
          100: "hsl(264, 45%, 98%)",
          200: "hsl(260, 48%, 94%)",
          300: "hsl(261, 45%, 80%)",
          400: "hsl(261, 44%, 74%)",
          500: "hsl(261, 44%, 64%)",
          600: "hsl(260, 44%, 58%)",
          700: "hsl(261, 44%, 54%)",
          800: "hsl(261, 44%, 45%)",
          900: "hsl(261, 44%, 40%)"
        },
        "custom-green": "hsl(137, 65%, 62%)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        4: "4px",
        6: "6px",
        8: "10px",
        50: "50px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      boxShadow: {
        "custom-1":
          "0px 2px 10px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.20)",
        "custom-2": "0px 1px 8px 0px rgba(0, 0, 0, 0.15);"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
