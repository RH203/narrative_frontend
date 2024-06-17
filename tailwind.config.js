/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        'xs': '320px',
      },
      colors: {},
    },
  },
  plugins: [require("daisyui")],
};
