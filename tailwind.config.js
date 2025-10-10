/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      colors: {
        brand: "#9a0906", // contoh warna khusus untuk button
      },
    },
  },
  plugins: [],
};