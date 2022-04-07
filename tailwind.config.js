const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#0b1120',
        secondary: '0ea5e9 ',
        smokyblue: '#7196a6',
        white: '#fff',
        black: '#000',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
