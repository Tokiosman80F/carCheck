/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor:"#FF3811",
        primaryText:"black",
        secondaryText:"#444"

      },
    },
  },
  plugins: [require("daisyui")],
};
