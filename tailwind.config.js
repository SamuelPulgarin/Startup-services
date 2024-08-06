/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '150': '50rem',
        '132': '32rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {

        // predefined colors Tailwind CSS
        black: colors.black,
        indigo: colors.indigo,
        white: colors.white,
        gray: colors.gray,

        // custom colors


      }
    },
  },
  plugins: [],
}