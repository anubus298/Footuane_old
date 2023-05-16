/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#03001C",
        mainGrey: "#301E67",
        mainPurple: "#5B8FB9",
        mainPink: "#ea638c",
        mainLightPink: "#1b263b",
      },
    },
  },
  plugins: [],
};

// mainBlack: "#1b2021",
// mainGrey: "#30343f",
// mainPurple: "#89023e",
// mainPink: "#ea638c",
// mainLightPink: "#ffd9da",