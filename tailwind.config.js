/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        maroon: "#5D001E",
        lightPink: "#E3AFBC",
        beetroot: "#9A1750",
        sharpPink: "#EE4C7C",
        modalBg: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
  },
};
