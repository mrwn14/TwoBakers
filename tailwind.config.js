/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        navPrimary : "#FFD0D0",
        bgColor : "#19202E",
        btnColor : "#0C3564",
        btnHover : "#037FFf",
      }
    },
  },
  plugins: [],
}
