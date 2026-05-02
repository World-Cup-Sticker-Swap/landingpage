import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: {
          DEFAULT: "#18181B",
          soft: "#52525B",
          muted: "#71717A",
          subtle: "#A1A1AA",
          ghost: "#D4D4D8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#F4F4F5",
          raised: "#E4E4E7",
          dark: "#0A0A0A",
          darker: "#1F1F23",
        },
        brand: {
          DEFAULT: "#8B5CF6",
          dark: "#7C3AED",
          soft: "#8B5CF620",
        },
        accent: {
          teal: "#14B8A6",
          pink: "#F472B6",
          yellow: "#FACC15",
        },
        app: {
          blue: "#3B82F6",
          "blue-dark": "#2563EB",
          "blue-deep": "#1E40AF",
          "blue-soft": "#EFF6FF",
          green: "#10B981",
          "green-soft": "#D1FAE5",
          "green-deep": "#047857",
          orange: "#F97316",
          "orange-soft": "#FFEDD5",
          yellow: "#FBBF24",
          bg: "#F4F4F8",
          navy: "#1E293B",
          slate: "#64748B",
          mute: "#94A3B8",
          border: "#E2E8F0",
        },
      },
      borderRadius: {
        pill: "100px",
      },
      maxWidth: {
        page: "1440px",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
