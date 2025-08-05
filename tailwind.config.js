/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Enables dark mode using a class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small breakpoint for better mobile support
      },
    },
  },
  plugins: [],
};
