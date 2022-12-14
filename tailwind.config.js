/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
    },
    colors: {
      primary: "#dd0011",
      accent: "#9BBE1A",
      "gray-100": "#C1C1C1",
      black: "#000000",
      white: "#FFFFFF",
    },
    screens: {
      touch: { raw: "(hover:none)" },
      small: "450px",
      medium: "768px",
      large: "1024px",
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
