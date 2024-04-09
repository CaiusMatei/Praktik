/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    nightwind: {
      fixedClass: "prevent-switch", // default 'nightwind-prevent'
      fixedBlockClass: "prevent-switch-block", // default 'nightwind-prevent-block'
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('nightwind'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}

