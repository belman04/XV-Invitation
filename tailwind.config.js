/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa-palo': '#E8B7C1',
        'rosa-mexicano': '#F2A1B3',
        'rosa-empolvado': '#F6C1CC',
        'beige-claro': '#F5EFE6',
        'beige-arena': '#EADDC8',
        'marfil': '#FFF8F0',
        'cafe': '#B8A48A',
      },
      fontFamily: {
        // otras fuentes ej: 'playfair': ['Playfair Display', 'serif']
        'serif': ['Georgia', 'serif'], 
      }
    },
  },
  plugins: [],
}

