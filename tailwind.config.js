/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0c0c0c",
        secondary: "#5e5e5e",
        tertiary: "#131313",
        "black-100": "#0c0c0c",
        "black-200": "#080808",
        "white-100": "#e5dfd4",
      },
      boxShadow: {
        card: "0 0 0 1px #1f1f1f",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        heading: ['"EB Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
