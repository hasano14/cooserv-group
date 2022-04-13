const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
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
        text2Light: '#7a7f79',
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
