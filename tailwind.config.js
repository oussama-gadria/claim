/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", 
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      colors: {
        blue: "#255174",
        gray:"#e8edde"
      },
      screens: {
        sm: "640px",
        md: "768px",
        xl: "1024px",
        lg: "1280px",
      },
      fontFamily: {
        sans: ['Nunito Sans',"sans-serif"],
        serif: ['ui-serif', 'Georgia'],
      },
    },
    plugins: [],
  },
  plugins: [],
}