/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        fontFamily: {
            din:[ "DIN", "sans-serif"],
            din_regular:[ "DIN-RegularAlternate","sans-serif"],
            din_medium:[ "DIN-Medium","sans-serif"],
        }
    },
  },
  plugins: [],
}

