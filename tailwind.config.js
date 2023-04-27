/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#1C2230',
        mediumgray: '#181F2B',
        darkgray: '#0C1524',
        lightblue: '#63DDD5'
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      screens: {
        xs: '430px',
        xl: '1130px',
      }
    },
  },
  plugins: [],
}

