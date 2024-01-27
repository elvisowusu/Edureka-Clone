/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        openSans:'Open Sans, sans-serif',
      },
      backgroundImage:{
        'offerBtn':'linear-gradient(to left,#fad961,#f76b1c)',
      }
    },
  },
  plugins: [],
}

