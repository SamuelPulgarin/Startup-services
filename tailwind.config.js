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
        '128': '28rem',
        '130': '30rem',
        '132': '32rem',
        '136': '36rem',
        '150': '50rem',
        '168': '68rem',
        '170': '70rem',
        '174': '74rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        architects: ['Architects Daughter', 'cursive']
      },
      colors: {

        // predefined colors Tailwind CSS
        black: colors.black,
        indigo: colors.indigo,
        white: colors.white,
        gray: colors.gray,

        // custom colors
      },
      animation: {
        'slow-ping': 'ping 10s cubic-bezier(0, 0, 0.1, 1) infinite',
      }
    },
  },
  plugins: [],
}