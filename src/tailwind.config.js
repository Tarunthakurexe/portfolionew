/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <-- important for toggling via "dark" class
  theme: {
    extend: {},
  },
  plugins: [],
};