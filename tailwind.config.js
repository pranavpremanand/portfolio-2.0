/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DEFAULT: "#2d2e32",
        "link-shadow-color": "#74B9FF",
      },
    },
  },
  plugins: [],
};
