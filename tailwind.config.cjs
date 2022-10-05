/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      colors: {
        primary: '#1dca7f',
        secondary: '#F77E10',
        third: '#242F9B',
        dimWhite: 'rgba(255, 255, 255, 0.8)'
      },
      fontFamily: {
        DynaPuff: ['DynaPuff', 'sans-serif']
      }
    },
  },
  plugins: [],
}
