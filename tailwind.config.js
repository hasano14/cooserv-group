const colors = require('tailwindcss/colors')
//Made changes into the terminal and reinstall all npm to get the changes to work
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#011627',
        secondary: '#1c7293',
        backgroundColor: '#ebebeb',
        smokyblue: '#7196a6',
        white: '#fff',
        black: '#000',
        backgroundLight: '#f1faee',
        text1Light: '#011627',
        text2Light: '#484b47',
        buttonColor: '#a8dadc',
        backgroundDark: '#011627',
        text1Dark: '#a4aaa2',
        text2Dark: '#f1faee',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
