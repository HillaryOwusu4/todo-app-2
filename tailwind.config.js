/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { width: {
      '90': '90%',
      '15':'10%'
    },height: {
      '10': '10%',
      '15':'15%'
    }},
  },
  plugins: [],
}
