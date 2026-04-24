import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#623CEA",
        border: "#1F1F1F",
        secondary: "#A1A1AA",
        surface: "#111111",
        surfaceLight: "#141414",
        surfaceAlt: "#141414",
        dark: "#0A0A0A",
        background: "#0A0A0A",
        card: "#111111",
        cardLight: "#141414",
        textSecondary: "#A1A1AA",
        cardBg: "#111111",
        cardBgAlt: "#141414",
        darkBg: "#0A0A0A",
        secondaryText: "#A1A1AA",
        brand: {
          bg: "#0A0A0A",
          card: "#111111",
          cardHover: "#141414",
          cardAlt: "#141414",
          border: "#1F1F1F",
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          accent: "#623CEA",
          text: "#FFFFFF",
          muted: "#A1A1AA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
