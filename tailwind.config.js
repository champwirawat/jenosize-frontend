const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: colors.blue[500],
      },
      detail: {
        DEFAULT: colors.gray[400],
      },
    },
    extend: {},
  },
  plugins: [],
};
