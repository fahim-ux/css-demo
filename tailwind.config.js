/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif'],
      },
      gridTemplateColumns:
      {
        '70/30':'70% 28%',
      },
      colors: {
        instagram: '#E4405F',
        facebookBlue: '#1877F2',
      },
      fontSize:{
        c1:'5 rem'
      }
    },
  },
  plugins: [],
}