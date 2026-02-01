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
        "text-muted": "#8A7A70",
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
        "bounce-slow": "bounce-slow 4s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(-10px)" }, // Sube
          "10%": { transform: "translateY(0)" }, // Baja
          "15%": { transform: "translateY(-5px)" }, // Rebote
          "20%": { transform: "translateY(0)" }, // Baja y se queda quieto el 80% restante del tiempo
        },
      },
    },
  },
  plugins: [],
};
