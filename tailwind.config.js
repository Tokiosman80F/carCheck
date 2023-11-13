/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor:"#FF3811",
        dark1:"black",
        dark2:"#444",
        dark3:"#737373"

      },
    },
  },
  plugins: [require("daisyui")],
};
