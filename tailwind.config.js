/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondo
        base: "#F9F7F4",

        // Cards
        surface: "#F0EBE6",

        "accent-nude": "#EADCD9",
        "accent-sage": "#E6B0A6",
        "ui-detail": "#DCD3CD",

        // Texto Apoyo
        "text-muted": "#9C8F85",
        // Texto Principal
        "text-primary": "#4A3E38",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        script: [
          '"Snell Roundhand"',
          '"Apple Chancery"',
          '"Edwardian Script ITC"',
          '"Lucida Calligraphy"',
          '"Brush Script MT"',
          "cursive",
        ],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
