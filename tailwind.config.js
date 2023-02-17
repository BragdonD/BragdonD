/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/css/*.{html,css}", "./*.html"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      }
    },
  },
  plugins: [],
}