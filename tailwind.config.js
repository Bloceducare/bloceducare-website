/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":['Montserrat', 'sans-serif']
      },
      fontSize:{
        'small':"28px",
        'small-x':"38px",
        'x-small':"18px",
        // "a":"17px",
        'small-x':"26px",
        "big-x":"68px",
        'big':"88px",
        'big-xx': "58px"
      },
      lineHeight:{
        'medium':"84px",
        'medium-xl':"79px",
        'medium-x':"70px",
        'medium-xx':"48px",
        'small':"39px",
        'small-x':"41px",
        'small-xx':"28px"
      }
    },
    height:{
      "big":"437px"
    }
  },
  plugins: [],
}
