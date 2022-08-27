const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: colors.blue[500],
        dark: colors.blue[600],
      },
      danger: {
        DEFAULT: colors.red[500],
        dark: colors.red[600],
      },
      warning: {
        DEFAULT: colors.amber[400],
        dark: colors.yellow[500],
      },
      detail: {
        DEFAULT: colors.gray[400],
      },
    },
    extend: {},
  },
  plugins: [],
};
