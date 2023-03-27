/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#07172b",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
