/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00217d",
        secondary: "#64748b",
        destructive: "#ef4444",
        muted: "#f1f5f9",
        accent: "#f8fafc",
        popover: "#ffffff",
        background: "#ffffff",
        foreground: "#020817",
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#00217d",
        card: "#ffffff",
        "card-foreground": "#020817",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
} 