/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: "#E8B33B",
      dark: "#0A0909",
      orange: "#E57D42",
      light: "#F9EEDB",
      beige: "#F2E5CF",
      gray: "#706F6F",
      darkgray: "#403D37",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      roboto: ["Roboto Condensed", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [],
};
