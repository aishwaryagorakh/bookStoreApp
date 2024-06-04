// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}", // Include other directories if necessary
  ],
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
