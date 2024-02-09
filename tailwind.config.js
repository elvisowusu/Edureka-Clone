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
        'OfferHeading':'linear-gradient(to right,#0072d2,#00b6c3)',
        'OfferTimer':'linear-gradient(to left,#bdd377,#09adef)',
        'NavBg':'linear-gradient(to left,#248de4,#0c5397)',
      },
      backgroundColor:{
        'BeforeNavBg':'rgb(254, 161, 1)'
      },
    },
  },
  plugins: [],
}

