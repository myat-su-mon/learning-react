/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cus-bg" : "#fffffe",
        "btn-bg" : "#123456",
        secondary: "#e3f6f5",
        primary: "#272324"
      }
    },
  },
  plugins: [],
}
