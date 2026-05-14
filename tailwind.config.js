/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fafaf8",
        secondary: "#555452",
        tertiary: "#f0ede6",
        "black-100": "#1a1917",
        "black-200": "#333230",
        "white-100": "#fafaf8",
      },
      boxShadow: {
        card: "0 0 0 1px #e8e4dc",
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
