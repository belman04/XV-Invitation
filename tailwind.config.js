/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondos
        base: "#FBF8F4",
        "base-warm": "#F5EDE5",

        // Superficies
        surface: "#F0E8DF",

        // Acentos
        "accent-rose": "#C4937A",
        "accent-rose-light": "#D4A68F",
        "accent-rose-dark": "#A87A63",
        "accent-blush": "#E8D5CB",
        "accent-sage": "#B8C4B8",

        // UI
        "ui-detail": "#D8CFC7",

        // Texto
        "text-primary": "#3D3530",
        "text-muted": "#8A7E76",
        "text-light": "#A89E95",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "bounce-slow": "bounce-slow 4s infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(-10px)" }, // Sube
          "10%": { transform: "translateY(0)" }, // Baja
          "15%": { transform: "translateY(-5px)" }, // Rebote
          "20%": { transform: "translateY(0)" }, // Baja y se queda quieto el 80% restante del tiempo
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
