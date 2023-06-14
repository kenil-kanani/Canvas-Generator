/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'main': '#0c0c0c',
      'lets_talk': '#5f9af4',
      'hire_me': '#2e2d2e',
      'grad_blur': '#333333',
    },
    screens: {
      'sm': '891px',
      // => @media (min-width: 576px) { ... }

      '1270px': {'max': '1270px'},
      '1160px': {'max': '1160px'},
      '1020px': {'max': '1020px'},
      '890px': {'max': '890px'},
      '990px': {'max': '990px'},

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      // backgroundImage: {
      //   'img': "url('/Users/kenil/Desktop/gtu/src/assets/AEIOU.jpg')",
      // },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}